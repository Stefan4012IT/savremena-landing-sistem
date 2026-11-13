import cambridgeLogo from '../assets/logos/cambridge-logo-white.png'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const heroImageLeftUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/enrollemnt_hero_left.png'
const heroImageRightUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/enrollemnt_hero_right.png'
const heroImageMobileUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/enrollemnt_hero_mob.png'

export function HeroSection() {
  const { hero, locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en/dobre-odluke' : '/dobre-odluke'
  const languageHref = isEnglish ? '/dobre-odluke' : '/en/dobre-odluke'
  const languageFlag = isEnglish
    ? 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_srb_flag.png'
    : 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_eng_flag.png'

  return (
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
      <div className="pravi-trenutak-is-hero__visual pravi-trenutak-is-hero__visual--left" aria-hidden="true">
        <img src={heroImageLeftUrl} alt="" />
      </div>
      <div className="pravi-trenutak-is-hero__visual pravi-trenutak-is-hero__visual--right" aria-hidden="true">
        <img src={heroImageRightUrl} alt="" />
      </div>
      <div className="pravi-trenutak-is-hero__inner">
        <div className="pravi-trenutak-is-hero__content" aria-label="Uvod u landing">
          <h1 className="pravi-trenutak-is-hero__title">
            <span className="pravi-trenutak-is-hero__title-line">{hero.titleFirstLine}</span>
            <span className="pravi-trenutak-is-hero__title-line">{hero.titleSecondLine}</span>
            <span className="pravi-trenutak-is-hero__title-emphasis">{hero.titleEmphasis}</span>
          </h1>
          <div className="pravi-trenutak-is-hero__copy">
            <p className="pravi-trenutak-is-hero__lead">
              {hero.copyBefore}
              <span className="pravi-trenutak-is-hero__lead-highlight">{hero.copyCambridge}</span>
              {hero.copyBetween}
              <span className="pravi-trenutak-is-hero__lead-highlight">{hero.copyLowest}</span>
              {hero.copyAfter}
            </p>
          </div>
        </div>
        <div className="pravi-trenutak-is-hero__mobile-visual" aria-hidden="true">
          <img src={heroImageMobileUrl} alt="" />
        </div>
        <div className="pravi-trenutak-is-hero__form-panel" id="prijava">
          <LeadForm
            className="pravi-trenutak-is-lead-form--hero"
            headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
            headerText={isEnglish ? 'Give your child the most modern education in the region.' : 'Obezbedite svom detetu najsavremenije obrazovanje u regionu.'}
          />
        </div>
      </div>
    </section>
  )
}
