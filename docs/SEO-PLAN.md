# SEO & content plan — international (US / AU)

> Target: **USA + Australia** small–mid business. Bangladesh market target na.
> Site behave korbe **ekta organization er moto** ("we", team, policy, SLA,
> case study) — personal portfolio hishebe na.
> Bangla bad (toggle shoray dewa hobe); site `lang="en"`, US English.
> Project/solution er detail: `docs/PROJECT-IDEAS.md`.
> Keyword volume: research e pawa kichu number chara baki shob
> **Google Keyword Planner / Search Console e check korte hobe** — ekhane
> intent ar priority dewa, volume na.

---

## 0. Foundation

### 0.1 Domain — **`ruhan.bd` ei thakbe** (decided)

Google `.bd` ke Bangladesh-targeted dhore (`.io/.co/.ai` er moto "generic"
list e `.bd` nai), ar Search Console e country target bodlano jay na. Tai
US/AU e ranking er jonno **ei signal gula jor kore dite hobe**:

| Signal | Ki korbo |
|---|---|
| Content | shob US English; US/AU er niyom-kanun niye page (HIPAA, ADA, Essential Eight, NDIS); dam USD/AUD te; "US & Australian business hours" |
| Schema | `areaServed`: United States, Australia; `contactPoint.areaServed`: US, AU; `availableLanguage`: en |
| Backlink | **US/AU site theke** link beshi — Clutch, US/AU podcast, guest post, AU/US community; BD directory te link kom |
| Mention | LinkedIn, Clutch, GitHub e "serving US & Australia" |
| Hosting | Cloudflare (global CDN) — already ache, speed shob deshe bhalo |
| Behavior | US/AU visitor engage korle (time on page, return) Google bujhe — tai paid/social campaign shuru te US/AU target |

Expectation: generic domain er cheye US/AU e ranking dhire ashbe — prothome
long-tail keyword (niche, kom competition) e focus. Pore drkar hole ekta
gTLD (e.g. `.com`) kine 301 kora jabe; tokhon ei content/backlink shob kaje lagbe.

### 0.2 Brand naam

Organization er moto behave korte hole ekta brand naam lagbe (logo "ruhan"
thakte pare). Option: **Ruhan** (personal-brand studio, e.g. "Ruhan — Private
IT & AI Systems"), ba alada studio naam. Nicher metadata e brand =
**`Ruhan`** dhora — naam final hole replace.

### 0.3 Organization signal (sotti thakte hobe)

- Legal entity thakle (e.g. BD company / US LLC) footer e naam — **fake
  address/office dibo na.** Google Business Profile er jonno physical address
  lage — US/AU te na thakle GBP kora jabe na; tar bodole online-only signal.
- Team page (tumi + collaborator, real naam/role), Privacy Policy, Terms,
  Security page, SLA, contact e US/AU business hour.

---

## 1. Category-wise project list

8 category = 8 hub page (`/solutions/<category>/`). Protita project = ekta
offer page (`/solutions/<category>/<offer>/`) — priority ★★★ gula age.

### C1 · Backup & Disaster Recovery — `/solutions/backup/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Backup Restore Testing (RestoreProof) | `backup-restore-testing` | ★★★ | restic, Backrest |
| Ransomware Recovery Plan & Kit | `ransomware-recovery` | ★★★ | Kopia, Borg |
| On-Premise Office Backup (Mesh) | `on-premise-backup` | ★★ | Syncthing, SeaweedFS |
| Private Photo & Image Vault | `private-photo-vault` | ★ | Immich |
| Kubernetes & Server Backup | `kubernetes-backup` | ★ | Velero |

### C2 · Private AI & Automation — `/solutions/private-ai/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Private ChatGPT for Business (on-prem LLM) | `private-chatgpt` | ★★★ | Ollama, Open WebUI, AnythingLLM |
| AI Document Search & Q&A | `ai-document-search` | ★★★ | RAGFlow, Paperless-ngx, PrivateGPT |
| Workflow Automation (AI) | `workflow-automation` | ★★★ | n8n, Activepieces |
| AI Receptionist / Voice Agent | `ai-receptionist` | ★★★ | Ollama + STT/TTS + n8n |
| PII Redaction before AI | `pii-redaction` | ★★ | Presidio |
| Personal AI Assistant (self-hosted) | `personal-ai-assistant` | ★★ | nanobot, mem0, Khoj |
| AI Cost & Quality Monitoring | `llm-monitoring` | ★★ | Langfuse |

### C3 · Cybersecurity & Compliance — `/solutions/security/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Password Manager & SSO/MFA Rollout | `password-manager-sso-mfa` | ★★★ | Vaultwarden, Keycloak, Authentik |
| Essential Eight Uplift (AU) | `essential-eight` | ★★★ | (restic, Keycloak, Wazuh evidence) |
| HIPAA Security for Small Practices (US) | `hipaa-security` | ★★ | Wazuh, Keycloak, restic |
| SOC 2 Readiness for Startups | `soc-2-readiness` | ★★ | evidence automation |
| Small Business SIEM / Threat Detection | `threat-detection` | ★★ | Wazuh, CrowdSec |
| Legacy App Security Rescue | `legacy-app-security` | ★★ | (own experience) |
| Authorized Penetration Testing | `penetration-testing` | ★ | PentAGI + human review |

### C4 · Business Systems — `/solutions/business-systems/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Team Project Management (Jira/Monday alternative) | `project-management` | ★★★ | Plane, Huly |
| Spreadsheet to Database App | `spreadsheet-to-app` | ★★★ | NocoDB, Appsmith |
| Small Business CRM | `crm` | ★★ | Twenty |
| Open-Source ERP & HR/Payroll | `erp-hr` | ★★ | ERPNext, Frappe HR, Odoo |
| Private Office Cloud (Drive/Slack alternative) | `private-office-cloud` | ★★ | Nextcloud, Mattermost |
| E-signature & Booking | `e-signature-booking` | ★ | Documenso, Cal.diy |
| Time Tracking & Invoicing | `time-tracking-invoicing` | ★ | Kimai, Invoice Ninja |
| Business Dashboards | `business-dashboards` | ★★ | Grafana, NocoDB |
| Legacy System Modernization | `legacy-modernization` | ★★ | — |

### C5 · Websites, E-commerce & Accessibility — `/solutions/web/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| ADA / WCAG Accessibility Audit & Fix | `ada-website-accessibility` | ★★★ | axe-core type tooling |
| Accessible E-commerce Store | `accessible-ecommerce` | ★★★ | Medusa, Saleor |
| Omni-channel Inbox & Chat | `omnichannel-inbox` | ★★ | Chatwoot |
| Social Media Scheduling (AI) | `social-media-automation` | ★★ | Postiz |
| Inventory & POS | `inventory-pos` | ★★ | InvenTree, OSPOS |
| Publisher / Membership Site | `membership-site` | ★★ | Ghost |
| Privacy-first Analytics | `privacy-analytics` | ★ | Umami, Plausible |
| Headless CMS Website | `headless-cms` | ★ | Payload, Strapi, Directus |
| Email Marketing Automation | `email-marketing` | ★ | Mautic |

### C6 · Monitoring & Managed IT — `/solutions/managed-it/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Uptime Monitoring & Status Page | `uptime-monitoring` | ★★★ | Uptime Kuma, Gatus |
| Server Monitoring & Alerts | `server-monitoring` | ★★★ | Beszel, Netdata |
| Remote IT Support | `remote-it-support` | ★★★ | RustDesk, MeshCentral |
| IT Asset Management & Helpdesk | `it-helpdesk` | ★★ | GLPI, Zabbix |
| Observability Stack | `observability` | ★★ | Grafana, Prometheus, SigNoz |
| Application Error Tracking | `error-tracking` | ★ | Sentry |

### C7 · Education & Research — `/solutions/education/`
| Offer | Slug | Pri | Base |
|---|---|---|---|
| Online Course Platform (LMS) | `lms` | ★★ | Frappe LMS, Moodle, Open edX |
| Research Lab Computing | `research-computing` | ★★ | JupyterHub, Overleaf, Zotero |
| Secure Exam & Certificates | `exam-certificates` | ★★ | (own experience) |
| Offline Classroom | `offline-learning` | ★ | Kolibri |
| Library Management | `library-management` | ★ | Koha |
| Collaborative Whiteboard | `whiteboard` | ★ | Excalidraw |

### C8 · Industries — `/industries/<industry>/`
| Industry page | Slug | Pri | Bundled offers |
|---|---|---|---|
| Medical & Dental Clinics (US/AU) | `clinics` | ★★★ | AI receptionist, HIPAA, backup, private AI |
| Law & Accounting Firms | `law-accounting-firms` | ★★★ | private AI doc search, backup, SSO/MFA |
| NDIS Providers (AU) | `ndis-providers` | ★★ | roster/notes/claims, Essential Eight |
| Trades & Home Services (AU/US) | `trades` | ★★ | job manager, AI receptionist |
| E-commerce Brands | `ecommerce` | ★★ | accessibility, store, inbox |
| Schools & Training Centers | `education` | ★ | LMS, exam, backup |
| Startups / SaaS | `startups` | ★★ | SOC 2, monitoring, observability |

---

## 2. Keyword list

Intent: **C** = commercial (kinte chay) · **I** = informational (shikhte chay → blog).
Market: US / AU / both. ✓vol = research e volume pawa gese.

### Brand / site-wide
| Keyword | Intent | Note |
|---|---|---|
| IT support for small business | C | head term |
| IT services for small business | C | ✓ ~4.4k (purono data) |
| managed IT services | C | head, competitive |
| IT support | C | ✓ ~27.1k US — khub competitive, sorasori target na |
| remote IT support company | C | amader shubidha (remote) |
| outsourced IT for small business | C | |
| self-hosted software setup service | C | niche, kom competition |
| open source software consulting | C | |

### C1 Backup
| Keyword | Intent | Market |
|---|---|---|
| small business backup solution | C | both |
| data backup and recovery services | C | both |
| ransomware recovery services | C | both |
| backup restore testing | C | both |
| immutable backup for small business | C | both |
| 3-2-1 backup strategy | I | both |
| how to test backups | I | both |
| Essential Eight regular backups | I/C | AU |
| on-premise backup solution | C | both |
| restic backup setup / backrest | I/C | both (dev) |
| disaster recovery plan template small business | I | both |

### C2 Private AI & Automation
| Keyword | Intent | Market |
|---|---|---|
| private ChatGPT for business | C | both |
| private AI for business | C | both |
| on-premise LLM / local LLM setup | C | both |
| secure ChatGPT alternative | C | both |
| AI document search for law firms | C | both |
| AI document processing | C | both |
| RAG chatbot development | C | both |
| AI integration services | C | US (Upwork +178%) |
| AI automation agency | C | both |
| n8n automation expert / n8n consultant | C | both |
| workflow automation for small business | C | both |
| AI receptionist for small business | C | both |
| AI receptionist for dental office / clinic | C | both |
| AI answering service | C | US |
| redact PII before sending to ChatGPT | I | both |
| is ChatGPT HIPAA compliant | I | US |
| how to run an LLM locally | I | both |

### C3 Security & Compliance
| Keyword | Intent | Market |
|---|---|---|
| Essential Eight compliance / Essential Eight consultant | C | AU |
| Essential Eight maturity level 1 checklist | I | AU |
| HIPAA compliance for small practices | C | US |
| HIPAA security risk assessment | C | US |
| SOC 2 readiness / SOC 2 for startups | C | US |
| password manager for business (self-hosted) | C | both |
| Bitwarden self-hosted setup / Vaultwarden | I/C | both |
| SSO for small business / MFA rollout | C | both |
| cybersecurity services for small business | C | both |
| SIEM for small business / Wazuh setup | C | both |
| penetration testing small business | C | both |
| legacy PHP security audit | C | both |

### C4 Business Systems
| Keyword | Intent | Market |
|---|---|---|
| Jira alternative self-hosted / Monday alternative | C | both |
| project management software for small teams | C | both |
| Airtable alternative self-hosted | C | both |
| convert Excel to database app | C | both |
| custom internal tools development | C | both |
| CRM for small business (open source) | C | both |
| Salesforce alternative open source | C | both |
| ERPNext implementation / ERPNext consultant | C | both |
| Odoo implementation partner | C | both |
| HR and payroll software small business | C | both |
| Nextcloud setup for business | C | both |
| Slack alternative self-hosted | C | both |
| DocuSign alternative / Calendly alternative | C | both |
| legacy system modernization | C | both |

### C5 Web, E-commerce & Accessibility
| Keyword | Intent | Market |
|---|---|---|
| ADA website compliance | C | US |
| ADA website accessibility audit | C | US |
| WCAG 2.2 AA audit | C | both |
| website accessibility remediation | C | US |
| ADA demand letter website what to do | I | US |
| accessible ecommerce website | C | US |
| Shopify alternative open source / Medusa developer | C | both |
| ecommerce website development | C | both |
| small business website design | C | both |
| omnichannel inbox / Intercom alternative | C | both |
| social media scheduling tool self-hosted | C | both |
| inventory management for small business | C | both |
| Google Analytics alternative privacy | C | both |
| website maintenance services | C | both |

### C6 Monitoring & Managed IT
| Keyword | Intent | Market |
|---|---|---|
| server monitoring service | C | both |
| website uptime monitoring | C | both |
| status page for business | C | both |
| network monitoring for small business | C | both |
| remote IT support services | C | both |
| managed IT services Australia | C | AU |
| IT helpdesk outsourcing | C | both |
| IT asset management small business | C | both |
| Uptime Kuma setup / Grafana dashboard setup | I/C | both |
| observability for startups | C | US |

### C7 Education & Research
| Keyword | Intent | Market |
|---|---|---|
| LMS for training company | C | both |
| Moodle hosting and setup | C | both |
| online course platform self-hosted | C | both |
| JupyterHub setup for university lab | C | both |
| research software engineer for hire | C | both |
| exam management system | C | both |
| digital certificate verification QR | C | both |
| library management system for schools | C | both |

### C8 Industries
| Keyword | Intent | Market |
|---|---|---|
| IT support for dental practices / medical clinics | C | both |
| IT for law firms / accounting firms | C | both |
| NDIS software for small providers | C | AU |
| NDIS rostering and progress notes software | C | AU |
| job management software for tradies | C | AU |
| IT support for startups | C | US |

---

## 3. Metadata — page by page

Niyom: title ≤ 60 char (keyword age, brand shesh e) · description 140–155
char (benefit + CTA) · ek page = ek H1 = ek primary keyword · slug chhoto,
lowercase, hyphen · protita page e canonical, OG, Twitter, JSON-LD.
`{site}` = `https://ruhan.bd`.

### 3.1 Core pages

| Page | URL | Title | Meta description | H1 | Primary KW | Schema |
|---|---|---|---|---|---|---|
| Home | `/` | Private IT, AI & Backup Systems for Small Business \| Ruhan | We build backup, private AI, security and monitoring that run on your own machines — for US and Australian businesses. Book a free assessment. | Your systems. Your data. Your machines. | IT services for small business | Organization, WebSite, ProfessionalService |
| Solutions hub | `/solutions/` | IT & AI Solutions for Small Business \| Ruhan | Backup, private AI, security, business systems, web and managed IT — built on proven open source and supported after launch. See every solution. | Solutions | IT solutions for small business | CollectionPage, BreadcrumbList, ItemList |
| Industries hub | `/industries/` | IT & AI for Clinics, Firms, NDIS & Trades \| Ruhan | Technology for medical clinics, law and accounting firms, NDIS providers, trades and e-commerce brands — private, secure and supported. | Industries we serve | IT for small business by industry | CollectionPage, ItemList |
| Work | `/work/` | Case Studies: Backup, AI & Monitoring Projects \| Ruhan | Real systems we've built — encrypted backup, AI document engines, national-scale platforms and monitoring. What the problem was and what changed. | Our work | IT case studies | CollectionPage, ItemList |
| About | `/about/` | About Ruhan — Private IT & AI Engineering Team | Engineers who've built government-scale systems now helping small businesses own their IT. Our story, team, values and how we work. | About us | about | AboutPage, Organization, Person |
| Contact | `/contact/` | Book a Free IT & AI Assessment \| Ruhan | Tell us what's slowing you down. Free 30-minute assessment, a written plan in 48 hours. Working US and Australian business hours. | Let's talk | free IT assessment | ContactPage, Organization (contactPoint) |
| Pricing | `/pricing/` | Pricing: Setup Projects & Monthly Support Plans \| Ruhan | Fixed-price setup projects and simple monthly support plans for backup, AI, security and monitoring. No per-seat licence fees. | Pricing | managed IT pricing | WebPage, OfferCatalog |
| Security | `/security/` | Our Security & Data Handling Practices \| Ruhan | How we protect client data: least-privilege access, encryption, NDAs, audit logs and incident response. | Security at Ruhan | — (trust) | WebPage |
| Blog | `/blog/` | IT, AI & Security Guides for Small Business \| Ruhan | Practical guides on backups, private AI, Essential Eight, HIPAA, accessibility and monitoring — written by engineers. | Guides | small business IT guides | Blog |
| Privacy | `/privacy/` | Privacy Policy \| Ruhan | How Ruhan collects, uses and protects personal information. | Privacy Policy | — | WebPage |
| Terms | `/terms/` | Terms of Service \| Ruhan | Terms that apply to our website and services. | Terms of Service | — | WebPage |
| 404 | `/404.html` | Page not found \| Ruhan | — (noindex) | Page not found | — | — |

### 3.2 Category hubs

| URL | Title | Meta description | H1 |
|---|---|---|---|
| `/solutions/backup/` | Backup & Ransomware Recovery for Small Business \| Ruhan | Backups that actually restore: encrypted, offline copies, monthly restore tests and a recovery plan your team can follow. | Backup & disaster recovery |
| `/solutions/private-ai/` | Private AI & Automation for Business \| Ruhan | Use AI without sending client data to the cloud — private ChatGPT, document search, automation and AI receptionists on your own servers. | Private AI & automation |
| `/solutions/security/` | Cybersecurity & Compliance for Small Business \| Ruhan | Essential Eight, HIPAA and SOC 2 groundwork: MFA, password management, threat detection and the evidence auditors ask for. | Security & compliance |
| `/solutions/business-systems/` | Custom Business Systems & Internal Tools \| Ruhan | Replace spreadsheets and scattered apps with one system: projects, CRM, ERP, HR and dashboards — open source, no per-seat fees. | Business systems |
| `/solutions/web/` | Accessible Websites & E-commerce Development \| Ruhan | WCAG 2.2 AA websites and stores that sell and stay out of ADA trouble — plus chat, social and analytics that respect privacy. | Websites, e-commerce & accessibility |
| `/solutions/managed-it/` | Server Monitoring & Remote IT Support \| Ruhan | Know before your customers do: uptime and server monitoring, status pages, remote support and a helpdesk with response times in writing. | Monitoring & managed IT |
| `/solutions/education/` | LMS, Exam & Research Computing Solutions \| Ruhan | Course platforms, secure exams with verifiable certificates and research lab computing for schools, trainers and universities. | Education & research technology |

### 3.3 Top offer pages (★★★ — prothom wave)

| URL | Title | Meta description | Primary KW |
|---|---|---|---|
| `/solutions/backup/backup-restore-testing/` | Backup Restore Testing Service \| Prove Your Backups Work | We restore your backups every month, score their health and send a report — so you find problems before ransomware does. | backup restore testing |
| `/solutions/backup/ransomware-recovery/` | Ransomware Recovery Plan & Immutable Backups \| Ruhan | Offline, immutable backups, a one-page recovery runbook and a practice drill — recover in hours, not weeks. | ransomware recovery services |
| `/solutions/private-ai/private-chatgpt/` | Private ChatGPT for Business, On Your Own Server \| Ruhan | A ChatGPT-style assistant that runs on your hardware and answers from your documents. Nothing leaves your network. | private ChatGPT for business |
| `/solutions/private-ai/ai-document-search/` | AI Document Search for Law & Accounting Firms \| Ruhan | Ask questions across thousands of contracts and files and get answers with citations — privately, on your own server. | AI document search |
| `/solutions/private-ai/workflow-automation/` | Workflow Automation & AI Integration Services \| Ruhan | Connect forms, CRM, email and invoicing with n8n and AI steps. Stop copying data between five apps. | workflow automation for small business |
| `/solutions/private-ai/ai-receptionist/` | AI Receptionist for Clinics & Small Business \| Ruhan | Answer every call 24/7, book appointments and hand off to staff when needed — no more missed customers. | AI receptionist for small business |
| `/solutions/security/password-manager-sso-mfa/` | Business Password Manager, SSO & MFA Setup \| Ruhan | Self-hosted password vault, single sign-on and MFA for your whole team — rolled out, documented and supported. | password manager for business |
| `/solutions/security/essential-eight/` | Essential Eight Uplift for Australian Businesses \| Ruhan | Reach Essential Eight Maturity Level 1: MFA, patching, backups and app control — with the evidence to show for it. | Essential Eight compliance |
| `/solutions/business-systems/project-management/` | Self-Hosted Project Management (Jira Alternative) \| Ruhan | Plane or Huly set up for your team — roles, templates, training and support. Modern project management without per-seat fees. | Jira alternative self-hosted |
| `/solutions/business-systems/spreadsheet-to-app/` | Turn Spreadsheets into a Database App \| Ruhan | Move scattered Excel sheets into one database with forms, permissions and dashboards — in about a week. | convert Excel to database app |
| `/solutions/web/ada-website-accessibility/` | ADA Website Accessibility Audit & Remediation \| Ruhan | WCAG 2.2 AA audit, fixes and monthly re-scans with reports — reduce your risk of ADA demand letters. | ADA website compliance |
| `/solutions/web/accessible-ecommerce/` | Accessible E-commerce Store Development \| Ruhan | Online stores built to WCAG 2.2 AA from day one, on open-source commerce with no platform fees. | accessible ecommerce website |
| `/solutions/managed-it/uptime-monitoring/` | Website Uptime Monitoring & Status Pages \| Ruhan | 24/7 uptime checks, a branded status page and instant alerts by SMS or email — set up and watched for you. | website uptime monitoring |
| `/solutions/managed-it/server-monitoring/` | Server Monitoring & Predictive Alerts \| Ruhan | Lightweight agents watch CPU, disk, memory and databases — and warn you days before the disk fills up. | server monitoring service |
| `/solutions/managed-it/remote-it-support/` | Remote IT Support for Small Business \| Ruhan | Secure remote support with response times in writing, covering US and Australian business hours. | remote IT support services |

### 3.4 Industry pages

| URL | Title | Meta description |
|---|---|---|
| `/industries/clinics/` | IT & AI for Medical and Dental Clinics \| Ruhan | AI receptionist, HIPAA-ready security, tested backups and private AI for clinic paperwork — patient data stays yours. |
| `/industries/law-accounting-firms/` | Private AI & IT for Law and Accounting Firms \| Ruhan | Search every file with private AI, lock down logins and keep backups that restore — client confidentiality first. |
| `/industries/ndis-providers/` | NDIS Provider Software & IT Support \| Ruhan | Rostering, progress notes and claim exports for small NDIS providers, plus Essential Eight security. |
| `/industries/trades/` | Job Management & AI Receptionist for Trades \| Ruhan | Quote, schedule, invoice and never miss a call — simple job software for tradies and home-service teams. |
| `/industries/ecommerce/` | E-commerce IT: Accessibility, Stores & Support \| Ruhan | ADA-ready stores, one inbox for every channel, privacy-first analytics and monitoring that catches outages. |
| `/industries/education/` | Technology for Schools & Training Centers \| Ruhan | Course platforms, exams with verifiable certificates, backups and IT support for education providers. |
| `/industries/startups/` | SOC 2 Readiness & Monitoring for Startups \| Ruhan | Get SOC 2-ready with automated evidence, observability and incident alerting — built in, not bolted on. |

### 3.5 Every page — `<head>` template

```html
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{site}{path}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="website">            <!-- article for blog -->
<meta property="og:site_name" content="Ruhan">
<meta property="og:title" content="{og title — title theke brand bad}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{site}{path}">
<meta property="og:image" content="{site}/og/{slug}.jpg"> <!-- 1200×630, per page -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{alt}">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="{colors.canvas}">
<link rel="alternate" type="application/rss+xml" href="{site}/blog/rss.xml">
<script type="application/ld+json">{ per-page schema + BreadcrumbList }</script>
```

Build theke auto: canonical, OG image (page title diye render), BreadcrumbList,
sitemap entry, `lastmod`. Page er data thakbe `content/<page>.md` er YAML e:
`title, description, h1, keyword, schema, og_image_alt, faq`.

### 3.6 Structured data (JSON-LD)

| Type | Kothay | Field |
|---|---|---|
| **Organization** | site-wide | name, url, logo, sameAs (LinkedIn, GitHub, Clutch…), contactPoint (email, areaServed US/AU, availableLanguage en), founder |
| **WebSite** | home | name, url, publisher |
| **ProfessionalService** | home, solution hub | areaServed: United States, Australia · serviceType · hasOfferCatalog — *address shudhu sotti thakle* |
| **Service** | protita offer page | name, description, provider → Organization, areaServed, serviceType, offers (price thakle) |
| **BreadcrumbList** | sob inner page | |
| **FAQPage** | offer/industry page er FAQ | (Google rich result ekhon mostly gov/health er jonno, kintu AI answer engine porte pare) |
| **Article / BlogPosting** | blog | headline, author (Person), datePublished, dateModified, image |
| **Person** | about, blog author | name, jobTitle, sameAs, alumniOf, knowsAbout |
| **CollectionPage + ItemList** | hub pages | |

---

## 4. Technical (on-site) SEO checklist

| Area | Kaj |
|---|---|
| Crawl | `robots.txt` (sitemap link), `sitemap.xml` build theke auto (`<lastmod>`), sitemap index jodi > 1 type (pages, blog) |
| URL | lowercase, hyphen, trailing slash shob jaygay ek rokom; `index.html` bad; purono URL → **301** |
| Canonical | protita page self-canonical; query (`?type=`) wala page canonical → base URL |
| Index control | 404, thank-you, catalogue (`/components.html`) → `noindex` |
| Speed (Core Web Vitals) | LCP < 2.5s, INP < 200ms, CLS < 0.1 — font self-host + `font-display: swap` + preload (3ta Google font ekhon network e jay), image WebP/AVIF + `width/height` + lazy, CSS/JS minify, Cloudflare cache |
| Mobile | mobile-first; island safe-area; tap target 44px |
| Accessibility | **WCAG 2.2 AA nijer site e** — amra accessibility bikri korbo, tai site nije proof (alt, contrast, focus, heading order, skip link) |
| HTTPS/security headers | Cloudflare: HSTS, CSP, X-Content-Type-Options, Referrer-Policy |
| Structured data | build e generate, Rich Results Test e validate |
| Internal links | offer → category hub → home; offer ↔ related industry ↔ related case study ↔ related blog; breadcrumb |
| Images | descriptive file name + alt; OG image per page |
| AI search (GEO) | `llms.txt` (site summary + key pages); FAQ answer gula 40–60 word e sorasori; clear H2 question format |
| Language | `<html lang="en">`; Bangla bad; hreflang **na** (ekta English version). Pore AU-specific page lagle `/au/` + hreflang `en-AU` |
| Tools | Google Search Console + Bing Webmaster (sitemap submit), IndexNow (Bing), analytics: Plausible/Umami (cookie-free, banner lagbe na) ba GA4 |

## 5. On-page — protita page e

1. Title, description, H1, slug e primary keyword (§3).
2. Prothom 100 word e keyword + problem.
3. H2 gula user er proshno: "What is…", "How does it work", "What does it cost", "Who is it for".
4. Proof: case study link, number, "built on X (n★ on GitHub)".
5. CTA: "Book a free assessment" (upore + niche).
6. FAQ 4–6ta (FAQPage schema).
7. 3–5ta internal link, 1–2ta authoritative external link (ASD, HHS, W3C).
8. Image alt, OG image.
9. 800–1,500 word offer page, 1,500–2,500 word pillar blog.
10. Author/reviewer naam + date (E-E-A-T).

## 6. Off-page (backlink & trust)

| Kaj | Ki |
|---|---|
| Agency directory profile | **Clutch**, GoodFirms, DesignRush, The Manifest, Sortlist — client review ana |
| Freelance platform | Upwork / Toptal / Contra agency profile → site link |
| Company presence | LinkedIn company page, GitHub organization, Crunchbase |
| Open-source community | n8n, Ollama, Uptime Kuma, ERPNext community e contribution/guide/integration — community page theke link |
| Free tool = link magnet | Backup Readiness Quiz, Essential Eight self-check, WCAG quick scanner, "uptime checker" — log e share hoy |
| Guest post / syndication | dev.to, Hashnode, Medium (canonical amader site e) |
| Expert quote | Qwoted, Featured.com, Help a B2B Writer — journalist ke quote |
| Product Hunt | free tool launch |
| Podcast / webinar | AU/US small-business podcast e guest |
| Review | Clutch + Google review (GBP thakle) |
| Brand mention | shob profile e same naam, URL, email (consistency) |
| **Na** | link kena, PBN, spam directory, fake review |

## 7. Content (blog) plan — pillar + cluster

| Pillar (2–3k word) | Cluster article (800–1.5k) |
|---|---|
| The Small Business Backup Guide (3-2-1-1-0) | how to test backups · immutable backups explained · ransomware recovery checklist · restic vs Kopia vs Borg |
| Private AI for Business | run an LLM locally · is ChatGPT HIPAA compliant · RAG explained for law firms · PII redaction before AI · Ollama vs LocalAI |
| Essential Eight for Small Business (AU) | ML1 checklist · MFA rollout · application control basics · backup requirements |
| HIPAA Security for Small Practices (US) | risk assessment template · BAA explained · clinic password policy |
| ADA Website Accessibility 2026 | got an ADA demand letter? · WCAG 2.2 AA checklist · accessible e-commerce checkout |
| Monitoring for Small Business | uptime vs server monitoring · Uptime Kuma setup · status page best practice |
| Replace SaaS with Open Source | Jira→Plane · Airtable→NocoDB · Salesforce→Twenty · Slack→Mattermost · cost calculator |
| Automation | n8n for small business · 10 automations every office needs · AI receptionist ROI |

Cadence: **2 article / shoptah** prothom 6 mash; protita article → 1 offer page e internal link.

## 8. Sitemap structure

```text
/sitemap.xml                (index)
  /sitemap-pages.xml        home, hubs, about, contact, pricing, security, legal
  /sitemap-solutions.xml    7 hub + ~50 offer
  /sitemap-industries.xml   7
  /sitemap-work.xml         case studies
  /sitemap-blog.xml         articles (+ image)
```

Shob build theke generate, `lastmod` = content file er last change.

## 9. Measure (KPI)

| | 3 mash | 6 mash | 12 mash |
|---|---|---|---|
| Indexed pages | 40+ | 80+ | 150+ |
| Long-tail keyword top 10 | 10 | 40 | 100 |
| Organic visitor / mash | 300 | 2,000 | 8,000 |
| Assessment booking / mash | 2 | 8 | 20 |
| Referring domains | 15 | 40 | 100 |

Sotti kotha: notun domain e competitive keyword ("managed IT services") e
6–12 mash lage; prothome long-tail ("backup restore testing service",
"private ChatGPT for law firm") diye traffic ashbe.

## 10. Build order (SEO dik theke)

1. Brand decision (§0.2) → Search Console + Bing verify `ruhan.bd`
2. Content model (`content/*.md` YAML) + build e metadata, schema, sitemap, OG auto
3. Home, 7 hub, about, contact, pricing, security, legal
4. 15ta ★★★ offer page + 3ta industry (clinics, law/accounting, NDIS)
5. 3ta case study (anonymized) + blog 8 pillar
6. Off-page: Clutch, LinkedIn, GitHub org, 1ta free tool
7. Protishoptah: 2 article + 1 offer page; protimash Search Console review

## Sources

- [ccTLDs Google treats as generic (tld-list)](https://tld-list.com/blog/gcctlds-by-google) · [Google treats .ai as gTLD (Search Engine Land)](https://searchengineland.com/google-now-treats-ai-domains-as-generic-top-level-domains-427770) · [ccTLD vs gTLD 2026 (NameSilo)](https://www.namesilo.com/blog/en/domain-name-search/cctld-vs-gtld-in-2026-does-your-extension-impact-global-seo)
- [IT company SEO keywords (mediasearchgroup)](https://www.mediasearchgroup.com/industries/seo-keyword-ideas-for-it-companies.php) · [IT services keywords (nowspeed)](https://nowspeed.com/blog/top-google-ads-keywords-technology-companies/)
- Market/demand sources: `docs/PROJECT-IDEAS.md` → Sources
