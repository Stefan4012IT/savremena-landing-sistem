export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="upis-je-otvoren-sos-section-header">
      {eyebrow ? <p className="upis-je-otvoren-sos-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="upis-je-otvoren-sos-section-header__title">{title}</h2>
      {text ? <p className="upis-je-otvoren-sos-section-header__text">{text}</p> : null}
    </div>
  )
}
