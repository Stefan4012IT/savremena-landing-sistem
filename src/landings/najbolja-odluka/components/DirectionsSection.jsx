import { directions } from '../landingContent'
import { InfoCard } from './InfoCard'
import { SectionHeader } from './SectionHeader'

export function DirectionsSection() {
  return (
    <section className="landing-section directions-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow="Smerovi"
          title="Izaberite smer koji prati interesovanja vaseg deteta"
          text="Bilo da ga privlace tehnologija, jezici, drustvene nauke ili siroko opste obrazovanje, svaki smer pruza kvalitetnu osnovu za dalji razvoj."
        />
        <div className="card-grid card-grid--three">
          {directions.map((direction) => (
            <InfoCard key={direction.title} withProfileImage {...direction} />
          ))}
        </div>
      </div>
    </section>
  )
}
