import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

function RichParagraph({ paragraph }) {
  if (typeof paragraph === 'string' || !paragraph.bold) {
    return <p>{typeof paragraph === 'string' ? paragraph : paragraph.text}</p>
  }

  const [before, ...after] = paragraph.text.split(paragraph.bold)

  return <p>{before}<strong>{paragraph.bold}</strong>{after.join(paragraph.bold)}</p>
}

export function PartnerLogosSection() {
  const { pepper } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-pepper-section">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-pepper-section__grid">
        <SectionHeader
          eyebrow={pepper.eyebrow}
          title={pepper.title}
        />
        <div className="upis-je-otvoren-sos-ab-test-pepper-section__content">
          <h3>{pepper.subtitle}</h3>
          {pepper.paragraphs.map((paragraph) => (
            <RichParagraph key={typeof paragraph === 'string' ? paragraph : paragraph.text} paragraph={paragraph} />
          ))}
          <a className="upis-je-otvoren-sos-ab-test-landing-link" href="#prijava">{pepper.ctaLabel}</a>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-pepper-section__image" aria-label="Savremena osnovna škola">
          <img src={pepper.imageUrl} alt="" />
        </div>
      </div>
    </section>
  )
}
