import { benefits } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function BenefitsSection() {
  const { benefits: section, benefitCards = benefits } = useLandingData()

  return (
    <section className="upis-je-otvoren-is-landing-section upis-je-otvoren-is-benefits-section" id="benefiti">
      <div className="upis-je-otvoren-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="upis-je-otvoren-is-benefits-grid">
          {benefitCards.map((benefit, index) => {
            const title = Array.isArray(benefit) ? benefit[0] : benefit.title
            const text = Array.isArray(benefit) ? benefit[1] : benefit.text
            const imageUrl = Array.isArray(benefit) ? null : benefit.imageUrl

            return (
              <article className="upis-je-otvoren-is-benefit-card" key={title}>
                <div className="upis-je-otvoren-is-benefit-card__image" aria-hidden="true">
                  {imageUrl ? <img src={imageUrl} alt="" loading="lazy" /> : <span>{String(index + 1).padStart(2, '0')}</span>}
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
