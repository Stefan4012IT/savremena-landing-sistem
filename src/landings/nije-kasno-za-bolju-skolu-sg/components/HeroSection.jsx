import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import { LeadForm } from './LeadForm'

const heroImageUrl = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/sg_nije_kasno_za_hero_img_desk_001.png'
const heroImageMobileUrl = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/sg_nije_kasno_za_hero_img_mob_001.png'

export function HeroSection() {
  return (
    <section
      className="nije-kasno-za-bolju-skolu-sg-hero"
      data-hero-version="nije-kasno-za-bolju-skolu-sg"
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
          <h1 className="nije-kasno-za-bolju-skolu-sg-hero__title">Nije kasno za bolju školu!</h1>
          <div className="nije-kasno-za-bolju-skolu-sg-hero__copy">
            <p className="nije-kasno-za-bolju-skolu-sg-hero__lead">
              Iskoristite <span className="nije-kasno-za-bolju-skolu-sg-hero__lead-highlight">poslednju šansu</span> za upis u Savremenu
            </p>
            <p className="nije-kasno-za-bolju-skolu-sg-hero__message">
              Donesite pravu odluku i obezbedite svom detetu <strong>STVARNO DRUGAČIJE</strong> školovanje.
            </p>
          </div>
        </div>
        <div className="nije-kasno-za-bolju-skolu-sg-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={heroImageMobileUrl} />
            <img src={heroImageUrl} alt="" />
          </picture>
        </div>
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
