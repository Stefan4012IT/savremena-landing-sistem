import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-sos-landing-section nije-kasno-za-bolju-skolu-sos-special-offer">
      <div className="nije-kasno-za-bolju-skolu-sos-landing-container nije-kasno-za-bolju-skolu-sos-special-offer__box">
        <div>
          <p className="nije-kasno-za-bolju-skolu-sos-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="nije-kasno-za-bolju-skolu-sos-landing-link nije-kasno-za-bolju-skolu-sos-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
