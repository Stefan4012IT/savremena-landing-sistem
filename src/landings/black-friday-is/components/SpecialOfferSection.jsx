import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="black-friday-is-landing-section black-friday-is-special-offer">
      <div className="black-friday-is-landing-container black-friday-is-special-offer__box">
        <div>
          <p className="black-friday-is-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="black-friday-is-landing-link black-friday-is-landing-link--light" href="#prijava">
          {locale === 'en' ? 'Secure your place in the 2027/28 generation' : 'Obezbedite mesto u generaciji 2027/28'}
        </a>
      </div>
    </section>
  )
}
