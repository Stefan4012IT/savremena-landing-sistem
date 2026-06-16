export function TestimonialCard({
  title,
  text,
  author,
  role,
  initials,
  avatarImageUrl,
  videoImageUrl,
  variant = 'text',
}) {
  const isVideo = variant === 'video'

  return (
    <article className={`testimonial-card testimonial-card--${variant}`}>
      <div className="testimonial-card__body">
        <h3>{title}</h3>
        {isVideo ? (
          <div className="testimonial-card__video" aria-label={`Video testimonijal: ${title}`}>
            {videoImageUrl ? (
              <img className="testimonial-card__video-image" src={videoImageUrl} alt="" />
            ) : (
              <span className="testimonial-card__video-person">{initials}</span>
            )}
            <span className="testimonial-card__play" aria-hidden="true" />
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <footer className="testimonial-card__footer">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {avatarImageUrl ? <img src={avatarImageUrl} alt="" /> : <span>{initials}</span>}
        </div>
        <div>
          <strong>{author}</strong>
          <span>{role}</span>
        </div>
      </footer>
    </article>
  )
}
