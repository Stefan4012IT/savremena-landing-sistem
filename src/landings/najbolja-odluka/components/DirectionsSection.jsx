import { directions } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()

  return (
    <section className="landing-section directions-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="card-grid card-grid--three">
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
