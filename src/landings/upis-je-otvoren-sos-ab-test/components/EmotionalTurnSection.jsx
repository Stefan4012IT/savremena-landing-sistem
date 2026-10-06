import { useLandingData } from '../useLandingData'

const instagramReelEmbedUrl = 'https://www.instagram.com/reel/DcvggteO5c_/embed'

export function EmotionalTurnSection() {
  const { emotionalTurn } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-scholarship-offer">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-scholarship-offer__inner">
        <div className="upis-je-otvoren-sos-ab-test-scholarship-offer__content">
          <div className="upis-je-otvoren-sos-ab-test-scholarship-offer__copy">
          <header className="upis-je-otvoren-sos-ab-test-scholarship-offer__headline">
            <h2>{emotionalTurn.title}</h2>
            <p>{emotionalTurn.intro}</p>
          </header>
            <div className="upis-je-otvoren-sos-ab-test-scholarship-offer__reasons">
              {emotionalTurn.reasons.map((reason) => (
                <article className="upis-je-otvoren-sos-ab-test-scholarship-offer__reason" key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
            <a className="upis-je-otvoren-sos-ab-test-scholarship-offer__cta" href="#prijava">
              {emotionalTurn.ctaLabel}
            </a>
          </div>
          <figure className="upis-je-otvoren-sos-ab-test-scholarship-offer__reel" aria-label="Instagram reel Savremene osnovne škole">
            <div className="upis-je-otvoren-sos-ab-test-scholarship-offer__reel-frame">
              <iframe
                src={instagramReelEmbedUrl}
                title="Instagram reel Savremene osnovne škole"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
