"""
Lifts a drawing off its painted backdrop.

The pages are painted with a pink wash around the objects, so the backdrop
cannot be keyed on colour — the blossoms are pink too. Instead we find the ink
line work, morphologically close the small gaps a pen leaves, fill the enclosed
area to get a silhouette, and keep the largest shape.

    python3 scripts/cutout_artwork.py <source> <out.png> x0 y0 x1 y1 [--all] [--ink 0.72]
"""
import sys

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

args = [a for a in sys.argv[1:] if not a.startswith("--")]
flags = [a for a in sys.argv[1:] if a.startswith("--")]

src, out = args[0], args[1]
x0, y0, x1, y1 = (int(v) for v in args[2:6])

ink_ratio = 0.72
for flag in flags:
    if flag.startswith("--ink"):
        ink_ratio = float(flag.split("=")[1])

img = Image.open(src).convert("RGB").crop((x0, y0, x1, y1))
rgb = np.asarray(img).astype(np.float32)
lum = rgb.mean(axis=2)

# Ink, measured against the paper rather than a fixed value so it survives the
# uneven lighting of a phone photo.
paper = np.percentile(lum, 92)
ink = lum < paper * ink_ratio

# Close the gaps a pen leaves, then fill to get a solid silhouette.
silhouette = ndimage.binary_fill_holes(ndimage.binary_closing(ink, structure=np.ones((13, 13))))

if "--all" not in flags:
    labels, count = ndimage.label(silhouette)
    if count > 1:
        sizes = ndimage.sum(silhouette, labels, range(1, count + 1))
        silhouette = labels == (int(np.argmax(sizes)) + 1)

# Pull the edge in to drop the pink halo against the outline, then soften it.
alpha = (ndimage.binary_erosion(silhouette, iterations=3) * 255).astype(np.uint8)
alpha_img = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(1.0))

# White-balance against the paper so the washes keep their colour, then lift the
# saturation the phone camera flattened.
paper_rgb = np.percentile(rgb.reshape(-1, 3), 96, axis=0)
balanced = np.clip(rgb / np.maximum(paper_rgb, 1) * 255, 0, 255)
grey = balanced.mean(axis=2, keepdims=True)
balanced = np.clip(grey + (balanced - grey) * 1.45, 0, 255).astype(np.uint8)

result = Image.fromarray(balanced).convert("RGBA")
result.putalpha(alpha_img)
result = result.crop(result.getbbox())
result.save(out)
print(f"{out}  {result.width}x{result.height}")
