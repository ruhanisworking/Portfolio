# hermes/

Everything Ruhan's Hermes Agent (on his VM, reached over Telegram) runs on,
versioned here. On the VM, the repo clone sits at `/opt/data/work/Portfolio`.
Skills are symlinked into `~/.hermes/skills/ruhan/`, and scripts into
`~/.hermes/.local/bin/`.

Start with [JOURNAL.md](JOURNAL.md), the story from A to Z. The plan is in
[PLAN.md](PLAN.md): what is automated, page by page, and in what order.

| Skill | For |
|---|---|
| `ruhan-daily` | Phase 1: Learn, Calendar, Mail to people (formats, CC/BCC order), Databricks prep, and the scheduled jobs |
| `ruhan-commander` | the Commander dashboard at ruhan.lol: data files and the page workflow |
| `ruhan-frontend` | the Ember design system: points Hermes at `.claude/skills/ruhan-frontend` and DESIGN.md |
| `ruhan-business` | who Ruhan is, what he sells, where the plans are |
| `ruhan-databricks` | the Databricks tutor: a 40-lesson syllabus (`curriculum.json`), the lesson format, verified links and videos, quizzes |

| Script (`bin/`) | Does | Runs |
|---|---|---|
| `commander-deploy` | build + check + publish the Commander | by hand or by Hermes |
| `commander-mail` | ruhan.lol/mail from both inboxes | host cron, every 15 min |
| `commander-calendar` | ruhan.lol/calendar from Google Calendar + Hermes' events; `--agenda`, `--remind` | host cron every 15 min; Hermes jobs |
| `commander-people` | ruhan.lol/people from the People book + sent mail | host cron, daily |
| `commander-learn-raw` | GitHub + Hacker News raw material for the 07:00 lesson | Hermes morning job |
| `gcal` | Google Calendar: list / add / invite (new Meet link + invite from me@ruhan.bd) / move / cancel | Hermes, on request |
| `dbx` | the Databricks tracker: today / check / videos / save / done / quiz / page | Hermes, in the tutor jobs |
| `gcal-auth` | one-time Google OAuth (Calendar scope) | by hand |
| `mail-outbox` | scheduled mail queue: `add --at … --file …`, `list`, `cancel`, `send` | Hermes adds; a 5-min no-agent cron sends |

`ruhan-mail` (the mail sending rules) lives only on the VM, because it names
private addresses. A copy with placeholders is in `.claude/skills/hermes-vm/`.

After editing anything here: push, then on the VM run
`git -C /opt/data/work/Portfolio pull` and restart `hermes`. See the
`hermes-vm` Claude skill.
