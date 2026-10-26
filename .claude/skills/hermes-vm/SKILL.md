---
name: hermes-vm
description: >
  Runbook for Ruhan's personal Hermes Agent (Nous Research) running in Docker
  on his own Ubuntu VM, reached over Telegram and at https://ruhan.lol (the
  "commander dashboard"). Use for anything about the agent, the VM, the
  Telegram bot, ruhan.lol, the Cloudflare tunnel / Access login, OpenRouter
  models, Hermes skills, mail (himalaya) or git access for the agent. Trigger
  on: hermes, agent, vm, server, telegram bot, ruhan.lol, commander,
  dashboard login, cloudflared, tunnel, openrouter, himalaya, app password.
---

# Hermes Agent on the VM

This repo is **public**. The VM's IP, SSH port, Cloudflare team domain and
tunnel ID are kept out of it, in `docs/notes/hermes-vm-private.md`
(git-ignored) and in Claude's memory. Never commit them, and never commit a key
or token. If the private note is missing, ask Ruhan for the host details.

## What it is

```text
Telegram ──► container "hermes" (hermes-agent-ruhan = nousresearch/hermes-agent + git, rsync)
               data: /home/ruhan/.hermes → /opt/data   (repo clone: /opt/data/work/Portfolio)
               writes /opt/data/commander/{site,data}
                              │
container "commander" (Caddy) serves ~/.hermes/commander/site at /, …/data at /data/
                              │
Cloudflare Access ─► Tunnel (container "cloudflared")
   ruhan.lol        → http://commander:80    (the Commander dashboard)
   agent.ruhan.lol  → http://hermes:9119     (Hermes' own web UI)
```

- **VM:** Ubuntu 24.04, 8 cores, 15 GB RAM, ~95 GB disk. Docker Engine and the
  Compose plugin from Docker's apt repo.
- **Users:** `iict` is the shared original account. `ruhan` is Ruhan's own
  account (in `sudo` and `docker` groups). Everything lives under `ruhan`.
- **Nothing on the VM is exposed to the internet** except SSH. The dashboard
  reaches the outside only through the outbound Cloudflare tunnel.

## Connecting from Ruhan's PC

Windows OpenSSH, key `~/.ssh/iict_vm` (ed25519, no passphrase, made for Claude).
Aliases in `~/.ssh/config`: `ruhan-vm` (user `ruhan`) and `iict-vm` (user
`iict`).

```bash
ssh -o BatchMode=yes ruhan-vm 'docker ps'
```

From PowerShell, pass multi-line remote scripts through the **Bash** tool with
`ssh ruhan-vm 'bash -s' <<'EOF' … EOF`. PowerShell mangles quotes, `(` and `$`
in inline remote commands.

## Files on the VM

| Path | What |
|---|---|
| `~/hermes/compose.yaml` | hermes, commander, cloudflared. Copy: [compose.yaml](compose.yaml) |
| `~/hermes/Dockerfile` | adds git, rsync, python3-icalendar, python3-recurring-ical-events and tzdata to the Hermes image. The container runs with `TZ=Asia/Dhaka`. Copy: [Dockerfile](Dockerfile) |
| `~/hermes/Caddyfile` | Commander file server. Copy: [Caddyfile](Caddyfile) |
| `~/.hermes/work/Portfolio` | clone of this repo. Hermes builds Commander here |
| `~/.hermes/commander/site/` | deployed `dist-commander/` (rsync) |
| `~/.hermes/commander/data/<id>.json` | Commander data written by Hermes / `commander-mail` |
| `~/.hermes/skills/ruhan/ruhan-{commander,frontend,business}` | symlinks into the repo clone's `hermes/skills/` |
| `~/hermes/commander-auth.caddy` | `basic_auth` for ruhan.lol: dashboard user + bcrypt hash from `dashboard.env`. Rebuild it with `caddy hash-password` if that password changes |
| `hermes/bin/commander-mail` (repo) | fills ruhan.lol/mail from both inboxes. It runs from ruhan's crontab every 15 min, without model calls |
| `hermes/bin/commander-deploy` (repo) | build + check + rsync to the live site. Linked into `~/.hermes/.local/bin` |
| `hermes/bin/commander-{calendar,people,learn-raw}` (repo) | Phase 1 scripts (see `hermes/README.md`), linked into `~/.hermes/.local/bin` |
| `~/.hermes/scripts/{morning,agenda,remind}.sh` | wrappers that Hermes cron `--script` runs (it only takes files in this folder) |
| `~/.hermes/commander/records/` | raw truth behind the pages (calendar events, People book, Databricks plan). Not served |
| `~/.hermes/secrets/gcal-ics-url` | Google Calendar "secret address in iCal format". Read-only fallback, used only when the OAuth token is missing |
| `~/.hermes/google_token.json` + `google_client_secret.json` | Google OAuth, **Calendar scope only** (Desktop client, Google Cloud project `bustling-tree-318817`, app **In production** since 2026-10-27, unverified, no logo, home https://ruhan.bd, privacy https://ruhan.bd/privacy.html). Made by `gcal-auth url` / `gcal-auth code <redirect URL>`; check it with `gcal-auth check`. The refresh token does not expire. Re-run `gcal-auth` only if access is revoked or the password changes |
| `hermes/bin/gcal`, `gcal-auth`, `mail-outbox` (repo) | Google Calendar read/write + Meet invites from me@ruhan.bd; OAuth helper; the scheduled-mail queue (`records/outbox/`, sent by the no-agent cron `scheduled-mail` every 5 min) |
| Desktop helpers on the PC | `Save Google Calendar link.cmd` and `Send Google client file.cmd` (scripts in `C:\Users\ruhan\.ssh\`). They send the clipboard or a downloaded file to the VM, because paste into ssh/PuTTY does not work for Ruhan. PowerShell 5.1 adds a UTF-8 BOM to piped text, and the VM side strips it |
| ruhan's crontab (host, UTC) | `*/15` commander-mail, `*/15` commander-calendar, `30 0` commander-people. No model calls |
| Hermes cron (`hermes cron list`, Asia/Dhaka) | `morning` 07:00 (Learn + agenda + quiz + brief), `mail-digest` 08:00/17:00, `databricks-task` 20:00, `plan-tomorrow` 21:00, `reminders` */5 (no-agent). All deliver to Telegram |
| `~/hermes/dashboard.env` | dashboard basic-auth user `ruhan` + random password (600) |
| `~/hermes/tunnel.env` | `TUNNEL_TOKEN=` for cloudflared (600) |
| `~/.hermes/.env` | API keys: `OPENROUTER_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_ALLOWED_USERS`, … |
| `~/.hermes/config.yaml` | Hermes config (~2000 lines, mostly commented defaults) |
| `~/.hermes/skills/` | 58 bundled skills + any the agent creates from Ruhan's work |
| `~/.hermes/memories/`, `sessions/`, `cron/` | agent memory, chat history, schedules |
| `~/.hermes/backups/` | config copies taken before each manual edit |
| `~/.hermes/.local/bin/himalaya` | himalaya v2.2.1, pinned release binary (sha256 checked); in the container's PATH |
| `~/.hermes/.config/himalaya/config.toml` | the 2 IMAP accounts, no SMTP. Copy: [himalaya.config.toml](himalaya.config.toml) |
| `~/.hermes/secrets/gmail-{personal,work}` | Gmail App Passwords, 16 chars each (dir 700, files 600) |
| `~/.hermes/skills/ruhan/ruhan-mail/` | Hermes skill with Ruhan's mail rules. Copy: [ruhan-mail.SKILL.md](ruhan-mail.SKILL.md) |

Inside the container the `hermes` user's HOME is `/opt/data` (the volume).
Anything installed under `~/.hermes/.local/bin` survives image updates. Run
tools as that user: `docker exec -u hermes hermes himalaya …`.

## Rules for secrets

- Ruhan types every key or token himself in PuTTY (with a leading space, so
  bash history skips it). He never pastes one into the chat.
- To check a key exists, print names only:
  `grep -E '^NAME=.' ~/.hermes/.env | sed -E 's/=.*/=<set>/'`.
- Redact tokens in logs before printing (`sed -E 's/(bot)[0-9]+:[A-Za-z0-9_-]+/\1<redacted>/g'`).
- Set a key from the VM with
  `docker compose run --rm hermes config set NAME value` (it writes `.env`).

## Model choice (free OpenRouter models)

Set in `config.yaml`:
- `model.provider: "openrouter"`, `model.default: "nvidia/nemotron-3-ultra-550b-a55b:free"`.
- An `auxiliary:` block appended at the end of the file pins every side task to
  free models. Without it, side tasks default to the **paid**
  `google/gemini-3-flash-preview`. Copy: [auxiliary.yaml](auxiliary.yaml).
- Free-tier limits: about 50 requests a day with no credit bought, about 1000 a
  day after a one-time $10 top-up. Recheck these on OpenRouter.
- To see the current free models:
  `(Invoke-RestMethod https://openrouter.ai/api/v1/models).data | ? id -like '*:free'`.

## ruhan.lol (Cloudflare)

- ruhan.lol is registered at **Namecheap**, which uses Cloudflare nameservers
  (set under Domain → Nameservers → Custom DNS, not under Advanced DNS). It is a
  zone in the same Cloudflare account as ruhan.bd.
- **Tunnel** `hermes-vm` has routes ("Published application"):
  `ruhan.lol` → `http://commander:80`, and `agent.ruhan.lol` →
  `http://hermes:9119`.
- **ruhan.lol** is not in Cloudflare Access, by Ruhan's choice: he wanted a
  plain login. Caddy `basic_auth` guards every path, `/data/` included, with
  the same user/password as the Hermes dashboard
  (`~/hermes/commander-auth.caddy`, a bcrypt hash made from `dashboard.env`).
  Never accept a client-side or JS login there. Hermes built one on
  2026-10-26 that put the password in a public `auth.js`, and it was removed.
- **agent.ruhan.lol** **must** stay in the Access app `Commander` (policy
  `Only Me`: Allow, Include Emails), because it controls the agent. It also
  has the dashboard's basic auth.
- Verify: `https://agent.ruhan.lol/` must give a **302 to `…cloudflareaccess.com`**,
  and `https://ruhan.lol/` must give a **401** without credentials.

## Mail (himalaya)

There are four addresses and two Gmail accounts:
- `personal` = the personal Gmail. me@ruhan.bd and hi@ruhan.bd reach it too.
  ruhan.bd MX is Cloudflare Email Routing, which forwards there, and
  me@ruhan.bd is set up as a Gmail "Send mail as" alias.
- `work` = the work Gmail.
- Since 2026-10-26, **Hermes sends** when Ruhan says mail/send/reply. It
  sends from `personal` through Gmail SMTP as
  `From: Mohammad Ruhan Islam <me@ruhan.bd>`, whichever inbox the original
  came to. It saves a draft only when he says "draft". `work` has no SMTP.

```bash
docker exec -u hermes hermes himalaya -a work envelope list -s 10
docker exec -u hermes hermes himalaya -a personal message send -- /tmp/mail.eml
docker exec -u hermes hermes himalaya -a personal message add -m drafts -f draft seen -- /tmp/draft.eml
```
`-f` takes several values, so the file path must come after `--`. Otherwise
himalaya reads the path as a flag.

**Paste trouble when saving a password:** silent `read -s` and nano would not
take a paste in Ruhan's terminals. What worked was typing it into a visible
prompt: `read -rp "pass: " P && printf '%s' "${P// /}" > FILE && unset P && wc -c < FILE`.
The result must be 16. Do not pipe `Get-Clipboard`: the clipboard tends to
hold the command itself.

**Open problem, deliverability:** the ruhan.bd SPF is only
`v=spf1 include:_spf.mx.cloudflare.net ~all`, and there is no DMARC record. Mail
sent through Gmail as me@ruhan.bd may land in spam or show "via gmail.com".
To fix: add Google to SPF, add DMARC, and ideally send through an SMTP
provider (Brevo/Resend) that signs DKIM for ruhan.bd.

## Commander (ruhan.lol)

The source is in this repo: `commander/` holds the pages and `sections.json`,
`src/components/cmd-*` the components. `node tools/build.mjs` renders it into
`dist-commander/`. Data is never in the repo: Hermes writes
`/opt/data/commander/data/<id>.json` (shape in `cmd-panel.js` and in
`hermes/skills/ruhan-commander`). The Hermes skills for it live in `hermes/`.

Deploy after changing commander code. `commander-deploy` (in `hermes/bin`)
is the only thing that writes the live site:
```bash
git push   # from the PC; then on the VM:
docker exec -u hermes hermes sh -c 'cd /opt/data/work/Portfolio && git pull --ff-only && commander-deploy'
```
If Hermes hand-edits `~/.hermes/commander/site` or puts data in `site/data`,
back it up (as in `~/.hermes/backups/commander-by-hermes-*`), then redeploy.
After you edit `hermes/skills/*`, pull the same way and `docker compose restart hermes`.

## Everyday commands (on the VM, in `~/hermes`)

```bash
docker compose ps
docker compose logs --tail 50 hermes        # gateway, Telegram, model errors
docker compose logs --tail 20 cloudflared   # "Registered tunnel connection" ×4 = healthy
docker compose restart hermes               # after editing config.yaml / .env
docker compose build --pull hermes && docker compose pull commander cloudflared && docker compose up -d  # update images
docker compose run --rm hermes <cmd>        # one-off hermes CLI (setup, config, model, doctor)
```

Telegram is healthy when the log shows `Connected to Telegram (polling mode)`.

**Hermes ignores a new ability** (for example, it says it "can only draft",
or writes a placeholder Meet link). There are two causes. (1) A stale Telegram
session: one session ran from 2026-10-25 with 100+ turns of old rules, and
the free model trusted that history over its skills. Ruhan sends `/new` on
Telegram. (2) Stale memory: `~/.hermes/memories/MEMORY.md` and `USER.md`
are injected into every turn. Keep a short "CURRENT SETUP" block there,
rewrite it when the setup changes, back it up to `~/.hermes/backups/`, and
never let a password sit in it.

## Decisions and why

- **Docker, not the host installer.** Ruhan asked for this. It keeps the host
  clean, and one volume holds all state.
- **The `ruhan` user with sudo.** The shared `iict` account stays untouched.
- **Full access in the development phase (2026-10-26).** Ruhan asked for no
  barriers: `approvals.mode: "off"` in config.yaml, mail sending is on, and
  the SOUL.md says to do the work end to end. Cost of this choice: a
  prompt-injected mail could make Hermes act. The mail skill tells it to treat
  mail content as data. Revisit before the agent touches anything
  client-facing at scale.
- **Gmail through App Passwords** (2FA, myaccount.google.com/apppasswords), so
  the agent never gets the real account password.

## Status and next steps

The status of this setup lives in `docs/notes/hermes-vm-private.md` (status
log). Update that note after each work session. Open items when this skill was
written:

1. Mail. Both accounts are connected and drafting works. Still to do: a
   daily summary to Telegram; **sending with approval**, through a
   `pre_tool_call` shell hook that returns `{"action":"approve"}` for
   `mail-send <draft-id>` and blocks every other send path; and the ruhan.bd
   SPF/DMARC/DKIM fix described above.
2. Git push. Hermes can clone, commit and build, but it cannot push. It needs
   a fine-grained GitHub token, scoped to the Portfolio repo only.
3. Commander. Built and deployed. Only mail has data so far. Hermes fills the
   other sections once its model quota allows. OpenRouter free is 50 requests
   a day, or 1000 a day after a $10 top-up.
4. Hardening. Turn off SSH password login (keys only, tested first so nobody is
   locked out), and delete `/etc/sudoers.d/90-ruhan` (the NOPASSWD rule that
   was added for the install).
5. Optional. Web search key (Tavily free tier) and One-time PIN login on
   Access.
