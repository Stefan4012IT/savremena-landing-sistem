import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import ministryLogo from '../assets/logos/ministarstvo-prosvete-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroLeftPart from '../assets/novo-odeljenje-left-part_002.png'
import heroRightPart from '../assets/novo-odeljenje-right-part_002.png'
import heroMobile from '../assets/hero_img_mob.png'
import { LeadForm } from './LeadForm'

export function HeroSection() {
  return (
    <section
      className="najbolja-odluka-hero"
      data-hero-version="novo-odeljenje-9"
    >
      <header className="najbolja-odluka-hero__header" aria-label="Glavna navigacija">
        <a className="najbolja-odluka-hero__logo" href="/novo-odeljenje" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="najbolja-odluka-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src={ministryLogo} alt="Ministarstvo prosvete" />
        </div>
      </header>
      <picture className="najbolja-odluka-hero__right-part" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet={heroMobile} />
        <img src={heroRightPart} alt="" />
      </picture>
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content" aria-label="Uvod u landing">
          <img
            className="najbolja-odluka-hero__left-part"
            src={heroLeftPart}
            alt="Otvoreno je još jedno, 9. odeljenje!"
          />
          <div className="najbolja-odluka-hero__yellow-copy">
            <h1>
              Zbog velikog interesovanja, Savremena gimnazija otvara još jedno, 9. odeljenje prvog
              razreda u generaciji 2029/267!
            </h1>
            <p>Izaberite najsavremenije školovanje za najbolje rezultate.</p>
          </div>
        </div>
        <div className="najbolja-odluka-hero__form-panel" id="prijava">
          <LeadForm
            className="lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
