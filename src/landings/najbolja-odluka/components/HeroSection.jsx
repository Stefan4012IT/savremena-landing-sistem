import { HeroImageReveal } from './HeroImageReveal'

export function HeroSection() {
  return (
    <section className="najbolja-odluka-hero">
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content">
          <p className="najbolja-odluka-hero__eyebrow">Upis u generaciju 2026/27</p>
          <h1 className="najbolja-odluka-hero__title">
            Niste upisali zeljenu skolu? Mozda je to pocetak najbolje odluke.
          </h1>
          <p className="najbolja-odluka-hero__lead">
            Broj bodova ne govori celu pricu o potencijalu deteta. Jos uvek imate
            priliku da izaberete skolu koja prepoznaje talente, podrzava razvoj i
            otvara vise mogucnosti.
          </p>
          <div className="najbolja-odluka-hero__actions" aria-label="Opcije za upis">
            <a className="najbolja-odluka-hero__button" href="#prijava">
              Prijavite se za upis
            </a>
            <a
              className="najbolja-odluka-hero__button najbolja-odluka-hero__button--secondary"
              href="#savetovanje"
            >
              Zakazite razgovor
            </a>
          </div>
          <p className="najbolja-odluka-hero__note">
            Broj mesta u generaciji 2026/27 je ogranicen.
          </p>
        </div>
        <HeroImageReveal />
      </div>
    </section>
  )
}
