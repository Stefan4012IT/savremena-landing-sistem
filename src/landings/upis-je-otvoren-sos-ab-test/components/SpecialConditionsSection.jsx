import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-special-conditions">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-special-conditions__grid">
        <div className="upis-je-otvoren-sos-ab-test-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="upis-je-otvoren-sos-ab-test-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="upis-je-otvoren-sos-ab-test-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="upis-je-otvoren-sos-ab-test-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-special-conditions__visual">
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
