import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 97, suffix: '%', label: 'zadovoljnih učenika i roditelja' },
  { value: 230, prefix: '+', label: 'medalja, nagrada i priznanja' },
  { value: 94, suffix: '%', label: 'učenika upisuje prvi željeni fakultet' },
  { value: 15, suffix: '+', label: 'godina postojanja' },
  { value: 3000, prefix: '+', label: 'uspešnih učenika' },
  { value: 30, suffix: '+', label: 'najboljih Cambridge studenta na svetu' },
]

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
    <article className="deset-slobodnih-mesta-stats-section__item">
      <p className="deset-slobodnih-mesta-stats-section__value">
        {stat.prefix}
        {displayValue}
        {stat.suffix}
      </p>
      <p className="deset-slobodnih-mesta-stats-section__label">{stat.label}</p>
    </article>
  )
}

export function StatsSection() {
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
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-stats-section" ref={sectionRef}>
      <div className="deset-slobodnih-mesta-landing-container deset-slobodnih-mesta-stats-section__grid">
        {stats.map((stat) => (
          <AnimatedStat stat={stat} shouldAnimate={shouldAnimate} key={stat.label} />
        ))}
      </div>
    </section>
  )
}
