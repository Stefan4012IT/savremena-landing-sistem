import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section
      className="upis-je-otvoren-sos-hero"
      data-hero-version="upis-je-otvoren-sos"
    >
      <header className="upis-je-otvoren-sos-hero__header" aria-label="Glavna navigacija">
        <a className="upis-je-otvoren-sos-hero__logo" href={hero.homeUrl} aria-label="Početna">
          <img src={hero.logoUrl} alt="Savremena osnovna škola" />
        </a>
        <div className="upis-je-otvoren-sos-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src={hero.ministryLogoUrl} alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="upis-je-otvoren-sos-hero__inner">
        <div className="upis-je-otvoren-sos-hero__content" aria-label="Uvod u landing">
          <h1 className="upis-je-otvoren-sos-hero__title">{hero.title}</h1>
          <div className="upis-je-otvoren-sos-hero__copy">
            <p className="upis-je-otvoren-sos-hero__lead">
              {hero.leadBefore}<span className="upis-je-otvoren-sos-hero__lead-highlight">{hero.leadHighlight}</span>{hero.leadAfter}
            </p>
            <p className="upis-je-otvoren-sos-hero__message">
              {hero.messageBefore}<strong>{hero.messageHighlight}</strong>{hero.messageAfter}
            </p>
          </div>
        </div>
        <div className="upis-je-otvoren-sos-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={hero.mobileImageUrl} />
            <img src={hero.imageUrl} alt="" />
          </picture>
        </div>
        <div className="upis-je-otvoren-sos-hero__form-panel" id="prijava">
          <LeadForm
            className="upis-je-otvoren-sos-lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
