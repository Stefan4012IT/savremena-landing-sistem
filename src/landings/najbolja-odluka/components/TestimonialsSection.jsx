import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../landingContent'
import { useLandingData } from '../useLandingData'
import { SectionHeader } from './SectionHeader'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialsSection() {
  const { testimonials: section, testimonialCards = testimonials } = useLandingData()
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialCards.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [testimonialCards.length])

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
    <section className="landing-section testimonials-section">
      <div className="landing-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
        />
        <div className="testimonials-carousel" aria-label="Testimonijali">
          <div className="testimonials-carousel__track" ref={trackRef}>
            {testimonialCards.map((testimonial, index) => (
              <div
                className="testimonials-carousel__slide"
                key={testimonial.title}
                ref={(element) => {
                  slideRefs.current[index] = element
                }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          <div className="testimonials-carousel__dots" aria-label="Navigacija testimonijala">
            {testimonialCards.map((testimonial, index) => (
              <button
                className={index === activeIndex ? 'is-active' : ''}
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
