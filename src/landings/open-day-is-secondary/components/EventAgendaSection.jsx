import './event-agenda.scss'
import { useLandingData } from '../useLandingData'

const eventCopy = {
  sr: {
    eyebrow: 'INTERNATIONAL SCHOOL OPEN DAY',
    title: 'Šta ćete doživeti kao učenik International Schoola?',
    intro: [
      'Učenici uzrasta od 14 do 19 godina moći će da iskuse kako izgleda jedan dan u International Schoolu, dok će roditelji iz prve ruke upoznati međunarodno školsko okruženje i savremene standarde obrazovanja.',
      'Zajedno ćete obići moderno opremljene učionice, amfiteatre, biblioteku, centar za učenje, fitnes salu i prostor za rekreaciju. Kroz edukativne aktivnosti i praktične primere odgovorićemo na najčešća pitanja, a biće vremena i za vaša pitanja.',
    ],
    date: '5. decembar',
    time: '11:00',
    location: 'Terazije 3, Beograd',
    agendaLabel: 'Program događaja',
    agenda: [
      {
        time: '11:00',
        title: 'Svečani prijem',
        text: 'Dobro došli u International School! Direktorka i koordinatorke škole dočekaće vas, predstaviti plan dana i uputiti vas u aktivnosti koje slede.',
      },
      {
        time: '11:20',
        title: 'Sve o International Schoolu',
        text: 'Upoznajte školu, Cambridge program i prednosti Cambridge diplome, kao i vannastavne aktivnosti, klubove i učenički portfolio za buduće studije.',
      },
      {
        time: '11:40',
        title: 'Biznis i kreiranje brendova',
        text: 'Na praktičnom času učenici će kroz dizajn logotipa, mini marketinšku kampanju i kviz istražiti kako nastaje uspešan brend.',
      },
      {
        time: '12:00',
        title: 'Matematika može biti zabavna',
        text: 'Otkrijte kako softverski alati, igre i savremena tehnologija mogu da učine matematiku razumljivijom i zanimljivijom.',
      },
      {
        time: '12:25',
        title: 'Naučna avantura: eksperimenti i otkrića',
        text: 'Interaktivna radionica povezuje hemiju, fiziku i druge nauke kroz video sadržaje, praktične eksperimente i timsko istraživanje.',
      },
    ],
    cta: 'Prijavite se za Open Day',
  },
  en: {
    eyebrow: 'INTERNATIONAL SCHOOL OPEN DAY',
    title: 'What will you experience as an International School student?',
    intro: [
      'Students aged 14 to 19 will experience a day at International School, while parents get a first-hand look at an international school environment and modern educational standards.',
      'Together, you will explore our modern classrooms, lecture theatre, library, learning centre, fitness room and recreation areas. Practical learning activities will answer common questions, with time set aside for any questions you may have.',
    ],
    date: '5 December',
    time: '11:00',
    location: 'Terazije 3, Belgrade',
    agendaLabel: 'Event programme',
    agenda: [
      {
        time: '11:00',
        title: 'Welcome reception',
        text: 'Welcome to International School! The school director and coordinators will greet you, introduce the day’s programme and guide you through the activities ahead.',
      },
      {
        time: '11:20',
        title: 'All about International School',
        text: 'Discover the school, the Cambridge programme and the value of a Cambridge qualification, as well as extracurricular activities, clubs and student portfolios for future study.',
      },
      {
        time: '11:40',
        title: 'Business and brand creation',
        text: 'In this practical lesson, students explore how successful brands are created by designing a logo, planning a mini marketing campaign and taking a quiz.',
      },
      {
        time: '12:00',
        title: 'Maths can be fun',
        text: 'See how software, games and modern technology can make mathematics easier to understand and more engaging.',
      },
      {
        time: '12:25',
        title: 'Science adventure: experiments and discoveries',
        text: 'This interactive workshop brings chemistry, physics and other sciences together through video, hands-on experiments and team exploration.',
      },
    ],
    cta: 'Register for Open Day',
  },
}

export function EventAgendaSection() {
  const { locale = 'sr' } = useLandingData()
  const copy = eventCopy[locale === 'en' ? 'en' : 'sr']

  return (
    <section className="open-day-is-secondary-event-agenda" aria-labelledby="open-day-is-secondary-event-agenda-title">
      <div className="open-day-is-secondary-landing-container open-day-is-secondary-event-agenda__inner">
        <div className="open-day-is-secondary-event-agenda__intro">
          <p className="open-day-is-secondary-event-agenda__eyebrow">{copy.eyebrow}</p>
          <h2 id="open-day-is-secondary-event-agenda-title">{copy.title}</h2>
          {copy.intro.map((paragraph) => <p className="open-day-is-secondary-event-agenda__text" key={paragraph}>{paragraph}</p>)}
          <ul className="open-day-is-secondary-event-agenda__details" aria-label={locale === 'en' ? 'Event details' : 'Detalji događaja'}>
            <li><span>{locale === 'en' ? 'Date' : 'Datum'}</span><strong>{copy.date}</strong></li>
            <li><span>{locale === 'en' ? 'Time' : 'Vreme'}</span><strong>{copy.time}</strong></li>
            <li><span>{locale === 'en' ? 'Location' : 'Lokacija'}</span><strong>{copy.location}</strong></li>
          </ul>
        </div>
        <div className="open-day-is-secondary-event-agenda__schedule">
          <h3>{copy.agendaLabel}</h3>
          <ol>
            {copy.agenda.map((item) => (
              <li className="open-day-is-secondary-event-agenda__item" key={item.time}>
                <time>{item.time}</time>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="open-day-is-secondary-event-agenda__cta" href="#prijava">{copy.cta}</a>
        </div>
      </div>
    </section>
  )
}
