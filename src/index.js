// GI Open House — Cloudflare Worker
// Static files in /public are served automatically. This Worker only handles /api/* routes.
import { SESSIONS } from "../public/content.js";

const ROLES = ["student", "parent", "teacher", "other"];
const MAX_GUESTS = 5;
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O/1/I/L to avoid confusion

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const clean = (v, max) => String(v ?? "").trim().slice(0, max);

function makeCode(len = 6) {
  const bytes = crypto.getRandomValues(new Uint8Array(len));
  return Array.from(bytes, (b) => CODE_ALPHABET[b % CODE_ALPHABET.length]).join("");
}

async function seatsTaken(db) {
  const { results } = await db
    .prepare("SELECT session, COALESCE(SUM(guests),0) AS taken FROM registrations GROUP BY session")
    .all();
  return Object.fromEntries(results.map((r) => [r.session, r.taken]));
}

// ---------- Public API ----------
async function getSessions(env) {
  const taken = await seatsTaken(env.DB);
  return json({
    sessions: SESSIONS.map((s) => ({
      id: s.id,
      capacity: s.capacity,
      remaining: Math.max(0, s.capacity - (taken[s.id] || 0)),
    })),
  });
}

async function register(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid" }, 400);
  }

  // Honeypot filled → pretend success so bots don't retry.
  if (body.website) return json({ ok: true, code: makeCode() });

  const r = {
    name: clean(body.name, 100),
    email: clean(body.email, 120).toLowerCase(),
    phone: clean(body.phone, 20),
    role: clean(body.role, 20),
    grade: clean(body.grade, 20) || null,
    school: clean(body.school, 120) || null,
    session: clean(body.session, 40),
    guests: Number.parseInt(body.guests, 10),
    source: clean(body.source, 40) || null,
    lang: body.lang === "en" ? "en" : "th",
  };
  const session = SESSIONS.find((s) => s.id === r.session);

  const valid =
    r.name &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email) &&
    /^[0-9+\-\s()]{8,20}$/.test(r.phone) &&
    ROLES.includes(r.role) &&
    session &&
    Number.isInteger(r.guests) && r.guests >= 1 && r.guests <= MAX_GUESTS &&
    body.consent === true;
  if (!valid) return json({ error: "invalid" }, 400);

  // Insert only if seats remain — done in ONE statement so two people
  // submitting at the same moment can't overbook the session.
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = makeCode();
    try {
      const res = await env.DB.prepare(
        `INSERT INTO registrations (code, name, email, phone, role, grade, school, session, guests, source, lang)
         SELECT ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11
         WHERE (SELECT COALESCE(SUM(guests),0) FROM registrations WHERE session = ?8) + ?9 <= ?12`
      )
        .bind(code, r.name, r.email, r.phone, r.role, r.grade, r.school, r.session, r.guests, r.source, r.lang, session.capacity)
        .run();
      if (res.meta.changes === 0) return json({ error: "full" }, 409);
      return json({ ok: true, code });
    } catch (e) {
      const msg = String(e?.message || e);
      if (msg.includes("registrations.email")) return json({ error: "duplicate" }, 409);
      if (msg.includes("registrations.code")) continue; // code collision, try another
      console.error("register failed", msg);
      return json({ error: "server" }, 500);
    }
  }
  return json({ error: "server" }, 500);
}

// ---------- Admin API (needs ADMIN_KEY secret) ----------
function isAdmin(request, env) {
  if (!env.ADMIN_KEY) return false;
  const header = request.headers.get("authorization") || "";
  return header === `Bearer ${env.ADMIN_KEY}`;
}

const CSV_COLS = ["code", "name", "email", "phone", "role", "grade", "school", "session", "guests", "source", "lang", "checked_in", "created_at"];
const csvCell = (v) => {
  let s = String(v ?? "");
  if (/^[=+\-@]/.test(s)) s = "'" + s; // stop spreadsheet formula injection
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

async function adminList(url, env) {
  const { results } = await env.DB.prepare(`SELECT ${CSV_COLS.join(",")} FROM registrations ORDER BY id`).all();
  if (url.searchParams.get("format") === "csv") {
    const csv = "﻿" + [CSV_COLS.join(","), ...results.map((r) => CSV_COLS.map((c) => csvCell(r[c])).join(","))].join("\n");
    return new Response(csv, {
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": `attachment; filename="gi-openhouse-registrations.csv"`,
        "cache-control": "no-store",
      },
    });
  }
  return json({ registrations: results });
}

async function adminCheckin(request, env) {
  const { code, undo } = await request.json().catch(() => ({}));
  const c = clean(code, 12).toUpperCase();
  if (!c) return json({ error: "invalid" }, 400);
  const row = await env.DB.prepare(`SELECT ${CSV_COLS.join(",")} FROM registrations WHERE code = ?`).bind(c).first();
  if (!row) return json({ error: "not_found" }, 404);
  const already = row.checked_in === 1;
  await env.DB.prepare("UPDATE registrations SET checked_in = ? WHERE code = ?").bind(undo ? 0 : 1, c).run();
  return json({ ok: true, already, registration: { ...row, checked_in: undo ? 0 : 1 } });
}

// ---------- Router ----------
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    try {
      if (pathname === "/api/sessions" && method === "GET") return await getSessions(env);
      if (pathname === "/api/register" && method === "POST") return await register(request, env);

      if (pathname.startsWith("/api/admin/")) {
        if (!env.ADMIN_KEY) return json({ error: "admin_disabled" }, 503);
        if (!isAdmin(request, env)) return json({ error: "unauthorized" }, 401);
        if (pathname === "/api/admin/registrations" && method === "GET") return await adminList(url, env);
        if (pathname === "/api/admin/checkin" && method === "POST") return await adminCheckin(request, env);
      }

      if (pathname.startsWith("/api/")) return json({ error: "not_found" }, 404);
    } catch (e) {
      console.error(e);
      return json({ error: "server" }, 500);
    }

    return env.ASSETS.fetch(request);
  },
};
