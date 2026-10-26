---
template: solution
order: 4

icon: chart

# page character — see src/components/look/look.css
look:
  accent: amber
  hero: split
  story: row
  offers: bento
  pains: dark

seo:
  path: /solutions/business-dashboards/
  title: "Business Dashboards & Data Automation | Ruhan"
  description: "Business dashboards for small teams: Stripe, Shopify, CRM and spreadsheets joined into live dashboards — or just ask your data a question in plain English."
  og-title: "Business dashboards: all your numbers on one screen"
  og-image-alt: "A dashboard chart building from joined data, then answering a plain-English question"
  index: "true"

keywords:
  primary: business dashboards
  secondary:
    - data pipeline
    - web scraping
    - Excel to database
    - text-to-SQL
    - business intelligence
    - small business
  long-tail:
    - combine Stripe and Shopify data in one dashboard
    - replace spreadsheets with a database app
    - ask your database in plain English
    - competitor price scraping service

hero:
  crumb: Data & Dashboards
  kicker: "Business dashboards · data pipelines · ask your data"
  line: "All your numbers. One screen. Ask it anything."
  lede: "Business dashboards for small teams in the US and Australia. We join Stripe, Shopify, your CRM and the spreadsheets nobody wants to own into one live view — and let you ask questions in plain English when a chart isn't enough."
  cta: Get a free data plan
  scene: viz-dashboard
  chips:
    - Live, not weekly
    - One source of truth
    - SQL shown for review

pains:
  title: "The numbers exist. Nobody trusts them."
  items:
    - quote: "Our numbers live in ten spreadsheets."
      note: "Every report starts with copying between files, and every copy is a little different."
    - quote: "Two reports, two different totals."
      note: "When finance and sales disagree on last month, decisions wait for an argument to finish."
    - quote: "I just want to ask a simple question."
      note: "'Who were our top customers last quarter?' shouldn't need a ticket to IT."

story:
  title: "From ten spreadsheets"
  accent: "to one screen you trust"
  sub: "Business intelligence without the enterprise price tag — built on open-source tools you own."
  steps:
    - title: Listen
      text: "We list the questions you actually ask each week, and find where each answer's data lives today."
      caption: "Example: 14 recurring questions · 6 data sources"
    - title: Map
      text: "We design one clean model: what a customer, an order and revenue mean — once, for everyone."
      caption: "One definition of 'revenue' for the whole company"
    - title: Build
      text: "A data pipeline syncs every source on schedule, the dashboards are built around your questions, and a chat answers the rest."
      caption: "Syncs hourly · dashboards · ask-your-data chat"
    - title: Run
      text: "We watch the syncs, fix them when an app changes, and add views as new questions come up."
      caption: "Data you can trust next quarter, too"
  flow:
    - label: "Your sources"
      sub: "Stripe, Shopify, CRM, Sheets"
      icon: globe
      tile: "1"
      from: "1"
    - label: "Data pipeline"
      sub: "scheduled syncs"
      icon: bolt
      tile: "2"
      from: "3"
    - label: "One warehouse"
      sub: "clean, defined once"
      icon: server
      tile: "3"
      from: "2"
    - label: "Dashboards"
      sub: "live views per role"
      icon: chart
      tile: "4"
      from: "3"
    - label: "Ask your data"
      sub: "plain-English questions"
      icon: chat
      tile: "1"
      from: "4"

build:
  title: "Four data projects"
  accent: "for small business"
  sub: "Business dashboards are usually the goal; these are the pieces that get you there."

offers:
  - name: "Live business dashboard"
    brief: "Business intelligence in one place: revenue, customers, stock and team metrics, refreshed automatically and emailed weekly."
    log:
      - "4 sources connected"
      - "Dashboards for sales, ops, finance"
      - "Weekly digest emailed Mon 08:00"
    get: "Dashboards, weekly digest, access by role"
    live: "Typically 2–4 weeks"
    stack: [Superset, Metabase, Postgres]
  - name: "Data pipeline (ELT)"
    brief: "A data pipeline that copies Stripe, Shopify, your CRM and more into one database on schedule — your data stack in a box."
    log:
      - "Stripe · Shopify · HubSpot connected"
      - "Synced hourly · history kept"
      - "Ready for dashboards and AI"
    get: "Connectors, warehouse, sync monitoring"
    live: "Typically 1–3 weeks"
    stack: [Airbyte, Postgres, ClickHouse]
  - name: "Web scraping & price data"
    brief: "Web scraping for the public data you need — prices, stock, listings — delivered clean as CSV or an API, with alerts on change."
    log:
      - "Sources checked · terms reviewed"
      - "Daily crawl · 2,400 rows"
      - "Changes alerted · CSV delivered"
    get: "Scheduled crawl, clean data, change alerts"
    live: "Typically 1–2 weeks"
    stack: [Scrapy, Crawl4AI, n8n]
  - name: "Excel to database app"
    brief: "Excel to database in a week: your sheets become one database with forms, permissions and an audit log — still as easy as a spreadsheet."
    log:
      - "7 spreadsheets imported"
      - "Forms + permissions per team"
      - "Every change logged"
    get: "Database app, forms, roles, audit log"
    live: "Typically 1–2 weeks"
    stack: [NocoDB, Budibase, Postgres]

hood:
  title: "Answers you can"
  accent: "check"
  sub: "A dashboard is only useful if people believe it. Ours show their working."
  items:
    - name: "Defined once"
      text: "Revenue, customer and order mean the same thing on every chart — written down and agreed."
      icon: book
      tile: "1"
    - name: "Text-to-SQL, reviewed"
      text: "When you ask in plain English, the generated SQL is shown so an analyst can check it before anyone acts on it."
      icon: chat
      tile: "2"
    - name: "Your data, your server"
      text: "The warehouse runs in your account. No vendor holds your history hostage."
      icon: lock
      tile: "3"
  built-on:
    - name: "Superset"
      stars: "75k★"
      url: "https://github.com/apache/superset"
    - name: "Metabase"
      stars: "50k★"
      url: "https://github.com/metabase/metabase"
    - name: "Airbyte"
      stars: "22k★"
      url: "https://github.com/airbytehq/airbyte"
    - name: "NocoDB"
      stars: "65k★"
      url: "https://github.com/nocodb/nocodb"
    - name: "Vanna"
      stars: "24k★"
      url: "https://github.com/vanna-ai/vanna"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Operations lead"
      line: "Every Monday I spend half the morning stitching three exports together, and the totals never match finance."
    - who: us
      name: "Ruhan"
      line: "Send us last Monday's spreadsheet and the questions it answers. We'll show you which sources feed it and how to make it build itself."
    - who: client
      name: "Operations lead"
      line: "Can my boss just ask it things instead of me?"
    - who: us
      name: "Ruhan"
      line: "Yes — once the data is clean, a chat can answer most questions, and it shows the query it used so you can trust the number."

engagement:
  title: "Three ways to start"
  items:
    - name: First dashboard
      time: "1–2 weeks"
      what: "One source, one dashboard around your top five questions."
      best: "Best for seeing value fast."
      kind: plain
    - name: Data platform
      time: "3–6 weeks"
      what: "Pipeline, warehouse, dashboards per team and ask-your-data chat."
      best: "Best when several tools hold the truth."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Sync monitoring, fixes, new views and quarterly clean-up."
      best: "Best once the business runs on the numbers."
      kind: plain

faq-title: "Data pipelines and dashboards, answered"
faq:
  - q: "What are business dashboards?"
    a: "Business dashboards are live screens of your key numbers — sales, customers, stock, team — pulled automatically from the tools you already use, instead of rebuilt by hand each week."
  - q: "Can you combine Stripe, Shopify and our CRM?"
    a: "Yes. A data pipeline syncs each tool into one database on a schedule, so every chart uses the same, up-to-date data."
  - q: "Is text-to-SQL accurate enough to trust?"
    a: "For routine questions on clean data it works well, but we always show the generated SQL so someone can review it before important decisions."
  - q: "Is web scraping legal?"
    a: "It depends on the site and the data. We review each source's terms and only collect public information you're allowed to use."
  - q: "Do we have to move off Excel?"
    a: "Not all at once. Many teams keep Excel for analysis while the database becomes the single source it reads from."

cta:
  title: "Tell us the question"
  accent: "you can't answer quickly."
  text: "We'll reply within one business day with where the data lives and how to get it on one screen."
  placeholder: "e.g. which customers buy most, by month — across Shopify and our CRM"

related:
  - name: "Workflow automation"
    path: "/solutions/workflow-automation/"
    line: "Automate the data entry behind the numbers."
  - name: "AI agents & chatbots"
    path: "/solutions/ai-agent-development/"
    line: "Let customers ask questions too."
  - name: "Business systems"
    path: "/solutions/custom-business-software/"
    line: "One system instead of ten spreadsheets."
---

Data & Dashboards solution page. Projects #19–#22 from docs/PROJECT-CATALOG.md.
