import { directions } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  const { directions: section, directionCards = directions } = useLandingData()
  const gridClassName = directionCards.length > 3
    ? 'pravi-trenutak-is-card-grid pravi-trenutak-is-directions-section__grid'
    : 'pravi-trenutak-is-card-grid pravi-trenutak-is-card-grid--three'

  return (
    <section className="pravi-trenutak-is-landing-section pravi-trenutak-is-directions-section">
      <div className="pravi-trenutak-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className={gridClassName}>
          {directionCards.map((direction) => (
            <InfoCard key={direction.title} className="pravi-trenutak-is-info-card--direction" withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
