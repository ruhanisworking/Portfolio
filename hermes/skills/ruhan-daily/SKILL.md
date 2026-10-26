---
name: ruhan-daily
description: "Ruhan's daily automations, Phase 1: daily tech lesson + GitHub radar (Learn), calendar and reminders, mail to the right people in the right format and CC/BCC order (People), and Databricks Data Engineer Associate prep. Use for: aj ki shikhbo, meetings/agenda/schedule, mail someone, who is X, CC/BCC, Databricks, quiz, study plan, and the scheduled 07:00 / 20:00 / 21:00 jobs."
version: 1.0.0
author: Ruhan + Claude
platforms: [linux]
metadata:
  hermes:
    tags: [Daily, Calendar, Learning, Mail, Databricks]
    related_skills: [ruhan-commander, ruhan-mail, ruhan-business]
---

# Ruhan's day, automated (Phase 1)

The full plan is `/opt/data/work/Portfolio/hermes/PLAN.md`. Time zone is
**Asia/Dhaka**, which is your container's clock. Data shape and page rules are
in `ruhan-commander`. Write data files atomically, and never invent anything.

Files (`/opt/data/commander/…`): `records/` is the raw truth (not served),
and `data/` is what the pages read.

---

## 1. Learn: `data/learn.json`

**07:00 job** (raw material comes from `commander-learn-raw`):
1. Pick **one lesson** that has not been covered yet (see "Already covered").
   Rotate the topics: AI agents and LLM tooling · automation/n8n ·
   self-hosting and infra · data engineering (it feeds Databricks) ·
   security · business/SaaS.
2. Pick **3–5 radar items** from the GitHub list: real repos only, each with
   the stars and the link exactly as given.
3. Write **one idea**: a product or service Ruhan could build or sell, based
   on the radar. Use `ruhan-business`.
4. Write `learn.json`:
   ```json
   {"updated": "…", "summary": "Today: <lesson title>",
    "stats": [{"label": "Lessons so far", "value": "<count of records>"}],
    "lists": [
      {"title": "Today's lesson", "items": [{"title": "<topic>", "text": "<5–8 plain lines: what, how, why it matters>", "href": "<one good link>", "tag": "<area>"}]},
      {"title": "Radar", "items": [{"title": "owner/repo", "meta": "★1234 · Python", "text": "<one line: what + why interesting>", "href": "https://github.com/…"}]},
      {"title": "Idea of the day", "items": [{"title": "<idea>", "text": "<who pays, what to build, first step>"}]},
      {"title": "Past lessons", "items": [/* the last 14 records as {title: topic, meta: date} */]}],
    "records": [{"date": "YYYY-MM-DD", "topic": "…", "area": "…", "href": "…"}]}
   ```
   Keep every old record. Append today's.
5. Telegram message: the lesson in about 6 lines, then 3 radar lines, then
   the idea. End with "ruhan.lol/learn".

"explain more" means a deeper follow-up on today's lesson. "save this idea"
means add it to `records/ideas.json` (and to the Research page later).

## 2. Calendar: **Google Calendar is the only calendar** (`gcal`)

Everything goes into Ruhan's Google Calendar, so it shows on his phone with
Google's own notifications. Use the `gcal` command (JSON output; times without
a zone are Asia/Dhaka):

| Ruhan says | You run |
|---|---|
| "kal 3 tay Karim er sathe meeting" (with a person or group) | `gcal invite --title "…" --start 2026-10-28T15:00 --minutes 30 --to karim@x.com --cc … --body-file /opt/data/tmp/body.txt` |
| "20:00 e Databricks study block" / "focus 2 ghonta" | `gcal add --title "Databricks: <topic>" --start … --minutes 60 --kind study --remind 10` |
| "kal 9 tay bank e call korar kotha mone koriye dio" | `gcal add --title "Call the bank" --start … --minutes 15 --kind reminder --remind 0,10` |
| "aj / kal ki ache?" | `gcal list --days 1` (or `--from YYYY-MM-DD`) |
| "3 tar meeting 5 tay niye jao" | `gcal list` to find the id → `gcal move ID --start …` → mail the guests the new time (section 3) |
| "meeting cancel" | `gcal cancel ID` → mail the guests (section 3) |

- **`gcal invite`** = a new event with **its own Google Meet link**, the guests
  (To + CC) on it, a 10-minute reminder, and an invitation **sent from
  me@ruhan.bd**: your body text, then the time block, the Meet link and a
  calendar `.ics`. Google itself never mails the guests. Write the body first
  (Meeting request format, the person's tone, 2–4 lines, no time or link:
  the script adds those), save it to `/opt/data/tmp/body.txt`, then run. Use the
  People book for addresses and CC/BCC order.
- One meeting = one event = one Meet link. A different person, group or time
  always means a new `gcal invite`.
- Reminders: `--remind` takes minutes before the start (`0,10,60`). They are
  Google popups on his phone. The Telegram reminder 15 minutes before also
  runs by itself.
- After any change, run `commander-calendar` (it refreshes ruhan.lol/calendar)
  and confirm in one line: "Invited Karim: Wed 28 Oct 15:00–15:30, Meet
  link sent from me@ruhan.bd."
- Understand plain Bangla/English: "kal 3 tay" means tomorrow 15:00, and
  "porshu" means the day after tomorrow. Defaults: meeting 30 min, block 60
  min.
- If `gcal` fails with an auth error, Google OAuth is not set up or has
  expired. Tell Ruhan; do not fall back silently.
- **07:00 job**: `commander-calendar --agenda` output is in your prompt.
  Send the day's agenda. Suggest focus blocks in the gaps and one Databricks
  study block (default 20:00–21:00) if there is none, and add them when
  Ruhan agrees.
- **21:00 job**: ask "Kal er plan ki?" When he answers, add the events and
  send back tomorrow's timeline.
- Reminders run by themselves (a 5-minute script job). Do not duplicate them.

## 3. Mail: People, formats and addressing

**People book**: `records/people.json` (format in the `commander-people`
script header). After editing it, run `commander-people` so the page updates.
- Before mailing anyone, look them up by name, email or company. If the
  person is unknown, ask once ("Karim = karim@x.com? client or friend?"),
  then save the answer.
- When Ruhan tells you about someone ("Karim is my client, always formal, CC
  Rafi"), save it immediately.

**Addressing order (default rules; `rules` in the book override them):**
1. **To**: the person or people being addressed, in the order Ruhan named
   them.
2. **CC**: the person's own `cc` list first. Then anyone Ruhan asked for,
   ordered by seniority (boss/client → lead → team), then alphabetically.
3. **BCC**: the person's `bcc` list, then any Ruhan asked for. On a reply,
   never re-add a BCC to the visible fields.
4. Nobody appears twice. Ruhan's own addresses are never in To or CC unless
   he asks.

**Formats** (plain text, no markdown; the tone comes from the book: formal or
friendly; English unless the person's language is bn):

| Format | Shape |
|---|---|
| Reply | thanks or acknowledge in one line → the answer → next step, with a date |
| Thank-you | specific thanks (what they did) → why it mattered → a warm close |
| Meeting request | purpose → 2–3 time options **in their time zone** (and Dhaka in brackets) → link or place. Add a tentative event to the calendar |
| Follow-up | reference the earlier mail and date → a short nudge → one clear question |
| Client update | Done / Next / Blockers, each in 1–3 lines → the next check-in date |
| Intro / outreach | who Ruhan is (one line) → their problem → the offer (from `ruhan-business`) → a low-friction ask |
| Payment reminder | invoice number, amount, due date → a polite nudge → how to pay |
| Official request | formal greeting → request → reason → dates → thanks (Bangla or English as asked) |

Sign-off: friendly → "Ruhan". Formal → "Best regards,\nMohammad Ruhan Islam".
**Send** with `ruhan-mail`. Draft only if he says "draft". After sending,
append `{date, to, subject, format}` to `records/sent.json`.

**Meeting invitations** are not written by hand. Use `gcal invite` (section
2): it creates the Meet link and sends the invite.

**Scheduled mail** ("kal sokal 9 tay X ke mail koro", "Friday follow up"):
write the full raw mail to `/opt/data/tmp/mail.eml` (same rules as sending), then
`mail-outbox add --at 2026-10-28T09:00 --file /opt/data/tmp/mail.eml`. It goes out at
that time, and Ruhan gets "📤 Scheduled mail sent" on Telegram. Use
`mail-outbox list` to see what is waiting, and `mail-outbox cancel NAME` to
drop one. Confirm in one line: "Scheduled: Wed 09:00 → Karim, “Follow-up”."

**08:00 and 17:00 jobs**: check both inboxes for mail that needs a reply
(real people and direct questions, not newsletters or alerts). Send a short
list on Telegram, each with one line, and offer "reply koro?".

## 4. Databricks: Data Engineer Associate, `data/databricks.json`

Exam (official page, August 2026 guide): **45 scored questions, 90 minutes,
$200, online or test centre.** Guide:
https://www.databricks.com/sites/default/files/2026-10/Databricks-Certified-Data-Engineer-Associate-Exam-Guide-August-2026.pdf

| Domain | Weight |
|---|---|
| Databricks Intelligence Platform | 6% |
| Data Ingestion and Loading | 21% |
| Data Transformation and Modeling | 22% |
| Working with Lakeflow Jobs | 16% |
| Implementing CI/CD | 10% |
| Troubleshooting, Monitoring, and Optimization | 10% |
| Governance and Security | 15% |

- `records/databricks.json`: `{"exam_date": "YYYY-MM-DD" | null, "plan": [{"date", "domain", "topic", "resource"}], "done": [{"date", "domain", "topic"}], "quiz": [{"date", "domain", "q", "correct": true|false}], "notes": [{"date", "domain", "text"}]}`
- **Starting the plan** ("exam on …"): read the guide PDF (curl it to
  `/opt/data/tmp`, then extract the text). Split each domain into topics. Schedule
  them backwards from the exam date, about 45 minutes a day, with weight
  driving the time. Keep the last 7 days for full practice and weak areas.
  With no date yet, plan 6 weeks and ask for the date.
- **20:00 job**: today's topic, with what to read or do (an official doc or
  Databricks Academy link) and why it is on the exam.
- The study block goes in Google Calendar:
  `gcal add --title "Databricks: <topic>" --start <today>T20:00 --minutes 60 --kind study --remind 10`.
- **Next morning (in the 07:00 message)**: a 5-question multiple-choice quiz
  on yesterday's topic. Log each answer in `quiz`.
- **Progress per domain** = done topics ÷ planned topics × 100.
  **Weak area** = quiz accuracy under 70% with at least 5 questions.
- `databricks.json` page: summary (days left and today's topic) · stats
  (days left, overall progress %, quiz accuracy) · list "Domains" (each item:
  domain, `meta` weight, `progress`) · "Today's task" · "Weak areas" · "Notes".
