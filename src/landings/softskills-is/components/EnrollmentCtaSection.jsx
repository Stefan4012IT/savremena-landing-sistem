import './enrollment-cta.scss'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()
  if (!enrollmentCta) return null

  return (
    <section className="softskills-is-enrollment-cta" aria-labelledby="softskills-is-enrollment-cta-title">
      <div className="softskills-is-landing-container softskills-is-enrollment-cta__inner">
        <div className="softskills-is-enrollment-cta__content">
          <p className="softskills-is-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2 id="softskills-is-enrollment-cta-title">{enrollmentCta.title}</h2>
          <p>{enrollmentCta.text}</p>
          <p className="softskills-is-enrollment-cta__signature">{enrollmentCta.signature}</p>
        </div>
        <div className="softskills-is-enrollment-cta__form" id="softskills-is-enrollment-cta-form">
          <LeadForm
            className="softskills-is-lead-form--enrollment"
            headerTitle={enrollmentCta.formTitle}
            headerText={enrollmentCta.formText}
          />
        </div>
      </div>
    </section>
  )
}
