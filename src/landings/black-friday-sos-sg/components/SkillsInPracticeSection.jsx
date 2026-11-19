import { useLandingData } from '../useLandingData'

export function SkillsInPracticeSection() {
  const { skillsInPractice } = useLandingData()

  if (!skillsInPractice) return null

  return (
    <section className="black-friday-sos-sg-skills-practice">
      <div className="black-friday-sos-sg-skills-practice__inner">
        <header className="black-friday-sos-sg-skills-practice__heading">
          <p>{skillsInPractice.eyebrow}</p>
          <h2>{skillsInPractice.title}</h2>
          <div>
            <p>{skillsInPractice.intro}</p>
            <p>{skillsInPractice.conclusion}</p>
          </div>
        </header>

        <div className="black-friday-sos-sg-skills-practice__grid">
          {skillsInPractice.items.map((item, index) => (
            <article className="black-friday-sos-sg-skills-practice__card" key={item.category}>
              <div className="black-friday-sos-sg-skills-practice__visual" aria-hidden="true">
                <img src={item.imageUrl} alt="" loading="lazy" />
              </div>
              <div className="black-friday-sos-sg-skills-practice__copy">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
