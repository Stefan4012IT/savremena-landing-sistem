import { FutureSpaceCarousel } from './FutureSpaceSection'
import { useLandingData } from '../useLandingData'

const schoolStages = {
  primary: {
    eyebrow: 'Cambridge International Y1-Y10',
    title: 'Prestižno Cambridge obrazovanje od samog početka obrazovanja',
    paragraphs: [
      <>
        U International Schoolu učenici od <strong>5 do 11 godina</strong> pohađaju <strong>Cambridge International Primary Programme</strong>, a od <strong>11 do 14 godina</strong> <strong>Cambridge Lower Secondary Programme</strong> – u okviru savremenog, međunarodno priznatog obrazovnog sistema koji podstiče radoznalost, kreativnost, samostalnost i siguran akademski razvoj.
      </>,
      <>
        Uz posvećenu podršku nastavnika, učenici razvijaju svoje talente, grade snažno samopouzdanje i usvajaju veštine koje ih pripremaju za naredni veliki korak – <strong>Cambridge Secondary level</strong>.
      </>,
    ],
    imageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_primary_lower_secondary_1.jpg',
    imageAlt: 'Fun and Study program u International Schoolu',
  },
  secondary: {
    eyebrow: 'Cambridge International Y10–Y13',
    title: 'Internacionalno obrazovanje koje otvara vrata vodećih univerziteta sveta',
    paragraphs: [
      <>
        <strong>Cambridge International Secondary nivo</strong> predstavlja ključnu fazu u kojoj se akademski potencijal pretvara u jasnu međunarodnu perspektivu. Učenici se pripremaju za prestižne univerzitetske programe kroz zahtevne <strong>Cambridge kvalifikacije</strong>, strateški izbor predmeta i pažljivo vođen akademski razvoj.
      </>,
      <>
        Fokus je na izgradnji <strong>snažnog i prepoznatljivog profila učenika</strong> – od vrhunskih akademskih rezultata i <strong>Cambridge ispita</strong> do promišljenog izbora studija i univerziteta.
      </>,
      <strong>
        Cilj je jasan: da svaki učenik bude spreman da sa sigurnošću zakorači na univerzitete širom sveta i nastavi svoj put u istinski internacionalnom okruženju.
      </strong>,
    ],
    imageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_4.jpg',
    imageAlt: 'Savremeni prostor International Schoola',
  },
}

const englishSchoolStages = {
  primary: {
    eyebrow: 'Cambridge International Y1-Y10',
    title: 'Prestigious Cambridge education from the very beginning',
    paragraphs: [
      <>
        At International School, students aged <strong>5 to 11</strong> follow the <strong>Cambridge International Primary Programme</strong>, while students aged <strong>11 to 14</strong> follow the <strong>Cambridge Lower Secondary Programme</strong> – part of a modern, internationally recognised education system that encourages curiosity, creativity, independence and confident academic development.
      </>,
      <>
        With dedicated teacher support, students develop their talents, build strong confidence and gain the skills they need for their next major step – <strong>Cambridge Secondary level</strong>.
      </>,
    ],
    imageUrl: schoolStages.primary.imageUrl,
    imageAlt: 'Primary and Lower Secondary students at International School',
  },
  secondary: {
    eyebrow: 'Cambridge International Y10–Y13',
    title: 'International education that opens the doors to the world’s leading universities',
    paragraphs: [
      <>
        <strong>Cambridge International Secondary</strong> is the key stage where academic potential becomes a clear international perspective. Students prepare for prestigious university programmes through demanding <strong>Cambridge qualifications</strong>, strategic subject choices and carefully guided academic development.
      </>,
      <>
        The focus is on building a <strong>strong and distinctive student profile</strong> – from outstanding academic results and <strong>Cambridge examinations</strong> to thoughtful choices of degree programmes and universities.
      </>,
      <strong>
        The goal is clear: every student should be ready to step confidently into universities around the world and continue their journey in a truly international environment.
      </strong>,
    ],
    imageUrl: schoolStages.secondary.imageUrl,
    imageAlt: 'Modern International School space',
  },
}

export function SchoolStageSection({ stage }) {
  const { locale = 'sr' } = useLandingData()
  const { eyebrow, title, paragraphs, imageUrl, imageAlt } = (locale === 'en' ? englishSchoolStages : schoolStages)[stage]

  return (
    <section
      className={`nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-school-stage nije-kasno-za-bolju-skolu-is-school-stage--${stage}`}
      id={stage === 'primary' ? 'savetovanje' : 'secondary'}
      aria-labelledby={`school-stage-${stage}-title`}
    >
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-school-stage__box">
        <div className="nije-kasno-za-bolju-skolu-is-school-stage__content">
          {eyebrow ? <p className="nije-kasno-za-bolju-skolu-is-school-stage__eyebrow">{eyebrow}</p> : null}
          <h2 id={`school-stage-${stage}-title`}>{title}</h2>
          {paragraphs.map((paragraph, index) => <p key={`${stage}-paragraph-${index}`}>{paragraph}</p>)}
        </div>
        <figure className="nije-kasno-za-bolju-skolu-is-school-stage__image">
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </figure>
        <FutureSpaceCarousel stage={stage} />
      </div>
    </section>
  )
}
