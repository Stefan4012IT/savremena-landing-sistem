import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import savremenaGroupLogo from '../../malo-mesta/assets/Logo_sos_sg_001.svg'

const heroImage = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/10/softskill_hero_img_1.1.png'
const heroImageMobile = heroImage

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="softskills-sos-sg-hero">
      <header className="softskills-sos-sg-hero__header" aria-label="Glavna navigacija">
        <a className="softskills-sos-sg-hero__logo" href="/softskills" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="softskills-sos-sg-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="softskills-sos-sg-hero__inner">
        <div className="softskills-sos-sg-hero__content">
          <h1>{hero.title}</h1>
          <p className="softskills-sos-sg-hero__subtitle">{hero.subtitle}</p>
          <div className="softskills-sos-sg-hero__visual-wrap">
            <img className="softskills-sos-sg-hero__visual softskills-sos-sg-hero__visual--desktop" src={heroImage} alt="Učenik i nastavnica Savremene" />
            <img
              className="softskills-sos-sg-hero__visual softskills-sos-sg-hero__visual--mobile"
              src={heroImageMobile}
              alt="Učenik i nastavnica Savremene"
            />
          </div>
          <div className="softskills-sos-sg-hero__copy">
            {hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="softskills-sos-sg-hero__skills" aria-label="Veštine koje razvijamo">
            {hero.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <p className="softskills-sos-sg-hero__conclusion">{hero.conclusion}</p>
        </div>
      </div>
      <div className="softskills-sos-sg-hero__form-panel" id="prijava">
        <LeadForm introText="Saznajte više o programu i obezbedite detetu obrazovanje za budućnost." />
      </div>
    </section>
  )
}
