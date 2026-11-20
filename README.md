# GI-online

Website for the **GI Open House**, live at **gi-spsm.com**.

- Thai/English event page: info, countdown, about GI, schedule, booth map, FAQ
- Registration form with seat limits per session; visitors get a 6-letter check-in code
- Staff page at `/admin` for check-in by code, a search table and CSV export

Built on Cloudflare Workers (static assets) + D1 (database).

## Edit the content

Almost everything visitors read lives in **`public/content.js`**: event date, about text, schedule, sessions and capacity, booth map and FAQ. Search for `TODO` and replace each placeholder. Colors are at the top of `public/styles.css`.

The booth map uses a 100 × 60 grid. Each booth has `x, y` (top-left corner) and `w, h` (size).

## Project layout

```
public/          static site (served as-is)
  index.html     page structure
  content.js     ALL editable content (also read by the server)
  app.js         page logic: language, countdown, map, form
  styles.css     design
  admin.html     staff page
src/index.js     Worker: /api/sessions, /api/register, /api/admin/*
migrations/      D1 database schema
wrangler.jsonc   Cloudflare config
```

## Deploy (one-time setup)

The D1 database `gi-openhouse` already exists, and the table is created.

1. Cloudflare dashboard → **Workers & Pages → Create → Import a repository** → pick `GI-online`. Keep the default build settings; the deploy command is `npx wrangler deploy`.
2. In the new Worker → **Settings → Variables and Secrets** → add a **Secret** `ADMIN_KEY` with a long password. This unlocks `/admin`.
3. **Settings → Domains & Routes → Add → Custom domain** → `gi-spsm.com` (and `www.gi-spsm.com`).

After that, every push to `main` redeploys automatically.

## Run locally

```bash
npm install
echo "ADMIN_KEY=dev" > .dev.vars
npx wrangler d1 migrations apply gi-openhouse --local
npm run dev        # http://localhost:8787
```

## API

| Route | What it does |
|---|---|
| `GET /api/sessions` | seats remaining per session |
| `POST /api/register` | creates a registration, returns `{ code }`; errors: `invalid`, `full`, `duplicate` |
| `GET /api/admin/registrations[?format=csv]` | all registrations (needs `Authorization: Bearer <ADMIN_KEY>`) |
| `POST /api/admin/checkin` | `{ code }` → marks the registration as checked in |
