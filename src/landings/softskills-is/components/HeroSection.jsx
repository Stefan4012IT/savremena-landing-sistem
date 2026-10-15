import cambridgeLogo from '../../upis-je-otvoren-is/assets/logos/cambridge-logo-white.png'
import './hero-softskills.scss'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const heroImageLeftUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_enrollment_is_open_img_left_001.png'
const heroImageRightUrl = 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_enrollment_is_open_img_right_001.png'
const heroImageMobileUrl = heroImageRightUrl

export function HeroSection() {
  const { hero, locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en/soft-skills' : '/soft-skills'
  const languageHref = isEnglish ? '/soft-skills' : '/en/soft-skills'
  const languageFlag = isEnglish
    ? 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_srb_flag.png'
    : 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_eng_flag.png'

  return (
    <section
      className="softskills-is-hero"
      data-hero-version="soft-skills"
    >
      <header className="softskills-is-hero__header" aria-label={isEnglish ? 'Main navigation' : 'Glavna navigacija'}>
        <a className="softskills-is-hero__logo" href={homeHref} aria-label={isEnglish ? 'Home' : 'Početna'}>
          <img src="https://sr.international-school.edu.rs/wp-content/uploads/2026/09/is_logo_27-28.svg" alt="International School" />
        </a>
        <div className="softskills-is-hero__institution-logos" aria-label={isEnglish ? 'Institutional logos and language switcher' : 'Institucionalni logotipi i izbor jezika'}>
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
          <a className="softskills-is-hero__language-switch" href={languageHref} aria-label={isEnglish ? 'Switch to Serbian' : 'Switch to English'}>
            <img src={languageFlag} alt={isEnglish ? 'Srpski' : 'English'} />
          </a>
        </div>
      </header>
      <div className="softskills-is-hero__visual softskills-is-hero__visual--left" aria-hidden="true">
        <img src={heroImageLeftUrl} alt="" />
      </div>
      <div className="softskills-is-hero__visual softskills-is-hero__visual--right" aria-hidden="true">
        <img src={heroImageRightUrl} alt="" />
      </div>
      <div className="softskills-is-hero__inner">
        <div className="softskills-is-hero__content" aria-label="Uvod u landing">
          <h1 className="softskills-is-hero__title">{hero.title}</h1>
          <h2 className="softskills-is-hero__subtitle">{hero.subtitle}</h2>
          <div className="softskills-is-hero__copy">
            {hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul className="softskills-is-hero__skills">
            {hero.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <p className="softskills-is-hero__closing">{hero.closing}</p>
        </div>
        <div className="softskills-is-hero__mobile-visual" aria-hidden="true">
          <img src={heroImageMobileUrl} alt="" />
        </div>
        <div className="softskills-is-hero__form-panel" id="prijava">
          <LeadForm
            className="softskills-is-lead-form--hero"
            headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
            headerText={isEnglish ? 'There is still time to give your child an exceptional international education.' : 'Još uvek imate priliku da svom detetu obezbedite najsavremenije obrazovanje u regionu.'}
          />
        </div>
      </div>
    </section>
  )
}
