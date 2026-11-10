import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()

  if (!enrollmentCta) return null

  return (
    <section className="svetski-dan-deteta-sos-sg-enrollment-cta">
      <div className="svetski-dan-deteta-sos-sg-enrollment-cta__inner">
        <div className="svetski-dan-deteta-sos-sg-enrollment-cta__content">
          <p className="svetski-dan-deteta-sos-sg-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2>{enrollmentCta.title}</h2>
          <p>{enrollmentCta.text}</p>
          <p className="svetski-dan-deteta-sos-sg-enrollment-cta__highlight">{enrollmentCta.highlight}</p>
          <p className="svetski-dan-deteta-sos-sg-enrollment-cta__signature">{enrollmentCta.signature}</p>
        </div>
        <div className="svetski-dan-deteta-sos-sg-enrollment-cta__form-panel" id="prijava">
          <LeadForm introText="Saznajte više o programu i obezbedite detetu obrazovanje za budućnost." />
        </div>
      </div>
    </section>
  )
}
