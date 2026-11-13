import { useLandingData } from '../useLandingData'

export function PartnerLogosSection() {
  const { partnerLogos } = useLandingData()

  if (!partnerLogos) {
    return null
  }

  return (
    <section className="pravi-trenutak-sos-sg-partner-logos" aria-label="Svetske nagrade">
      <div className="pravi-trenutak-sos-sg-partner-logos__grid">
        <div className="pravi-trenutak-sos-sg-partner-logos__header">
          <p className="pravi-trenutak-sos-sg-partner-logos__eyebrow">{partnerLogos.eyebrow}</p>
          <h2>{partnerLogos.title}</h2>
          <p className="pravi-trenutak-sos-sg-partner-logos__text">{partnerLogos.text}</p>
        </div>
        <div className="pravi-trenutak-sos-sg-partner-logos__row">
          {partnerLogos.items.map((logo) => (
            <div className="pravi-trenutak-sos-sg-partner-logos__item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
              <p>{logo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
