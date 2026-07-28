import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import cambridgeLogo from '../../novo-odeljenje/assets/logos/cambridge-logo-white.png'
import ministryLogo from '../../novo-odeljenje/assets/logos/ministarstvo-prosvete-logo-white.png'
import savremenaGroupLogo from '../assets/Logo_sos_sg_001.svg'
import heroImage from '../assets/hero_img.png'

export function HeroSection() {
  const { hero } = useLandingData()
  const hasHighlightedTitle = hero.title.includes('ZATVARA!')
  const titleLines = hero.title.split('\n')

  return (
    <section className="malo-mesta-hero">
      <header className="malo-mesta-hero__header" aria-label="Glavna navigacija">
        <a className="malo-mesta-hero__logo" href="/malo-mesta" aria-label="Početna">
          <img src={savremenaGroupLogo} alt="Savremena osnovna škola i Savremena gimnazija" />
        </a>
        <div className="malo-mesta-hero__institution-logos" aria-label="Institucionalni logotipi">
          <img src={cambridgeLogo} alt="Cambridge International Education" />
          <img src={ministryLogo} alt="Ministarstvo prosvete" />
        </div>
      </header>
        <div className="malo-mesta-hero__inner">
          <div className="malo-mesta-hero__content">
            <h1>
              {hasHighlightedTitle ? (
                <>
                  {titleLines.map((line) => {
                    const isHighlightedLine = line.includes('ZATVARA!')
                    const isEnrollmentLine = line.includes('2026/27.')
                    const [beforeHighlight = '', afterHighlight = ''] = line.split('ZATVARA!')
                    const [enrollmentPrefix = '', enrollmentYear = ''] = line.split(' 2026/27.')

                    return (
                      <span className={`malo-mesta-hero__title-line${isHighlightedLine ? ' malo-mesta-hero__title-line--accent' : ''}${isEnrollmentLine ? ' malo-mesta-hero__title-line--enrollment' : ''}${line === 'se uskoro' ? ' malo-mesta-hero__title-line--light' : ''}`} key={line}>
                        {isEnrollmentLine ? (
                          <>
                            {enrollmentPrefix}
                            <span className="malo-mesta-hero__title-year"> {enrollmentYear ? `2026/27.${enrollmentYear}` : '2026/27.'}</span>
                          </>
                        ) : (
                          <>
                            {beforeHighlight}
                            {isHighlightedLine ? <span className="malo-mesta-hero__highlight">ZATVARA!</span> : null}
                            {afterHighlight}
                          </>
                        )}
                      </span>
                    )
                  })}
                </>
              ) : hero.title}
            </h1>
            <img className="malo-mesta-hero__visual" src={heroImage} alt="Učenik i nastavnica Savremene" />
            {hero.lead ? (
              <div className="malo-mesta-hero__copy">
                {hero.lead.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : null}
          </div>
          <div className="malo-mesta-hero__form-panel" id="prijava">
            <LeadForm introText="Iskoristite poslednju priliku i obezbedite svom detetu najsavremenije školovanje u regionu!" />
          </div>
        </div>
    </section>
  )
}
