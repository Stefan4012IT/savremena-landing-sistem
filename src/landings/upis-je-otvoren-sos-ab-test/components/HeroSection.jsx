import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section
      className="upis-je-otvoren-sos-ab-test-hero"
      data-hero-version="upis-je-otvoren-sos-ab-test"
    >
      <div className="upis-je-otvoren-sos-ab-test-hero__decor" aria-hidden="true">
        <img className="upis-je-otvoren-sos-ab-test-hero__shape upis-je-otvoren-sos-ab-test-hero__shape--left" src={hero.shapeLeftUrl} alt="" />
        <img className="upis-je-otvoren-sos-ab-test-hero__shape upis-je-otvoren-sos-ab-test-hero__shape--right" src={hero.shapeRightUrl} alt="" />
      </div>
      <header className="upis-je-otvoren-sos-ab-test-hero__header" aria-label="Glavna navigacija">
        <a className="upis-je-otvoren-sos-ab-test-hero__logo" href={hero.homeUrl} aria-label="Početna">
          <img src={hero.logoUrl} alt="Savremena osnovna škola" />
        </a>
        <div className="upis-je-otvoren-sos-ab-test-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src={hero.ministryLogoUrl} alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="upis-je-otvoren-sos-ab-test-hero__inner">
        <div className="upis-je-otvoren-sos-ab-test-hero__content" aria-label="Uvod u landing">
          <h1 className="upis-je-otvoren-sos-ab-test-hero__title">
            <span className="upis-je-otvoren-sos-ab-test-hero__title-line">
              <span className="upis-je-otvoren-sos-ab-test-hero__title-copy">{hero.titlePrefix}</span>
              <span className="upis-je-otvoren-sos-ab-test-hero__title-emphasis">{hero.titleEmphasis}</span>
            </span>
            <span className="upis-je-otvoren-sos-ab-test-hero__title-year">{hero.enrollmentYear}</span>
          </h1>
          <div className="upis-je-otvoren-sos-ab-test-hero__copy">
            <h2 className="upis-je-otvoren-sos-ab-test-hero__headline">{hero.headline}</h2>
            <p className="upis-je-otvoren-sos-ab-test-hero__description">{hero.description}</p>
            <p className="upis-je-otvoren-sos-ab-test-hero__conditions">{hero.conditions}</p>
            <p className="upis-je-otvoren-sos-ab-test-hero__tuition">
              {hero.tuitionLabel} <strong>{hero.tuitionValue}</strong>
            </p>
            <p className="upis-je-otvoren-sos-ab-test-hero__highlights">{hero.highlights}</p>
          </div>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={hero.imageUrl} />
            <img src={hero.imageUrl} alt="" />
          </picture>
          <span className="upis-je-otvoren-sos-ab-test-hero__student-label">{hero.studentLabel}</span>
        </div>
      </div>
      <div className="upis-je-otvoren-sos-ab-test-hero__form-panel" id="prijava">
        <LeadForm
          className="upis-je-otvoren-sos-ab-test-lead-form--hero"
          formName="Upis je otvoren – SOS – hero forma"
          headerTitle="PRIJAVITE SE"
          headerText="Obezbedite svom detetu najsavremenije obrazovanje u regionu."
        />
      </div>
    </section>
  )
}
