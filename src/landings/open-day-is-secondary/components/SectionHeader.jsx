export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="open-day-is-secondary-section-header">
      {eyebrow ? <p className="open-day-is-secondary-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="open-day-is-secondary-section-header__title">{title}</h2>
      {text ? <p className="open-day-is-secondary-section-header__text">{text}</p> : null}
    </div>
  )
}
