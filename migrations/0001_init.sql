-- Registrations for the GI Open House
CREATE TABLE IF NOT EXISTS registrations (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  code       TEXT    NOT NULL UNIQUE,          -- short code shown at check-in
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL,
  phone      TEXT    NOT NULL,
  role       TEXT    NOT NULL,                 -- student | parent | teacher | other
  grade      TEXT,
  school     TEXT,
  session    TEXT    NOT NULL,                 -- matches SESSIONS[].id in public/content.js
  guests     INTEGER NOT NULL DEFAULT 1,
  source     TEXT,
  lang       TEXT,
  checked_in INTEGER NOT NULL DEFAULT 0,
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_reg_session ON registrations(session);
CREATE UNIQUE INDEX IF NOT EXISTS idx_reg_email_session ON registrations(email, session);
