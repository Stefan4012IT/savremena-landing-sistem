import { SectionHeader } from './SectionHeader'

const awardLogos = [
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/1_awwward_brainfinity.jpg',
    alt: 'Brainfinity award',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/2_awwward_ecoSchool.jpg',
    alt: 'Eco School award',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/3_awwward_heroOfTheYear.jpg',
    alt: 'Hero of the Year award',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/4_awwward_wes.jpg',
    alt: 'WES award',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/5_awwward_glob_smart_edu.jpg',
    alt: 'Global Smart Education award',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/6_XXI_century.jpg',
    alt: 'XXI Century award',
  },
]

export function PartnerLogosSection() {
  return (
    <section className="partner-logos" aria-label="Svetske nagrade">
      <div className="landing-container">
        <SectionHeader
          eyebrow="Svetske nagrade kao potvrda izvrsnosti"
          title="Savremena obrazovna grupa pomera granice u obrazovanju"
          text="Međunarodna priznanja, svetska prepoznatost i merljivi rezultati International School-a i kompletne Savremene obrazovne grupe samo su još jedna potvrda kvaliteta programa i uspeha naših učenika."
        />
        <div className="partner-logos__row">
          {awardLogos.map((logo) => (
            <div className="partner-logos__item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
