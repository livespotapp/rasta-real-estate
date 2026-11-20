import type { ReactNode } from 'react'
import { contactCopy } from '../data/content'

interface ContactMethodProps {
  label: string
  display: string
  href?: string
  icon?: ReactNode
  ltr?: boolean
  showPendingNote?: boolean
  compact?: boolean
}

// Renders a real link only when an href is configured. Otherwise it stays a plain, non-interactive element.
export function ContactMethod({
  label,
  display,
  href = '',
  icon,
  ltr = true,
  showPendingNote = false,
  compact = false,
}: ContactMethodProps) {
  const isLinked = href.trim().length > 0
  const classes = [
    'contact-method',
    compact ? 'contact-method--compact' : '',
    isLinked ? 'contact-method--linked' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <span className="contact-method__icon">{icon}</span>}
      <span className="contact-method__text">
        <span className="contact-method__label">{label}</span>
        <span className="contact-method__value" dir={ltr ? 'ltr' : undefined}>
          {display}
        </span>
        {showPendingNote && !isLinked && <span className="contact-method__note">{contactCopy.pendingNote}</span>}
      </span>
    </>
  )

  if (isLinked) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return <div className={classes}>{content}</div>
}
