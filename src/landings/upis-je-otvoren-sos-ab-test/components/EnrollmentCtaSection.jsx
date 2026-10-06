import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'
import birdDecoration from '../assets/ptica_001.svg'

const formBirdDecorations = ['one', 'two']

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-enrollment-cta">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-enrollment-cta__grid">
        <div className="upis-je-otvoren-sos-ab-test-enrollment-cta__copy">
          <h2>{enrollmentCta.title}</h2>
          <p>{enrollmentCta.introBefore}<strong>{enrollmentCta.introStrong}</strong>{enrollmentCta.introAfter}</p>
          <p className="upis-je-otvoren-sos-ab-test-enrollment-cta__price">{enrollmentCta.price}</p>
          <p>{enrollmentCta.description}</p>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-enrollment-cta__form-wrap">
          {formBirdDecorations.map((position) => (
            <img
              className={`upis-je-otvoren-sos-ab-test-enrollment-cta__form-bird upis-je-otvoren-sos-ab-test-enrollment-cta__form-bird--${position}`}
              src={birdDecoration}
              alt=""
              aria-hidden="true"
              key={position}
            />
          ))}
          <LeadForm
            className="upis-je-otvoren-sos-ab-test-lead-form--final"
            formName="Upis je otvoren – SOS – finalna forma"
            headerTitle="PROVERITE USLOVE UPISA"
            headerText="Ostavite podatke, a Admissions tim će vas kontaktirati sa svim informacijama."
          />
          <p className="upis-je-otvoren-sos-ab-test-enrollment-cta__note">{enrollmentCta.note}</p>
        </div>
      </div>
    </section>
  )
}
