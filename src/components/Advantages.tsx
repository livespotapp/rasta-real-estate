import { advantagesCopy } from '../data/content'
import { advantages } from '../data/advantages'
import { photos } from '../data/images'
import { ChatIcon, MapIcon, RouteIcon, SparkIcon, TargetIcon } from './Icons'
import { Photo } from './Photo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const advantageIcons = {
  map: MapIcon,
  route: RouteIcon,
  chat: ChatIcon,
  target: TargetIcon,
  spark: SparkIcon,
} as const

export function Advantages() {
  return (
    <section id="advantages" className="section advantages" aria-labelledby="advantages-title">
      <div className="container advantages__grid">
        <div className="advantages__intro">
          <Reveal>
            <SectionHeading
              eyebrow={advantagesCopy.eyebrow}
              title={advantagesCopy.title}
              titleId="advantages-title"
              intro={advantagesCopy.intro}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="media-frame advantages__media">
              <Photo photo={photos.advantages} sizes="(min-width: 1024px) 40vw, 100vw" widths={[640, 960]} />
            </div>
          </Reveal>
        </div>

        <ol className="path-list">
          {advantages.map((item, index) => {
            const Icon = advantageIcons[item.icon]
            return (
              <li key={item.id} className="path-item">
                <Reveal delay={index * 80}>
                  <div className="path-item__inner">
                    <span className="icon-chip path-item__chip">
                      <Icon />
                    </span>
                    <div>
                      <p className="path-item__number">{item.number}</p>
                      <h3 className="path-item__title">{item.title}</h3>
                      <p className="path-item__text">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
