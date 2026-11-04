import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="open-day-is-secondary-landing-section open-day-is-secondary-special-offer">
      <div className="open-day-is-secondary-landing-container open-day-is-secondary-special-offer__box">
        <div>
          <p className="open-day-is-secondary-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
          <p className="open-day-is-secondary-special-offer__description">{specialOffer.text}</p>
        </div>
        <a className="open-day-is-secondary-landing-link open-day-is-secondary-landing-link--light" href="#prijava">
          {locale === 'en' ? 'Register for Open Day' : 'Prijavite se za Open Day'}
        </a>
      </div>
    </section>
  )
}
