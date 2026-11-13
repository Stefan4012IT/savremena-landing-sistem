import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

function EventStrip({ hero, isEnglish, className = '' }) {
  return (
    <div className={`pravi-trenutak-is-event-strip ${className}`} aria-label={isEnglish ? 'Enrolment dates and offer' : 'Datumi upisa i ponuda'}>
      <div className="pravi-trenutak-is-event-strip__inner">
        <div className="pravi-trenutak-is-event-strip__content">
          <p className="pravi-trenutak-is-event-strip__date">
            <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <rect x="3.5" y="6" width="25" height="22" rx="1.5" />
              <path d="M9 3.5v5M23 3.5v5M4 12h24M9 17h2m4 0h2m4 0h2M9 22h2m4 0h2m4 0h2" />
            </svg>
            <span>{hero.eventDate}</span>
          </p>
          <p className="pravi-trenutak-is-event-strip__description">
            {hero.eventDescriptionStart}<strong>{hero.eventDescriptionEmphasis}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { hero, locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en/dobre-odluke' : '/dobre-odluke'
  const languageHref = isEnglish ? '/dobre-odluke' : '/en/dobre-odluke'
  const languageFlag = isEnglish
    ? 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_srb_flag.png'
    : 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_eng_flag.png'

  return (
    <>
    <section
      className="pravi-trenutak-is-hero"
      data-hero-version="jos-nije-kasno-za-bolju-skolu"
    >
      <header className="pravi-trenutak-is-hero__header" aria-label={isEnglish ? 'Main navigation' : 'Glavna navigacija'}>
        <a className="pravi-trenutak-is-hero__logo" href={homeHref} aria-label={isEnglish ? 'Home' : 'Početna'}>
          <img src="https://sr.international-school.edu.rs/wp-content/uploads/2026/09/is_logo_27-28.svg" alt="International School" />
        </a>
        <div className="pravi-trenutak-is-hero__institution-logos" aria-label={isEnglish ? 'Institutional logos and language switcher' : 'Institucionalni logotipi i izbor jezika'}>
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
          <a className="pravi-trenutak-is-hero__language-switch" href={languageHref} aria-label={isEnglish ? 'Switch to Serbian' : 'Switch to English'}>
            <img src={languageFlag} alt={isEnglish ? 'Srpski' : 'English'} />
          </a>
        </div>
      </header>
      <div className="pravi-trenutak-is-hero__inner">
        <div className="pravi-trenutak-is-hero__content" aria-label={isEnglish ? 'The right moment for the right decision' : 'Pravi trenutak za pravu odluku'}>
          <h1 className="pravi-trenutak-is-hero__title">
            <span className="pravi-trenutak-is-hero__title-line">
              {hero.promoTitleStart}<strong>{hero.promoTitleEmphasis}</strong>
            </span>
            <span className="pravi-trenutak-is-hero__title-line">
              {hero.promoTitleMiddle}<strong>{hero.promoTitleFinal}</strong>
            </span>
          </h1>
        </div>
      </div>
      <img
        className="pravi-trenutak-is-hero__background-image"
        src="https://www.international-school.edu.rs/wp-content/uploads/2026/11/dobre-odluke-background-001.jpg"
        alt=""
      />
      <EventStrip hero={hero} isEnglish={isEnglish} className="pravi-trenutak-is-event-strip--mobile" />
      <div className="pravi-trenutak-is-hero__form-panel" id="prijava">
        <LeadForm
          className="pravi-trenutak-is-lead-form--hero"
          headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
          headerText={isEnglish ? 'Give your child the most modern education in the region.' : 'Obezbedite svom detetu najsavremenije obrazovanje u regionu.'}
        />
      </div>
    </section>
    <EventStrip hero={hero} isEnglish={isEnglish} className="pravi-trenutak-is-event-strip--desktop" />
    </>
  )
}
