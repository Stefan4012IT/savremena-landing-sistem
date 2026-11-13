export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="pravi-trenutak-is-section-header">
      {eyebrow ? <p className="pravi-trenutak-is-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="pravi-trenutak-is-section-header__title">{title}</h2>
      {text ? <p className="pravi-trenutak-is-section-header__text">{text}</p> : null}
    </div>
  )
}
