import { benefits } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function BenefitsSection() {
  const { benefits: section, benefitCards = benefits } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-sos-landing-section nije-kasno-za-bolju-skolu-sos-benefits-section">
      <div className="nije-kasno-za-bolju-skolu-sos-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="nije-kasno-za-bolju-skolu-sos-benefits-grid">
          {benefitCards.map((benefit) => {
            const title = Array.isArray(benefit) ? benefit[0] : benefit.title
            const text = Array.isArray(benefit) ? benefit[1] : benefit.text
            const imageUrl = Array.isArray(benefit) ? null : benefit.imageUrl

            return (
            <article className="nije-kasno-za-bolju-skolu-sos-benefit-card" key={title}>
              <div className="nije-kasno-za-bolju-skolu-sos-benefit-card__image" aria-hidden="true">
                {imageUrl ? <img src={imageUrl} alt="" /> : <span>{title.charAt(0)}</span>}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
