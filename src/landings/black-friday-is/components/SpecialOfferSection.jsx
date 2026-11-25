import { useLandingData } from '../useLandingData'

function renderOfferText(text, isEnglish) {
  const highlights = isEnglish ? /^(38%|30 November)$/ : /^(38%|30\.11!)$/
  const parts = text.split(isEnglish ? /(38%|30 November)/g : /(38%|30\.11!)/g)

  return parts.map((part, index) => (highlights.test(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part))
}

export function SpecialOfferSection() {
  const { specialOffer, locale = 'sr' } = useLandingData()

  return (
    <section className="black-friday-is-landing-section black-friday-is-special-offer">
      <div className="black-friday-is-landing-container black-friday-is-special-offer__box">
        <div className="black-friday-is-special-offer__content">
          {specialOffer.eyebrow ? <p className="black-friday-is-special-offer__eyebrow">{specialOffer.eyebrow}</p> : null}
          <h2>{specialOffer.title}</h2>
          {specialOffer.text ? <p className="black-friday-is-special-offer__text">{renderOfferText(specialOffer.text, locale === 'en')}</p> : null}
        </div>
        <a className="black-friday-is-landing-link black-friday-is-landing-link--light" href="#prijava-dole">
          {locale === 'en' ? 'Apply now' : 'Prijavite se'}
        </a>
      </div>
    </section>
  )
}
