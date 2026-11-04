import { useLandingData } from '../useLandingData'

function StatCard({ value, text, source, variant = 'light' }) {
  return (
    <article className={`open-day-is-secondary-future-skills__stat open-day-is-secondary-future-skills__stat--${variant}`}>
      <strong>{value}</strong>
      <p>{text}</p>
      {source ? <span>{source}</span> : null}
    </article>
  )
}

export function FutureSkillsSection() {
  const { futureSkills, locale = 'sr' } = useLandingData()
  if (!futureSkills) return null
  const sourcePrefix = locale === 'en' ? 'Source:' : 'Izvor:'
  const SourceLink = ({ source, className = '' }) => source ? (
    <a className={`open-day-is-secondary-future-skills__source ${className}`} href={source.href} target="_blank" rel="noreferrer">
      {sourcePrefix} {source.label}
    </a>
  ) : null

  return (
    <section className="open-day-is-secondary-landing-section open-day-is-secondary-future-skills">
      <div className="open-day-is-secondary-landing-container">
        <header className="open-day-is-secondary-future-skills__heading">
          <p className="open-day-is-secondary-future-skills__eyebrow">{futureSkills.eyebrow}</p>
          <h2>{futureSkills.title}</h2>
        </header>

        <div className="open-day-is-secondary-future-skills__wef">
          <div className="open-day-is-secondary-future-skills__intro">
            <p>{futureSkills.intro}</p>
            <SourceLink source={futureSkills.sources[0]} />
          </div>
          <div className="open-day-is-secondary-future-skills__visuals">
            <div className="open-day-is-secondary-future-skills__chart" role="img" aria-label={futureSkills.chartAriaLabel}>
              <h3>{futureSkills.chartTitle}</h3>
              {futureSkills.wefSkills.map((skill) => (
                <div className="open-day-is-secondary-future-skills__chart-row" key={skill.label}>
                  <span>{skill.label}</span>
                  <div className="open-day-is-secondary-future-skills__chart-track">
                    <div className="open-day-is-secondary-future-skills__chart-bar" style={{ '--skill-level': `${skill.value}%` }}>
                      <b>{skill.value}%</b>
                    </div>
                  </div>
                </div>
              ))}
              <div className="open-day-is-secondary-future-skills__chart-scale" aria-hidden="true">
                <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
              </div>
            </div>
            <div className="open-day-is-secondary-future-skills__wef-stats">
              {futureSkills.wefStats.map((stat) => <StatCard key={stat.value} {...stat} />)}
            </div>
          </div>
        </div>

        <p className="open-day-is-secondary-future-skills__transition">{futureSkills.transition}</p>

        <section className="open-day-is-secondary-future-skills__ai-panel" aria-labelledby="open-day-is-secondary-future-skills-ai-title">
          <div className="open-day-is-secondary-future-skills__ai-copy">
            <p className="open-day-is-secondary-future-skills__eyebrow">{futureSkills.aiEyebrow}</p>
            <h3 id="open-day-is-secondary-future-skills-ai-title">{futureSkills.aiTitle}</h3>
            <p>{futureSkills.aiText}</p>
            <p>{futureSkills.aiTextContinued}</p>
            <SourceLink source={futureSkills.sources[2]} className="open-day-is-secondary-future-skills__source--light" />
          </div>
          <div className="open-day-is-secondary-future-skills__ai-stats" aria-label={futureSkills.aiStatsLabel}>
            {futureSkills.aiStats.map((stat) => <StatCard key={stat.value} {...stat} variant="dark" />)}
          </div>
          <div className="open-day-is-secondary-future-skills__life">
            <h3>{futureSkills.lifeTitle}</h3>
            <div className="open-day-is-secondary-future-skills__life-copy">
              <p>{futureSkills.lifeText}</p>
              <p>{futureSkills.lifeConclusion}</p>
              <SourceLink source={futureSkills.sources[1]} />
            </div>
          </div>
        </section>

      </div>
    </section>
  )
}
