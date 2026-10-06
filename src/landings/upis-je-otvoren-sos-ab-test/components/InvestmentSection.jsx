import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import birdDecoration from '../assets/ptica_001.svg'

const birdDecorations = ['one', 'two', 'three', 'four']

export function InvestmentSection() {
  const { investment } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-investment-section">
      {birdDecorations.map((position) => (
        <img
          className={`upis-je-otvoren-sos-ab-test-investment-section__bird upis-je-otvoren-sos-ab-test-investment-section__bird--${position}`}
          src={birdDecoration}
          alt=""
          aria-hidden="true"
          key={position}
        />
      ))}
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-investment-section__grid">
        <div className="upis-je-otvoren-sos-ab-test-investment-section__intro">
          <SectionHeader title={investment.title} />
          <p className="upis-je-otvoren-sos-ab-test-investment-section__price">{investment.price}</p>
          <p>{investment.intro}<strong>{investment.emphasis}</strong></p>
          <p>{investment.followup}</p>
          <a className="upis-je-otvoren-sos-ab-test-landing-link" href="#prijava">{investment.ctaLabel}</a>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-investment-section__benefits">
          <h3>{investment.benefitsTitle}</h3>
          <ul>
            {investment.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
