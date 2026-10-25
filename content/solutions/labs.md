---
template: solution
order: 11

icon: chat

# page character — see src/components/look/look.css
look:
  accent: rust
  hero: split
  story: flow
  offers: bento
  pains: dark

seo:
  path: /labs/private-ai-tools/
  title: "Labs: Private AI Tools for Business | Ruhan"
  description: "Private AI tools we're putting to work early: meeting notes that never leave your server, ask-your-database, AI memory and safe agents for small teams."
  og-title: "Private AI tools for small teams, set up today"
  og-image-alt: "A recorded meeting transcribed on a private server answering a question with a timestamp"
  index: "true"

keywords:
  primary: private AI tools
  secondary:
    - private meeting notes
    - text-to-SQL
    - AI memory
    - MCP server
    - local AI
    - small business
  long-tail:
    - private meeting transcription for law firms
    - ask your database in plain English
    - custom MCP server development
    - safe AI agents for small business

hero:
  crumb: Labs
  kicker: "Labs · private AI tools · emerging open source"
  line: "Tomorrow's tools, set up for your team today."
  lede: "Private AI tools that are new on GitHub and not yet on anyone's shopping list — we test them, package them and set them up for small teams in the US and Australia. Each one is a pilot: honest about what works today."
  cta: Ask about a pilot
  scene: viz-labs
  chips:
    - Local AI
    - Pilot first
    - Your data stays put

pains:
  title: "AI is moving faster than your IT"
  items:
    - quote: "Our meetings are confidential. We can't use cloud note-takers."
      note: "Law, health and HR calls shouldn't be uploaded to a stranger's servers to get a summary."
    - quote: "The answer is in our database. I just can't ask it."
      note: "Owners wait days for a report that a well-asked question could answer in seconds."
    - quote: "Our AI forgets everything between chats."
      note: "Assistants that don't remember customers or past decisions repeat the same questions forever."

story:
  title: "From a GitHub trend"
  accent: "to a tool your team uses"
  sub: "We watch the fastest-growing open-source AI projects, try them hard, and only pilot the ones that hold up."
  steps:
    - title: Listen
      text: "We start from your problem — confidential meetings, slow reports, forgetful assistants — not from the tool."
      caption: "Problem first, tool second"
    - title: Map
      text: "We pick the open-source project that fits, check its licence and maturity, and agree what a pilot must prove."
      caption: "Licence checked · success measured"
    - title: Build
      text: "A small pilot on your own server with local AI, so nothing confidential leaves your network."
      caption: "Local models · private by design"
    - title: Run
      text: "Two to four weeks of real use, a written result, then a decision: keep, change or drop."
      caption: "Keep only what earns its place"
  flow:
    - label: "Your problem"
      sub: "meetings, data, memory"
      icon: user
      tile: "1"
      from: "1"
    - label: "Open-source pick"
      sub: "licence + maturity checked"
      icon: book
      tile: "2"
      from: "2"
    - label: "Local AI"
      sub: "on your server"
      icon: server
      tile: "3"
      from: "3"
    - label: "Pilot"
      sub: "2–4 weeks of real use"
      icon: bolt
      tile: "4"
      from: "3"
    - label: "Decision"
      sub: "keep, change or drop"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Six local AI tools"
  accent: "for small business teams"
  sub: "Private AI tools merged from the most promising new open-source projects — offered as pilots."

offers:
  - name: "Private meeting brain"
    brief: "Private meeting notes: record, transcribe and summarise on your server with local AI, then ask what was promised — with a timestamp."
    log:
      - "42-minute call · stays local"
      - "Transcript + summary ready"
      - "Answer with timestamp 18:42"
    get: "Local transcription, summaries, searchable archive"
    live: "Pilot: 2–3 weeks"
    stack: [faster-whisper, Open Notebook, mem0]
  - name: "Ask-your-business AI"
    brief: "Text-to-SQL over your database and CRM in plain English, with every query shown for review and AI costs kept under control."
    log:
      - "Q: churned customers this quarter?"
      - "SQL generated · reviewed"
      - "Answer + chart in 4 seconds"
    get: "Chat over your data, query review, cost limits"
    live: "Pilot: 2–4 weeks"
    stack: [WrenAI, Vanna, LiteLLM]
  - name: "AI that remembers your clients"
    brief: "AI memory for support and sales assistants: they remember each customer's history and past decisions, safely."
    log:
      - "Customer returns after 3 months"
      - "Assistant recalls past order + issue"
      - "Resolved without re-asking"
    get: "Memory layer, assistant integration, privacy rules"
    live: "Pilot: 2–3 weeks"
    stack: [mem0, graphiti, Ollama]
  - name: "AI office in a box"
    brief: "A small team's private AI setup: safe sandboxed agents, passkey logins and connections to your own tools through MCP."
    log:
      - "Agents sandboxed · actions logged"
      - "Passkey login for the team"
      - "Connected to CRM via MCP"
    get: "Sandboxed agents, passkey SSO, MCP connectors"
    live: "Pilot: 3–4 weeks"
    stack: [OpenShell, Pocket ID, MCP]
  - name: "Custom MCP server"
    brief: "An MCP server that lets ChatGPT, Claude or your own agent safely read and act on your CRM, ERP or database."
    log:
      - "Tools defined: search, create, update"
      - "Permissions per tool"
      - "Assistant books a job in your system"
    get: "MCP server, permissions, documentation"
    live: "Pilot: 1–3 weeks"
    stack: [FastMCP, MCP servers, Your API]
  - name: "Document → knowledge"
    brief: "Thousands of old PDFs and scans turned into an AI-ready knowledge base that gives deep, cited answers."
    log:
      - "8,000 PDFs converted"
      - "Graph built across documents"
      - "Cited answers in seconds"
    get: "Conversion pipeline, knowledge base, chat"
    live: "Pilot: 3–4 weeks"
    stack: [MinerU, Marker, GraphRAG]

hood:
  title: "Early,"
  accent: "but not reckless"
  sub: "New tools change fast. We check licences, run them privately and say clearly what's still a pilot."
  items:
    - name: "Licences checked"
      text: "Some new projects have custom licences. We read them before recommending anything."
      icon: book
      tile: "1"
    - name: "Local AI by default"
      text: "Pilots run on models you host, so confidential information never leaves your network."
      icon: lock
      tile: "2"
    - name: "Measured pilots"
      text: "Every pilot has a success measure and a written result. If it doesn't help, we say so."
      icon: chart
      tile: "3"
  built-on:
    - "OpenShell (20k★)"
    - "mem0 (68k★)"
    - "Open Notebook (41k★)"
    - "WrenAI (18k★)"
    - "MCP servers (92k★)"
    - "faster-whisper (26k★)"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Law firm partner"
      line: "We'd love AI meeting notes, but client calls can't go to a cloud service."
    - who: us
      name: "Ruhan"
      line: "Then we'll run transcription and summaries on a machine in your office. Let's pilot it on internal meetings for two weeks first."
    - who: client
      name: "Law firm partner"
      line: "And if it isn't good enough?"
    - who: us
      name: "Ruhan"
      line: "Then the pilot report says so and you've lost two weeks, not a year's subscription. That's the point of a pilot."

engagement:
  title: "How a Labs pilot works"
  items:
    - name: Discovery call
      time: "Free · 30 min"
      what: "Your problem, the candidate tools, and what a pilot would need to prove."
      best: "Best when you're curious but cautious."
      kind: plain
    - name: Pilot
      time: "2–4 weeks"
      what: "A private setup used for real work, with a written result at the end."
      best: "Best for testing before committing."
      kind: featured
    - name: Production
      time: "After the pilot"
      what: "Hardening, backups, monitoring and support for the tools that earned it."
      best: "Best once the pilot proves its value."
      kind: plain

faq-title: "Local AI, AI memory and MCP, answered"
faq:
  - q: "What are private AI tools?"
    a: "AI tools that run on hardware or accounts you control, using open-source or local models, so your data isn't sent to an outside AI provider."
  - q: "Can meeting transcription really run locally?"
    a: "Yes. Open-source speech models now transcribe accurately on a decent office computer or server, with no audio leaving it."
  - q: "What is an MCP server?"
    a: "The Model Context Protocol is a standard way to let AI assistants use your tools and data. An MCP server exposes chosen actions — with permissions — to the assistant."
  - q: "Is text-to-SQL safe on our live database?"
    a: "We connect it read-only, show every generated query and limit what it can see. Important numbers still get a human check."
  - q: "Why pilots instead of full projects?"
    a: "These tools are new. A short pilot proves value on your real work before you invest further."

cta:
  title: "Bring us the problem"
  accent: "AI hasn't solved for you yet."
  text: "We'll reply within one business day with what's worth piloting — and what isn't."
  placeholder: "e.g. confidential client meetings, need summaries without cloud tools"

related:
  - name: "AI agents & chatbots"
    path: "/solutions/ai-agent-development/"
    line: "Production-ready agents and chatbots."
  - name: "Data & dashboards"
    path: "/solutions/business-dashboards/"
    line: "Clean data for ask-your-database."
  - name: "Security & compliance"
    path: "/solutions/small-business-cybersecurity/"
    line: "Keep new AI tools inside your controls."
---

Labs page. Pitches merged from docs/HIDDEN-GEMS.md.
