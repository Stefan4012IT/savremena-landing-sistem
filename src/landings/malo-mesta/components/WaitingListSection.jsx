import { useLandingData } from '../useLandingData'
import { SectionHeader } from '../../novo-odeljenje/components/SectionHeader'

export function WaitingListSection() {
  const { specialOffer } = useLandingData()

  if (!specialOffer) {
    return null
  }

  const paragraphs = [
    'Roditelji koji prijavu ostave za poslednji trenutak često se suočavaju sa tim da za željeni program, razred ili smer više nema dostupnih mesta. Nakon popune kapaciteta, nove prijave prelaze na listu čekanja, a porodice mogu biti kontaktirane tek ukoliko se neko mesto naknadno oslobodi.',
    'Pravovremenom prijavom izbegavate neizvesnost i dobijate priliku da na vreme završite sve korake upisa i pripreme za početak nove školske godine.',
  ]

  return (
    <section className="landing-section modern-education malo-mesta-waiting-list">
      <div className="landing-container modern-education__grid">
        <div className="modern-education__content">
          <SectionHeader eyebrow={specialOffer.eyebrow} title={specialOffer.title} text={specialOffer.text} />
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <p className="malo-mesta-waiting-list__available-link">Pogledajte broj preostalih slobodnih mesta <a href="#slobodna-mesta">ovde.</a></p>
        </div>
        <div className="modern-education__image-placeholder">
          <img
            src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/malo-mesta-waiting-list_img_1.jpg"
            alt="Učenici Savremene osnovne škole"
          />
        </div>
      </div>
    </section>
  )
}
