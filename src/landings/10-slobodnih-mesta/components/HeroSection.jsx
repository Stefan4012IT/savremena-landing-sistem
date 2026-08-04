import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroImage from '../assets/10_slobodnih_mesta_copy_mob.png'
import availableSeatsCopy from '../assets/10_slobodnih_mesta_copy_desk.svg'
import availableSeatsCopyMobile from '../assets/10_slobodnih_mesta_copy_mob.svg'
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
      <div className="deset-slobodnih-mesta-hero__inner">
        <div className="deset-slobodnih-mesta-hero__content" aria-label="Uvod u landing">
          <p className="deset-slobodnih-mesta-hero__availability-intro">
            <span>Ostalo je</span> <strong>manje od</strong>
          </p>
          <picture className="deset-slobodnih-mesta-hero__availability-count">
            <source media="(max-width: 760px)" srcSet={availableSeatsCopyMobile} />
            <img src={availableSeatsCopy} alt="10 slobodnih mesta" />
          </picture>
          <p className="deset-slobodnih-mesta-hero__availability-outro">
            <span className="deset-slobodnih-mesta-hero__availability-outro-desktop"><strong>za upis</strong> u generaciju</span>
            <span className="deset-slobodnih-mesta-hero__availability-outro-mobile"><strong>za upis</strong> u</span>
            <span className="deset-slobodnih-mesta-hero__availability-outro-mobile">generaciju</span>
            <span>2026/27!</span>
          </p>
        </div>
        <div className="deset-slobodnih-mesta-hero__visual" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <p className="deset-slobodnih-mesta-hero__supporting-copy">
          <span>Izaberite <strong>najsavremenije školovanje</strong></span>
          <span>za najbolje rezultate.</span>
        </p>
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
