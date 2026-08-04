import { SectionHeader } from './SectionHeader'

const spaceImages = [
  'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2025/11/SG_interaction_03.jpg',
  'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2025/11/SG_parents_exploration_01-3.jpg',
  'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2025/11/SG_bioblioteka_01.jpg',
  'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2025/11/SG_inovation_04.jpg',
]

const carouselImages = [...spaceImages, ...spaceImages]

export function FutureSpaceSection() {
  return (
    <section className="deset-slobodnih-mesta-landing-section deset-slobodnih-mesta-future-space">
      <div className="deset-slobodnih-mesta-landing-container">
        <SectionHeader title="Najsavremeniji prostor za generacije budućnosti" />
        <div className="deset-slobodnih-mesta-future-space__carousel" aria-label="Prostor Savremene gimnazije">
          <div className="deset-slobodnih-mesta-future-space__track">
            {carouselImages.map((imageUrl, index) => (
              <figure className="deset-slobodnih-mesta-future-space__slide" key={`${imageUrl}-${index}`}>
                <img src={imageUrl} alt="" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
