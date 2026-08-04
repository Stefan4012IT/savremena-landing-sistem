import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroLeftPart from '../assets/novo-odeljenje-left-part_002.png'
import heroRightPart from '../assets/novo-odeljenje-right-part_002.png'
import heroMobile from '../assets/hero_img_mob.png'
import { LeadForm } from './LeadForm'

export function HeroSection() {
  return (
    <section
      className="deset-slobodnih-mesta-hero"
      data-hero-version="10-slobodnih-mesta"
    >
      <header className="deset-slobodnih-mesta-hero__header" aria-label="Glavna navigacija">
        <a className="deset-slobodnih-mesta-hero__logo" href="/10-slobodnih-mesta" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="deset-slobodnih-mesta-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <picture className="deset-slobodnih-mesta-hero__right-part" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet={heroMobile} />
        <img src={heroRightPart} alt="" />
      </picture>
      <div className="deset-slobodnih-mesta-hero__inner">
        <div className="deset-slobodnih-mesta-hero__content" aria-label="Uvod u landing">
          <img
            className="deset-slobodnih-mesta-hero__left-part"
            src={heroLeftPart}
            alt="Otvoreno je još jedno, 9. odeljenje!"
          />
          <div className="deset-slobodnih-mesta-hero__yellow-copy">
            <p className="deset-slobodnih-mesta-hero__yellow-copy-main">
              Zbog velikog interesovanja, Savremena gimnazija otvara još jedno, 9. odeljenje prvog
              razreda u generaciji 2026/27!
            </p>
            <p>Izaberite najsavremenije školovanje za najbolje rezultate.</p>
          </div>
        </div>
        <div className="deset-slobodnih-mesta-hero__form-panel" id="prijava">
          <LeadForm
            className="deset-slobodnih-mesta-lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
