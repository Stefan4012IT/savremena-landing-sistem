import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="upis-je-otvoren-is-landing-section upis-je-otvoren-is-special-offer">
      <div className="upis-je-otvoren-is-landing-container upis-je-otvoren-is-special-offer__box">
        <div>
          <p className="upis-je-otvoren-is-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="upis-je-otvoren-is-landing-link upis-je-otvoren-is-landing-link--light" href="#prijava">
          {locale === 'en' ? 'Secure your place in the 2027/28 generation' : 'Obezbedite mesto u generaciji 2027/28'}
        </a>
      </div>
    </section>
  )
}
