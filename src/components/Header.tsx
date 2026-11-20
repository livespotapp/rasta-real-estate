import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/navigation'
import { uiCopy } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { Logo } from './Logo'
import { MenuIcon } from './Icons'
import { MobileMenu } from './MobileMenu'

const sectionIds = navLinks.map((link) => link.id)

export function Header() {
  const scrolled = useScrolled(24)
  const activeId = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef(false)

  useEffect(() => {
    if (!menuOpen && restoreFocusRef.current) {
      restoreFocusRef.current = false
      toggleRef.current?.focus()
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => {
    restoreFocusRef.current = true
    setMenuOpen(false)
  }, [])

  const closeAfterNavigation = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header id="top" className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div className="container site-header__inner">
          <a href="#top" className="site-header__logo" aria-label={uiCopy.logoLabel}>
            <Logo />
          </a>

          <nav className="site-nav" aria-label={uiCopy.mainNavLabel}>
            <ul className="site-nav__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="site-nav__link"
                    aria-current={activeId === link.id ? 'location' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="btn btn--primary btn--sm site-header__cta">
            {uiCopy.headerCta}
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={uiCopy.openMenu}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        activeId={activeId}
        onClose={closeMenu}
        onNavigate={closeAfterNavigation}
      />
    </>
  )
}
