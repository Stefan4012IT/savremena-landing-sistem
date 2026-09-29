import { directions } from '../dataContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'upis-je-otvoren-sos-card-grid upis-je-otvoren-sos-directions-section__grid'
    : 'upis-je-otvoren-sos-card-grid upis-je-otvoren-sos-card-grid--three'

  return (
    <section className="upis-je-otvoren-sos-landing-section upis-je-otvoren-sos-directions-section">
      <div className="upis-je-otvoren-sos-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="upis-je-otvoren-sos-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
