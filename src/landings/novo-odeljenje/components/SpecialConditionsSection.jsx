import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="landing-section special-conditions">
      <div className="landing-container special-conditions__grid">
        <div className="special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="special-conditions__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="special-conditions__visual">
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
