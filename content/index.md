---
# Home page — SEO, keywords and the lines people should remember.
# tools/check.mjs reads this file and fails the build when the built page
# breaks a rule below (lengths, keyword placement, one H1 …).

seo:
  path: /
  # ≤ 60 characters — primary keyword first, brand last
  title: "AI Automation Engineer for Private AI & Backups | Ruhan"
  # 120–160 characters — who, what, for whom, a reason to click
  description: "I'm Ruhan, an AI automation engineer. I build private AI, n8n workflows, tested backups and server monitoring for small businesses in the US and Australia."
  og-title: "Ruhan — AI automation engineer for private, self-hosted systems"
  og-image-alt: "Ruhan, AI automation and infrastructure engineer, on a river in Bangladesh"
  index: "true"

# What US / Australian buyers type. Primary = the one phrase this page must
# win; secondary = supporting phrases that should each appear at least once.
keywords:
  primary: AI automation engineer
  secondary:
    - private AI
    - workflow automation
    - n8n
    - self-hosted
    - backup and recovery
    - server monitoring
    - small business
    - freelance software engineer
    - open source
  # long-tail phrases to use in headings, FAQ and future blog posts
  long-tail:
    - private ChatGPT for business
    - AI integration for small business
    - hire an n8n automation expert
    - backups that actually restore
    - website uptime monitoring
    - remote software engineer for US and Australian teams

# Where the primary keyword must appear, and how much each spot is worth
# (10 = strongest signal). check.mjs enforces every "required: yes" row.
weightage:
  title: "10 · required: yes"
  h1: "9 · required: yes"
  meta-description: "8 · required: yes"
  first-100-words: "7 · required: yes"
  h2-headings: "6 · at least 2 H2s carry a secondary keyword"
  url: "5 · home is / — carried by the domain"
  image-alt: "4 · every image has alt text"
  internal-anchors: "4 · links say what they point to, never 'click here'"
  body-density: "3 · primary keyword 0.3%–2.5% of body words"
  json-ld: "3 · knowsAbout lists the secondary keywords"
  og-title: "3 · share title carries the keyword"

# The lines we want people to remember and repeat
lines:
  hero: "Your systems. Your data. Your machines."
  promise: "Software that stays yours."
  work: "Built for the day something breaks."
  process: "Written plans. Weekly demos. No surprises."
  contact: "Tell me what's slowing you down."
---

Home page content model. The page itself is src/pages/index.html.
