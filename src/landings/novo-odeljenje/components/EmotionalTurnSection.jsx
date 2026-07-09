const offerImageUrl = 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/mejl2.jpg'

export function EmotionalTurnSection() {
  return (
    <section className="landing-section scholarship-offer">
      <div className="landing-container scholarship-offer__inner">
        <p className="scholarship-offer__ribbon">
          Najbrojnija generacija u istoriji Savremene gimnazije
        </p>
        <header className="scholarship-offer__headline">
          <h2>Više učenika dobija priliku za stvarno drugačije obrazovanje</h2>
        </header>
        <div className="scholarship-offer__content">
          <div className="scholarship-offer__copy">
            <div className="scholarship-offer__questions">
              <p>Da li od srednje škole očekujete više:</p>
              <ul>
                <li>Da li za svoje dete želite stvarno drugačije obrazovanje?</li>
                <li>Da li želite da uči u najsavremenijem školskom prostoru?</li>
                <li>Da li tražite smer koji prati njegova interesovanja i talente?</li>
                <li>Da li želite praktičnu primenu znanja i razvoj veština?</li>
              </ul>
            </div>
            <p>
              Proširenjem kapaciteta, još jedna grupa srednjoškolaca dobiće priliku da postane deo
              obrazovnog okruženja koje povezuje savremenu nastavu, praktična znanja, tehnologiju i
              individualnu podršku. Otvaranje novog odeljenja predstavlja još jednu snažnu potvrdu
              poverenja koje učenici i roditelji ukazuju Savremenoj gimnaziji.
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
