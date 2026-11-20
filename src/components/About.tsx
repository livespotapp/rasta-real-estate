import { aboutCopy } from '../data/content'
import { photos } from '../data/images'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__copy rail">
          <SectionHeading
            eyebrow={aboutCopy.eyebrow}
            title={aboutCopy.title}
            titleId="about-title"
            titleSize="large"
          />
          <div className="about__text">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="about__media">
          <figure className="about__figure">
            <div className="media-frame media-frame--tall">
              <Photo photo={photos.about} sizes="(min-width: 1024px) 40vw, 100vw" widths={[640, 960]} />
            </div>
            <figcaption className="about__caption">{aboutCopy.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
