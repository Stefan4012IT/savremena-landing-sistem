import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function EmotionalTurnSection() {
  const { emotionalTurn } = useLandingData()

  return (
    <section className="landing-section emotional-turn">
      <div className="landing-container emotional-turn__grid">
        <SectionHeader
          eyebrow={emotionalTurn.eyebrow}
          title={emotionalTurn.title}
          text={emotionalTurn.text}
        />
        <div className="emotional-turn__panel">
          <div>
            <p className="emotional-turn__label">{emotionalTurn.worryLabel}</p>
            {emotionalTurn.worries.map((item) => (
              <p className="emotional-turn__line" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="emotional-turn__label">{emotionalTurn.reframeLabel}</p>
            {emotionalTurn.reframes.map((item) => (
              <p className="emotional-turn__line emotional-turn__line--positive" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
