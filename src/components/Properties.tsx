import { propertiesCopy } from '../data/content'
import { demoProperties } from '../data/properties'
import { ArrowLeftIcon, InfoIcon } from './Icons'
import { PropertyCard } from './PropertyCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Properties() {
  return (
    <section id="properties" className="section properties" aria-labelledby="properties-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={propertiesCopy.eyebrow}
            title={propertiesCopy.title}
            titleId="properties-title"
          />
          <p className="properties-notice">
            <InfoIcon />
            <span>{propertiesCopy.notice}</span>
          </p>
        </Reveal>

        <div className="property-track" role="region" aria-label={propertiesCopy.title} tabIndex={0}>
          <ul className="property-list">
            {demoProperties.map((property, index) => (
              <li key={property.id} className="property-list__item">
                <Reveal delay={index * 90}>
                  <PropertyCard property={property} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <p className="swipe-hint">
          <ArrowLeftIcon />
          <span>{propertiesCopy.swipeHint}</span>
        </p>
      </div>
    </section>
  )
}
