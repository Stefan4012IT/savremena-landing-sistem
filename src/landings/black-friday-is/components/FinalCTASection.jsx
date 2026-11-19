import { useLandingData } from '../useLandingData'

export function FinalCTASection() {
  const { footer } = useLandingData()
  const phoneHref = footer.phone.replace(/[^\d+]/g, '').replace('+3810', '+381')

  return (
    <footer className="black-friday-is-landing-footer">
      <div className="black-friday-is-landing-container black-friday-is-landing-footer__inner">
        <img className="black-friday-is-landing-footer__logo" src="https://sr.international-school.edu.rs/wp-content/uploads/2026/11/is_logo_2027_white-horisontal.svg" alt="International School" />
        <address className="black-friday-is-landing-footer__contact">
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
