import { benefits } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function BenefitsSection() {
  const { benefits: section, benefitCards = benefits } = useLandingData()

  return (
    <section className="landing-section benefits-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="benefits-grid">
          {benefitCards.map((benefit) => {
            const title = Array.isArray(benefit) ? benefit[0] : benefit.title
            const text = Array.isArray(benefit) ? benefit[1] : benefit.text

            return (
            <article className="benefit-card" key={title}>
              <div className="benefit-card__image" aria-hidden="true">
                <span>{title.charAt(0)}</span>
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
