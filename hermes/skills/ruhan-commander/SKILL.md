---
name: ruhan-commander
description: "Ruhan's Commander dashboard at https://ruhan.lol: update its data (mail, to-do, expenses, leads, brief …) and change or add its pages. Use for any request that mentions the commander, dashboard, ruhan.lol, a section name, or 'add/update/show … on the commander'."
version: 1.0.0
author: Ruhan + Claude
platforms: [linux]
metadata:
  hermes:
    tags: [Dashboard, Commander, Frontend, Data]
    related_skills: [ruhan-frontend, ruhan-mail, ruhan-business]
---

# Commander (ruhan.lol)

Commander is Ruhan's private summary site. **You own it.** You keep its data
current, and you change its pages when he asks.

## Where everything is

| What | Path (inside your container) |
|---|---|
| Source (git repo) | `/opt/data/work/Portfolio`: pages in `commander/`, components in `src/components/cmd-*` |
| Section list | `/opt/data/work/Portfolio/commander/sections.json` |
| Live site (what ruhan.lol serves) | `/opt/data/commander/site/` |
| Live data | `/opt/data/commander/data/<id>.json`, served as `https://ruhan.lol/data/<id>.json` |
| Your own dashboard | https://agent.ruhan.lol (Hermes web UI) |

**Never open ruhan.lol in the browser tool.** Cloudflare Access blocks you,
and that is correct. You never need it: read and write the files above
directly. A container called `commander` (Caddy) serves them.

## Data: `/opt/data/commander/data/<id>.json`

Every key is optional. The page renders whatever is present.

```json
{
  "updated": "2026-10-25T15:00:00Z",
  "summary": "One or two sentences: the state of this area right now.",
  "stats": [ { "label": "Needs reply", "value": "3", "note": "2 on work", "trend": "up" } ],
  "lists": [
    { "title": "Needs reply", "empty": "Inbox zero.",
      "items": [ { "title": "…", "meta": "work · 18:18", "text": "…", "tag": "work", "href": "https://…" } ] }
  ],
  "records": [ ]
}
```

- `updated` is always the current UTC time in ISO format.
- `trend` is only `"up"` or `"down"`. `href` must be `https://`.
- `records` is yours: raw entries (each expense, each task, each lead) that
  the stats and lists are computed from. The page ignores it. Keep it so
  totals can be recomputed and nothing is lost.
- Write atomically: write `<id>.json.tmp`, then `mv` it over `<id>.json`.
  Valid JSON, UTF-8.
- `home.json` is **Today's brief** on the overview page: a short summary of
  the day plus 2–4 stats, and lists of what matters most across every section.

Section ids: `home`, `mail`, `calendar`, `todo`, `expenses`, `clients`,
`leads`, `social`, `content`, `newsletter`, `business`, `team`, `invest`,
`research`, `books`, `knowledge`, `journal`. Check `sections.json` for the
current list.

### Rules for data

1. **Never invent numbers, names or facts.** Use only what Ruhan told you or
   what you read from a real source (his mail through `ruhan-mail`, files he
   gave you). If you do not know something, leave it out.
2. Mail on the commander is a summary only: sender, subject, one line, and
   which address it came to. Never put full mail bodies, passwords, codes or
   attachments there.
3. Short Telegram notes become records. Example: "expense 250 taka lunch"
   means you append a record to `expenses.json`, then recompute today/week/
   month totals into `stats` and the latest entries into `lists`. Confirm in
   one line.
4. Amounts: keep the currency Ruhan used (taka/BDT, USD, AUD) and do not
   convert unless he asks.

## Changing pages

1. `cd /opt/data/work/Portfolio && git pull --rebase`
2. Load the **ruhan-frontend** skill and follow it. DESIGN.md tokens only, no
   raw colours or sizes, components in `src/components/cmd-*`.
3. New section: add an entry to `commander/sections.json` (id, title, icon from
   `src/components/icon/*.svg`, tile 1–4, blurb, ask). The template makes the
   page and the nav link. Then start its data file.
4. `node tools/build.mjs && node tools/check.mjs`. Both must pass.
5. Deploy: `rsync -a --delete dist-commander/ /opt/data/commander/site/`
6. Commit with a clear message (`git add … && git commit`). Push only when
   Ruhan says so. The repo is **public**: never commit data, mail, keys or
   private details.

## Report back

After any change, tell Ruhan in one or two lines what changed, and which page
to look at, e.g. `ruhan.lol/expenses`.
