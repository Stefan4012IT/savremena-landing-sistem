import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import savremenaGroupLogo from '../../malo-mesta/assets/Logo_sos_sg_001.svg'

function renderHighlightedText(text, highlights = []) {
  if (!highlights.length) return text

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'gi')
  const highlighted = new Set(highlights.map((item) => item.toLocaleLowerCase()))

  return text.split(pattern).map((part, index) => (
    highlighted.has(part.toLocaleLowerCase())
      ? <strong className="svetski-dan-deteta-sos-sg-hero__highlight" key={`${part}-${index}`}>{part}</strong>
      : part
  ))
}

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="svetski-dan-deteta-sos-sg-hero">
      <header className="svetski-dan-deteta-sos-sg-hero__header" aria-label="Glavna navigacija">
        <a className="svetski-dan-deteta-sos-sg-hero__logo" href="/svetski-dan-deteta" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="svetski-dan-deteta-sos-sg-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="svetski-dan-deteta-sos-sg-hero__inner">
        <div className="svetski-dan-deteta-sos-sg-hero__content">
          <h1>{hero.title} {hero.titleHighlight ? <span className="svetski-dan-deteta-sos-sg-hero__highlight">{hero.titleHighlight}</span> : null}</h1>
          {hero.subtitle ? <p className="svetski-dan-deteta-sos-sg-hero__subtitle">{hero.subtitle}</p> : null}
          <div className="svetski-dan-deteta-sos-sg-hero__copy">
            {hero.paragraphs.map((paragraph, index) => (
              <p key={paragraph}>{renderHighlightedText(paragraph, hero.paragraphHighlights?.[index])}</p>
            ))}
          </div>
          {hero.skills.length > 0 ? (
            <div className="svetski-dan-deteta-sos-sg-hero__skills" aria-label="Veštine koje razvijamo">
              {hero.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          ) : null}
          {hero.conclusion ? <p className="svetski-dan-deteta-sos-sg-hero__conclusion">{hero.conclusion}</p> : null}
        </div>
      </div>
      <div className="svetski-dan-deteta-sos-sg-hero__form-panel" id="prijava">
        <LeadForm introText="Saznajte više o programu i obezbedite detetu obrazovanje za budućnost." />
      </div>
    </section>
  )
}
