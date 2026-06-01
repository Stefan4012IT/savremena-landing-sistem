import { benefits } from '../landingContent'
import { SectionHeader } from './SectionHeader'

export function BenefitsSection() {
  return (
    <section className="landing-section benefits-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow="Benefiti"
          title="Benefiti skolovanja u Savremenoj gimnaziji"
          text="Savremena ucenicima pruza znanje, podrsku, tehnologiju, zdravo okruzenje i prostor da razviju svoje mogucnosti."
        />
        <div className="benefits-grid">
          {benefits.map(([title, text]) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-card__image" aria-hidden="true">
                <span>{title.charAt(0)}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
