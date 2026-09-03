import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-special-offer">
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-special-offer__box">
        <div>
          <p className="nije-kasno-za-bolju-skolu-is-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="nije-kasno-za-bolju-skolu-is-landing-link nije-kasno-za-bolju-skolu-is-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
