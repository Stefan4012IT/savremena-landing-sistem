import { useLandingData } from '../useLandingData'

export function EmotionalTurnSection() {
  const { emotionalTurn } = useLandingData()
  const paragraphs = Array.isArray(emotionalTurn.paragraphs) && emotionalTurn.paragraphs.length
    ? emotionalTurn.paragraphs
    : [emotionalTurn.text]
  const processText = emotionalTurn.processText ?? ''
  const processPhone = emotionalTurn.processPhone ?? ''
  const processPhoneIndex = processPhone ? processText.indexOf(processPhone) : -1

  return (
    <section className="nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-scholarship-offer">
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-scholarship-offer__inner">
        <div className="nije-kasno-za-bolju-skolu-is-scholarship-offer__content">
          <div className="nije-kasno-za-bolju-skolu-is-scholarship-offer__copy">
            <p className="nije-kasno-za-bolju-skolu-is-scholarship-offer__ribbon">
              {emotionalTurn.eyebrow}
            </p>
            <header className="nije-kasno-za-bolju-skolu-is-scholarship-offer__headline">
              <h2>{emotionalTurn.title}</h2>
            </header>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {emotionalTurn.processTitle ? (
              <h3 className="nije-kasno-za-bolju-skolu-is-scholarship-offer__process-title">
                {emotionalTurn.processTitle}
              </h3>
            ) : null}
            {processText ? (
              <p>
                {processPhoneIndex >= 0 ? (
                  <>
                    {processText.slice(0, processPhoneIndex)}
                    <a
                      className="nije-kasno-za-bolju-skolu-is-scholarship-offer__process-phone"
                      href={`tel:${processPhone.replace(/[^\d+]/g, '')}`}
                    >
                      {processPhone}
                    </a>
                    {processText.slice(processPhoneIndex + processPhone.length)}
                  </>
                ) : processText}
              </p>
            ) : null}
          </div>
          <figure className="nije-kasno-za-bolju-skolu-is-scholarship-offer__image">
            <img
              src="https://www.international-school.edu.rs/wp-content/uploads/2026/09/why_wait_img_1.png"
              alt="Učenici International Schoola"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
