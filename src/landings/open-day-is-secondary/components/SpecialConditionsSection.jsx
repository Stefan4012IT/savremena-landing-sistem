import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="open-day-is-secondary-landing-section open-day-is-secondary-special-conditions">
      <div className="open-day-is-secondary-landing-container open-day-is-secondary-special-conditions__grid">
        <div className="open-day-is-secondary-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="open-day-is-secondary-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="open-day-is-secondary-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="open-day-is-secondary-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="open-day-is-secondary-special-conditions__visual">
          {specialConditions.imageUrl ? (
            <img src={specialConditions.imageUrl} alt="" />
          ) : (
            <span>{specialConditions.imagePlaceholder}</span>
          )}
        </div>
      </div>
    </section>
  )
}
