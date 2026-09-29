import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  return (
    <section className="upis-je-otvoren-sg-landing-section upis-je-otvoren-sg-program-choice" id="savetovanje">
      <div className="upis-je-otvoren-sg-landing-container upis-je-otvoren-sg-program-choice__grid">
        <div className="upis-je-otvoren-sg-program-choice__content">
          <p className="upis-je-otvoren-sg-section-header__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="upis-je-otvoren-sg-landing-link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="upis-je-otvoren-sg-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="upis-je-otvoren-sg-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="upis-je-otvoren-sg-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
