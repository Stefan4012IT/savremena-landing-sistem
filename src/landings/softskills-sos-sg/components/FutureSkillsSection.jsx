import { useLandingData } from '../useLandingData'

function StatCard({ value, text, variant = 'light' }) {
  return (
    <article className={`softskills-sos-sg-future-skills__stat softskills-sos-sg-future-skills__stat--${variant}`}>
      <strong>{value}</strong>
      <p>{text}</p>
    </article>
  )
}

export function FutureSkillsSection() {
  const { futureSkills } = useLandingData()

  if (!futureSkills) return null

  return (
    <section className="softskills-sos-sg-future-skills">
      <div className="softskills-sos-sg-future-skills__inner">
        <header className="softskills-sos-sg-future-skills__heading">
          <p className="softskills-sos-sg-future-skills__eyebrow">{futureSkills.eyebrow}</p>
          <h2>{futureSkills.title}</h2>
        </header>

        <div className="softskills-sos-sg-future-skills__wef">
          <div className="softskills-sos-sg-future-skills__wef-copy">
            <p>{futureSkills.intro}</p>
            <p>{futureSkills.wefLead}</p>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/" target="_blank" rel="noreferrer">
              Izvor: WEF, 2025
            </a>
          </div>
          <div className="softskills-sos-sg-future-skills__wef-visuals">
            <div className="softskills-sos-sg-future-skills__wef-chart" aria-label="Veštine koje su posebno važne za budućnost rada">
              <p className="softskills-sos-sg-future-skills__chart-title">Veštine koje će praviti razliku</p>
              {futureSkills.wefSkills.map((skill) => (
                <div className="softskills-sos-sg-future-skills__chart-row" key={skill.label}>
                  <span>{skill.label}</span>
                  <div className="softskills-sos-sg-future-skills__chart-track">
                    <div className="softskills-sos-sg-future-skills__chart-bar" style={{ '--skill-level': `${skill.value}%` }}>
                      <b>{skill.value}%</b>
                    </div>
                  </div>
                </div>
              ))}
              <div className="softskills-sos-sg-future-skills__chart-scale" aria-hidden="true">
                <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
              </div>
            </div>
            <div className="softskills-sos-sg-future-skills__wef-stats">
              {futureSkills.wefStats.map((stat) => <StatCard key={stat.value} {...stat} />)}
            </div>
          </div>
        </div>

        <p className="softskills-sos-sg-future-skills__transition">{futureSkills.transition}</p>

        <div className="softskills-sos-sg-future-skills__ai-panel">
          <div className="softskills-sos-sg-future-skills__ai-copy">
            <p className="softskills-sos-sg-future-skills__eyebrow">{futureSkills.aiEyebrow}</p>
            <h2>{futureSkills.aiTitle}</h2>
            <p>{futureSkills.aiText}</p>
            <a href="https://www.microsoft.com/en-us/worklab/" target="_blank" rel="noreferrer">
              Izvor: Microsoft Work Trend Index 2026
            </a>
          </div>
          <div className="softskills-sos-sg-future-skills__ai-stats" aria-label="Ključni nalazi Microsoftovog istraživanja">
            {futureSkills.aiStats.map((stat) => <StatCard key={stat.value} {...stat} variant="dark" />)}
          </div>
          <div className="softskills-sos-sg-future-skills__life">
            <h3>{futureSkills.lifeTitle}</h3>
            <div className="softskills-sos-sg-future-skills__life-copy">
            <p>{futureSkills.lifeText}</p>
            <p>{futureSkills.lifeConclusion}</p>
            <a href="https://www.oecd.org/en/publications/social-and-emotional-skills-for-better-lives_35ca7b7c-en.html" target="_blank" rel="noreferrer">
              Izvor: OECD Survey on Social and Emotional Skills 2023
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
