# ruhan.bd

Personal site of Mohammad Ruhan Islam, served at https://ruhan.bd (GitHub
Pages behind Cloudflare). Contact email everywhere is **hi@ruhan.bd**.

## Two sites in one repo (until the switch-over)

- **Live site** — repo root: `index.html`, `css/`, `js/`, `assets/`,
  `favicon.svg`, `CNAME`, `robots.txt`, `sitemap.xml`. Deployed by
  `.github/workflows/deploy.yml` on every push to `main`.
- **New site** — `src/`, built by `tools/build.mjs` into `dist/` (not deployed
  yet). It is being rebuilt section by section on the Ember design system.

## Frontend: always use the skill

For any visual / frontend work, load the **ruhan-frontend** skill
(`.claude/skills/ruhan-frontend/SKILL.md`). The rules in short:

- `DESIGN.md` is the single master for every colour, font, size, border,
  radius, shadow, motion and component value. Add a token there before using it.
- One folder per component in `src/components/<name>/`; CSS reads only
  `var(--…)` tokens; every component appears in `src/pages/components.html`.
- Page copy, SEO and keywords live in `content/<page>.md`; site facts (email,
  WhatsApp, LinkedIn) in `content/site.md`. `npm run check` enforces the SEO rules.
- `npm run build && npm run check` must pass; then screenshot and look.
- Agents: `frontend-builder` (builds) and `design-reviewer` (read-only review).

## Hermes agent and ruhan.lol: use the hermes-vm skill

Ruhan runs a personal Hermes Agent in Docker on his own VM. He talks to it over
Telegram, and its dashboard is at https://ruhan.lol behind Cloudflare Access.
For anything about it, load the **hermes-vm** skill
(`.claude/skills/hermes-vm/SKILL.md`). Connect with `ssh ruhan-vm`. The host,
port and Cloudflare IDs are in `docs/notes/hermes-vm-private.md` (git-ignored).
Never commit them or any key or token. Log progress in that note's status log.

## Content and language

Audience is the US and Australia, US English. The new site has no Bangla for
now; on the live site English is the default and Bangla is opt-in.

## Folders

- `docs/archive/` — the retired River & Canopy design docs
- `docs/notes/`, `design/references/`, `information/` — private, git-ignored
- `design/awesome-design-md/` — 84 brand DESIGN.md references, git-ignored clone
- `frontend-workflow/` — a skill from another (work) project; git-ignored,
  not for this site. Never commit it: this repo is public.
