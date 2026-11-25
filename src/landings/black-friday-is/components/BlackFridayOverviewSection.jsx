import { useLandingData } from '../useLandingData'

export function BlackFridayOverviewSection() {
  const { blackFridayOverview } = useLandingData()

  if (!blackFridayOverview) return null

  const [firstFeature, secondFeature] = blackFridayOverview.features

  return (
    <section className="black-friday-is-overview">
      <div className="black-friday-is-landing-container black-friday-is-overview__inner">
        <header className="black-friday-is-overview__header">
          <h2>{blackFridayOverview.title}</h2>
          <p>{blackFridayOverview.intro}</p>
        </header>
        <div className="black-friday-is-overview__features">
          <article className="black-friday-is-overview__feature">
            <h3>{firstFeature.title}</h3>
            <p>{firstFeature.text}</p>
          </article>
          <figure className="black-friday-is-overview__visual">
            <img src={blackFridayOverview.imageUrl} alt="" />
          </figure>
          <article className="black-friday-is-overview__feature">
            <h3>{secondFeature.title}</h3>
            <p>{secondFeature.text}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
