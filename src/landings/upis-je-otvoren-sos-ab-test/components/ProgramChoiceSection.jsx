import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'
import { useLandingData } from '../useLandingData'

export function ProgramChoiceSection() {
  const { programChoice } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-program-choice" id="savetovanje">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-program-choice__grid">
        <div className="upis-je-otvoren-sos-ab-test-program-choice__intro">
          <div className="upis-je-otvoren-sos-ab-test-program-choice__content">
            {programChoice.eyebrow ? <p className="upis-je-otvoren-sos-ab-test-section-header__eyebrow">{programChoice.eyebrow}</p> : null}
            <h2>{programChoice.title}</h2>
            <p>{programChoice.intro}</p>
          </div>
          <div className="upis-je-otvoren-sos-ab-test-program-choice__logos" aria-label="Akreditacije i programi">
            <div className="upis-je-otvoren-sos-ab-test-program-choice__logo-card">
              <img src={ministryLogo} alt="Ministarstvo prosvete" />
            </div>
            <div className="upis-je-otvoren-sos-ab-test-program-choice__logo-card">
              <img src={cambridgeLogo} alt="Cambridge International Education" />
            </div>
          </div>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-program-choice__programs">
          {programChoice.programs.map((program) => (
            <article className="upis-je-otvoren-sos-ab-test-program-choice__program" key={program.title}>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <p className="upis-je-otvoren-sos-ab-test-program-choice__program-fit">{program.fit}</p>
            </article>
          ))}
        </div>
        <p className="upis-je-otvoren-sos-ab-test-program-choice__help">{programChoice.helpText}</p>
        <a className="upis-je-otvoren-sos-ab-test-landing-link" href="#prijava">
          {programChoice.ctaLabel}
        </a>
      </div>
    </section>
  )
}
