export function InfoCard({ title, tag, details, text, imageUrl, withProfileImage = false, className = '' }) {
  const cardClassName = ['open-day-is-secondary-info-card', className].filter(Boolean).join(' ')

  return (
    <article className={cardClassName}>
      <div className="open-day-is-secondary-info-card__header">
        {withProfileImage ? (
          <div className="open-day-is-secondary-info-card__profile" aria-hidden="true">
            {imageUrl ? <img src={imageUrl} alt="" /> : <span>{title.charAt(0)}</span>}
          </div>
        ) : null}
        <div className="open-day-is-secondary-info-card__heading">
          <h3 className="open-day-is-secondary-info-card__title">{title}</h3>
          {tag ? <p className="open-day-is-secondary-info-card__tag">{tag}</p> : null}
          {details ? <p className="open-day-is-secondary-info-card__details">{details}</p> : null}
        </div>
      </div>
      <p className="open-day-is-secondary-info-card__text">{text}</p>
    </article>
  )
}
