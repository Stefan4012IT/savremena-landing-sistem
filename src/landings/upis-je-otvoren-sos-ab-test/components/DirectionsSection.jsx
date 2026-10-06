import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import birdDecoration from '../assets/ptica_001.svg'

const birdDecorations = ['one', 'two', 'three', 'four', 'five']

function RichParagraph({ paragraph }) {
  if (!paragraph.bold) return <p>{paragraph.text}</p>

  const [before, ...after] = paragraph.text.split(paragraph.bold)
  return <p>{before}<strong>{paragraph.bold}</strong>{after.join(paragraph.bold)}</p>
}

export function DirectionsSection() {
  const { dayAtSchool } = useLandingData()
  const midpoint = Math.ceil(dayAtSchool.paragraphs.length / 2)

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-day-section">
      {birdDecorations.map((position) => (
        <img
          className={`upis-je-otvoren-sos-ab-test-day-section__bird upis-je-otvoren-sos-ab-test-day-section__bird--${position}`}
          src={birdDecoration}
          alt=""
          aria-hidden="true"
          key={position}
        />
      ))}
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-day-section__grid">
        <SectionHeader
          title={dayAtSchool.title}
        />
        <div className="upis-je-otvoren-sos-ab-test-day-section__column">
          {dayAtSchool.paragraphs.slice(0, midpoint).map((paragraph) => (
            <RichParagraph key={paragraph.text} paragraph={paragraph} />
          ))}
        </div>
        <div className="upis-je-otvoren-sos-ab-test-day-section__column">
          {dayAtSchool.paragraphs.slice(midpoint).map((paragraph) => (
            <RichParagraph key={paragraph.text} paragraph={paragraph} />
          ))}
        </div>
      </div>
    </section>
  )
}
