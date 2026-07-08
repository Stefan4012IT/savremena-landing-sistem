import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import ministryLogo from '../assets/logos/ministarstvo-prosvete-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import heroCopyImage from '../assets/7_novo-odeljenje-cop.webp'
import heroBackground from '../assets/9_novo_odeljenje_hero_background_000.webp'
import heroStudents from '../assets/novo_odeljenje_hero_11.webp'
import { LeadForm } from './LeadForm'

export function HeroSection() {
  return (
    <section
      className="najbolja-odluka-hero"
      data-hero-version="novo-odeljenje-7"
    >
      <div
        className="najbolja-odluka-hero__background"
        style={{ '--hero-background-image': `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <header className="najbolja-odluka-hero__header" aria-label="Glavna navigacija">
        <a className="najbolja-odluka-hero__logo" href="/novo-odeljenje" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="najbolja-odluka-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={ministryLogo} alt="Ministarstvo prosvete" />
          <img src={cambridgeLogo} alt="Cambridge International Education" />
        </div>
      </header>
      <img
        className="najbolja-odluka-hero__students"
        src={heroStudents}
        alt=""
        aria-hidden="true"
      />
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content" aria-label="Uvod u landing">
          <img
            className="najbolja-odluka-hero__copy-image"
            src={heroCopyImage}
            alt="Otvoreno je još jedno, 7. odeljenje!"
          />
          <p className="najbolja-odluka-hero__eyebrow">SJAJNE VESTI</p>
          <h1 className="najbolja-odluka-hero__title">
            Zbog velikog interesovanja, Savremena gimnazija otvara još jedno, 7. odeljenje prvog
            razreda u generaciji 2025/26!
          </h1>
          <p className="najbolja-odluka-hero__lead">
            Izaberite najsavremenije školovanje za najbolje rezultate.
          </p>
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
