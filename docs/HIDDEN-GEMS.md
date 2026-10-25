# Hidden gems — GitHub e notun, potential boro, client ekhono chay na

> Egula GitHub e druto star pacche (developer ra jane), kintu Upwork e client
> ra **ei naam dhore** ekhono kaj post kore na — karon tara jane na eta ache.
> Amader shubidha: age theke service banie rakha, client ke **problem er bhashay**
> bikri kora ("apnar meeting er note nijer machine e"), tool er naam diye na.
>
> ★ = GitHub star · Jonmo = repo toiri (year-month) · data 2026-10-25.
> "Client chay na" = amar onumaan — confirm korte Upwork e repo er naam diye
> search koro (0–5ta job = gem, 50+ = already bajar).

## Short list — prothome ei 8ta

| # | Repo (★ · jonmo) | Ek line e | ➜ Amader pitch |
|---|---|---|---|
| 1 | **OpenShell** (20k · 2026-02, NVIDIA) | AI agent ke safe sandbox e chalay | **"Safe AI Agent Box"** — office er agent ke file/network e limit diye chalano |
| 2 | **claude-mem** (103k · 2025-08) / **mem0** (68k) | AI agent ke long-term memory dey | **"AI that remembers your clients"** — support/sales agent je ager kotha mone rakhe |
| 3 | **nanobot** (49k · 2026-02) | ultra-light self-hosted personal AI agent | **"Executive AI assistant"** — owner er email/calendar/task, nijer server e |
| 4 | **MCP servers** (92k) · **FastMCP** (28k) · GitHub MCP (34k) · Playwright MCP (39k) | AI ke company er tool/data er sathe jore (standard plug) | **"Connect your AI to your business"** — CRM/ERP/DB er custom MCP server banie dewa |
| 5 | **Open Notebook** (41k) / **SurfSense** (17k, air-gapped) | NotebookLM er open-source bikolpo | **"Private NotebookLM for your firm"** — research/legal team, data baire na |
| 6 | **WrenAI** (18k ⚠️) / **Vanna** (24k) | database ke English e proshno (text-to-SQL) | **"Ask your database"** — owner nijei "last month top 10 customer?" proshno kore |
| 7 | **Voicebox** (58k · 2026-01) · **Chatterbox** (27k) · **Kokoro** (10k) · **faster-whisper** (26k) | local voice clone, TTS, transcription | **"Private meeting notes + voice"** — call record → transcript → summary, kichu cloud e na |
| 8 | **MinerU** (82k ⚠️) / **Marker** (41k) | complex PDF/Office → AI-ready text | **"Document migration for AI"** — purono hajar PDF ke AI-ready knowledge base |

---

## Full list

| # | Repo (★ · jonmo) | Ki kore | Keno client ekhono chay na | ➜ Amader service pitch | Kar jonno | Risk |
|---|---|---|---|---|---|---|
| **AI agent runtime & memory** |||||||
| 1 | OpenShell (20k · 2026-02) | agent ke sandbox e, privacy diye chalay | ekdom notun; client "agent safety" bujhe na | Safe AI Agent Box — permission, log, kill-switch | agent use korte bhoy pay emon office | notun, API bodlate pare |
| 2 | claude-mem (103k · 2025-08) | agent er session-jura memory | developer tool hishebe chena | coding/support agent er team memory setup | dev team, support team | — |
| 3 | mem0 (68k) | drop-in memory layer | client "memory" chay, naam jane na | AI that remembers your clients — CRM + memory | sales/support | — |
| 4 | graphiti (32k) / cognee (33k) | AI er jonno real-time knowledge graph | concept kothin | company knowledge graph — ke kar sathe, ki project | consultancy, agency | setup bhari |
| 5 | GraphRAG (36k, Microsoft) | graph-based RAG — boro doc set e bhalo uttor | normal RAG ei client khushi | "deep answer" RAG upgrade for law/research | firm with 10k+ docs | khoroch beshi |
| 6 | nanobot (49k · 2026-02) | light personal AI agent | personal agent er bajar notun | Executive AI assistant (email/calendar/task) | owner, consultant | — |
| 7 | E2B (15k) / Daytona (71k) | AI-generated code safe e chalanor jayga | infra-level, client dekhe na | AI data analyst je safe e code chalay | analytics team | — |
| **MCP — AI ke business tool er sathe jora** |||||||
| 8 | MCP servers (92k) | standard way AI ke tool/data dey | protocol notun (2024-11), client naam jane na | custom MCP server for your CRM/ERP/DB | je keu ChatGPT/Claude use kore | spec bodlay |
| 9 | FastMCP (28k) | Python e MCP server banano | developer tool | MCP connector development as a service | SaaS company (nijer product e AI chay) | — |
| 10 | Playwright MCP (39k) / Stagehand (26k) | AI browser chalay | browser-use er moto, aro notun | API chara portal automation (#6 catalog er upgrade) | ops team | site ToS |
| **Document AI** |||||||
| 11 | MinerU (82k ⚠️) | complex PDF → markdown/JSON | client "data extraction" bole, tool chene na | Document migration for AI | firm, archive | license |
| 12 | Marker (41k) | PDF → markdown, druto, accurate | same | scanned book/report → searchable | library, publisher, research | — |
| 13 | Stirling-PDF (95k ⚠️) | self-hosted PDF toolbox (merge, OCR, sign…) | Adobe/online tool e chole | private PDF office — sensitive PDF baire na | law, HR, clinic | license |
| 14 | Papra (6k · 2025-01) | minimal document archive | khub notun | paperless office starter (Paperless er halka) | choto office | chhoto project |
| **Knowledge & research** |||||||
| 15 | Open Notebook (41k) | NotebookLM bikolpo | NotebookLM e free cholche | Private NotebookLM for your firm | research, legal, consulting | — |
| 16 | SurfSense (17k) | air-gapped research agent | air-gapped chahida niche | defense/health/legal er offline research AI | regulated industry | — |
| 17 | Vane (38k, ex-Perplexica) | AI answer engine (Perplexity er moto) | Perplexity free | company-internal Perplexity (web + internal docs) | team | — |
| 18 | Karakeep (30k) | AI auto-tag bookmark/notes | personal tool | team research library — link/notes AI diye shajano | agency, research | — |
| **Data & BI** |||||||
| 19 | WrenAI (18k ⚠️) | GenBI — governed text-to-SQL | BI = dashboard bhabe, proshno na | Ask your database | owner, manager | bhul SQL — review lagbe |
| 20 | Vanna (24k) | SQL database er sathe chat | same | Metabase/Superset er pashe chat | same | — |
| **Local voice** |||||||
| 21 | Voicebox (58k · 2026-01) | open AI voice studio — clone, dictate | notun, creator-oriented | brand voice for videos/IVR (consent shoho) | creator, small brand | voice clone er nirapotta/consent |
| 22 | Chatterbox (27k) · Dia (19k) · F5-TTS (15k) · Fish Speech (33k ⚠️) · Kokoro (10k) | high-quality TTS, local | client ElevenLabs e pay kore | ElevenLabs bill chara local TTS — IVR, e-learning narration | e-learning, call center | model license check |
| 23 | faster-whisper (26k) / whisper.cpp (55k) | local transcription | Otter/Fireflies e chole | Private meeting notes — record → transcript → summary → CRM | law, clinic, HR (confidential call) | — |
| **Model serving & cost** |||||||
| 24 | vLLM (95k) | druto LLM serving | infra-level | "AI bill half" — nijer GPU/VPS e model serve | AI-heavy startup | GPU khoroch |
| 25 | LiteLLM (62k ⚠️) | 100+ LLM ek gateway, cost tracking | developer tool | AI cost gateway — team er AI khoroch, limit, routing | jekono company AI use kore | — |
| 26 | Unsloth (79k) | nijer data diye model fine-tune | client fine-tune er dorkar bujhe na | company-tuned small model (style, domain) | support, legal template | data quality |
| **Self-host infra & identity** |||||||
| 27 | Komodo (13k) | onek server e build/deploy | Coolify er chaye kom chena | multi-server ops for agencies | agency with many client sites | — |
| 28 | Pocket ID (10k) | shohoj passkey login (OIDC) | SSO = boro company bhabe | passkey login for small team (password chara) | 5–50 joner office | — |
| 29 | code-server (80k) | browser e VS Code | dev tool | secure dev box for contractors (code baire jay na) | startup with freelancers | — |
| 30 | Hoppscotch (81k) | API test tool (Postman bikolpo) | Postman e chole | private API workspace for team | dev team | — |
| **Coding agents (amader nijer speed er jonno + service)** |||||||
| 31 | Codex CLI (131k) · Gemini CLI (108k) · OpenHands (92k) · Cline (71k) · Goose (56k) | AI coding agent | client "developer" chay, agent na | "AI-accelerated delivery" — amra druto deliver kori; + client team ke agent setup/training | dev team | quality review lagbe |
| **Productivity (Notion/Miro/Figma bikolpo)** |||||||
| 32 | AFFiNE (74k ⚠️) | Notion + Miro ek jaygay | Notion e chole | private workspace (doc + whiteboard) | agency, school | license |
| 33 | Docmost (22k) | Confluence-er moto wiki | Confluence/Notion | company handbook/wiki, nijer server e | 10–200 team | — |
| 34 | Penpot (62k) | Figma bikolpo | Figma e chole | design system hosting for agencies (Figma bill chara) | design agency | — |
| 35 | tldraw (51k ⚠️) | infinite canvas SDK | developer SDK | custom whiteboard feature in client's app | SaaS | license |
| 36 | Memos (64k) · Actual Budget (30k) | notes · local-first budgeting | personal app | family-office / small business finance+notes kit | household business | — |

---

## Merge kore notun pitch (gem + gem)

| Pitch | Merge | Kar jonno |
|---|---|---|
| **Private Meeting Brain** | faster-whisper + Open Notebook + mem0 | confidential call kora firm — record → note → "ager meeting e ki bolechilo?" |
| **Ask-Your-Business AI** | WrenAI/Vanna + MCP server + LiteLLM | owner — DB, CRM, invoice theke ek chat e uttor, khoroch control shoho |
| **AI Office in a Box** | Ollama + OpenShell + MCP + Pocket ID | 10–50 joner office — safe agent, passkey login, nijer tool er sathe jora |
| **Document → Knowledge** | MinerU/Marker + GraphRAG + Stirling-PDF | purono archive wala firm — PDF theke deep-answer knowledge base |
| **Voice Front Desk Pro** | faster-whisper + Chatterbox + Pipecat + mem0 | clinic — local voice, caller ke mone rakhe |
| **Agency Ops Stack** | Komodo + Docmost + Penpot + Hoppscotch | web agency — sob client site, wiki, design, API ek jaygay, SaaS bill chara |

## Kivabe check korbo (protita gem)

1. Upwork e repo naam + problem diye search → job count likhe rakho.
2. GitHub star growth (last 90 din) — star-history.com.
3. License porbo (⚠️ gula age).
4. Ekta demo banie Loom video + ekta blog post ("How to run X privately") — SEO + proof.
5. Website e problem-er bhashay page (tool er naam secondary keyword).

Star data: GitHub API, 2026-10-25.
