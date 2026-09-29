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
    <section className="upis-je-otvoren-sg-landing-section upis-je-otvoren-sg-scholarship-offer">
      <div className="upis-je-otvoren-sg-landing-container upis-je-otvoren-sg-scholarship-offer__inner">
        <div className="upis-je-otvoren-sg-scholarship-offer__content">
          <div className="upis-je-otvoren-sg-scholarship-offer__copy">
            {emotionalTurn.eyebrow ? (
              <p className="upis-je-otvoren-sg-scholarship-offer__ribbon">
                {emotionalTurn.eyebrow}
              </p>
            ) : null}
            <header className="upis-je-otvoren-sg-scholarship-offer__headline">
              <h2>{emotionalTurn.title}</h2>
            </header>
            {paragraphs.map((paragraph) => (
              <p key={typeof paragraph === 'string' ? paragraph : paragraph.text}>
                {typeof paragraph === 'string' || !paragraph.bold ? paragraph.text ?? paragraph : (
                  <>
                    {paragraph.text.split(paragraph.bold)[0]}
                    <strong>{paragraph.bold}</strong>
                    {paragraph.text.split(paragraph.bold).slice(1).join(paragraph.bold)}
                  </>
                )}
              </p>
            ))}
            {emotionalTurn.processTitle ? (
              <h3 className="upis-je-otvoren-sg-scholarship-offer__process-title">
                {emotionalTurn.processTitle}
              </h3>
            ) : null}
            {processText ? (
              <p>
                {processPhoneIndex >= 0 ? (
                  <>
                    {processText.slice(0, processPhoneIndex)}
                    <a
                      className="upis-je-otvoren-sg-scholarship-offer__process-phone"
                      href={`tel:${processPhone.replace(/[^\d+]/g, '')}`}
                    >
                      {processPhone}
                    </a>
                    {processText.slice(processPhoneIndex + processPhone.length)}
                  </>
                ) : processText}
              </p>
            ) : null}
            {emotionalTurn.ctaText ? <p>{emotionalTurn.ctaText}</p> : null}
          </div>
          <figure className="upis-je-otvoren-sg-scholarship-offer__image">
            <img
              src="https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/08/10_slobodnih_mesta_img_1.1.jpg"
              alt="Učenici Savremene gimnazije sa digitalnim uređajima"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
