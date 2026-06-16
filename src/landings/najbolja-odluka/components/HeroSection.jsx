import { useLandingData } from '../useLandingData'
import { HeroImageReveal } from './HeroImageReveal'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="najbolja-odluka-hero">
      <header className="najbolja-odluka-hero__header" aria-label="Glavna navigacija">
        <a className="najbolja-odluka-hero__logo" href="/najbolji-izbor" aria-label="Početna">
          Logo
        </a>
        <nav className="najbolja-odluka-hero__nav">
          <a href="#savetovanje">Program</a>
          <a href="#prijava">Prijava</a>
          <a href="#prijava">Kontakt</a>
        </nav>
      </header>
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content" aria-label="Uvod u landing">
          <p className="najbolja-odluka-hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="najbolja-odluka-hero__title">{hero.title}</h1>
          <p className="najbolja-odluka-hero__lead">{hero.lead}</p>
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
          <p className="najbolja-odluka-hero__note">{hero.note}</p>
        </div>
        <HeroImageReveal
          beforeImageUrl={hero.beforeImageUrl}
          afterImageUrl={hero.afterImageUrl}
        />
      </div>
    </section>
  )
}
