import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function ModernEducationSection() {
  const { modernEducation } = useLandingData()

  return (
    <section className="nije-kasno-za-bolju-skolu-sg-landing-section nije-kasno-za-bolju-skolu-sg-modern-education">
      <div className="nije-kasno-za-bolju-skolu-sg-landing-container nije-kasno-za-bolju-skolu-sg-modern-education__grid">
        <div className="nije-kasno-za-bolju-skolu-sg-modern-education__content">
          <SectionHeader
            eyebrow={modernEducation.eyebrow}
            title={modernEducation.title}
            text={modernEducation.text}
          />
          {modernEducation.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="nije-kasno-za-bolju-skolu-sg-modern-education__image-placeholder" aria-label="Fotografija škole">
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
