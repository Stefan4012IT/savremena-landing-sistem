export function InfoCard({ title, tag, details, text, imageUrl, withProfileImage = false, className = '' }) {
  const cardClassName = ['upis-je-otvoren-sos-info-card', className].filter(Boolean).join(' ')

  return (
    <article className={cardClassName}>
      <div className="upis-je-otvoren-sos-info-card__header">
        {withProfileImage ? (
          <div className="upis-je-otvoren-sos-info-card__profile" aria-hidden="true">
            {imageUrl ? <img src={imageUrl} alt="" /> : <span>{title.charAt(0)}</span>}
          </div>
        ) : null}
        <div className="upis-je-otvoren-sos-info-card__heading">
          <h3 className="upis-je-otvoren-sos-info-card__title">{title}</h3>
          {tag ? <p className="upis-je-otvoren-sos-info-card__tag">{tag}</p> : null}
          {details ? <p className="upis-je-otvoren-sos-info-card__details">{details}</p> : null}
        </div>
      </div>
      <p className="upis-je-otvoren-sos-info-card__text">{text}</p>
    </article>
  )
}
