import { useLandingData } from '../useLandingData'
import { LeadForm } from './LeadForm'
const savremenaGroupLogo = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/11/seg_2026_logo_horizontal.svg'

const heroBackgroundImage = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/black_friday_sos_sg_hero_background.png'

function renderHighlightedText(text, highlights = [], className = 'highlight') {
  if (!highlights.length) return text

  const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`(${highlights.map(escapeRegExp).join('|')})`, 'gi')
  const highlighted = new Set(highlights.map((item) => item.toLocaleLowerCase()))

  return text.split(pattern).map((part, index) => (
    highlighted.has(part.toLocaleLowerCase())
      ? <strong className={`black-friday-sos-sg-hero__${className}`} key={`${part}-${index}`}>{part}</strong>
      : part
  ))
}

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="black-friday-sos-sg-hero">
      <header className="black-friday-sos-sg-hero__header" aria-label="Glavna navigacija">
        <a className="black-friday-sos-sg-hero__logo" href="/pravi-trenutak" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="black-friday-sos-sg-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2024/08/camb-1.png" alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2021/06/ministarstvo_prosvete.svg" alt="Ministarstvo prosvete" />
        </div>
      </header>
      <div className="black-friday-sos-sg-hero__inner">
        <div className="black-friday-sos-sg-hero__content">
          <h1>
            {hero.titleStrong ? `${hero.titleStrong} ` : ''}{hero.title}
          </h1>
          {hero.subtitle ? <p className="black-friday-sos-sg-hero__subtitle">{hero.subtitle}</p> : null}
          <div className="black-friday-sos-sg-hero__copy">
            {hero.paragraphs.map((paragraph, index) => (
              <p key={paragraph}>{renderHighlightedText(paragraph, hero.paragraphBold?.[index], 'bold')}</p>
            ))}
          </div>
          {hero.skills.length > 0 ? (
            <div className="black-friday-sos-sg-hero__skills" aria-label="Veštine koje razvijamo">
              {hero.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          ) : null}
          {hero.conclusion ? <p className="black-friday-sos-sg-hero__conclusion">{hero.conclusion}</p> : null}
        </div>
        <div className="black-friday-sos-sg-hero__form-panel" id="prijava">
          <LeadForm
            variant="dark"
            headerTitle="PRIJAVITE SE"
            headerText="Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu."
          />
        </div>
      </div>
    </section>
  )
}
