import { LeadForm } from './LeadForm'
import { useLandingData } from '../useLandingData'

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.2 3.6A10.8 10.8 0 0 0 12.1 2C7.2 2 3.4 5.1 3.4 9.4c0 2.3 1.1 4.4 3 5.8v3.7c0 .4.5.6.8.3l2.4-2.2c.8.2 1.6.3 2.5.3 4.9 0 8.7-3.1 8.7-7.4 0-2.5-1-4.7-2.6-6.3Z" />
      <path d="M9.1 7.2c.3-.1.7 0 .9.3l.8 1.3c.2.3.1.7-.1 1l-.4.4c.4.8 1 1.4 1.8 1.8l.4-.4c.3-.3.7-.3 1-.1l1.3.8c.3.2.5.6.3.9-.2.7-.8 1.2-1.5 1.2-2.7 0-6-3.3-6-6 0-.6.5-1.2 1.5-1.2Z" />
      <path d="M12.5 6.2c1.9.2 3.1 1.4 3.3 3.3M12.6 8.1c.9.1 1.4.6 1.5 1.5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.4a9.3 9.3 0 0 0-8 14l-1 4 4.1-1a9.3 9.3 0 1 0 4.9-17Z" />
      <path d="M8.7 7.4c.3-.2.7-.1.9.2l.8 1.8c.1.3.1.6-.1.8l-.5.6c.5 1 1.4 1.9 2.7 2.6l.6-.7c.2-.2.6-.3.9-.2l1.8.8c.3.1.5.5.4.8-.2.9-.9 1.6-1.8 1.6-3.2 0-7.1-3.8-7.1-7.1 0-.5.5-1 1.4-1.2Z" />
    </svg>
  )
}

export function EnrollmentHelpSection() {
  const { enrollmentHelp } = useLandingData()

  return (
    <section className="landing-section enrollment-help">
      <div className="landing-container enrollment-help__inner">
        <div className="enrollment-help__intro">
          <div className="enrollment-help__content">
            <h2>{enrollmentHelp.title}</h2>
            <p>
              {enrollmentHelp.introBeforeName} <strong>{enrollmentHelp.advisorName}</strong>,{' '}
              {enrollmentHelp.introAfterName}
            </p>
            <p>
              <strong>{enrollmentHelp.emphasis}</strong>
            </p>
            <p>{enrollmentHelp.prompt}</p>
            <p className="enrollment-help__contacts">
              <a href="tel:+381114011223">{enrollmentHelp.phonePrimary}</a>;{' '}
              <a href="tel:+381621918056">{enrollmentHelp.phoneSecondary}</a>, pišite na{' '}
              <a className="enrollment-help__messenger-link" href="viber://chat?number=%2B381621918056">
                <ViberIcon />
                <span>{enrollmentHelp.viberLabel}</span>
              </a>{' '}
              i{' '}
              <a className="enrollment-help__messenger-link" href="https://wa.me/381621918056">
                <WhatsAppIcon />
                <span>{enrollmentHelp.whatsappLabel}</span>
              </a>{' '}
              {enrollmentHelp.contactSuffix}
            </p>
            <p>{enrollmentHelp.closing}</p>
          </div>
          <div className="enrollment-help__advisor" aria-label="Savetnica za upis Katarina Petrovic">
            <div className="enrollment-help__advisor-photo">
              {enrollmentHelp.advisorImageUrl ? (
                <img src={enrollmentHelp.advisorImageUrl} alt="" />
              ) : (
                <span>{enrollmentHelp.advisorInitials}</span>
              )}
            </div>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  )
}
