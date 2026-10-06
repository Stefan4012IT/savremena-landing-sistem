import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

function RichParagraph({ paragraph }) {
  if (!paragraph.bold) return <p>{paragraph.text}</p>

  const [before, ...after] = paragraph.text.split(paragraph.bold)
  return <p>{before}<strong>{paragraph.bold}</strong>{after.join(paragraph.bold)}</p>
}

export function IndividualApproachSection() {
  const { individualApproach } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-individual-approach">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-individual-approach__grid">
        <SectionHeader title={individualApproach.title} />
        <div className="upis-je-otvoren-sos-ab-test-individual-approach__content">
          {individualApproach.paragraphs.map((paragraph) => (
            <RichParagraph key={paragraph.text} paragraph={paragraph} />
          ))}
        </div>
      </div>
    </section>
  )
}
