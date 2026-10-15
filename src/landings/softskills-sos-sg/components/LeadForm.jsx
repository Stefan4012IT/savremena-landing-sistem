import { useState } from 'react'
import { LeadEventIdField } from '../../../components/LeadEventIdField'
import { pushLeadSubmitToDataLayer } from '../../../services/leadEventId'
import { submitLeadWebhook } from '../../../services/leadWebhook'
import { useLandingData } from '../useLandingData'

const countryCallingCodes = ['+381', '+382', '+385', '+387', '+43', '+49', '+41', '+44', '+1']

function isObviousTestNumber(value) {
  if (!value) return false
  if (/^(\d)\1+$/.test(value)) return true

  return '01234567890123456789'.includes(value) || '98765432109876543210'.includes(value)
}

function getSerbianPhoneRule(area) {
  if (/^[1-3]/.test(area)) return { min: 5, max: 7, type: 'geographic' }
  if (/^[5-6]/.test(area)) return area.length === 2 && area.startsWith('5') ? { min: 7, max: 7, type: 'mobile' } : { min: 6, max: 7, type: 'mobile' }
  if (/^[7-9]/.test(area)) return area.length === 2 ? { min: 7, max: 9, type: 'nonGeographic' } : { min: 6, max: 8, type: 'nonGeographic' }

  return null
}

function validatePhoneFields(countryCode, areaCode, phoneNumber) {
  const area = String(areaCode || '').trim()
  const phone = String(phoneNumber || '').trim()

  if (!/^\d+$/.test(area)) return 'Pozivni broj mora sadržati samo cifre.'
  if (!/^\d+$/.test(phone)) return 'Telefon mora sadržati samo cifre.'

  if (countryCode === '+381') {
    if (area.startsWith('0')) return 'Pozivni broj unesite bez početne nule, na primer 64 ili 11.'
    if (!/^\d{2,3}$/.test(area)) return 'Pozivni broj za Srbiju mora imati 2 ili 3 cifre.'

    const phoneRule = getSerbianPhoneRule(area)
    if (!phoneRule) return 'Pozivni broj nije u važećem opsegu za Srbiju.'
    if (phone.length < phoneRule.min || phone.length > phoneRule.max) {
      return phoneRule.min === phoneRule.max
        ? `Telefon za ovaj pozivni broj mora imati ${phoneRule.min} cifara.`
        : `Telefon za ovaj pozivni broj mora imati od ${phoneRule.min} do ${phoneRule.max} cifara.`
    }
    if (phoneRule.type === 'geographic' && /^[019]/.test(phone)) return 'Fiksni telefonski broj ne može počinjati cifrom 0, 1 ili 9.'
  } else {
    if (!/^\d{1,5}$/.test(area)) return 'Pozivni broj mora imati od 1 do 5 cifara.'
    if (!/^\d{5,12}$/.test(phone)) return 'Telefon mora imati od 5 do 12 cifara.'
  }

  if (countryCode.replace(/\D/g, '').length + area.length + phone.length > 15) {
    return 'Kompletan međunarodni broj ne sme imati više od 15 cifara.'
  }

  return isObviousTestNumber(phone) ? 'Uneti telefon izgleda kao probni broj. Unesite stvarni kontakt broj.' : ''
}

function validateFormData(formData, ageRange) {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const childAge = Number(formData.get('childAge'))

  if (name.length < 2) return 'Unesite ime i prezime.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Unesite ispravnu e-mail adresu.'
  if (!Number.isInteger(childAge) || childAge < ageRange.min || childAge > ageRange.max) {
    return `Uzrast deteta mora biti između ${ageRange.min} i ${ageRange.max} godina.`
  }

  return validatePhoneFields(formData.get('countryCode'), formData.get('areaCode'), formData.get('phone'))
}

export function LeadForm({ variant = 'dark', showHeader = true, introText = 'Popunite formu, a naš tim za upis će vas uskoro kontaktirati.' }) {
  const { leadForm, slug, institutionOptions = [] } = useLandingData()
  const defaultInstitution = ''
  const [institutionSelection, setInstitutionSelection] = useState(defaultInstitution)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const isSubmitting = status === 'submitting'
  const selectedInstitution = institutionOptions.find((option) => option.value === institutionSelection)
  const institution = selectedInstitution?.institution ?? selectedInstitution?.value ?? ''
  const childAgeRange = selectedInstitution?.childAgeRange ?? { min: 4, max: 20 }
  const formName = `${leadForm.formName || 'malo slobodnih mesta'} - ${selectedInstitution?.label ?? institution}`

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const leadEventId = formData.get('lead_event_id')
    const validationMessage = validateFormData(formData, childAgeRange)

    if (validationMessage) {
      setStatus('error')
      setMessage(validationMessage)
      return
    }

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
      setInstitutionSelection(defaultInstitution)
      setStatus('success')
    } catch (error) {
      setStatus('error')
      const backendMessage = error.details ? Object.values(error.details)[0] : ''
      setMessage(backendMessage || error.message || leadForm.errorMessage)
    }
  }

  return (
    <>
      <form className={`softskills-sos-sg-form softskills-sos-sg-form--${variant}`} onSubmit={handleSubmit} noValidate>
        {showHeader ? (
          <div className="softskills-sos-sg-form__header">
            <h2>Prijavite se</h2>
            <p>{introText}</p>
          </div>
        ) : null}
        <LeadEventIdField institution={institution} formName={formName} landingSlug={slug} />
        <input className="softskills-sos-sg-form__honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        <select
          name="institution"
          value={institutionSelection}
          onChange={(event) => {
            setInstitutionSelection(event.target.value)
            event.currentTarget.form.elements.childAge.value = ''
          }}
          aria-label={leadForm.institutionLabel}
          required
        >
          <option value="" disabled hidden>{leadForm.institutionLabel}</option>
          {institutionOptions.map((option) => (
            <option value={option.value} key={`${option.value}-${option.label}`}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="softskills-sos-sg-form__row">
          <input type="text" name="name" placeholder={leadForm.namePlaceholder} autoComplete="name" required />
          <input type="email" name="email" placeholder={leadForm.emailPlaceholder} autoComplete="email" required />
        </div>
        <div className="softskills-sos-sg-form__row softskills-sos-sg-form__row--phone">
          <select name="countryCode" defaultValue="+381" aria-label={leadForm.countryCodeLabel} required>
            {countryCallingCodes.map((code) => <option value={code} key={code}>{code}</option>)}
          </select>
          <input type="text" name="areaCode" placeholder={leadForm.areaCodePlaceholder} inputMode="numeric" pattern="[0-9]*" maxLength="5" aria-label={leadForm.areaCodeLabel} required />
          <input type="tel" name="phone" placeholder={leadForm.phonePlaceholder} autoComplete="tel" inputMode="numeric" pattern="[0-9]*" maxLength="12" aria-label={leadForm.phoneLabel} required />
          <input type="number" name="childAge" min={childAgeRange.min} max={childAgeRange.max} step="1" placeholder={leadForm.childAgePlaceholder} aria-label={`${leadForm.childAgeLabel} (${childAgeRange.min}–${childAgeRange.max} godina)`} required />
        </div>
        {status === 'error' ? <p className="softskills-sos-sg-form__message" role="alert">{message}</p> : null}
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Slanje...' : leadForm.submitLabel}</button>
      </form>
      {status === 'success' ? (
        <div className="softskills-sos-sg-form-modal" role="dialog" aria-modal="true" aria-labelledby="softskills-sos-sg-success-title">
          <div className="softskills-sos-sg-form-modal__panel">
            <h3 id="softskills-sos-sg-success-title">{leadForm.successTitle}</h3>
            <p>{leadForm.successMessage}</p>
            <button type="button" onClick={() => setStatus('idle')}>U redu</button>
          </div>
        </div>
      ) : null}
    </>
  )
}
