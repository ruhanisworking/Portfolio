# Component recipe

Example: a `stat` component (big number + label).

## 1. Tokens — `DESIGN.md`

```yaml
components:
  stat:
    number: "{colors.text}"
    number-accent: "{gradients.text}"
    label: "{colors.text-subtle}"
    gap: "{space.3xs}"
```

Becomes `--c-stat-number`, `--c-stat-number-accent`, `--c-stat-label`, `--c-stat-gap`.
Sizes, radii, durations — anything — go here too if no global token fits.

## 2. CSS — `src/components/stat/stat.css`

```css
/* Stat — a big number with a label under it.
   Markup: <div class="stat"><span class="stat__number">12+</span>
           <span class="stat__label">years</span></div> */
.stat { display: flex; flex-direction: column; gap: var(--c-stat-gap); }

.stat__number {
  font-family: var(--type-h1-family);
  font-size: var(--type-h1-size);
  font-weight: var(--type-h1-weight);
  color: var(--c-stat-number);
}
.stat--accent .stat__number {
  background: var(--c-stat-number-accent);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.stat__label { font-size: var(--type-meta-size); color: var(--c-stat-label); }
```

Conventions: BEM-ish (`block__element`, `block--variant`); a header comment
with the markup; one declaration per line in multi-line rules; `@media (--bp-md)`
for breakpoints; hover/active states use `--motion-*` timings.

## 3. Optional partial — `src/components/stat/stat.html`

Only when the markup is non-trivial or repeated. Values come in as props:

```html
<div class="stat" data-reveal>
  <span class="stat__number">{{props.number}}</span>
  <span class="stat__label">{{props.label}}</span>
</div>
```

Used as `<!-- @include components/stat/stat.html number="12+" label="years" -->`.
Every `{{props.x}}` must be passed or the build fails.

## 4. Optional JS — `src/components/stat/stat.js`

Runs once, wrapped in its own `(() => { … })()` by the build, so top-level
`return` is fine for "not on this page". Find elements by `data-*` attributes,
not classes. Read breakpoints as `"{{breakpoints.md}}"`. Write runtime values
to `--_private` custom properties, never colours/sizes.

## 5. Catalogue — `src/pages/components.html`

```html
<section class="section" id="…" data-component="stat">
  …every variant…
</section>
```

## 6. Verify

`npm run build && npm run check`, then screenshot desktop + mobile.
