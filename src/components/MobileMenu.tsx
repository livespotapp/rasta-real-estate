import { useEffect, useRef } from 'react'
import { navLinks } from '../data/navigation'
import { uiCopy } from '../data/content'
import { CloseIcon } from './Icons'
import { Logo } from './Logo'

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])'

interface MobileMenuProps {
  open: boolean
  activeId: string | null
  onClose: () => void
  onNavigate: () => void
}

export function MobileMenu({ open, activeId, onClose, onNavigate }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const panelNode = panelRef.current
    if (!panelNode) return
    const panel: HTMLDivElement = panelNode

    const getFocusable = () => Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
    getFocusable()[0]?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const items = getFocusable()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !panel.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    function handleFocusIn(event: FocusEvent) {
      if (event.target instanceof Node && !panel.contains(event.target)) {
        getFocusable()[0]?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [open, onClose])

  return (
    <div className="mobile-menu" data-open={open}>
      <div className="mobile-menu__backdrop" aria-hidden="true" onClick={onClose} />
      <div
        id="mobile-menu"
        ref={panelRef}
        className="mobile-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label={uiCopy.menuLabel}
      >
        <div className="mobile-menu__top">
          <Logo />
          <button type="button" className="menu-toggle" aria-label={uiCopy.closeMenu} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <nav aria-label={uiCopy.mobileNavLabel}>
          <ul className="mobile-menu__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="mobile-menu__link"
                  aria-current={activeId === link.id ? 'location' : undefined}
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--lg btn--block" onClick={onNavigate}>
          {uiCopy.headerCta}
        </a>
      </div>
    </div>
  )
}
