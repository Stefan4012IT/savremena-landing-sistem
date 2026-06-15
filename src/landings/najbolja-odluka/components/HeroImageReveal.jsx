import { useState } from 'react'
import calmImage from '../assets/hero-calm.svg'
import brightImage from '../assets/hero-bright.svg'

export function HeroImageReveal({ beforeImageUrl, afterImageUrl }) {
  const [position, setPosition] = useState(50)
  const beforeImage = beforeImageUrl || calmImage
  const afterImage = afterImageUrl || brightImage

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100
    setPosition(Math.min(100, Math.max(0, nextPosition)))
  }

  return (
    <div
      className="hero-image-reveal"
      onPointerMove={handlePointerMove}
      style={{ '--reveal-position': `${position}%` }}
    >
      <img
        className="hero-image-reveal__image"
        src={beforeImage}
        alt="Osecaj razocaranja pre nove odluke"
      />
      <div className="hero-image-reveal__overlay" aria-hidden="true">
        <img
          className="hero-image-reveal__image"
          src={afterImage}
          alt=""
        />
      </div>
      <div className="hero-image-reveal__axis" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}
