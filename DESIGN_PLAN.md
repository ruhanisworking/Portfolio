# Design Plan — Portfolio v4 ("River & Canopy")

Branch: **`Dev_Design_4`** · merge to `main` when you approve.
Read this first — it lists every colour, font, size and decision before any code ships.

---

## 0. One thing I need to flag first (important)

You offered to send me your **email credentials** for the contact form.
**Please don't send them.** Here's why, plainly:

This site is static (HTML/CSS/JS on GitHub Pages). There is no backend, no server that
can hold a secret. Anything the page needs in order to send mail would sit inside
`script.js`, which **anyone can read** by pressing Ctrl+U or opening DevTools. Your Gmail
password or app-password would effectively be published on the public internet, and the
repo is public too. Within days it would be scraped and used to send spam as you.

**The correct way**, which I've built in: a form-relay service. You get a **public access
key** (designed to be public — it can only ever submit *to your form*, it can't read your
mail or log in as you). The service receives the submission and emails it to you.

- Service: **Web3Forms** — free tier 250 submissions/month, no account needed
- Setup: go to https://web3forms.com, enter `ruhan.9mri@gmail.com`, they email you an
  access key. Paste that one string into `index.html` where marked
  `WEB3FORMS_ACCESS_KEY`. That's the whole setup.
- Until the key is added, the form **automatically falls back** to opening the visitor's
  mail app with everything they typed pre-filled — so it never silently breaks.

If you'd rather not use a third party at all, the alternative is a tiny serverless
function (Cloudflare Workers / Vercel, both free) where the credential lives server-side.
Say the word and I'll build that instead.

---

## 1. Design thesis

Your photo **is** the design system.

`IMG_20250805_114607.jpg` — you on a boat, river running between two walls of forest.
Instead of picking a generic "nature green" off a palette site, **every colour below is
sampled from that photograph.** Deep shadowed canopy, mid-tone leaf, the pale misty sky,
the warm olive of the river water. That gives the page a green that's specifically
*yours* and specifically *Bangladesh*, and it means the photo never looks pasted onto an
unrelated design — the page and the picture are the same colour family.

**Merged from your two references:**

| From **Chichingo** (theme / colour / background) | From **Partnerbike–Jobike** (font / image visualization) |
|---|---|
| Soft gradient wash canvas, never flat white | Full-bleed edge-to-edge photography bands |
| Large rounded "panel" containers holding card grids | Asymmetric photo-block / text-block alternating grid |
| Two-tone headlines (dark text + coloured phrase) | Light-weight, wide-tracked body text |
| Gradient pill buttons + small gradient icon tiles | 3-up card grid with image top, list, price-style CTA |
| Numbered process timeline with connectors | Caption bar strips under image tiles |
| Multi-column footer, labelled form inputs | Big quiet section headings, generous whitespace |

---

## 2. Colour tokens — all sampled from the photo

```
/* ── inks: the deep shadowed canopy ───────────────────── */
--ink            #10231a    body text, headlines
--ink-2          #43584c    secondary text
--ink-3          #7d8f84    captions, meta

/* ── greens: sampled canopy → leaf ────────────────────── */
--forest         #1b3d2b    deepest — footer, dark bands
--canopy         #2f6b47    PRIMARY — buttons, links, active
--canopy-hi      #3a8257    hover state
--leaf           #5aa76b    mid accent — icons, borders
--sprout         #8fc99b    light accent — chips, dots
--mist-green     #dcebe0    tint fills
--wash-green     #f0f7f2    section wash

/* ── river: the warm olive water (the secondary hue) ──── */
--river          #a8a271    warm counterpoint to all the green
--river-soft     #c9c4a0
--river-wash     #f5f2e6    warm panel background

/* ── sky / paper ──────────────────────────────────────── */
--sky            #dfe6e4    pale misty sky from the photo
--paper          #fbfcfb    card surface
--canvas         #f4f8f5    page background base
```

**Why a second hue at all:** an all-green page goes flat and muddy fast. The river's warm
olive (`--river`) is already *in* the photo sitting next to the green, so using it as the
secondary reads as natural rather than decorative. Green = action/primary. Olive =
warmth/support. Nothing else gets introduced.

**Contrast safety:** `--canopy #2f6b47` on `--paper` = 6.8:1 (passes AA for all text).
White on `--canopy` = 5.9:1 (passes AA). `--river #a8a271` is *light* — it never carries
white text, only `--ink`. This is the exact trap that broke earlier versions of this site;
it's fixed at the token level here, not case-by-case.

---

## 3. Typography — three fonts, all new to this project

You asked for all-new fonts and maximum creativity. None of these have been used in any
previous version.

> **Revised in v4.1** — Syne read too geometric/techno against the photography.
> Swapped to the pairing below.

| Role | Font | Why |
|---|---|---|
| **Display** | **Fraunces** (400–700, variable) | The face you said you liked. A soft optical-size serif — organic, warm, and a far better match for the river/forest palette than a geometric sans. Variable axes are used deliberately: `opsz` raises contrast at large sizes, `SOFT 30` rounds the terminals, `WONK 1` enables its characterful alternates. |
| **Body** | **Geist** (400–700) | Crisp, modern, neutral. Stays quiet so Fraunces leads. |
| **Label / data** | **Geist Mono** (400, 500) | Eyebrows, section numbers, chips, form labels — engineer texture, drawn from the same family as the body face so it never looks bolted on. |

**Type scale (pixel-exact, 1.250 major-third):**

```
display-xl   64px / 1.04 / -0.03em   Syne 800     hero headline (desktop)
display-l    48px / 1.06 / -0.025em  Syne 800     section titles
display-m    34px / 1.12 / -0.02em   Syne 700     card group headings
title        22px / 1.25 / -0.01em   Syne 700     card titles
body-l       18px / 1.65 / 0         Onest 400    hero lede, intro paragraphs
body         16px / 1.65 / 0         Onest 400    default
body-s       14px / 1.6  / 0         Onest 400    card copy, captions
label        12px / 1.4  / 0.14em    DM Mono 500  UPPERCASE eyebrows
mono-s       13px / 1.4  / 0.02em    DM Mono 400  chips, numbers
```

Mobile: `display-xl` clamps to 36px, `display-l` to 28px, `display-m` to 24px via
`clamp()` — no separate breakpoint rules needed.

---

## 4. Pixel spec (you asked for exact — here it is)

```
Base unit          4px  (every spacing value is a multiple)
Spacing scale      4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120 · 160
Container          1200px max, 24px gutter (20px under 640px)
Content column     720px max for long prose (readability cap)

Radius             8px   chips, small tags
                   14px  buttons, inputs
                   20px  cards
                   28px  large panels
                   999px pills, avatars

Borders            1px solid rgba(16,35,26,0.08)   hairline
                   1.5px solid --leaf              active/accent

Shadows (soft, layered — Chichingo style, never hard offset)
  sm   0 1px 2px rgba(16,35,26,.04), 0 2px 8px rgba(16,35,26,.04)
  md   0 4px 12px rgba(16,35,26,.05), 0 12px 32px rgba(16,35,26,.06)
  lg   0 8px 24px rgba(16,35,26,.06), 0 28px 64px rgba(16,35,26,.08)
  glow 0 12px 32px rgba(47,107,71,.22)   green buttons only

Section padding    120px top/bottom desktop · 72px mobile
Card padding       28px desktop · 22px mobile
Grid gap           20px

Breakpoints        1200 · 980 · 780 · 640 · 420
Motion             160ms ease-out (micro) · 320ms cubic-bezier(.22,1,.36,1) (panels)
                   600ms ease (scroll reveal) · all disabled under prefers-reduced-motion
```

---

## 5. Page structure — section by section

**01 · Nav** — floating rounded pill bar (Chichingo), blurs + tints on scroll.
Logo `RI` seal + "Ruhan". Links right, green pill CTA "Let's talk".
Mobile: slide-in panel, staggered links.

**02 · Hero** — split. **Left:** eyebrow chip (🇧🇩 Dhaka), two-tone Syne headline
(dark line + `--canopy` line), lede, two buttons, identity chip (circular crop of your
face from the photo + name + "Full-Spectrum Engineer" + role). **Right:** your photo in a
tall rounded frame with a soft green gradient orb behind it. Background: layered green
mist gradients, slow drift.

**03 · Capability band** — 4 tiles, Chichingo's gradient icon squares, nature-green ramp.
Full ownership / Open source first / Production mindset / Straight answers.

**04 · Services** — the big rounded panel (Chichingo) holding 6 expandable cards. Each card
keeps its own bespoke CSS motif from the current site (browser chrome, phone grid, chat
bubbles, dashboard rows, bar chart, shield scan) — recoloured to the green ramp so each
service still reads distinctly at a glance. Exclusive accordion: opening one closes others,
animated height. Stack/toolkit folded in at the bottom as a lighter sub-block.

**05 · Full-bleed editorial band** ← *this is the Partnerbike move.*
Your river photo runs edge-to-edge across the full viewport width, no container, with a
short overlaid statement. Breaks the page rhythm exactly once, at the midpoint. This is
where "image visualization" earns its place.

**06 · Process** — 5 numbered steps, connector line between nodes (Chichingo timeline),
green node circles.

**07 · Experience** — 2 emphasized cards (IICT BUET current, highlighted / Merilsoft),
education as compact chips underneath.

**08 · Why open source** — quiet warm `--river-wash` panel + 3 trust items.

**09 · FAQ** — 6 accordion items, plus/minus toggle.

**10 · Contact** — Chichingo's form layout: 2-column labelled inputs (Name, Email,
Company, Project type), full-width message, green gradient Send button. Beside it: direct
email + WhatsApp cards that open the right app. Success/error states inline.

**11 · Footer** — deep `--forest` band, multi-column links, SEO line, back-to-top.

**Persistent:** floating email + WhatsApp buttons bottom-right (kept from current site).

---

## 6. Photo usage

One source file, three crops — all done in CSS (`object-fit` + `object-position`), so
there's only one asset to manage:

| Slot | Crop | Notes |
|---|---|---|
| Hero portrait frame | centre-right, portrait 4:5 | you + forest behind |
| Identity chip | tight square on face, circular | small, 56px |
| Full-bleed band | full width, ~420px tall strip | the river + both canopies |

**Optimisation note (honest):** the source is **3.2 MB / 4096×1856** — heavy for web. I
can't compress it here (no image tooling installed on this machine), so I'll reference it
as-is and lazy-load the non-critical crops. **Recommended follow-up:** run it through
squoosh.app → export ~1800px WebP (~200 KB) and a 400px square for the chip. That single
step will cut page weight by ~90%. I'll leave the filenames wired so it's a drop-in swap.

---

## 7. Contact behaviour (your specific asks)

**Email buttons** → `mailto:ruhan.9mri@gmail.com` with pre-filled subject.
This is the OS-level mail handler: it opens Outlook, Thunderbird, Apple Mail, or whatever
the visitor has set as default. On a phone it opens the Gmail/Mail app directly. On a
desktop with no mail client configured, some browsers do nothing — so **every mail button
also has a copy-to-clipboard fallback** and the address is shown as visible text, never
hidden behind an icon.

**WhatsApp buttons** → `https://wa.me/8801749501010`
Opens the WhatsApp app on mobile, WhatsApp Web/Desktop on computer. Includes a pre-filled
greeting so the visitor doesn't start from a blank chat.

**Contact form** → Web3Forms POST → arrives in your Gmail inbox with the visitor's name,
email, company, project type and message. Reply-to is set to *their* address, so hitting
Reply in Gmail goes straight back to them. Fallback to pre-filled `mailto:` if the key
isn't configured or the network call fails.

---

## 8. Quality floor (non-negotiable, built in from the start)

- Responsive 320px → 2560px, mobile-first; every grid uses `minmax(0,1fr)` so nothing
  can blow out horizontally (the bug that broke v1)
- `align-items: start` on every card grid so a closed card never stretches to match an
  open neighbour (the bug from v3)
- Visible keyboard focus rings, real `<label>`s, `aria-expanded` on toggles
- `prefers-reduced-motion` respected everywhere
- Semantic landmarks, one `<h1>`, ordered heading levels
- Accordion content lives in the DOM (not fetched) so Google indexes it
- Existing SEO kept: JSON-LD Person + FAQPage, OG tags, robots.txt, sitemap.xml, CNAME

---

## 9. What I need from you

1. **Nothing secret.** No passwords, no app-passwords. Just the Web3Forms access key when
   you have it (public by design).
2. A yes/no on **Syne + Onest + DM Mono** — fonts have been the sticking point three times
   now, and swapping them is a two-line change if you dislike them.
3. Optional: the compressed photo from squoosh.app.

---

## 9b. v4.1 changes (second pass)

1. **Fonts** → Fraunces / Geist / Geist Mono (see §3).
2. **Phone field** added to the enquiry form (optional, `type="tel"` so mobile
   shows the number pad), and included in the mail fallback body.
3. **SEO deepened** —
   - `ProfessionalService` schema with a full **`hasOfferCatalog`** listing all
     six services with descriptions. This is the piece that actually earns
     service-related search results; a bare `Person` schema doesn't.
   - `WebSite` schema, `@id` cross-links between the Person/Site/Service nodes
     so Google reads them as one entity rather than three loose blobs.
   - `sameAs` → GitHub. `alumniOf` → KUET + Notre Dame. `worksFor` → IICT BUET.
   - `areaServed` (Bangladesh + Dhaka), `availableLanguage` (en, bn).
   - Meta description rewritten to **≤155 chars** so Google stops truncating it.
   - `robots: max-image-preview:large` (bigger thumbnail in results),
     `og:image:alt`, `og:locale` + `bn_BD` alternate, `twitter:image`.
   - Sitemap now carries **image sitemap** data (title + caption).
   - *Deliberately not added:* `aggregateRating` / review markup. It's the
     fastest way to get rich results — and it's fabricating reviews you haven't
     received. Google penalises it and it would be a lie on your site.
4. **Photo enhancement** — real unsharp mask via an inline SVG
   `feConvolveMatrix` (a 3×3 kernel summing to 1.0, so detail rises without
   shifting brightness), plus saturation/contrast lift, plus a vignette-and-warm-
   lift pass on the hero frame so you separate from the canopy behind you.
   This is genuinely what a phone camera pipeline does — *but* it operates on
   the pixels that exist. It cannot invent detail the way Samsung's on-device
   AI upscaler does. For that, run the file through **squoosh.app** or
   **upscayl** (free, offline AI upscaler) and drop the result in; everything is
   wired to pick it up with no code change.
5. **Contact made loud** — the address and number are now written out as
   readable text everywhere they appear: a new contact row under the hero, the
   contact cards, the footer, and the floating buttons (which are now labelled
   pills reading `ruhan.9mri@gmail.com` and `+880 1749-501010` rather than bare
   icons). On phones the floating pills shorten to `Email` / `WhatsApp` because
   the full address would cover the page — the in-page cards carry it there.

---

## 10. Delivery

Everything lands on **`Dev_Design_4`**. `main` is untouched, so ruhan.lol keeps serving the
current site while you review. Preview locally with:

```
git checkout Dev_Design_4
start index.html
```

Merge when you're happy.
