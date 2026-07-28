import cambridgeLogo from '../../novo-odeljenje/assets/cambridge-international-logo.webp'
import ministryLogo from '../../novo-odeljenje/assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  if (!programChoice) {
    return null
  }

  return (
    <section className="malo-mesta-program-choice" id="savetovanje">
      <div className="malo-mesta-program-choice__grid">
        <div className="malo-mesta-program-choice__content">
          <p className="malo-mesta-program-choice__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <a className="malo-mesta-program-choice__link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="malo-mesta-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="malo-mesta-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="malo-mesta-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
