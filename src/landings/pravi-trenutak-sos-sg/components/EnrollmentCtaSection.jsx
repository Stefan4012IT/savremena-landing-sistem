import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()

  if (!enrollmentCta) return null

  return (
    <section className="pravi-trenutak-sos-sg-enrollment-cta">
      <div className="pravi-trenutak-sos-sg-enrollment-cta__inner">
        <div className="pravi-trenutak-sos-sg-enrollment-cta__content">
          <p className="pravi-trenutak-sos-sg-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2>{enrollmentCta.title}</h2>
          <p>{enrollmentCta.text}</p>
          <p className="pravi-trenutak-sos-sg-enrollment-cta__highlight">{enrollmentCta.highlight}</p>
          <p className="pravi-trenutak-sos-sg-enrollment-cta__signature">{enrollmentCta.signature}</p>
        </div>
        <div className="pravi-trenutak-sos-sg-enrollment-cta__form-panel" id="prijava">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
