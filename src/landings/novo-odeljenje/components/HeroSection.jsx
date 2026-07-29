import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroLeftPart from '../assets/novo-odeljenje-left-part_002.png'
import heroRightPart from '../assets/novo-odeljenje-right-part_002.png'
import heroMobile from '../assets/hero_img_mob.png'
import { LeadForm } from './LeadForm'

export function HeroSection() {
  return (
    <section
      className="novo-odeljenje-hero"
      data-hero-version="novo-odeljenje-9"
    >
      <header className="novo-odeljenje-hero__header" aria-label="Glavna navigacija">
        <a className="novo-odeljenje-hero__logo" href="/novo-odeljenje" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="novo-odeljenje-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <picture className="novo-odeljenje-hero__right-part" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet={heroMobile} />
        <img src={heroRightPart} alt="" />
      </picture>
      <div className="novo-odeljenje-hero__inner">
        <div className="novo-odeljenje-hero__content" aria-label="Uvod u landing">
          <img
            className="novo-odeljenje-hero__left-part"
            src={heroLeftPart}
            alt="Otvoreno je još jedno, 9. odeljenje!"
          />
          <div className="novo-odeljenje-hero__yellow-copy">
            <p className="novo-odeljenje-hero__yellow-copy-main">
              Zbog velikog interesovanja, Savremena gimnazija otvara još jedno, 9. odeljenje prvog
              razreda u generaciji 2026/27!
            </p>
            <p>Izaberite najsavremenije školovanje za najbolje rezultate.</p>
          </div>
        </div>
        <div className="novo-odeljenje-hero__form-panel" id="prijava">
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
