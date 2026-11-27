import { useState } from 'react'
import { LeadEventIdField } from '../../components/LeadEventIdField'
import { pushLeadSubmitToDataLayer } from '../../services/leadEventId'
import { submitLeadWebhook } from '../../services/leadWebhook'
import cambridgeLogo from '../black-friday-is/assets/logos/cambridge-logo-white.png'
import { parentEducationLandingData } from './landingContent'

const sgLogo = 'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/11/sg_2026_logo.svg'

function EventForm({ events, slug }) {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const formName = 'besplatna-edukacija-za-roditelje'

  async function handleSubmit(formEvent) {
    formEvent.preventDefault()
    const form = formEvent.currentTarget
    const formData = new FormData(form)

    if (!formData.get('consent')) {
      setStatus('error')
      setMessage('Potrebna je saglasnost za organizaciju predavanja.')
      return
    }

    setStatus('submitting')
    setMessage('')

    try {
      await submitLeadWebhook({
        name: formData.get('name'),
        email: formData.get('email'),
        phoneNumber: formData.get('phone'),
        event: formData.get('event'),
        consent: Boolean(formData.get('consent')),
        institution: 'sg',
        formName,
        landingSlug: slug,
        leadEventId: formData.get('lead_event_id'),
        website: formData.get('website'),
        pageUrl: window.location.href,
      })
      pushLeadSubmitToDataLayer(formData.get('lead_event_id'), { institution: 'sg', formName, landingSlug: slug })
      form.reset()
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Prijava trenutno ne može da se pošalje. Pokušajte ponovo.')
    }
  }

  if (status === 'success') {
    return <div className="parent-education__form-success"><strong>Prijava je primljena.</strong><p>Potvrdu i informacije o predavanju poslali smo na vaš email.</p></div>
  }

  return (
    <form className="parent-education__form" onSubmit={handleSubmit} noValidate>
      <LeadEventIdField institution="sg" formName={formName} landingSlug={slug} />
      <input className="parent-education__honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <select name="event" aria-label="Izaberite predavanje" required defaultValue="">
        <option value="" disabled>Izaberite predavanje</option>
        {events.map((event) => <option value={event.title} key={event.id}>{event.title}</option>)}
      </select>
      <input name="name" placeholder="Ime i prezime" autoComplete="name" required />
      <input name="email" type="email" placeholder="E-mail" autoComplete="email" required />
      <input name="phone" type="tel" placeholder="Telefon (opciono, za SMS podsetnik)" autoComplete="tel" />
      <label className="parent-education__check"><input name="consent" type="checkbox" required /><span>Saglasan/na sam da Savremena gimnazija obrađuje moje podatke radi organizacije predavanja, slanja potvrde i podsetnika, u skladu sa <a href="https://www.savremena-gimnazija.edu.rs/privatnost-korisnika/" target="_blank" rel="noreferrer">Politikom privatnosti</a>.</span></label>
      {status === 'error' ? <p className="parent-education__form-error" role="alert">{message}</p> : null}
      <button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Slanje...' : 'Prijavite se besplatno'}</button>
      <small>Prijava traje manje od minuta. Potvrdu dobijate na email.</small>
    </form>
  )
}

function EventSection({ event, index }) {
  return (
    <section className={`parent-education__event parent-education__event--${index % 2 ? 'sand' : 'white'}`} id={event.id}>
      <div className="parent-education__container">
        <div className="parent-education__event-copy">
          <p className="parent-education__eyebrow">{event.label}</p>
          <h2>{event.title}</h2>
          {event.subtitle ? <p className="parent-education__subtitle">{event.subtitle}</p> : null}
          <p>{event.text}</p>
          <h3>Šta ćete saznati</h3>
          <ul>{event.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="parent-education__details">{event.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
          <div className="parent-education__speaker">
            <img src={event.imageUrl} alt="" />
            <div><p className="parent-education__speaker-name">{event.speaker}</p><p>{event.role}</p><p>{event.bio}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ParentEducationLanding({ data = parentEducationLandingData }) {
  const { hero, events, slug } = data

  return (
    <main className="parent-education">
      <section className="parent-education__hero">
        <div className="parent-education__hero-image" style={{ backgroundImage: `url(${hero.imageUrl})` }} aria-hidden="true" />
        <header className="parent-education__header">
          <a href="https://www.savremena-gimnazija.edu.rs" aria-label="Savremena gimnazija"><img src={sgLogo} alt="Savremena gimnazija" /></a>
          <div className="parent-education__credentials" aria-label="Akreditacije">
            <img src={cambridgeLogo} alt="Cambridge International Education" />
            <img src="https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/07/ministarstvo_prosvete_logo_color_white.png" alt="Ministarstvo prosvete" />
          </div>
        </header>
        <div className="parent-education__container parent-education__hero-inner">
          <div className="parent-education__hero-copy">
            <p className="parent-education__eyebrow">{hero.label}</p>
            <h1>{hero.title}</h1>
            <p className="parent-education__lead">{hero.text}</p>
            <p className="parent-education__event-line">{hero.event}</p>
            <a className="parent-education__button" href={`#${events[0].id}`}>Prijavite se besplatno</a>
          </div>
        </div>
      </section>
      <div className="parent-education__program-area">
        <div className="parent-education__program-main">
          {events.map((event, index) => <EventSection event={event} index={index} key={event.id} />)}
          <section className="parent-education__why">
            <div className="parent-education__container parent-education__why-grid">
              <div><p className="parent-education__eyebrow">Podrška bez obaveze</p><h2>Podrška mladima podrazumeva i podršku roditeljima.</h2><p>Odrastanje donosi izazove za celu porodicu. Zato Savremena gimnazija otvara prostor za razgovor o važnim temama adolescencije i okuplja stručnjake koji roditeljima mogu da pruže znanje, razumevanje i praktičnu podršku.</p><p>Naši edukativni programi otvoreni su za sve roditelje, bez obzira na to koju školu njihova deca pohađaju. Predavanja su besplatna i bez ikakve obaveze upisa.</p><a href="https://www.savremena-gimnazija.edu.rs">Saznajte više o Savremenoj gimnaziji</a></div>
            </div>
          </section>
        </div>
        <aside className="parent-education__registration-panel" aria-label="Prijava za besplatna predavanja">
          <div className="parent-education__registration-sticky">
            <p className="parent-education__form-label">Besplatna prijava</p>
            <h2>Rezervišite svoje mesto</h2>
            <p>Izaberite predavanje i prijavite se u manje od jednog minuta.</p>
            <EventForm events={events} slug={slug} />
          </div>
        </aside>
      </div>
      <section className="parent-education__final"><div className="parent-education__container"><h2>Zajedno kroz izazove adolescencije.</h2><p>Informišite se, učite i pronađite podršku za izazove savremenog roditeljstva.</p><a className="parent-education__button parent-education__button--light" href={`#${events[0].id}`}>Prijavite se besplatno</a></div></section>
      <footer className="parent-education__footer"><img src={sgLogo} alt="Savremena gimnazija" /><p>Masarikova 5, Palata Beograd · <a href="tel:+381114011223">011/4011-223</a></p></footer>
      <a className="parent-education__sticky" href={`#${events[0].id}`}>Prijavite se besplatno</a>
    </main>
  )
}
