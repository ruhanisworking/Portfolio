# Using design/awesome-design-md

`design/awesome-design-md/` is a local clone of
[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
(MIT). It is git-ignored; refresh it with
`git -C design/awesome-design-md pull`.

Each `design-md/<brand>/DESIGN.md` has the same shape as ours: YAML tokens
(`colors`, `typography`, `rounded`, `spacing`, `components`) then prose
sections (Overview, Colors, Typography, Layout, Elevation, Components,
Do's and Don'ts, Responsive Behavior). Some folders only hold a README that
points to getdesign.md — skip those.

## When the user says "make X like <brand>"

1. Open `design-md/<brand>/DESIGN.md`. Read **Layout**, **Components** and
   **Do's and Don'ts** — that's where the patterns are.
2. Write down the *pattern* in one or two lines: e.g. "Linear: hero is a
   single centred column, 64px display, product screenshot below with a soft
   glow; sections alternate full-bleed dark panels."
3. Map every value to Ember: their primary → our `brand` gradient, their ink
   → `ink`, their radius scale → our `radius`, their display font → Cinzel.
   If the pattern needs a value we don't have (e.g. a bento grid gap), add it
   to `DESIGN.md` first.
4. Build it as an Ember component (see component-recipe.md).

## Good sources for this site

| Want | Look at |
|---|---|
| warm editorial, serif headlines | `claude`, `notion`, `theverge` |
| bold dark bands, glow | `linear.app`, `vercel`, `raycast`, `cursor` |
| island/pill navigation, motion | `apple`, `framer`, `superhuman` |
| card grids, bento | `apple`, `stripe`, `supabase`, `resend` |
| personal / portfolio feel | `cal`, `mintlify`, `posthog` |

Find one quickly: `ls design/awesome-design-md/design-md`.

## Never

- Copy a brand's colours, logo, fonts or wording.
- Mix two brands' palettes into ours.
- Skip the translation step and paste their CSS values.
