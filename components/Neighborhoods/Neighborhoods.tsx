import Image from 'next/image'
import './Neighborhoods.css'

const neighborhoods = [
  { name: 'Park Slope', slug: 'park-slope' },
  { name: 'Dumbo', slug: 'dumbo' },
  { name: 'Flatbush', slug: 'flatbush' },
  { name: 'Williamsburg', slug: 'williamsburg' },
  { name: 'Greenpoint', slug: 'greenpoint' },
]

export default function Neighborhoods() {
  return (
    <section className="nbhdWrapper">
      <div className="section">
        <p className="nbhdLabel">We Serve All Of Brooklyn</p>
        <h2 className="nbhdHeading">Brooklyn's Favorite Pet Grooming Salon</h2>
        <p className="nbhdIntro">
          Located in Park Slope, we&apos;re an easy trip for pet owners across Brooklyn.
          Our clients come from all over — and their pets leave looking their best.
        </p>
        <div className="nbhdGrid">
          {neighborhoods.map(({ name, slug }) => (
            <div key={slug} className="nbhdCard">
              <div className="nbhdImageWrap">
                <Image
                  src={`https://brooklynpetspa.com/wp-content/uploads/2024/10/${slug}.png`}
                  alt={`Pet grooming in ${name}, Brooklyn`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="nbhdOverlay" />
              </div>
              <p className="nbhdName">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
