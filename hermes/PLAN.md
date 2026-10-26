# Life automation plan: Commander + Hermes

What Ruhan does by hand today, and how Hermes takes it over. Every feature
has three parts:
- **Page:** what ruhan.lol shows.
- **Agent:** what Hermes does, and when.
- **You say:** what Ruhan types on Telegram.

Build order: **Phase 1** first (four things), then Phase 2, then Phase 3.
Nothing on any page is invented: an empty page is fine, and a made-up number
is not.

---

## Phase 1: the four that matter first

### 1. Learn: one new thing a day (page `learn`)

The goal is to learn one tech thing a day, and to hear about new GitHub
projects, ideas and business angles without hunting for them.

**Page**
- **Today's lesson**: one topic, explained in 5–8 lines, a "why it matters"
  line, and one link.
- **Radar**: 3–5 new or rising GitHub projects (name, one line, stars, why it
  is interesting), with links.
- **Idea of the day**: one business or product idea that follows from the
  radar, ideally a service Ruhan could sell (see `ruhan-business`).
- **Archive**: past lessons, newest first, so nothing repeats.

**Agent**
- **07:00 daily**: read GitHub trending and new repos (through the GitHub web
  pages and API), Hacker News top stories, and the newsletters in his inbox.
  Pick one lesson, 3–5 radar items and one idea. Write `learn.json` and
  send a short Telegram message: the lesson plus three radar lines.
- Keep every lesson in `records`, and never repeat a topic.
- Topics rotate: AI agents and LLM tooling, automation (n8n), self-hosting
  and infra, data engineering (this feeds Databricks), security, business and
  SaaS.

**You say**: "aj ki shikhbo?", "explain more", "save this idea", "skip topic X".

### 2. Calendar: the day, planned (page `calendar`)

The goal is that every meeting and task has a time, and he always knows
what is next.

**Page**
- **Today**: a timeline of meetings, focus blocks, study blocks and travel,
  each with time, title, place or link, and who is attending.
- **Next 7 days**: grouped by day.
- **Now / next**: shown at the top of the Overview.

**Agent**
- Adds events from Telegram: "kal 3 tay Karim er sathe meeting, Zoom".
- Reads invites from mail (`.ics` files, "meeting at …" mails) and proposes
  adding them.
- **07:00**: sends the day's agenda on Telegram and writes `calendar.json`.
  Leaves free gaps for focus and for Databricks study.
- **15 minutes before** each meeting: a Telegram reminder with the link.
- **21:00**: asks "kal er plan ki?", then builds tomorrow from the answer.
- Source: Hermes' own calendar (records in `calendar.json`). Google Calendar
  sync is an option. See Open questions.

**You say**: "add meeting …", "aj ki ache?", "move 3pm to 5pm", "cancel …".

### 3. Mail: sent the way he wants (page `mail` + `people`)

The goal is to say who and what in one line, and have Hermes write it
properly, address it to the right people in the right order, and send it.

**People book** (`people.json`, private, behind the login)
- For each person: name, email(s), who they are (client, boss, team,
  friend, vendor), company, language, and tone (formal, friendly).
- **CC/BCC rules** per group. Example: client mails always CC the team lead,
  and BCC Ruhan's own archive.
- **Order rule**: To is the person addressed. CC is by seniority (boss →
  lead → team), then alphabetical. BCC is last and never shown in a reply.
- Hermes builds this from sent mail history, and Ruhan corrects it ("Karim
  is my client, always formal").

**Formats** (each one is a template in the `ruhan-mail` skill)
1. Reply: acknowledge, answer, next step.
2. Thank-you note.
3. Meeting request: proposes 2–3 times in their time zone, and adds the
   meeting to the calendar.
4. Follow-up: no reply after N days, with a gentle nudge.
5. Client update: done, next, blockers.
6. Intro or cold outreach (US/AU clients, from `ruhan-business`).
7. Invoice or payment reminder.
8. Leave or official request (Bangla or English, formal).

Every mail is plain text, signed "Ruhan" or the full name by tone, and sent
from me@ruhan.bd.

**Page**
- Unread by inbox (auto, every 15 min).
- **Needs reply**: Hermes' pick, with one line each.
- **Sent by Hermes**: a log of what went out.
- **People**: the book, with group and CC rules.

**Agent**
- "Karim ke thanks janao" → finds Karim in People, chooses the Thank-you
  format and his tone, fills To/CC/BCC by the rules, sends, and logs it.
- **08:00 and 17:00**: "needs reply" summary on Telegram.
- Unknown person → asks once ("Karim = karim@x.com, client?"), then saves
  the answer to People.

**You say**: "X ke mail koro …", "reply to Y: …", "follow up Z on Friday",
"who is X?".

### 4. Databricks prep (page `databricks`)

The goal is a study plan to exam day, with a small daily task and proof of
progress.

**Page**
- Exam name, date and countdown.
- **Progress per domain**: % covered, plus practice score.
- **Today's task**: one topic (30–60 min), a resource link, and 5 practice
  questions.
- **Weak areas**: domains where the quiz score is under 70%.
- **Notes**: short notes Ruhan dictates.

**Agent**
- Builds the plan backwards from the exam date, from the official exam
  guide.
- **20:00 daily**: sends today's task, puts the study block in the calendar,
  and runs a 5-question quiz on Telegram the next morning.
- Updates progress from quiz results, and moves more time to weak areas.

**You say**: "start Databricks plan, exam on …", "quiz me", "note: …",
"done with Delta Lake".

---

## Phase 2: daily life

| Page | What it shows | Agent |
|---|---|---|
| **To-do** | today, upcoming, done. Each task has a time slot on the calendar | "todo: …" adds it; 07:00 the agenda includes due tasks; overdue gets nudged |
| **Expenses** | today / week / month totals by category (BDT) | "expense 250 lunch" logs it; SSLCOMMERZ / bank mails are read automatically; monthly summary |
| **Habits** | gym, reading, prayer, sleep: streaks | one tap/one word per day on Telegram |
| **Journal** | one line a day, and things worth remembering | 22:00 "aj ki holo?" → saved |
| **Books** | current book, lesson of the day, streak | "book note: …" |

## Phase 3: business

Client hunting, Lead pipeline, Social, Content calendar, Newsletters,
Business numbers, Team, Investments, Research. These come after Phase 1–2
run smoothly. The same pattern applies: Ruhan gives facts, Hermes keeps the
page and sends reminders.

## Overview page (`home`)

**Now / next** from the calendar, **mail needing reply**, **today's lesson**,
**today's Databricks task**, and **due to-dos**, all on one screen. Hermes
refreshes it at 07:00 and after any change.

## Schedule (Asia/Dhaka)

| Time | Job |
|---|---|
| every 15 min | `commander-mail` (no model calls) |
| 07:00 | Learn + agenda + Overview brief → Telegram |
| 08:00, 17:00 | mail needs-reply summary |
| 15 min before each event | reminder |
| 20:00 | Databricks task of the day |
| 21:00 | plan tomorrow |
| 22:00 | journal prompt (Phase 2) |

## Open questions (Ruhan)

1. Calendar source: Hermes' own calendar only, or also Google Calendar?
2. Databricks: which exam, and the target date?
3. Times: are 07:00 / 20:00 / 21:00 right?
4. People: the first 10 people he mails most, with their group and CC rules.
