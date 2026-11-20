import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties
  const classes = ['reveal', inView ? 'is-visible' : '', className ?? ''].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
