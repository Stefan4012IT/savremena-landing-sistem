import { useLandingData } from '../useLandingData'

export function LeadForm() {
  const { leadForm } = useLandingData()

  return (
    <form className="lead-form">
      <input
        className="lead-form__honeypot"
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="lead-form__row">
        <input type="text" name="name" placeholder={leadForm.namePlaceholder} autoComplete="name" />
        <input type="email" name="email" placeholder={leadForm.emailPlaceholder} autoComplete="email" />
      </div>
      <div className="lead-form__row lead-form__row--phone">
        <select name="countryCode" defaultValue="+381" aria-label={leadForm.countryCodeLabel}>
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
        />
        <input
          type="tel"
          name="phone"
          placeholder={leadForm.phonePlaceholder}
          autoComplete="tel"
          aria-label={leadForm.phoneLabel}
        />
      </div>
      <button type="submit">Prijavite se</button>
    </form>
  )
}
