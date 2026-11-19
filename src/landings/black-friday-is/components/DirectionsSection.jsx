import { directions } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'black-friday-is-card-grid black-friday-is-directions-section__grid'
    : 'black-friday-is-card-grid black-friday-is-card-grid--three'

  return (
    <section className="black-friday-is-landing-section black-friday-is-directions-section">
      <div className="black-friday-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="black-friday-is-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
