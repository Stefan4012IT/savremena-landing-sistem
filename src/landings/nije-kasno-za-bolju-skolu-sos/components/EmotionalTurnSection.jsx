import { useLandingData } from '../useLandingData'

export function EmotionalTurnSection() {
  const { emotionalTurn } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-sos-landing-section nije-kasno-za-bolju-skolu-sos-scholarship-offer">
      <div className="nije-kasno-za-bolju-skolu-sos-landing-container nije-kasno-za-bolju-skolu-sos-scholarship-offer__inner">
        <div className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__content">
          <div className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__copy">
            <p className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__ribbon">
              {emotionalTurn.eyebrow}
            </p>
            <header className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__headline">
              <h2>{emotionalTurn.title}</h2>
            </header>
            <p>{emotionalTurn.text}</p>
            <a className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__cta" href="#prijava">
              {emotionalTurn.ctaText}
            </a>
          </div>
          <figure className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__image">
            <img
              src="https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/08/10_slobodnih_mesta_img_1.1.jpg"
              alt="Učenici Savremene gimnazije sa digitalnim uređajima"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
