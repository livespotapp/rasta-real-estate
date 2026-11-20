import { contactCopy } from '../data/content'
import { siteConfig } from '../config/site'
import type { RequestType } from '../types'
import { ChatIcon, ClockIcon, PhoneIcon } from './Icons'
import { ContactForm } from './ContactForm'
import { ContactMethod } from './ContactMethod'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface ContactProps {
  requestType: RequestType | ''
  onRequestTypeChange: (value: RequestType | '') => void
}

export function Contact({ requestType, onRequestTypeChange }: ContactProps) {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <Reveal>
            <SectionHeading
              eyebrow={contactCopy.eyebrow}
              title={contactCopy.title}
              titleId="contact-title"
              intro={contactCopy.intro}
            />
          </Reveal>

          <Reveal delay={120} className="contact-methods">
            <ContactMethod
              label={contactCopy.phoneLabel}
              display={siteConfig.phoneDisplay}
              href={siteConfig.phoneHref}
              icon={<PhoneIcon />}
              showPendingNote
            />
            <ContactMethod
              label={contactCopy.whatsappLabel}
              display={siteConfig.whatsappDisplay}
              href={siteConfig.whatsappHref}
              icon={<ChatIcon />}
              showPendingNote
            />
            <ContactMethod
              label={contactCopy.hoursLabel}
              display={siteConfig.workingHours}
              icon={<ClockIcon />}
              ltr={false}
            />
          </Reveal>
        </div>

        <Reveal delay={160}>
          <ContactForm requestType={requestType} onRequestTypeChange={onRequestTypeChange} />
        </Reveal>
      </div>
    </section>
  )
}
