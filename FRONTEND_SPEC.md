# Frontend Spec — "River & Canopy" Design System

**Status: BINDING.** This file defines the frontend for this project. Follow it exactly.
Do not redesign, do not substitute "something similar", do not improve on it unsupervised.

> **How to use this:** drop this file into the new repo's root (or `docs/`) and tell Claude:
> *"Read FRONTEND_SPEC.md and follow it strictly for all frontend work."*

---

## 0. Rules for whoever implements this (read first)

These are the rules, in priority order. When they conflict, lower number wins.

1. **Never invent a colour, font, size, radius, shadow or breakpoint.** Every value you
   need is in §2–§5. If something genuinely isn't covered, ask — don't guess a value that
   "looks close".
2. **Use the CSS variables, never the raw hex.** Write `var(--canopy)`, not `#2f6b47`.
   The one exception is documented in §2.4.
3. **One stylesheet, shared by every page.** No per-page CSS files, no `<style>` blocks,
   no inline `style=` attributes. (One inline exception is allowed: the honeypot field in
   §7.8.)
4. **Vanilla HTML/CSS/JS.** No React, no Tailwind, no build step, no bundler, no CSS
   framework, no jQuery. If you think a dependency is needed, ask first.
5. **Mobile-first quality floor is not optional.** §6 and §9 ship with the first page, not
   "later".
6. **The traps in §11 are real bugs that already happened once.** Read that section before
   writing layout code. Re-introducing one of them is a defect, not a style difference.
7. **When something is ambiguous, match the reference implementation** (the portfolio this
   spec was extracted from) rather than improvising.

---

## 1. What this design is

A calm, light, spacious page. Soft gradient canvas, generous whitespace, rounded panels
holding card grids, one warm serif carrying every heading. Depth comes from **layered soft
shadows**, never hard offsets or heavy borders.

**The palette is sampled from a photograph** — deep forest canopy, mid leaf green, pale
misty sky, and the warm olive of river water. That is why the greens read as natural
rather than "brand green": they came from a real scene. Keep that discipline. Any new
colour must plausibly belong to that same photograph.

**Character:** quiet, precise, confident. Not playful, not brutalist, not corporate-blue.
Boldness is spent in exactly one place per page — usually one photograph or one headline —
and everything around it stays restrained.

---

## 2. Colour

### 2.1 Tokens — copy this block verbatim

```css
:root {
  /* inks — deep shadowed canopy */
  --ink:        #10231a;   /* body text, headings */
  --ink-2:      #43584c;   /* secondary text, descriptions */
  --ink-3:      #7d8f84;   /* captions, meta, labels */

  /* greens — canopy → leaf */
  --forest:     #1b3d2b;   /* footer background, deepest accents */
  --canopy:     #2f6b47;   /* PRIMARY — buttons, links, active state */
  --canopy-hi:  #3a8257;   /* hover / gradient partner */
  --leaf:       #5aa76b;   /* mid accent — icons, focus borders */
  --sprout:     #8fc99b;   /* light accent — pips, on-dark text */
  --mist-green: #dcebe0;   /* tint fill — chips, toggle track */
  --wash-green: #f0f7f2;   /* section wash */

  /* river — the warm olive, the ONLY secondary hue */
  --river:      #a8a271;
  --river-deep: #8a7f3f;
  --river-soft: #c9c4a0;
  --river-wash: #f5f2e6;   /* warm panel background */

  /* sky / paper */
  --sky:        #dfe6e4;
  --paper:      #fbfcfb;   /* card surface */
  --canvas:     #f4f8f5;   /* page background base */
}
```

### 2.2 Page background — always, on every page

Never flat white. The body carries three soft radial washes:

```css
body {
  background: var(--canvas);
  background-image:
    radial-gradient(58% 44% at 12% 0%,   rgba(143, 201, 155, .30), transparent 68%),
    radial-gradient(52% 40% at 92% 6%,   rgba(168, 162, 113, .20), transparent 70%),
    radial-gradient(46% 38% at 50% 100%, rgba(90, 167, 107, .16),  transparent 72%);
  background-attachment: fixed;
}
```

### 2.3 Semantic use

| Need | Use |
|---|---|
| Primary action, links, active nav | `--canopy` |
| Gradient fills (buttons, seals, icons) | `linear-gradient(135deg, var(--canopy), var(--canopy-hi))` |
| Card / panel surface | `--paper` |
| Section that must feel different | `--wash-green` (cool) or `--river-wash` (warm) |
| Footer | `--forest` background, `rgba(255,255,255,.72)` text, `--sprout` headings |
| Hairline border | `--line` = `1px solid rgba(16,35,26,0.08)` |
| Stronger border | `--line-2` = `1px solid rgba(16,35,26,0.14)` |

### 2.4 Contrast rules — non-negotiable

- **White text is safe on:** `--forest`, `--canopy`, `--canopy-hi`, `--river-deep`.
- **White text FAILS on:** `--river`, `--river-soft`, `--sprout`, `--leaf`, and every
  `*-wash` / `*-mist` token. These are light. Put `--ink` on them.
- **The one allowed raw hex:** if you ever add a fill that stays light in every context,
  define `--ink-fixed: #10231a` and use it for text on that fill, so a future theme change
  can't flip it to white-on-light.
- Minimum 4.5:1 for body text, 3:1 for large text. `--ink-3` is for ≥12px labels only —
  never for paragraphs.

**Adding a colour is a last resort.** Six greens and four olives cover almost everything.
If you need per-category accents (e.g. six service cards), draw them from the family:

```css
.card.a { --a: #2f6b47; }  .card.d { --a: #1b3d2b; }
.card.b { --a: #8a7f3f; }  .card.e { --a: #3a8257; }
.card.c { --a: #47915a; }  .card.f { --a: #6f6430; }
```
All six are dark enough to carry white text — that is why those specific values.

---

## 3. Typography

### 3.1 Faces

```css
--font-display: "Fraunces", "Iowan Old Style", Georgia, serif;
--font-body:    "Geist", "Inter", system-ui, sans-serif;
--font-mono:    "Geist Mono", ui-monospace, "SFMono-Regular", monospace;
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,400..700,0..100,0..1&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

- **Fraunces** — every heading, and nothing else. It is a variable font; the axes are set
  deliberately (below). Do not use it for body copy.
- **Geist** — all body copy, buttons, form inputs.
- **Geist Mono** — eyebrows, section numbers, chips, form labels, data. Short strings only.

### 3.2 Fraunces variable axes — always set these

```css
.display, h1, h2, h3 { font-family: var(--font-display); font-variation-settings: "SOFT" 30, "WONK" 1; }
.display       { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04;
                 font-variation-settings: "opsz" 120, "SOFT" 30, "WONK" 1; }
h1, h2, h3     { font-weight: 600; letter-spacing: -0.018em; line-height: 1.14; }
.section-title { font-size: clamp(28px, 4.4vw, 48px); font-weight: 600;
                 letter-spacing: -0.022em; line-height: 1.08; margin: 14px 0 12px;
                 font-variation-settings: "opsz" 96, "SOFT" 30, "WONK" 1; }
```

`opsz` raises contrast at display sizes, `SOFT 30` rounds the terminals (organic — matches
the palette), `WONK 1` enables the characterful alternates. Without these Fraunces looks
like a generic serif and the whole page loses its voice.

### 3.3 Scale

| Role | Size / line-height / tracking | Face |
|---|---|---|
| Page headline | `clamp(36px, 6.4vw, 64px)` / 1.04 / −0.025em | Fraunces 700 |
| Section title | `clamp(28px, 4.4vw, 48px)` / 1.08 / −0.022em | Fraunces 600 |
| Card title | 19–22px / 1.25 / −0.015em | Fraunces 600–700 |
| Lede / intro | 18px / 1.65 | Geist 400 |
| Body | 16px / 1.65 | Geist 400 |
| Small / card copy | 14px / 1.6 | Geist 400–500 |
| Eyebrow label | 12px / 1.4 / **0.14em** / uppercase | Geist Mono 500 |
| Chip / data | 12–13px / 1.4 | Geist Mono 400–500 |

Base `body { font-size: 16px; line-height: 1.65; }`. Long prose caps at `--prose` (720px);
`.section-note` caps at `56ch`; body paragraphs at `~68ch`.

### 3.4 Eyebrow label pattern

Every section opens with one. Numbering is optional — use it only when the sections are
genuinely a sequence.

```html
<span class="label"><span class="num">01</span> <span>Section name</span></span>
```
```css
.label { font-family: var(--font-mono); font-size: 12px; font-weight: 500;
         letter-spacing: 0.14em; text-transform: uppercase; color: var(--canopy);
         display: inline-flex; align-items: center; gap: 10px; }
.label .num { color: var(--ink-3); }
.label::before { content: ""; width: 22px; height: 2px; border-radius: 2px;
                 background: linear-gradient(90deg, var(--canopy), var(--sprout)); }
```

### 3.5 Two-tone headings

One phrase per heading may carry the accent. Never more than one.

```html
<h2 class="section-title">Enterprise-grade software, <span class="tone">without the bill</span></h2>
```
```css
.tone { color: var(--canopy); }
```
For the page headline only, `.tone` may instead be a gradient clip:
```css
background: linear-gradient(100deg, var(--canopy), var(--leaf) 60%, var(--river-deep));
-webkit-background-clip: text; background-clip: text; color: transparent;
```

### 3.6 Highlighted phrases in prose

```css
strong { color: var(--forest); font-weight: 600;
         background: linear-gradient(180deg, transparent 62%, var(--sprout) 62%);
         padding: 0 2px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
```
Roughly one per paragraph. More than that and nothing is emphasised.

---

## 4. Geometry, elevation, motion

```css
--maxw:    1200px;   /* container */
--prose:    720px;   /* readable text cap */
--gutter:    24px;   /* 20px below 640px */

--r-chip:     8px;   --r-btn:  14px;
--r-card:    20px;   --r-panel: 28px;   /* pills: 999px */

--sh-sm:   0 1px 2px rgba(16,35,26,.04), 0 2px 8px rgba(16,35,26,.04);
--sh-md:   0 4px 12px rgba(16,35,26,.05), 0 12px 32px rgba(16,35,26,.06);
--sh-lg:   0 8px 24px rgba(16,35,26,.06), 0 28px 64px rgba(16,35,26,.08);
--sh-glow: 0 12px 32px rgba(47,107,71,.22);   /* green buttons only */

--ease:    cubic-bezier(.22, 1, .36, 1);
--micro:   160ms ease-out;    /* hovers, small state */
--panel-t: 320ms var(--ease); /* panels, menus, accordions */
```

- **Spacing scale — multiples of 4 only:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 ·
  80 · 96 · 120 · 160. Never `13px`, never `1.35rem`.
- **Section rhythm:** `section { padding: 120px 0; }` → 92px ≤980 → 72px ≤640.
  `.section-head { margin-bottom: 56px; max-width: var(--prose); }`
- **Shadows only.** Never `box-shadow: 6px 6px 0` (hard offset), never borders heavier
  than 1px except a deliberate 2–3px accent edge.
- **Hover = lift.** `transform: translateY(-2px…-4px)` and one shadow step up. Never
  scale text, never change layout size on hover.
- Scroll reveal: `opacity 600ms ease, transform 600ms var(--ease)`, from `translateY(20px)`.

---

## 5. Multi-page structure

This is the part that differs from the single-page reference. Follow it.

### 5.1 Files

```
/index.html
/about.html  /services.html  /…            ← one file per page, flat
/css/styles.css                            ← ONE stylesheet, all pages
/js/script.js                              ← shared behaviour
/js/i18n.js                                ← dictionary (if bilingual, §8)
/assets/images/…
/favicon.svg  /robots.txt  /sitemap.xml
```

### 5.2 Every page uses the identical `<head>`

Only `<title>`, `<meta name="description">`, `<link rel="canonical">` and the JSON-LD
change per page. Everything else — font links, stylesheet, favicons, theme-color — is
byte-identical.

### 5.3 Nav and footer are copied into every page verbatim

No build step means no partials, so the markup is duplicated. **Because it is duplicated,
it must be changed in every file at once.** When editing nav or footer, `grep` for it
across all pages and update them together — a nav that differs between pages is a defect.

### 5.4 Active page state

Mark the current page with `aria-current="page"` on its nav link:

```html
<li><a href="services.html" aria-current="page">Services</a></li>
```
```css
.nav-menu a[aria-current="page"] { color: var(--canopy); background: var(--mist-green); }
```
`aria-current` is the accessible signal *and* the styling hook — do not add a separate
`.active` class.

### 5.5 Links

Root-relative (`/services.html`) if the site is served from a domain root; plain relative
(`services.html`) if it may sit in a subfolder. Pick one and be consistent. Same-page
anchors stay `#id`.

### 5.6 Per-page SEO

Each page needs its own `<title>`, description, canonical, and OG tags. Add every page to
`sitemap.xml`. One `<h1>` per page, and heading levels must not skip.

---

## 6. Responsive — exact breakpoints

Use these. Do not invent new ones without a reason you can state.

| Width | What changes |
|---|---|
| **≤1200** | 5-across grids → 3 |
| **≤1080** | nav link padding/size tightens |
| **≤980** | sections 92px; 4-across → 2; split hero goes 1.18fr/0.82fr; contact 1-col |
| **≤960** | **hamburger appears**, nav becomes slide-in panel |
| **≤860** | 3-across → 1; label+content rows stack; timeline connectors hidden |
| **≤780** | nav pill padding tightens |
| **≤700** | split layouts stack |
| **≤640** | gutter 20px; sections 72px; all grids 1-col; buttons full-width; FAB shrinks |
| **≤420** | nav minimal; long strings get `overflow-wrap: anywhere` |

**Rules:**
- Mobile-first in intent, `max-width` queries in practice (matching the reference).
- **Every grid track is `minmax(0, 1fr)`.** See §11.1.
- **Every card grid gets `align-items: start`.** See §11.2.
- Test 320 / 390 / 768 / 1024 / 1440. Nothing may scroll horizontally at any width.

---

## 7. Components — build these, don't improvise

### 7.1 Nav — floating pill, fixed

```html
<nav class="nav" id="nav"><div class="container"><div class="nav-inner">
  <a href="/" class="wordmark"><span class="seal" aria-hidden="true">XY</span> Name</a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Menu"
          aria-expanded="false" aria-controls="nav-menu"><span></span><span></span><span></span></button>
  <ul class="nav-menu" id="nav-menu">…</ul>
</div></div></nav>
<div class="nav-backdrop" id="nav-backdrop" onclick="closeMenu()" aria-hidden="true"></div>
```

- Fixed, `top: 14px`, `z-index: 80`, rounded `999px`.
- Background `rgba(251,252,251,.72)` + `backdrop-filter: blur(16px) saturate(140%)`.
- On scroll past 12px add `.scrolled` → opacity to `.9`, shadow to `--sh-md`.
- `.seal`: 30px circle, gradient `--canopy → --leaf`, white 11px mono initials.
- Mobile (≤960): slide-in panel from right, `min(82vw, 320px)`, backdrop blur, links
  staggered 50ms apart, `body { overflow: hidden }` while open, Escape closes.

### 7.2 Buttons

```css
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 9px;
       font-family: var(--font-body); font-size: 15px; font-weight: 600;
       padding: 14px 26px; border-radius: var(--r-btn); border: 1px solid transparent;
       transition: transform var(--micro), box-shadow var(--micro), background var(--micro); }
.btn.primary { background: linear-gradient(135deg, var(--canopy), var(--canopy-hi));
               color: #fff; box-shadow: var(--sh-glow); }
.btn.primary:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(47,107,71,.3); }
.btn.ghost { background: var(--paper); color: var(--ink);
             border-color: rgba(16,35,26,.12); box-shadow: var(--sh-sm); }
.btn.ghost:hover { transform: translateY(-2px); border-color: var(--leaf);
                   color: var(--canopy); box-shadow: var(--sh-md); }
```
Two variants only. One primary per screenful.

### 7.3 Card

`--paper` · `--line` · `--r-card` · `--sh-sm` · 26px padding.
Hover: `translateY(-4px)` + `--sh-md`. Grid gap 20px.

### 7.4 Panel

A large rounded container holding a card grid:
`rgba(251,252,251,.66)` + `blur(10px)` · `--line` · `--r-panel` · 44px padding
(32px ≤980, 22px ≤640).

### 7.5 Full-bleed media band

Breaks the rhythm **once per page, maximum**. Escapes the container, `clamp(320px, 46vw, 480px)`
tall, left-to-right dark gradient scrim, white copy over it. On ≤860 the scrim becomes
top-to-bottom and copy sits bottom-aligned.

### 7.6 Accordion (`<details>`)

Native `<details>` snaps open. Animate it, and make the group exclusive:

- Wrap the body: `<div class="body-wrap"><div class="body">…</div></div>`
- `.body-wrap { overflow: hidden; transition: height var(--panel-t); }`
- Opening one closes its siblings; animate `height` 0 ↔ measured, then set `auto`.
- **Content stays in the DOM** — never fetch on open. Google must index it.

### 7.7 Numbered process row

46px circle, `--paper`, `1.5px solid var(--leaf)`, mono numeral, `--canopy`.
Dashed connector between nodes via `::before`, hidden once the row wraps (§11.3).

### 7.8 Forms

- Real `<label for>` on every field — never placeholder-as-label.
- Input: `--canvas` bg, `1px solid rgba(16,35,26,.12)`, `--r-btn`, 13px 15px padding.
- Focus: `border-color: var(--leaf)` + `box-shadow: 0 0 0 4px rgba(90,167,107,.16)`.
- 2-col `field-grid`, 1-col ≤640. Long fields span with `.full`.
- Honeypot: `<input type="checkbox" name="botcheck" tabindex="-1" style="display:none" aria-hidden="true">`
- Inline status region with `role="status" aria-live="polite"`.
- **Never put email credentials in the client.** Use a form relay with a public key
  (Web3Forms/Formspree) or a serverless function. Always fall back to a pre-filled
  `mailto:` so a submission is never silently lost.

### 7.9 Footer

`--forest` background, 72px top padding, multi-column grid
(`1.4fr repeat(2, 1fr)` → 2-col ≤980 with brand spanning → 2-col ≤640, brand spanning).
Column headings: mono, 11px, `0.14em`, `--sprout`.
If floating buttons exist, add `padding-bottom: 96px` on mobile so the last line clears them.

### 7.10 Floating contact (optional)

Fixed bottom-right pills, `z-index: 75`. Show the actual address/number as text, not a bare
icon — shorten to a label under 640px where the full string would cover content.

---

## 8. Bilingual (only if the project needs it)

One page, a JS dictionary, no duplicate HTML.

- `js/i18n.js` exports `window.I18N = { "key": { en: "…", bn: "…" } }`.
- Every translatable node carries `data-i18n="key"`; attributes use
  `data-i18n-attr="placeholder|alt|aria-label"`.
- Toggle sets `document.documentElement.lang` and rewrites `innerHTML` from the dictionary;
  choice persists in `localStorage`.
- **Bengali needs its own faces** (Latin fonts have no Bengali glyphs):
  `Tiro Bangla` display + `Hind Siliguri` body, loaded **only when Bangla is selected**.
- **Bengali overrides:** `line-height: 1.85`, `font-size: 17px`, `letter-spacing: 0` on
  headings, and see §11.5 for the tracking trap.
- `translate="no"` + `<meta name="google" content="notranslate">` so the browser doesn't
  machine-translate over hand-written copy.
- **Write the second language, don't translate it.** Restructure sentences to that
  language's word order. Keep product/protocol names in Latin script. If a phrase can't
  carry across, rewrite the English too so both read well.

---

## 9. Quality floor — ships with page one

- Responsive 320 → 2560, no horizontal scroll at any width.
- Visible focus: `:focus-visible { outline: 2.5px solid var(--canopy); outline-offset: 3px; }`
- Semantic landmarks; one `<h1>`; heading levels never skip.
- `aria-expanded` on every toggle; `aria-current="page"` on the active nav link.
- All interactive targets ≥44×44px on touch.
- `@media (prefers-reduced-motion: reduce)` kills animation and reveal transforms.
- Images: explicit `width`/`height`, `loading="lazy"` below the fold, real `alt`.
- Per-page `<title>`, description, canonical, OG; JSON-LD where it applies.
- **Cache-busting at deploy:** stamp a version onto asset URLs
  (`styles.css?v=<sha>`) or returning visitors keep seeing the old site. See §11.6.

---

## 10. Copy voice

Plain, specific, confident. Active voice. Say what a thing does, don't sell it.
Name things as the reader would. Errors explain what happened and how to fix it — they
don't apologise. Empty states invite an action. Sentence case everywhere except the mono
eyebrow labels. No filler ("seamlessly", "cutting-edge", "leverage"). Never claim a
capability, credential, review or rating that isn't real.

---

## 11. Known traps — these already caused bugs once

**11.1 `1fr` blows grids out.** A bare `1fr` has an automatic minimum of the content's
size, so long words/URLs force the track wider than the viewport.
→ **Always `minmax(0, 1fr)`.**

**11.2 Grid children stretch to the tallest sibling.** A collapsed accordion card next to
an expanded one grows to match, leaving dead space.
→ **`align-items: start` on every card grid.**

**11.3 `auto-fit` stretches a lone item.** With `repeat(auto-fit, minmax(240px, 1fr))`,
a leftover last item fills the whole row.
→ Use explicit column counts per breakpoint for fixed-length sequences.

**11.4 Light fills + white text.** Any `--river*`, `--sprout`, `--leaf`, `*-wash`,
`*-mist` fill needs dark text. Fix it at the token level (§2.4), not case by case.

**11.5 `letter-spacing` breaks Bengali.** It pulls glyph clusters apart —
`যোগাযোগ` renders as `যো গা যো গ`.
→ Reset tracking for **all** tracked/uppercased labels in one `[lang="bn"]` rule, so a
label added later can't silently break. Drop `text-transform: uppercase` there too:
Bengali has no case, so it does nothing but carry risk.

**11.6 Unversioned assets cache forever.** A normal tab shows the old site while incognito
shows the new one — that's cache, not a failed deploy.
→ Stamp a build/commit version onto asset URLs at deploy time.

**11.7 `mailto:` fails silently.** On a desktop with no mail client it does nothing.
→ Always pair a mail link with visible text and a copy-to-clipboard fallback.

**11.8 Don't transliterate technical terms.** Job titles and product names must stay in
Latin script. Transliterating "Full-Stack" to Bengali produced `ফুল-স্ট্যাক` — and
`ফুল` reads as *flower*.

---

## 12. Definition of done, per page

- [ ] Uses only §2–§4 tokens; zero raw hex, zero inline styles (honeypot excepted)
- [ ] Nav/footer byte-identical to the other pages; `aria-current="page"` set
- [ ] Own `<title>`, description, canonical, OG; added to `sitemap.xml`
- [ ] One `<h1>`; heading levels don't skip
- [ ] Every grid `minmax(0, 1fr)` + `align-items: start`
- [ ] Checked at 320 / 390 / 768 / 1024 / 1440 — no horizontal scroll
- [ ] Keyboard reachable, focus visible, reduced-motion respected
- [ ] Contrast checked against §2.4
- [ ] No secrets in client code
