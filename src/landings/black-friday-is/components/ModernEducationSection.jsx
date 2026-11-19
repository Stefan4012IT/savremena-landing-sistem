import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'

export function ModernEducationSection() {
  const { modernEducation, locale = 'sr' } = useLandingData()
  const highlightedTerms = locale === 'en'
    ? /(International School|5 to 19 years|Cambridge)/g
    : /(International Schoolu|5 do 19 godina|Cambridge)/g

  return (
    <section className="black-friday-is-landing-section black-friday-is-modern-education">
      <div className="black-friday-is-landing-container black-friday-is-modern-education__grid">
        <div className="black-friday-is-modern-education__content">
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
        <div className="black-friday-is-modern-education__image-placeholder" aria-label="Fotografija škole">
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
