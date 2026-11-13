import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="pravi-trenutak-is-landing-section pravi-trenutak-is-special-offer">
      <div className="pravi-trenutak-is-landing-container pravi-trenutak-is-special-offer__box">
        <div>
          <p className="pravi-trenutak-is-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="pravi-trenutak-is-landing-link pravi-trenutak-is-landing-link--light" href="#prijava">
          {locale === 'en' ? 'Secure your place in the 2027/28 generation' : 'Obezbedite mesto u generaciji 2027/28'}
        </a>
      </div>
    </section>
  )
}
