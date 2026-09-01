import { useLandingData } from '../useLandingData'

export function SpecialConditionsSection() {
  const { specialConditions } = useLandingData()
  const paragraphs = specialConditions?.paragraphs ?? []

  return (
    <section className="nije-kasno-za-bolju-skolu-sos-landing-section nije-kasno-za-bolju-skolu-sos-special-conditions">
      <div className="nije-kasno-za-bolju-skolu-sos-landing-container nije-kasno-za-bolju-skolu-sos-special-conditions__grid">
        <div className="nije-kasno-za-bolju-skolu-sos-special-conditions__content">
          {specialConditions.eyebrow ? (
            <p className="nije-kasno-za-bolju-skolu-sos-section-header__eyebrow">{specialConditions.eyebrow}</p>
          ) : null}
          <h2>{specialConditions.title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p className="nije-kasno-za-bolju-skolu-sos-special-conditions__paragraph" key={paragraph} data-index={index}>
              {paragraph}
            </p>
          ))}
          <p className="nije-kasno-za-bolju-skolu-sos-special-conditions__cta">{specialConditions.ctaText}</p>
        </div>
        <div className="nije-kasno-za-bolju-skolu-sos-special-conditions__visual">
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
