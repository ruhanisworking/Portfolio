---
template: solution
order: 3

icon: globe

# page character — see src/components/look/look.css
look:
  accent: peach
  hero: stacked
  story: checklist
  offers: bento
  pains: dark

seo:
  path: /solutions/website-accessibility/
  title: "Website Accessibility, ADA & Accessible E-commerce | Ruhan"
  description: "Website accessibility for US and Australian businesses: WCAG 2.2 AA audits, fixes and monthly re-scans, plus fast, accessible stores and web apps."
  og-title: "Website accessibility: sites and stores everyone can use"
  og-image-alt: "An accessibility scan fixing issues on an online store and reaching a score of 100"
  index: "true"

keywords:
  primary: website accessibility
  secondary:
    - ADA website compliance
    - WCAG 2.2 AA
    - accessible ecommerce
    - website speed
    - web app MVP
    - small business
  long-tail:
    - ADA website accessibility audit
    - what to do after an ADA demand letter
    - accessible Shopify alternative
    - website accessibility monitoring

hero:
  crumb: Websites & Accessibility
  kicker: "Website accessibility · ADA website compliance · WCAG 2.2 AA"
  line: "Websites and stores everyone can use."
  lede: "Website accessibility work for small businesses in the US and Australia: audits, fixes and monthly re-scans that keep you WCAG 2.2 AA — plus fast, accessible stores, business sites and web apps built right from the first line."
  cta: Get a free accessibility check
  scene: viz-audit
  chips:
    - WCAG 2.2 AA
    - Monthly re-scan + report
    - Fast on every phone

pains:
  title: "Your website is quietly losing people"
  items:
    - quote: "We got an ADA demand letter."
      note: "Most digital accessibility suits target online stores. A clear audit and fix plan is the calm, practical response."
    - quote: "Our checkout loses people on phones."
      note: "Slow pages and unlabelled fields cost sales from every customer — not only those using assistive technology."
    - quote: "We fixed it once. Then a plugin update broke it."
      note: "Accessibility drifts with every change. Without re-scans, you only find out from the next letter."

story:
  title: "From a scary letter"
  accent: "to a site you can stand behind"
  sub: "We don't sell overlays or badges. We find the real issues, fix them in the code and keep checking."
  steps:
    - title: Listen
      text: "We scan every template — home, product, cart, checkout — with automated tools, then test the critical paths by keyboard and screen reader."
      caption: "Example: 48 pages scanned · 12 issues on the checkout path"
    - title: Map
      text: "You get a plain-English report: what's wrong, who it affects, how serious it is, and the order we'll fix it in."
      caption: "Priority list you can share with your lawyer"
    - title: Build
      text: "We fix it in your theme or code — labels, contrast, focus order, alt text, error messages — and speed up the pages while we're there."
      caption: "Fixed in code, not covered with an overlay"
    - title: Run
      text: "Each month we re-scan, catch regressions from new content or plugins, and send a dated report for your records."
      caption: "A paper trail that shows ongoing effort"
  flow:
    - label: "Your site"
      sub: "every template and path"
      icon: globe
      tile: "1"
      from: "1"
    - label: "Automated scan"
      sub: "axe, Pa11y, Lighthouse"
      icon: chart
      tile: "2"
      from: "1"
    - label: "Human testing"
      sub: "keyboard + screen reader"
      icon: user
      tile: "3"
      from: "2"
    - label: "Fixes in code"
      sub: "WCAG 2.2 AA"
      icon: bolt
      tile: "4"
      from: "3"
    - label: "Monthly report"
      sub: "dated, shareable"
      icon: doc
      tile: "1"
      from: "4"

build:
  title: "Six web projects,"
  accent: "all WCAG 2.2 AA"
  sub: "Website accessibility is the thread through all of them — every site we ship is built to WCAG 2.2 AA."

offers:
  - name: "ADA / WCAG audit & fix"
    brief: "A real audit for ADA website compliance — automated and manual — then the fixes in your code, with a report you can keep."
    log:
      - "Audit: 12 issues, 3 critical"
      - "Fixed in theme · re-tested"
      - "WCAG 2.2 AA · report issued"
    get: "Audit report, code fixes, accessibility statement"
    live: "Typically 1–3 weeks"
    stack: [axe-core, Pa11y, Lighthouse]
  - name: "Accessible e-commerce store"
    brief: "An accessible ecommerce store on open-source commerce — no platform fees — with stock and a customer inbox built in."
    log:
      - "Catalogue imported · 340 products"
      - "Checkout keyboard-tested"
      - "Live · WCAG 2.2 AA"
    get: "Store, payments, stock, inbox, training"
    live: "Typically 4–8 weeks"
    stack: [Medusa, InvenTree, Chatwoot]
  - name: "Web app / SaaS MVP"
    brief: "A web app MVP with login, database and admin panel, deployed to infrastructure you own so you're never locked in."
    log:
      - "Week 1: data model + login"
      - "Week 3: core feature demo"
      - "Launched on your server"
    get: "Working MVP, admin panel, deployment"
    live: "Typically 4–8 weeks"
    stack: [Supabase, Refine, Coolify]
  - name: "Business website"
    brief: "A fast, search-ready business site built on the same design and SEO system as this one — easy for your team to update."
    log:
      - "Content + keywords agreed"
      - "Design built · SEO checks pass"
      - "Live · Search Console connected"
    get: "Website, CMS, SEO setup, analytics"
    live: "Typically 2–4 weeks"
    stack: [Payload, Ghost, Our design system]
  - name: "Website speed & technical SEO"
    brief: "Website speed fixes that phones notice, technical SEO cleaned up, and cookie-free analytics so you see what works."
    log:
      - "Lighthouse 41 → baseline"
      - "Images, fonts, scripts fixed"
      - "Mobile score 90+ · indexed"
    get: "Speed fixes, SEO fixes, analytics, report"
    live: "Typically 1–2 weeks"
    stack: [Lighthouse, Umami, Search Console]
  - name: "Competitor price & stock monitor"
    brief: "Daily checks of competitor prices and stock, with a dashboard and an alert when something important changes."
    log:
      - "06:00 · 5 competitor sites checked"
      - "2 price drops on top sellers"
      - "Alert sent · dashboard updated"
    get: "Daily crawl, alerts, price dashboard"
    live: "Typically 1–2 weeks"
    stack: [Crawl4AI, Scrapy, Metabase]

hood:
  title: "Fixed in the code,"
  accent: "proven by tests"
  sub: "Accessibility overlays don't make a site compliant. Real fixes, real testing and a record of both do."
  items:
    - name: "Real testing"
      text: "Automated scans catch the obvious; keyboard and screen-reader passes catch what matters on your checkout."
      icon: user
      tile: "1"
    - name: "Dated records"
      text: "Every audit and re-scan is dated and saved — useful evidence that you take accessibility seriously."
      icon: doc
      tile: "2"
    - name: "Speed included"
      text: "Accessible pages are lighter pages. We fix performance alongside, because both cost you customers."
      icon: bolt
      tile: "3"
  built-on:
    - "axe-core (8k★)"
    - "Lighthouse (31k★)"
    - "Pa11y (5k★)"
    - "Medusa (37k★)"
    - "Supabase (114k★)"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Store owner"
      line: "We got a demand letter about our website. I don't even know where to start."
    - who: us
      name: "Ruhan"
      line: "Start by not panicking — and loop in your lawyer. We'll run a full audit this week so you know exactly what's wrong and what it takes to fix."
    - who: client
      name: "Store owner"
      line: "Someone sold us an accessibility widget last year. Didn't that cover it?"
    - who: us
      name: "Ruhan"
      line: "Widgets don't change the code underneath, so the issues stay. We'll fix them properly and set up monthly re-scans so it stays fixed."

engagement:
  title: "Three ways to start"
  items:
    - name: Audit
      time: "About 1 week"
      what: "Full WCAG 2.2 AA audit with a prioritised, plain-English report."
      best: "Best when you need to know where you stand."
      kind: plain
    - name: Audit + fix
      time: "1–4 weeks"
      what: "Audit, fixes in your code, re-test and an accessibility statement."
      best: "Best after a demand letter or before a relaunch."
      kind: featured
    - name: Monitor
      time: "Monthly"
      what: "Re-scan, regression fixes and a dated report every month."
      best: "Best for stores that change content often."
      kind: plain

faq-title: "ADA website compliance, answered"
faq:
  - q: "What does website accessibility mean?"
    a: "Website accessibility means people with disabilities can use your site — with a keyboard, a screen reader, magnification or captions. WCAG 2.2 AA is the standard most US and Australian guidance points to."
  - q: "Do accessibility overlays or widgets make a site ADA compliant?"
    a: "No. Overlays sit on top of the page and don't fix the code underneath. Many sites using them have still received demand letters."
  - q: "We received an ADA demand letter. What should we do?"
    a: "Talk to your lawyer first. In parallel, get an audit so you know the real issues — a clear audit and fix plan helps whatever happens next. We don't give legal advice."
  - q: "How often should a website be re-checked?"
    a: "Monthly for stores and sites that change often. New products, plugins and content can break accessibility without anyone noticing."
  - q: "Can you make our existing Shopify or WordPress site accessible?"
    a: "Usually, yes — we fix the theme and templates. If the platform blocks the fixes, we'll tell you and show the options."

cta:
  title: "Send us your URL."
  accent: "We'll tell you where you stand."
  text: "A quick first look is free. You'll hear back within one business day."
  placeholder: "e.g. https://yourstore.com — we received a demand letter last week"

related:
  - name: "Data & dashboards"
    path: "/solutions/business-dashboards/"
    line: "See what your store is really doing."
  - name: "Monitoring & IT support"
    path: "/solutions/server-monitoring/"
    line: "Know the moment your site goes down."
  - name: "Mobile apps"
    path: "/solutions/mobile-app-development/"
    line: "Take the store to iOS and Android."
---

Websites, E-commerce & Accessibility solution page. Projects #13–#18 from docs/PROJECT-CATALOG.md.
