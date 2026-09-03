import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import { TestimonialCard } from './TestimonialCard'

const testimonialVideoEmbeds = [
  'https://www.youtube.com/embed/x3MGqdXHT14?si=v6Lyhhj2d_DaNdTY',
  'https://www.youtube.com/embed/iuPihLFWDT0?si=FssBVFDneKiWqi_6',
]

export function TestimonialsSection() {
  const { testimonials: section, testimonialCards = testimonials } = useLandingData()
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
    <section className="nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-testimonials-section">
      <div className="nije-kasno-za-bolju-skolu-is-landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="nije-kasno-za-bolju-skolu-is-testimonials-carousel" aria-label="Testimonijali">
          <div className="nije-kasno-za-bolju-skolu-is-testimonials-carousel__track" ref={trackRef}>
            {testimonialCards.map((testimonial, index) => {
              const videoIndex = testimonialCards
                .slice(0, index + 1)
                .filter((item) => item.variant === 'video').length - 1
              const videoEmbedUrl = testimonial.variant === 'video'
                ? testimonialVideoEmbeds[videoIndex]
                : undefined

              return (
                <div
                  className="nije-kasno-za-bolju-skolu-is-testimonials-carousel__slide"
                  key={testimonial.title}
                  ref={(element) => {
                    slideRefs.current[index] = element
                  }}
                >
                  <TestimonialCard {...testimonial} videoEmbedUrl={videoEmbedUrl} />
                </div>
              )
            })}
          </div>
          <div className="nije-kasno-za-bolju-skolu-is-testimonials-carousel__dots" aria-label="Navigacija testimonijala">
            {testimonialCards.map((testimonial, index) => (
              <button
                className={index === activeIndex ? 'nije-kasno-za-bolju-skolu-is-is-active' : ''}
                type="button"
                key={testimonial.title}
                onClick={() => setActiveIndex(index)}
                aria-label={`Prikazi testimonijal ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
