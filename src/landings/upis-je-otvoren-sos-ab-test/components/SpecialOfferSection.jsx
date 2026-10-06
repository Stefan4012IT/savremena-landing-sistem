import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-special-offer">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-special-offer__box">
        <div>
          <p className="upis-je-otvoren-sos-ab-test-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="upis-je-otvoren-sos-ab-test-landing-link upis-je-otvoren-sos-ab-test-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2027/28
        </a>
      </div>
    </section>
  )
}
