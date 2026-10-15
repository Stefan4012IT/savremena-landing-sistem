import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="softskills-is-landing-section softskills-is-special-offer">
      <div className="softskills-is-landing-container softskills-is-special-offer__box">
        <div>
          <p className="softskills-is-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="softskills-is-landing-link softskills-is-landing-link--light" href="#prijava">
          {locale === 'en' ? 'Secure your place in the 2027/28 generation' : 'Obezbedite mesto u generaciji 2027/28'}
        </a>
      </div>
    </section>
  )
}
