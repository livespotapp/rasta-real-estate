import type { CSSProperties } from 'react'
import { heroCopy } from '../data/content'
import { photos } from '../data/images'
import { ArrowLeftIcon, CheckIcon, PinIcon } from './Icons'
import { Photo } from './Photo'

function enter(ms: number): CSSProperties {
  return { '--delay': `${ms}ms` } as CSSProperties
}

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__enter" style={enter(0)}>
            {heroCopy.eyebrow}
          </p>

          <h1 id="hero-title" className="hero__title hero__enter" style={enter(120)}>
            {heroCopy.titleStart} <span className="hero__highlight">{heroCopy.titleHighlight}</span> {heroCopy.titleEnd}
          </h1>

          <p className="hero__lead hero__enter" style={enter(240)}>
            {heroCopy.lead}
          </p>

          <div className="hero__actions hero__enter" style={enter(360)}>
            <a href="#contact" className="btn btn--primary btn--lg">
              {heroCopy.primaryCta}
            </a>
            <a href="#properties" className="btn btn--ghost btn--lg">
              {heroCopy.secondaryCta}
              <ArrowLeftIcon />
            </a>
          </div>

          <ul className="hero__principles hero__enter" style={enter(480)}>
            {heroCopy.principles.map((principle) => (
              <li key={principle}>
                <CheckIcon />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__offset" aria-hidden="true" />
          <div className="hero__frame hero__frame--main">
            <Photo
              photo={photos.heroExterior}
              sizes="(min-width: 1024px) 44vw, 100vw"
              widths={[640, 960, 1280]}
              priority
            />
            <span className="hero__badge">
              <PinIcon />
              {heroCopy.badge}
            </span>
          </div>
          <div className="hero__inset">
            <Photo photo={photos.heroInterior} sizes="(min-width: 1024px) 22vw, 40vw" widths={[480, 640]} />
          </div>
        </div>
      </div>
    </section>
  )
}
