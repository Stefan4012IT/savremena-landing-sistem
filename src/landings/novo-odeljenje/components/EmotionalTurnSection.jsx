const instagramReelEmbedUrl = 'https://www.instagram.com/reel/DacWFqfOk-b/embed'

function InstagramReelEmbed() {
  return (
    <iframe
      src={instagramReelEmbedUrl}
      title="Instagram reel Savremene gimnazije"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}

export function EmotionalTurnSection() {
  return (
    <section className="landing-section scholarship-offer">
      <div className="landing-container scholarship-offer__inner">
        <div className="scholarship-offer__content">
          <div className="scholarship-offer__copy">
            <p className="scholarship-offer__ribbon">
              Najbrojnija generacija u istoriji Savremene gimnazije
            </p>
            <header className="scholarship-offer__headline">
              <h2>Više učenika dobija priliku za stvarno drugačije obrazovanje</h2>
            </header>
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
          <figure className="scholarship-offer__reel" aria-label="Instagram reel Savremene gimnazije">
            <div className="scholarship-offer__reel-frame">
              <InstagramReelEmbed />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
