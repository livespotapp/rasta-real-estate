interface SectionHeadingProps {
  eyebrow: string
  title: string
  titleId: string
  intro?: string
  titleSize?: 'default' | 'large'
}

export function SectionHeading({ eyebrow, title, titleId, intro, titleSize = 'default' }: SectionHeadingProps) {
  const titleClass = titleSize === 'large' ? 'section-title section-title--large' : 'section-title'

  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId} className={titleClass}>
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}
