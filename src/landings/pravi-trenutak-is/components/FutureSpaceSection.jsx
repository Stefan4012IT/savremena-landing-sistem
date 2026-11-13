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
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/primary_pr1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/primary_pr3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/primary_pr4.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_5.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/primary_pr6.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_7.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/09/is_lower_gallery_8.jpg',
]

const secondaryGalleryImages = [
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/secondary_1.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/secondary_2.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/secondary_3.jpg',
  'https://www.international-school.edu.rs/wp-content/uploads/2026/11/secondary_4.jpg',
]

const mixedSecondaryImages = [...secondaryGalleryImages, ...existingSpaceImages]

export function FutureSpaceCarousel({ stage = 'primary' }) {
  const images = stage === 'secondary' ? mixedSecondaryImages : lowerGalleryImages
  const carouselImages = [...images, ...images]

  return (
    <div className="pravi-trenutak-is-future-space__carousel" aria-label="International School spaces">
      <div className="pravi-trenutak-is-future-space__track">
        {carouselImages.map((imageUrl, index) => (
          <figure className="pravi-trenutak-is-future-space__slide" key={`${imageUrl}-${index}`}>
            <img src={imageUrl} alt="" />
          </figure>
        ))}
      </div>
    </div>
  )
}
