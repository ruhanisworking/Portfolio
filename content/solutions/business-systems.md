---
template: solution
order: 8

icon: calendar

# page character — see src/components/look/look.css
look:
  accent: wood
  hero: stacked
  story: row
  offers: grid
  pains: light

seo:
  path: /solutions/custom-business-software/
  title: "Custom Business Software & SaaS Alternatives | Ruhan"
  description: "Custom business software you own: CRM, project management, ERP, HR, booking and e-signature on open source — fewer per-seat bills, one place for your data."
  og-title: "Custom business software you own"
  og-image-alt: "Many per-seat software subscriptions fading into one set of systems the business owns"
  index: "true"

keywords:
  primary: custom business software
  secondary:
    - Jira alternative
    - Salesforce alternative
    - ERPNext
    - internal tools
    - Calendly alternative
    - small business
  long-tail:
    - self-hosted project management for small teams
    - open source CRM for small business
    - ERP for small manufacturing business
    - self-hosted Notion and Slack alternative

hero:
  crumb: Business Systems
  kicker: "Custom business software · CRM · ERP · internal tools"
  line: "Run the business on software you own."
  lede: "Custom business software for small teams in the US and Australia. We replace the pile of per-seat subscriptions with open-source systems on your own server — projects, CRM, ERP, HR, booking and e-signature — set up, migrated and supported."
  cta: Get a free systems plan
  scene: viz-saas
  chips:
    - No per-seat fees
    - Your data, one place
    - Migration included

pains:
  title: "Twelve apps, twelve bills, twelve logins"
  items:
    - quote: "We pay for twelve SaaS tools."
      note: "Each one was cheap on its own. Together they cost more than a hire — and still don't talk to each other."
    - quote: "Every new hire costs us more seats."
      note: "Per-seat pricing taxes growth. Open-source systems cost the same whether you're ten people or fifty."
    - quote: "Our data is scattered everywhere."
      note: "Customers in one tool, projects in another, invoices in a third — and nobody sees the whole picture."

story:
  title: "From a stack of subscriptions"
  accent: "to systems that fit"
  sub: "We don't rebuild what exists. We pick proven open-source systems, shape them to how you work, and move your data in."
  steps:
    - title: Listen
      text: "We list every tool you pay for, who uses it and what it's really for — usually fewer jobs than tools."
      caption: "Example: 12 tools doing 6 jobs"
    - title: Map
      text: "We match each job to one system you'll own, and plan the data move so nothing is lost."
      caption: "One system per job · nothing lost"
    - title: Build
      text: "We set them up on your server with single sign-on, migrate the data and train the team in short sessions."
      caption: "One login for everything"
    - title: Run
      text: "Updates, backups and small changes as the team grows — and the licence line on your budget stays at zero."
      caption: "Licence fees: $0 — support when you need it"
  flow:
    - label: "Your team"
      sub: "one login (SSO)"
      icon: user
      tile: "1"
      from: "1"
    - label: "Projects & tasks"
      sub: "Plane / Huly"
      icon: calendar
      tile: "2"
      from: "2"
    - label: "Customers"
      sub: "Twenty CRM"
      icon: chat
      tile: "3"
      from: "2"
    - label: "Operations"
      sub: "ERPNext · HR · booking"
      icon: server
      tile: "4"
      from: "3"
    - label: "One data source"
      sub: "backed up, reported"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Six internal tools"
  accent: "for small business teams"
  sub: "Custom business software doesn't have to mean starting from scratch — these are proven systems, shaped to you."

offers:
  - name: "Project management (Jira alternative)"
    brief: "A modern Jira alternative on your server — boards, cycles, docs — migrated from your current tool with templates and training."
    log:
      - "Jira export · 1,240 issues"
      - "Imported to Plane · templates set"
      - "Team trained · Jira cancelled"
    get: "Plane or Huly, migration, templates, training"
    live: "Typically 1 week"
    stack: [Plane, Huly, SSO]
  - name: "CRM (Salesforce alternative)"
    brief: "A clean, modern Salesforce alternative with your pipeline, industry templates and automations — without the licence bill."
    log:
      - "Contacts + deals imported"
      - "Pipeline + automations set"
      - "Sales team live"
    get: "Twenty CRM, import, automations"
    live: "Typically 1–3 weeks"
    stack: [Twenty, n8n, Postgres]
  - name: "ERP / HR / payroll"
    brief: "ERPNext and Frappe HR set up as a small module set — stock, purchasing, HR, payroll — with your data migrated."
    log:
      - "Items + suppliers imported"
      - "Purchase → stock → invoice flow"
      - "Payroll run tested"
    get: "ERPNext modules, migration, training"
    live: "Typically 4–10 weeks"
    stack: [ERPNext, Frappe HR, Odoo]
  - name: "Booking + e-signature"
    brief: "A Calendly alternative and DocuSign alternative on your own domain, with automatic follow-ups after every booking and signature."
    log:
      - "Booking page on your domain"
      - "Contract sent · signed"
      - "Follow-up email automatic"
    get: "Cal.diy, Documenso, follow-up flows"
    live: "Typically under 1 week"
    stack: [Cal.diy, Documenso, n8n]
  - name: "Admin panel / internal tool"
    brief: "Internal tools on top of your database: an admin panel with roles and an audit log of every change."
    log:
      - "Tables + roles defined"
      - "Admin panel live"
      - "Every edit logged"
    get: "Custom panel, roles, audit log"
    live: "Typically 2–4 weeks"
    stack: [Refine, Appsmith, ToolJet]
  - name: "Private office cloud"
    brief: "Files, chat, calendar and wiki on your own server instead of Drive, Slack and Notion — backed up properly."
    log:
      - "Files moved from Drive"
      - "Chat + wiki live"
      - "Backups tested"
    get: "Nextcloud, chat, wiki, backups"
    live: "Typically 1–3 weeks"
    stack: [Nextcloud, Mattermost, Docmost]

hood:
  title: "Proven systems,"
  accent: "not a custom science project"
  sub: "Building from scratch is slow and fragile. We start from open-source systems used by thousands of companies."
  items:
    - name: "One login"
      text: "Single sign-on across every system — add a hire once, remove a leaver once."
      icon: user
      tile: "1"
    - name: "Migration done for you"
      text: "We move the data, check the counts and keep the old tool read-only until you're happy."
      icon: doc
      tile: "2"
    - name: "Costs that don't scale with headcount"
      text: "Hosting is a fixed cost. Adding people doesn't add licence fees."
      icon: chart
      tile: "3"
  built-on:
    - "Plane (61k★)"
    - "Twenty (60k★)"
    - "ERPNext (41k★)"
    - "Nextcloud (37k★)"
    - "Cal.diy (49k★)"
    - "Refine (36k★)"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Agency founder"
      line: "We spend more on software than on our newest hire, and half of it overlaps."
    - who: us
      name: "Ruhan"
      line: "Send us the list of tools and seat counts. We'll show which jobs overlap and what owning them would cost instead."
    - who: client
      name: "Agency founder"
      line: "Switching sounds painful."
    - who: us
      name: "Ruhan"
      line: "We do it one tool at a time, move the data for you and keep the old one read-only until your team is comfortable."

engagement:
  title: "Three ways to start"
  items:
    - name: One tool
      time: "About 1 week"
      what: "Replace one subscription — usually project management or booking."
      best: "Best for testing the waters."
      kind: plain
    - name: Stack consolidation
      time: "3–10 weeks"
      what: "Several systems, single sign-on, migration and training."
      best: "Best when SaaS bills are a real budget line."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Updates, backups, user changes and small improvements."
      best: "Best once the team runs on it daily."
      kind: plain

faq-title: "Jira alternative, Salesforce alternative and more, answered"
faq:
  - q: "What is custom business software?"
    a: "Software shaped to how your business works. Usually that means proven open-source systems — CRM, projects, ERP — configured for you, rather than code written from scratch."
  - q: "Is open-source software reliable enough to run a business?"
    a: "The systems we use run thousands of companies. What matters is setup, backups and updates — which we handle."
  - q: "Can you move our data from our current tools?"
    a: "Yes. We migrate, check the record counts and keep the old system read-only until you're confident."
  - q: "What does ERPNext cost?"
    a: "There's no licence fee. You pay for hosting and for setup and support, with a fixed price agreed after a free assessment."
  - q: "Can we still use Microsoft 365 or Google Workspace?"
    a: "Yes. Single sign-on and integrations connect the new systems to the email and calendar you already use."

cta:
  title: "Send us your software bill."
  accent: "We'll show you what to own."
  text: "We'll reply within one business day with what overlaps and what owning it would cost."
  placeholder: "e.g. 25 people · Jira, HubSpot, Calendly, DocuSign, Slack, Notion"

related:
  - name: "Workflow automation"
    path: "/solutions/workflow-automation/"
    line: "Connect the systems so data moves itself."
  - name: "Data & dashboards"
    path: "/solutions/business-dashboards/"
    line: "See the whole business on one screen."
  - name: "Backup & recovery"
    path: "/solutions/small-business-backup/"
    line: "Systems you own, backed up properly."
---

Business Systems solution page. Projects #40–#45 from docs/PROJECT-CATALOG.md.
