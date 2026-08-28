import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-sg-landing-section nije-kasno-za-bolju-skolu-sg-special-offer">
      <div className="nije-kasno-za-bolju-skolu-sg-landing-container nije-kasno-za-bolju-skolu-sg-special-offer__box">
        <div>
          <p className="nije-kasno-za-bolju-skolu-sg-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="nije-kasno-za-bolju-skolu-sg-landing-link nije-kasno-za-bolju-skolu-sg-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
