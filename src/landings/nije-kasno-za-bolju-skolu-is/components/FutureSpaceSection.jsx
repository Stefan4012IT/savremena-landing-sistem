import { SectionHeader } from './SectionHeader'

const spaceImages = [
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_4.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_5.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_6.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_7.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_8.jpg',
]

const carouselImages = [...spaceImages, ...spaceImages]

export function FutureSpaceSection() {
  return (
    <section className="nije-kasno-za-bolju-skolu-is-landing-section nije-kasno-za-bolju-skolu-is-future-space">
      <div className="nije-kasno-za-bolju-skolu-is-landing-container">
        <SectionHeader title="Najsavremeniji prostor za generacije budućnosti" />
        <div className="nije-kasno-za-bolju-skolu-is-future-space__carousel" aria-label="Prostor International School-a">
          <div className="nije-kasno-za-bolju-skolu-is-future-space__track">
            {carouselImages.map((imageUrl, index) => (
              <figure className="nije-kasno-za-bolju-skolu-is-future-space__slide" key={`${imageUrl}-${index}`}>
                <img src={imageUrl} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
