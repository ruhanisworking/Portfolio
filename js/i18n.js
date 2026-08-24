/* =========================================================================
   BILINGUAL DICTIONARY — English / বাংলা
   -------------------------------------------------------------------------
   The Bangla here is written, not translated. Word order follows Bangla
   (verb-final), idiom follows how people actually speak, and sentences are
   restructured where a literal rendering would read like machine output.

   Term policy, as asked:
   · Words Bangladeshis already say in Bangla are written in Bengali script
     even though they came from English — ওয়েবসাইট, মোবাইল অ্যাপ, সার্ভার,
     ব্যাকআপ, ড্যাশবোর্ড, সিকিউরিটি. Forcing a "pure" Bangla word here
     (যন্ত্রগণক-style) would make it harder to read, not easier.
   · Product and protocol names stay in Latin script — React, Laravel,
     PostgreSQL, Kafka, Docker, WhatsApp, SEO, API, ERP, RAG. Nobody writes
     these in Bengali script and transliterating them would obscure them.
   · Numerals use Bengali digits in dates and counts (২০২৪), because that is
     what reads naturally in running Bangla text.
   ========================================================================= */

window.I18N = {
  /* ── document-level ────────────────────────────────────────────────── */
  "doc.title": {
    en: "Mohammad Ruhan Islam — Software, Apps & AI Systems",
    bn: "মোহাম্মদ রুহান ইসলাম — সফটওয়্যার, অ্যাপ ও AI সিস্টেম",
  },
  "doc.desc": {
    en: "Websites, mobile apps, AI chatbots, ERP and security — built personally on open source, in Dhaka. One engineer, full ownership, no license fees.",
    bn: "ওয়েবসাইট, মোবাইল অ্যাপ, AI চ্যাটবট, ERP আর সিকিউরিটি — ঢাকা থেকে, নিজে হাতে, ওপেন সোর্সে তৈরি। একজন ইঞ্জিনিয়ার, পুরো মালিকানা আপনার।",
  },

  /* ── nav ───────────────────────────────────────────────────────────── */
  /* Two sections are about "how I work": §01 is the principles, §04 is the
     five steps. Nav labels are deliberately different words so they don't
     read as duplicates — Approach vs Process, দৃষ্টিভঙ্গি vs কাজের ধাপ.
     ("ধাপ" = steps, which describes §04 better than the old "ধরন" = type.) */
  "nav.approach":   { en: "Approach",    bn: "দৃষ্টিভঙ্গি" },
  "nav.services":   { en: "Services",    bn: "সার্ভিস" },
  "nav.experience": { en: "Experience",  bn: "অভিজ্ঞতা" },
  "nav.process":    { en: "Process",     bn: "কাজের ধাপ" },
  "nav.faq":        { en: "FAQ",         bn: "প্রশ্ন" },
  "nav.cta":        { en: "Let's talk",  bn: "কথা বলি" },
  "nav.menu":       { en: "Menu",        bn: "মেনু" },

  /* ── hero ──────────────────────────────────────────────────────────── */
  "hero.chip": {
    en: "Dhaka, Bangladesh · working nationwide & remote",
    bn: "ঢাকা, বাংলাদেশ · সারা দেশে ও রিমোটে কাজ",
  },
  /* The headline is Ruhan's own wording, kept verbatim in both languages.
     Bangla headlines are commonly nominal — no verb — so this reads as a
     masthead line rather than an unfinished sentence. */
  "hero.title1": { en: "One engineer for", bn: "একজন ইঞ্জিনিয়ার আর" },
  "hero.title2": { en: "everything digital.", bn: "সবকিছু ডিজিটাল" },
  "hero.lede": {
    en: "Websites, mobile apps, AI automation, enterprise systems and security — all of it built by hand on proven open-source technology, national government systems included. <strong>Not resold, not outsourced, not dropped in from a template.</strong>",
    bn: "ওয়েবসাইট, মোবাইল অ্যাপ, AI অটোমেশন, এন্টারপ্রাইজ সিস্টেম আর সিকিউরিটি — সবটাই পরীক্ষিত ওপেন সোর্স প্রযুক্তির উপর, নিজের হাতে গড়া। জাতীয় পর্যায়ের সরকারি সিস্টেমও এর মধ্যে আছে। <strong>কারও থেকে কিনে এনে বেচা নয়, আউটসোর্স নয়, টেমপ্লেট বসিয়ে দেওয়াও নয়।</strong>",
  },
  "hero.cta1": { en: "Start a conversation", bn: "কথা শুরু করুন" },
  "hero.cta2": { en: "See what I build",     bn: "কী কী বানাই, দেখুন" },
  "hero.role": { en: "Programmer · IICT, BUET", bn: "প্রোগ্রামার · IICT, BUET" },
  "hero.name": { en: "Mohammad Ruhan Islam", bn: "মোহাম্মদ রুহান ইসলাম" },
  /* This is a title, so it has to read as a name — not a description.
     "সব স্তরের ইঞ্জিনিয়ার" described the job instead of naming it.
     সব্যসাচী is the Bangla word for someone skilled across many things
     (from Arjuna, who drew the bow with either hand), and it carries
     exactly what "full-spectrum" claims while sounding like a designation.
     Safe alternative if this reads too literary: keep the English,
     bn: "Full-Spectrum Engineer" — mixed script is normal for job titles
     here, and it's what ex.2.r already does with Full-Stack. */
  "hero.jobtitle": { en: "Full-Spectrum Engineer", bn: "সব্যসাচী ইঞ্জিনিয়ার" },
  /* The old line ("build it so it still runs when nobody's watching") was
     clumsy in English and worse in Bangla. This one is a real engineering
     truth and lands identically in both. */
  "hero.quote": {
    en: "Good software is quiet — you only notice it when it stops.",
    bn: "ভালো সফটওয়্যার নিঃশব্দে চলে — থেমে গেলেই কেবল চোখে পড়ে।",
  },
  "hero.cite": { en: "Ruhan", bn: "রুহান" },
  "hero.figalt": {
    en: "Ruhan on the river, forest on both banks",
    bn: "নদীর বুকে রুহান, দুই পাড়ে বন",
  },

  /* ── 01 approach ───────────────────────────────────────────────────── */
  "ap.label": { en: "How I work", bn: "যেভাবে কাজ করি" },
  "ap.title": {
    en: "Four things you can count on",
    bn: "যে চারটি বিষয়ে নিশ্চিন্ত থাকতে পারেন",
  },
  "ap.1.h": { en: "Full ownership", bn: "দায়িত্ব একজনেরই" },
  "ap.1.p": {
    en: "One person answers for design, code, servers and uptime. No handoffs, no finger-pointing.",
    bn: "ডিজাইন, কোড, সার্ভার, আপটাইম — সবের জবাব একজনই দেবে। কাজ হাতবদল হয় না, দোষ চাপানোরও কেউ থাকে না।",
  },
  "ap.2.h": { en: "Open source first", bn: "ওপেন সোর্স, সবার আগে" },
  "ap.2.p": {
    en: "No license fees, no lock-in. Audit every line if you want to — it's yours.",
    bn: "লাইসেন্স ফি নেই, কোথাও আটকে থাকা নেই। ইচ্ছে হলে প্রতিটা লাইন যাচাই করে দেখুন — কোডটা আপনারই।",
  },
  /* "প্রোডাকশনের কথা মাথায় রেখে" was a phrase, not a heading. What it
     actually promises is that the thing keeps running — so Bangla says that. */
  "ap.3.h": { en: "Production mindset", bn: "চালু রাখার প্রস্তুতি" },
  "ap.3.p": {
    en: "Monitoring, backups and security configured from day one — not after the first incident.",
    bn: "মনিটরিং, ব্যাকআপ আর সিকিউরিটি প্রথম দিন থেকেই বসানো — প্রথম দুর্ঘটনার পরে নয়।",
  },
  "ap.4.h": { en: "Straight answers", bn: "সোজা কথা" },
  "ap.4.p": {
    en: "If something doesn't need building, you'll be told so — before you spend on it.",
    bn: "যেটা বানানোর দরকার নেই, সেটা আগেই বলে দেওয়া হবে — টাকা খরচ করার আগে।",
  },

  /* ── 02 services ───────────────────────────────────────────────────── */
  "sv.label": { en: "What I build", bn: "যা বানাই" },
  /* "serious software / serious-sized vendor" is an English pun that dies in
     Bangla ("সিরিয়াস সফটওয়্যার" is meaningless). Rewritten in English to a
     parallel that survives translation, and Bangla mirrors the same balance. */
  "sv.title": {
    en: 'Enterprise-grade software, <span class="tone">without the enterprise-grade bill</span>',
    bn: 'বড় প্রতিষ্ঠানের মানের সফটওয়্যার, <span class="tone">বড় প্রতিষ্ঠানের বিল ছাড়াই</span>',
  },
  "sv.note": {
    en: "Open any card to see the tools it's actually built on — not just what it's called.",
    bn: "যেকোনো কার্ডে চাপ দিন — দেখবেন জিনিসটা আসলে কোন কোন টুল দিয়ে বানানো, শুধু নামটা নয়।",
  },
  "sv.more":  { en: "Read more", bn: "বিস্তারিত" },
  "sv.less":  { en: "Show less", bn: "গুটিয়ে নিন" },
  "sv.built": { en: "Built with", bn: "যা দিয়ে বানানো" },

  "sv.web.h": { en: "Websites & web platforms", bn: "ওয়েবসাইট ও ওয়েব প্ল্যাটফর্ম" },
  "sv.web.t": { en: "Corporate · e-commerce · portals", bn: "কর্পোরেট সাইট · ই-কমার্স · পোর্টাল" },
  "sv.web.d": {
    en: "From a company site that ranks on Google to a full customer portal with payments, dashboards and admin panels — fast, mobile-first, built to be found.",
    bn: "গুগলে র‍্যাঙ্ক করে এমন কোম্পানি সাইট থেকে শুরু করে পেমেন্ট, ড্যাশবোর্ড আর অ্যাডমিন প্যানেলসহ পুরো কাস্টমার পোর্টাল — দ্রুত, মোবাইলকে আগে রেখে, আর মানুষ যেন খুঁজে পায় সেভাবে বানানো।",
  },
  "sv.web.x": {
    en: "Most business websites in Bangladesh are built to be looked at once and forgotten. These are built to work: SEO-ready structure, sub-second load times, responsive on the cheapest Android phone your customer owns, and a backend you can grow into — user accounts, online payments (bKash, Nagad, SSLCommerz, cards), booking, e-commerce, multi-language Bangla/English.",
    bn: "বাংলাদেশে বেশিরভাগ ব্যবসার ওয়েবসাইট বানানো হয় একবার দেখার জন্য, তারপর ভুলে যাওয়ার জন্য। এগুলো বানানো হয় কাজ করার জন্য: SEO-এর উপযোগী গঠন, এক সেকেন্ডের কমে লোড, আপনার কাস্টমারের সবচেয়ে সস্তা অ্যান্ড্রয়েড ফোনেও ঠিকঠাক চলা, আর এমন ব্যাকএন্ড যার উপর ব্যবসা বড় করা যায় — ইউজার অ্যাকাউন্ট, অনলাইন পেমেন্ট (বিকাশ, নগদ, SSLCommerz, কার্ড), বুকিং, ই-কমার্স, বাংলা-ইংরেজি দুই ভাষা।",
  },

  "sv.mob.h": { en: "Mobile apps", bn: "মোবাইল অ্যাপ" },
  "sv.mob.t": { en: "Android & iOS · real-time & offline", bn: "অ্যান্ড্রয়েড ও iOS · রিয়েল-টাইম ও অফলাইন" },
  "sv.mob.d": {
    en: "Real-time, offline-capable apps — delivery tracking, chat, field tools, customer apps — that stay fast on real Bangladeshi networks.",
    bn: "রিয়েল-টাইম, অফলাইনেও চলে এমন অ্যাপ — ডেলিভারি ট্র্যাকিং, চ্যাট, মাঠপর্যায়ের টুল, কাস্টমার অ্যাপ — বাংলাদেশের আসল নেটওয়ার্কেও দ্রুত থাকে।",
  },
  "sv.mob.x": {
    en: "Apps here fail for one reason: they're built assuming perfect internet. These assume a bad-network day — offline-first data, background sync, push notifications, live location and real-time updates over WebSockets. One codebase for Android and iOS where it makes sense, native where it doesn't.",
    bn: "এখানে অ্যাপ ফেল করে একটাই কারণে — ধরে নেওয়া হয় ইন্টারনেট সবসময় ভালো থাকবে। এগুলো ঠিক উল্টোটা ধরে নিয়ে বানানো, নেট খারাপ থাকা দিনের কথা মাথায় রেখে: অফলাইন-ফার্স্ট ডেটা, ব্যাকগ্রাউন্ড সিঙ্ক, পুশ নোটিফিকেশন, লাইভ লোকেশন আর WebSocket দিয়ে রিয়েল-টাইম আপডেট। যেখানে যুক্তিসঙ্গত সেখানে এক কোডবেসেই অ্যান্ড্রয়েড আর iOS, আর যেখানে দরকার সেখানে নেটিভ।",
  },

  "sv.ai.h": { en: "AI automation & chatbots", bn: "AI অটোমেশন ও চ্যাটবট" },
  "sv.ai.t": { en: "RAG · Bangla + English · always on", bn: "RAG · বাংলা ও ইংরেজি · সবসময় চালু" },
  "sv.ai.d": {
    en: "AI that answers your customers, reads your documents, and does the repetitive work — on your own data, in Bangla and English.",
    bn: "এমন AI যেটা আপনার কাস্টমারের প্রশ্নের উত্তর দেয়, আপনার ডকুমেন্ট পড়ে, আর বারবার করা কাজগুলো নিজেই সেরে ফেলে — আপনার নিজের ডেটার উপর, বাংলা ও ইংরেজি দুই ভাষাতেই।",
  },
  "sv.ai.x": {
    en: "Not a demo — deployed AI. Customer-support chatbots trained on your own catalog, policies and FAQs (website, WhatsApp, Messenger). Document intelligence: feed in contracts, reports or forms and get summaries or drafted replies. Built on retrieval-augmented generation (RAG) so answers come from your documents, not the internet's imagination — with the option to run models fully on your own servers.",
    bn: "ডেমো নয় — সত্যিকারের চালু থাকা AI। আপনার নিজের ক্যাটালগ, পলিসি আর প্রশ্নোত্তর দিয়ে শেখানো কাস্টমার সাপোর্ট চ্যাটবট (ওয়েবসাইট, WhatsApp, Messenger)। ডকুমেন্ট বোঝার ক্ষমতা: চুক্তিপত্র, রিপোর্ট বা ফর্ম দিলে সারসংক্ষেপ কিংবা উত্তরের খসড়া তৈরি করে দেয়। পুরোটা RAG পদ্ধতিতে বানানো, তাই উত্তর আসে আপনার নিজের ডকুমেন্ট থেকে — ইন্টারনেটের কল্পনা থেকে নয়। চাইলে মডেলটা পুরোপুরি আপনার নিজের সার্ভারেই চালানো যায়।",
  },

  "sv.erp.h": { en: "Enterprise software", bn: "এন্টারপ্রাইজ সফটওয়্যার" },
  "sv.erp.t": { en: "ERP · HR · inventory · accounting", bn: "ERP · HR · ইনভেন্টরি · হিসাব" },
  "sv.erp.d": {
    en: "The systems that run an organization — inventory, HR, approvals, reporting — without the SAP-sized price tag.",
    bn: "যে সিস্টেমগুলো একটা প্রতিষ্ঠান চালায় — ইনভেন্টরি, HR, অনুমোদন, রিপোর্ট — SAP-এর মতো দামের বোঝা ছাড়াই।",
  },
  "sv.erp.x": {
    en: "The same workflows large organizations run on SAP and Oracle — inventory, procurement, HR & payroll, accounting, multi-level approvals, reporting — can be built on mature open-source platforms or custom-developed, at a fraction of the cost and fully owned by you. Role-based access, audit logs, and the reporting your management actually asks for.",
    bn: "বড় প্রতিষ্ঠানগুলো SAP আর Oracle-এ যে কাজগুলো চালায় — ইনভেন্টরি, ক্রয়, HR ও পে-রোল, হিসাব, ধাপে ধাপে অনুমোদন, রিপোর্ট — সেগুলোই পরিণত ওপেন সোর্স প্ল্যাটফর্মে বা কাস্টম বানিয়ে করা যায়, খরচের সামান্য অংশে, আর মালিকানা পুরোটাই আপনার। রোল অনুযায়ী অ্যাক্সেস, অডিট লগ, আর আপনার ম্যানেজমেন্ট আসলে যে রিপোর্টটা চায় ঠিক সেটাই।",
  },

  "sv.data.h": { en: "Data platforms & analytics", bn: "ডেটা প্ল্যাটফর্ম ও অ্যানালিটিক্স" },
  "sv.data.t": { en: "Dashboards · pipelines · search", bn: "ড্যাশবোর্ড · পাইপলাইন · সার্চ" },
  "sv.data.d": {
    en: "Data scattered across Excel files, databases and PDFs, turned into live dashboards and searchable knowledge.",
    bn: "এক্সেল ফাইল, ডেটাবেজ আর PDF-এ ছড়িয়ে থাকা ডেটাকে লাইভ ড্যাশবোর্ড আর খুঁজে বের করার মতো তথ্যে রূপ দেওয়া।",
  },
  "sv.data.x": {
    en: "The pipeline: pull data from every source (databases, APIs, spreadsheets, even scanned documents), move it reliably, and land it somewhere queryable. Apache NiFi and Airbyte for ingestion, Kafka for real-time streams, Spark when the volume gets serious, OpenSearch for full-text search, and Apache Superset for dashboards your management can open in a browser — no per-seat BI license, ever.",
    bn: "পাইপলাইনটা এরকম: সব উৎস থেকে ডেটা আনা (ডেটাবেজ, API, স্প্রেডশিট, এমনকি স্ক্যান করা কাগজও), সেটা নির্ভরযোগ্যভাবে সরানো, আর এমন জায়গায় জমা করা যেখান থেকে খুঁজে বের করা যায়। ডেটা আনার জন্য Apache NiFi আর Airbyte, রিয়েল-টাইম স্ট্রিমের জন্য Kafka, ভলিউম বড় হলে Spark, full-text search-এর জন্য OpenSearch, আর ম্যানেজমেন্ট ব্রাউজারেই খুলতে পারবে এমন ড্যাশবোর্ডের জন্য Apache Superset — per-seat BI লাইসেন্সের ঝামেলা ছাড়াই।",
  },

  "sv.sec.h": { en: "Security & reliability", bn: "সিকিউরিটি ও নির্ভরযোগ্যতা" },
  "sv.sec.t": { en: "Hardening · monitoring · backups", bn: "হার্ডেনিং · মনিটরিং · ব্যাকআপ" },
  "sv.sec.d": {
    en: "Hardened servers, monitored networks, encrypted backups and private VPNs — so the bad-hour phone call never comes.",
    bn: "শক্ত করে সাজানো সার্ভার, নজরে রাখা নেটওয়ার্ক, এনক্রিপ্টেড ব্যাকআপ আর প্রাইভেট VPN — যাতে অসময়ের ফোনটা কখনো আসতেই না হয়।",
  },
  "sv.sec.x": {
    en: "Security is not a product you buy; it's how the system is built. Network intrusion detection with Suricata, database activity monitoring, WireGuard/OpenVPN for secure remote access, server hardening, and SQL-injection-proof application design. Reliability is the other half: automated encrypted backups with Bacula and Restic (tested restores, not just backups), S3-compatible private object storage with MinIO, and monitoring that alerts before users notice.",
    bn: "সিকিউরিটি কিনে আনার জিনিস নয় — এটা সিস্টেম বানানোর পদ্ধতি। Suricata দিয়ে নেটওয়ার্ক ইনট্রুশন ডিটেকশন, ডেটাবেজ অ্যাক্টিভিটি মনিটরিং, নিরাপদ রিমোট অ্যাক্সেসের জন্য WireGuard/OpenVPN, সার্ভার হার্ডেনিং, আর SQL ইনজেকশন ঠেকিয়ে দেয় এমন অ্যাপ্লিকেশন ডিজাইন। বাকি অর্ধেকটা নির্ভরযোগ্যতা: Bacula আর Restic দিয়ে স্বয়ংক্রিয় এনক্রিপ্টেড ব্যাকআপ — শুধু ব্যাকআপ নয়, ফিরিয়ে আনা যায় কি না সেটাও পরীক্ষা করা; MinIO দিয়ে নিজস্ব S3-সদৃশ স্টোরেজ; আর এমন মনিটরিং যেটা ইউজার টের পাওয়ার আগেই জানিয়ে দেয়।",
  },

  /* ── toolkit ───────────────────────────────────────────────────────── */
  "tk.title": { en: "The full toolkit", bn: "পুরো টুলকিট" },
  "tk.note": {
    en: "Every tool is a deliberate choice, not a default.",
    bn: "প্রতিটা টুল ভেবেচিন্তে বেছে নেওয়া — অভ্যাসবশত নয়।",
  },
  "tk.web":    { en: "Web & backend",       bn: "ওয়েব ও ব্যাকএন্ড" },
  "tk.front":  { en: "Frontend",            bn: "ফ্রন্টএন্ড" },
  "tk.mobile": { en: "Mobile",              bn: "মোবাইল" },
  "tk.db":     { en: "Databases",           bn: "ডেটাবেজ" },
  "tk.ai":     { en: "AI / LLM",            bn: "AI / LLM" },
  "tk.sec":    { en: "Security & network",  bn: "সিকিউরিটি ও নেটওয়ার্ক" },
  "tk.devops": { en: "DevOps",              bn: "DevOps" },
  "tk.ent":    { en: "Enterprise",          bn: "এন্টারপ্রাইজ" },

  /* ── full-bleed band ───────────────────────────────────────────────── */
  "bl.label": { en: "Where the work happens", bn: "যেখানে কাজটা হয়" },
  "bl.title": {
    en: "Built in Bangladesh.<br />Built to hold up anywhere.",
    bn: "বাংলাদেশে তৈরি।<br />যেকোনো জায়গায় টিকে থাকার মতো।",
  },
  "bl.text": {
    en: "Government-scale systems, hybrid teams, unreliable networks, real budgets. The constraints here are stricter than most — which is exactly why the software has to be built properly the first time.",
    bn: "জাতীয় পর্যায়ের সিস্টেম, মিশ্র টিম, অনিশ্চিত নেটওয়ার্ক, বাস্তব বাজেট। এখানকার সীমাবদ্ধতা বেশিরভাগ জায়গার চেয়ে কঠিন — আর ঠিক সেজন্যই সফটওয়্যারটা প্রথমবারেই ঠিকভাবে বানাতে হয়।",
  },
  "bl.alt": {
    en: "A river running between two forested hills in Bangladesh",
    bn: "বাংলাদেশের দুই পাহাড়ের বন ঘেঁষে বয়ে চলা নদী",
  },

  /* ── 03 experience ─────────────────────────────────────────────────── */
  "ex.label": { en: "Experience", bn: "অভিজ্ঞতা" },
  "ex.title": {
    en: 'Where I\'ve shipped, and <span class="tone">carried the responsibility</span>',
    bn: 'যে কাজগুলো করেছি, <span class="tone">আর যার দায়ও নিয়েছি</span>',
  },
  "ex.now":   { en: "Current role", bn: "বর্তমান দায়িত্ব" },
  "ex.done":  { en: "Completed engagement", bn: "সম্পন্ন কাজ" },
  "ex.1.y":   { en: "May 2024 — Present", bn: "মে ২০২৪ — চলমান" },
  "ex.1.r":   { en: "Programmer", bn: "প্রোগ্রামার" },
  "ex.1.o":   {
    en: "IICT, BUET <small>· Institute of Information & Communication Technology · promoted from Assistant Programmer</small>",
    bn: "IICT, BUET <small>· ইনস্টিটিউট অব ইনফরমেশন অ্যান্ড কমিউনিকেশন টেকনোলজি · অ্যাসিস্ট্যান্ট প্রোগ্রামার থেকে পদোন্নতি</small>",
  },
  "ex.1.d": {
    en: "Government-scale systems where downtime isn't a metric, it's an incident — including national-level work for the Bangladesh Technical Education Board (BTEB), kept short here under employer confidentiality.",
    bn: "জাতীয় পর্যায়ের সরকারি সিস্টেম, যেখানে সার্ভার বন্ধ থাকাটা কোনো পরিসংখ্যান নয় — একটা দুর্ঘটনা। এর মধ্যে বাংলাদেশ কারিগরি শিক্ষা বোর্ডের (BTEB) কাজও আছে; প্রতিষ্ঠানের গোপনীয়তার কারণে এখানে সংক্ষেপেই বলা।",
  },
  "ex.2.y": { en: "Jan 2025 — Oct 2025", bn: "জানুয়ারি ২০২৫ — অক্টোবর ২০২৫" },
  "ex.2.r": { en: "Team Lead / Full-Stack Developer", bn: "টিম লিড / Full-Stack ডেভেলপার" },
  "ex.2.o": {
    en: "Merilsoft <small>· Remote, part-time</small>",
    bn: "Merilsoft <small>· রিমোট, পার্ট-টাইম</small>",
  },
  "ex.2.d": {
    en: "Joined as a developer, promoted to Team Lead within the engagement — AI, web and mobile product lines delivered independently.",
    bn: "ডেভেলপার হিসেবে যোগ দিয়ে কাজ চলাকালীনই টিম লিড হিসেবে পদোন্নতি — AI, ওয়েব আর মোবাইল, তিন ধরনের প্রোডাক্টই এককভাবে ডেলিভার করা।",
  },
  "ex.edu": { en: "Education", bn: "শিক্ষাগত যোগ্যতা" },
  "ex.edu1.h": {
    en: "Bachelor of Science, Computer Science & Engineering",
    bn: "ব্যাচেলর অব সায়েন্স, কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং",
  },
  "ex.edu1.p": {
    en: "Khulna University of Engineering & Technology (KUET) · 4 years",
    bn: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET) · ৪ বছর",
  },
  "ex.edu2.h": { en: "Higher Secondary Certificate", bn: "উচ্চ মাধ্যমিক সার্টিফিকেট" },
  "ex.edu2.p": {
    en: "Science · Notre Dame College, Dhaka · 2018",
    bn: "বিজ্ঞান · নটর ডেম কলেজ, ঢাকা · ২০১৮",
  },

  /* ── why open source ───────────────────────────────────────────────── */
  "os.label": { en: "Why open source", bn: "কেন ওপেন সোর্স" },
  /* three short clauses instead of one long noun-pile — reads as a rhythm in
     both languages rather than a list bolted together */
  "os.title": {
    en: "Same capability. No license fees. Full ownership.",
    bn: "সক্ষমতা একই। লাইসেন্স ফি নেই। মালিকানা পুরোটাই আপনার।",
  },
  "os.prose": {
    en: "Most software vendors in Bangladesh quietly rent you technology: per-user licenses, per-year renewals, and a dependency you can never leave. I build on the open-source stack that global enterprises actually run — Kafka moves data at LinkedIn, MinIO stores it at Fortune-500 scale, Superset powers dashboards at Airbnb. <strong>You own every line of it,</strong> and your only recurring cost is hosting.",
    bn: "বাংলাদেশের বেশিরভাগ সফটওয়্যার বিক্রেতা আসলে আপনাকে প্রযুক্তিটা ভাড়া দেয় — প্রতি ইউজারে লাইসেন্স, প্রতি বছরে নবায়ন, আর এমন নির্ভরশীলতা যেখান থেকে বেরোনোর পথ থাকে না। আমি কাজ করি সেই ওপেন সোর্স স্ট্যাকে, যেটা পৃথিবীর বড় প্রতিষ্ঠানগুলো নিজেরাই চালায় — LinkedIn-এ ডেটা সরায় Kafka, Fortune-500 স্কেলে জমা রাখে MinIO, Airbnb-র ড্যাশবোর্ড চালায় Superset। <strong>কোডের প্রতিটা লাইনের মালিক আপনি,</strong> আর নিয়মিত খরচ বলতে শুধু হোস্টিং।",
  },
  "os.1.h": { en: "No lock-in", bn: "কোথাও আটকে থাকা নেই" },
  "os.1.p": {
    en: "Leave anytime with all your code and data.",
    bn: "যখন খুশি নিজের সব কোড আর ডেটা নিয়ে চলে যেতে পারবেন।",
  },
  "os.2.h": { en: "No license bills", bn: "লাইসেন্সের বিল নেই" },
  "os.2.p": {
    en: "Budget goes into building, not renewing.",
    bn: "বাজেটটা যায় বানানোর পেছনে, নবায়নের পেছনে নয়।",
  },
  "os.3.h": { en: "No black boxes", bn: "কোনো ব্ল্যাক বক্স নেই" },
  "os.3.p": {
    en: "Every component is auditable and documented.",
    bn: "প্রতিটা অংশ যাচাই করা যায়, আর ডকুমেন্ট করা আছে।",
  },

  /* ── 04 process ────────────────────────────────────────────────────── */
  "pr.label": { en: "How we work together", bn: "একসাথে কীভাবে কাজ হয়" },
  "pr.title": {
    en: 'From &ldquo;we have a problem&rdquo; to <span class="tone">&ldquo;it\'s running&rdquo;</span>',
    bn: '&ldquo;সমস্যাটা এই&rdquo; থেকে <span class="tone">&ldquo;এখন চলছে&rdquo;</span> পর্যন্ত',
  },
  "pr.note": {
    en: "The same five steps every time, in order — because the order is what keeps things calm.",
    bn: "প্রতিবারই একই পাঁচটা ধাপ, একই ক্রমে — কারণ ক্রমটাই কাজটাকে শান্ত রাখে।",
  },
  "pr.1.h": { en: "Listen", bn: "শুনি" },
  "pr.1.p": {
    en: "You describe the problem in plain language — Bangla or English. No requirement documents needed to start.",
    bn: "সমস্যাটা আপনি সহজ ভাষায় বলবেন — বাংলা বা ইংরেজি, যেটায় স্বাচ্ছন্দ্য। শুরু করার জন্য কোনো রিকোয়ারমেন্ট ডকুমেন্ট লাগবে না।",
  },
  "pr.2.h": { en: "Scope honestly", bn: "সৎভাবে হিসাব দিই" },
  "pr.2.p": {
    en: "A written proposal: what gets built, on what, by when, for how much. If a ready-made tool solves it cheaper, you'll be told.",
    bn: "লিখিত প্রস্তাব — কী বানানো হবে, কীসের উপর, কবের মধ্যে, কত টাকায়। বাজারে তৈরি কোনো টুল যদি কম খরচেই কাজটা করে দেয়, সেটাও জানিয়ে দেওয়া হবে।",
  },
  "pr.3.h": { en: "Build in the open", bn: "খোলাখুলি বানাই" },
  "pr.3.p": {
    en: "Weekly working demos, not monthly status reports. You see the real system early enough to change your mind cheaply.",
    bn: "প্রতি সপ্তাহে চলমান ডেমো, মাসে একবার স্ট্যাটাস রিপোর্ট নয়। আসল সিস্টেমটা এত আগে দেখবেন যে মত বদলালেও খরচ কম পড়বে।",
  },
  "pr.4.h": { en: "Launch safely", bn: "নিরাপদে চালু করি" },
  "pr.4.p": {
    en: "Monitoring, backups and rollback are configured before go-live, not after the first incident.",
    bn: "মনিটরিং, ব্যাকআপ আর রোলব্যাক চালু হওয়ার আগেই বসানো থাকে — প্রথম দুর্ঘটনার পরে নয়।",
  },
  "pr.5.h": { en: "Stay reachable", bn: "পাশে থাকি" },
  "pr.5.p": {
    en: "Support terms agreed up front. When something breaks at a bad hour, you have a phone number, not a ticket queue.",
    bn: "সাপোর্টের শর্ত আগেই ঠিক করা থাকে। অসময়ে কিছু ভেঙে গেলে আপনার হাতে একটা ফোন নম্বর থাকবে, টিকিটের সারি নয়।",
  },

  /* ── 05 faq ────────────────────────────────────────────────────────── */
  "fq.label": { en: "Questions", bn: "প্রশ্ন" },
  "fq.title": { en: "Straight answers", bn: "সোজা উত্তর" },
  "fq.1.q": {
    en: "How much does a website cost in Bangladesh?",
    bn: "বাংলাদেশে একটা ওয়েবসাইট বানাতে কত খরচ হয়?",
  },
  "fq.1.a": {
    en: "It depends on what the website has to do. A professional company site is a different project from an e-commerce platform with payments and inventory. You'll get a fixed written quote after one conversation — free, no obligation.",
    bn: "ওয়েবসাইটটা আসলে কী কাজ করবে, তার উপর নির্ভর করে। একটা পেশাদার কোম্পানি সাইট আর পেমেন্ট-ইনভেন্টরিসহ ই-কমার্স প্ল্যাটফর্ম — দুটো পুরোপুরি আলাদা কাজ। একবার কথা বললেই লিখিত, নির্দিষ্ট দাম পেয়ে যাবেন — বিনামূল্যে, কোনো বাধ্যবাধকতা ছাড়াই।",
  },
  "fq.2.q": {
    en: "Can you build an app that works with bKash / Nagad?",
    bn: "বিকাশ বা নগদ দিয়ে চলে, এমন অ্যাপ বানানো যাবে?",
  },
  "fq.2.a": {
    en: "Yes — bKash, Nagad, SSLCommerz and international card gateways are all standard integrations here.",
    bn: "যাবে — বিকাশ, নগদ, SSLCommerz আর আন্তর্জাতিক কার্ড গেটওয়ে, সবগুলোই এখানে নিয়মিত কাজের অংশ।",
  },
  "fq.3.q": {
    en: "What is an AI chatbot, and does my business need one?",
    bn: "AI চ্যাটবট জিনিসটা কী, আর আমার ব্যবসার কি সত্যিই দরকার?",
  },
  "fq.3.a": {
    en: "It's software that answers customer questions automatically — on your website, WhatsApp or Messenger — using your own product and policy information. If your team answers the same 20 questions every day, it usually pays for itself. If it wouldn't, you'll be told that instead of being sold one.",
    bn: "এটা এমন সফটওয়্যার যেটা আপনার কাস্টমারের প্রশ্নের উত্তর নিজে থেকেই দেয় — ওয়েবসাইটে, WhatsApp বা Messenger-এ — আপনার নিজের প্রোডাক্ট আর পলিসির তথ্য কাজে লাগিয়ে। আপনার টিম যদি প্রতিদিন একই ২০টা প্রশ্নের উত্তর দিয়েই যায়, তাহলে সাধারণত খরচটা উঠে আসে। আর যদি না আসে, সেটা বিক্রি করার বদলে সোজাসুজি বলে দেওয়া হবে।",
  },
  "fq.4.q": {
    en: "Why open source instead of licensed software?",
    bn: "লাইসেন্স করা সফটওয়্যার বাদ দিয়ে ওপেন সোর্স কেন?",
  },
  "fq.4.a": {
    en: "The licensed giants are excellent — and priced for multinationals. Open-source equivalents deliver the same core capability with zero license fees and no vendor lock-in. You own everything that's built.",
    bn: "লাইসেন্স করা বড় নামগুলো চমৎকার — আর দামটাও ঠিক করা বহুজাতিক কোম্পানির কথা ভেবে। ওপেন সোর্স বিকল্পগুলো মূল কাজটা একইভাবেই করে, কোনো লাইসেন্স ফি ছাড়া, আর কোথাও আটকে না রেখে। যা বানানো হয়, তার পুরোটার মালিক আপনি।",
  },
  "fq.5.q": { en: "Do you provide support after delivery?", bn: "ডেলিভারির পরে সাপোর্ট পাওয়া যাবে?" },
  "fq.5.a": {
    en: "Yes. Every project ships with a support arrangement in writing — updates, backups, monitoring, and a real human to call.",
    bn: "যাবে। প্রতিটা প্রজেক্টের সাথেই লিখিত সাপোর্টের ব্যবস্থা থাকে — আপডেট, ব্যাকআপ, মনিটরিং, আর ফোন ধরার মতো একজন সত্যিকারের মানুষ।",
  },
  "fq.6.q": {
    en: "Can our data stay fully inside our own servers?",
    bn: "আমাদের ডেটা কি পুরোপুরি নিজেদের সার্ভারেই রাখা যাবে?",
  },
  "fq.6.a": {
    en: "Yes. Everything — including AI — can run entirely on infrastructure you own, with nothing leaving your network. This matters for organizations handling sensitive data, and it's a specialty here.",
    bn: "যাবে। AI সহ সবকিছুই আপনার নিজের অবকাঠামোয় চলতে পারে, কিছুই আপনার নেটওয়ার্কের বাইরে যাবে না। সংবেদনশীল ডেটা নিয়ে কাজ করা প্রতিষ্ঠানের জন্য এটা গুরুত্বপূর্ণ, আর এটা এখানকার বিশেষ দক্ষতার জায়গা।",
  },

  /* ── 06 contact ────────────────────────────────────────────────────── */
  "ct.label": { en: "Get in touch", bn: "যোগাযোগ" },
  /* Bangla is verb-final: "পান ... উত্তর" put the verb first and read as a
     translation. Moving উত্তর পান to the end makes it a normal sentence. */
  "ct.title": {
    en: 'Describe the problem.<br />Get an <span class="tone">engineer\'s answer</span>.',
    bn: 'সমস্যাটা বলুন।<br /><span class="tone">ইঞ্জিনিয়ারের উত্তর</span> পান।',
  },
  "ct.note": {
    en: "Explain what's broken, missing, or slow — in Bangla or English — and you'll get back a straight answer: what to build, what it takes, and whether you even need it.",
    bn: "কী ভেঙে আছে, কী নেই, কিংবা কোথায় ধীর — বাংলা বা ইংরেজিতে বলুন। উত্তরে পাবেন সোজা কথা: কী বানাতে হবে, কতটা লাগবে, আর আদৌ আপনার এটা দরকার কি না।",
  },
  "ct.email":     { en: "Email", bn: "ইমেইল" },
  "ct.wa":        { en: "WhatsApp", bn: "WhatsApp" },
  "ct.copyMail":  { en: "Copy address", bn: "ঠিকানা কপি করুন" },
  "ct.copyNum":   { en: "Copy number", bn: "নম্বর কপি করুন" },
  "ct.copied":    { en: "Copied", bn: "কপি হয়েছে" },
  "ct.where": {
    en: "Based in Dhaka · working across Bangladesh · remote-friendly worldwide.<br />Typical reply time: within one business day.",
    bn: "ঢাকায় অবস্থান · সারা বাংলাদেশে কাজ · রিমোটে বিশ্বের যেকোনো জায়গায়।<br />সাধারণত এক কর্মদিবসের মধ্যেই উত্তর।",
  },
  "f.name":    { en: "Your name", bn: "আপনার নাম" },
  "f.company": { en: "Company", bn: "প্রতিষ্ঠান" },
  "f.optional":{ en: "(optional)", bn: "(ঐচ্ছিক)" },
  "f.email":   { en: "Email", bn: "ইমেইল" },
  "f.phone":   { en: "Phone / WhatsApp", bn: "ফোন / WhatsApp" },
  "f.type":    { en: "Project type", bn: "কী ধরনের কাজ" },
  "f.msg":     { en: "About the project", bn: "প্রজেক্ট সম্পর্কে" },
  "f.msgPh": {
    en: "What's broken, missing, or slow? Rough timeline and budget help, but aren't required.",
    bn: "কী ভেঙে আছে, কী নেই, বা কোথায় ধীর? সময়সীমা আর বাজেটের ধারণা থাকলে সুবিধা হয়, তবে বাধ্যতামূলক নয়।",
  },
  "f.o1": { en: "Website / web platform", bn: "ওয়েবসাইট / ওয়েব প্ল্যাটফর্ম" },
  "f.o2": { en: "Mobile app", bn: "মোবাইল অ্যাপ" },
  "f.o3": { en: "AI automation / chatbot", bn: "AI অটোমেশন / চ্যাটবট" },
  "f.o4": { en: "Enterprise software (ERP/HR)", bn: "এন্টারপ্রাইজ সফটওয়্যার (ERP/HR)" },
  "f.o5": { en: "Data platform / analytics", bn: "ডেটা প্ল্যাটফর্ম / অ্যানালিটিক্স" },
  "f.o6": { en: "Security & infrastructure", bn: "সিকিউরিটি ও অবকাঠামো" },
  "f.o7": { en: "Not sure yet — let's talk", bn: "এখনো নিশ্চিত নই — কথা বলি" },
  "f.privacy": {
    en: "No spam, no mailing list — this only reaches me.",
    bn: "কোনো স্প্যাম নেই, মেইলিং লিস্ট নেই — এটা শুধু আমার কাছেই পৌঁছায়।",
  },
  "f.send":    { en: "Send enquiry", bn: "পাঠিয়ে দিন" },
  "f.sending": { en: "Sending…", bn: "পাঠানো হচ্ছে…" },

  /* form status messages */
  "f.errFields": {
    en: "Please fill in your name, email and a short message.",
    bn: "অনুগ্রহ করে আপনার নাম, ইমেইল আর অল্প করে হলেও বার্তাটা লিখুন।",
  },
  "f.errEmail": {
    en: "That email address doesn't look right — mind checking it?",
    bn: "ইমেইল ঠিকানাটা ঠিক মনে হচ্ছে না — একটু দেখে নেবেন?",
  },
  "f.ok": {
    en: "Thanks — that's landed in my inbox. You'll hear back within one business day.",
    bn: "ধন্যবাদ — বার্তাটা আমার ইনবক্সে পৌঁছেছে। এক কর্মদিবসের মধ্যেই উত্তর পাবেন।",
  },
  "f.fbNotSet": {
    en: "Direct sending isn't switched on yet, so",
    bn: "সরাসরি পাঠানোর ব্যবস্থাটা এখনো চালু হয়নি, তাই",
  },
  "f.fbFailed": {
    en: "The form couldn't send just now, so",
    bn: "ফর্মটা এই মুহূর্তে পাঠাতে পারল না, তাই",
  },
  "f.fbOffline": { en: "You look offline, so", bn: "আপনি অফলাইনে আছেন মনে হচ্ছে, তাই" },
  "f.fbTail": {
    en: "Your mail app should be opening with the message ready to send. If nothing happened, email <strong>{mail}</strong> directly.",
    bn: "আপনার মেইল অ্যাপ খুলে যাওয়ার কথা, বার্তাটা পাঠানোর জন্য তৈরি অবস্থায়। কিছু না হলে সরাসরি <strong>{mail}</strong> ঠিকানায় মেইল করুন।",
  },

  /* ── footer ────────────────────────────────────────────────────────── */
  /* echoes the headline without repeating it word for word */
  "ft.tag": {
    en: "One engineer for everything digital — websites, apps, AI, enterprise systems and security, built by hand on open source.",
    bn: "ডিজিটাল সবকিছু একজন ইঞ্জিনিয়ারের হাতে — ওয়েবসাইট, অ্যাপ, AI, এন্টারপ্রাইজ সিস্টেম আর সিকিউরিটি, সবই ওপেন সোর্সে নিজে হাতে গড়া।",
  },
  "ft.explore": { en: "Explore", bn: "ঘুরে দেখুন" },
  "ft.contact": { en: "Contact", bn: "যোগাযোগ" },
  "ft.toolkit": { en: "Toolkit", bn: "টুলকিট" },
  "ft.enquiry": { en: "Send an enquiry", bn: "বার্তা পাঠান" },
  "ft.place":   { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
  "ft.copy": {
    en: "&copy; 2026 <a class=\"name-link\" href=\"https://ruhan.lol/\">Mohammad Ruhan Islam</a> &middot; Dhaka, Bangladesh",
    bn: "&copy; ২০২৬ <a class=\"name-link\" href=\"https://ruhan.lol/\">মোহাম্মদ রুহান ইসলাম</a> &middot; ঢাকা, বাংলাদেশ",
  },
  "ft.top": { en: "Back to top", bn: "উপরে ফিরুন" },
  "ft.seo": {
    en: "Software development, website design, mobile app development, AI automation, ERP and cyber security services in Dhaka and across Bangladesh.",
    bn: "ঢাকা ও সারা বাংলাদেশে সফটওয়্যার ডেভেলপমেন্ট, ওয়েবসাইট ডিজাইন, মোবাইল অ্যাপ ডেভেলপমেন্ট, AI অটোমেশন, ERP আর সাইবার সিকিউরিটি সেবা।",
  },
};
