---
template: solution
order: 10

icon: book

# page character — see src/components/look/look.css
look:
  accent: amber
  hero: stacked
  story: timeline
  offers: grid
  pains: light

seo:
  path: /solutions/online-course-platform/
  title: "Online Course Platform & Research Computing | Ruhan"
  description: "An online course platform with payments and verifiable certificates, secure exams, and research computing for labs — owned by your school or training company."
  og-title: "Your own online course platform: teach, test, certify"
  og-image-alt: "A learner finishing modules, passing an exam and receiving a QR-verifiable certificate"
  index: "true"

keywords:
  primary: online course platform
  secondary:
    - LMS
    - certificates
    - exam management
    - research computing
    - JupyterHub
    - training company
  long-tail:
    - LMS for training companies
    - QR verifiable certificates
    - secure online exam system
    - JupyterHub setup for university lab

hero:
  crumb: Education & Research
  kicker: "Online course platform · LMS · exams · research computing"
  line: "Teach, test and research — on your own platform."
  lede: "An online course platform for training companies, coaches and schools in the US and Australia — with payments, exams and certificates anyone can verify — plus research computing for university labs. Your brand, your students, your data."
  cta: Get a free platform plan
  scene: viz-course
  chips:
    - Your brand
    - QR-verifiable certificates
    - No per-student fees

pains:
  title: "Your course, someone else's platform"
  items:
    - quote: "The course platform takes a cut of every sale."
      note: "Marketplace fees and per-student pricing grow faster than your business does."
    - quote: "We can't prove a certificate is real."
      note: "PDF certificates are easy to fake. Employers want a way to check."
    - quote: "Our lab's notebooks, papers and references are everywhere."
      note: "Research slows down when every student sets up their own tools on a laptop."

story:
  title: "From scattered tools"
  accent: "to one place to learn"
  sub: "Proven open-source education platforms, branded and connected to how you sell and assess."
  steps:
    - title: Listen
      text: "We look at how you teach, sell and assess today — and what learners and employers need to see."
      caption: "Example: 6 courses · 400 learners a year"
    - title: Map
      text: "Course structure, payment and enrolment flow, exams and the certificate design — agreed up front."
      caption: "Enrol → learn → assess → certify"
    - title: Build
      text: "The LMS on your domain, Stripe payments, secure exams and certificates with a QR code that checks back to you."
      caption: "Paid, enrolled and learning in under a minute"
    - title: Run
      text: "Updates, backups, new courses and a term report on enrolments, completions and revenue."
      caption: "A platform that grows with your catalogue"
  flow:
    - label: "Learner"
      sub: "pays and enrols"
      icon: user
      tile: "1"
      from: "1"
    - label: "Course"
      sub: "lessons, videos, quizzes"
      icon: book
      tile: "2"
      from: "2"
    - label: "Exam"
      sub: "timed, secure"
      icon: doc
      tile: "3"
      from: "3"
    - label: "Certificate"
      sub: "QR-verifiable"
      icon: lock
      tile: "4"
      from: "3"
    - label: "Reports"
      sub: "enrolments, completions"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Three education projects"
  accent: "for your training company"
  sub: "An online course platform, exams you can trust, and research computing — each on infrastructure you own."

offers:
  - name: "Branded course platform (LMS)"
    brief: "Your own LMS on your domain with Stripe payments, quizzes and certificates — no marketplace cut, no per-student fees."
    log:
      - "Course imported · 24 lessons"
      - "Paid via Stripe · enrolled"
      - "Certificate issued · QR checks out"
    get: "LMS, payments, certificates, training"
    live: "Typically 2–4 weeks"
    stack: [Frappe LMS, Moodle, Stripe]
  - name: "Secure exams & certificates"
    brief: "Exam management with question banks, timed sessions and tamper-evident results — built on our experience with national exam systems."
    log:
      - "Question bank · 600 items"
      - "Timed exam · results locked"
      - "Certificates verifiable by QR"
    get: "Exam system, result records, verification page"
    live: "Typically 3–6 weeks"
    stack: [Frappe LMS, Postgres, QR verify]
  - name: "Research lab computing"
    brief: "Research computing for labs: shared Jupyter notebooks, collaborative LaTeX and a reference library under one login, with backups."
    log:
      - "JupyterHub · 30 student accounts"
      - "Overleaf + Zotero on one login"
      - "Nightly backups tested"
    get: "JupyterHub, Overleaf, Zotero, backups"
    live: "Typically 1–3 weeks"
    stack: [JupyterHub, Overleaf, Zotero]

hood:
  title: "Built for trust"
  accent: "and the long term"
  sub: "Education records need to last. We design for verification, backups and easy hand-over."
  items:
    - name: "Verifiable certificates"
      text: "Each certificate links back to a record on your site, so an employer can check it in seconds."
      icon: lock
      tile: "1"
    - name: "Tamper-evident results"
      text: "Exam results are logged with history, so changes are visible — the same approach we used on national exam systems."
      icon: doc
      tile: "2"
    - name: "Your platform"
      text: "Open-source LMS on your domain. Leave any time with every course and every record."
      icon: server
      tile: "3"
  built-on:
    - name: "Frappe LMS"
      stars: ""
      url: "https://github.com/frappe/lms"
    - name: "Moodle"
      stars: ""
      url: "https://github.com/moodle/moodle"
    - name: "Open edX"
      stars: ""
      url: "https://github.com/openedx/openedx-platform"
    - name: "JupyterHub"
      stars: "8k★"
      url: "https://github.com/jupyterhub/jupyterhub"
    - name: "Overleaf"
      stars: "18k★"
      url: "https://github.com/overleaf/overleaf"
    - name: "Zotero"
      stars: "16k★"
      url: "https://github.com/zotero/zotero"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Training company director"
      line: "We sell our courses through a marketplace and lose a big slice of every sale."
    - who: us
      name: "Ruhan"
      line: "Let's put the same courses on your own platform with Stripe. You keep the margin and the student relationship."
    - who: client
      name: "Training company director"
      line: "Our corporate clients want to verify certificates."
    - who: us
      name: "Ruhan"
      line: "Every certificate will carry a QR code that opens a verification page on your domain. Nothing to fake."

engagement:
  title: "Three ways to start"
  items:
    - name: Course launch
      time: "2–3 weeks"
      what: "One course live on your branded LMS with payments and certificates."
      best: "Best for moving off a marketplace."
      kind: plain
    - name: Platform build
      time: "4–8 weeks"
      what: "Full catalogue, exams, certificates, reports and staff training."
      best: "Best for training companies and schools."
      kind: featured
    - name: Ongoing care
      time: "Monthly"
      what: "Updates, backups, new courses and a term report."
      best: "Best once learners rely on it."
      kind: plain

faq-title: "LMS, exams and certificates, answered"
faq:
  - q: "What is the best online course platform for a training company?"
    a: "One you own: an open-source LMS on your domain with your own payments, so you keep the margin, the data and the student relationship."
  - q: "How do QR-verifiable certificates work?"
    a: "Each certificate carries a QR code linking to a record on your site. Anyone can scan it to confirm it's genuine."
  - q: "Can the exams be timed and secure?"
    a: "Yes. Timed sessions, randomised question banks and logged results with history make results hard to tamper with."
  - q: "Can you set up JupyterHub for a university lab?"
    a: "Yes. Shared notebooks with accounts per student, backups and the lab's software preinstalled."
  - q: "Can we move courses from our current platform?"
    a: "Usually, yes — we export lessons, videos and learner records and import them into the new LMS."

cta:
  title: "Tell us what you teach"
  accent: "and how you sell it."
  text: "We'll reply within one business day with a platform plan."
  placeholder: "e.g. 6 compliance courses sold to companies, certificates needed"

related:
  - name: "Websites & accessibility"
    path: "/solutions/website-accessibility/"
    line: "An accessible site for your courses."
  - name: "Business systems"
    path: "/solutions/custom-business-software/"
    line: "CRM and booking for your training business."
  - name: "Backup & recovery"
    path: "/solutions/small-business-backup/"
    line: "Keep learner records safe."
---

Education & Research solution page. Projects #48–#49 (+ exam systems) from docs/PROJECT-CATALOG.md.
