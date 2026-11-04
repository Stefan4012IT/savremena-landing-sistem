import cambridgeLogo from '../../upis-je-otvoren-is/assets/logos/cambridge-logo-white.png'
import internationalSchoolLogo from '../assets/IS-logo-5-19_001.svg'
import './hero-softskills.scss'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const heroImageLeftUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/IS_open_day_secondary_hero-img.jpg'
const heroImageMobileUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/IS_open_day_secondary_hero-img.jpg'

function renderHighlightedText(text, phrases = []) {
  if (!phrases.length) return text

  const escapedPhrases = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const phrasePattern = new RegExp(`(${escapedPhrases.join('|')})`, 'g')

  return text.split(phrasePattern).map((part, index) => (
    phrases.includes(part)
      ? <span className="open-day-is-secondary-hero__highlight" key={`${part}-${index}`}>{part}</span>
      : part
  ))
}

export function HeroSection() {
  const { hero, locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en/open-day-secondary' : '/open-day-secondary'
  const languageHref = isEnglish ? '/open-day-secondary' : '/en/open-day-secondary'
  const languageFlag = isEnglish
    ? 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_srb_flag.png'
    : 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_eng_flag.png'

  return (
    <section
      className="open-day-is-secondary-hero"
      data-hero-version="open-day-secondary"
    >
      <header className="open-day-is-secondary-hero__header" aria-label={isEnglish ? 'Main navigation' : 'Glavna navigacija'}>
        <a className="open-day-is-secondary-hero__logo" href={homeHref} aria-label={isEnglish ? 'Home' : 'Početna'}>
          <img src={internationalSchoolLogo} alt="International School" />
        </a>
        <div className="open-day-is-secondary-hero__institution-logos" aria-label={isEnglish ? 'Institutional logos and language switcher' : 'Institucionalni logotipi i izbor jezika'}>
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
          <a className="open-day-is-secondary-hero__language-switch" href={languageHref} aria-label={isEnglish ? 'Switch to Serbian' : 'Switch to English'}>
            <img src={languageFlag} alt={isEnglish ? 'Srpski' : 'English'} />
          </a>
        </div>
      </header>
      <div className="open-day-is-secondary-hero__visual open-day-is-secondary-hero__visual--left" aria-hidden="true">
        <img src={heroImageLeftUrl} alt="" />
      </div>
      <div className="open-day-is-secondary-hero__inner">
        <div className="open-day-is-secondary-hero__content" aria-label="Uvod u landing">
          <h3 className="open-day-is-secondary-hero__event-title">{hero.eventTitle}</h3>
          <h1 className="open-day-is-secondary-hero__title">{hero.title}</h1>
          <h2 className="open-day-is-secondary-hero__subtitle">{hero.subtitle}</h2>
          <div className="open-day-is-secondary-hero__mobile-visual" aria-hidden="true">
            <img src={heroImageMobileUrl} alt="" />
          </div>
          <div className="open-day-is-secondary-hero__copy">
            {hero.paragraphs.map((paragraph, index) => (
              <p key={paragraph}>{renderHighlightedText(paragraph, hero.paragraphHighlights?.[index])}</p>
            ))}
          </div>
          <p className="open-day-is-secondary-hero__closing">{hero.closing}</p>
        </div>
        <div className="open-day-is-secondary-hero__form-panel" id="prijava">
          <LeadForm
            className="open-day-is-secondary-lead-form--hero"
            headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
          />
        </div>
      </div>
    </section>
  )
}
