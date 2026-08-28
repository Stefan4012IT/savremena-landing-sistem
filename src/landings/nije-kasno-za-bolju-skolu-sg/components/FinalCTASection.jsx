import logo from '../assets/SG_horizontalni_beli.webp'
import { useLandingData } from '../useLandingData'

export function FinalCTASection() {
  const { footer } = useLandingData()

  return (
    <footer className="nije-kasno-za-bolju-skolu-sg-landing-footer">
      <div className="nije-kasno-za-bolju-skolu-sg-landing-container nije-kasno-za-bolju-skolu-sg-landing-footer__inner">
        <img className="nije-kasno-za-bolju-skolu-sg-landing-footer__logo" src={logo} alt="Savremena gimnazija" />
        <address className="nije-kasno-za-bolju-skolu-sg-landing-footer__contact">
          <span>{footer.addressLine1}</span>
          <span>{footer.addressLine2}</span>
          <a href="tel:+381114011223">{footer.phone}</a>
          <a href={`mailto:${footer.officeEmail}`}>{footer.officeEmail}</a>
          <a href={`mailto:${footer.enrollmentEmail}`}>{footer.enrollmentEmail}</a>
        </address>
      </div>
    </footer>
  )
}
