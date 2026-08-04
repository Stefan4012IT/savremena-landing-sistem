import { directions } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'deset-slobodnih-mesta-card-grid deset-slobodnih-mesta-directions-section__grid'
    : 'deset-slobodnih-mesta-card-grid deset-slobodnih-mesta-card-grid--three'

  return (
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-directions-section">
      <div className="deset-slobodnih-mesta-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="deset-slobodnih-mesta-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
