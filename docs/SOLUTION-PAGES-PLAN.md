# Solution pages — current state

> Built and live in `dist/` (not deployed yet). Every page passes `npm run check`
> with an **SEO score of 100/100**. Projects come from `docs/PROJECT-CATALOG.md`.
> Audience: US / AU small businesses, US English.

## 1. Pages

| # | Page | URL | Primary keyword | Catalog | Look (accent · hero · story · offers · pains) |
|---|---|---|---|---|---|
| 1 | AI Agents & Chatbots | `/solutions/ai-agent-development/` | AI agent development | #1–#7 | ember · split · flow · grid · light |
| 2 | Workflow Automation | `/solutions/workflow-automation/` | workflow automation | #8–#12 | amber · reverse · row · rows · light |
| 3 | Websites & Accessibility | `/solutions/website-accessibility/` | website accessibility | #13–#18 | peach · stacked · checklist · bento · dark |
| 4 | Data & Dashboards | `/solutions/business-dashboards/` | business dashboards | #19–#22 | amber · split · row · bento · dark |
| 5 | Backup & Recovery | `/solutions/small-business-backup/` | small business backup | #23–#26 | wood · reverse · timeline · rows · dark |
| 6 | Security & Compliance | `/solutions/small-business-cybersecurity/` | small business cybersecurity | #27–#33 | rust · stacked · checklist · grid · dark |
| 7 | Monitoring & IT Support | `/solutions/server-monitoring/` | server monitoring | #34–#39 | ember · reverse · timeline · bento · light |
| 8 | Business Systems | `/solutions/custom-business-software/` | custom business software | #40–#45 | wood · stacked · row · grid · light |
| 9 | Mobile Apps | `/solutions/mobile-app-development/` | mobile app development | #46–#47 | peach · reverse · flow · rows · dark |
| 10 | Education & Research | `/solutions/online-course-platform/` | online course platform | #48–#49 | amber · stacked · timeline · grid · light |
| 11 | Labs | `/labs/private-ai-tools/` | private AI tools | HIDDEN-GEMS | rust · split · flow · bento · dark |
| — | Sitemap | `/sitemap.html` (+ `/sitemap.xml`) | — | all | — |

Home links to every page three ways: the six service cards ("Explore …"),
the **Every solution** grid, and the footer **Solutions** column — all generated
from the content files, so a new page appears everywhere automatically.

## 2. Each page tells one story

| Section | What it does | Visual |
|---|---|---|
| Hero | keyword kicker + promise line, CTA, email / WhatsApp / LinkedIn | its own live scene (below) |
| Sound familiar? | three problems in the client's words | underline draws in; light or dark band |
| How we see it | Listen → Map → Build → Run | sticky flow / timeline / checklist, or an autoplaying row pipeline |
| What we build | the catalog projects for that category | grid, wide rows or bento; each card plays its log |
| Under the hood | how it's built, open-source stars | dark band, three cards |
| How it sounds | an illustrative first call | bubbles arrive in turn |
| Working together | quick start / project / ongoing | middle option highlighted |
| FAQ | the questions people search | accordion + FAQPage schema |
| Contact · Related | form, contact cards, links to 3 related pages | |

**Hero scenes (one per page):** `viz-agent` (agent books a call) · `viz-automation`
(token runs Form→CRM→Invoice→Email) · `viz-audit` (scan to WCAG 100) ·
`viz-dashboard` (bars build, ask your data) · `viz-recovery` (2:14am attack →
restored 6:05) · `viz-security` (checklist 8/8) · `viz-monitor` (disk forecast) ·
`viz-saas` (12 tools fade into one) · `viz-phone` (offline order prints) ·
`viz-course` (modules → QR certificate) · `viz-labs` (meeting → answer with timestamp).

## 3. SEO, per page

- Primary keyword in the URL, title, H1, description, first 100 words and share title.
- At least two H2s carry a secondary keyword; every secondary appears on the page.
- Keyword density 0.3–2.5%; images have alt text; no vague link text.
- Schema: BreadcrumbList, ItemList of `Service` (one per project, areaServed US + AU), FAQPage.
- Own 1200×630 share image (`/og/<slug>.jpg`) with the page's headline and avatar.
- `npm run check` prints the score for every page and writes `dist/seo-report.json`.

**Sitemap:** `/sitemap.xml` lists every indexed page with `lastmod` and its images
(image sitemap); `/sitemap.xsl` styles it for people; `/sitemap.html` links every
page and every project; `robots.txt` points to the XML.

## 4. How to add or change a page

1. Copy a file in `content/solutions/`, change `seo`, `keywords`, `look` and the copy.
2. `npm run og` — renders its share image and rebuilds.
3. `npm run check` — must pass, score should be 100.

Files: template `src/templates/solution.html` · looks `src/components/look/look.css`
· scenes `src/components/viz/viz-*.html` · OG `tools/og.py` · scores `tools/check.mjs`.

## 5. Open items

- "Live in" times on project cards are estimates — confirm against real delivery speed.
- "Reply within one business day" is promised on every page — keep only if true.
- Deploy: switch `.github/workflows/deploy.yml` to build `src/` and publish `dist/`.
