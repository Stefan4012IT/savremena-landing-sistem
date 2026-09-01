export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="nije-kasno-za-bolju-skolu-sos-section-header">
      {eyebrow ? <p className="nije-kasno-za-bolju-skolu-sos-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="nije-kasno-za-bolju-skolu-sos-section-header__title">{title}</h2>
      {text ? <p className="nije-kasno-za-bolju-skolu-sos-section-header__text">{text}</p> : null}
    </div>
  )
}
