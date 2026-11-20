import { useEffect } from 'react'

// Moves keyboard focus to the target of an in-page link so the next Tab continues from that section.
export function useHashFocus() {
  useEffect(() => {
    function focusHashTarget() {
      const id = decodeURIComponent(window.location.hash.slice(1))
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }
    focusHashTarget()
    window.addEventListener('hashchange', focusHashTarget)
    return () => window.removeEventListener('hashchange', focusHashTarget)
  }, [])
}
