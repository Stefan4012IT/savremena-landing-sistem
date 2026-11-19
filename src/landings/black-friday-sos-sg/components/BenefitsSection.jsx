import { useLandingData } from '../useLandingData'

export function BenefitsSection() {
  const { benefits, benefitCards = [] } = useLandingData()

  if (!benefits?.title || !benefitCards.length) {
    return null
  }

  return (
    <section className="black-friday-sos-sg-benefits">
      <div className="black-friday-sos-sg-benefits__inner">
        <p className="black-friday-sos-sg-benefits__eyebrow">{benefits.eyebrow}</p>
        <h2>{benefits.title}</h2>
        <div className="black-friday-sos-sg-benefits__grid">
          {benefitCards.map((benefit) => (
            <article className="black-friday-sos-sg-benefits__item" key={benefit.title}>
              {benefit.imageUrl ? (
                <img src={benefit.imageUrl} alt="" />
              ) : (
                <div className="black-friday-sos-sg-benefits__placeholder" aria-hidden="true" />
              )}
              <h3>{benefit.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
