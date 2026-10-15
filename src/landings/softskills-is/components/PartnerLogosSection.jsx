import { SectionHeader } from './SectionHeader'
import { useLandingData } from '../useLandingData'

const awardLogos = [
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/1_awwward_brainfinity.jpg',
    alt: 'Brainfinity award',
    label: 'Problem solving school',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/2_awwward_ecoSchool.jpg',
    alt: 'Eco School award',
    label: 'International-Eco school',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/3_awwward_heroOfTheYear.jpg',
    alt: 'Hero of the Year award',
    label: 'Education hero of the year',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/4_awwward_wes.jpg',
    alt: 'WES award',
    label: 'Cool School: najbolji na svetu',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/5_awwward_glob_smart_edu.jpg',
    alt: 'Global Smart Education award',
    label: 'Najbolji na svetu: Innovation and AI price',
  },
  {
    src: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/6_XXI_century.jpg',
    alt: 'XXI Century award',
    label: 'Innovative Learning program award',
  },
]

export function PartnerLogosSection() {
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'

  return (
    <section className="softskills-is-partner-logos" aria-label={isEnglish ? 'Global awards' : 'Svetske nagrade'}>
      <div className="softskills-is-landing-container softskills-is-partner-logos__grid">
        <SectionHeader
          eyebrow={isEnglish ? 'Global awards that confirm excellence' : 'Svetske nagrade kao potvrda izvrsnosti'}
          title={isEnglish ? 'Savremena Education Group is pushing the boundaries of education' : 'Savremena obrazovna grupa pomera granice u obrazovanju'}
          text={isEnglish ? 'International recognition, global visibility and measurable results from International School and the wider Savremena Education Group are further proof of programme quality and student success.' : 'Međunarodna priznanja, svetska prepoznatost i merljivi rezultati International School-a i kompletne Savremene obrazovne grupe samo su još jedna potvrda kvaliteta programa i uspeha naših učenika.'}
        />
        <div className="softskills-is-partner-logos__row">
          {awardLogos.map((logo) => (
            <div className="softskills-is-partner-logos__item" key={logo.src}>
              <img src={logo.src} alt={logo.alt} />
              <p>{logo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
