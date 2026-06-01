import logo from '../assets/SG_horizontalni_beli.webp'

export function FinalCTASection() {
  return (
    <footer className="landing-footer">
      <div className="landing-container landing-footer__inner">
        <img className="landing-footer__logo" src={logo} alt="Savremena gimnazija" />
        <address className="landing-footer__contact">
          <span>Masarikova 5 (ulaz iz Kralja Milana),</span>
          <span>Palata Beograd</span>
          <a href="tel:+381114011223">+381 (0)11 4011 223</a>
          <a href="mailto:office@savremena-gimnazija.edu.rs">office@savremena-gimnazija.edu.rs</a>
          <a href="mailto:upis@savremena-gimnazija.edu.rs">upis@savremena-gimnazija.edu.rs</a>
        </address>
      </div>
    </footer>
  )
}
