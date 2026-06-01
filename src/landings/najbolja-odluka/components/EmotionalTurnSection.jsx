import { SectionHeader } from './SectionHeader'

const worries = ['Razocarani ste?', 'Ne znate sta dalje?', 'Brinete da dete nece dobiti svoju priliku?']
const reframes = ['To ne mora biti losa vest.', 'Mozda je najbolji izbor jos uvek pred vama.', 'Savremena gimnazija moze biti nova sansa.']

export function EmotionalTurnSection() {
  return (
    <section className="landing-section emotional-turn">
      <div className="landing-container emotional-turn__grid">
        <SectionHeader
          eyebrow="Novi pocetak"
          title="Razocaranje ne mora da bude kraj"
          text="Jedna rang-lista ne moze da izmeri radoznalost, trud, karakter, talenat i mogucnosti deteta."
        />
        <div className="emotional-turn__panel">
          <div>
            <p className="emotional-turn__label">Ako sada osecate pritisak</p>
            {worries.map((item) => (
              <p className="emotional-turn__line" key={item}>
                {item}
              </p>
            ))}
          </div>
          <div>
            <p className="emotional-turn__label">Vazno je da znate</p>
            {reframes.map((item) => (
              <p className="emotional-turn__line emotional-turn__line--positive" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
