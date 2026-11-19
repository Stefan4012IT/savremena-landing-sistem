import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()

  if (!enrollmentCta) return null

  return (
    <section className="black-friday-sos-sg-enrollment-cta">
      <div className="black-friday-sos-sg-enrollment-cta__inner">
        <div className="black-friday-sos-sg-enrollment-cta__content">
          <p className="black-friday-sos-sg-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2>{enrollmentCta.title}</h2>
          <p>{enrollmentCta.text}</p>
          <p className="black-friday-sos-sg-enrollment-cta__highlight">{enrollmentCta.highlight}</p>
          <p className="black-friday-sos-sg-enrollment-cta__signature">{enrollmentCta.signature}</p>
        </div>
        <div className="black-friday-sos-sg-enrollment-cta__form-panel" id="prijava">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
