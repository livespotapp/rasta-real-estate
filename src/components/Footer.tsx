import { navLinks } from '../data/navigation'
import { contactCopy, footerCopy, uiCopy } from '../data/content'
import { siteConfig } from '../config/site'
import { getPersianYear } from '../lib/persian'
import { ContactMethod } from './ContactMethod'
import { Logo } from './Logo'

export function Footer() {
  const year = getPersianYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand rail">
          <Logo />
          <p className="site-footer__text">{footerCopy.description}</p>
        </div>

        <nav aria-label={uiCopy.quickLinksLabel} className="site-footer__nav">
          <p className="site-footer__title">{uiCopy.quickLinksLabel}</p>
          <ul className="site-footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <p className="site-footer__title">{footerCopy.contactTitle}</p>
          <ContactMethod
            label={contactCopy.phoneLabel}
            display={siteConfig.phoneDisplay}
            href={siteConfig.phoneHref}
            compact
          />
          <ContactMethod
            label={contactCopy.whatsappLabel}
            display={siteConfig.whatsappDisplay}
            href={siteConfig.whatsappHref}
            compact
          />
        </div>
      </div>

      <div className="container">
        <div className="site-footer__bottom">
          <p>
            © {year} {footerCopy.rights}
          </p>
          <a href="#top" className="site-footer__top">
            {footerCopy.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
