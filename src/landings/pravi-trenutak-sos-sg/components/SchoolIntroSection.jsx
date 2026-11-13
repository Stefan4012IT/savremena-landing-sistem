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
        <div className="pravi-trenutak-sos-sg-school-intro__visual" role="img" aria-label="Prostor za sliku">
          <span>Prostor za sliku</span>
        </div>
      </div>
    </section>
  )
}
