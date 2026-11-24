import { useLandingData } from '../useLandingData'

export function ContactWidget() {
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'

  return (
    <aside className="black-friday-is-contact-widget">
      <div className="black-friday-is-contact-widget__anchor">
        <a className="black-friday-is-contact-widget__promo-box" href="#prijava-dole" aria-label={isEnglish ? 'Apply using the lower form' : 'Prijavite se putem donje forme'}>
          <span className="black-friday-is-contact-widget__visual">
            <strong>-38%</strong>
            <span>{isEnglish ? <>only until <b>30 Nov</b></> : <>samo do <b>30.11.</b></>}</span>
          </span>
          <span className="black-friday-is-contact-widget__label">{isEnglish ? 'Apply now' : 'Prijavite se'}</span>
        </a>
      </div>
    </aside>
  )
}
