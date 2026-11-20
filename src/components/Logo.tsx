import { siteConfig } from '../config/site'

export function Logo() {
  return (
    <span className="logo">
      <span className="logo__word">
        <span className="logo__mark" aria-hidden="true" />
        {siteConfig.brandName}
      </span>
      <span className="logo__latin" dir="ltr">
        {siteConfig.brandLatin}
      </span>
    </span>
  )
}
