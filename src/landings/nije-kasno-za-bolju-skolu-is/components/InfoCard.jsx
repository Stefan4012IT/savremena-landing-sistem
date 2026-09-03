export function InfoCard({ title, tag, details, text, imageUrl, withProfileImage = false, className = '' }) {
  const cardClassName = ['nije-kasno-za-bolju-skolu-is-info-card', className].filter(Boolean).join(' ')

  return (
    <article className={cardClassName}>
      <div className="nije-kasno-za-bolju-skolu-is-info-card__header">
        {withProfileImage ? (
          <div className="nije-kasno-za-bolju-skolu-is-info-card__profile" aria-hidden="true">
            {imageUrl ? <img src={imageUrl} alt="" /> : <span>{title.charAt(0)}</span>}
          </div>
        ) : null}
        <div className="nije-kasno-za-bolju-skolu-is-info-card__heading">
          <h3 className="nije-kasno-za-bolju-skolu-is-info-card__title">{title}</h3>
          {tag ? <p className="nije-kasno-za-bolju-skolu-is-info-card__tag">{tag}</p> : null}
          {details ? <p className="nije-kasno-za-bolju-skolu-is-info-card__details">{details}</p> : null}
        </div>
      </div>
      <p className="nije-kasno-za-bolju-skolu-is-info-card__text">{text}</p>
    </article>
  )
}
