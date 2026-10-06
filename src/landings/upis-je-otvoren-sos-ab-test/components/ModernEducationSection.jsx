import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function ModernEducationSection() {
  const { modernEducation } = useLandingData()

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-modern-education">
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-modern-education__grid">
        <SectionHeader
          eyebrow={modernEducation.eyebrow}
          title={modernEducation.title}
        />
        <div className="upis-je-otvoren-sos-ab-test-modern-education__content">
          <p>{modernEducation.text}</p>
          {modernEducation.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {modernEducation.skills?.length ? (
            <ul className="upis-je-otvoren-sos-ab-test-modern-education__skills">
              {modernEducation.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          ) : null}
          {modernEducation.closing ? <p>{modernEducation.closing}</p> : null}
        </div>
        <div className="upis-je-otvoren-sos-ab-test-modern-education__image-placeholder" aria-label="Fotografija škole">
          {modernEducation.imageUrl ? (
            <img src={modernEducation.imageUrl} alt="" />
          ) : (
            <span>{modernEducation.imagePlaceholder}</span>
          )}
        </div>
      </div>
    </section>
  )
}
