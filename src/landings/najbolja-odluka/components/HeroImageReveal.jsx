import { useEffect, useRef, useState } from 'react'
import badFeelingsImage from '../assets/bad_feelings_02.jpg'
import goodFeelingsImage from '../assets/good_feelings_02.jpg'

export function HeroImageReveal({ beforeImageUrl, afterImageUrl }) {
  const [position, setPosition] = useState(50)
  const revealRef = useRef(null)
  const beforeImage = beforeImageUrl || badFeelingsImage
  const afterImage = afterImageUrl || goodFeelingsImage

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1060px)')

    function updateMobileReveal() {
      if (!mediaQuery.matches || !revealRef.current) {
        return
      }

      const stage = revealRef.current.querySelector('.hero-image-reveal__mobile-stage')

      if (!stage) {
        return
      }

      const bounds = stage.getBoundingClientRect()
      const start = window.innerHeight * 0.46
      const end = window.innerHeight * 0.12
      const progress = ((start - bounds.top) / (start - end)) * 100

      setPosition(Math.min(100, Math.max(0, progress)))
    }

    updateMobileReveal()
    window.addEventListener('scroll', updateMobileReveal, { passive: true })
    window.addEventListener('resize', updateMobileReveal)

    return () => {
      window.removeEventListener('scroll', updateMobileReveal)
      window.removeEventListener('resize', updateMobileReveal)
    }
  }, [])

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextPosition = ((event.clientX - bounds.left) / bounds.width) * 100
    setPosition(Math.min(100, Math.max(0, nextPosition)))
  }

  return (
    <div
      ref={revealRef}
      className="hero-image-reveal"
      onPointerMove={handlePointerMove}
      style={{ '--reveal-position': `${position}%` }}
    >
      <div className="hero-image-reveal__headline">
        <h1>
          <span>Niste upisali željenu školu?</span>
        </h1>
      </div>

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
          alt="Osećaj razočaranja pre nove odluke"
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

      <div className="hero-image-reveal__mobile">
        <div className="hero-image-reveal__mobile-copy hero-image-reveal__mobile-copy--before">
          <p className="hero-image-reveal__kicker">Izašla je rang-lista.</p>
          <h2>Razočarani ste.</h2>
          <p className="hero-image-reveal__subhead">Ali ne vidite rešenje...</p>
          <p>Valjda će brzo proći te 4 godine...</p>
          <p>
            Ne dozvolite da broj bodova i formalnosti utiču na budućnost vašeg deteta. To ne
            znači da nije vredno, lošije ili ima manje potencijala.
          </p>
        </div>

        <div className="hero-image-reveal__mobile-stage" aria-label="Promena raspoloženja učenika tokom skrola">
          <img
            className="hero-image-reveal__mobile-image"
            src={beforeImage}
            alt="Osećaj razočaranja pre nove odluke"
          />
          <div className="hero-image-reveal__mobile-overlay" aria-hidden="true">
            <img
              className="hero-image-reveal__mobile-image"
              src={afterImage}
              alt=""
            />
          </div>
          <div className="hero-image-reveal__mobile-axis" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="hero-image-reveal__mobile-copy hero-image-reveal__mobile-copy--after">
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
      </div>
    </div>
  )
}
