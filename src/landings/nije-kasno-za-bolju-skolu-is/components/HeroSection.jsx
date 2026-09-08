import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const heroImageUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_why_wait_hero_img.png'
const heroImageMobileUrl = heroImageUrl

export function HeroSection() {
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en/why-wait' : '/why-wait'
  const languageHref = isEnglish ? '/why-wait' : '/en/why-wait'
  const languageFlag = isEnglish
    ? 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_srb_flag.png'
    : 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_eng_flag.png'

  return (
    <section
      className="nije-kasno-za-bolju-skolu-is-hero"
      data-hero-version="jos-nije-kasno-za-bolju-skolu"
    >
      <header className="nije-kasno-za-bolju-skolu-is-hero__header" aria-label={isEnglish ? 'Main navigation' : 'Glavna navigacija'}>
        <a className="nije-kasno-za-bolju-skolu-is-hero__logo" href={homeHref} aria-label={isEnglish ? 'Home' : 'Početna'}>
          <img src="https://www.international-school.edu.rs/wp-content/uploads/2020/03/IS_logo_white.svg" alt="International School" />
        </a>
        <div className="nije-kasno-za-bolju-skolu-is-hero__institution-logos" aria-label={isEnglish ? 'Institutional logos and language switcher' : 'Institucionalni logotipi i izbor jezika'}>
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
          <a className="nije-kasno-za-bolju-skolu-is-hero__language-switch" href={languageHref} aria-label={isEnglish ? 'Switch to Serbian' : 'Switch to English'}>
            <img src={languageFlag} alt={isEnglish ? 'Srpski' : 'English'} />
          </a>
        </div>
      </header>
      <div className="nije-kasno-za-bolju-skolu-is-hero__inner">
        <div className="nije-kasno-za-bolju-skolu-is-hero__content" aria-label="Uvod u landing">
          <h1 className="nije-kasno-za-bolju-skolu-is-hero__title">{isEnglish ? 'It is not too late for a better school!' : 'Nije kasno za bolju školu!'}</h1>
          <div className="nije-kasno-za-bolju-skolu-is-hero__copy">
            <p className="nije-kasno-za-bolju-skolu-is-hero__lead">
              {isEnglish ? (
                <>Make the most of your <span className="nije-kasno-za-bolju-skolu-is-hero__lead-highlight">final opportunity</span> to enrol at International School</>
              ) : (
                <>Iskoristite <span className="nije-kasno-za-bolju-skolu-is-hero__lead-highlight">poslednju šansu</span> za upis u International School</>
              )}
            </p>
            <p className="nije-kasno-za-bolju-skolu-is-hero__message">
              {isEnglish ? (
                <>Make the right decision and give your child a <strong>TRULY DIFFERENT</strong> education.</>
              ) : (
                <>Donesite pravu odluku i obezbedite svom detetu <strong>STVARNO DRUGAČIJE</strong> školovanje.</>
              )}
            </p>
          </div>
        </div>
        <div className="nije-kasno-za-bolju-skolu-is-hero__visual" aria-hidden="true">
          <picture>
            <source media="(max-width: 991px)" srcSet={heroImageMobileUrl} />
            <img src={heroImageUrl} alt="" />
          </picture>
        </div>
        <div className="nije-kasno-za-bolju-skolu-is-hero__form-panel" id="prijava">
          <LeadForm
            className="nije-kasno-za-bolju-skolu-is-lead-form--hero"
            headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
            headerText={isEnglish ? 'There is still time to give your child an exceptional international education.' : 'Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu.'}
          />
        </div>
      </div>
    </section>
  )
}
