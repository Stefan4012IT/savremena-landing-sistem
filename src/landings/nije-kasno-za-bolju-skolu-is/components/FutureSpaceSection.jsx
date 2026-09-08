const existingSpaceImages = [
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_4.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_5.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_6.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_7.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_novi_prostor_8.jpg',
]

const lowerGalleryImages = [
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_4.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_5.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_6.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_7.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_8.jpg',
]

const secondaryGalleryImages = [
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_secondary_gallery_1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_secondary_gallery_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_secondary_gallery_3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_secondary_gallery_4.jpg',
]

function shuffleImages(images) {
  const shuffled = [...images]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentImage = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentImage
  }

  return shuffled
}

const mixedSecondaryImages = shuffleImages([...existingSpaceImages, ...secondaryGalleryImages])

export function FutureSpaceCarousel({ stage = 'primary' }) {
  const images = stage === 'secondary' ? mixedSecondaryImages : lowerGalleryImages
  const carouselImages = [...images, ...images]

  return (
    <div className="nije-kasno-za-bolju-skolu-is-future-space__carousel" aria-label="International School spaces">
      <div className="nije-kasno-za-bolju-skolu-is-future-space__track">
        {carouselImages.map((imageUrl, index) => (
          <figure className="nije-kasno-za-bolju-skolu-is-future-space__slide" key={`${imageUrl}-${index}`}>
            <img src={imageUrl} alt="" />
          </figure>
        ))}
      </div>
    </div>
  )
}
