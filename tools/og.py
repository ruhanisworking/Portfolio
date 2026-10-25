"""Renders a 1200×630 share image for every indexed page.

    npm run og        (builds first, so dist/pages.json is fresh; then rebuild)

Reads dist/pages.json (written by tools/build.mjs) and dist/tokens.json, and
writes src/static/og/<slug>.jpg — dark ink background with an orange glow, the
page's kicker and headline, and the illustrated avatar. The build picks the
file up automatically as that page's og:image / twitter:image and adds it to
the image sitemap. Needs Pillow; fonts are downloaded once into tools/.cache/.
"""
import json
import pathlib
import textwrap
import urllib.request

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
CACHE = ROOT / "tools" / ".cache"
OUT = ROOT / "src" / "static" / "og"
AVATAR = ROOT / "src" / "static" / "images" / "ruhan-avatar.png"
FONTS = {
    "Cinzel.ttf": "https://github.com/google/fonts/raw/main/ofl/cinzel/Cinzel%5Bwght%5D.ttf",
    "DMSans.ttf": "https://github.com/google/fonts/raw/main/ofl/dmsans/DMSans%5Bopsz,wght%5D.ttf",
}
W, H = 1200, 630


def font(name, size, axes):
    path = CACHE / name
    if not path.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        urllib.request.urlretrieve(FONTS[name], path)
    f = ImageFont.truetype(str(path), size)
    try:
        f.set_variation_by_axes(axes)
    except Exception:
        pass
    return f


def rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def main():
    pages = json.loads((ROOT / "dist" / "pages.json").read_text(encoding="utf-8"))
    c = json.loads((ROOT / "dist" / "tokens.json").read_text(encoding="utf-8"))["colors"]
    ink, paper = rgb(c["ink"]), rgb(c["paper"])
    o300, o500, o600, a500 = rgb(c["orange-300"]), rgb(c["orange-500"]), rgb(c["orange-600"]), rgb(c["amber-500"])
    muted = (200, 192, 186)

    kicker_f = font("DMSans.ttf", 22, [14, 700])
    title_f = font("Cinzel.ttf", 56, [700])
    small_f = font("DMSans.ttf", 24, [14, 600])
    avatar = Image.open(AVATAR).convert("RGBA").resize((330, 330), Image.LANCZOS)

    OUT.mkdir(parents=True, exist_ok=True)
    for p in pages:
        img = Image.new("RGB", (W, H), ink)
        # orange glow, top-left and behind the avatar
        glow = Image.new("RGB", (W, H), ink)
        g = ImageDraw.Draw(glow)
        g.ellipse((-200, -260, 620, 360), fill=o600)
        g.ellipse((760, 120, 1180, 540), fill=a500)
        img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(160)), 0.42)
        d = ImageDraw.Draw(img)

        # brand bar on the left edge: orange → amber
        for y in range(H):
            t = y / H
            col = tuple(round(o600[i] + (a500[i] - o600[i]) * t) for i in range(3))
            d.line([(0, y), (12, y)], fill=col)

        x = 72
        kicker = (p["kicker"] or p["crumb"]).upper()
        d.text((x, 86), textwrap.shorten(kicker, 52, placeholder="…"), font=kicker_f, fill=o300)
        line = p["line"] or p["title"].split("|")[0].strip()
        y = 136
        for row in textwrap.wrap(line, width=22)[:4]:
            d.text((x, y), row, font=title_f, fill=paper)
            y += 70
        # footer: domain + email in a pill
        d.text((x, H - 104), "ruhan.bd", font=small_f, fill=muted)
        pill_w = 210
        d.rounded_rectangle((x + 140, H - 112, x + 140 + pill_w, H - 66), radius=23, fill=o500)
        d.text((x + 140 + pill_w / 2, H - 89), "hi@ruhan.bd", font=small_f, fill=ink, anchor="mm")

        # avatar with an orange ring
        ax, ay = W - 330 - 90, (H - 330) // 2
        d.ellipse((ax - 10, ay - 10, ax + 340, ay + 340), fill=o500)
        img.paste(avatar, (ax, ay), avatar)

        img.save(OUT / f"{p['slug']}.jpg", quality=86, optimize=True, progressive=True)
        print(f"wrote src/static/og/{p['slug']}.jpg")


if __name__ == "__main__":
    main()
