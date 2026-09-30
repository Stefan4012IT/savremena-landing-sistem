import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../baseDataContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import { TestimonialCard } from './TestimonialCard'

const testimonialVideoEmbeds = [
  'https://www.youtube.com/embed/x3MGqdXHT14?si=v6Lyhhj2d_DaNdTY',
  'https://www.youtube.com/embed/iuPihLFWDT0?si=FssBVFDneKiWqi_6',
]

export function TestimonialsSection() {
  const { testimonials: section, testimonialCards = testimonials, locale = 'sr' } = useLandingData()
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    const track = trackRef.current
    const activeSlide = slideRefs.current[activeIndex]

    if (!track || !activeSlide) {
      return
    }

    track.scrollTo({
      left: activeSlide.offsetLeft,
      behavior: 'smooth',
    })
  }, [activeIndex])

  return (
    <section className="upis-je-otvoren-is-landing-section upis-je-otvoren-is-testimonials-section">
      <div className="upis-je-otvoren-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="upis-je-otvoren-is-testimonials-carousel" aria-label={locale === 'en' ? 'Testimonials' : 'Testimonijali'}>
          <div className="upis-je-otvoren-is-testimonials-carousel__track" ref={trackRef}>
            {testimonialCards.map((testimonial, index) => {
              const videoIndex = testimonialCards
                .slice(0, index + 1)
                .filter((item) => item.variant === 'video').length - 1
              const videoEmbedUrl = testimonial.variant === 'video'
                ? testimonial.videoEmbedUrl ?? testimonialVideoEmbeds[videoIndex]
                : undefined

              return (
                <div
                  className="upis-je-otvoren-is-testimonials-carousel__slide"
                  key={testimonial.title}
                  ref={(element) => {
                    slideRefs.current[index] = element
                  }}
                >
                  <TestimonialCard {...testimonial} locale={locale} videoEmbedUrl={videoEmbedUrl} />
                </div>
              )
            })}
          </div>
          <div className="upis-je-otvoren-is-testimonials-carousel__dots" aria-label={locale === 'en' ? 'Testimonial navigation' : 'Navigacija testimonijala'}>
            {testimonialCards.map((testimonial, index) => (
              <button
                className={index === activeIndex ? 'upis-je-otvoren-is-is-active' : ''}
                type="button"
                key={testimonial.title}
                onClick={() => setActiveIndex(index)}
                aria-label={`${locale === 'en' ? 'Show testimonial' : 'Prikazi testimonijal'} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
