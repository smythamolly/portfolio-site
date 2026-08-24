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
 * The bulb, following the sketchbook composition: lying on its side, screw cap
 * to the right, the glass torn open in a jagged break at the left, a blue wash
 * pooled inside and blossoms on stems growing out through the neck.
 */
const GLASS =
  'M296 104C262 74 206 58 152 66C126 70 104 78 86 88L118 112L70 126L112 150L58 168L104 188L74 206C104 220 150 228 196 222C240 216 274 198 296 172Z'

const CAP =
  'M296 100C320 99 348 105 360 116C368 124 368 152 360 160C348 171 320 177 296 176Z'

export function BulbVase({ className = '', size = 340, showButterfly = true }) {
  const id = useId()

  return (
    <svg
      className={`motif motif--bulb ${className}`}
      width={size}
      height={size * 0.66}
      viewBox="0 0 420 276"
      aria-hidden="true"
      focusable="false"
    >
      <Washes id={id} />

      {/* Blue wash pooled inside the glass */}
      <path d={GLASS} fill={`url(#${id}-glass)`} filter={`url(#${id}-wc)`} opacity="0.8" />

      {/* Stems running back toward the neck */}
      <g className="motif__stem">
        <path d="M300 138C268 132 232 122 196 108M300 140C266 146 226 156 190 176M300 139C272 142 244 146 214 146" />
        <path d="M244 128 236 116M262 132 256 120M232 152 224 162M258 148 252 158" />
      </g>

      {/* Leaves and blossoms inside the glass */}
      <g filter={`url(#${id}-wc)`}>
        <ellipse cx="236" cy="116" rx="14" ry="7" fill={`url(#${id}-leaf)`} transform="rotate(-32 236 116)" />
        <ellipse cx="224" cy="164" rx="13" ry="6.5" fill={`url(#${id}-leaf)`} transform="rotate(28 224 164)" />
        <ellipse cx="266" cy="120" rx="11" ry="5.5" fill={`url(#${id}-leaf)`} transform="rotate(-24 266 120)" />
        {[
          [188, 104, 1.15],
          [182, 180, 1],
          [206, 146, 0.82],
        ].map(([x, y, scale]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale}) translate(-20 -20)`}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <path key={angle} d={PETAL} fill={`url(#${id}-petal)`} transform={`rotate(${angle} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="4.2" fill="var(--pollen)" />
          </g>
        ))}
      </g>

      {/* Loose petals drifting inside, as on the page */}
      <g className="motif__petals" filter={`url(#${id}-wc)`}>
        <circle cx="128" cy="104" r="4" />
        <circle cx="150" cy="140" r="3" />
        <circle cx="120" cy="176" r="3.4" />
        <circle cx="164" cy="196" r="2.6" />
      </g>

      {/* Ink line work over the paint */}
      <g className="motif__ink">
        <path d={GLASS} />
        <path d="M112 208C150 218 196 220 236 212" className="motif__highlight" />
        <path d="M126 196C160 204 200 206 232 200" className="motif__highlight" />

        {/* Screw cap and its threads */}
        <path d={CAP} />
        <path d="M296 101V176" />
        <path d="M308 101C312 119 312 158 308 175M321 104C325 120 325 156 321 172M334 109C338 123 338 154 334 168M346 116C350 127 350 150 346 161M356 125C359 131 359 146 356 152" />
        <path d="M366 130C380 125 391 132 391 138C391 145 380 152 366 147" />

        <ellipse cx="236" cy="116" rx="14" ry="7" transform="rotate(-32 236 116)" />
        <ellipse cx="224" cy="164" rx="13" ry="6.5" transform="rotate(28 224 164)" />
        <ellipse cx="266" cy="120" rx="11" ry="5.5" transform="rotate(-24 266 120)" />

        {[
          [188, 104, 1.15],
          [182, 180, 1],
          [206, 146, 0.82],
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
        <g transform="translate(292 26) scale(0.72)">
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
          <g className="motif__dots">
            <circle cx="20" cy="9" r="1.9" />
            <circle cx="40" cy="9" r="1.9" />
          </g>
        </g>
      )}
    </svg>
  )
}

/** The same bulb, small enough to sit beside a heading. */
export function BulbSmall({ className = '', size = 90 }) {
  return <BulbVase className={`motif--bulb-small ${className}`} size={size} showButterfly={false} />
}
