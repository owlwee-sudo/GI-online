import { EVENT, ABOUT, SCHEDULE, SESSIONS, CATEGORIES, MAP, FAQ } from "./content.js";

// ---------- UI text (buttons, labels) ----------
const UI = {
  th: {
    brand: "Open House",
    "nav.about": "เกี่ยวกับ GI", "nav.schedule": "กำหนดการ", "nav.map": "แผนที่บูธ", "nav.faq": "คำถามที่พบบ่อย", "nav.register": "ลงทะเบียน",
    "hero.eyebrow": "งานเปิดบ้าน", "hero.cta": "ลงทะเบียนเข้าร่วม", "hero.map": "ดูแผนที่บูธ",
    "cd.d": "วัน", "cd.h": "ชั่วโมง", "cd.m": "นาที", "cd.s": "วินาที", "cd.live": "🎉 งานเริ่มแล้ว! แล้วพบกันนะ",
    "schedule.title": "กำหนดการ",
    "map.title": "แผนที่บูธ", "map.hint": "แตะที่บูธเพื่อดูรายละเอียด หรือกรองตามหมวดหมู่", "map.all": "ทั้งหมด", "map.pick": "เลือกบูธบนแผนที่เพื่อดูรายละเอียด",
    "reg.title": "ลงทะเบียนเข้าร่วมงาน", "reg.sub": "สำรองที่นั่งล่วงหน้า แล้วแสดงรหัสยืนยันที่จุดลงทะเบียนในวันงาน",
    "reg.name": "ชื่อ-นามสกุล", "reg.email": "อีเมล", "reg.phone": "เบอร์โทรศัพท์", "reg.role": "สถานะ", "reg.choose": "— เลือก —",
    "reg.role.student": "นักเรียน", "reg.role.parent": "ผู้ปกครอง", "reg.role.teacher": "ครู / บุคลากร", "reg.role.other": "อื่น ๆ",
    "reg.grade": "ระดับชั้นปัจจุบัน (นักเรียน)", "reg.na": "— ไม่ระบุ —", "reg.school": "โรงเรียน (ไม่บังคับ)",
    "reg.session": "รอบที่ต้องการ", "reg.guests": "จำนวนคน", "reg.left": "เหลือ {n} ที่", "reg.full": "เต็มแล้ว",
    "reg.source": "รู้จักงานนี้จากที่ไหน", "reg.src.friend": "เพื่อน / คนรู้จัก", "reg.src.school": "โรงเรียน / ครู",
    "reg.consent": "ยินยอมให้ผู้จัดงานใช้ข้อมูลนี้เพื่อการติดต่อเกี่ยวกับงาน GI Open House เท่านั้น",
    "reg.submit": "ยืนยันการลงทะเบียน", "reg.sending": "กำลังส่ง…",
    "reg.done": "ลงทะเบียนสำเร็จ! 🎉", "reg.showCode": "แคปหน้าจอนี้ไว้ และแสดงรหัสนี้ที่จุดลงทะเบียน",
    "reg.again": "ลงทะเบียนอีกคน", "reg.t.name": "ชื่อ", "reg.t.session": "รอบ", "reg.t.guests": "จำนวน",
    "err.required": "กรุณากรอกข้อมูลให้ครบ", "err.email": "รูปแบบอีเมลไม่ถูกต้อง", "err.phone": "เบอร์โทรไม่ถูกต้อง",
    "err.session": "กรุณาเลือกรอบ", "err.consent": "กรุณากดยินยอมก่อนส่ง", "err.network": "ส่งไม่สำเร็จ ลองใหม่อีกครั้ง",
    "err.full": "รอบนี้ที่นั่งไม่พอแล้ว กรุณาเลือกรอบอื่น", "err.duplicate": "อีเมลนี้ลงทะเบียนรอบนี้แล้ว",
    "faq.title": "คำถามที่พบบ่อย", "foot.contact": "ติดต่อ", "foot.directions": "เส้นทาง",
  },
  en: {
    brand: "Open House",
    "nav.about": "About GI", "nav.schedule": "Schedule", "nav.map": "Booth map", "nav.faq": "FAQ", "nav.register": "Register",
    "hero.eyebrow": "Open House", "hero.cta": "Register now", "hero.map": "See the booth map",
    "cd.d": "days", "cd.h": "hours", "cd.m": "min", "cd.s": "sec", "cd.live": "🎉 It's happening now — see you there!",
    "schedule.title": "Schedule",
    "map.title": "Booth map", "map.hint": "Tap a booth for details, or filter by category.", "map.all": "All", "map.pick": "Pick a booth on the map to see what's there.",
    "reg.title": "Register to attend", "reg.sub": "Reserve your spot, then show your code at the check-in desk on the day.",
    "reg.name": "Full name", "reg.email": "Email", "reg.phone": "Phone", "reg.role": "I am a…", "reg.choose": "— Choose —",
    "reg.role.student": "Student", "reg.role.parent": "Parent", "reg.role.teacher": "Teacher / Staff", "reg.role.other": "Other",
    "reg.grade": "Current grade (students)", "reg.na": "— N/A —", "reg.school": "School (optional)",
    "reg.session": "Session", "reg.guests": "People", "reg.left": "{n} left", "reg.full": "Full",
    "reg.source": "How did you hear about us?", "reg.src.friend": "Friend", "reg.src.school": "School / Teacher",
    "reg.consent": "I agree that the organizers may use this information only to contact me about the GI Open House.",
    "reg.submit": "Confirm registration", "reg.sending": "Sending…",
    "reg.done": "You're registered! 🎉", "reg.showCode": "Screenshot this and show the code at check-in.",
    "reg.again": "Register someone else", "reg.t.name": "Name", "reg.t.session": "Session", "reg.t.guests": "People",
    "err.required": "Please fill in all required fields.", "err.email": "That email doesn't look right.", "err.phone": "That phone number doesn't look right.",
    "err.session": "Please pick a session.", "err.consent": "Please tick the consent box.", "err.network": "Couldn't send. Please try again.",
    "err.full": "Not enough seats left in that session — please pick another.", "err.duplicate": "This email is already registered for that session.",
    "faq.title": "FAQ", "foot.contact": "Contact", "foot.directions": "Directions",
  },
};

// ---------- Small helpers ----------
const $ = (s) => document.querySelector(s);
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let lang = store.get("lang") || "th"; // Thai by default
let activeCat = "all";
let selectedBooth = null;
let seatsLeft = {}; // sessionId -> remaining seats (from server)

const t = (key) => UI[lang][key] ?? key;
const L = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.th : obj ?? "");

// ---------- Render ----------
function renderStatic() {
  document.documentElement.lang = lang;
  $("#langBtn").textContent = lang === "th" ? "EN" : "TH";
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));

  document.title = `${L(EVENT.name)}`;
  $("#eventName").textContent = L(EVENT.name);
  $("#eventTagline").textContent = L(EVENT.tagline);
  $("#eventDate").textContent = L(EVENT.dateText);
  $("#eventTime").textContent = L(EVENT.timeText);
  $("#eventVenue").textContent = L(EVENT.venue);
  $("#eventVenue").href = EVENT.mapsUrl;

  $("#aboutTitle").textContent = L(ABOUT.title);
  $("#aboutBody").textContent = L(ABOUT.body);
  $("#highlights").innerHTML = ABOUT.highlights
    .map((h) => `<div class="card"><div class="card-icon" aria-hidden="true">${esc(h.icon)}</div><h3>${esc(L(h.title))}</h3><p>${esc(L(h.text))}</p></div>`)
    .join("");
  $("#stats").innerHTML = ABOUT.stats
    .map((s) => `<div><div class="stat-val">${esc(s.value)}</div><div class="stat-lbl">${esc(L(s.label))}</div></div>`)
    .join("");

  $("#timeline").innerHTML = SCHEDULE.map(
    (s) => `<li><div class="tl-time">${esc(s.time)}</div><div><div class="tl-title">${esc(L(s.title))}</div>${L(s.place) ? `<div class="tl-place">📍 ${esc(L(s.place))}</div>` : ""}</div></li>`
  ).join("");

  $("#faqList").innerHTML = FAQ.map((f) => `<details><summary>${esc(L(f.q))}</summary><p>${esc(L(f.a))}</p></details>`).join("");

  $("#footName").textContent = L(EVENT.name);
  $("#footVenue").textContent = `${L(EVENT.dateText)} · ${L(EVENT.venue)}`;
  const links = [`<a href="mailto:${esc(EVENT.contactEmail)}">${t("foot.contact")}</a>`, `<a href="${esc(EVENT.mapsUrl)}" target="_blank" rel="noopener">${t("foot.directions")}</a>`];
  if (EVENT.instagram) links.push(`<a href="${esc(EVENT.instagram)}" target="_blank" rel="noopener">Instagram</a>`);
  $("#footLinks").innerHTML = links.join("");

  renderMap();
  renderSessions();
  renderTicket();
  tick();
}

// ---------- Countdown ----------
function tick() {
  const el = $("#countdown");
  const diff = new Date(EVENT.startsAt) - Date.now();
  if (Number.isNaN(diff)) return (el.innerHTML = "");
  if (diff <= 0) return (el.innerHTML = `<div class="cd-live">${t("cd.live")}</div>`);
  const parts = [
    [Math.floor(diff / 864e5), "cd.d"],
    [Math.floor((diff / 36e5) % 24), "cd.h"],
    [Math.floor((diff / 6e4) % 60), "cd.m"],
    [Math.floor((diff / 1e3) % 60), "cd.s"],
  ];
  el.innerHTML = parts.map(([n, k]) => `<div class="cd-box"><div class="cd-num">${String(n).padStart(2, "0")}</div><div class="cd-lbl">${t(k)}</div></div>`).join("");
}
setInterval(tick, 1000);

// ---------- Map ----------
const catColor = (id) => CATEGORIES.find((c) => c.id === id)?.color || "#888";

function renderMap() {
  $("#mapFilters").innerHTML = [{ id: "all", label: { th: t("map.all"), en: t("map.all") } }, ...CATEGORIES]
    .map((c) => `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${activeCat === c.id}">${c.color ? `<span class="chip-dot" style="background:${c.color}"></span>` : ""}${esc(L(c.label))}</button>`)
    .join("");

  const rooms = MAP.rooms
    .map((r) => `<rect class="room" x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="1.5"/><text class="room-lbl" x="${r.x + 1.2}" y="${r.y + 3}">${esc(L(r.label))}</text>`)
    .join("");
  const booths = MAP.booths
    .map((b) => {
      const dim = activeCat !== "all" && b.cat !== activeCat ? " dim" : "";
      const sel = selectedBooth === b.id ? " sel" : "";
      return `<g class="booth${dim}${sel}" data-id="${b.id}" tabindex="0" role="button" aria-label="${esc(b.id + " " + L(b.name))}">
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="1.2" fill="${catColor(b.cat)}"/>
        <text x="${b.x + b.w / 2}" y="${b.y + b.h / 2 + 0.9}" text-anchor="middle">${esc(b.id)}</text></g>`;
    })
    .join("");
  const e = MAP.entrance;
  const entrance = e ? `<text class="entrance" x="${e.x}" y="${e.y + 3}" text-anchor="middle">▲ ${esc(L(e.label))}</text>` : "";
  $("#floorplan").innerHTML = rooms + booths + entrance;
  renderBoothPanel();
}

function renderBoothPanel() {
  const b = MAP.booths.find((x) => x.id === selectedBooth);
  const panel = $("#boothPanel");
  if (!b) return (panel.innerHTML = `<p class="muted">${t("map.pick")}</p>`);
  const cat = CATEGORIES.find((c) => c.id === b.cat);
  panel.innerHTML = `<span class="booth-id" style="background:${catColor(b.cat)}">${esc(b.id)}</span>
    <h3>${esc(L(b.name))}</h3><p class="muted" style="margin:0 0 .6rem">${esc(L(cat?.label))}</p><p style="margin:0">${esc(L(b.desc))}</p>`;
}

$("#mapFilters").addEventListener("click", (ev) => {
  const btn = ev.target.closest(".chip");
  if (!btn) return;
  activeCat = btn.dataset.cat;
  renderMap();
});
const pickBooth = (ev) => {
  const g = ev.target.closest(".booth");
  if (!g) return;
  selectedBooth = g.dataset.id;
  renderMap();
  if (window.innerWidth <= 860) $("#boothPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
};
$("#floorplan").addEventListener("click", pickBooth);
$("#floorplan").addEventListener("keydown", (ev) => {
  if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); pickBooth(ev); }
});

// ---------- Registration ----------
function renderSessions() {
  const current = new FormData($("#regForm")).get("session");
  $("#sessionOptions").innerHTML = SESSIONS.map((s) => {
    const left = seatsLeft[s.id];
    const full = left !== undefined && left <= 0;
    const note = left === undefined ? "" : full ? t("reg.full") : t("reg.left").replace("{n}", left);
    return `<label class="session-opt${full ? " full" : ""}"><input type="radio" name="session" value="${s.id}" ${full ? "disabled" : ""} ${current === s.id && !full ? "checked" : ""}/>
      <span>${esc(L(s.label))}</span><span class="session-left">${note}</span></label>`;
  }).join("");
}

async function loadSeats() {
  try {
    const res = await fetch("/api/sessions");
    if (!res.ok) return;
    const data = await res.json();
    seatsLeft = Object.fromEntries(data.sessions.map((s) => [s.id, s.remaining]));
    renderSessions();
  } catch {}
}

function showError(key) {
  $("#formError").textContent = key ? t(key) : "";
}

function validate(form) {
  form.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
  const d = new FormData(form);
  const bad = (name) => form.elements[name]?.classList?.add("invalid");
  for (const f of ["name", "email", "phone", "role"]) if (!String(d.get(f) || "").trim()) { bad(f); return "err.required"; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.get("email").trim())) { bad("email"); return "err.email"; }
  if (!/^[0-9+\-\s()]{8,20}$/.test(d.get("phone").trim())) { bad("phone"); return "err.phone"; }
  if (!d.get("session")) return "err.session";
  if (!d.get("consent")) return "err.consent";
  return null;
}

$("#regForm").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const form = ev.currentTarget;
  const err = validate(form);
  showError(err);
  if (err) return;

  const btn = $("#submitBtn");
  btn.disabled = true;
  btn.textContent = t("reg.sending");
  const payload = Object.fromEntries(new FormData(form));
  payload.consent = !!payload.consent;
  payload.lang = lang;

  try {
    const res = await fetch("/api/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      showError(data.error === "full" ? "err.full" : data.error === "duplicate" ? "err.duplicate" : data.error === "invalid" ? "err.required" : "err.network");
      if (data.error === "full") loadSeats();
      return;
    }
    store.set("gi-ticket", { code: data.code, name: payload.name, session: payload.session, guests: Number(payload.guests) });
    form.reset();
    renderTicket();
    loadSeats();
    $("#register").scrollIntoView({ behavior: "smooth" });
  } catch {
    showError("err.network");
  } finally {
    btn.disabled = false;
    btn.textContent = t("reg.submit");
  }
});

function renderTicket() {
  const tk = store.get("gi-ticket");
  $("#ticket").hidden = !tk;
  $("#regForm").hidden = !!tk;
  if (!tk) return;
  const s = SESSIONS.find((x) => x.id === tk.session);
  $("#ticketCode").textContent = tk.code;
  $("#ticketMeta").innerHTML = `<dt>${t("reg.t.name")}</dt><dd>${esc(tk.name)}</dd><dt>${t("reg.t.session")}</dt><dd>${esc(L(s?.label))}</dd><dt>${t("reg.t.guests")}</dt><dd>${esc(tk.guests)}</dd>`;
}

$("#againBtn").addEventListener("click", () => {
  store.del("gi-ticket");
  renderTicket();
  $("#f-name").focus();
});

// ---------- Language toggle ----------
$("#langBtn").addEventListener("click", () => {
  lang = lang === "th" ? "en" : "th";
  store.set("lang", lang);
  renderStatic();
});

renderStatic();
loadSeats();
