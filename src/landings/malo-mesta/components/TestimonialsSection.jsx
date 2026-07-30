import { useEffect, useRef, useState } from 'react'
import { testimonials as defaultTestimonialCards } from '../../novo-odeljenje/landingContent'
import { SectionHeader } from '../../novo-odeljenje/components/SectionHeader'
import { TestimonialCard } from '../../novo-odeljenje/components/TestimonialCard'
import { useLandingData } from '../useLandingData'

const testimonialVideoEmbeds = [
  'https://www.youtube.com/embed/x3MGqdXHT14?si=v6Lyhhj2d_DaNdTY',
  'https://www.youtube.com/embed/iuPihLFWDT0?si=FssBVFDneKiWqi_6',
]

export function TestimonialsSection() {
  const { testimonials: section, testimonialCards = defaultTestimonialCards } = useLandingData()
  const cards = testimonialCards.length ? testimonialCards : defaultTestimonialCards
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    const track = trackRef.current
    const activeSlide = slideRefs.current[activeIndex]

    if (!track || !activeSlide) {
      return
    }

    track.scrollTo({ left: activeSlide.offsetLeft, behavior: 'smooth' })
  }, [activeIndex])

  if (!section) {
    return null
  }

  return (
    <section className="landing-section testimonials-section malo-mesta-testimonials">
      <div className="landing-container">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} text={section.text} />
        <div className="testimonials-carousel" aria-label="Testimonijali">
          <div className="testimonials-carousel__track" ref={trackRef}>
            {cards.map((testimonial, index) => {
              const videoIndex = cards
                .slice(0, index + 1)
                .filter((item) => item.variant === 'video').length - 1
              const videoEmbedUrl = testimonial.variant === 'video'
                ? testimonialVideoEmbeds[videoIndex]
                : undefined

              return (
                <div
                  className="testimonials-carousel__slide"
                  key={testimonial.title}
                  ref={(element) => { slideRefs.current[index] = element }}
                >
                  <TestimonialCard {...testimonial} videoEmbedUrl={videoEmbedUrl} />
                </div>
              )
            })}
          </div>
          <div className="testimonials-carousel__dots" aria-label="Navigacija testimonijala">
            {cards.map((testimonial, index) => (
              <button
                className={index === activeIndex ? 'is-active' : ''}
                type="button"
                key={testimonial.title}
                onClick={() => setActiveIndex(index)}
                aria-label={`Prikaži testimonijal ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
