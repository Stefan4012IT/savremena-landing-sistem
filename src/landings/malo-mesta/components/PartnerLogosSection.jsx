import { useLandingData } from '../useLandingData'

export function PartnerLogosSection() {
  const { partnerLogos } = useLandingData()

  if (!partnerLogos) {
    return null
  }

  return (
    <section className="malo-mesta-partner-logos" aria-label="Svetske nagrade">
      <div className="malo-mesta-partner-logos__grid">
        <div className="malo-mesta-partner-logos__header">
          <p className="malo-mesta-partner-logos__eyebrow">{partnerLogos.eyebrow}</p>
          <h2>{partnerLogos.title}</h2>
          <p className="malo-mesta-partner-logos__text">{partnerLogos.text}</p>
        </div>
        <div className="malo-mesta-partner-logos__row">
          {partnerLogos.items.map((logo) => (
            <div className="malo-mesta-partner-logos__item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
