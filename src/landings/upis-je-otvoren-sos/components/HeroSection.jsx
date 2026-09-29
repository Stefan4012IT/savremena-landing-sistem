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
      <div className="upis-je-otvoren-sos-hero__decor" aria-hidden="true">
        <img className="upis-je-otvoren-sos-hero__shape upis-je-otvoren-sos-hero__shape--left" src={hero.shapeLeftUrl} alt="" />
        <img className="upis-je-otvoren-sos-hero__shape upis-je-otvoren-sos-hero__shape--right" src={hero.shapeRightUrl} alt="" />
      </div>
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
          <h1 className="upis-je-otvoren-sos-hero__title">
            <span className="upis-je-otvoren-sos-hero__title-line">
              <span className="upis-je-otvoren-sos-hero__title-copy">{hero.titlePrefix}</span>
              <span className="upis-je-otvoren-sos-hero__title-emphasis">{hero.titleEmphasis}</span>
            </span>
            <span className="upis-je-otvoren-sos-hero__title-year">{hero.enrollmentYear}</span>
          </h1>
          <div className="upis-je-otvoren-sos-hero__copy">
            <p className="upis-je-otvoren-sos-hero__lead">
              <span className="upis-je-otvoren-sos-hero__lead-line upis-je-otvoren-sos-hero__lead-line--intro">{hero.leadFirstLine}</span>
              <span className="upis-je-otvoren-sos-hero__lead-line">{hero.leadSecondLine}</span>
              <span className="upis-je-otvoren-sos-hero__lead-line upis-je-otvoren-sos-hero__lead-line--final">
                <span className="upis-je-otvoren-sos-hero__lead-highlight">{hero.leadHighlight}</span>
                <span className="upis-je-otvoren-sos-hero__lead-tail">{hero.leadThirdLineAfter}</span>
              </span>
            </p>
            {hero.messageBefore || hero.messageHighlight || hero.messageAfter ? (
              <p className="upis-je-otvoren-sos-hero__message">
                {hero.messageBefore}<strong>{hero.messageHighlight}</strong>{hero.messageAfter}
              </p>
            ) : null}
          </div>
        </div>
        <div className="upis-je-otvoren-sos-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={hero.imageUrl} />
            <img src={hero.imageUrl} alt="" />
          </picture>
          <span className="upis-je-otvoren-sos-hero__student-label">{hero.studentLabel}</span>
        </div>
      </div>
      <div className="upis-je-otvoren-sos-hero__form-panel" id="prijava">
        <LeadForm
          className="upis-je-otvoren-sos-lead-form--hero"
          formName="Upis je otvoren – SOS – hero forma"
          headerTitle="PRIJAVITE SE"
          headerText="Obezbedite svom detetu najsavremenije obrazovanje u regionu."
        />
      </div>
    </section>
  )
}
