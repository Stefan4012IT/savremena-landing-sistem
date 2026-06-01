import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  return (
    <section className="landing-section program-choice" id="savetovanje">
      <div className="landing-container program-choice__grid">
        <div className="program-choice__content">
          <p className="section-header__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="landing-link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="program-choice__logos" aria-label="Akreditacije i programi">
          <div className="program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
