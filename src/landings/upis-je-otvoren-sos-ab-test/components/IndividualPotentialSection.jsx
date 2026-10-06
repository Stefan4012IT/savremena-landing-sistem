import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

function RichParagraph({ paragraph }) {
  if (!paragraph.bold) return <p>{paragraph.text}</p>

  const [before, ...after] = paragraph.text.split(paragraph.bold)
  return <p>{before}<strong>{paragraph.bold}</strong>{after.join(paragraph.bold)}</p>
}

export function IndividualPotentialSection() {
  const { individualPotential } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-individual-potential">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-individual-potential__grid">
        <div className="upis-je-otvoren-sos-ab-test-individual-potential__copy">
          <SectionHeader title={individualPotential.title} />
          <div className="upis-je-otvoren-sos-ab-test-individual-potential__content">
            {individualPotential.paragraphs.map((paragraph) => (
              <RichParagraph key={paragraph.text} paragraph={paragraph} />
            ))}
          </div>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-individual-potential__image-placeholder" aria-label="Prostor za fotografiju">
          <span>{individualPotential.imagePlaceholder}</span>
        </div>
      </div>
    </section>
  )
}
