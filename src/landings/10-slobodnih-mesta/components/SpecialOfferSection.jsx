import { useLandingData } from '../useLandingData'

export function SpecialOfferSection() {
  const { specialOffer } = useLandingData()

  return (
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-special-offer">
      <div className="deset-slobodnih-mesta-landing-container deset-slobodnih-mesta-special-offer__box">
        <div>
          <p className="deset-slobodnih-mesta-special-offer__eyebrow">{specialOffer.eyebrow}</p>
          <h2>{specialOffer.title}</h2>
        </div>
        <a className="deset-slobodnih-mesta-landing-link deset-slobodnih-mesta-landing-link--light" href="#prijava">
          Obezbedite mesto u generaciji 2026/27
        </a>
      </div>
    </section>
  )
}
