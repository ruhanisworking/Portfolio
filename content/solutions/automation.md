---
template: solution
order: 2

icon: bolt

# page character — see src/components/look/look.css
look:
  accent: amber
  hero: reverse
  story: row
  offers: rows
  pains: light

seo:
  path: /solutions/workflow-automation/
  title: "Workflow Automation Services with n8n & AI | Ruhan"
  description: "Workflow automation for small businesses: we connect your forms, CRM, invoices and email with n8n and AI — and cut the Zapier bill while we're at it."
  og-title: "Workflow automation that does the copy-paste for you"
  og-image-alt: "An automation moving a lead from a web form to a CRM, an invoice and an email"
  index: "true"

keywords:
  primary: workflow automation
  secondary:
    - n8n
    - Zapier alternative
    - CRM automation
    - AI workflow automation
    - business process automation
    - small business
  long-tail:
    - Zapier to n8n migration
    - n8n automation expert
    - automate invoices from orders
    - automate weekly reports from Google Sheets

hero:
  crumb: Workflow Automation
  kicker: "Workflow automation · n8n · AI workflow automation"
  line: "Stop copying data between five apps."
  lede: "Workflow automation for small businesses in the US and Australia. We map the work your team repeats every day and hand it to n8n — with AI steps where they help and alerts when anything fails. You keep the results; the busywork goes away."
  cta: Get a free automation plan
  scene: viz-automation
  chips:
    - Runs on your server
    - Alerts if a step fails
    - Monthly time-saved report

pains:
  title: "Your team is the glue between your apps"
  items:
    - quote: "We type the same data into five apps."
      note: "A lead arrives by form, then gets re-typed into the CRM, the invoice tool and an email. Every hand-copy is a chance for a typo."
    - quote: "Our Zapier bill keeps growing."
      note: "Per-task pricing punishes you for growing. The same flows can run on your own server for a fixed cost."
    - quote: "Every Monday starts with building a report."
      note: "Someone exports, pastes and formats the same spreadsheet each week — and it's out of date by Wednesday."

story:
  title: "From one long Monday"
  accent: "to flows that run themselves"
  sub: "Business process automation without the consulting theatre. We watch the work, draw it, automate it and keep it running."
  steps:
    - title: Listen
      text: "We sit in on a normal day — screen recording or a call — and list every task where data moves from one app to another by hand."
      caption: "Example: 9 manual hand-offs found in one sales process"
    - title: Map
      text: "We draw the flow: trigger, steps, decisions, owners. You see exactly what will be automated before a single node exists."
      caption: "One diagram you approve — no surprises"
    - title: Build
      text: "We build it in n8n on your own server or account, add AI steps for reading emails or scoring leads, and test with real data."
      caption: "Self-hosted n8n · retries · secrets kept in a vault"
    - title: Run
      text: "Every failed step alerts us and you. Each month you get a short report: runs, errors fixed, hours saved."
      caption: "It keeps working after launch — that's the point"
  flow:
    - label: "Trigger"
      sub: "form, email, new order"
      icon: bolt
      tile: "1"
      from: "1"
    - label: "n8n workflow"
      sub: "steps, rules, retries"
      icon: server
      tile: "2"
      from: "2"
    - label: "AI step"
      sub: "read, classify, score"
      icon: bot
      tile: "3"
      from: "3"
    - label: "Your apps"
      sub: "CRM, accounting, email, Slack"
      icon: globe
      tile: "4"
      from: "3"
    - label: "Report & alerts"
      sub: "runs, errors, time saved"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Five business process automation projects"
  accent: "we build most often"
  sub: "Our workflow automation work usually starts with one of these. Each is fixed-price after a free assessment."

offers:
  - name: "Zapier → n8n migration"
    brief: "Move every Zap to self-hosted n8n — the Zapier alternative with no per-task fees — then compare the monthly bill side by side."
    log:
      - "37 Zaps exported and mapped"
      - "Rebuilt in n8n · tested in parallel"
      - "Zapier switched off · bill compared"
    get: "n8n on your server, every flow migrated, cost report"
    live: "Typically 1–3 weeks"
    stack: [n8n, Coolify, Postgres]
  - name: "CRM automation"
    brief: "Leads flow from forms, email and chat into your CRM, get scored by AI and trigger the right follow-up — automatically."
    log:
      - "Form submitted · lead created"
      - "AI score 74 · assigned to Alex"
      - "Follow-up email queued"
    get: "Lead routing, scoring, follow-up sequences"
    live: "Typically 1–2 weeks"
    stack: [n8n, Your CRM, AI scoring]
  - name: "Reporting & Sheets automation"
    brief: "The Monday report builds itself: data pulled, cleaned and sent — and when you're ready, upgraded to a live dashboard."
    log:
      - "Mon 07:00 · data pulled from 4 sources"
      - "Sheet updated · charts refreshed"
      - "Report emailed to the team"
    get: "Scheduled report, clean data, optional dashboard"
    live: "Typically under 1 week"
    stack: [n8n, Google Sheets, Metabase]
  - name: "Invoice & accounting flow"
    brief: "Orders and tracked time turn into invoices, reminders go out on schedule, and payments land in your accounting tool."
    log:
      - "Order #2210 complete"
      - "Invoice sent · due in 14 days"
      - "Paid · posted to accounts"
    get: "Invoice generation, reminders, accounting sync"
    live: "Typically 1–2 weeks"
    stack: [n8n, Invoice Ninja, Kimai]
  - name: "Email outreach sequence"
    brief: "Personalised outreach that respects your domain: AI-drafted first lines, sensible sending limits and proper SPF/DKIM so it lands in inboxes."
    log:
      - "List cleaned · 412 contacts"
      - "Personalised drafts · reviewed"
      - "Sent in batches · replies to CRM"
    get: "Sequence, deliverability setup, reply tracking"
    live: "Typically 1 week"
    stack: [n8n, Mautic, AI drafting]

hood:
  title: "Boring infrastructure,"
  accent: "on purpose"
  sub: "Automations fail quietly unless someone is watching. Ours are built to be watched."
  items:
    - name: "Self-hosted n8n"
      text: "Runs on your server or cloud account with fixed hosting costs — no per-task pricing as you grow."
      icon: server
      tile: "1"
    - name: "Retries & alerts"
      text: "Every flow retries safely and alerts a human when it can't finish. Nothing fails silently."
      icon: bolt
      tile: "2"
    - name: "Secrets in a vault"
      text: "API keys live in a secrets store, not in the flows. Access is logged and easy to rotate."
      icon: lock
      tile: "3"
  built-on:
    - "n8n (208k★)"
    - "Activepieces (25k★)"
    - "Metabase (50k★)"
    - "Coolify (64k★)"
    - "Invoice Ninja (10k★)"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Agency owner"
      line: "We live in Zapier and it's costing a fortune. Half the zaps break and nobody knows until a client complains."
    - who: us
      name: "Ruhan"
      line: "Export your Zaps and send them over. We'll show you which ones can move to n8n as-is, which are broken today, and what the monthly cost becomes."
    - who: client
      name: "Agency owner"
      line: "Do we have to switch everything at once?"
    - who: us
      name: "Ruhan"
      line: "No — we run both side by side, move flows one group at a time, and only switch Zapier off when the new ones have run clean for a week."

engagement:
  title: "Three ways to start"
  items:
    - name: Single flow
      time: "Days"
      what: "One automation, built and tested — a report, a lead route or an invoice flow."
      best: "Best for proving the value on one painful task."
      kind: plain
    - name: Automation project
      time: "1–4 weeks"
      what: "A whole process or a Zapier migration, with a diagram, milestones and weekly demos."
      best: "Best when several apps and people are involved."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Monitoring, fixes when an app changes its API, new flows as you grow."
      best: "Best once automations run the business."
      kind: plain

faq-title: "n8n and workflow automation, answered"
faq:
  - q: "What is workflow automation?"
    a: "Workflow automation means software moves data and triggers steps between your apps instead of a person copying and pasting — for example, a new form entry becoming a CRM lead, an invoice and an email."
  - q: "Is n8n a good Zapier alternative?"
    a: "For most small businesses, yes. n8n does what Zapier does, can run on your own server, and doesn't charge per task — so costs stay flat as volume grows."
  - q: "Can you add AI to our workflows?"
    a: "Yes. AI workflow automation steps can read emails, extract fields from documents, classify requests or score leads — with a human check where it matters."
  - q: "What happens when an app changes and a flow breaks?"
    a: "The flow alerts us and you. On an ongoing plan we fix it, usually before anyone notices."
  - q: "How much does workflow automation cost?"
    a: "It depends on the number of apps and steps. After a free assessment you get a fixed price in writing."

cta:
  title: "Show us the task"
  accent: "you'd never do again."
  text: "Describe it in two lines. We'll reply within one business day with how we'd automate it."
  placeholder: "e.g. every order gets re-typed into Xero and a Google Sheet"

related:
  - name: "AI agents & chatbots"
    path: "/solutions/ai-agent-development/"
    line: "Agents that answer, qualify and book."
  - name: "Data & dashboards"
    path: "/solutions/business-dashboards/"
    line: "Turn automated data into live dashboards."
  - name: "Business systems"
    path: "/solutions/custom-business-software/"
    line: "CRM, projects and HR you own."
---

Workflow Automation solution page. Projects #8–#12 from docs/PROJECT-CATALOG.md.
