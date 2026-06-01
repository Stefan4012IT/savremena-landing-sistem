import { useLandingData } from '../useLandingData'
import { HeroImageReveal } from './HeroImageReveal'

export function HeroSection() {
  const { hero } = useLandingData()

  return (
    <section className="najbolja-odluka-hero">
      <div className="najbolja-odluka-hero__inner">
        <div className="najbolja-odluka-hero__content">
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
        <HeroImageReveal />
      </div>
    </section>
  )
}
