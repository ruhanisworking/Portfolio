"""Turns a front-facing portrait into a flat, illustrated avatar on a yellow
disc — flat peach skin with one shadow tone, solid ink hair and beard with
wood-brown strands, a terracotta shirt and clean ink outlines.

    npm run avatar        (builds first, so dist/tokens.json is fresh)

Source: design/references/ruhan-photo-2026-10-25.jpeg (white background).
A hand-drawn illustration can replace src/static/images/ruhan-avatar.{png,webp}
later with no code change. Needs OpenCV (opencv-python-headless) and Pillow.
"""
import json
import pathlib

import cv2
import numpy as np
from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "design" / "references" / "ruhan-photo-2026-10-25.jpeg"
OUT = ROOT / "src" / "static" / "images"
SIZE = 800
# square crop in source pixels after a 200px white border is added on every
# side — leaves room above the head for the hat
PAD = 200
CROP = (195, 150, 900)  # x, y, side


def bgr(hex_):
    h = hex_.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    return np.array([b, g, r], dtype=np.uint8)


def keep_big(mask, min_area):
    n, labels, stats, _ = cv2.connectedComponentsWithStats(mask)
    out = np.zeros_like(mask)
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] >= min_area:
            out[labels == i] = 255
    return out


def rgb(hex_):
    h = hex_.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4)) + (255,)


def rotate(points, cx, cy, deg):
    t = np.radians(deg)
    c, s = np.cos(t), np.sin(t)
    return [(cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c) for x, y in points]


def ellipse_pts(cx, cy, rx, ry, a0=0, a1=360, n=90):
    return [(cx + rx * np.cos(np.radians(a)), cy + ry * np.sin(np.radians(a))) for a in np.linspace(a0, a1, n)]


def add_costume(im, person, dark, pal, disc):
    """Draws a fedora over the hair and shirt-collar flaps beside the beard,
    measured from the cut-out so they sit on this head whatever the crop."""
    K = 2                                    # draw at 2× and scale down → smooth edges
    rows = np.where(person.any(axis=1))[0]
    top = int(rows[0])
    probe = min(top + 90, SIZE - 1)
    cols = np.where(person[probe] > 0)[0]
    left, right = int(cols[0]), int(cols[-1])
    w = right - left
    cx = (left + right) / 2

    layer = Image.new("RGBA", (SIZE * K, SIZE * K), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    S = lambda pts: [(x * K, y * K) for x, y in pts]
    ink = rgb(pal["ink"])
    line = 5 * K

    # ── collar: two flaps either side of the beard, under it ──────────────
    collar = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    dc = ImageDraw.Draw(collar)
    r0 = int(SIZE * 0.74)
    beard = np.where(dark[r0] > 0)[0]
    if len(beard):
        bl, br = int(beard[0]), int(beard[-1])
        for sign, edge in ((-1, bl), (1, br)):
            flap = [(edge - sign * 14, r0 - 34), (edge + sign * 92, r0 + 6),
                    (edge + sign * 62, r0 + 118), (edge - sign * 10, r0 + 64)]
            dc.polygon(S(flap), fill=rgb(pal["collar"]), outline=ink, width=line)
        # the beard stays in front of the collar
        mask = Image.fromarray(np.where(dark, 0, 255).astype(np.uint8)).resize(layer.size)
        collar.putalpha(Image.fromarray(np.minimum(np.array(collar.split()[3]), np.array(mask))))
        layer.alpha_composite(collar)

    # ── fedora ────────────────────────────────────────────────────────────
    tilt = -6
    by = top + w * 0.33                     # brim line sits at the hairline
    crown = [(cx - w * 0.47, by - w * 0.04), (cx - w * 0.43, by - w * 0.42),
             (cx - w * 0.36, by - w * 0.58), (cx - w * 0.12, by - w * 0.62),
             (cx, by - w * 0.56),           # the pinch on top
             (cx + w * 0.12, by - w * 0.62), (cx + w * 0.36, by - w * 0.58),
             (cx + w * 0.43, by - w * 0.42), (cx + w * 0.47, by - w * 0.04)]
    shine = [(cx - w * 0.40, by - w * 0.10), (cx - w * 0.37, by - w * 0.44),
             (cx - w * 0.30, by - w * 0.54), (cx - w * 0.24, by - w * 0.50),
             (cx - w * 0.28, by - w * 0.12)]
    band = [(cx - w * 0.465, by - w * 0.05), (cx - w * 0.455, by - w * 0.17),
            (cx + w * 0.455, by - w * 0.17), (cx + w * 0.465, by - w * 0.05)]
    brim = ellipse_pts(cx, by, w * 0.80, w * 0.12)
    brim_front = ellipse_pts(cx, by, w * 0.80, w * 0.12, 0, 180)

    d.polygon(S(rotate(brim, cx, by, tilt)), fill=rgb(pal["hat-brim"]), outline=ink, width=line)
    d.polygon(S(rotate(crown, cx, by, tilt)), fill=rgb(pal["hat"]), outline=ink, width=line)
    d.polygon(S(rotate(shine, cx, by, tilt)), fill=rgb(pal["hat-shine"]))
    d.polygon(S(rotate(band, cx, by, tilt)), fill=ink)
    # the front half of the brim passes in front of the crown's base
    d.line(S(rotate(brim_front, cx, by, tilt)), fill=ink, width=line, joint="curve")

    layer = layer.resize((SIZE, SIZE), Image.LANCZOS)
    # keep everything inside the disc
    alpha = np.minimum(np.array(layer.split()[3]), disc)
    layer.putalpha(Image.fromarray(alpha))
    im.alpha_composite(layer)
    return im


def main():
    pal = json.loads((ROOT / "dist" / "tokens.json").read_text(encoding="utf-8"))["avatar"]

    src = cv2.imread(str(SRC))
    x, y, side = CROP
    pad = cv2.copyMakeBorder(src, PAD, PAD, PAD, PAD, cv2.BORDER_CONSTANT, value=(255, 255, 255))
    img = cv2.resize(pad[y:y + side, x:x + side], (SIZE, SIZE), interpolation=cv2.INTER_AREA)

    # ── person mask: flood the white background in from the borders ─────
    hsv0 = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    whiteish = ((hsv0[..., 1] < 30) & (hsv0[..., 2] > 225)).astype(np.uint8) * 255
    flood = whiteish.copy()
    ff = np.zeros((SIZE + 2, SIZE + 2), np.uint8)
    for seed in [(0, 0), (SIZE - 1, 0), (0, SIZE // 2), (SIZE - 1, SIZE // 2)]:
        if flood[seed[1], seed[0]] == 255:
            cv2.floodFill(flood, ff, seed, 128)
    person = np.where(flood == 128, 0, 255).astype(np.uint8)
    person = cv2.morphologyEx(person, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    person = keep_big(person, 5000)
    person_soft = cv2.GaussianBlur(person, (5, 5), 0)

    # ── smooth hard so regions come out as clean flat shapes ──────────────
    smooth = img.copy()
    for _ in range(10):
        smooth = cv2.bilateralFilter(smooth, 9, 40, 40)
    hsv = cv2.cvtColor(smooth, cv2.COLOR_BGR2HSV)
    h, s, v = hsv[..., 0].astype(int), hsv[..., 1].astype(int), hsv[..., 2].astype(int)
    rows = np.arange(SIZE)[:, None]

    # tones: 0 ink · 1 wood strand · 2 skin shadow · 3 skin · 4 skin light · 5 shirt · 6 shirt shade · 7 eye white
    tone = np.full((SIZE, SIZE), 3, np.uint8)
    blue = (h >= 85) & (h <= 130) & (s > 40)
    # hair and beard: what counts as "dark" depends on where we are — lit hair
    # on top is brighter than shadowed skin, and the beard sits on a shirt whose
    # dark checks are dark *blue*
    thr = np.where(rows < SIZE * 0.37, 140, np.where(rows > SIZE * 0.52, 115, 80))
    dark = (v < thr) & (person > 0) & ~((h >= 80) & (h <= 135) & (s > 45))
    dark = cv2.morphologyEx(dark.astype(np.uint8) * 255, cv2.MORPH_CLOSE,
                            cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (11, 11)))
    # fill small holes (grey strands, light patches) inside hair and beard
    holes = keep_big(255 - dark, 1) & (person > 0).astype(np.uint8) * 255
    n, labels, stats, _ = cv2.connectedComponentsWithStats(holes)
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] < 3500:
            dark[labels == i] = 255
    dark = dark > 0
    shirt = (person > 0) & ~dark & ((blue & (rows > SIZE * 0.55)) | (rows > SIZE * 0.86))
    shirt = cv2.morphologyEx(shirt.astype(np.uint8) * 255, cv2.MORPH_CLOSE, np.ones((25, 25), np.uint8)) > 0
    skin = (person > 0) & ~dark & ~shirt

    # skin: three flat steps, split at this face's own brightness percentiles
    if skin.any():
        lo, hi = np.percentile(v[skin], [38, 86])
        tone[skin & (v < lo)] = 2
        tone[skin & (v >= lo) & (v < hi)] = 3
        tone[skin & (v >= hi)] = 4
        # eye whites: bright and colourless inside the face
        tone[skin & (s < 40) & (v > 170) & (rows > SIZE * 0.3) & (rows < SIZE * 0.45)] = 7
    tone[shirt] = 5  # one flat colour — the check pattern would only add noise
    tone[dark] = 0
    # wood strands: the lighter hairs inside hair and beard
    strands = dark & (cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) > 58)
    strands = keep_big(strands.astype(np.uint8) * 255, 8) > 0
    tone[strands] = 1
    for _ in range(2):
        tone = cv2.medianBlur(tone, 5)

    palette = [pal["ink"], pal["wood"], pal["skin-shadow"], pal["skin"], pal["skin-light"],
               pal["shirt"], pal["shirt-shade"], pal["cream"]]
    flat = np.stack([bgr(c) for c in palette])[tone]

    # ── features: eyes, brows, nose, mouth as clean ink lines ─────────────
    face = (slice(int(SIZE * 0.26), int(SIZE * 0.62)), slice(int(SIZE * 0.28), int(SIZE * 0.74)))
    gray = cv2.cvtColor(cv2.bilateralFilter(img, 9, 60, 60), cv2.COLOR_BGR2GRAY)
    lines = np.zeros((SIZE, SIZE), np.uint8)
    lines[face] = cv2.Canny(gray[face], 45, 120)
    lines = keep_big(lines, 30) & (skin | dark).astype(np.uint8) * 255
    lines = cv2.dilate(lines, np.ones((2, 2), np.uint8))
    flat[lines > 0] = bgr(pal["ink"])
    # outline around the whole figure and around the shirt
    for m, w in ((person, 7), (shirt.astype(np.uint8) * 255, 5)):
        edge = cv2.morphologyEx(m, cv2.MORPH_GRADIENT, np.ones((w, w), np.uint8))
        flat[(edge > 120) & (person > 0)] = bgr(pal["ink"])

    # ── compose on the yellow disc ────────────────────────────────────────
    disc = np.zeros((SIZE, SIZE), np.uint8)
    cv2.circle(disc, (SIZE // 2, SIZE // 2), SIZE // 2 - 2, 255, -1, lineType=cv2.LINE_AA)
    canvas = np.zeros((SIZE, SIZE, 3), np.uint8)
    canvas[:] = bgr(pal["disc"])
    a = (person_soft.astype(np.float32) / 255)[..., None]
    out = (flat * a + canvas * (1 - a)).astype(np.uint8)

    rgba = cv2.cvtColor(out, cv2.COLOR_BGR2RGBA)
    rgba[..., 3] = disc
    im = Image.fromarray(rgba)
    im = add_costume(im, person, dark, pal, disc)
    # the site uses the hand-made illustration (design/references/ruhan-avatar-illustration.jpg);
    # this generated version is written alongside, never over it
    for size, name in ((800, "ruhan-avatar-generated"), (256, "ruhan-avatar-generated-256")):
        small = im.resize((size, size), Image.LANCZOS)
        small.save(OUT / f"{name}.png", optimize=True)
        small.save(OUT / f"{name}.webp", quality=90, method=6)
    print("wrote src/static/images/ruhan-avatar-generated{,-256}.{png,webp}")


if __name__ == "__main__":
    main()
