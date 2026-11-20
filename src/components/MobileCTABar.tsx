import { useEffect, useState } from 'react'
import { siteConfig } from '../config/site'
import { mobileBarCopy } from '../data/content'
import { ChatIcon, PhoneIcon } from './Icons'

// Shown on small screens only after the hero has scrolled out of view.
// Empty hrefs fall back to the contact section instead of linking nowhere.
export function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const phoneTarget = siteConfig.phoneHref.trim() || '#contact'
  const whatsappTarget = siteConfig.whatsappHref.trim() || '#contact'

  return (
    <>
      <div className="mobile-cta" data-visible={visible} inert={!visible}>
        <div className="mobile-cta__inner">
          <a href={phoneTarget} className="btn btn--ghost btn--block">
            <PhoneIcon />
            {mobileBarCopy.call}
          </a>
          <a href={whatsappTarget} className="btn btn--primary btn--block">
            <ChatIcon />
            {mobileBarCopy.whatsapp}
          </a>
        </div>
      </div>
      <div className="mobile-cta-spacer" data-visible={visible} aria-hidden="true" />
    </>
  )
}
