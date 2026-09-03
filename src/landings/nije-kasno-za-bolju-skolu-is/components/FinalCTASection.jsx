import { useLandingData } from '../useLandingData'

export function FinalCTASection() {
  const { footer } = useLandingData()
  const phoneHref = footer.phone.replace(/[^\d+]/g, '').replace('+3810', '+381')

  return (
    <footer className="nije-kasno-za-bolju-skolu-is-landing-footer">
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-landing-footer__inner">
        <img className="nije-kasno-za-bolju-skolu-is-landing-footer__logo" src="https://www.international-school.edu.rs/wp-content/uploads/2020/03/IS_logo_white.svg" alt="International School" />
        <address className="nije-kasno-za-bolju-skolu-is-landing-footer__contact">
          <span>{footer.addressLine1}</span>
          <span>{footer.addressLine2}</span>
          {footer.secondaryAddress ? <span>{footer.secondaryAddress}</span> : null}
          <a href={`tel:${phoneHref}`}>{footer.phone}</a>
          <a href={`mailto:${footer.officeEmail}`}>{footer.officeEmail}</a>
          <a href={`mailto:${footer.enrollmentEmail}`}>{footer.enrollmentEmail}</a>
        </address>
      </div>
    </footer>
  )
}
