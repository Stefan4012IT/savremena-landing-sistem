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
  const paragraphs = Array.isArray(emotionalTurn.paragraphs) && emotionalTurn.paragraphs.length
    ? emotionalTurn.paragraphs
    : [emotionalTurn.text]
  const processText = emotionalTurn.processText ?? ''
  const processPhone = emotionalTurn.processPhone ?? ''
  const processPhoneIndex = processPhone ? processText.indexOf(processPhone) : -1

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
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {emotionalTurn.processTitle ? (
              <h3 className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__process-title">
                {emotionalTurn.processTitle}
              </h3>
            ) : null}
            {processText ? (
              <p>
                {processPhoneIndex >= 0 ? (
                  <>
                    {processText.slice(0, processPhoneIndex)}
                    <a
                      className="nije-kasno-za-bolju-skolu-sos-scholarship-offer__process-phone"
                      href={`tel:${processPhone.replace(/[^\d+]/g, '')}`}
                    >
                      {processPhone}
                    </a>
                    {processText.slice(processPhoneIndex + processPhone.length)}
                  </>
                ) : processText}
              </p>
            ) : null}
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
