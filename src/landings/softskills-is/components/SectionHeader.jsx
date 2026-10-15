export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="softskills-is-section-header">
      {eyebrow ? <p className="softskills-is-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="softskills-is-section-header__title">{title}</h2>
      {text ? <p className="softskills-is-section-header__text">{text}</p> : null}
    </div>
  )
}
