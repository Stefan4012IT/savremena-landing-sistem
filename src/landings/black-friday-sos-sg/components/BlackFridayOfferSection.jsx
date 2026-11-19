import { useLandingData } from '../useLandingData'

export function BlackFridayOfferSection() {
  const { blackFridayOffer } = useLandingData()

  if (!blackFridayOffer) return null

  return (
    <section className="black-friday-sos-sg-offer-strip">
      <div className="black-friday-sos-sg-offer-strip__inner">
        <h2 className="black-friday-sos-sg-offer-strip__title">{blackFridayOffer.title}</h2>
        <p>{blackFridayOffer.intro}</p>
        <p>{blackFridayOffer.detail}</p>
      </div>
    </section>
  )
}
