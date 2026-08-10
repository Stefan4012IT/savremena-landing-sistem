import { useLandingData } from '../useLandingData'

export function EmotionalTurnSection() {
  const { emotionalTurn } = useLandingData()

  return (
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-scholarship-offer">
      <div className="deset-slobodnih-mesta-landing-container deset-slobodnih-mesta-scholarship-offer__inner">
        <div className="deset-slobodnih-mesta-scholarship-offer__content">
          <div className="deset-slobodnih-mesta-scholarship-offer__copy">
            <p className="deset-slobodnih-mesta-scholarship-offer__ribbon">
              {emotionalTurn.eyebrow}
            </p>
            <header className="deset-slobodnih-mesta-scholarship-offer__headline">
              <h2>{emotionalTurn.title}</h2>
            </header>
            <p>{emotionalTurn.text}</p>
            <a className="deset-slobodnih-mesta-scholarship-offer__cta" href="#prijava">
              {emotionalTurn.ctaText}
            </a>
          </div>
          <figure className="deset-slobodnih-mesta-scholarship-offer__image">
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
