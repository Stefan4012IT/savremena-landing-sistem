import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-landing-section upis-je-otvoren-sos-special-offer">
      <div className="upis-je-otvoren-sos-landing-container upis-je-otvoren-sos-special-offer__box">
        <div>
          <p className="upis-je-otvoren-sos-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="upis-je-otvoren-sos-landing-link upis-je-otvoren-sos-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
