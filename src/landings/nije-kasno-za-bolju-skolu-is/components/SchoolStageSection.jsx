const schoolStages = {
  primary: {
    title: 'Primary & Lower Secondary',
    paragraphs: [
      'Prvi koraci ka velikim mogućnostima počinju u okruženju koje neguje radoznalost, kreativnost i ljubav prema učenju. Primary i Lower Secondary programi povezuju sticanje znanja sa istraživanjem, igrom i razvojem samostalnosti.',
      'Uz podršku nastavnika, učenici razvijaju svoje talente, grade samopouzdanje i uče da sarađuju. Svaki novi izazov postaje prilika da otkriju šta ih zanima i pripreme se za narednu fazu školovanja.',
    ],
    imageUrl: 'https://www.international-school.edu.rs/nl/admin/temp/newsletters/1953/funandstudy.jpg',
    imageAlt: 'Fun and Study program u International Schoolu',
  },
  secondary: {
    title: 'Secondary',
    paragraphs: [
      'Srednjoškolske godine su vreme za otkrivanje interesovanja, produbljivanje znanja i donošenje odluka o budućnosti. Secondary program u International Schoolu podstiče učenike da razmišljaju samostalno, povezuju ideje i razvijaju svoje potencijale.',
      'Kroz Cambridge obrazovanje i podršku nastavnika, učenici grade akademske i životne veštine za naredni korak — studije, nova iskustva i mogućnosti u međunarodnom okruženju.',
    ],
    imageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_4.jpg',
    imageAlt: 'Savremeni prostor International Schoola',
  },
}

export function SchoolStageSection({ stage }) {
  const { title, paragraphs, imageUrl, imageAlt } = schoolStages[stage]

  return (
    <section
      className={`nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-school-stage nije-kasno-za-bolju-skolu-is-school-stage--${stage}`}
      id={stage === 'primary' ? 'savetovanje' : 'secondary'}
      aria-labelledby={`school-stage-${stage}-title`}
    >
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-school-stage__box">
        <div className="nije-kasno-za-bolju-skolu-is-school-stage__content">
          <h2 id={`school-stage-${stage}-title`}>{title}</h2>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="nije-kasno-za-bolju-skolu-is-school-stage__image">
          <img src={imageUrl} alt={imageAlt} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
