import { useState } from 'react'

const contacts = [
  { label: 'Pozovite', href: 'tel:+381114011223', type: 'phone' },
  { label: 'Viber', href: 'viber://chat?number=%2B381621918056', type: 'viber' },
  { label: 'WhatsApp', href: 'https://wa.me/381621918056', type: 'whatsapp' },
]

function ContactIcon({ type }) {
  if (type === 'phone') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.8 9.4 7l-1.5 2.2a14 14 0 0 0 6.9 6.9l2.2-1.5 3.2 2.4-.9 3a2 2 0 0 1-2.2 1.4A18.5 18.5 0 0 1 2.6 6.9 2 2 0 0 1 4 4.7l3-.9Z" /></svg>
  }

  if (type === 'whatsapp') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.8a8.1 8.1 0 0 1-12 7.1l-4.3 1.2 1.2-4.2a8.1 8.1 0 1 1 15.1-4.1Z" /><path d="M8.3 7.7c.2-.4.4-.4.7-.4h.5l1 2.3-.8 1c.7 1.4 1.7 2.3 3.2 3l.8-.9 2.3 1.1v.5c0 .4-.2.8-.5 1-1.1.8-2.5.3-4.4-.7-2.1-1.1-3.8-3-4.2-4.4-.4-1 .6-2.1 1.4-2.5Z" /></svg>
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.2 3.6A10.8 10.8 0 0 0 12.1 2C7.2 2 3.4 5.1 3.4 9.4c0 2.3 1.1 4.4 3 5.8v3.7c0 .4.5.6.8.3l2.4-2.2c.8.2 1.6.3 2.5.3 4.9 0 8.7-3.1 8.7-7.4 0-2.5-1-4.7-2.6-6.3Z" />
      <path d="M9.1 7.2c.3-.1.7 0 .9.3l.8 1.3c.2.3.1.7-.1 1l-.4.4c.4.8 1 1.4 1.8 1.8l.4-.4c.3-.3.7-.3 1-.1l1.3.8c.3.2.5.6.3.9-.2.7-.8 1.2-1.5 1.2-2.7 0-6-3.3-6-6 0-.6.5-1.2 1.5-1.2Z" />
      <path d="M12.5 6.2c1.9.2 3.1 1.4 3.3 3.3M12.6 8.1c.9.1 1.4.6 1.5 1.5" />
    </svg>
  )
}

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`black-friday-sos-sg-contact-widget${isOpen ? ' is-open' : ''}`}>
      <div className="black-friday-sos-sg-contact-widget__visual-anchor">
        {isOpen ? (
          <div className="black-friday-sos-sg-contact-widget__menu" id="black-friday-sos-sg-contact-options">
            {contacts.map(({ label, href, type }) => (
              <a
                className={`black-friday-sos-sg-contact-widget__option black-friday-sos-sg-contact-widget__option--${type}`}
                href={href}
                key={type}
                target={type === 'whatsapp' ? '_blank' : undefined}
                rel={type === 'whatsapp' ? 'noreferrer' : undefined}
              >
                <ContactIcon type={type} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        ) : null}
        <div className="black-friday-sos-sg-contact-widget__promo-box">
          <button
            className="black-friday-sos-sg-contact-widget__trigger"
            type="button"
            aria-label="Otvori kontakt opcije"
            aria-expanded={isOpen}
            aria-controls="black-friday-sos-sg-contact-options"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="black-friday-sos-sg-contact-widget__visual">
              <strong>-42%</strong>
              <span>samo do <b>30.11.</b></span>
            </span>
          </button>
          <button
            className="black-friday-sos-sg-contact-widget__label-trigger"
            type="button"
            aria-expanded={isOpen}
            aria-controls="black-friday-sos-sg-contact-options"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="black-friday-sos-sg-contact-widget__label">
              <span>Pozovite</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m5 4 6 6-6 6M10 4l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}
