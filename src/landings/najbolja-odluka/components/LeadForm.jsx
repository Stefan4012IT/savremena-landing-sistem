import { useState } from 'react'
import { LeadEventIdField } from '../../../components/LeadEventIdField'
import { pushLeadSubmitToDataLayer } from '../../../services/leadEventId'
import { submitLeadWebhook } from '../../../services/leadWebhook'
import { useLandingData } from '../useLandingData'

const countryCallingCodes = [
  '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39', '+40', '+41', '+43',
  '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52', '+53', '+54', '+55', '+56', '+57', '+58',
  '+60', '+61', '+62', '+63', '+64', '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92',
  '+93', '+94', '+95', '+98', '+211', '+212', '+213', '+216', '+218', '+220', '+221', '+222',
  '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232', '+233', '+234',
  '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242', '+243', '+244', '+245', '+246',
  '+248', '+249', '+250', '+251', '+252', '+253', '+254', '+255', '+256', '+257', '+258', '+260',
  '+261', '+262', '+263', '+264', '+265', '+266', '+267', '+268', '+269', '+290', '+291', '+297',
  '+298', '+299', '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359',
  '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+379', '+380', '+381',
  '+382', '+383', '+385', '+386', '+387', '+389', '+420', '+421', '+423', '+500', '+501', '+502',
  '+503', '+504', '+505', '+506', '+507', '+508', '+509', '+590', '+591', '+592', '+593', '+594',
  '+595', '+596', '+597', '+598', '+599', '+670', '+672', '+673', '+674', '+675', '+676', '+677',
  '+678', '+679', '+680', '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690',
  '+691', '+692', '+850', '+852', '+853', '+855', '+856', '+880', '+886', '+960', '+961', '+962',
  '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972', '+973', '+974', '+975',
  '+976', '+977', '+992', '+993', '+994', '+995', '+996', '+998',
]

export function LeadForm() {
  const { leadForm, slug } = useLandingData()
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const isSubmitting = status === 'submitting'
  const institution = leadForm.institution || 'sg'
  const formName = leadForm.formName || `landing - ${slug || 'savremena'}`
  const landingSlug = slug || 'najbolji-izbor'

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const submittedInstitution = formData.get('institution') || institution
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
        institution: submittedInstitution,
        formName,
        landingSlug,
        pageUrl: window.location.href,
      })

      pushLeadSubmitToDataLayer(leadEventId, {
        institution: submittedInstitution,
        formName,
        landingSlug,
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
        <LeadEventIdField institution={institution} formName={formName} landingSlug={landingSlug} />
        <input type="hidden" name="institution" value={institution} readOnly />
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
            {countryCallingCodes.map((code) => (
              <option value={code} key={code}>
                {code}
              </option>
            ))}
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
