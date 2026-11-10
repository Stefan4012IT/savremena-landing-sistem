import { useLandingData } from '../useLandingData'

export function BenefitsSection() {
  const { benefits, benefitCards = [] } = useLandingData()

  if (!benefits?.title || !benefitCards.length) {
    return null
  }

  return (
    <section className="svetski-dan-deteta-sos-sg-benefits">
      <div className="svetski-dan-deteta-sos-sg-benefits__inner">
        <p className="svetski-dan-deteta-sos-sg-benefits__eyebrow">{benefits.eyebrow}</p>
        <h2>{benefits.title}</h2>
        <div className="svetski-dan-deteta-sos-sg-benefits__grid">
          {benefitCards.map((benefit) => (
            <article className="svetski-dan-deteta-sos-sg-benefits__item" key={benefit.title}>
              {benefit.imageUrl ? (
                <img src={benefit.imageUrl} alt="" />
              ) : (
                <div className="svetski-dan-deteta-sos-sg-benefits__placeholder" aria-hidden="true" />
              )}
              <h3>{benefit.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
