import { useState } from 'react'
import { LeadEventIdField } from '../../../components/LeadEventIdField'
import { pushLeadSubmitToDataLayer } from '../../../services/leadEventId'
import { submitLeadWebhook } from '../../../services/leadWebhook'
import { useLandingData } from '../useLandingData'

const countryCallingCodes = ['+381', '+382', '+385', '+387', '+43', '+49', '+41', '+44', '+1']

export function LeadForm({ variant = 'dark', showHeader = true }) {
  const { leadForm, slug, institutionOptions = [] } = useLandingData()
  const defaultInstitution = ''
  const [institution, setInstitution] = useState(defaultInstitution)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const isSubmitting = status === 'submitting'
  const formName = `${leadForm.formName || 'malo slobodnih mesta'} - ${institution}`

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const leadEventId = formData.get('lead_event_id')

    setStatus('submitting')
    setMessage('')

    try {
      await submitLeadWebhook({
        name: formData.get('name'),
        email: formData.get('email'),
        childAge: formData.get('childAge'),
        countryCode: formData.get('countryCode'),
        areaCode: formData.get('areaCode'),
        phoneNumber: formData.get('phone'),
        leadEventId,
        website: formData.get('website'),
        institution,
        formName,
        landingSlug: slug,
        pageUrl: window.location.href,
      })

      pushLeadSubmitToDataLayer(leadEventId, {
        institution,
        formName,
        landingSlug: slug,
      })

      form.reset()
      setInstitution(defaultInstitution)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setMessage(leadForm.errorMessage || error.message)
    }
  }

  return (
    <>
      <form className={`malo-mesta-form malo-mesta-form--${variant}`} onSubmit={handleSubmit}>
        {showHeader ? (
          <div className="malo-mesta-form__header">
            <h2>Prijavite se</h2>
            <p>Popunite formu, a naš tim za upis će vas uskoro kontaktirati.</p>
          </div>
        ) : null}
        <LeadEventIdField institution={institution} formName={formName} landingSlug={slug} />
        <input className="malo-mesta-form__honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <select
          name="institution"
          value={institution}
          onChange={(event) => setInstitution(event.target.value)}
          aria-label={leadForm.institutionLabel}
          required
        >
          <option value="" disabled>{leadForm.institutionLabel}</option>
          {institutionOptions.map((option) => (
            <option value={option.value} key={`${option.value}-${option.label}`}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="malo-mesta-form__row">
          <input type="text" name="name" placeholder={leadForm.namePlaceholder} autoComplete="name" required />
          <input type="email" name="email" placeholder={leadForm.emailPlaceholder} autoComplete="email" required />
        </div>
        <div className="malo-mesta-form__row malo-mesta-form__row--phone">
          <select name="countryCode" defaultValue="+381" aria-label={leadForm.countryCodeLabel} required>
            {countryCallingCodes.map((code) => <option value={code} key={code}>{code}</option>)}
          </select>
          <input type="text" name="areaCode" placeholder={leadForm.areaCodePlaceholder} inputMode="tel" aria-label={leadForm.areaCodeLabel} required />
          <input type="tel" name="phone" placeholder={leadForm.phonePlaceholder} autoComplete="tel" aria-label={leadForm.phoneLabel} required />
          <input type="number" name="childAge" min="10" max="19" placeholder={leadForm.childAgePlaceholder} aria-label={leadForm.childAgeLabel} required />
        </div>
        {status === 'error' ? <p className="malo-mesta-form__message" role="alert">{message}</p> : null}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Slanje...' : leadForm.submitLabel}</button>
      </form>
      {status === 'success' ? (
        <div className="malo-mesta-form-modal" role="dialog" aria-modal="true" aria-labelledby="malo-mesta-success-title">
          <div className="malo-mesta-form-modal__panel">
            <h3 id="malo-mesta-success-title">{leadForm.successTitle}</h3>
            <p>{leadForm.successMessage}</p>
            <button type="button" onClick={() => setStatus('idle')}>U redu</button>
          </div>
        </div>
      ) : null}
    </>
  )
}
