import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'

const heroImageUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_why_wait_hero_img.png'
const heroImageMobileUrl = heroImageUrl

export function HeroSection() {
  return (
    <section
      className="nije-kasno-za-bolju-skolu-is-hero"
      data-hero-version="jos-nije-kasno-za-bolju-skolu"
    >
      <header className="nije-kasno-za-bolju-skolu-is-hero__header" aria-label="Glavna navigacija">
        <a className="nije-kasno-za-bolju-skolu-is-hero__logo" href="/why-wait" aria-label="Početna">
          <img src="https://www.international-school.edu.rs/wp-content/uploads/2020/03/IS_logo_white.svg" alt="International School" />
        </a>
        <div className="nije-kasno-za-bolju-skolu-is-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="nije-kasno-za-bolju-skolu-is-hero__inner">
        <div className="nije-kasno-za-bolju-skolu-is-hero__content" aria-label="Uvod u landing">
          <h1 className="nije-kasno-za-bolju-skolu-is-hero__title">Nije kasno za bolju školu!</h1>
          <div className="nije-kasno-za-bolju-skolu-is-hero__copy">
            <p className="nije-kasno-za-bolju-skolu-is-hero__lead">
              Iskoristite <span className="nije-kasno-za-bolju-skolu-is-hero__lead-highlight">poslednju šansu</span> za upis u International School
            </p>
            <p className="nije-kasno-za-bolju-skolu-is-hero__message">
              Donesite pravu odluku i obezbedite svom detetu <strong>STVARNO DRUGAČIJE</strong> školovanje.
            </p>
          </div>
        </div>
        <div className="nije-kasno-za-bolju-skolu-is-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={heroImageMobileUrl} />
            <img src={heroImageUrl} alt="" />
          </picture>
        </div>
        <div className="nije-kasno-za-bolju-skolu-is-hero__form-panel" id="prijava">
          <LeadForm
            className="nije-kasno-za-bolju-skolu-is-lead-form--hero"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
