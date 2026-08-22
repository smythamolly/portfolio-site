import { useEffect, useRef, useState } from 'react'

/**
 * Adds `is-visible` once the element enters the viewport.
 *
 * Threshold is 0 on purpose: a tall section only ever shows a small fraction of
 * itself above the fold, so any higher value leaves it hidden on first paint.
 */
export function useReveal({ threshold = 0, once = true } = {}) {
  const ref = useRef(null)

  // Without observer support, show everything rather than hiding it forever.
  const supported = typeof IntersectionObserver !== 'undefined'
  const [visible, setVisible] = useState(!supported)

  useEffect(() => {
    const node = ref.current
    if (!node || !supported) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once, supported])

  return [ref, visible]
}
