import { SectionHeader } from './SectionHeader'

export function ModernEducationSection() {
  return (
    <section className="landing-section modern-education">
      <div className="landing-container modern-education__grid">
        <div className="modern-education__content">
          <SectionHeader
            eyebrow="Stvarno drugacija skola"
            title="Savremeno obrazovanje u svakom pogledu"
            text="Ucenici ne uce samo da bi polozili test ili dobili ocenu. Uce da razumeju, povezu znanje, resavaju probleme i koriste ono sto znaju u svakodnevnim situacijama."
          />
          <p>
            Savremena gimnazija pruza kreativan i drugaciji pristup nastavi, uz rad u
            manjim grupama, mentorsku podrsku i savremene metode rada. Takvo okruzenje
            pomaze ucenicima da napreduju sigurnije, motivisanije i sa vise poverenja u
            svoje sposobnosti.
          </p>
          <p>
            Nastava je usmerena na razumevanje, prakticnu primenu znanja i razvoj
            vestina koje su vazne za fakultet, karijeru i zivot: kriticko misljenje,
            komunikaciju, odgovornost, digitalnu pismenost i samostalnost.
          </p>
        </div>
        <div className="modern-education__image-placeholder" aria-label="Placeholder za fotografiju skole">
          <span>Image placeholder</span>
        </div>
      </div>
    </section>
  )
}
