---
name: ruhan-frontend
description: "How Ruhan's sites look and are built: the Ember design system (DESIGN.md), components, build and check. Load before ANY change to the Commander pages or the ruhan.bd site: layout, colour, font, component, page, icon."
version: 1.0.0
author: Ruhan + Claude
platforms: [linux]
metadata:
  hermes:
    tags: [Frontend, Design, CSS, HTML]
    related_skills: [ruhan-commander]
---

# Ruhan's frontend: the Ember system

The full, binding guide lives in the repo, and it is always current after a
`git pull`. **Read these files before editing:**

1. `/opt/data/work/Portfolio/.claude/skills/ruhan-frontend/SKILL.md` covers the
   workflow and the rules that are easy to break.
2. `/opt/data/work/Portfolio/.claude/skills/ruhan-frontend/references/` holds
   the component recipe and design references.
3. `/opt/data/work/Portfolio/DESIGN.md` is the master file for every colour,
   font, size, radius, shadow, motion and component token.

## The rules, short

- **DESIGN.md is the only source of values.** If a value is missing, add a
  token there first. Then use it in CSS as `var(--…)`. `node tools/check.mjs`
  fails on any raw hex, rgb(), px font-size, radius, shadow, duration or
  z-index.
- One folder per component: `src/components/<name>/<name>.css` (+ optional
  `.html` partial and `.js`). Every component has a `components.<name>` entry
  in DESIGN.md and a `data-component="<name>"` section in
  `src/pages/components.html`.
- Vanilla HTML/CSS/JS, no framework, no dependencies. No inline `style=""`,
  no `<style>` blocks.
- Look: warm paper canvas, deep warm black ink, **several orange shades
  together** (gradients orange-600 → orange-500 → amber-500). **Text on orange
  is ink, never white.** Orange text on light backgrounds is orange-700 or
  darker.
- Type: Cinzel headings, **typed in normal case, never uppercased**. DM Sans
  body, Playfair italic quotes.
- Motion: calm fade-up (`data-reveal`). Spring only for small pops.
- Breakpoints in CSS: `@media (--bp-md)` / `(--bp-lg)`.
- Any text from outside (mail, web) goes into the page with `textContent`,
  never `innerHTML`.

## Build and check

```bash
cd /opt/data/work/Portfolio
node tools/build.mjs     # → dist/ (ruhan.bd) and dist-commander/ (ruhan.lol)
node tools/check.mjs     # must print "check passed"
```

The ruhan.bd site deploys from GitHub on push to `main`. Do not push unless
Ruhan asks. The Commander deploys by rsync (see the `ruhan-commander` skill).
