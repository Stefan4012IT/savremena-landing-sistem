import cambridgeLogo from '../assets/cambridge-international-logo.webp'
import ministryLogo from '../assets/ministarstvo-prosvete-logo.webp'

export function ProgramChoiceSection() {
  return (
    <section className="landing-section program-choice" id="savetovanje">
      <div className="landing-container program-choice__grid">
        <div className="program-choice__content">
          <p className="section-header__eyebrow">Izaberite svoj put ka uspehu</p>
          <h2>Nacionalni ili Kombinovani Cambridge program</h2>
          <p>
            Svaki smer u Savremenoj gimnaziji mozete pohadjati po Nacionalnom ili
            Kombinovanom programu - dvojezicnom modelu koji objedinjuje domaci plan i
            program sa elementima zvanicnog Cambridge kurikuluma.
          </p>
          <p>
            Ovaj pazljivo osmisljen spoj obrazovnih standarda olaksava ucenje i usvajanje
            znanja, dok casovi na engleskom jeziku pruzaju mogucnost sticanja nacionalne
            diplome i prestiznih Cambridge kvalifikacija.
          </p>
          <p>
            Bilingvalni pristup omogucava ucenicima da razvijaju svoje potencijale u
            skladu sa savremenim, globalno relevantnim principima obrazovanja -
            pripremajuci ih za uspeh, bilo gde u svetu.
          </p>
          <a className="landing-link" href="#prijava">
            Zakazite savetovanje o izboru programa
          </a>
        </div>
        <div className="program-choice__logos" aria-label="Akreditacije i programi">
          <div className="program-choice__logo-card">
            <img src={ministryLogo} alt="Ministarstvo prosvete" />
          </div>
          <div className="program-choice__logo-card">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
          </div>
        </div>
      </div>
    </section>
  )
}
