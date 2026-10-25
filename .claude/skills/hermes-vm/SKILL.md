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
Telegram ──► Hermes gateway ─┐
                             ├─ container "hermes" (nousresearch/hermes-agent)
https://ruhan.lol            │    data: /home/ruhan/.hermes  →  /opt/data
  └► Cloudflare Access login │    dashboard :9119, API :8642 (127.0.0.1 only)
     └► Cloudflare Tunnel ───┴─ container "cloudflared" → http://hermes:9119
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
| `~/hermes/compose.yaml` | both services. Copy kept in this folder: [compose.yaml](compose.yaml) |
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
- **Tunnel** `hermes-vm` has one route (a "Published application"),
  `ruhan.lol` → `http://hermes:9119`.
- **Access application** `Commander` uses policy `Only Me`: Allow, Include
  Emails. Login methods are Cloudflare account login, plus One-time PIN if it
  has been enabled. Without an Access app, ruhan.lol would be open to anyone.
- Visitors log in twice: once to Cloudflare Access, then to the dashboard's
  basic auth.
- Verify with `curl -s -o /dev/null -w '%{http_code} %{redirect_url}' https://ruhan.lol/`.
  The result must be a **302 to `…cloudflareaccess.com`**, never 200 or 401.

## Mail (himalaya, draft-only)

There are four addresses and two Gmail accounts:
- `personal` = the personal Gmail. me@ruhan.bd and hi@ruhan.bd reach it too.
  ruhan.bd MX is Cloudflare Email Routing, which forwards there, and
  me@ruhan.bd is set up as a Gmail "Send mail as" alias.
- `work` = the work Gmail.
- Every draft, whichever inbox the original came to, is saved in `personal`
  → Drafts with `From: Mohammad Ruhan Islam <me@ruhan.bd>`. Ruhan sends it
  himself.

```bash
docker exec -u hermes hermes himalaya -a work envelope list -s 10
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

## Everyday commands (on the VM, in `~/hermes`)

```bash
docker compose ps
docker compose logs --tail 50 hermes        # gateway, Telegram, model errors
docker compose logs --tail 20 cloudflared   # "Registered tunnel connection" ×4 = healthy
docker compose restart hermes               # after editing config.yaml / .env
docker compose pull && docker compose up -d # update both images
docker compose run --rm hermes <cmd>        # one-off hermes CLI (setup, config, model, doctor)
```

Telegram is healthy when the log shows `Connected to Telegram (polling mode)`.

## Decisions and why

- **Docker, not the host installer.** Ruhan asked for this. It keeps the host
  clean, and one volume holds all state.
- **The `ruhan` user with sudo.** The shared `iict` account stays untouched.
- **Mail is draft-only.** Hermes may read and save to Drafts, but no SMTP is
  configured, so it cannot send even by mistake or through prompt injection.
  Ruhan sends from Gmail himself.
- **Gmail through App Passwords** (2FA, myaccount.google.com/apppasswords), so
  the agent never gets the real account password.

## Status and next steps

The status of this setup lives in `docs/notes/hermes-vm-private.md` (status
log). Update that note after each work session. Open items when this skill was
written:

1. Mail. Both accounts are connected and drafting works. Still to do: a daily
   inbox summary cron to Telegram, and the ruhan.bd SPF/DMARC/DKIM fix
   described above.
2. Git. A fine-grained GitHub token for the repos Hermes may touch
   (`GITHUB_TOKEN`).
3. Commander dashboard. Build Ruhan's own summary page for ruhan.lol, using
   Hermes itself.
4. Hardening. Turn off SSH password login (keys only, tested first so nobody is
   locked out), and delete `/etc/sudoers.d/90-ruhan` (the NOPASSWD rule that
   was added for the install).
5. Optional. Web search key (Tavily free tier) and One-time PIN login on
   Access.
