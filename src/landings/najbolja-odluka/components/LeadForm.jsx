import { useState } from 'react'
import { submitLeadWebhook } from '../../../services/leadWebhook'
import { useLandingData } from '../useLandingData'

export function LeadForm() {
  const { leadForm, slug } = useLandingData()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const isSubmitting = status === 'submitting'

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

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
        website: formData.get('website'),
        institution: leadForm.institution || 'sg',
        formName: leadForm.formName || `landing - ${slug || 'savremena'}`,
        landingSlug: slug || 'najbolji-izbor',
        pageUrl: window.location.href,
      })

      form.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setMessage(leadForm.errorMessage || error.message)
    }
  }

  return (
    <>
      <form className="lead-form" onSubmit={handleSubmit}>
        <input
          className="lead-form__honeypot"
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="lead-form__row">
          <input type="text" name="name" placeholder={leadForm.namePlaceholder} autoComplete="name" required />
          <input type="email" name="email" placeholder={leadForm.emailPlaceholder} autoComplete="email" required />
        </div>
        <div className="lead-form__row lead-form__row--phone">
          <select name="countryCode" defaultValue="+381" aria-label={leadForm.countryCodeLabel} required>
            <option value="+381">+381</option>
            <option value="+382">+382</option>
            <option value="+387">+387</option>
            <option value="+389">+389</option>
          </select>
          <input
            type="text"
            name="areaCode"
            placeholder={leadForm.areaCodePlaceholder}
            inputMode="tel"
            aria-label={leadForm.areaCodeLabel}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={leadForm.phonePlaceholder}
            autoComplete="tel"
            aria-label={leadForm.phoneLabel}
            required
          />
        </div>
        <div className="lead-form__row lead-form__row--single">
          <input
            type="number"
            name="childAge"
            min="10"
            max="19"
            placeholder={leadForm.childAgePlaceholder || 'Uzrast deteta'}
            aria-label={leadForm.childAgeLabel || 'Uzrast deteta'}
            required
          />
        </div>
        {status === 'error' ? (
          <p className="lead-form__message" role="alert">
            {message}
          </p>
        ) : null}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Slanje...' : leadForm.submitLabel || 'Prijavite se'}
        </button>
      </form>

      {status === 'success' ? (
        <div className="lead-form-modal" role="dialog" aria-modal="true" aria-labelledby="lead-form-success-title">
          <div className="lead-form-modal__panel">
            <h3 id="lead-form-success-title">{leadForm.successTitle || 'Prijava je poslata'}</h3>
            <p>
              {leadForm.successMessage ||
                'Hvala vam. Naš tim će vas uskoro kontaktirati sa informacijama o upisu.'}
            </p>
            <button type="button" onClick={() => setStatus('idle')}>
              U redu
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
