import { directions } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'upis-je-otvoren-is-card-grid upis-je-otvoren-is-directions-section__grid'
    : 'upis-je-otvoren-is-card-grid upis-je-otvoren-is-card-grid--three'

  return (
    <section className="upis-je-otvoren-is-landing-section upis-je-otvoren-is-directions-section">
      <div className="upis-je-otvoren-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="upis-je-otvoren-is-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
