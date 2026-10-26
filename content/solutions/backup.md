---
template: solution
order: 5

icon: doc

# page character — see src/components/look/look.css
look:
  accent: wood
  hero: reverse
  story: timeline
  offers: rows
  pains: dark

seo:
  path: /solutions/small-business-backup/
  title: "Small Business Backup & Ransomware Recovery | Ruhan"
  description: "Small business backup that actually restores: encrypted and offline copies, monthly restore tests and a ransomware recovery plan your team can follow."
  og-title: "Small business backup you've actually tested"
  og-image-alt: "A ransomware incident at 2am, with the office restored from tested backups by 6am"
  index: "true"

keywords:
  primary: small business backup
  secondary:
    - ransomware recovery
    - backup restore testing
    - immutable backup
    - Essential Eight
    - Microsoft 365 backup
    - disaster recovery
  long-tail:
    - how to test backups
    - 3-2-1 backup for small business
    - Essential Eight regular backups
    - backup Microsoft 365 and Google Workspace

hero:
  crumb: Backup & Recovery
  kicker: "Small business backup · ransomware recovery · restore testing"
  line: "Backups you've actually tested — before you need them."
  lede: "Small business backup for offices in the US and Australia: encrypted copies, an offline copy ransomware can't touch, and a restore test every month so you know — not hope — that you can recover."
  cta: Get a free backup check
  scene: viz-recovery
  chips:
    - Restore tested monthly
    - Immutable copy
    - One-page recovery plan

pains:
  title: "Everyone has backups. Few have restores."
  items:
    - quote: "We have backups. Nobody has tried a restore."
      note: "Most failed recoveries are discovered on the worst day — when the backup turns out to be incomplete or months old."
    - quote: "Ransomware would end us."
      note: "Attackers go after backups first. If every copy is online and writable, they can encrypt those too."
    - quote: "Our cloud backup bill grows every year."
      note: "Storage keeps growing and so does the invoice — while the restore speed stays slow."

story:
  title: "From 'we think we're covered'"
  accent: "to proof on paper"
  sub: "Disaster recovery for small offices, done the way the Essential Eight and every security guide recommends."
  steps:
    - title: Listen
      text: "We list what you can't lose — files, email, databases, line-of-business apps — and how long you can afford to be down."
      caption: "Example: 6 systems · 4-hour recovery target"
    - title: Map
      text: "We design 3-2-1: three copies, two kinds of storage, one offline and immutable that ransomware can't change."
      caption: "One copy no attacker can encrypt"
    - title: Build
      text: "Encrypted backups run automatically, the offline copy rotates on schedule, and we write a one-page runbook your team can follow at 2am."
      caption: "Automated · encrypted · documented"
    - title: Run
      text: "Every month we restore real files and check every one by hash. You get a health score and a dated report."
      caption: "Backup restore testing — every month, on record"
  flow:
    - label: "Your data"
      sub: "PCs, servers, M365, Google"
      icon: server
      tile: "1"
      from: "1"
    - label: "Encrypted backup"
      sub: "automatic, versioned"
      icon: lock
      tile: "2"
      from: "2"
    - label: "Offline copy"
      sub: "immutable, rotated"
      icon: doc
      tile: "3"
      from: "3"
    - label: "Monthly restore test"
      sub: "hash-verified"
      icon: bolt
      tile: "4"
      from: "4"
    - label: "Health report"
      sub: "dated, for your records"
      icon: chart
      tile: "1"
      from: "4"

build:
  title: "Four disaster recovery routines"
  accent: "we set up"
  sub: "Small business backup is never just software — it's a routine. These are the routines we set up."

offers:
  - name: "Backup + restore proof"
    brief: "Automated, encrypted backups with backup restore testing every month and a health score you can show an auditor or insurer."
    log:
      - "Nightly backup · 0 errors"
      - "Monthly restore: 500 files"
      - "All verified · health score 98"
    get: "Backup setup, monthly restore test, PDF report"
    live: "Typically 1 week"
    stack: [restic, Backrest, Kopia]
  - name: "Ransomware recovery readiness"
    brief: "An immutable backup copy attackers can't change, a one-page recovery runbook and a practice drill with your team."
    log:
      - "Immutable copy configured"
      - "Runbook written · 1 page"
      - "Drill: restored in 3h 40m"
    get: "Immutable copy, runbook, drill report"
    live: "Typically 1–2 weeks"
    stack: [Kopia, Borg, Object lock]
  - name: "Office PC mesh backup"
    brief: "Spare disk space on your office PCs becomes an encrypted, self-healing backup — no cloud bill, survives a dead PC."
    log:
      - "Agent on 12 PCs"
      - "Files split + encrypted across the office"
      - "1 PC offline · restore still passes"
    get: "Mesh agents, admin view, restore tests"
    live: "Typically 2–3 weeks"
    stack: [Syncthing, Erasure coding, Encryption]
  - name: "Microsoft 365 & Google Workspace backup"
    brief: "Email, OneDrive and Google Drive backed up outside the vendor, encrypted — because 'it's in the cloud' isn't a backup."
    log:
      - "Mailboxes + drives exported"
      - "Encrypted repo · versioned"
      - "Test restore: 1 mailbox"
    get: "M365 / Workspace backup, restore tests"
    live: "Typically 1 week"
    stack: [restic, rclone, Scheduled jobs]

hood:
  title: "The 3-2-1 rule,"
  accent: "proven monthly"
  sub: "Every guide says to test restores. Almost nobody does. We do it for you and write it down."
  items:
    - name: "Encrypted end to end"
      text: "Backups are encrypted before they leave the machine. Lose a disk, lose nothing readable."
      icon: lock
      tile: "1"
    - name: "One copy offline"
      text: "An immutable copy that can't be changed or deleted until it expires — ransomware can't reach it."
      icon: doc
      tile: "2"
    - name: "Hash-verified restores"
      text: "Every restored file is checked against its original fingerprint. Not 'it ran' — 'it's correct'."
      icon: bolt
      tile: "3"
  built-on:
    - name: "restic"
      stars: "37k★"
      url: "https://github.com/restic/restic"
    - name: "Kopia"
      stars: "14k★"
      url: "https://github.com/kopia/kopia"
    - name: "Borg"
      stars: "14k★"
      url: "https://github.com/borgbackup/borg"
    - name: "Backrest"
      stars: "8k★"
      url: "https://github.com/garethgeorge/backrest"
    - name: "Syncthing"
      stars: "90k★"
      url: "https://github.com/syncthing/syncthing"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Practice manager"
      line: "Our IT person set up backups years ago. I honestly don't know if they work."
    - who: us
      name: "Ruhan"
      line: "That's the most common answer we hear. We'll restore a sample this week and tell you exactly what's covered and what isn't."
    - who: client
      name: "Practice manager"
      line: "And if ransomware hits?"
    - who: us
      name: "Ruhan"
      line: "Then you follow a one-page plan we wrote together, and restore from a copy the attacker couldn't touch. We'll even practise it with you."

engagement:
  title: "Three ways to start"
  items:
    - name: Backup check
      time: "A few days"
      what: "We test-restore what you have today and report the gaps."
      best: "Best when you're not sure what's covered."
      kind: plain
    - name: Backup + recovery setup
      time: "1–3 weeks"
      what: "3-2-1 backups, immutable copy, runbook and a first drill."
      best: "Best for any office that can't afford to lose a week."
      kind: featured
    - name: Monthly proof
      time: "Monthly"
      what: "Restore tests, health score, dated report, fixes."
      best: "Best for audits, insurance and peace of mind."
      kind: plain

faq-title: "Ransomware recovery and backups, answered"
faq:
  - q: "What is the best small business backup strategy?"
    a: "The 3-2-1 rule: three copies of your data, on two kinds of storage, with one offline or immutable — plus a restore test every month to prove it works."
  - q: "How often should we test restoring backups?"
    a: "Monthly for important data. A backup that has never been restored is a guess, not a backup."
  - q: "Does this help with the Essential Eight?"
    a: "Yes. Regular backups, restore testing and protecting backups from change are part of the Essential Eight 'regular backups' strategy, and our reports give you the evidence."
  - q: "Isn't Microsoft 365 already backed up?"
    a: "Microsoft keeps the service running, but deleted or encrypted data can still be lost. A separate Microsoft 365 backup gives you your own recoverable copy."
  - q: "How long does ransomware recovery take?"
    a: "It depends on data size and the plan. We set a recovery target with you, then test against it in a drill."

cta:
  title: "Let's find out"
  accent: "if your backups really work."
  text: "We'll reply within one business day and can test-restore a sample this week."
  placeholder: "e.g. 15 PCs, a file server and Microsoft 365 — backups set up in 2021"

related:
  - name: "Security & compliance"
    path: "/solutions/small-business-cybersecurity/"
    line: "MFA, passwords and Essential Eight evidence."
  - name: "Monitoring & IT support"
    path: "/solutions/server-monitoring/"
    line: "Know about problems before they spread."
  - name: "Business systems"
    path: "/solutions/custom-business-software/"
    line: "A private office cloud that's backed up properly."
---

Backup & Recovery solution page. Projects #23–#26 from docs/PROJECT-CATALOG.md.
