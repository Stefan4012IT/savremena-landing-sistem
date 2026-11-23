import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const phoneNumber = '011/40-11-223'
const phoneHref = 'tel:+381114011223'
const price = '395 evra'

function renderPhoneLink(text) {
  const [before, after] = text.split(phoneNumber)

  if (after === undefined) return text

  return <>{before}<a href={phoneHref}>{phoneNumber}</a>{after}</>
}

function renderPrice(text) {
  const [before, after] = text.split(price)

  if (after === undefined) return text

  return <>{before}<strong className="black-friday-sos-sg-enrollment-cta__price">{price}</strong>{after}</>
}

export function EnrollmentCtaSection() {
  const { enrollmentCta } = useLandingData()

  if (!enrollmentCta) return null

  return (
    <section className="black-friday-sos-sg-enrollment-cta">
      <div className="black-friday-sos-sg-enrollment-cta__inner">
        <div className="black-friday-sos-sg-enrollment-cta__content">
          <p className="black-friday-sos-sg-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2>{enrollmentCta.title}</h2>
          {enrollmentCta.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="black-friday-sos-sg-enrollment-cta__highlight">{enrollmentCta.highlight}</p>
          <p>{renderPrice(enrollmentCta.closing)}</p>
        </div>
        <div className="black-friday-sos-sg-enrollment-cta__side">
          <div className="black-friday-sos-sg-enrollment-cta__form-panel" id="prijava">
            <LeadForm
              headerText="Prijavom rezervišete mesto po povlašćenim uslovima koji važe samo do 30.11., bez obaveze da izvršite upis."
              headerTextHighlight="povlašćenim uslovima koji važe samo do 30.11."
            />
          </div>
          <div className="black-friday-sos-sg-enrollment-cta__steps-wrap">
            <p className="black-friday-sos-sg-enrollment-cta__steps-title">{enrollmentCta.stepsTitle}</p>
            <ol className="black-friday-sos-sg-enrollment-cta__steps">
              {enrollmentCta.steps?.map((step) => <li key={step}>{renderPhoneLink(step)}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
