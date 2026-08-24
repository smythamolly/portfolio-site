import { img } from '../../data/site'
import './art.css'

/**
 * Molly's own painted artwork, cut off the sketchbook backdrop.
 *
 * Regenerate any of these from the originals in art-source/ with:
 *   python3 scripts/cutout_artwork.py <source> <out.png> x0 y0 x1 y1
 */
const ART = {
  bulb: { src: 'art/bulb.webp', w: 760, h: 1304 },
  flower: { src: 'art/flower.webp', w: 520, h: 425 },
  butterfly: { src: 'art/butterfly.webp', w: 440, h: 440 },
}

export default function Art({ name, className = '', width, eager = false }) {
  const art = ART[name]
  if (!art) return null

  return (
    <img
      className={`art art--${name} ${className}`}
      src={img(art.src)}
      width={art.w}
      height={art.h}
      style={width ? { width } : undefined}
      alt=""
      aria-hidden="true"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
