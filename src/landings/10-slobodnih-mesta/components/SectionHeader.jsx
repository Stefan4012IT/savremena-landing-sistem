export function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="deset-slobodnih-mesta-section-header">
      {eyebrow ? <p className="deset-slobodnih-mesta-section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="deset-slobodnih-mesta-section-header__title">{title}</h2>
      {text ? <p className="deset-slobodnih-mesta-section-header__text">{text}</p> : null}
    </div>
  )
}
