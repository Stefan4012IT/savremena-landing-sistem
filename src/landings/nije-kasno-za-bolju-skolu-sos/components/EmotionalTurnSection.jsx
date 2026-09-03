import { useLandingData } from '../useLandingData'

const instagramReelEmbedUrl = 'https://www.instagram.com/reel/DcvggteO5c_/embed'

function InstagramReelEmbed() {
  return (
    <iframe
      src={instagramReelEmbedUrl}
      title="Instagram reel Savremene osnovne škole"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

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
          <figure className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__reel" aria-label="Instagram reel Savremene osnovne škole">
            <div className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__reel-frame">
              <InstagramReelEmbed />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
