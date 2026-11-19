import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="black-friday-is-landing-section black-friday-is-special-conditions">
      <div className="black-friday-is-landing-container black-friday-is-special-conditions__grid">
        <div className="black-friday-is-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="black-friday-is-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="black-friday-is-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="black-friday-is-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="black-friday-is-special-conditions__visual">
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
