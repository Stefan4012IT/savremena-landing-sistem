export function LeadForm() {
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
        <input type="text" name="name" placeholder="Ime i prezime" autoComplete="name" />
        <input type="email" name="email" placeholder="E-mail" autoComplete="email" />
      </div>
      <div className="lead-form__row lead-form__row--phone">
        <select name="countryCode" defaultValue="+381" aria-label="Pozivni broj drzave">
          <option value="+381">+381</option>
          <option value="+382">+382</option>
          <option value="+387">+387</option>
          <option value="+389">+389</option>
        </select>
        <input type="text" name="areaCode" placeholder="64" inputMode="tel" aria-label="Pozivni broj" />
        <input type="tel" name="phone" placeholder="1234567" autoComplete="tel" aria-label="Telefon" />
      </div>
      <button type="submit">Prijavite se</button>
    </form>
  )
}
