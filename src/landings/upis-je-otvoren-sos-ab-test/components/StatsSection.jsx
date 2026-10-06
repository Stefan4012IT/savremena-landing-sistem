import { useEffect, useRef, useState } from 'react'
import birdDecoration from '../assets/ptica_001.svg'
import { useLandingData } from '../useLandingData'

const birdDecorations = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

function AnimatedStat({ stat, shouldAnimate }) {
  const [displayValue, setDisplayValue] = useState(shouldAnimate ? 0 : stat.value)

  useEffect(() => {
    if (!shouldAnimate) return

    let frameId
    const duration = 1200
    const startedAt = performance.now()

    function tick(now) {
      const progress = Math.min((now - startedAt) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(stat.value * easedProgress))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [shouldAnimate, stat.value])

  return (
    <article className="upis-je-otvoren-sos-ab-test-stats-section__item">
      <p className="upis-je-otvoren-sos-ab-test-stats-section__value">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </p>
      <p className="upis-je-otvoren-sos-ab-test-stats-section__label">{stat.label}</p>
    </article>
  )
}

export function StatsSection() {
  const { results } = useLandingData()
  const sectionRef = useRef(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      const frameId = requestAnimationFrame(() => setShouldAnimate(true))
      return () => cancelAnimationFrame(frameId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.28 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="upis-je-otvoren-sos-ab-test-landing-section upis-je-otvoren-sos-ab-test-stats-section" ref={sectionRef}>
      {birdDecorations.map((position) => (
        <img
          className={`upis-je-otvoren-sos-ab-test-stats-section__bird upis-je-otvoren-sos-ab-test-stats-section__bird--${position}`}
          src={birdDecoration}
          alt=""
          aria-hidden="true"
          key={position}
        />
      ))}
      <div className="upis-je-otvoren-sos-ab-test-landing-container upis-je-otvoren-sos-ab-test-stats-section__content">
        <div className="upis-je-otvoren-sos-ab-test-stats-section__left">
          <header className="upis-je-otvoren-sos-ab-test-stats-section__header">
            <h2>{results.title}</h2>
          </header>
          <div className="upis-je-otvoren-sos-ab-test-stats-section__numbers">
            <div className="upis-je-otvoren-sos-ab-test-stats-section__grid">
              {results.stats.map((stat) => (
                <AnimatedStat stat={stat} shouldAnimate={shouldAnimate} key={stat.label} />
              ))}
            </div>
          </div>
        </div>
        <div className="upis-je-otvoren-sos-ab-test-stats-section__body-copy">
          <p className="upis-je-otvoren-sos-ab-test-stats-section__featured-label">{results.featuredLabel}</p>
          <p>{results.subtitle}</p>
          <p>{results.closing}</p>
          <p>{results.closingLead} <strong>{results.closingStrong}</strong></p>
        </div>
      </div>
    </section>
  )
}
