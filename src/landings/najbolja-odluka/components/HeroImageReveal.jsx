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
      <div className="hero-image-reveal__side hero-image-reveal__side--before">
        <div className="hero-image-reveal__copy hero-image-reveal__copy--before">
          <p className="hero-image-reveal__kicker">Izašla je rang-lista.</p>
          <h2>Razočarani ste.</h2>
          <p className="hero-image-reveal__subhead">Ali ne vidite rešenje...</p>
          <p>Valjda će brzo proći te 4 godine...</p>
          <p>
            Ne dozvolite da broj bodova i formalnosti utiču na budućnost vašeg deteta. To ne
            znači da nije vredno, lošije ili ima manje potencijala.
          </p>
        </div>
        <img
          className="hero-image-reveal__image"
          src={beforeImage}
          alt="Osecaj razocaranja pre nove odluke"
        />
      </div>

      <div className="hero-image-reveal__side hero-image-reveal__side--after" aria-hidden="true">
        <div className="hero-image-reveal__copy hero-image-reveal__copy--after">
          <p className="hero-image-reveal__kicker">Niste upisali željenu školu?</p>
          <h2>To je ustvari odlična vest!</h2>
          <p className="hero-image-reveal__subhead">
            Jer idealna škola za vaše dete nije ni bila na listi!
          </p>
          <p>
            Sačuvali smo 5 mesta po povlašćenim uslovima samo za vas koji niste upisali školu koju
            želite.
          </p>
          <p>
            Pomoći ćemo vam da vaše dete dobije najbolje obrazovanje, najzdravije okruženje za
            odrastanje i uspešnu akademsku budućnost.
          </p>
        </div>
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
