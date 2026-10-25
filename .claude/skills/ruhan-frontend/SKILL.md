---
name: ruhan-frontend
description: >
  Use for ANY visual or frontend work on ruhan.bd: a new section or page, a new
  or changed component, colours, fonts, spacing, buttons, cards, headings, the
  island navbar, animations, favicon, or "make it look like <brand>". Trigger
  on: design, component, section, style, theme, colour, font, navbar, island,
  animation, fade, hero, card, button, DESIGN.md, awesome-design-md, catalogue.
  Read before touching src/, DESIGN.md or any CSS.
---

# ruhan.bd frontend — the Ember system

One master file decides how everything looks: **`DESIGN.md`** (YAML tokens on
top, rules below). Components never invent a value; they read CSS variables
that `tools/build.mjs` generates from that file, and `tools/check.mjs` fails
on anything hard-coded.

Stack: **vanilla HTML/CSS/JS, no framework, no dependencies** (Node only for
the build). Fonts from Google Fonts. Deployed on GitHub Pages.

## Map

```text
DESIGN.md                       MASTER — tokens + component specs + rules
src/
├── styles/tokens.css           GENERATED from DESIGN.md (never edit)
├── base/                       reset · typography (.t-*) · layout · motion
├── components/<name>/          one folder per component
│   ├── <name>.css              required — uses only var(--…) tokens
│   ├── <name>.html             optional partial, {{props.x}} placeholders
│   └── <name>.js               optional — runs in its own scope
├── partials/head.html          <head> for every page — title, description, canonical, OG, Twitter
content/
├── site.md                     site-wide facts: {{site.email}}, {{site.linkedin}}, {{site.url}} …
└── <page>.md                   per page: seo (title, description, path), keywords (primary,
                                secondary, long-tail), weightage, memorable lines → {{page.…}}
├── pages/*.html                pages; <!-- @include … --> pulls partials in
└── static/                     favicons and other files copied as-is
tools/  build.mjs · check.mjs · favicons.py · lib/design.mjs
dist/                           build output (git-ignored)
design/awesome-design-md/       84 brand DESIGN.md files to borrow patterns from
```

## Commands

| | |
|---|---|
| `npm run dev` | build + serve http://localhost:5173 + rebuild/reload on save |
| `npm run build` | one build into `dist/` |
| `npm run check` | token-compliance lint — must pass before you finish |
| `npm run brand` | redraw the "ruhan" wordmark + favicons (`tools/brand.py`) |
| `npm run avatar` | generate a fallback avatar from the photo (`tools/avatar.py`; the site uses the hand-made illustration) |
| `npm run og` | render a 1200×630 share image for every indexed page (`tools/og.py`) |

## Solution pages

`content/solutions/<slug>.md` → `src/templates/solution.html` → `dist/<seo.path>/`.
Each file sets `order`, `icon`, `look` (accent / hero / story / offers / pains —
see `src/components/look/look.css`), SEO, keywords and all copy. Loops in
templates: `<!-- @each page.offers as offer -->…<!-- @end -->`, collections
(`<!-- @each solutions as sol -->`), filters `{{x|json}}` `{{x|attr}}`.
Give every page a different look combination and its own hero scene.
Current pages and their looks: `docs/SOLUTION-PAGES-PLAN.md`.

## Workflow — every change

1. **Read `DESIGN.md`** (at least the tokens you'll touch and the Do/Don't list).
2. **Value missing? Add it to `DESIGN.md` first** — under the right group, or
   under `components.<name>` for a component-specific value. Never write the
   raw value in CSS. Prefer referencing an existing token: `"{colors.orange-500}"`.
3. **Build the component** following [the recipe](references/component-recipe.md).
4. **Add it to the catalogue** `src/pages/components.html` with a
   `data-component="<name>"` section showing every variant/state.
5. **Use it on the page** via its classes or `<!-- @include … -->`.
6. **`npm run build && npm run check`** — both must pass. `check` also runs the
   SEO rules on every indexed page that has `content/<page>.md`: title ≤ 60,
   description 120–160, one H1, primary keyword in title / H1 / description /
   first 100 words, 0.3–2.5% density, every secondary keyword present, ≥ 2 H2s
   with a secondary keyword, alt on every image, valid JSON-LD, no vague links.
7. **Look at it.** Screenshot desktop (1366 wide) and mobile (500 wide) and
   check: island not clipped, no horizontal scroll, text on orange is ink,
   reveal content becomes visible. Headless Edge/Chrome must load a *non-dev*
   build — the dev server's live-reload stream never finishes loading.

## Content & SEO

- Audience: **US + Australian small businesses**, US English. Not Bangladesh.
  Bangla is off for now (the toggle component stays in the catalogue only).
- Write copy for the keyword list in `content/<page>.md`; the memorable
  `lines` there are the headlines. Contact is always shown with icons —
  email written out in full (`{{site.email}}`), WhatsApp, LinkedIn.
- Never invent numbers or client names. Public-sector work is described, not named.

## Rules that are easy to break

- **Text on any orange fill is ink (`--color-on-orange`), never white.**
- **Several orange shades together** — gradients `brand`/`soft`/`text`, the four
  `icon-tile` variants, chip hover. Never one flat orange everywhere.
- **Orange as text on light backgrounds is `--color-text-accent` (orange-700)
  or darker** — lighter oranges fail contrast.
- **Cinzel headings are typed in normal case.** Never `text-transform: uppercase`
  them; lowercase already renders as small capitals.
- **Bangla:** no letter-spacing, no uppercase; DESIGN.md `type-bn` already
  overrides tracking/leading under `:root[lang="bn"]`.
- **Motion:** content enters with `data-reveal` / `data-reveal-stagger`
  (fade-up). `--motion-spring` only for the island and small pops. Reduced
  motion is handled once in `src/base/motion.css` — don't re-handle it.
- **Breakpoints** in CSS are `@media (--bp-md)` (min-width) or
  `(--bp-max-md)`; in JS use `{{breakpoints.md}}`.
- `--_name` variables are component-private, set at runtime by that
  component's JS (e.g. `--_progress`). Everything else must exist in DESIGN.md.
- No inline `style=""`, no `<style>` blocks in pages or partials.

## Borrowing from other brands

`design/awesome-design-md/design-md/<brand>/DESIGN.md` describe 84 real
sites. Use them for **patterns** — layout, rhythm, how a pricing table or a
bento grid is built, interaction ideas — then translate into Ember tokens.
Never import their colours or fonts. See
[design-references.md](references/design-references.md).

## The island

`src/components/island/` — the Dynamic-Island navbar. States via
`data-state` (`open` | `compact`) set by `island.js`; the morph is grid-track
animation (`0fr ↔ 1fr`), no measuring. Links are `[data-island-link]` and
must point at section ids on the page; the compact pill shows the link text
of the section crossing the middle of the screen. Keep it centred with
`left: 0; right: 0; margin-inline: auto` — `left: 50%` caps its width at half
the screen and clips the links.
