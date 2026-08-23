import { useEffect } from 'react'

/**
 * Scrolls to the URL's hash target after the first render.
 *
 * The page is rendered by React, so on a fresh load the element the browser
 * wants to scroll to does not exist yet and the hash is silently ignored.
 * Coming back from a project page to /#projects has to land on the stack.
 */
export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash === '#') return

    let target
    try {
      target = document.querySelector(hash)
    } catch {
      return // Not a usable selector.
    }

    target?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])
}
