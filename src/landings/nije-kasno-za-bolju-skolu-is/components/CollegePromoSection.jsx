import { useLandingData } from '../useLandingData'

export function CollegePromoSection() {
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'

  return (
    <section
      className="nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-college-promo"
      aria-labelledby="college-promo-title"
    >
      <div className="nije-kasno-za-bolju-skolu-is-landing-container nije-kasno-za-bolju-skolu-is-college-promo__box">
        <div className="nije-kasno-za-bolju-skolu-is-college-promo__content">
          <p className="nije-kasno-za-bolju-skolu-is-college-promo__eyebrow">
            {isEnglish ? 'Your child’s passport to a global future.' : 'Your child’s passport to a global future.'}
          </p>
          <h2 id="college-promo-title">{isEnglish ? 'Opening the doors to the world’s leading universities' : 'Otvorena vrata prestižnih svetskih univerziteta'}</h2>
          {isEnglish ? (
            <>
              <p>
                International School graduates are now successful students of biomedicine, software engineering, business and economics, political science and many other disciplines.
              </p>
              <p>
                They study at leading universities, work for major companies and achieve success in many fields. As many as 62% of International School students choose to study abroad at universities such as <strong>Cesar Ritz College (Switzerland)</strong>, <strong>EU Business School (Germany)</strong>, <strong>BA in Global Business Management (Switzerland)</strong>, <strong>Glion Institute of Higher Education (Switzerland)</strong>, <strong>Sheffield City College (Greece)</strong> and many others.
              </p>
            </>
          ) : (
            <>
              <p>
                Učenici koje je iznedrio International School danas su uspešni studenti biomedicine, softverskog inženjerstva, biznisa i ekonomije, politikologije i mnogih drugih nauka.
              </p>
              <p>
                Studiraju na najprestižnijim univerzitetima, rade u vodećim kompanijama i ostvaruju značajne uspehe u raznim oblastima, a čak 62% učenika International Schoola bira studije u inostranstvu na svetskim univerzitetima kao što su <strong>Cesar Ritz College (Švajcarska)</strong>, <strong>EU Business School (Nemačka)</strong>, <strong>BA on Global Business Management (Švajcarska)</strong>, <strong>Glion Institute of Higher Education (Švajcarska)</strong>, <strong>Sheffield City College (Grčka)</strong> i mnogi drugi.
              </p>
            </>
          )}
        </div>
        <figure className="nije-kasno-za-bolju-skolu-is-college-promo__image">
          <img
            src="https://www.international-school.edu.rs/wp-content/uploads/2026/09/college_is_promo.jpg"
            alt={isEnglish ? 'International School students on their path to global universities' : 'Učenici International Schoola na putu ka svetskim univerzitetima'}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
