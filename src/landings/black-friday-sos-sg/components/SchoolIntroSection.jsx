import { useLandingData } from '../useLandingData'

export function SchoolIntroSection() {
  const { schoolIntro } = useLandingData()

  if (!schoolIntro) return null

  return (
    <section className="black-friday-sos-sg-school-intro">
      <div className="black-friday-sos-sg-school-intro__inner">
        <div className="black-friday-sos-sg-school-intro__copy">
          <h2>{schoolIntro.title}</h2>
          {schoolIntro.paragraphs.map((paragraph, index) => (
            <div className="black-friday-sos-sg-school-intro__paragraph-group" key={paragraph}>
              <p>{paragraph}</p>
              {schoolIntro.highlightTitles?.[index] ? (
                <h3 className="black-friday-sos-sg-school-intro__highlight-title">
                  {schoolIntro.highlightTitles[index]}
                </h3>
              ) : null}
            </div>
          ))}
        </div>
        <div className="black-friday-sos-sg-school-intro__visual">
          <img
            src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/11/black_friday_landing_img_002.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
