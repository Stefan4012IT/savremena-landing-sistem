import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="upis-je-otvoren-sg-landing-section upis-je-otvoren-sg-special-offer">
      <div className="upis-je-otvoren-sg-landing-container upis-je-otvoren-sg-special-offer__box">
        <div>
          <p className="upis-je-otvoren-sg-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="upis-je-otvoren-sg-landing-link upis-je-otvoren-sg-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2027/28
        </a>
      </div>
    </section>
  )
}
