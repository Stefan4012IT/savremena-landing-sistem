import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function ModernEducationSection() {
  const { modernEducation, locale = 'sr' } = useLandingData()
  const highlightedTerms = locale === 'en'
    ? /(International School|5 to 19 years|Cambridge)/g
    : /(International Schoolu|5 do 19 godina|Cambridge)/g

  return (
    <section className="open-day-is-secondary-landing-section open-day-is-secondary-modern-education">
      <div className="open-day-is-secondary-landing-container open-day-is-secondary-modern-education__grid">
        <div className="open-day-is-secondary-modern-education__content">
          <SectionHeader
            eyebrow={modernEducation.eyebrow}
            title={modernEducation.title}
            text={modernEducation.text}
          />
          {modernEducation.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.split(highlightedTerms).map((part, index) => (
                index % 2 === 1 ? <strong key={index}>{part}</strong> : part
              ))}
            </p>
          ))}
        </div>
        <div className="open-day-is-secondary-modern-education__image-placeholder" aria-label="Fotografija škole">
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
