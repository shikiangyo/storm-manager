# Storm Manager

Applications, fair team selection, attendance and squad briefings for **Desert Storm** and **Canyon Storm** in Last War: Survival.

Static site — no build step. `index.html` is the whole app.

## What it does

- **Applications** — import a CSV (`name, availability`) where availability is `noon`, `evening`, `both` or `not available`. Anything else goes to a review list.
- **Fair selection** — guaranteed players first, then longest time since last picked (per mode). Availability decides *which* squad, never *whether* you get in.
- **Bans** — a no-show blocks that player from that game mode only, for 3 weeks.
- **Squad setup** — assign the picked 30 to battlefield objectives, export a briefing or poster.
- **History** — STA / SUB / NS / APP / NA / BAN / DNV grid per mode, with CSV export.
- **Roster** — rename (keeps history), merge duplicates, guaranteed flags.

## Setup

### 1. Supabase (shared data + admin login)

1. Create a free project at [supabase.com](https://supabase.com).
2. SQL Editor → New query → paste `supabase-setup.sql` → **Run**.
3. Authentication → Users → **Add user**: your admin email + password, *Auto Confirm User* ON.
4. Authentication → Sign In / Providers → Email → turn **off** "Allow new users to sign up".
5. Project Settings → Data API: copy the **Project URL** and the **anon / publishable key**.
6. Paste both into `config.js`.

> Only ever use the anon/publishable key here — never the `service_role` secret. The anon key is safe in public code: the database policies allow anonymous **reads** only, and writes require a logged-in admin.

### 2. Deploy to Vercel

- Push this folder to a GitHub repo, then [vercel.com/new](https://vercel.com/new) → Import → Deploy. Framework preset: **Other**. No build command, no output directory.
- Or from the folder: `npx vercel --prod`.

## Access model

| | Anyone with the link | Admin (logged in) |
|---|---|---|
| View roster, teams, history, briefings | ✅ | ✅ |
| Export CSV / poster / briefing text | ✅ | ✅ |
| Import applications, assign teams | ❌ | ✅ |
| Edit attendance, bans, roster | ❌ | ✅ |

Leaving `config.js` blank runs the app entirely on one device (localStorage, no login, full access) — useful for testing.

## Weekly routine

1. **New Event** — set mode, date, team size (30) and starters (20), then import the week's applications. Teams are assigned immediately.
2. Adjust by hand if needed (↓ drop, → Noon/Evening, ✕ remove), then **Confirm & save event**.
3. **Squad Setup** — pick the event and squad, assign players to objectives, copy the briefing into in-game mail.
4. After the battle: **History & Attendance** → open the event → mark no-shows → **Save attendance & apply bans**. The event locks to prevent accidental edits.

## Data safety

Everything derives from the saved event log, so deleting an event cleanly removes its bans, no-show counts and fairness dates. Data / Settings → **Export all data** gives a JSON backup you can re-import.
