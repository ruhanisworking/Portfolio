---
template: solution
order: 9

icon: phone

# page character — see src/components/look/look.css
look:
  accent: peach
  hero: reverse
  story: flow
  offers: rows
  pains: dark

seo:
  path: /solutions/mobile-app-development/
  title: "Mobile App Development for Startups & SMBs | Ruhan"
  description: "Mobile app development for iOS and Android: MVPs in weeks, offline-first ordering and field apps, and a backend you own — for startups and small businesses."
  og-title: "Mobile app development: iOS and Android in weeks"
  og-image-alt: "A mobile app taking an order offline and printing a kitchen receipt"
  index: "true"

keywords:
  primary: mobile app development
  secondary:
    - iOS and Android
    - app MVP
    - React Native
    - offline-first
    - ordering app
    - small business
  long-tail:
    - mobile app MVP for startups
    - restaurant ordering app with printer
    - field service app that works offline
    - Expo React Native developer

hero:
  crumb: Mobile Apps
  kicker: "Mobile app development · iOS and Android · app MVP"
  line: "Your app on every phone — in weeks, not months."
  lede: "Mobile app development for startups and small businesses in the US and Australia: one codebase for iOS and Android, offline-first so it works in a basement, and a backend you own instead of rent."
  cta: Get a free app plan
  scene: viz-phone
  chips:
    - iOS + Android
    - Works offline
    - Backend you own

pains:
  title: "Great idea. Stuck on the first build."
  items:
    - quote: "Agencies quoted six months for our MVP."
      note: "Most first versions need three or four screens done well, not every feature on the roadmap."
    - quote: "Our field team loses signal all day."
      note: "Apps that need the internet for every tap fail exactly where your team works."
    - quote: "Orders get re-typed from the app into the till."
      note: "If the app can't talk to your printer or POS, someone becomes the integration."

story:
  title: "From a sketch"
  accent: "to an app in the store"
  sub: "A small, honest app MVP first — then grow it with real users, not guesses."
  steps:
    - title: Listen
      text: "We find the one job your users must get done, and the few screens that make it possible."
      caption: "Example: 4 screens for version one"
    - title: Map
      text: "Clickable mockups, data model and what must work offline — agreed before code."
      caption: "You tap through it before we build it"
    - title: Build
      text: "React Native with Expo for iOS and Android, a backend on your account, weekly builds on your phone."
      caption: "A new build on your phone every week"
    - title: Run
      text: "App store submission, crash reports, updates and the next features based on what users actually do."
      caption: "Live in the stores — and improving"
  flow:
    - label: "Your users"
      sub: "iOS and Android"
      icon: phone
      tile: "1"
      from: "1"
    - label: "The app"
      sub: "React Native + Expo"
      icon: bolt
      tile: "2"
      from: "2"
    - label: "Offline store"
      sub: "works without signal"
      icon: doc
      tile: "3"
      from: "3"
    - label: "Your backend"
      sub: "Supabase on your account"
      icon: server
      tile: "4"
      from: "3"
    - label: "Printers & POS"
      sub: "receipts, kitchen, labels"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Two kinds of app MVP"
  accent: "we build"
  sub: "Mobile app development focused on the job your users need done — nothing ornamental."

offers:
  - name: "iOS + Android MVP"
    brief: "One React Native codebase for iOS and Android, with login, your core feature and a backend you own — ready for real users."
    log:
      - "Week 1: clickable mockup"
      - "Week 4: TestFlight + Play test"
      - "Live in both stores"
    get: "App, backend, store listings, crash reports"
    live: "Typically 6–10 weeks"
    stack: [Expo, React Native, Supabase]
  - name: "Ordering / field app with printer"
    brief: "An offline-first ordering app for restaurants and field teams: orders sync when signal returns and print straight to thermal printers."
    log:
      - "Order taken with no signal"
      - "Synced when back online"
      - "Receipt printed · POS updated"
    get: "Ordering app, offline sync, printer bridge"
    live: "Typically 4–8 weeks"
    stack: [Expo, ESC/POS, Supabase]

hood:
  title: "Built to work"
  accent: "where your users are"
  sub: "Real phones, weak signal, busy hands. We test for that, not just for the simulator."
  items:
    - name: "Offline-first"
      text: "Every important action works without signal and syncs safely later — no lost orders."
      icon: doc
      tile: "1"
    - name: "One codebase"
      text: "iOS and Android from the same code, so features and fixes ship to both at once."
      icon: phone
      tile: "2"
    - name: "Backend you own"
      text: "Database, auth and storage in your account — no lock-in to an app builder."
      icon: server
      tile: "3"
  built-on:
    - name: "Expo"
      stars: "53k★"
      url: "https://github.com/expo/expo"
    - name: "React Native"
      stars: ""
      url: "https://github.com/facebook/react-native"
    - name: "Supabase"
      stars: "114k★"
      url: "https://github.com/supabase/supabase"
    - name: "Appwrite"
      stars: "58k★"
      url: "https://github.com/appwrite/appwrite"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Startup founder"
      line: "We have a long feature list and a short runway."
    - who: us
      name: "Ruhan"
      line: "Then let's find the one thing users must be able to do and ship that well. Everything else can wait for real feedback."
    - who: client
      name: "Startup founder"
      line: "Will we be stuck with you forever?"
    - who: us
      name: "Ruhan"
      line: "No. The code and the backend are in your accounts from day one, and they're standard tools any developer can pick up."

engagement:
  title: "Three ways to start"
  items:
    - name: Clickable prototype
      time: "1–2 weeks"
      what: "Mockups you can tap through, plus a build plan and fixed price."
      best: "Best for testing the idea with users or investors."
      kind: plain
    - name: MVP build
      time: "6–10 weeks"
      what: "Working iOS and Android app, backend and store launch."
      best: "Best when you're ready for real users."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Updates, OS compatibility, crash fixes and new features."
      best: "Best once people depend on the app."
      kind: plain

faq-title: "React Native and app MVPs, answered"
faq:
  - q: "How long does mobile app development take for an MVP?"
    a: "Usually six to ten weeks for a focused first version on iOS and Android, after a short prototype phase."
  - q: "Do you build native or cross-platform apps?"
    a: "Cross-platform with React Native and Expo — one codebase, native performance for most business apps, and faster delivery."
  - q: "Can the app work offline?"
    a: "Yes. We design offline-first so key actions work without signal and sync safely when the connection returns."
  - q: "Can the app print to receipt or kitchen printers?"
    a: "Yes. We've connected ordering systems to thermal printers so orders print without re-typing."
  - q: "Who owns the code and the app store accounts?"
    a: "You do. Code, backend and store accounts are in your name from the start."

cta:
  title: "Tell us the one thing"
  accent: "your app must do."
  text: "We'll reply within one business day with a first version you could ship."
  placeholder: "e.g. drivers log deliveries offline and customers get a receipt"

related:
  - name: "Websites & accessibility"
    path: "/solutions/website-accessibility/"
    line: "The web side of your product."
  - name: "Business systems"
    path: "/solutions/custom-business-software/"
    line: "Back-office systems your app can talk to."
  - name: "Monitoring & IT support"
    path: "/solutions/server-monitoring/"
    line: "Know when the backend needs attention."
---

Mobile Apps solution page. Projects #46–#47 from docs/PROJECT-CATALOG.md.
