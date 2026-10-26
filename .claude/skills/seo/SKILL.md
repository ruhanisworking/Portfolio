---
name: seo
description: >
  SEO audit and fix playbook for ruhan.bd (US / Australian audience, .bd domain):
  120 checks across crawling, indexing, on-page, content, schema, speed, mobile,
  internal links, backlinks, international targeting, AI search and brand
  searches. Use when asked about SEO, Google ranking, indexing, Search Console,
  sitemap, keywords, "why isn't my site on Google", traffic, metadata, schema,
  backlinks or a QA pass. Pair with tools/check.mjs (automated rules + score).
---

# SEO playbook — ruhan.bd

**Automated:** `npm run check` enforces the rules marked ✅ and prints a 0–100
score per page (`dist/seo-report.json`). Everything else is manual — work
through it during a QA pass and record findings in the answer.

**How to audit (in this order):** build → `npm run check` → crawl every page on
desktop 1366 and mobile 390 with Playwright (console errors, overflow, broken
links, tap targets) → `curl -I` the live URLs (status, `x-robots-tag`,
redirects, Googlebot UA) → `site:ruhan.bd` and brand searches → Search Console
(Pages, Sitemaps, URL inspection) → fix → re-check.

## 1 · Crawl & index (15)
1. ✅ Every indexable page is in `sitemap.xml` with `<lastmod>`; noindex pages are not.
2. `robots.txt` allows crawling and names the sitemap.
3. No `noindex` meta or `x-robots-tag` on pages meant to rank (check live headers).
4. Googlebot user-agent gets 200 through Cloudflare (no bot challenge).
5. One canonical host: `www` → apex 301, `http` → `https` 301.
6. ✅ Self-referencing canonical on every page.
7. Trailing-slash style is consistent; the other form redirects or canonicalises.
8. No orphan pages — every page is linked from at least one other page.
9. Sitemap submitted in Search Console **and** Bing Webmaster Tools.
10. Request indexing for new key pages in URL Inspection (≈10/day).
11. A custom 404 page returns status 404, not 200.
12. No redirect chains longer than one hop.
13. Image sitemap entries for meaningful images (share image, avatar).
14. Old domains/URLs 301 to the matching new URL (never all to home).
15. Renamed URLs are changed *before* launch — after launch they need 301s.

## 2 · Titles, descriptions, headings (14)
16. ✅ Title ≤ 60 chars, primary keyword first, brand last.
17. ✅ Description 120–160 chars with the keyword and a reason to click.
18. ✅ Exactly one H1, containing the primary keyword.
19. ✅ Keyword in the first 100 words.
20. ✅ ≥ 2 H2s carry secondary keywords.
21. Headings in order (H2 → H3), never skipped for styling.
22. Each page targets **one** primary keyword; no two pages compete for it.
23. Titles are unique across the site.
24. Brand queries: the person/brand name appears in the home title and H1.
25. ✅ OG/Twitter title carries the keyword; OG image is 1200×630.
26. Description reads like an ad, not a keyword list.
27. Don't stuff: ✅ primary density 0.3–2.5%.
28. Use the exact phrase people type (US spelling for the US market).
29. Question H2s / FAQ match real "People also ask" wording.

## 3 · URLs (6)
30. ✅ Keyword in the slug (`/solutions/workflow-automation/`).
31. Short, lowercase, hyphenated, no dates or IDs.
32. Folder structure mirrors the site structure.
33. No parameters on indexable URLs (filters canonicalise to the base).
34. Never change a ranking URL without a 301.
35. Breadcrumbs reflect the URL path.

## 4 · Content & E-E-A-T (16)
36. Each page answers the searcher's intent fully (problem → solution → proof → next step).
37. Real experience: projects, numbers, years, organisations — never invented.
38. Name a real author/person with credentials (About, Person schema).
39. Cite or link authoritative sources (official docs, GitHub, standards bodies).
40. Original visuals (scenes, diagrams) beat stock photos.
41. Update dates on content that changes; keep `lastmod` honest.
42. Thin pages (< 300 words of substance) are merged or expanded.
43. No duplicate copy across solution pages — each says something different.
44. FAQ answers are 40–60 words and stand alone (good for snippets and AI answers).
45. Long-tail first: a new domain ranks for specific phrases before head terms.
46. One blog post per long-tail keyword, each linking to its solution page.
47. Show prices or price shapes where you can — buyers search for cost.
48. Clear contact paths on every page (email in full, phone, form).
49. Privacy policy and terms exist and are linked.
50. Illustrative examples are labelled as examples.
51. Location and service area are explicit (US & Australia).

## 5 · Structured data (10)
52. ✅ JSON-LD parses on every page.
53. Person (name, alternateName, jobTitle, image, sameAs LinkedIn/GitHub).
54. WebSite with alternateName for brand variants.
55. ProfessionalService / Service with `areaServed`.
56. BreadcrumbList on inner pages.
57. FAQPage only for real visible FAQs.
58. ItemList of services on hub/category pages.
59. Validate in Google's Rich Results Test after deploy.
60. Logo / image URLs are absolute and load.
61. No markup for content that isn't on the page.

## 6 · Speed & Core Web Vitals (12)
62. LCP < 2.5 s, INP < 200 ms, CLS < 0.1 (check PageSpeed Insights on mobile).
63. Hero image sized correctly, `width`/`height` set, `fetchpriority="high"`.
64. WebP/AVIF for images; nothing over ~200 KB without reason.
65. Fonts: few families/weights, `display=swap`, consider self-hosting.
66. One CSS and one JS bundle, cache-busted per deploy.
67. Don't ship CSS for other sites/apps in the main bundle.
68. Defer non-critical JS; no render-blocking scripts in `<head>`.
69. Animations use transform/opacity only (no layout thrash).
70. Respect `prefers-reduced-motion`.
71. Cloudflare caching for static assets; HTML not cached stale.
72. No console errors on any page.
73. No horizontal scroll at 390 px.

## 7 · Mobile & UX signals (10)
74. Tap targets ≥ 44 px.
75. Navigation reachable on touch devices at every width (no hover-only menus).
76. Text ≥ 16 px body on mobile; good contrast (WCAG AA).
77. Cards that look clickable are clickable — and those that aren't don't lift on hover.
78. Clear "View / Explore →" affordance on linked cards.
79. Sticky/fixed elements don't hide headings when jumping to anchors.
80. Animated scenes never look empty or broken mid-animation.
81. Forms work without third-party scripts; confirm what happens on submit.
82. Every page has a next step (CTA + related links).
83. Accessibility basics: alt text ✅, labels, focus styles, skip link.

## 8 · Internal linking (8)
84. Home links to every key page (cards, grid, footer).
85. Each solution page links to 2–3 related pages.
86. Descriptive anchor text ✅ (never "click here").
87. HTML sitemap linking every page and project.
88. Footer links to the main sections and legal pages.
89. Breadcrumbs on every inner page.
90. New blog posts link to their solution page; the solution page links back.
91. Fix every broken internal link (crawl after each deploy).

## 9 · Off-page & brand (12)
92. LinkedIn profile "Website" field → https://ruhan.bd.
93. GitHub profile README + website field → ruhan.bd.
94. Upwork / Contra / Clutch / GoodFirms profiles linking to the site.
95. Consistent name everywhere: "Mohammad Ruhan Islam (Ruhan)".
96. One guest post or community answer per month on a relevant site (n8n forum, dev.to).
97. Open-source contributions/issues that mention the site where allowed.
98. Free tool or checklist people link to (backup readiness, accessibility check).
99. Never buy links or use link networks.
100. Ask happy clients for a review on Clutch/LinkedIn.
101. Brand search ("ruhan.bd", full name) should show the site first within weeks of indexing — if not, strengthen the signals above.
102. Common first names ("Ruhan") are competitive — rank for the full name and domain first.
103. Social share previews tested (LinkedIn Post Inspector, Facebook debugger).

## 10 · International targeting (.bd domain, US/AU audience) (7)
104. `.bd` is geo-targeted to Bangladesh — compensate with US English, US/AU topics, `areaServed`.
105. Backlinks from US/AU sites matter more than BD directories.
106. Mention US/AU regulations by name (HIPAA, ADA, Essential Eight, NDIS).
107. Prices in USD/AUD when shown.
108. Business hours stated in US/AU terms.
109. `hreflang` only if separate localised versions exist.
110. Server/CDN fast in US and AU (Cloudflare edge).

## 11 · AI search / GEO (6)
111. `llms.txt` lists every page with a one-line description (build-generated).
112. Clear, quotable definitions ("What is workflow automation?").
113. Facts (years, organisations, services) stated plainly in text, not only in images.
114. Bing Webmaster Tools set up (powers ChatGPT search and Copilot).
115. Consistent entity info across site, LinkedIn and GitHub.
116. Don't block AI crawlers in robots.txt unless intended.

## 12 · Measurement (4)
117. Search Console weekly: Pages (why not indexed), Performance (queries, CTR).
118. Track which long-tail queries get impressions; write for those.
119. Privacy-friendly analytics to see which pages convert.
120. Re-run this checklist after every major change.

## Mistakes already made here — don't repeat
- `overflow-x: hidden` on html/body broke `position: sticky` → use `overflow-x: clip`.
- A hover `transform` on a link inside a card shrank its stretched click area.
- Hover-only island menu left touch tablets with no navigation.
- Hover lift on cards that weren't links.
- Brand name missing from the home title/H1 (bad for "ruhan" searches).
- Animated scenes that started empty.
