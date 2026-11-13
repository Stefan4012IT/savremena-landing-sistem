import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice, locale = 'sr' } = useLandingData()

  return (
    <section className="pravi-trenutak-is-landing-section pravi-trenutak-is-program-choice" id="savetovanje">
      <div className="pravi-trenutak-is-landing-container pravi-trenutak-is-program-choice__grid">
        <div className="pravi-trenutak-is-program-choice__content">
          <p className="pravi-trenutak-is-section-header__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="pravi-trenutak-is-landing-link" href="#prijava">
            {locale === 'en' ? 'Book a programme consultation' : 'Zakazite savetovanje o izboru programa'}
          </a>
        </div>
        <div className="pravi-trenutak-is-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="pravi-trenutak-is-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="pravi-trenutak-is-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
