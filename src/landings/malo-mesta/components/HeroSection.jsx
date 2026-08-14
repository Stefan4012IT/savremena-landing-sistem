import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import savremenaGroupLogo from '../assets/Logo_sos_sg_001.svg'

const heroImage = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/08/malo_mesta_hero_new_001.png'
const heroImageMobile = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/08/malo_mesta_hero_new_001-mobile.png'

export function HeroSection() {
  const { hero } = useLandingData()
  const heroTitle = `${hero.title
    .split('\n')
    .filter((line) => line !== 'se uskoro' && !line.includes('ZATVARA!'))
    .join(' ')
    .trim()} SE`

  return (
    <section className="malo-mesta-hero">
      <header className="malo-mesta-hero__header" aria-label="Glavna navigacija">
        <a className="malo-mesta-hero__logo" href="/malo-mesta" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="malo-mesta-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
        <div className="malo-mesta-hero__inner">
          <div className="malo-mesta-hero__content">
            <h1>{heroTitle}</h1>
            <img className="malo-mesta-hero__visual malo-mesta-hero__visual--desktop" src={heroImage} alt="Učenik i nastavnica Savremene" />
            <img
              className="malo-mesta-hero__visual malo-mesta-hero__visual--mobile"
              src={heroImageMobile}
              alt="Učenik i nastavnica Savremene"
            />
            {hero.lead ? (
              <div className="malo-mesta-hero__copy">
                {hero.lead.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : null}
          </div>
          <div className="malo-mesta-hero__form-panel" id="prijava">
            <LeadForm introText="Iskoristite poslednju priliku i obezbedite svom detetu najsavremenije školovanje u regionu!" />
          </div>
        </div>
    </section>
  )
}
