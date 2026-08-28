import { directions } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'nije-kasno-za-bolju-skolu-sg-card-grid nije-kasno-za-bolju-skolu-sg-directions-section__grid'
    : 'nije-kasno-za-bolju-skolu-sg-card-grid nije-kasno-za-bolju-skolu-sg-card-grid--three'

  return (
    <section className="nije-kasno-za-bolju-skolu-sg-landing-section nije-kasno-za-bolju-skolu-sg-directions-section">
      <div className="nije-kasno-za-bolju-skolu-sg-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="nije-kasno-za-bolju-skolu-sg-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
