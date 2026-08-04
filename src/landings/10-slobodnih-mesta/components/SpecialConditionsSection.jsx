import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-special-conditions">
      <div className="deset-slobodnih-mesta-landing-container deset-slobodnih-mesta-special-conditions__grid">
        <div className="deset-slobodnih-mesta-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="deset-slobodnih-mesta-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="deset-slobodnih-mesta-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="deset-slobodnih-mesta-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="deset-slobodnih-mesta-special-conditions__visual">
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
