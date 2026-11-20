import { servicesCopy } from '../data/content'
import { services } from '../data/services'
import type { RequestType } from '../types'
import { ArrowLeftIcon, BuyIcon, RentIcon, SellIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const serviceIcons = { buy: BuyIcon, sell: SellIcon, rent: RentIcon } as const

interface ServicesProps {
  onSelectRequest: (type: RequestType) => void
}

export function Services({ onSelectRequest }: ServicesProps) {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={servicesCopy.eyebrow}
            title={servicesCopy.title}
            titleId="services-title"
            intro={servicesCopy.intro}
          />
        </Reveal>

        <ul className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon]
            return (
              <li key={service.id}>
                <Reveal delay={index * 90}>
                  <article className="service-card">
                    <div className="service-card__head">
                      <span className="service-card__number">{service.number}</span>
                    </div>
                    <span className="icon-chip">
                      <Icon />
                    </span>
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__text">{service.description}</p>
                    <a
                      href="#contact"
                      className="text-link service-card__cta"
                      onClick={() => onSelectRequest(service.requestType)}
                    >
                      {service.cta}
                      <ArrowLeftIcon />
                    </a>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
