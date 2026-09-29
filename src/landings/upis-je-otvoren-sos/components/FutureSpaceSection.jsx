import { SectionHeader } from './SectionHeader'

const spaceImages = [
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/new_prostor_1.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/gallery_part_two_3.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/new_prostor_2.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/gallery_part_two_1.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/new_prostor_3.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/gallery_part_two_4.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/new_prostor_4.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/gallery_part_two_2.jpg',
  'https://www.savremena-osnovna.edu.rs/wp-content/uploads/2026/09/gallery_part_two_5.jpg',
]

const carouselImages = [...spaceImages, ...spaceImages]

export function FutureSpaceSection() {
  return (
    <section className="upis-je-otvoren-sos-landing-section upis-je-otvoren-sos-future-space">
      <div className="upis-je-otvoren-sos-landing-container">
        <SectionHeader title="Najsavremeniji prostor za generacije budućnosti" />
        <div className="upis-je-otvoren-sos-future-space__carousel" aria-label="Prostor Savremene gimnazije">
          <div className="upis-je-otvoren-sos-future-space__track">
            {carouselImages.map((imageUrl, index) => (
              <figure className="upis-je-otvoren-sos-future-space__slide" key={`${imageUrl}-${index}`}>
                <img src={imageUrl} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
