/**
 * Repeated arches with a stained-glass grid — the two motifs carried through
 * the style board and into the air purifier project.
 */
export default function ArchMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 179V72a52 52 0 0 1 104 0v107" stroke="currentColor" strokeWidth="1.1" />
      <path d="M44 179V72a16 16 0 0 1 32 0v107" stroke="currentColor" strokeWidth="1.1" />
      <path d="M128 179V56a52 52 0 0 1 104 0v123" stroke="currentColor" strokeWidth="1.1" />

      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M148 179V60a32 32 0 0 1 64 0v119" />
        <path d="M148 96h64" />
        <path d="M148 130h64" />
        <path d="M180 96V60" />
        <path d="M164 130V96" />
        <path d="M196 179v-49" />
      </g>
    </svg>
  )
}
