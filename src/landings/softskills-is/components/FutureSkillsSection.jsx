import { useLandingData } from '../useLandingData'

function StatCard({ value, text, source, variant = 'light' }) {
  return (
    <article className={`softskills-is-future-skills__stat softskills-is-future-skills__stat--${variant}`}>
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
    <a className={`softskills-is-future-skills__source ${className}`} href={source.href} target="_blank" rel="noreferrer">
      {sourcePrefix} {source.label}
    </a>
  ) : null

  return (
    <section className="softskills-is-landing-section softskills-is-future-skills">
      <div className="softskills-is-landing-container">
        <header className="softskills-is-future-skills__heading">
          <p className="softskills-is-future-skills__eyebrow">{futureSkills.eyebrow}</p>
          <h2>{futureSkills.title}</h2>
        </header>

        <div className="softskills-is-future-skills__wef">
          <div className="softskills-is-future-skills__intro">
            <p>{futureSkills.intro}</p>
            <SourceLink source={futureSkills.sources[0]} />
          </div>
          <div className="softskills-is-future-skills__visuals">
            <div className="softskills-is-future-skills__chart" role="img" aria-label={futureSkills.chartAriaLabel}>
              <h3>{futureSkills.chartTitle}</h3>
              {futureSkills.wefSkills.map((skill) => (
                <div className="softskills-is-future-skills__chart-row" key={skill.label}>
                  <span>{skill.label}</span>
                  <div className="softskills-is-future-skills__chart-track">
                    <div className="softskills-is-future-skills__chart-bar" style={{ '--skill-level': `${skill.value}%` }}>
                      <b>{skill.value}%</b>
                    </div>
                  </div>
                </div>
              ))}
              <div className="softskills-is-future-skills__chart-scale" aria-hidden="true">
                <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
              </div>
            </div>
            <div className="softskills-is-future-skills__wef-stats">
              {futureSkills.wefStats.map((stat) => <StatCard key={stat.value} {...stat} />)}
            </div>
          </div>
        </div>

        <p className="softskills-is-future-skills__transition">{futureSkills.transition}</p>

        <section className="softskills-is-future-skills__ai-panel" aria-labelledby="softskills-is-future-skills-ai-title">
          <div className="softskills-is-future-skills__ai-copy">
            <p className="softskills-is-future-skills__eyebrow">{futureSkills.aiEyebrow}</p>
            <h3 id="softskills-is-future-skills-ai-title">{futureSkills.aiTitle}</h3>
            <p>{futureSkills.aiText}</p>
            <p>{futureSkills.aiTextContinued}</p>
            <SourceLink source={futureSkills.sources[2]} className="softskills-is-future-skills__source--light" />
          </div>
          <div className="softskills-is-future-skills__ai-stats" aria-label={futureSkills.aiStatsLabel}>
            {futureSkills.aiStats.map((stat) => <StatCard key={stat.value} {...stat} variant="dark" />)}
          </div>
          <div className="softskills-is-future-skills__life">
            <h3>{futureSkills.lifeTitle}</h3>
            <div className="softskills-is-future-skills__life-copy">
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
