import { propertiesCopy } from '../data/content'
import type { DemoProperty } from '../data/properties'
import { ArrowLeftIcon } from './Icons'
import { Photo } from './Photo'

interface PropertyCardProps {
  property: DemoProperty
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className={`property-card property-card--${property.layout}`}>
      <div className="property-card__media">
        <Photo
          photo={property.photo}
          sizes="(min-width: 900px) 46vw, 80vw"
          widths={[480, 800]}
        />
        <span className="property-card__badge">{propertiesCopy.badge}</span>
      </div>

      <div className="property-card__body">
        <h3 className="property-card__title">{property.title}</h3>
        <p className="property-card__text">{property.description}</p>

        <ul className="property-card__meta">
          {property.attributes.map((attribute) => (
            <li key={attribute.label}>
              <span>{attribute.label}</span>
              <strong>{attribute.value}</strong>
            </li>
          ))}
        </ul>
        <p className="property-card__tag">{propertiesCopy.dataTag}</p>

        <a href="#contact" className="text-link">
          {propertiesCopy.cta}
          <ArrowLeftIcon />
        </a>
      </div>
    </article>
  )
}
