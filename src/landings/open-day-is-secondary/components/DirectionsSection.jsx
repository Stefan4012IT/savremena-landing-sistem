import { directions } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'open-day-is-secondary-card-grid open-day-is-secondary-directions-section__grid'
    : 'open-day-is-secondary-card-grid open-day-is-secondary-card-grid--three'

  return (
    <section className="open-day-is-secondary-landing-section open-day-is-secondary-directions-section">
      <div className="open-day-is-secondary-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="open-day-is-secondary-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
