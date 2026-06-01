import { useState } from 'react'
import calmImage from '../assets/hero-calm.svg'
import brightImage from '../assets/hero-bright.svg'

export function HeroImageReveal() {
  const [position, setPosition] = useState(50)

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
        src={calmImage}
        alt="Smirena plava vizuelna varijanta"
      />
      <div className="hero-image-reveal__overlay" aria-hidden="true">
        <img
          className="hero-image-reveal__image"
          src={brightImage}
          alt=""
        />
      </div>
      <div className="hero-image-reveal__axis" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}
