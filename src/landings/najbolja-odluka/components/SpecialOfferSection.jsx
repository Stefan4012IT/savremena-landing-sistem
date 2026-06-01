import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="landing-section special-offer">
      <div className="landing-container special-offer__box">
        <div>
          <p className="special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <p>{specialOffer.text}</p>
        <a className="landing-link landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
