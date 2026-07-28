import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import ministryLogo from '../../novo-odeljenje/assets/logos/ministarstvo-prosvete-logo-white.png'
import savremenaGimnazijaLogo from '../../novo-odeljenje/assets/logos/savremenaGimnazijaLogoInverse.svg'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="malo-mesta-hero">
      <header className="malo-mesta-hero__header" aria-label="Glavna navigacija">
        <a className="malo-mesta-hero__logo" href="/malo-mesta" aria-label="Početna">
          <img src={savremenaGimnazijaLogo} alt="Savremena gimnazija" />
        </a>
        <div className="malo-mesta-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src={ministryLogo} alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="malo-mesta-hero__inner">
        <div className="malo-mesta-hero__content">
          <p className="malo-mesta-hero__eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="malo-mesta-hero__lead">{hero.lead}</p>
          <p className="malo-mesta-hero__note">{hero.note}</p>
        </div>
        <div className="malo-mesta-hero__form-panel" id="prijava">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
