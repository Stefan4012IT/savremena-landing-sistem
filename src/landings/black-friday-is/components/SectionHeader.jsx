export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="black-friday-is-section-header">
      {eyebrow ? <p className="black-friday-is-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="black-friday-is-section-header__title">{title}</h2>
      {text ? <p className="black-friday-is-section-header__text">{text}</p> : null}
    </div>
  )
}
