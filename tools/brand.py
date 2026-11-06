"""Builds the brand assets from DESIGN.md: the "ruhan" wordmark and the favicons.

    npm run brand        (builds first, so dist/tokens.json is fresh)

The wordmark is "ruhan" in Fraunces SemiBold (soft, display optical size),
tightly set, with the "a" filled with the ember gradient (logo concept 1,
"Ember Serif"). The favicon is that ember "a" on an ink tile.
Glyph outlines come from the real font (fontTools), so the SVG needs no font.

Writes:
  src/components/wordmark/wordmark.html   inline SVG partial (ink = currentColor)
  src/static/favicon.svg                  the ember "a" on an ink tile
  src/static/favicon-{32,180,192,512}.png

Needs Pillow + fontTools; Fraunces is downloaded once into tools/.cache/.
"""
import json
import re
import pathlib
import urllib.request

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / ".cache"
FONT_URL = "https://github.com/google/fonts/raw/main/ofl/fraunces/Fraunces%5BSOFT,WONK,opsz,wght%5D.ttf"
AXES = {"wght": 600, "opsz": 144, "SOFT": 50, "WONK": 0}
TRACKING = -0.03  # of the em, between letters — tight, like a wordmark


def load_font():
    path = CACHE / "Fraunces.ttf"
    if not path.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(FONT_URL, path)
    return instancer.instantiateVariableFont(TTFont(path), AXES)


def short(d):
    # one decimal is far below a pixel at any size we show the logo
    return re.sub(r"-?\d+\.\d+", lambda m: f"{float(m.group()):.1f}".rstrip("0").rstrip("."), d)


def glyph_path(font, char, transform):
    gs = font.getGlyphSet()
    name = font.getBestCmap()[ord(char)]
    pen = SVGPathPen(gs)
    gs[name].draw(TransformPen(pen, transform))
    return short(pen.getCommands()), gs[name].width


def glyph_bounds(font, char):
    gs = font.getGlyphSet()
    pen = BoundsPen(gs)
    gs[font.getBestCmap()[ord(char)]].draw(pen)
    return pen.bounds  # xMin, yMin, xMax, yMax (y-up)


def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def main():
    tokens = json.loads((ROOT / "dist" / "tokens.json").read_text(encoding="utf-8"))
    fav = tokens["favicon"]
    font = load_font()
    upm = font["head"].unitsPerEm
    track = TRACKING * upm

    # ── wordmark: ink "ruh" + ember "a" + ink "n" ──────────────────────────
    # font units are y-up; SVG is y-down — flip around the baseline
    ink, ember, x = [], "", 0.0
    for ch in "ruhan":
        d, adv = glyph_path(font, ch, (1, 0, 0, -1, x, 0))
        if ch == "a":
            ember = d
        else:
            ink.append(d)
        x += adv + track
    width = x - track

    ascender = font["hhea"].ascent
    x_height = font["OS/2"].sxHeight
    pad = upm * 0.02
    top = max(ascender * 0.78, x_height * 1.6)
    view = f"{-pad:.0f} {-top:.0f} {width + 2 * pad:.0f} {top + pad * 6:.0f}"

    partial = f"""<svg class="wordmark" viewBox="{view}" role="img" aria-label="ruhan">
  <defs>
    <linearGradient id="ember-{{{{props.id}}}}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{{{{colors.orange-600}}}}"/>
      <stop offset="0.5" stop-color="{{{{colors.orange-500}}}}"/>
      <stop offset="1" stop-color="{{{{colors.amber-500}}}}"/>
    </linearGradient>
  </defs>
  <path class="wordmark__ink" fill="currentColor" d="{"".join(ink)}"/>
  <path class="wordmark__core" fill="url(#ember-{{{{props.id}}}})" d="{ember}"/>
</svg>
"""
    out = ROOT / "src" / "components" / "wordmark" / "wordmark.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(partial, encoding="utf-8")
    print("wrote src/components/wordmark/wordmark.html")

    # ── favicon: the ember "a", centred on an ink tile ─────────────────────
    S = 64
    fill = 0.62  # the "a" fills this much of the tile's height
    x0, y0, x1, y1 = glyph_bounds(font, "a")
    k = S * fill / (y1 - y0)
    tx = (S - (x1 - x0) * k) / 2 - x0 * k
    ty = (S + (y1 - y0) * k) / 2 + y0 * k  # baseline position (y-down)
    a_path, _ = glyph_path(font, "a", (k, 0, 0, -k, tx, ty))

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
  <path fill="url(#g)" d="{a_path}"/>
</svg>
"""
    static = ROOT / "src" / "static"
    static.mkdir(parents=True, exist_ok=True)
    (static / "favicon.svg").write_text(svg, encoding="utf-8")
    print("wrote src/static/favicon.svg")

    # PNGs: the same "a" drawn at 8x with PIL from the variable font, filled
    # with the gradient through its mask, then shrunk for smooth edges
    stops = [(0.0, rgb(fav["from"])), (0.5, rgb(fav["via"])), (1.0, rgb(fav["to"]))]

    def colour_at(t):
        for (t0, c0), (t1, c1) in zip(stops, stops[1:]):
            if t <= t1:
                f = (t - t0) / (t1 - t0)
                return tuple(round(a + (b - a) * f) for a, b in zip(c0, c1))
        return stops[-1][1]

    for size in (32, 180, 192, 512):
        big = size * 8
        s = big / S
        img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
        ImageDraw.Draw(img).rounded_rectangle((0, 0, big - 1, big - 1), radius=int(float(fav["radius"]) * s), fill=rgb(fav["tile"]))

        pil_font = ImageFont.truetype(str(CACHE / "Fraunces.ttf"), round(upm * k * s))
        by_name = {a["name"].decode() if isinstance(a["name"], bytes) else a["name"]: a for a in pil_font.get_variation_axes()}
        tags = {"Optical Size": "opsz", "Weight": "wght", "Softness": "SOFT", "Wonky": "WONK"}
        pil_font.set_variation_by_axes([AXES.get(tags.get(n, ""), a["default"]) for n, a in by_name.items()])
        mask = Image.new("L", (big, big), 0)
        # anchor "ls" = left edge of the advance, on the baseline
        ImageDraw.Draw(mask).text((tx * s, ty * s), "a", font=pil_font, fill=255, anchor="ls")

        grad = Image.new("RGB", (256, 256))
        grad.putdata([colour_at((x + y) / 510) for y in range(256) for x in range(256)])
        img.paste(grad.resize((big, big), Image.BILINEAR), (0, 0), mask)
        img.resize((size, size), Image.LANCZOS).save(static / f"favicon-{size}.png")
        print(f"wrote src/static/favicon-{size}.png")


if __name__ == "__main__":
    main()
