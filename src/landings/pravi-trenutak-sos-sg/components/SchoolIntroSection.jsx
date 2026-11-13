import { useLandingData } from '../useLandingData'

export function SchoolIntroSection() {
  const { schoolIntro } = useLandingData()

  if (!schoolIntro) return null

  return (
    <section className="pravi-trenutak-sos-sg-school-intro">
      <div className="pravi-trenutak-sos-sg-school-intro__inner">
        <div className="pravi-trenutak-sos-sg-school-intro__copy">
          <h2>{schoolIntro.title}</h2>
          {schoolIntro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="pravi-trenutak-sos-sg-school-intro__visual">
          <img
            src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/11/pravi-trenutak_001.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
