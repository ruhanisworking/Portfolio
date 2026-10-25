---
version: 1.0.0
name: Ember — ruhan.bd
description: >-
  The design system for ruhan.bd. Many shades of orange and amber on warm paper,
  inked in a deep warm black. Headings are set in Cinzel (capital-only: the first
  letter of each word stands taller), body copy in DM Sans, quotes in Playfair
  Display italic. The signature element is a black Dynamic-Island navbar that
  morphs between a compact pill and a full menu. Motion is calm: things fade up
  into place, the island springs.

# ─────────────────────────────────────────────────────────────────────────────
# THIS FILE IS THE MASTER. tools/build.mjs turns everything below into CSS
# custom properties (src/styles/tokens.css). Component CSS may only use those
# variables — tools/check.mjs fails the build on any raw colour, font, radius,
# shadow, duration or z-index. Need a new value? Add it here first.
#
# References: "{group.key}" points at another token and becomes var(--…).
# Naming in CSS:
#   colors.x            → --color-x          gradients.x → --gradient-x
#   fonts.x             → --font-x           type.x.y    → --type-x-y
#   space.x             → --space-x          radius.x    → --radius-x
#   border.x            → --border-x         shadow.x    → --shadow-x
#   motion.x            → --motion-x         z.x         → --z-x
#   layout.x            → --layout-x         components.c.p → --c-c-p
#   breakpoints.x       → used as @media (--bp-x) in CSS, expanded at build
# ─────────────────────────────────────────────────────────────────────────────

colors:
  # ink — deep warm black and its greys
  ink: "#141110"
  ink-2: "#4a4440"
  ink-3: "#8a827c"
  ink-4: "#b8b0a9"
  # oranges — one family, many shades (50 lightest → 900 darkest)
  orange-50: "#fff7ed"
  orange-100: "#ffedd5"
  orange-200: "#fed7aa"
  orange-300: "#fdba74"
  orange-400: "#fb923c"
  orange-500: "#f97316"
  orange-600: "#ea580c"
  orange-700: "#c2410c"
  orange-800: "#9a3412"
  orange-900: "#7c2d12"
  # ambers — the second orange family, for gradients and variety
  amber-100: "#fef3c7"
  amber-200: "#fde68a"
  amber-300: "#fcd34d"
  amber-400: "#fbbf24"
  amber-500: "#f59e0b"
  amber-600: "#d97706"
  amber-700: "#b45309"
  # yellow + wood — the avatar palette (mustard disc, warm wood); accents only
  yellow-200: "#fbeda0"
  yellow-400: "#f4d35e"
  yellow-500: "#e8bf2e"
  wood-400: "#a8754b"
  wood-500: "#7d5336"
  wood-700: "#4b3122"
  peach: "#f7c9a0"
  terracotta: "#cf6a43"
  # surfaces
  canvas: "#fbf8f5"
  paper: "#fffdfb"
  sunken: "#f4efea"
  dark: "#141110"
  dark-2: "#1f1a17"
  dark-3: "#2c2521"
  # text roles
  text: "{colors.ink}"
  text-muted: "{colors.ink-2}"
  text-subtle: "{colors.ink-3}"
  text-accent: "{colors.orange-700}"
  on-orange: "{colors.ink}"
  on-dark: "#fffdfb"
  on-dark-muted: "rgba(255, 253, 251, 0.68)"
  on-dark-subtle: "rgba(255, 253, 251, 0.42)"
  # lines
  hairline: "rgba(20, 17, 16, 0.08)"
  hairline-strong: "rgba(20, 17, 16, 0.14)"
  hairline-dark: "rgba(255, 253, 251, 0.10)"
  hairline-orange: "rgba(249, 115, 22, 0.32)"
  # states
  focus: "{colors.orange-600}"
  selection: "{colors.orange-200}"
  success: "#15803d"
  success-bright: "#4ade80"
  success-bg: "#ecfdf3"
  error: "#b42318"
  error-bg: "#fdf1ec"
  scrim: "rgba(20, 17, 16, 0.44)"

gradients:
  brand: "linear-gradient(135deg, var(--color-orange-600) 0%, var(--color-orange-500) 50%, var(--color-amber-500) 100%)"
  brand-hover: "linear-gradient(135deg, var(--color-orange-500) 0%, var(--color-amber-500) 60%, var(--color-amber-400) 100%)"
  soft: "linear-gradient(135deg, var(--color-orange-200) 0%, var(--color-amber-200) 100%)"
  text: "linear-gradient(100deg, var(--color-orange-700) 0%, var(--color-orange-600) 45%, var(--color-amber-600) 100%)"
  canvas-glow: "radial-gradient(60% 45% at 12% 0%, rgba(251, 146, 60, 0.22), transparent 70%), radial-gradient(50% 40% at 92% 8%, rgba(245, 158, 11, 0.16), transparent 72%)"
  dark-glow: "radial-gradient(70% 60% at 20% 0%, rgba(234, 88, 12, 0.28), transparent 70%)"
  # page looks — each solution page picks one (content look.accent); see components/look
  brand-amber: "linear-gradient(135deg, var(--color-amber-600) 0%, var(--color-amber-500) 50%, var(--color-amber-300) 100%)"
  text-amber: "linear-gradient(100deg, var(--color-amber-700) 0%, var(--color-amber-600) 50%, var(--color-orange-700) 100%)"
  glow-amber: "radial-gradient(60% 45% at 12% 0%, rgba(245, 158, 11, 0.24), transparent 70%), radial-gradient(50% 40% at 92% 8%, rgba(252, 211, 77, 0.22), transparent 72%)"
  dark-glow-amber: "radial-gradient(70% 60% at 20% 0%, rgba(245, 158, 11, 0.26), transparent 70%)"
  brand-rust: "linear-gradient(135deg, var(--color-orange-600) 0%, var(--color-orange-500) 55%, var(--color-orange-400) 100%)"
  text-rust: "linear-gradient(100deg, var(--color-orange-900) 0%, var(--color-orange-800) 50%, var(--color-orange-700) 100%)"
  glow-rust: "radial-gradient(60% 45% at 12% 0%, rgba(194, 65, 12, 0.18), transparent 70%), radial-gradient(50% 40% at 92% 8%, rgba(154, 52, 18, 0.14), transparent 72%)"
  dark-glow-rust: "radial-gradient(70% 60% at 20% 0%, rgba(194, 65, 12, 0.36), transparent 70%)"
  brand-wood: "linear-gradient(135deg, var(--color-wood-400) 0%, var(--color-amber-500) 55%, var(--color-amber-300) 100%)"
  text-wood: "linear-gradient(100deg, var(--color-wood-700) 0%, var(--color-wood-500) 50%, var(--color-terracotta) 100%)"
  glow-wood: "radial-gradient(60% 45% at 12% 0%, rgba(168, 117, 75, 0.22), transparent 70%), radial-gradient(50% 40% at 92% 8%, rgba(244, 211, 94, 0.18), transparent 72%)"
  dark-glow-wood: "radial-gradient(70% 60% at 20% 0%, rgba(168, 117, 75, 0.34), transparent 70%)"
  brand-peach: "linear-gradient(135deg, var(--color-orange-400) 0%, var(--color-orange-300) 55%, var(--color-peach) 100%)"
  text-peach: "linear-gradient(100deg, var(--color-terracotta) 0%, var(--color-orange-700) 50%, var(--color-orange-600) 100%)"
  glow-peach: "radial-gradient(60% 45% at 12% 0%, rgba(247, 201, 160, 0.42), transparent 70%), radial-gradient(50% 40% at 92% 8%, rgba(207, 106, 67, 0.14), transparent 72%)"
  dark-glow-peach: "radial-gradient(70% 60% at 20% 0%, rgba(207, 106, 67, 0.32), transparent 70%)"

fonts:
  google-href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap"
  google-href-bn: "https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&family=Hind+Siliguri:wght@400;500;600;700&display=swap"
  display: "\"Cinzel\", \"Playfair Display\", Georgia, serif"
  serif: "\"Playfair Display\", Georgia, serif"
  sans: "\"DM Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif"

# Bangla keeps the Latin face first so English words inside Bangla text keep
# the same look; Bengali glyphs fall through to the Bengali face.
fonts-bn:
  display: "\"Cinzel\", \"Tiro Bangla\", \"Noto Serif Bengali\", serif"
  serif: "\"Playfair Display\", \"Tiro Bangla\", \"Noto Serif Bengali\", serif"
  sans: "\"DM Sans\", \"Hind Siliguri\", \"Noto Sans Bengali\", system-ui, sans-serif"

# Text styles. Each becomes --type-<name>-family/size/weight/leading/tracking/case.
# Cinzel is typed in normal case on purpose: lowercase renders as small capitals,
# which is what gives the "first letter taller" look. Never uppercase it.
type:
  display:
    family: "{fonts.display}"
    size: "clamp(40px, 7vw, 76px)"
    weight: "700"
    leading: "1.04"
    tracking: "0.01em"
    case: "none"
  h1:
    family: "{fonts.display}"
    size: "clamp(34px, 5.6vw, 58px)"
    weight: "700"
    leading: "1.08"
    tracking: "0.015em"
    case: "none"
  h2:
    family: "{fonts.display}"
    size: "clamp(28px, 4.2vw, 44px)"
    weight: "600"
    leading: "1.12"
    tracking: "0.02em"
    case: "none"
  h3:
    family: "{fonts.display}"
    size: "clamp(19px, 2.2vw, 23px)"
    weight: "700"
    leading: "1.25"
    tracking: "0.02em"
    case: "none"
  h4:
    family: "{fonts.display}"
    size: "16px"
    weight: "700"
    leading: "1.3"
    tracking: "0.03em"
    case: "none"
  subheading:
    family: "{fonts.sans}"
    size: "clamp(17px, 1.6vw, 19px)"
    weight: "400"
    leading: "1.6"
    tracking: "0"
    case: "none"
  body-lg:
    family: "{fonts.sans}"
    size: "18px"
    weight: "400"
    leading: "1.7"
    tracking: "0"
    case: "none"
  body:
    family: "{fonts.sans}"
    size: "16px"
    weight: "400"
    leading: "1.65"
    tracking: "0"
    case: "none"
  body-sm:
    family: "{fonts.sans}"
    size: "14px"
    weight: "400"
    leading: "1.6"
    tracking: "0"
    case: "none"
  meta:
    family: "{fonts.sans}"
    size: "13px"
    weight: "500"
    leading: "1.4"
    tracking: "0.01em"
    case: "none"
  eyebrow:
    family: "{fonts.sans}"
    size: "12px"
    weight: "600"
    leading: "1"
    tracking: "0.16em"
    case: "uppercase"
  button:
    family: "{fonts.sans}"
    size: "15px"
    weight: "600"
    leading: "1"
    tracking: "0.005em"
    case: "none"
  nav:
    family: "{fonts.sans}"
    size: "14px"
    weight: "500"
    leading: "1"
    tracking: "0.005em"
    case: "none"
  quote:
    family: "{fonts.serif}"
    size: "clamp(18px, 2vw, 22px)"
    weight: "500"
    leading: "1.45"
    tracking: "0"
    case: "none"
  wordmark:
    family: "{fonts.display}"
    size: "16px"
    weight: "700"
    leading: "1"
    tracking: "0.04em"
    case: "none"

# Bengali has no case and its conjuncts break apart under letter-spacing, and it
# sits taller than Latin — these override the text styles when lang="bn".
type-bn:
  eyebrow-tracking: "0.01em"
  eyebrow-case: "none"
  display-tracking: "0"
  h1-tracking: "0"
  h2-tracking: "0"
  h3-tracking: "0"
  display-leading: "1.35"
  h1-leading: "1.4"
  h2-leading: "1.42"
  body-leading: "1.85"
  body-lg-leading: "1.95"

space:
  3xs: "4px"
  2xs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
  section: "clamp(56px, 7vw, 96px)"

radius:
  hair: "2px"
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  pill: "9999px"

border:
  thin: "1px solid var(--color-hairline)"
  strong: "1px solid var(--color-hairline-strong)"
  dark: "1px solid var(--color-hairline-dark)"
  accent: "1.5px solid var(--color-orange-400)"
  focus-ring: "2.5px solid var(--color-focus)"

shadow:
  sm: "0 1px 2px rgba(20, 17, 16, 0.04), 0 2px 8px rgba(20, 17, 16, 0.05)"
  md: "0 4px 12px rgba(20, 17, 16, 0.06), 0 14px 34px rgba(20, 17, 16, 0.08)"
  lg: "0 10px 26px rgba(20, 17, 16, 0.08), 0 30px 70px rgba(20, 17, 16, 0.12)"
  glow: "0 12px 30px rgba(234, 88, 12, 0.28)"
  island: "0 10px 30px rgba(20, 17, 16, 0.28), 0 2px 6px rgba(20, 17, 16, 0.2)"

motion:
  fast: "160ms"
  base: "280ms"
  slow: "520ms"
  reveal: "760ms"
  island: "560ms"
  stagger: "80ms"
  pulse: "2.2s"
  reveal-distance: "26px"
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"
  ease-in: "cubic-bezier(0.4, 0, 1, 1)"
  spring: "cubic-bezier(0.34, 1.4, 0.64, 1)"

z:
  base: "1"
  raised: "10"
  fab: "80"
  island: "100"
  overlay: "200"

layout:
  max: "1200px"
  prose: "720px"
  gutter: "clamp(16px, 4vw, 28px)"
  island-top: "14px"
  island-clearance: "56px"

breakpoints:
  sm: "480px"
  md: "768px"
  lg: "1024px"
  xl: "1280px"

# Brand assets — `npm run brand` (tools/brand.py) draws the "ruhan" wordmark
# and the favicon (the ember "a" on an ink tile) from these.
favicon:
  tile: "{colors.ink}"
  ink: "{colors.paper}"
  radius: "14"
  from: "{colors.orange-600}"
  via: "{colors.orange-500}"
  to: "{colors.amber-500}"

# The illustrated avatar (tools/avatar.py): warm tan skin in three steps,
# ink hair and beard with wood strands, a wood fedora, a terracotta shirt with
# a visible collar, on a yellow disc —
# the yellow / light orange / black / wood combination.
avatar:
  disc: "{colors.yellow-400}"
  ink: "{colors.ink}"
  wood: "{colors.wood-700}"
  skin-shadow: "#bd7650"
  skin: "#dc9c72"
  skin-light: "#efbf98"
  shirt: "{colors.terracotta}"
  shirt-shade: "{colors.wood-400}"
  collar: "#e48a62"
  hat: "{colors.wood-500}"
  hat-shine: "{colors.wood-400}"
  hat-brim: "{colors.wood-700}"
  cream: "{colors.orange-50}"

# Per-component tokens. Every component folder in src/components/<name>/ has an
# entry here; its CSS reads --c-<name>-<prop> and nothing hard-coded.
components:
  island:
    bg: "{colors.dark}"
    text: "{colors.on-dark}"
    text-muted: "{colors.on-dark-muted}"
    link-hover-bg: "rgba(255, 253, 251, 0.08)"
    radius: "{radius.pill}"
    radius-open: "{radius.xl}"
    height: "52px"
    pad: "6px"
    width-mobile: "560px"
    link-height: "40px"
    toggle-size: "40px"
    dot-size: "7px"
    icon-size: "18px"
    duration: "{motion.island}"
    shadow: "{shadow.island}"
    progress: "{gradients.brand}"
    cta-bg: "{gradients.brand}"
    cta-text: "{colors.on-orange}"
  button:
    height: "48px"
    height-sm: "38px"
    pad-x: "22px"
    pad-x-sm: "16px"
    radius: "{radius.md}"
    primary-bg: "{gradients.brand}"
    primary-bg-hover: "{gradients.brand-hover}"
    primary-text: "{colors.on-orange}"
    primary-shadow: "{shadow.glow}"
    secondary-bg: "{colors.paper}"
    secondary-text: "{colors.ink}"
    secondary-border: "{border.strong}"
    ghost-text: "{colors.text-accent}"
    dark-bg: "{colors.dark}"
    dark-text: "{colors.on-dark}"
  card:
    bg: "{colors.paper}"
    border: "{border.thin}"
    border-hover: "{colors.hairline-orange}"
    radius: "{radius.lg}"
    pad: "{space.md}"
    shadow: "{shadow.sm}"
    shadow-hover: "{shadow.md}"
    lift: "-4px"
    dark-bg: "{colors.dark-2}"
    dark-border: "{border.dark}"
  icon-tile:
    size: "44px"
    radius: "{radius.sm}"
    text: "{colors.on-orange}"
    bg-1: "linear-gradient(135deg, var(--color-orange-500), var(--color-amber-500))"
    bg-2: "linear-gradient(135deg, var(--color-orange-600), var(--color-orange-400))"
    bg-3: "linear-gradient(135deg, var(--color-amber-500), var(--color-amber-300))"
    bg-4: "linear-gradient(135deg, var(--color-orange-400), var(--color-orange-200))"
  chip:
    height: "30px"
    pad-x: "12px"
    radius: "{radius.pill}"
    bg: "{colors.orange-50}"
    border: "1px solid var(--color-orange-200)"
    text: "{colors.ink}"
    bg-hover: "{colors.orange-400}"
    dot-size: "8px"
  section-header:
    gap: "{space.xs}"
    max: "{layout.prose}"
    eyebrow: "{colors.text-accent}"
    eyebrow-rule: "{gradients.brand}"
    title: "{colors.text}"
    accent: "{gradients.text}"
    sub: "{colors.text-muted}"
    rule-width: "28px"
  lang-toggle:
    bg: "rgba(255, 253, 251, 0.08)"
    text: "{colors.on-dark-muted}"
    active-bg: "{gradients.brand}"
    active-text: "{colors.on-orange}"
    radius: "{radius.pill}"
    height: "30px"
  wordmark:
    height: "26px"
    height-sm: "20px"
    height-lg: "56px"
    ink: "{colors.ink}"
    ink-on-dark: "{colors.on-dark}"
  field:
    height: "48px"
    radius: "{radius.sm}"
    bg: "{colors.paper}"
    border: "{border.strong}"
    border-focus: "{colors.orange-500}"
    label: "{colors.text-subtle}"
    focus-ring: "0 0 0 4px var(--color-orange-100)"
    textarea-min: "140px"
  accordion:
    border: "{border.thin}"
    radius: "{radius.md}"
    icon-bg: "{colors.orange-100}"
    icon-bg-open: "{colors.orange-500}"
    icon-mark: "{colors.ink}"
    icon-size: "28px"
  footer:
    bg: "{colors.dark}"
    text: "{colors.on-dark-muted}"
    heading: "{colors.orange-300}"
    link-hover: "{colors.on-dark}"
    fine: "{colors.on-dark-subtle}"
    glow: "{gradients.dark-glow}"
  contact-links:
    gap: "{space.2xs}"
    pill-height: "48px"
    pill-pad: "6px 18px 6px 6px"
    pill-bg: "{colors.paper}"
    pill-border: "{border.thin}"
    pill-text: "{colors.ink}"
    pill-dark-bg: "{colors.dark-2}"
    pill-dark-border: "{border.dark}"
    pill-dark-text: "{colors.on-dark}"
    icon-size: "36px"
    icon-size-lg: "52px"
    icon-radius: "{radius.sm}"
    icon-ink: "{colors.ink}"
    icon-email: "linear-gradient(135deg, var(--color-orange-600), var(--color-orange-400))"
    icon-whatsapp: "linear-gradient(135deg, var(--color-amber-500), var(--color-amber-300))"
    icon-linkedin: "linear-gradient(135deg, var(--color-orange-500), var(--color-amber-400))"
    icon-github: "linear-gradient(135deg, var(--color-orange-300), var(--color-amber-200))"
  hero:
    gap: "{space.2xl}"
    avatar-size: "88px"
    line-size: "clamp(36px, 4.9vw, 64px)"
    avatar-ring: "{gradients.brand}"
    avatar-shadow: "{shadow.md}"
    stage-height: "460px"
    window-shadow: "{shadow.lg}"
    badge-icon: "28px"
    badge-bg: "rgba(20, 17, 16, 0.86)"
    badge-text: "{colors.on-dark}"
  stat-strip:
    value: "{colors.ink}"
    value-size: "clamp(28px, 3.4vw, 38px)"
    label: "{colors.text-subtle}"
    divider: "{border.thin}"
  viz:
    height: "196px"
    bg: "{colors.dark}"
    surface: "{colors.dark-2}"
    surface-2: "{colors.dark-3}"
    text: "{colors.on-dark}"
    muted: "{colors.on-dark-muted}"
    subtle: "{colors.on-dark-subtle}"
    line: "{colors.hairline-dark}"
    accent: "{gradients.brand}"
    accent-solid: "{colors.orange-500}"
    ok: "{colors.success-bright}"
    warn: "{colors.amber-400}"
    radius: "{radius.md}"
    inner-radius: "{radius.xs}"
    glow: "{gradients.dark-glow}"
    bars-height: "72px"
    device-width: "112px"
  case-card:
    fact-value: "{colors.orange-300}"
    fact-size: "clamp(26px, 3vw, 34px)"
    fact-label: "{colors.on-dark-muted}"
  process-steps:
    num-size: "48px"
    num-bg: "{gradients.brand}"
    num-text: "{colors.on-orange}"
    line: "{colors.orange-200}"
  contact-form:
    gap: "{space.sm}"
  timeline:
    dot-size: "14px"
    dot: "{gradients.brand}"
    line: "{colors.orange-200}"
    when: "{colors.text-accent}"
  breadcrumb:
    text: "{colors.text-subtle}"
    current: "{colors.text-accent}"
  page-hero:
    gap: "{space.2xl}"
    scene-max: "520px"
    scene-wide: "760px"
    copy-max: "820px"
  pain-cards:
    quote: "{colors.ink}"
    mark: "{gradients.brand}"
    mark-height: "3px"
  story-scroll:
    step-min: "58vh"
    sticky-top: "16vh"
    rail: "{colors.orange-100}"
    rail-fill: "{gradients.brand}"
    rail-width: "3px"
    num: "{colors.text-accent}"
    dim: "0.32"
    autoplay-ms: "1800"
  offer-card:
    num: "{colors.orange-300}"
    log-bg: "{colors.dark}"
    log-text: "{colors.on-dark-muted}"
    log-accent: "{colors.orange-300}"
    log-step: "420ms"
  flow-diagram:
    node-bg: "{colors.dark-2}"
    node-border: "{border.dark}"
    node-text: "{colors.on-dark}"
    node-sub: "{colors.on-dark-subtle}"
    node-on-ring: "{colors.orange-500}"
    node-on-shadow: "0 0 0 1px var(--color-orange-500), 0 12px 30px rgba(234, 88, 12, 0.28)"
    line: "{colors.dark-3}"
    line-on: "{gradients.brand}"
    line-length: "28px"
    icon-size: "40px"
    check-size: "22px"
    check-inset: "inset 0 0 0 4px var(--color-dark-2)"
  dialogue:
    client-bg: "{colors.paper}"
    client-border: "{border.thin}"
    us-bg: "{colors.dark}"
    us-text: "{colors.on-dark}"
    who: "{colors.text-subtle}"
    stagger: "260ms"
    radius: "{radius.lg}"
  engagement:
    featured-border: "1.5px solid var(--color-orange-500)"
    featured-badge: "{gradients.brand}"
  related-links:
    arrow: "{colors.text-accent}"
  count-up:
    duration: "1200"
  look:
    row-node-min: "120px"
  icon:
    size: "20px"
  reveal:
    distance: "{motion.reveal-distance}"
    duration: "{motion.reveal}"
    ease: "{motion.ease}"
    stagger: "{motion.stagger}"
  # Commander (ruhan.lol, public summary site run by Hermes) — see commander/
  cmd-shell:
    sidebar-width: "264px"
    bg: "{colors.dark}"
    glow: "{gradients.dark-glow}"
    text: "{colors.on-dark-muted}"
    text-active: "{colors.on-dark}"
    group: "{colors.on-dark-subtle}"
    link-height: "40px"
    link-radius: "{radius.sm}"
    link-hover-bg: "rgba(255, 253, 251, 0.06)"
    link-active-bg: "rgba(255, 253, 251, 0.10)"
    marker: "{gradients.brand}"
    marker-width: "3px"
    icon-size: "18px"
    topbar-height: "56px"
    main-bg: "{colors.canvas}"
    main-glow: "{gradients.canvas-glow}"
    scrim: "{colors.scrim}"
  cmd-stat:
    bg: "{colors.paper}"
    border: "{border.thin}"
    radius: "{radius.md}"
    pad: "{space.sm}"
    min: "180px"
    label: "{colors.text-subtle}"
    value: "{colors.ink}"
    value-size: "clamp(24px, 2.4vw, 30px)"
    note: "{colors.text-muted}"
    up: "{colors.success}"
    down: "{colors.error}"
  cmd-panel:
    bg: "{colors.paper}"
    border: "{border.thin}"
    radius: "{radius.lg}"
    pad: "{space.md}"
    shadow: "{shadow.sm}"
    row-border: "{border.thin}"
    tag-bg: "{colors.orange-50}"
    tag-border: "1px solid var(--color-orange-200)"
    tag-text: "{colors.text-accent}"
    empty-bg: "{colors.sunken}"
    empty-text: "{colors.text-muted}"
    card-min: "260px"
---

# Ember — ruhan.bd design system

## Overview

A warm, confident, personal site for one engineer. The page is warm paper
(`canvas`) with soft orange glows; ink is a deep warm black, never pure #000.
Orange carries energy — always in **several shades at once** (gradients run
orange-600 → orange-500 → amber-500), never one flat orange everywhere.

The signature element is the **Dynamic Island** navbar: a black pill floating
at the top centre. At the very top of the page it is open, showing every link.
Once you scroll it springs closed into a small pill that shows the seal, the
name of the section you are reading and a thin orange progress line. Hover,
focus or a tap springs it open again.

**Character:** calm, crafted, a little bold. One loud thing per screen —
usually a heading or the island — everything else stays quiet.

## Colors

- **Ink** `#141110` is the text colour and the dark-surface colour. Greys
  (`ink-2..4`) for secondary text, never for headings.
- **Orange 50–900 and Amber 100–700** are the accent families. Light shades
  (50–200) are backgrounds and washes; 300–600 are fills and gradients; 700+
  is the only orange allowed as **text on a light background** (contrast).
- **Text on any orange fill is always ink (`on-orange`), never white.** White
  on orange was explicitly rejected.
- Surfaces: `canvas` (page), `paper` (cards), `sunken` (wells), `dark`/`dark-2`
  (island, footer, dark bands).

## Typography

| Role | Face | Notes |
|---|---|---|
| display, h1–h4, wordmark | Cinzel | capital-only; type in normal case so first letters stand taller |
| subheading, body, meta, eyebrow, button, nav | DM Sans | |
| quote | Playfair Display italic | Cinzel has no italic |
| Bangla | Tiro Bangla (display) · Hind Siliguri (body) | Latin face stays first in the stack |

Hierarchy on a section: **eyebrow** (small caps-tracked label in orange-700 with
a gradient rule) → **h2** → **subheading** (muted, max 56ch) → content. Use
**meta** for dates, roles, captions; never shrink body text to make meta.

## Layout

Container max `1200px`, prose max `720px`, gutter `clamp(16px, 4vw, 28px)`.
Sections are separated by `space.section`. Grids are CSS grid with `gap` from
the space scale. Mobile first; at 480px wide nothing may scroll sideways.

## Elevation

Soft, layered shadows only (`shadow.sm/md/lg`), plus `glow` for primary
buttons and `island` for the navbar. No hard offsets, no heavy borders.

## Motion

- **Fade-up reveal** is the entrance for every block: opacity 0 → 1 and
  `reveal-distance` → 0 over `motion.reveal` with `motion.ease`. Children of a
  `[data-reveal-stagger]` parent come in `motion.stagger` apart.
- **Spring** (`motion.spring`) is reserved for the island and small pops
  (buttons lifting, icons) — never for page content.
- Hover lifts are `card.lift` (-4px) with `motion.base`.
- `prefers-reduced-motion: reduce` turns every animation into an instant state
  change. This is handled once in `src/base/motion.css`.

## Components

Every component lives in `src/components/<name>/` with its own
`<name>.css`, optional `<name>.html` (markup partial) and `<name>.js`. Its
tokens are under `components.<name>` above. The catalogue is
`src/pages/components.html` — every component in every state.

| Component | Files | What it is |
|---|---|---|
| island | html, css, js | Dynamic-Island navbar: compact ↔ open, section label, scroll progress, mobile sheet |
| button | css | primary (gradient, ink text), secondary, ghost, dark, sm size, icon |
| card | css | base, interactive (lifts), dark |
| icon-tile | css | 44px gradient square holding an icon, four shade variants |
| chip | css | pill tag, hover fills orange |
| section-header | html, css | eyebrow + h2 (+ gradient accent span) + subheading |
| lang-toggle | html, css, js | EN / বাংলা switch inside the island |
| wordmark | html, css | the "ruhan" logo — DM Sans ExtraBold with the ember "a" (`npm run brand`) |
| field | css | input / textarea / label |
| accordion | css | exclusive `<details name>` group, animated open where supported |
| footer | html, css | dark footer with glow |
| reveal | css, js | fade-up entrance + stagger, driven by IntersectionObserver |
| contact-links | html, css | email / WhatsApp / LinkedIn with their own icons in orange tiles; email always shown in full |
| hero | css | intro: YouTube-style identity row (small avatar, name, handle) + copy; a "stage" of stacked product windows with a floating badge |
| stat-strip | css | 3–4 big numbers with labels |
| viz | html (×6), css | small dark "product window" visuals: private AI chat, automation flow, backup mesh, monitoring, security checklist, accessible web |
| case-card | css | work item on a dark card: problem → what was built → 2 facts → stack |
| process-steps | css | numbered steps joined by a line |
| timeline | css | experience entries on a vertical line |
| breadcrumb | css | Home › Solutions › Page, with BreadcrumbList schema in the template |
| page-hero | css | solution page hero: crumb, H1 (kicker + line), lede, CTA, contact, live scene + stats |
| pain-cards | css | three problems in the client's words; a gradient mark draws under each |
| story-scroll | css, js | sticky scroll story: steps on one side, a visual that changes per step, progress rail |
| offer-card | css | one project from the catalog: number, name, brief, you get, live in, stack, animated log |
| flow-diagram | css | nodes joined by lines that light up step by step (driven by story-scroll) |
| dialogue | css | a short illustrative first call — client / us bubbles revealed in turn |
| engagement | css | quick fix / project / ongoing — how the work is shaped |
| related-links | css | links to related solution pages |
| look | css | per-page look on <html>: accent (ember/amber/rust/wood/peach) + layout variants for hero, story visual, offers and pains |
| count-up | css, js | numbers count up when they scroll into view |
| icon | css, svg | line icons used across components |
| contact-form | css, js | name / email / message → opens a pre-filled email to the site address |
| cmd-shell | html, css, js | Commander layout: dark sidebar nav grouped by area (sheet below `lg`), canvas main area |
| cmd-stat | css | Commander KPI tile: label, big value, note with up/down trend |
| cmd-panel | html, css, js | Commander data block: loads `/data/<id>.json` (written by Hermes) into summary, stats, lists and overview cards; empty state when missing |

## Do's and Don'ts

**Do** take every value from a token. **Do** use 2–3 orange shades together.
**Do** keep ink text on orange. **Do** write Cinzel text in normal case.

**Don't** write a raw hex, rgb(), font name, radius, shadow, duration or
z-index in component CSS (`npm run check` fails). **Don't** put white text on
orange. **Don't** uppercase Cinzel. **Don't** letter-space Bengali.

## Responsive Behavior

Breakpoints `sm 480 · md 768 · lg 1024 · xl 1280`, written in CSS as
`@media (--bp-md)` (min-width) — the build expands them. The island becomes a
tap-to-open sheet below `md`. Touch targets are at least 44px.

## Iteration Guide

1. Change the look → edit this file's YAML, run `npm run build`.
2. New component → add `components.<name>` here, create
   `src/components/<name>/`, add it to the catalogue page, run `npm run check`.
3. Borrowing from a reference in `design/awesome-design-md/` → copy the
   *pattern* (layout, rhythm, interaction), translate it to these tokens, never
   their colours or fonts.
