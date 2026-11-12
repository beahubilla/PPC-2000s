#!/usr/bin/env python3
"""
Shrink the museum's images in place, keeping every file name (so no code or
data changes are needed).

  python3 tools/optimize_images.py --dry-run     # show what would change
  python3 tools/optimize_images.py               # resize + recompress
  python3 tools/optimize_images.py --quantize    # also palette-reduce opaque PNG photos (much smaller)

What it does
  * Downscales anything larger than --max pixels on its longest side
    (default 1400, plenty for a phone or a 1440px desktop). Never upscales.
  * JPEG: re-saves progressive at --quality (default 82).
  * PNG: lossless optimize. With --quantize, PNG photos without transparency are
    reduced to a 256-colour palette (usually 60-80% smaller, small visible change).
  * Only writes a file when the result is at least 5% smaller.
  * Leaves already-small files (< --skip-below KB, default 150) alone.

Requires Pillow (pip install pillow). Works on a git checkout, so you can
review the result with `git diff --stat` and undo with `git checkout images/`.
"""
import argparse
import io
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required: pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"


def has_alpha(img):
    return img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)


def encode(img, fmt, quality, quantize):
    buf = io.BytesIO()
    if fmt == "JPEG":
        img.convert("RGB").save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
    else:
        out = img
        if quantize and not has_alpha(img):
            out = img.convert("RGB").quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
        out.save(buf, "PNG", optimize=True)
    return buf.getvalue()


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--max", type=int, default=1400, help="longest side in px (default 1400)")
    ap.add_argument("--quality", type=int, default=82, help="JPEG quality (default 82)")
    ap.add_argument("--quantize", action="store_true", help="palette-reduce opaque PNGs")
    ap.add_argument("--skip-below", type=int, default=150, help="skip files under this many KB (default 150)")
    ap.add_argument("--dry-run", action="store_true", help="report only, write nothing")
    args = ap.parse_args()

    before_total = after_total = changed = 0
    for path in sorted(IMAGES.iterdir()):
        ext = path.suffix.lower()
        if ext not in (".png", ".jpg", ".jpeg"):
            continue
        size = path.stat().st_size
        before_total += size
        if size < args.skip_below * 1024:
            after_total += size
            continue
        with Image.open(path) as img:
            img.load()
            if max(img.size) > args.max:
                scale = args.max / max(img.size)
                img = img.resize((round(img.width * scale), round(img.height * scale)), Image.Resampling.LANCZOS)
            data = encode(img, "JPEG" if ext in (".jpg", ".jpeg") else "PNG", args.quality, args.quantize)
        if len(data) <= size * 0.95:
            changed += 1
            after_total += len(data)
            print(f"{path.name:32s} {size / 1024:7.0f} KB -> {len(data) / 1024:7.0f} KB")
            if not args.dry_run:
                path.write_bytes(data)
        else:
            after_total += size

    saved = before_total - after_total
    print(f"\n{changed} files {'would change' if args.dry_run else 'changed'}; "
          f"{before_total / 1e6:.1f} MB -> {after_total / 1e6:.1f} MB (saves {saved / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
