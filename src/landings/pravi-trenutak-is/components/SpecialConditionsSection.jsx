import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="pravi-trenutak-is-landing-section pravi-trenutak-is-special-conditions">
      <div className="pravi-trenutak-is-landing-container pravi-trenutak-is-special-conditions__grid">
        <div className="pravi-trenutak-is-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="pravi-trenutak-is-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="pravi-trenutak-is-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="pravi-trenutak-is-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="pravi-trenutak-is-special-conditions__visual">
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
