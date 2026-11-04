import './enrollment-cta.scss'
import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()
  if (!enrollmentCta) return null

  return (
    <section className="open-day-is-secondary-enrollment-cta" aria-labelledby="open-day-is-secondary-enrollment-cta-title">
      <div className="open-day-is-secondary-landing-container open-day-is-secondary-enrollment-cta__inner">
        <div className="open-day-is-secondary-enrollment-cta__content">
          <p className="open-day-is-secondary-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2 id="open-day-is-secondary-enrollment-cta-title">{enrollmentCta.title}</h2>
          <p>{enrollmentCta.text}</p>
          <p className="open-day-is-secondary-enrollment-cta__signature">{enrollmentCta.signature}</p>
        </div>
        <div className="open-day-is-secondary-enrollment-cta__form" id="open-day-is-secondary-enrollment-cta-form">
          <LeadForm
            className="open-day-is-secondary-lead-form--enrollment"
            headerTitle={enrollmentCta.formTitle}
          />
        </div>
      </div>
    </section>
  )
}
