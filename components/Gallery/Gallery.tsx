import Image from 'next/image'
import './Gallery.css'

const photos = [
  {
    src: 'https://brooklynpetspa.com/wp-content/uploads/2023/04/b1-1.jpg',
    alt: 'Dog grooming at Brooklyn Pet Spa',
  },
  {
    src: 'https://brooklynpetspa.com/wp-content/uploads/2023/04/b2-1.jpg',
    alt: 'Pet spa treatment Brooklyn',
  },
  {
    src: 'https://brooklynpetspa.com/wp-content/uploads/2023/04/b3-1.jpg',
    alt: 'Cat grooming Park Slope',
  },
  {
    src: 'https://brooklynpetspa.com/wp-content/uploads/2023/04/b4-1.jpg',
    alt: 'Dog daycare Brooklyn',
  },
  {
    src: 'https://brooklynpetspa.com/wp-content/uploads/2023/04/b5-1.jpg',
    alt: 'Pet boarding Brooklyn Pet Spa',
  },
]

export default function Gallery() {
  return (
    <section className="galleryWrapper">
      <div className="galleryStrip">
        {photos.map((photo, i) => (
          <div key={i} className="galleryPhoto">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 60vw, 20vw"
            />
            <div className="galleryOverlay" aria-hidden="true">
              <span className="galleryPlus">+</span>
            </div>
          </div>
        ))}
      </div>
      <div className="galleryCaption">
        <a
          href="https://www.instagram.com/brooklynpetspa/"
          target="_blank"
          rel="noopener noreferrer"
          className="galleryInstaLink"
        >
          Follow us on Instagram @brooklynpetspa →
        </a>
      </div>
    </section>
  )
}
