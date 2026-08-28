import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroImage from '../assets/10_slobodnih_mesta_copy_mob.png'
import availableSeatsCopy from '../assets/10_slobodnih_mesta_copy_desk.svg'
import availableSeatsCopyMobile from '../assets/10_slobodnih_mesta_copy_mob.svg'
import { LeadForm } from './LeadForm'

export function HeroSection() {
  return (
    <section
      className="nije-kasno-za-bolju-skolu-sg-hero"
      data-hero-version="nije-kasno-za-bolju-skolu"
    >
      <header className="nije-kasno-za-bolju-skolu-sg-hero__header" aria-label="Glavna navigacija">
        <a className="nije-kasno-za-bolju-skolu-sg-hero__logo" href="/nije-kasno-za-bolju-skolu" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="nije-kasno-za-bolju-skolu-sg-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="nije-kasno-za-bolju-skolu-sg-hero__inner">
        <div className="nije-kasno-za-bolju-skolu-sg-hero__content" aria-label="Uvod u landing">
          <p className="nije-kasno-za-bolju-skolu-sg-hero__availability-intro">
            <span>Ostalo je</span> <strong>manje od</strong>
          </p>
          <picture className="nije-kasno-za-bolju-skolu-sg-hero__availability-count">
            <source media="(max-width: 760px)" srcSet={availableSeatsCopyMobile} />
            <img src={availableSeatsCopy} alt="10 slobodnih mesta" />
          </picture>
          <p className="nije-kasno-za-bolju-skolu-sg-hero__availability-outro">
            <span className="nije-kasno-za-bolju-skolu-sg-hero__availability-outro-desktop"><strong>za upis</strong> u generaciju</span>
            <span className="nije-kasno-za-bolju-skolu-sg-hero__availability-outro-mobile"><strong>za upis</strong> u</span>
            <span className="nije-kasno-za-bolju-skolu-sg-hero__availability-outro-mobile">generaciju</span>
            <span>2026/27!</span>
          </p>
        </div>
        <div className="nije-kasno-za-bolju-skolu-sg-hero__visual" aria-hidden="true">
          <img src={heroImage} alt="" />
        </div>
        <p className="nije-kasno-za-bolju-skolu-sg-hero__supporting-copy">
          <span>Izaberite <strong>najsavremenije školovanje</strong></span>
          <span>za najbolje rezultate.</span>
        </p>
        <div className="nije-kasno-za-bolju-skolu-sg-hero__form-panel" id="prijava">
          <LeadForm
            className="nije-kasno-za-bolju-skolu-sg-lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
