---
template: solution
order: 1

icon: bot

# page character — see src/components/look/look.css
look:
  accent: ember
  hero: split
  story: flow
  offers: grid
  pains: light

seo:
  path: /solutions/ai-agent-development/
  title: "AI Agent Development & Chatbots for Small Business | Ruhan"
  description: "AI agent development for small businesses: agents and chatbots that answer customers, qualify leads, book calls and hand off to your team — on your terms."
  og-title: "AI agent development: agents that answer, qualify and book"
  og-image-alt: "An AI agent answering a customer, booking a call and handing off to a person"
  index: "true"

keywords:
  primary: AI agent development
  secondary:
    - AI chatbot development
    - RAG chatbot
    - AI receptionist
    - private ChatGPT
    - n8n
    - lead qualification
    - small business
  long-tail:
    - AI agent that books appointments
    - chatbot trained on company documents
    - AI receptionist for dental clinics
    - private ChatGPT for business
    - AI chatbot cost for small business

hero:
  crumb: AI Agents & Chatbots
  kicker: "AI agent development · chatbots · AI receptionist"
  line: "AI agents that answer, qualify and book — while you sleep."
  lede: "AI agent development for small businesses in the US and Australia: we build agents and chatbots that answer, qualify and book. They answer from your own documents, handle lead qualification, book the call and hand off to a person when it matters. We've done this before — you won't have to think about the moving parts."
  cta: Get a free agent plan
  scene: viz-agent
  chips:
    - Answers 24/7
    - Cites your documents
    - Hands off to a human

pains:
  title: "The questions don't stop when you do"
  items:
    - quote: "We miss leads after 6pm."
      note: "Most enquiries arrive when the office is closed. By morning, they've booked someone else."
    - quote: "My team answers the same 20 questions every day."
      note: "Pricing, hours, availability, 'do you do X?' — hours a week of copy-paste replies."
    - quote: "We can't paste client data into ChatGPT."
      note: "You want AI's speed without sending confidential information to someone else's servers."

story:
  title: "Four steps from inbox chaos"
  accent: "to an agent that works"
  sub: "This is our routine, not an experiment. Each step is small, visible and yours to approve."
  steps:
    - title: Listen
      text: "We read a few weeks of real enquiries — chats, emails, calls — and find the questions that eat your time and the moments a human must step in."
      caption: "Example: 214 conversations read · 37 repeat questions found"
    - title: Map
      text: "We map every answer to its source (website, PDFs, price list) and write the rules: what the agent may say, when it books, when it hands off."
      caption: "Every answer tied to a document you approve"
    - title: Build
      text: "We connect the agent to your website and WhatsApp, your knowledge, and your CRM and calendar — then test it against the real questions from step one."
      caption: "Live on web + WhatsApp · CRM and calendar connected"
    - title: Run
      text: "Each week we review transcripts, fix weak answers and add new ones. You get a short report: resolved, booked, handed off."
      caption: "Weekly review — the agent gets better, not stale"
  flow:
    - label: "Website & WhatsApp"
      sub: "where customers ask"
      icon: chat
      tile: "1"
      from: "1"
    - label: "Your AI agent"
      sub: "answers, qualifies, books"
      icon: bot
      tile: "2"
      from: "3"
    - label: "Your knowledge"
      sub: "site, PDFs, price list"
      icon: book
      tile: "3"
      from: "2"
    - label: "CRM & calendar"
      sub: "lead saved, call booked"
      icon: calendar
      tile: "4"
      from: "3"
    - label: "Your team"
      sub: "handoff with full context"
      icon: user
      tile: "1"
      from: "4"

build:
  title: "Seven AI agents we build"
  accent: "for small businesses"
  sub: "Our AI agent development and AI chatbot development work comes down to these seven. Pick one or combine them — each runs on infrastructure you control and comes with a weekly review."

offers:
  - name: "Lead-qualifying AI agent"
    brief: "Answers questions on your website and WhatsApp, handles lead qualification and books the call — then hands off to your team with the full conversation."
    log:
      - "New chat: pricing question"
      - "Lead scored 82 · fits your criteria"
      - "Booked Tue 10:30 · CRM updated"
    get: "Agent on web + WhatsApp, CRM and calendar sync, weekly report"
    live: "Typically 2–3 weeks"
    stack: [n8n AI agent, Typebot, Your CRM]
  - name: "Knowledge chatbot (RAG chatbot)"
    brief: "A chatbot trained on your own documents that cites the source for every answer and says 'I don't know' instead of guessing."
    log:
      - "Q: What's the refund window?"
      - "Found in policies.pdf · section 4"
      - "Answered with source link"
    get: "Chatbot, document pipeline, answer-quality checks"
    live: "Typically 1–2 weeks"
    stack: [RAGFlow, Docling, Open WebUI]
  - name: "AI receptionist (voice)"
    brief: "Answers the phone 24/7 in a natural voice, books appointments and texts your staff a summary of every call."
    log:
      - "Call 7:42pm · new patient"
      - "Booked Thu 9:00 · SMS confirmation"
      - "Summary sent to front desk"
    get: "Phone number, voice agent, booking, call summaries"
    live: "Typically 3–4 weeks"
    stack: [Pipecat, Cal.diy, n8n]
  - name: "Private ChatGPT for your office"
    brief: "A ChatGPT-style assistant on your own server — your team gets AI speed, and client data never leaves your network."
    log:
      - "Staff login with company SSO"
      - "Draft reply from case notes"
      - "Nothing sent to outside AI"
    get: "Install, single sign-on, usage policy, staff guide"
    live: "Typically 1 week"
    stack: [Ollama, Open WebUI, AnythingLLM]
  - name: "Document data extraction"
    brief: "Invoices, forms and contracts read automatically — the fields land in your spreadsheet or CRM, with a human check for anything unsure."
    log:
      - "Invoice received by email"
      - "Supplier, total, due date extracted"
      - "Added to accounts · 1 flagged for review"
    get: "Extraction flow, review queue, export to your tools"
    live: "Typically 2 weeks per document type"
    stack: [Docling, Paperless-ngx, n8n]
  - name: "Browser automation agent"
    brief: "For portals without an API: an agent logs in, downloads the report or fills the form on schedule, and alerts you if anything changes."
    log:
      - "06:00 · login to supplier portal"
      - "Report downloaded · 3 new orders"
      - "Posted to Slack · no errors"
    get: "Scheduled agent, error alerts, run history"
    live: "Typically 1–2 weeks"
    stack: [browser-use, Playwright, n8n]
  - name: "AI data labelling with human QA"
    brief: "Training data for your own AI: the model pre-labels, a person checks, and you get a clean dataset with a quality score."
    log:
      - "5,000 items pre-labelled by AI"
      - "Human review on low-confidence items"
      - "Dataset exported · quality 97%"
    get: "Labelled dataset, QA report, labelling guide"
    live: "Depends on volume"
    stack: [Label tooling, Python, Human QA]

hood:
  title: "Proven parts,"
  accent: "assembled for you"
  sub: "No experimental black boxes. Open-source tools used by thousands of teams, set up so you own the result."
  items:
    - name: "Your data stays yours"
      text: "Agents run in your cloud account or on your own server. Private setups use local models — nothing goes to outside AI."
      icon: lock
      tile: "1"
    - name: "Answers you can trace"
      text: "Every answer points to the document it came from. If the agent isn't sure, it says so and hands off."
      icon: book
      tile: "2"
    - name: "Watched, not abandoned"
      text: "Conversation logs, cost tracking and a weekly review keep the agent accurate after launch."
      icon: chart
      tile: "3"
  built-on:
    - "n8n (208k★)"
    - "Ollama (185k★)"
    - "Open WebUI (157k★)"
    - "RAGFlow (93k★)"
    - "Docling (70k★)"
    - "Pipecat (17k★)"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Clinic owner"
      line: "We lose calls after hours and my front desk is drowning in the same questions."
    - who: us
      name: "Ruhan"
      line: "That's the most common one we see. Send us a few weeks of enquiries — we'll show you which questions an agent can take and where your team still needs to step in."
    - who: client
      name: "Clinic owner"
      line: "What about patient data? I can't have it going to OpenAI."
    - who: us
      name: "Ruhan"
      line: "Then it won't. We'll run the model on a server you control. You'll get a written plan and a fixed price before anything is built."

engagement:
  title: "Three ways to start"
  items:
    - name: Quick start
      time: "About 1 week"
      what: "One chatbot or a private ChatGPT install, connected to your documents."
      best: "Best when you want to see AI working on your data first."
      kind: plain
    - name: Agent project
      time: "2–6 weeks"
      what: "A full agent — channels, knowledge, CRM, calendar and handoff — with milestones and weekly demos."
      best: "Best when leads or calls are slipping through."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Weekly transcript reviews, new answers, cost and quality reports, model updates."
      best: "Best once your agent is live and earning its keep."
      kind: plain

faq-title: "AI chatbot development, answered"
faq:
  - q: "What does AI agent development include?"
    a: "Our AI agent development covers the whole job: reading your real enquiries, mapping answers to your documents, connecting your website, WhatsApp, CRM and calendar, testing, and weekly reviews after launch."
  - q: "How much does an AI chatbot cost for a small business?"
    a: "It depends on the channels and systems involved. After a free assessment you get a fixed price in writing for the setup, plus an optional monthly plan for reviews and updates."
  - q: "Will the AI agent make things up?"
    a: "We limit it to your approved documents, make it cite the source for every answer and tell it to hand off when it isn't sure. Weekly reviews catch weak answers early."
  - q: "Can the agent book appointments and update our CRM?"
    a: "Yes. It connects to common calendars and CRMs, books the slot, saves the lead and passes the full conversation to your team."
  - q: "Can we use AI without sending client data to OpenAI?"
    a: "Yes. A private setup runs open-source models on a server you control, so confidential information never leaves your network."
  - q: "Do you build on n8n?"
    a: "Often, yes — n8n handles the connections between the agent, your CRM, calendar and messaging. We choose the tools that fit your systems, not the other way round."

cta:
  title: "Tell us the questions"
  accent: "your team is tired of answering."
  text: "Send a few examples. We'll reply within one business day with what an agent could take off your plate."
  placeholder: "e.g. we get 40 enquiries a day, mostly about pricing and availability"

related:
  - name: "Workflow automation"
    path: "/solutions/workflow-automation/"
    line: "Connect forms, CRM, invoices and email with n8n."
  - name: "Data & dashboards"
    path: "/solutions/business-dashboards/"
    line: "All your numbers in one place — or ask them in plain English."
  - name: "Security & compliance"
    path: "/solutions/small-business-cybersecurity/"
    line: "Keep AI and your data safe, with the evidence to prove it."
---

AI Agents & Chatbots solution page. Projects #1–#7 from docs/PROJECT-CATALOG.md.
