export function InfoCard({ title, tag, text, withProfileImage = false }) {
  return (
    <article className="info-card">
      <div className="info-card__header">
        {withProfileImage ? (
          <div className="info-card__profile" aria-hidden="true">
            <span>{title.charAt(0)}</span>
          </div>
        ) : null}
        {tag ? <p className="info-card__tag">{tag}</p> : null}
      </div>
      <h3 className="info-card__title">{title}</h3>
      <p className="info-card__text">{text}</p>
    </article>
  )
}
