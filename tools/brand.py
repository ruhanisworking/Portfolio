"""Builds the brand assets from DESIGN.md: the "ruhan" wordmark and the favicons.

    npm run brand        (builds first, so dist/tokens.json is fresh)

The wordmark is DM Sans ExtraBold "ruh" + "n" with our own "a" between them:
an ink bowl with an orange ember core and an ink stem (logo concept C).
Glyph outlines come from the real font (fontTools), so the SVG needs no font.

Writes:
  src/components/wordmark/wordmark.html   inline SVG partial (ink = currentColor)
  src/static/favicon.svg                  the "a" mark on an ink tile
  src/static/favicon-{32,180,192}.png

Needs Pillow + fontTools; DM Sans is downloaded once into tools/.cache/.
"""
import json
import re
import pathlib
import urllib.request

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / ".cache"
FONT_URL = "https://github.com/google/fonts/raw/main/ofl/dmsans/DMSans%5Bopsz,wght%5D.ttf"
WEIGHT = 800
TRACKING = -0.035  # of the em, between letters — tight, like a wordmark


def load_font():
    path = CACHE / "DMSans.ttf"
    if not path.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(FONT_URL, path)
    return instancer.instantiateVariableFont(TTFont(path), {"wght": WEIGHT, "opsz": 40})


def glyph_path(font, char, x_offset, upm):
    gs = font.getGlyphSet()
    name = font.getBestCmap()[ord(char)]
    pen = SVGPathPen(gs)
    # font units are y-up; SVG is y-down — flip around the baseline
    gs[name].draw(TransformPen(pen, (1, 0, 0, -1, x_offset, 0)))
    # one decimal is far below a pixel at any size we show the logo
    d = re.sub(r"-?\d+\.\d+", lambda m: f"{float(m.group()):.1f}".rstrip("0").rstrip("."), pen.getCommands())
    return d, gs[name].width


def main():
    tokens = json.loads((ROOT / "dist" / "tokens.json").read_text(encoding="utf-8"))
    fav = tokens["favicon"]
    font = load_font()
    upm = font["head"].unitsPerEm
    x_height = font["OS/2"].sxHeight
    track = TRACKING * upm

    # stem width = the "n"'s left stem, measured from its outline bounds
    glyf = font["glyf"]
    n = glyf[font.getBestCmap()[ord("n")]]
    stem = round((n.xMax - n.xMin) * 0.27)

    paths, x = [], 0.0
    for ch in "ruh":
        d, adv = glyph_path(font, ch, x, upm)
        paths.append(d)
        x += adv + track

    # the ember "a": bowl circle the height of the x-height, stem on its right
    r = x_height / 2
    cx, cy = x + r, -r
    core = r - stem * 1.05
    a_bowl = f"M{cx - r:.1f},{cy:.1f}a{r:.1f},{r:.1f} 0 1,0 {2 * r:.1f},0a{r:.1f},{r:.1f} 0 1,0 {-2 * r:.1f},0Z"
    a_stem = f"M{cx + r - stem:.1f},{-x_height:.1f}h{stem:.1f}v{x_height:.1f}h{-stem:.1f}Z"
    x = cx + r + track * 0.6

    d, adv = glyph_path(font, "n", x, upm)
    paths.append(d)
    width = x + adv

    ascender = font["hhea"].ascent
    pad = upm * 0.02
    view = f"{-pad:.0f} {-ascender:.0f} {width + 2 * pad:.0f} {ascender + pad * 4:.0f}"
    ink = "".join(paths) + a_bowl + a_stem

    partial = f"""<svg class="wordmark" viewBox="{view}" role="img" aria-label="ruhan">
  <defs>
    <linearGradient id="ember-{{{{props.id}}}}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{{{{colors.orange-600}}}}"/>
      <stop offset="0.5" stop-color="{{{{colors.orange-500}}}}"/>
      <stop offset="1" stop-color="{{{{colors.amber-500}}}}"/>
    </linearGradient>
  </defs>
  <path class="wordmark__ink" fill="currentColor" d="{ink}"/>
  <circle class="wordmark__core" cx="{cx:.1f}" cy="{cy:.1f}" r="{core:.1f}" fill="url(#ember-{{{{props.id}}}})"/>
</svg>
"""
    out = ROOT / "src" / "components" / "wordmark" / "wordmark.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(partial, encoding="utf-8")
    print("wrote src/components/wordmark/wordmark.html")

    # ── favicon: the "a" mark, light on an ink tile ────────────────────────
    S = 64
    fr = 20            # bowl radius
    fstem = 9
    fcore = fr - fstem * 1.05
    fcx, fcy = 29, 34
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S} {S}" role="img" aria-label="ruhan">
  <title>ruhan</title>
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{fav['from']}"/>
      <stop offset="0.5" stop-color="{fav['via']}"/>
      <stop offset="1" stop-color="{fav['to']}"/>
    </linearGradient>
  </defs>
  <rect width="{S}" height="{S}" rx="{fav['radius']}" fill="{fav['tile']}"/>
  <circle cx="{fcx}" cy="{fcy}" r="{fr}" fill="{fav['ink']}"/>
  <rect x="{fcx + fr - fstem}" y="{fcy - fr}" width="{fstem}" height="{2 * fr}" fill="{fav['ink']}"/>
  <circle cx="{fcx}" cy="{fcy}" r="{fcore:.2f}" fill="url(#g)"/>
</svg>
"""
    static = ROOT / "src" / "static"
    static.mkdir(parents=True, exist_ok=True)
    (static / "favicon.svg").write_text(svg, encoding="utf-8")
    print("wrote src/static/favicon.svg")

    def rgb(h):
        h = h.lstrip("#")
        return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

    stops = [(0.0, rgb(fav["from"])), (0.5, rgb(fav["via"])), (1.0, rgb(fav["to"]))]

    def colour_at(t):
        for (t0, c0), (t1, c1) in zip(stops, stops[1:]):
            if t <= t1:
                k = (t - t0) / (t1 - t0)
                return tuple(round(a + (b - a) * k) for a, b in zip(c0, c1))
        return stops[-1][1]

    for size in (32, 180, 192):
        k = size * 8 / S
        big = size * 8
        img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
        d = ImageDraw.Draw(img)
        d.rounded_rectangle((0, 0, big - 1, big - 1), radius=int(float(fav["radius"]) * k), fill=rgb(fav["tile"]))
        d.ellipse(((fcx - fr) * k, (fcy - fr) * k, (fcx + fr) * k, (fcy + fr) * k), fill=rgb(fav["ink"]))
        d.rectangle(((fcx + fr - fstem) * k, (fcy - fr) * k, (fcx + fr) * k, (fcy + fr) * k), fill=rgb(fav["ink"]))
        c = int(2 * fcore * k)
        grad = Image.new("RGB", (c, c))
        px = grad.load()
        for y in range(c):
            for x in range(c):
                px[x, y] = colour_at((x + y) / (2 * (c - 1)))
        mask = Image.new("L", (c, c), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, c - 1, c - 1), fill=255)
        img.paste(grad, (int((fcx - fcore) * k), int((fcy - fcore) * k)), mask)
        img.resize((size, size), Image.LANCZOS).save(static / f"favicon-{size}.png")
        print(f"wrote src/static/favicon-{size}.png")


if __name__ == "__main__":
    main()
