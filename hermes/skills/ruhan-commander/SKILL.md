---
name: ruhan-commander
description: "Ruhan's Commander dashboard at https://ruhan.lol (behind a login): keep its data current and change or add its pages. Use for any request that mentions the commander, dashboard, ruhan.lol, a section name (calendar, to-do, expenses, books …) or 'add/update/show … on the commander'."
version: 2.0.0
author: Ruhan + Claude
platforms: [linux]
metadata:
  hermes:
    tags: [Dashboard, Commander, Frontend, Data]
    related_skills: [ruhan-frontend, ruhan-mail, ruhan-business]
---

# Commander (ruhan.lol)

Commander is Ruhan's summary site. **You own it.** You keep its data current,
and you change its pages when he asks. You have full access. Do the work
yourself instead of asking him to.

It sits behind a server-side login (Caddy basic auth, same user/password as
your own dashboard). Personal data is fine there. **Secrets are not**: no
passwords, codes, card numbers or keys, ever, and never credentials in a page
or a JS file.

## Where everything is

| What | Path (inside your container) |
|---|---|
| Source (git repo) | `/opt/data/work/Portfolio`: pages in `commander/`, components in `src/components/cmd-*`, tokens in `DESIGN.md` |
| Section list | `commander/sections.json` (adds the page and the nav link) |
| Data | `/opt/data/commander/data/<id>.json`, served as `https://ruhan.lol/data/<id>.json` |
| Live site | `/opt/data/commander/site/`. **Only `commander-deploy` writes here** |
| Your dashboard | https://agent.ruhan.lol |

You never need a browser for ruhan.lol: read and write the files. The login
is not your concern, because the `commander` (Caddy) container serves the
files.

## Golden rules (each one was broken once, and it broke the site)

1. **Never edit `/opt/data/commander/site/` by hand.** Change the repo and
   run `commander-deploy`. Hand edits get wiped on the next deploy, and they
   break things (the logo lost its "n", and the calendar menu stopped working).
2. **Data goes in `/opt/data/commander/data/`**, never in `site/data/`. The
   server reads `/data/` from the data folder only.
3. **Never invent anything.** No made-up meetings, clients, follower counts,
   percentages, streaks or "sample" numbers. Use only what Ruhan told you or
   what you read from a real source (his mail, files he gave you, the web for
   facts). Unknown means you leave it out. An empty section is fine.
4. **No login page of your own.** The server handles login. Never add
   client-side auth, `auth.js`, or credentials in code.
5. **Reuse the design.** Load `ruhan-frontend`, and use the existing `cmd-*`
   components and DESIGN.md tokens. Do not rebuild headers, menus or logos.
   "Inherit everything from the main page."

## Data format: `/opt/data/commander/data/<id>.json`

Every key is optional. The page renders whatever is present.

```json
{
  "updated": "2026-10-26T15:00:00Z",
  "summary": "One or two sentences: the state of this area right now.",
  "stats": [ { "label": "Due today", "value": "3", "note": "1 overdue", "trend": "up" } ],
  "lists": [
    { "title": "Today", "empty": "Nothing due.",
      "items": [ { "title": "…", "meta": "15:00", "text": "…", "tag": "work", "href": "https://…" } ] }
  ],
  "records": [ ]
}
```

- `updated` is the current UTC time in ISO format. `trend` is only `"up"` or
  `"down"`. `href` must be `https://`.
- `records` holds your raw entries (each expense, task, event, lead, book
  note). The page ignores it. Recompute `stats` and `lists` from it every
  time, so nothing is lost.
- Write atomically: write `<id>.json.tmp`, then `mv` it over `<id>.json`.
- `home.json` is **Today's brief** on the overview page: the day in two lines,
  2–4 stats, and the most important items across all sections.
- `mail.json` is written every 15 minutes by `commander-mail` (cron). Do not
  hand-edit it.
- Section ids: see `commander/sections.json`.

## Recurring jobs (set them up with your cron tool when Ruhan asks)

- **Daily knowledge:** one new, true, interesting fact a day in
  `knowledge.json`. Keep every past fact in `records` and never repeat one.
- **Morning brief:** refresh `home.json` from all sections every morning,
  07:00 Asia/Dhaka.

## Telegram notes become records

"expense 250 taka lunch", "todo: call bank tomorrow", "book note: …",
"meeting Friday 3pm with …": append to the right `records`, recompute, write,
and confirm in one line. Keep the currency he used.

## Changing pages

```bash
cd /opt/data/work/Portfolio && git pull --rebase
# edit commander/, src/components/cmd-*, DESIGN.md (follow ruhan-frontend)
commander-deploy                       # build + check + publish
git add -A && git commit -m "…"        # then: git push (you may push)
```

- New section: add `{ id, title, icon, tile, blurb, ask }` to
  `commander/sections.json`. Icons are the files in
  `src/components/icon/*.svg`, and tile is 1–4. Then start its data file.
- The repo is **public**: commit code only, never data, mail or secrets.

Report back in one or two lines: what changed, and which page to open
(e.g. `ruhan.lol/calendar/`).
