import { useEffect, useRef, useState } from 'react'

const supportsIntersectionObserver = () => typeof window !== 'undefined' && 'IntersectionObserver' in window

export function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(() => !supportsIntersectionObserver())

  useEffect(() => {
    const node = ref.current
    if (!node || !supportsIntersectionObserver()) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
