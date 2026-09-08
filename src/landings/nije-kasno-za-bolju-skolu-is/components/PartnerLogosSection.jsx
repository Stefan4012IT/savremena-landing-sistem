import { SectionHeader } from './SectionHeader'
import { useLandingData } from '../useLandingData'

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
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'

  return (
    <section className="nije-kasno-za-bolju-skolu-is-partner-logos" aria-label={isEnglish ? 'Global awards' : 'Svetske nagrade'}>
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-partner-logos__grid">
        <SectionHeader
          eyebrow={isEnglish ? 'Global awards that confirm excellence' : 'Svetske nagrade kao potvrda izvrsnosti'}
          title={isEnglish ? 'Savremena Education Group is pushing the boundaries of education' : 'Savremena obrazovna grupa pomera granice u obrazovanju'}
          text={isEnglish ? 'International recognition, global visibility and measurable results from International School and the wider Savremena Education Group are further proof of programme quality and student success.' : 'Međunarodna priznanja, svetska prepoznatost i merljivi rezultati International School-a i kompletne Savremene obrazovne grupe samo su još jedna potvrda kvaliteta programa i uspeha naših učenika.'}
        />
        <div className="nije-kasno-za-bolju-skolu-is-partner-logos__row">
          {awardLogos.map((logo) => (
            <div className="nije-kasno-za-bolju-skolu-is-partner-logos__item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
