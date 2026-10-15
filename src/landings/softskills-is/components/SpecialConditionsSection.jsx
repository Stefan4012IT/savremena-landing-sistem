import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="softskills-is-landing-section softskills-is-special-conditions">
      <div className="softskills-is-landing-container softskills-is-special-conditions__grid">
        <div className="softskills-is-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="softskills-is-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="softskills-is-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="softskills-is-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="softskills-is-special-conditions__visual">
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
