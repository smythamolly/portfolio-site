import { useId } from 'react'
import './motifs.css'

/**
 * Illustrations drawn from Molly's sketchbook page: light bulbs used as vases,
 * five-petal blossoms, leaves and butterflies. Ink line work over watercolour
 * washes, with the washes pushed through a turbulence filter so their edges
 * bleed like paint rather than sitting flat.
 *
 * Filter and gradient ids are per-instance (useId) so several motifs can share
 * a page without their defs colliding.
 */

function Washes({ id }) {
  return (
    <defs>
      <filter id={`${id}-wc`} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.028" numOctaves="3" seed="6" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        <feGaussianBlur stdDeviation="0.7" />
      </filter>

      <radialGradient id={`${id}-glass`} cx="38%" cy="30%" r="78%">
        <stop offset="0%" stopColor="#e4f3fb" />
        <stop offset="55%" stopColor="#a8d6ec" />
        <stop offset="100%" stopColor="#68abd4" />
      </radialGradient>

      <radialGradient id={`${id}-petal`} cx="50%" cy="78%" r="72%">
        <stop offset="0%" stopColor="#ffd3e2" />
        <stop offset="60%" stopColor="#f486ad" />
        <stop offset="100%" stopColor="#e2568a" />
      </radialGradient>

      <radialGradient id={`${id}-leaf`} cx="30%" cy="25%" r="85%">
        <stop offset="0%" stopColor="#cdecd9" />
        <stop offset="60%" stopColor="#7fcda6" />
        <stop offset="100%" stopColor="#42a97b" />
      </radialGradient>

      <radialGradient id={`${id}-wing`} cx="40%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#efe4f8" />
        <stop offset="55%" stopColor="#c3a9de" />
        <stop offset="100%" stopColor="#9878c2" />
      </radialGradient>
    </defs>
  )
}

const PETAL = 'M20 20C12.4 15 10.4 5.6 20 2.4C29.6 5.6 27.6 15 20 20Z'

/** A five-petal blossom, as drawn on the page. */
export function Blossom({ className = '', size = 34, tone = 'pink' }) {
  const id = useId()
  const fill = tone === 'pink' ? `url(#${id}-petal)` : `url(#${id}-wing)`

  return (
    <svg
      className={`motif motif--blossom ${className}`}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <Washes id={id} />
      <g filter={`url(#${id}-wc)`}>
        {[0, 72, 144, 216, 288].map((angle) => (
          <path key={angle} d={PETAL} fill={fill} transform={`rotate(${angle} 20 20)`} />
        ))}
        <circle cx="20" cy="20" r="4.2" fill="var(--pollen)" />
      </g>

      <g className="motif__ink">
        {[0, 72, 144, 216, 288].map((angle) => (
          <path key={angle} d={PETAL} transform={`rotate(${angle} 20 20)`} />
        ))}
        <circle cx="20" cy="20" r="4.2" />
      </g>
    </svg>
  )
}

/** A leaf with its midrib and side veins. */
export function Leaf({ className = '', size = 46, rotate = 0 }) {
  const id = useId()

  return (
    <svg
      className={`motif motif--leaf ${className}`}
      width={size}
      height={size * 0.56}
      viewBox="0 0 64 36"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Washes id={id} />
      <path
        d="M3 19C14 5 42 1 61 15C44 33 15 34 3 19Z"
        fill={`url(#${id}-leaf)`}
        filter={`url(#${id}-wc)`}
      />
      <g className="motif__ink">
        <path d="M3 19C14 5 42 1 61 15C44 33 15 34 3 19Z" />
        <path d="M5 19C20 17 44 16 60 15" />
        <path d="M17 11.5 22 18M28 9 32 17M39 9 42 17M49 11 51 17M18 26 23 20M30 28 33 20M41 26 43 19" />
      </g>
    </svg>
  )
}

/** A butterfly with dotted wings, as on the right of the page. */
export function Butterfly({ className = '', size = 46, tone = 'violet' }) {
  const id = useId()
  const fill = tone === 'violet' ? `url(#${id}-wing)` : `url(#${id}-petal)`

  const wings = (
    <>
      <path d="M30 26C22 8 12 2 6 8C0 14 6 28 18 30C24 31 28 29 30 26Z" />
      <path d="M30 26C38 8 48 2 54 8C60 14 54 28 42 30C36 31 32 29 30 26Z" />
      <path d="M30 27C26 36 20 43 14 41C9 39 12 31 20 29C25 27.8 28 27 30 27Z" />
      <path d="M30 27C34 36 40 43 46 41C51 39 48 31 40 29C35 27.8 32 27 30 27Z" />
    </>
  )

  return (
    <svg
      className={`motif motif--butterfly ${className}`}
      width={size}
      height={size * 0.82}
      viewBox="0 0 60 49"
      aria-hidden="true"
      focusable="false"
    >
      <Washes id={id} />
      <g fill={fill} filter={`url(#${id}-wc)`}>
        {wings}
      </g>

      <g className="motif__ink">
        {wings}
        <path d="M30 20C31.6 23 31.6 32 30 36C28.4 32 28.4 23 30 20Z" />
        <path d="M30 21C27 15 24 11 20 9M30 21C33 15 36 11 40 9" />
      </g>

      <g className="motif__dots">
        <circle cx="14" cy="14" r="1.5" />
        <circle cx="21" cy="21" r="1.5" />
        <circle cx="46" cy="14" r="1.5" />
        <circle cx="39" cy="21" r="1.5" />
        <circle cx="20" cy="9" r="1.9" />
        <circle cx="40" cy="9" r="1.9" />
      </g>
    </svg>
  )
}

/** A stem carrying small blossoms and leaves. */
export function Sprig({ className = '', size = 90, flip = false }) {
  const id = useId()

  return (
    <svg
      className={`motif motif--sprig ${className}`}
      width={size}
      height={size * 0.62}
      viewBox="0 0 120 74"
      aria-hidden="true"
      focusable="false"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <Washes id={id} />

      <g className="motif__stem">
        <path d="M4 66C28 62 52 50 74 30M30 60C28 52 24 47 18 44M52 48C52 40 49 34 44 30" />
      </g>

      <g filter={`url(#${id}-wc)`}>
        <ellipse cx="16" cy="42" rx="11" ry="6" fill={`url(#${id}-leaf)`} transform="rotate(-28 16 42)" />
        <ellipse cx="43" cy="28" rx="10" ry="5.5" fill={`url(#${id}-leaf)`} transform="rotate(-34 43 28)" />
        {[
          [78, 24, 1],
          [96, 16, 0.78],
          [66, 40, 0.66],
        ].map(([x, y, scale]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) translate(-20 -20)`}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <path key={angle} d={PETAL} fill={`url(#${id}-petal)`} transform={`rotate(${angle} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="4" fill="var(--pollen)" />
          </g>
        ))}
      </g>

      <g className="motif__ink">
        <ellipse cx="16" cy="42" rx="11" ry="6" transform="rotate(-28 16 42)" />
        <ellipse cx="43" cy="28" rx="10" ry="5.5" transform="rotate(-34 43 28)" />
        {[
          [78, 24, 1],
          [96, 16, 0.78],
          [66, 40, 0.66],
        ].map(([x, y, scale]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) translate(-20 -20)`}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <path key={angle} d={PETAL} transform={`rotate(${angle} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="4" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/*
 * The bulb itself: glass body broken open at the top, threaded screw cap below,
 * blossoms and leaves growing out of the opening.
 */
const GLASS =
  'M70 214C53 196 39 175 39 149C39 118 55 92 78 81L86 96L96 74L107 92L118 72L129 90L140 78C155 92 163 119 163 149C163 175 149 196 132 214Z'

const CAP = 'M72 214H130L127 236H75Z'

export function BulbVase({ className = '', size = 300, showButterfly = true }) {
  const id = useId()

  return (
    <svg
      className={`motif motif--bulb ${className}`}
      width={size}
      height={size * 1.12}
      viewBox="0 0 200 224"
      aria-hidden="true"
      focusable="false"
    >
      <Washes id={id} />

      {/* Glass wash */}
      <path d={GLASS} fill={`url(#${id}-glass)`} filter={`url(#${id}-wc)`} opacity="0.85" />

      {/* Stems rising out of the broken opening */}
      <g className="motif__stem">
        <path d="M101 150C99 120 92 96 74 74M101 150C104 122 112 100 132 80M101 152C101 132 101 112 101 84" />
      </g>

      {/* Flowers and leaves */}
      <g filter={`url(#${id}-wc)`}>
        <ellipse cx="86" cy="104" rx="13" ry="7" fill={`url(#${id}-leaf)`} transform="rotate(-38 86 104)" />
        <ellipse cx="119" cy="112" rx="12" ry="6.5" fill={`url(#${id}-leaf)`} transform="rotate(34 119 112)" />
        {[
          [72, 66, 1.05],
          [134, 72, 0.88],
          [101, 74, 0.74],
        ].map(([x, y, scale]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) translate(-20 -20)`}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <path key={angle} d={PETAL} fill={`url(#${id}-petal)`} transform={`rotate(${angle} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="4.2" fill="var(--pollen)" />
          </g>
        ))}
      </g>

      {/* Ink line work over the top */}
      <g className="motif__ink">
        <path d={GLASS} />
        <path d="M56 150C56 172 64 190 74 202" className="motif__highlight" />
        <path d="M146 152C146 170 140 186 132 198" className="motif__highlight" />

        <path d={CAP} />
        <path d="M74 220H128M75.5 226H126.5M77 232H125" />
        <path d="M77 236C82 248 90 254 101 254C112 254 120 248 125 236" />

        <ellipse cx="86" cy="104" rx="13" ry="7" transform="rotate(-38 86 104)" />
        <ellipse cx="119" cy="112" rx="12" ry="6.5" transform="rotate(34 119 112)" />

        {[
          [72, 66, 1.05],
          [134, 72, 0.88],
          [101, 74, 0.74],
        ].map(([x, y, scale]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) translate(-20 -20)`}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <path key={angle} d={PETAL} transform={`rotate(${angle} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="4.2" />
          </g>
        ))}
      </g>

      {showButterfly && (
        <g transform="translate(150 118) scale(0.62)">
          <g fill={`url(#${id}-wing)`} filter={`url(#${id}-wc)`}>
            <path d="M30 26C22 8 12 2 6 8C0 14 6 28 18 30C24 31 28 29 30 26Z" />
            <path d="M30 26C38 8 48 2 54 8C60 14 54 28 42 30C36 31 32 29 30 26Z" />
            <path d="M30 27C26 36 20 43 14 41C9 39 12 31 20 29C25 27.8 28 27 30 27Z" />
            <path d="M30 27C34 36 40 43 46 41C51 39 48 31 40 29C35 27.8 32 27 30 27Z" />
          </g>
          <g className="motif__ink">
            <path d="M30 26C22 8 12 2 6 8C0 14 6 28 18 30C24 31 28 29 30 26Z" />
            <path d="M30 26C38 8 48 2 54 8C60 14 54 28 42 30C36 31 32 29 30 26Z" />
            <path d="M30 27C26 36 20 43 14 41C9 39 12 31 20 29C25 27.8 28 27 30 27Z" />
            <path d="M30 27C34 36 40 43 46 41C51 39 48 31 40 29C35 27.8 32 27 30 27Z" />
            <path d="M30 20C31.6 23 31.6 32 30 36C28.4 32 28.4 23 30 20Z" />
            <path d="M30 21C27 15 24 11 20 9M30 21C33 15 36 11 40 9" />
          </g>
        </g>
      )}
    </svg>
  )
}

/** The same bulb, small enough to sit beside a heading. */
export function BulbSmall({ className = '', size = 76 }) {
  return <BulbVase className={`motif--bulb-small ${className}`} size={size} showButterfly={false} />
}
