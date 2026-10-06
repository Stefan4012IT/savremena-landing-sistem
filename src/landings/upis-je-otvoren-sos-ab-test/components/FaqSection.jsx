import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function FaqSection() {
  const { faq } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-faq-section">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-faq-section__grid">
        <SectionHeader title={faq.title} />
        <div className="upis-je-otvoren-sos-ab-test-faq-section__items">
          {faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
