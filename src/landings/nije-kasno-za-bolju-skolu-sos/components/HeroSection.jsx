import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'

const heroImageUrl = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/hero_img_002.png'
const heroImageMobileUrl = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/hero_img_004_mobile.png'

export function HeroSection() {
  return (
    <section
      className="nije-kasno-za-bolju-skolu-sos-hero"
      data-hero-version="jos-nije-kasno-za-bolju-skolu"
    >
      <header className="nije-kasno-za-bolju-skolu-sos-hero__header" aria-label="Glavna navigacija">
        <a className="nije-kasno-za-bolju-skolu-sos-hero__logo" href="/jos-nije-kasno-za-bolju-skolu" aria-label="Početna">
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/SOS_log_color_white.svg" alt="Savremena osnovna škola" />
        </a>
        <div className="nije-kasno-za-bolju-skolu-sos-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="nije-kasno-za-bolju-skolu-sos-hero__inner">
        <div className="nije-kasno-za-bolju-skolu-sos-hero__content" aria-label="Uvod u landing">
          <h1 className="nije-kasno-za-bolju-skolu-sos-hero__title">Nije kasno za bolju školu!</h1>
          <div className="nije-kasno-za-bolju-skolu-sos-hero__copy">
            <p className="nije-kasno-za-bolju-skolu-sos-hero__lead">
              Iskoristite poslednju šansu za upis u Savremenu:
            </p>
            <p className="nije-kasno-za-bolju-skolu-sos-hero__message">
              Donesite pravu odluku i obezbedite svom detetu <strong>STVARNO DRUGAČIJE</strong> školovanje.
            </p>
          </div>
        </div>
        <div className="nije-kasno-za-bolju-skolu-sos-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={heroImageMobileUrl} />
            <img src={heroImageUrl} alt="" />
          </picture>
        </div>
        <div className="nije-kasno-za-bolju-skolu-sos-hero__form-panel" id="prijava">
          <LeadForm
            className="nije-kasno-za-bolju-skolu-sos-lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
