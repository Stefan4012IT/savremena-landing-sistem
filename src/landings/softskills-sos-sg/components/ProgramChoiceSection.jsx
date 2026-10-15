import cambridgeLogo from '../../novo-odeljenje/assets/cambridge-international-logo.webp'
import ministryLogo from '../../novo-odeljenje/assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  if (!programChoice) {
    return null
  }

  return (
    <section className="softskills-sos-sg-program-choice" id="savetovanje">
      <div className="softskills-sos-sg-program-choice__grid">
        <div className="softskills-sos-sg-program-choice__content">
          <p className="softskills-sos-sg-program-choice__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="softskills-sos-sg-program-choice__link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="softskills-sos-sg-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="softskills-sos-sg-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="softskills-sos-sg-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
