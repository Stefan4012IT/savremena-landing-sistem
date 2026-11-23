import { useLandingData } from '../useLandingData'

export function BlackFridayOfferSection() {
  const { schoolOverview } = useLandingData()

  if (!schoolOverview) return null

  return (
    <section className="black-friday-sos-sg-offer-strip">
      <div className="black-friday-sos-sg-offer-strip__inner">
        <div className="black-friday-sos-sg-offer-strip__top">
          <div className="black-friday-sos-sg-offer-strip__header">
            {schoolOverview.eyebrow ? (
              <p className="black-friday-sos-sg-offer-strip__eyebrow">{schoolOverview.eyebrow}</p>
            ) : null}
            <h2 className="black-friday-sos-sg-offer-strip__title">{schoolOverview.title}</h2>
            <p className="black-friday-sos-sg-offer-strip__intro">{schoolOverview.intro}</p>
          </div>
        </div>
        <div className="black-friday-sos-sg-offer-strip__schools">
          {schoolOverview.schools.slice(0, 1).map((school) => (
            <article className="black-friday-sos-sg-offer-strip__school" key={school.name}>
              <img src={school.logo} alt={school.name} />
              <h3>{school.title}</h3>
              <p>{school.text}</p>
            </article>
          ))}
          <div className="black-friday-sos-sg-offer-strip__visual">
            <img src={schoolOverview.imageUrl} alt="" />
          </div>
          {schoolOverview.schools.slice(1).map((school) => (
            <article className="black-friday-sos-sg-offer-strip__school" key={school.name}>
              <img src={school.logo} alt={school.name} />
              <h3>{school.title}</h3>
              <p>{school.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
