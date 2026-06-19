import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import ministryLogo from '../assets/logos/ministarstvo-prosvete-logo-white.png'
import headerLogo from '../assets/logos/savremenaGimnazijaLogoInverse.svg'
import { HeroImageReveal } from './HeroImageReveal'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="najbolja-odluka-hero">
      <header className="najbolja-odluka-hero__header" aria-label="Glavna navigacija">
        <a className="najbolja-odluka-hero__logo" href="/najbolji-izbor" aria-label="Početna">
          <img src={headerLogo} alt="Savremena gimnazija" />
        </a>
        <div className="najbolja-odluka-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={ministryLogo} alt="Ministarstvo prosvete" />
          <img src={cambridgeLogo} alt="Cambridge International Education" />
        </div>
      </header>
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content" aria-label="Uvod u landing">
          <p className="najbolja-odluka-hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="najbolja-odluka-hero__title">{hero.title}</h1>
          <p className="najbolja-odluka-hero__lead">{hero.lead}</p>
          <div className="najbolja-odluka-hero__actions" aria-label="Opcije za upis">
            <a className="najbolja-odluka-hero__button" href="#prijava">
              Prijavite se za upis
            </a>
            <a
              className="najbolja-odluka-hero__button najbolja-odluka-hero__button--secondary"
              href="#savetovanje"
            >
              Zakazite razgovor
            </a>
          </div>
          <p className="najbolja-odluka-hero__note">{hero.note}</p>
        </div>
        <HeroImageReveal
          beforeImageUrl={hero.beforeImageUrl}
          afterImageUrl={hero.afterImageUrl}
        />
      </div>
    </section>
  )
}
