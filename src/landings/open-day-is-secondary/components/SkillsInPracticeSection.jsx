import './skills-practice.scss'
import { useLandingData } from '../useLandingData'

export function SkillsInPracticeSection() {
  const { skillsInPractice } = useLandingData()
  if (!skillsInPractice) return null

  return (
    <section className="open-day-is-secondary-skills-practice" id="open-day-is-secondary-skills-practice">
      <div className="open-day-is-secondary-landing-container">
        <header className="open-day-is-secondary-skills-practice__heading">
          <p className="open-day-is-secondary-skills-practice__eyebrow">{skillsInPractice.eyebrow}</p>
          <h2>{skillsInPractice.title}</h2>
          <p className="open-day-is-secondary-skills-practice__intro">{skillsInPractice.intro}</p>
        </header>

        <div className="open-day-is-secondary-skills-practice__grid">
          {skillsInPractice.items.map((item, index) => (
            <article className="open-day-is-secondary-skills-practice__card" key={item.category}>
              <div className="open-day-is-secondary-skills-practice__visual" aria-hidden="true">
                <img
                  src={`https://www.international-school.edu.rs/wp-content/uploads/2026/10/is-softskills-${index + 1}.jpg`}
                  alt=""
                  loading="lazy"
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="open-day-is-secondary-skills-practice__copy">
                <p className="open-day-is-secondary-skills-practice__category">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="open-day-is-secondary-skills-practice__text">{item.text}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.linkLabel}<span aria-hidden="true"> ↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
