import { useLandingData } from '../useLandingData'

export function EmotionalTurnSection() {
  const { emotionalTurn, locale = 'sr' } = useLandingData()
  const paragraphs = Array.isArray(emotionalTurn.paragraphs) && emotionalTurn.paragraphs.length
    ? emotionalTurn.paragraphs
    : [emotionalTurn.text]
  const processText = emotionalTurn.processText ?? ''
  const processPhone = emotionalTurn.processPhone ?? ''
  const processPhoneIndex = processPhone ? processText.indexOf(processPhone) : -1
  const onlinePhrase = locale === 'en' ? 'Submit the form online' : 'prijavite online'
  const onlinePhraseIndex = processText.indexOf(onlinePhrase)

  function renderProcessText() {
    const matches = [
      processPhoneIndex >= 0 ? { index: processPhoneIndex, length: processPhone.length, type: 'phone' } : null,
      onlinePhraseIndex >= 0 ? { index: onlinePhraseIndex, length: onlinePhrase.length, type: 'online' } : null,
    ].filter(Boolean).sort((a, b) => a.index - b.index)

    if (!matches.length) return processText

    const nodes = []
    let cursor = 0
    matches.forEach((match, index) => {
      if (match.index < cursor) return
      if (match.index > cursor) nodes.push(processText.slice(cursor, match.index))
      const value = processText.slice(match.index, match.index + match.length)
      nodes.push(match.type === 'phone' ? (
        <a key={`phone-${index}`} className="upis-je-otvoren-is-scholarship-offer__process-phone" href={`tel:${processPhone.replace(/[^\d+]/g, '')}`}>
          {value}
        </a>
      ) : (
        <a key={`online-${index}`} className="upis-je-otvoren-is-scholarship-offer__process-phone" href="#prijava">
          {value}
        </a>
      ))
      cursor = match.index + match.length
    })
    if (cursor < processText.length) nodes.push(processText.slice(cursor))
    return nodes
  }

  return (
    <section className="upis-je-otvoren-is-landing-section upis-je-otvoren-is-scholarship-offer">
      <div className="upis-je-otvoren-is-landing-container upis-je-otvoren-is-scholarship-offer__inner">
        <div className="upis-je-otvoren-is-scholarship-offer__content">
          <div className="upis-je-otvoren-is-scholarship-offer__copy">
            {emotionalTurn.eyebrow ? (
              <p className="upis-je-otvoren-is-scholarship-offer__ribbon">
                {emotionalTurn.eyebrow}
              </p>
            ) : null}
            <header className="upis-je-otvoren-is-scholarship-offer__headline">
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
              <h3 className="upis-je-otvoren-is-scholarship-offer__process-title">
                {emotionalTurn.processTitle}
              </h3>
            ) : null}
            {processText ? (
              <p>{renderProcessText()}</p>
            ) : null}
            {emotionalTurn.ctaText ? <p>{emotionalTurn.ctaText}</p> : null}
          </div>
          <figure className="upis-je-otvoren-is-scholarship-offer__image">
            <img
              src="https://www.international-school.edu.rs/wp-content/uploads/2026/09/why_wait_img_1.png"
              alt={locale === 'en' ? 'International School students' : 'Učenici International Schoola'}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
