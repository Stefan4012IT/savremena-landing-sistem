import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-landing-section upis-je-otvoren-sos-program-choice" id="savetovanje">
      <div className="upis-je-otvoren-sos-landing-container upis-je-otvoren-sos-program-choice__grid">
        <div className="upis-je-otvoren-sos-program-choice__content">
          <p className="upis-je-otvoren-sos-section-header__eyebrow">{programChoice.eyebrow}</p>
          <h2>{programChoice.title}</h2>
          {programChoice.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="upis-je-otvoren-sos-landing-link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="upis-je-otvoren-sos-program-choice__logos" aria-label="Akreditacije i programi">
          <div className="upis-je-otvoren-sos-program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="upis-je-otvoren-sos-program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
