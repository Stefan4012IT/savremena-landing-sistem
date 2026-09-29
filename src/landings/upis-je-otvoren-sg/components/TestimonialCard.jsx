import { useState } from 'react'

export function TestimonialCard({
  title,
  text,
  author,
  role,
  initials,
  avatarImageUrl,
  videoImageUrl,
  videoEmbedUrl,
  variant = 'text',
}) {
  const isVideo = variant === 'video'
  const [isPlaying, setIsPlaying] = useState(false)
  const autoplayUrl = videoEmbedUrl
    ? `${videoEmbedUrl}${videoEmbedUrl.includes('?') ? '&' : '?'}autoplay=1`
    : ''

  return (
    <article className={`upis-je-otvoren-sg-testimonial-card upis-je-otvoren-sg-testimonial-card--${variant}`}>
      <div className="upis-je-otvoren-sg-testimonial-card__body">
        <h3>{title}</h3>
        {isVideo ? (
          <div className="upis-je-otvoren-sg-testimonial-card__video" aria-label={`Video testimonijal: ${title}`}>
            {isPlaying && autoplayUrl ? (
              <iframe
                className="upis-je-otvoren-sg-testimonial-card__video-embed"
                src={autoplayUrl}
                title={`Video testimonijal: ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                {videoImageUrl ? (
                  <img className="upis-je-otvoren-sg-testimonial-card__video-image" src={videoImageUrl} alt="" />
                ) : (
                  <span className="upis-je-otvoren-sg-testimonial-card__video-person">{author}</span>
                )}
                <button
                  className="upis-je-otvoren-sg-testimonial-card__play"
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Pusti video testimonijal: ${title}`}
                >
                  <svg viewBox="0 0 100 100" focusable="false" aria-hidden="true">
                    <polygon points="38,28 38,72 72,50" />
                  </svg>
                </button>
              </>
            )}
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <footer className="upis-je-otvoren-sg-testimonial-card__footer">
        {!isVideo ? (
          <div className="upis-je-otvoren-sg-testimonial-card__avatar" aria-hidden="true">
            {avatarImageUrl ? <img src={avatarImageUrl} alt="" /> : <span>{initials}</span>}
          </div>
        ) : null}
        <div>
          <strong>{author}</strong>
          <span>{role}</span>
        </div>
      </footer>
    </article>
  )
}
