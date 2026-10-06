import { benefits } from '../dataContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

const benefitImageBaseUrl = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/sos_benefits_'

export function BenefitsSection() {
  const { benefits: section, benefitCards = benefits } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-benefits-section">
      <div className="upis-je-otvoren-sos-ab-test-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="upis-je-otvoren-sos-ab-test-benefits-grid">
          {benefitCards.map((benefit, index) => {
            const title = Array.isArray(benefit) ? benefit[0] : benefit.title
            const text = Array.isArray(benefit) ? benefit[1] : benefit.text
            const imageUrl = `${benefitImageBaseUrl}${index + 1}.jpg`

            return (
            <article className="upis-je-otvoren-sos-ab-test-benefit-card" key={title}>
              <div className="upis-je-otvoren-sos-ab-test-benefit-card__image" aria-hidden="true">
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
