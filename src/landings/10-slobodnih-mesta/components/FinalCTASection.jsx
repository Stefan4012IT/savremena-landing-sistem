import logo from '../assets/SG_horizontalni_beli.webp'
import { useLandingData } from '../useLandingData'

export function FinalCTASection() {
  const { footer } = useLandingData()

  return (
    <footer className="deset-slobodnih-mesta-landing-footer">
      <div className="deset-slobodnih-mesta-landing-container deset-slobodnih-mesta-landing-footer__inner">
        <img className="deset-slobodnih-mesta-landing-footer__logo" src={logo} alt="Savremena gimnazija" />
        <address className="deset-slobodnih-mesta-landing-footer__contact">
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
