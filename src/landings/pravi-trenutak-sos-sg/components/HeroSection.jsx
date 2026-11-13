import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import savremenaGroupLogo from '../../malo-mesta/assets/Logo_sos_sg_001.svg'

const heroBackgroundImage = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/11/pravi-trenutak-hero-background-001.jpg'

function renderHighlightedText(text, highlights = [], className = 'highlight') {
  if (!highlights.length) return text

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'gi')
  const highlighted = new Set(highlights.map((item) => item.toLocaleLowerCase()))

  return text.split(pattern).map((part, index) => (
    highlighted.has(part.toLocaleLowerCase())
      ? <strong className={`pravi-trenutak-sos-sg-hero__${className}`} key={`${part}-${index}`}>{part}</strong>
      : part
  ))
}

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="pravi-trenutak-sos-sg-hero">
      <header className="pravi-trenutak-sos-sg-hero__header" aria-label="Glavna navigacija">
        <a className="pravi-trenutak-sos-sg-hero__logo" href="/pravi-trenutak" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="pravi-trenutak-sos-sg-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="pravi-trenutak-sos-sg-hero__inner">
        <div className="pravi-trenutak-sos-sg-hero__content">
          <h1>
            {hero.titleStrong ? <strong className="pravi-trenutak-sos-sg-hero__title-strong">{hero.titleStrong} </strong> : null}
            {hero.title}{hero.titleHighlight ? <span className="pravi-trenutak-sos-sg-hero__highlight">{hero.titleHighlight}</span> : null}
          </h1>
          {hero.subtitle ? <p className="pravi-trenutak-sos-sg-hero__subtitle">{hero.subtitle}</p> : null}
          <div className="pravi-trenutak-sos-sg-hero__copy">
            {hero.paragraphs.map((paragraph, index) => (
              <p key={paragraph}>{renderHighlightedText(paragraph, hero.paragraphBold?.[index], 'bold')}</p>
            ))}
          </div>
          {hero.skills.length > 0 ? (
            <div className="pravi-trenutak-sos-sg-hero__skills" aria-label="Veštine koje razvijamo">
              {hero.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          ) : null}
          {hero.conclusion ? <p className="pravi-trenutak-sos-sg-hero__conclusion">{hero.conclusion}</p> : null}
        </div>
      </div>
      <div className="pravi-trenutak-sos-sg-hero__form-panel" id="prijava">
        <LeadForm />
      </div>
    </section>
  )
}
