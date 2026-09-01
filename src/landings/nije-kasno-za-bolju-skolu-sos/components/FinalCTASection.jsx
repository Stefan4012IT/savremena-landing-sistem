import { useLandingData } from '../useLandingData'

export function FinalCTASection() {
  const { footer } = useLandingData()
  const phoneHref = footer.phone.replace(/[^\d+]/g, '').replace('+3810', '+381')

  return (
    <footer className="nije-kasno-za-bolju-skolu-sos-landing-footer">
      <div className="nije-kasno-za-bolju-skolu-sos-landing-container nije-kasno-za-bolju-skolu-sos-landing-footer__inner">
        <img className="nije-kasno-za-bolju-skolu-sos-landing-footer__logo" src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/sos_beli.svg" alt="Savremena osnovna škola" />
        <address className="nije-kasno-za-bolju-skolu-sos-landing-footer__contact">
          <span>{footer.addressLine1}</span>
          <span>{footer.addressLine2}</span>
          <a href={`tel:${phoneHref}`}>{footer.phone}</a>
          <a href={`mailto:${footer.officeEmail}`}>{footer.officeEmail}</a>
          <a href={`mailto:${footer.enrollmentEmail}`}>{footer.enrollmentEmail}</a>
        </address>
      </div>
    </footer>
  )
}
