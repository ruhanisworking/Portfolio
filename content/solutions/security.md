---
template: solution
order: 6

icon: lock

# page character — see src/components/look/look.css
look:
  accent: rust
  hero: stacked
  story: checklist
  offers: grid
  pains: dark

seo:
  path: /solutions/small-business-cybersecurity/
  title: "Small Business Cybersecurity & Compliance | Ruhan"
  description: "Small business cybersecurity that people actually use: MFA, a team password vault, threat detection, and the evidence for Essential Eight, HIPAA or SOC 2."
  og-title: "Small business cybersecurity your team will actually use"
  og-image-alt: "A security checklist filling up from three to eight of eight controls"
  index: "true"

keywords:
  primary: small business cybersecurity
  secondary:
    - Essential Eight
    - HIPAA security
    - SOC 2 readiness
    - password manager
    - MFA
    - threat detection
  long-tail:
    - Essential Eight maturity level 1
    - HIPAA risk assessment for small practices
    - self-hosted password manager for business
    - SOC 2 for startups

hero:
  crumb: Security & Compliance
  kicker: "Small business cybersecurity · Essential Eight · HIPAA · SOC 2"
  line: "Security your team will actually use."
  lede: "Small business cybersecurity for teams in the US and Australia: single sign-on with MFA, a shared password vault, alerts when something looks wrong, and the evidence an auditor or insurer will ask for — set up calmly and kept current."
  cta: Get a free security check
  scene: viz-security
  chips:
    - MFA everywhere
    - Evidence on file
    - Plain-English reports

pains:
  title: "Security that lives in a spreadsheet isn't security"
  items:
    - quote: "Our passwords are in a shared sheet."
      note: "One leaked file and every account is open. Staff who left still know half of them."
    - quote: "An audit is coming and we have nothing written down."
      note: "Essential Eight, HIPAA, SOC 2 — they all ask for evidence, not intentions."
    - quote: "Would we even know if we'd been hacked?"
      note: "Without logs and alerts, the first sign is usually a customer or a ransom note."

story:
  title: "From good intentions"
  accent: "to controls you can prove"
  sub: "We build the controls, train the team in minutes not days, and keep the evidence for you."
  steps:
    - title: Listen
      text: "A short review of accounts, devices, backups and who can access what — the honest baseline."
      caption: "Example baseline: 3 of 8 controls in place"
    - title: Map
      text: "We map your gaps to the framework you care about — Essential Eight, HIPAA or SOC 2 — and fix the riskiest first."
      caption: "Prioritised by risk, not by checklist order"
    - title: Build
      text: "SSO and MFA, a password vault, patching, threat detection and logging — rolled out with a two-minute staff video."
      caption: "Rolled out without stopping work"
    - title: Run
      text: "Quarterly reviews, offboarding checks and an evidence folder that stays current, so audits are a formality."
      caption: "8 of 8 — and the evidence to show it"
  flow:
    - label: "Identity"
      sub: "SSO, MFA, offboarding"
      icon: user
      tile: "1"
      from: "1"
    - label: "Passwords & secrets"
      sub: "team vault, no shared sheets"
      icon: lock
      tile: "2"
      from: "2"
    - label: "Devices & patches"
      sub: "updated on schedule"
      icon: server
      tile: "3"
      from: "3"
    - label: "Detection"
      sub: "logs, alerts, response"
      icon: bolt
      tile: "4"
      from: "3"
    - label: "Evidence"
      sub: "ready for the auditor"
      icon: doc
      tile: "1"
      from: "4"

build:
  title: "Seven projects, from MFA"
  accent: "to threat detection"
  sub: "Small business cybersecurity in practical pieces — start with one, add the rest as you grow."

offers:
  - name: "Password vault + SSO + MFA"
    brief: "A self-hosted password manager for the team, single sign-on and MFA on every app — with a staff video and an offboarding checklist."
    log:
      - "Vault live · 214 passwords moved"
      - "SSO + MFA on 9 apps"
      - "Ex-staff access removed"
    get: "Vault, SSO, MFA rollout, training video"
    live: "Typically 1–2 weeks"
    stack: [Vaultwarden, Keycloak, Authentik]
  - name: "Essential Eight uplift (Australia)"
    brief: "Reach Essential Eight Maturity Level One with the controls in place and an evidence dashboard that collects proof automatically."
    log:
      - "Baseline: 3/8 at ML1"
      - "Controls rolled out"
      - "8/8 · evidence dashboard live"
    get: "Gap report, controls, evidence dashboard"
    live: "Typically 3–6 weeks"
    stack: [Wazuh, Keycloak, restic]
  - name: "HIPAA security for small practices (US)"
    brief: "HIPAA security safeguards for clinics: risk checklist, access controls, logging and tested backups. We build controls; we don't give legal advice."
    log:
      - "Risk checklist completed"
      - "Access + audit logging on"
      - "Backups tested · report filed"
    get: "Risk checklist, safeguards, logs, backups"
    live: "Typically 3–5 weeks"
    stack: [Wazuh, Vaultwarden, restic]
  - name: "SOC 2 readiness (startups)"
    brief: "SOC 2 readiness for small SaaS teams: policies, controls and automated evidence, so the audit is about checking, not scrambling."
    log:
      - "Policies drafted · 14"
      - "Evidence collection automated"
      - "Ready for auditor walkthrough"
    get: "Policies, controls, evidence automation"
    live: "Typically 4–8 weeks"
    stack: [Wazuh, Infisical, Policy templates]
  - name: "Secrets cleanup"
    brief: "API keys and passwords removed from code and documents, moved into a secrets manager and rotated."
    log:
      - "Repos scanned · 23 secrets found"
      - "Moved to vault · apps updated"
      - "All keys rotated"
    get: "Scan report, secrets manager, rotation"
    live: "Typically 1 week"
    stack: [Infisical, Secret scanning, CI checks]
  - name: "Threat detection (SIEM lite)"
    brief: "Threat detection tuned for a small office: logins, malware and odd traffic flagged, with a monthly plain-English report."
    log:
      - "Agents on 25 devices"
      - "Alert: 40 failed logins · blocked"
      - "Monthly report sent"
    get: "Detection, tuned alerts, monthly report"
    live: "Typically 1–2 weeks"
    stack: [Wazuh, CrowdSec, Alerting]
  - name: "Authorized penetration test"
    brief: "AI-assisted scanning plus human verification of every finding, inside a written scope you approve — with a clear fix list."
    log:
      - "Scope signed · targets agreed"
      - "Findings verified by a person"
      - "Fix list delivered · re-test"
    get: "Test report, fix list, re-test"
    live: "Typically 1–2 weeks"
    stack: [PentAGI, Manual testing, Report]

hood:
  title: "Controls first,"
  accent: "paperwork second"
  sub: "Good evidence comes from good controls. We set up the controls so the evidence collects itself."
  items:
    - name: "Least privilege"
      text: "People get the access they need and lose it when they leave — automatically, through single sign-on."
      icon: user
      tile: "1"
    - name: "Evidence that collects itself"
      text: "Logs, configs and test results land in one folder, dated, ready for an auditor or insurer."
      icon: doc
      tile: "2"
    - name: "Honest scope"
      text: "We build and document controls. Certification is your auditor's job, and legal advice is your lawyer's."
      icon: book
      tile: "3"
  built-on:
    - name: "Vaultwarden"
      stars: "70k★"
      url: "https://github.com/dani-garcia/vaultwarden"
    - name: "Keycloak"
      stars: "38k★"
      url: "https://github.com/keycloak/keycloak"
    - name: "Wazuh"
      stars: "17k★"
      url: "https://github.com/wazuh/wazuh"
    - name: "CrowdSec"
      stars: "15k★"
      url: "https://github.com/crowdsecurity/crowdsec"
    - name: "Infisical"
      stars: "30k★"
      url: "https://github.com/Infisical/infisical"

talk:
  title: "What the first call sounds like"
  lines:
    - who: client
      name: "Practice owner"
      line: "Our insurer sent a security questionnaire and I can't answer half of it."
    - who: us
      name: "Ruhan"
      line: "Send it over. We'll mark what you already do, what's missing, and the order to fix it — most of it in a couple of weeks."
    - who: client
      name: "Practice owner"
      line: "My staff will hate MFA."
    - who: us
      name: "Ruhan"
      line: "They'll log in once a day with single sign-on and a phone tap. We'll send them a two-minute video so nobody gets stuck."

engagement:
  title: "Three ways to start"
  items:
    - name: Security check
      time: "About 1 week"
      what: "Baseline review mapped to your framework, with a prioritised fix list."
      best: "Best before an audit or insurance renewal."
      kind: plain
    - name: Uplift project
      time: "2–8 weeks"
      what: "Controls rolled out, staff trained, evidence folder set up."
      best: "Best when you need to reach a standard."
      kind: featured
    - name: Quarterly review
      time: "Quarterly"
      what: "Access review, patch check, evidence refresh, short report."
      best: "Best for staying compliant year-round."
      kind: plain

faq-title: "Essential Eight, HIPAA and SOC 2, answered"
faq:
  - q: "Where should small business cybersecurity start?"
    a: "With identity: single sign-on with MFA, a team password vault and removing old accounts. It blocks the most common attacks quickly and makes everything else easier."
  - q: "What is the Essential Eight?"
    a: "The Australian Signals Directorate's eight baseline strategies — including MFA, patching, application control and regular backups. Maturity Level One is the usual first target for small businesses."
  - q: "Can you make us HIPAA compliant?"
    a: "We implement HIPAA security safeguards and document them. Compliance also involves policies and legal review — we work alongside your lawyer or compliance advisor."
  - q: "Do small startups really need SOC 2?"
    a: "If larger customers ask for it, yes. SOC 2 readiness is much easier when controls and evidence collection are built early."
  - q: "Is a self-hosted password manager safe?"
    a: "Yes, when it's set up properly: encrypted vaults, MFA, backups and updates. We handle all four."

cta:
  title: "Send us the questionnaire"
  accent: "you've been avoiding."
  text: "We'll reply within one business day with what you already have and what's missing."
  placeholder: "e.g. insurer questionnaire due in 3 weeks, 20 staff, Microsoft 365"

related:
  - name: "Backup & recovery"
    path: "/solutions/small-business-backup/"
    line: "Tested restores and an offline copy."
  - name: "Monitoring & IT support"
    path: "/solutions/server-monitoring/"
    line: "Alerts and help when something goes wrong."
  - name: "AI agents & chatbots"
    path: "/solutions/ai-agent-development/"
    line: "Private AI that keeps client data in."
---

Security & Compliance solution page. Projects #27–#33 from docs/PROJECT-CATALOG.md.
