import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

const price = '596 evra'

function renderPhoneLink(text, phone, phoneHref) {
  const [before, after] = text.split(phone)

  if (after === undefined) return text

  return <>{before}<a href={phoneHref}>{phone}</a>{after}</>
}

function renderPrice(text, highlightedPrice) {
  const [before, after] = text.split(highlightedPrice)

  if (after === undefined) return text

  return <>{before}<strong className="black-friday-is-enrollment-cta__price">{highlightedPrice}</strong>{after}</>
}

export function EnrollmentCtaSection() {
  const { enrollmentCta, locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'

  if (!enrollmentCta) return null

  return (
    <section id="prijava-dole" className="black-friday-is-enrollment-cta">
      <div className="black-friday-is-landing-container black-friday-is-enrollment-cta__inner">
        <div className="black-friday-is-enrollment-cta__content">
          <p className="black-friday-is-enrollment-cta__eyebrow">{enrollmentCta.eyebrow}</p>
          <h2>{enrollmentCta.title}</h2>
          {enrollmentCta.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="black-friday-is-enrollment-cta__highlight">{enrollmentCta.highlight}</p>
          {enrollmentCta.closing ? <p>{renderPrice(enrollmentCta.closing, isEnglish ? '596 euros' : price)}</p> : null}
        </div>
        <div className="black-friday-is-enrollment-cta__side">
          <div className="black-friday-is-enrollment-cta__form-panel">
            <LeadForm
              className="black-friday-is-lead-form--enrollment"
              headerTitle={isEnglish ? 'APPLY NOW' : 'PRIJAVITE SE'}
              headerText={isEnglish ? 'Give your child the most modern education in the region.' : 'Obezbedite svom detetu najsavremenije obrazovanje u regionu.'}
            />
          </div>
          <div className="black-friday-is-enrollment-cta__steps-wrap">
            <p className="black-friday-is-enrollment-cta__steps-title">{enrollmentCta.stepsTitle}</p>
            <ol className="black-friday-is-enrollment-cta__steps">
              {enrollmentCta.steps?.map((step) => (
                <li key={step}>{renderPhoneLink(step, enrollmentCta.phone, enrollmentCta.phoneHref)}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
