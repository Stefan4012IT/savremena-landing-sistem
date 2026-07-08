const offerImageUrl = 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/mejl2.jpg'

export function EmotionalTurnSection() {
  return (
    <section className="landing-section scholarship-offer">
      <div className="landing-container scholarship-offer__inner">
        <p className="scholarship-offer__ribbon">Najsavremenija Cambridge gimnazija vam poklanja:</p>
        <header className="scholarship-offer__headline">
          <h2>
            Prijavite se i obezbedite najsavremenije obrazovanje uz{' '}
            <strong>do 3546 evra popusta – za samo 474 evra mesečno</strong>
          </h2>
        </header>
        <div className="scholarship-offer__content">
          <div className="scholarship-offer__copy">
            <div className="scholarship-offer__questions">
              <p>Da li vam se već danima život vrti samo oko ovih pitanja:</p>
              <ul>
                <li>Da li će vaše dete upasti u školu koju ste odabrali?</li>
                <li>Da li ima dovoljno bodova za školu broj 1?</li>
                <li>Da li može da se izbori sa tolikom konkurencijom?</li>
                <li>Hoće li uopšte dobiti svoju priliku?!</li>
              </ul>
            </div>
            <p>
              U pravu ste – ovo je veoma bitna odluka za budućnost vašeg deteta. Iz tog razloga
              organizovali smo specijalnu akciju za upis dece koja nisu dobila željenu školu. Ako
              popunite prijavu na ovoj stranici, imate mogućnost da za samo 474 evra mesečno
              obezbedite jedno od 5 mesta za školovanje u zdravom, perspektivnom i sigurnom
              okruženju.
            </p>
          </div>
          <figure className="scholarship-offer__image">
            <img src={offerImageUrl} alt="Savremena gimnazija - specijalna akcija za upis" />
          </figure>
        </div>
      </div>
    </section>
  )
}
