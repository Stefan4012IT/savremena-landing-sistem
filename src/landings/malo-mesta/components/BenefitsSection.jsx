import { useLandingData } from '../useLandingData'

export function BenefitsSection() {
  const { benefits, benefitCards = [] } = useLandingData()

  if (!benefits?.title || !benefitCards.length) {
    return null
  }

  return (
    <section className="malo-mesta-benefits">
      <div className="malo-mesta-benefits__inner">
        <p className="malo-mesta-benefits__eyebrow">{benefits.eyebrow}</p>
        <h2>{benefits.title}</h2>
        <div className="malo-mesta-benefits__grid">
          {benefitCards.map((benefit) => (
            <article className="malo-mesta-benefits__item" key={benefit.title}>
              {benefit.imageUrl ? (
                <img src={benefit.imageUrl} alt="" />
              ) : (
                <div className="malo-mesta-benefits__placeholder" aria-hidden="true" />
              )}
              <h3>{benefit.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
