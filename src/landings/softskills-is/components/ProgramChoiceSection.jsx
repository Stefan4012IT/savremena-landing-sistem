import cambridgeLogo from '../../upis-je-otvoren-is/assets/cambridge-international-logo.webp'
import ministryLogo from '../../upis-je-otvoren-is/assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice, locale = 'sr' } = useLandingData()

  return (
    <section className="softskills-is-landing-section softskills-is-program-choice" id="savetovanje">
      <div className="softskills-is-landing-container softskills-is-program-choice__grid">
        <div className="softskills-is-program-choice__content">
          <p className="softskills-is-section-header__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="softskills-is-landing-link" href="#prijava">
            {locale === 'en' ? 'Book a programme consultation' : 'Zakazite savetovanje o izboru programa'}
          </a>
        </div>
        <div className="softskills-is-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="softskills-is-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="softskills-is-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
