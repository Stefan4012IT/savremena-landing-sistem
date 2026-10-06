import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import birdDecoration from '../assets/ptica_001.svg'

export function EnrollmentProcessSection() {
  const { enrollmentProcess } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-enrollment-process">
      <div className="upis-je-otvoren-sos-ab-test-landing-container">
        <SectionHeader title={enrollmentProcess.title} />
        <ol className="upis-je-otvoren-sos-ab-test-enrollment-process__steps">
          {enrollmentProcess.steps.map((step, index) => (
            <li key={step.title}>
              <img className="upis-je-otvoren-sos-ab-test-enrollment-process__bird upis-je-otvoren-sos-ab-test-enrollment-process__bird--primary" src={birdDecoration} alt="" aria-hidden="true" />
              <img className="upis-je-otvoren-sos-ab-test-enrollment-process__bird upis-je-otvoren-sos-ab-test-enrollment-process__bird--secondary" src={birdDecoration} alt="" aria-hidden="true" />
              <span className="upis-je-otvoren-sos-ab-test-enrollment-process__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
