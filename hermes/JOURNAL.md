# Journal: Ruhan's AI agent setup, A to Z

The story of what was built, in order, and why. **Read this first** in a new
session. Then read:
- **How to operate it:** `.claude/skills/hermes-vm/SKILL.md` (commands, files, troubleshooting).
- **What it should do:** `hermes/PLAN.md` (pages, features, schedule).
- **Hermes' own skills:** `hermes/skills/*`.

Private details (host, port, IDs, addresses, status log) are in
`docs/notes/hermes-vm-private.md`. That file is git-ignored and lives on
Ruhan's PC only. This repo is public: no secrets, IPs or private addresses
here.

---

## The goal

Ruhan wants one AI agent that runs his day from Telegram: reads and sends his
mail, runs his calendar and meetings, teaches him something new every day,
coaches him for the Databricks exam, and keeps a dashboard of everything at
**ruhan.lol** ("Commander"). It lives only on his own VM, with no access to
his PC. Everything should be automatic. He tells it what he wants, and it does
the work end to end.

## Timeline

### 2026-10-25: the VM and Hermes
- SSH key login to the VM (Ubuntu 24.04). Created his own `ruhan` user with
  sudo. Claude connects with `ssh ruhan-vm`.
- Installed **Hermes Agent** (Nous Research) in **Docker** (his choice).
  Data lives in `~/.hermes` → `/opt/data`.
- Brain: **OpenRouter free models**, chosen to keep costs at zero for now.
  The first picks failed (520/404), so it runs `nemotron-3.5-super-vl:free`
  with free fallbacks. Free tier: 50 requests a day, and 1000 a day after a
  $10 credit top-up (done).
- **Telegram** bot connected. Only Ruhan's user ID may talk to it.
- **ruhan.lol** moved to Cloudflare (bought at Namecheap). A Cloudflare
  Tunnel means no ports are open on the VM.
- **Mail**: two Gmail accounts through `himalaya` (IMAP, app passwords).
  ruhan.bd addresses (me@, hi@) forward into the personal Gmail through
  Cloudflare Email Routing. At first it was draft-only, on purpose.
- Secrets rule: **Ruhan types every password and key himself.** Pasting into
  his terminals does not work, so typed prompts and desktop helper files are
  used instead. They never go in chat or git.

### 2026-10-25/26: Commander, the dashboard
- Built **Commander** in this repo on the **Ember** design system (the same
  as ruhan.bd): `commander/` holds the pages, `src/components/cmd-*` the
  components, and `npm run build` makes `dist-commander/`. Hermes writes the
  data as JSON (`/data/<id>.json`), and pages render it with `textContent`
  only.
- Served on the VM by a Caddy container (`commander`), deployed by
  `commander-deploy` (build + check + rsync).
- **Lesson learned:** the free model hand-edited the live site. That broke
  the logo and the calendar menu, and it invented data (meetings, followers).
  It also built a JS-only login that exposed a password publicly. All of it
  was reverted. The rules now: repo → `commander-deploy` only, never invent
  data, and no client-side auth.
- The login went through several rounds: Cloudflare Access → public →
  **server-side sign-in page** (`commander/auth/server.py` with Caddy
  forward_auth, a signed cookie for 14 days, and a lockout after 5 failed
  tries). Ruhan chose a simple password, and he knows the risk.
  agent.ruhan.lol (Hermes' own UI) stays behind Cloudflare Access.

### 2026-10-26: full access + life-automation plan
- Development phase: Ruhan asked for **no barriers**. Approvals are off and
  **mail sending is on**, from me@ruhan.bd. Hermes does the work itself.
- Wrote **`hermes/PLAN.md`**. Phase 1: Learn, Calendar, Mail (people,
  formats, CC/BCC order), Databricks. Phase 2: daily life (expenses, habits,
  journal, books). Phase 3: business.
- Pages regrouped into Today / Daily life / Business. Added timeline and
  progress-bar styles.
- Scripts in `hermes/bin`: `commander-mail` (inbox page), `commander-calendar`,
  `commander-people` (People book + sent-mail frequency),
  `commander-learn-raw` (GitHub + Hacker News).
- Hermes cron jobs (Asia/Dhaka): 07:00 morning (lesson + agenda + quiz +
  brief), 08:00/17:00 mail digest, 20:00 Databricks lesson, 21:00 plan
  tomorrow, and every 5 minutes reminders and scheduled mail.

### 2026-10-27: Google Calendar + Meet, scheduled mail
- **Google Calendar is the one calendar**: OAuth with the Calendar scope
  only, a Google Cloud app In production (so the token does not expire),
  and a privacy page at ruhan.bd/privacy.html for the consent screen.
- `gcal invite` creates an event with **its own Google Meet link**, the
  guests and a reminder, and mails the invite from me@ruhan.bd with an .ics.
  Google never mails guests itself.
- `mail-outbox` sends scheduled mail at the requested time.
- Tested with real meetings (Prithul). Two fixes: a stale Telegram session
  and stale memory made Hermes keep acting "draft-only" (fixed with `/new`
  and a rewritten memory), and Hermes may only write under `/opt/data`, so
  temp files go in `/opt/data/tmp`.

### 2026-10-27: Databricks tutor
- Target: **Databricks Certified Data Engineer Associate** (exam guide,
  August 2026: 45 questions, 90 minutes, 7 sections). No exam date yet, so
  trial mode on free models first. Paid models come later, if he enjoys it.
- `hermes/skills/ruhan-databricks/curriculum.json`: a **fixed 40-lesson
  syllabus** from zero (foundations, then the 7 sections, then 3 mocks),
  mapped to the official objectives. It is written by Claude, so the weak
  model does not invent topics.
- Every lesson has: big idea, explanation, **verified docs links**,
  **verified YouTube videos**, a hands-on lab in **Databricks Free Edition**,
  check-yourself questions and flashcards. Then a quiz the next morning,
  with spaced repetition and a Sunday review.
- `dbx` checks every link (HTTP 200 / YouTube oEmbed), searches YouTube
  for real videos, tracks lessons, labs and quizzes, and builds
  ruhan.lol/databricks.

## Decisions to remember

| Decision | Why |
|---|---|
| Docker on his own VM | the agent never touches his PC; state stays in one volume |
| Free models first | no spend until the setup proves useful. The cost is mistakes, so deterministic scripts do anything that must be right |
| Scripts for facts, model for words | dates, links, progress, mail sending and calendar go through scripts (`gcal`, `dbx`, `mail-outbox`, `commander-*`); the model writes text |
| Commander code in the Portfolio repo | it reuses the Ember design system, with one source of truth. Data never goes in the repo |
| Hermes skills versioned in `hermes/skills` | they are symlinked on the VM, so nothing is lost, and Claude and Hermes read the same rules |

## Open items (2026-10-27)
- Databricks: first lesson tonight at 20:00. Exam date to be set.
- People book: Ruhan to name his main contacts, groups and CC rules.
- Deliverability of me@ruhan.bd: add Google to SPF and add DMARC (not done).
- SSH hardening: keys only, and remove passwordless sudo once setup ends.
- Paid model, when Ruhan decides.
- Git history still holds the two Gmail addresses (commit 4310b34); a
  rewrite needs his OK.
