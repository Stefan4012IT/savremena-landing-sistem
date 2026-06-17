import { directions } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3 ? 'card-grid card-grid--four' : 'card-grid card-grid--three'

  return (
    <section className="landing-section directions-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
