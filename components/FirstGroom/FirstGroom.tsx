import Image from 'next/image'
import Link from 'next/link'
import './FirstGroom.css'

const breeds = [
  'Dachshund', 'Miniature Schnauzer', 'Yorkshire Terrier', 'Poodle',
  'Golden Retriever', 'Labrador Retriever', 'Chihuahua', 'Cocker Spaniel',
]

export default function FirstGroom() {
  return (
    <>
      <section className="groomWrapper">
        <div className="section">
          <div className="groomInner">
            <div className="groomImageWrap">
              <Image
                src="https://brooklynpetspa.com/wp-content/uploads/2023/04/pete-bellis-481283-unsplash.jpg"
                alt="First trip to the groomer at Brooklyn Pet Spa"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="groomText">
              <p className="groomLabel">New Clients Welcome</p>
              <h2 className="groomHeading">First Trip to the Groomer?</h2>
              <p className="groomBody">
                We welcome pets of all ages — including puppies on their very first visit. Our
                Park Slope salon has helped thousands of nervous first-timers feel completely at
                ease. Our trained stylists help pets feel comfortable during that first brush, and
                we understand this is a big moment for both you and your pet.
              </p>
              <p className="groomBody">
                We take a fear-free, cage-free approach from the very first appointment. No rush,
                no stress — just a calm, professional experience your pet will actually enjoy.
              </p>
              <Link href="/book-now" className="groomBtn">Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="groomBreedWrapper">
        <div className="section">
          <h2 className="groomBreedHeading">We Know Every Breed</h2>
          <p className="groomBreedIntro">
            We&apos;re armed with breed-specific expertise across hundreds of coat types and temperaments.
            Our specialty is giving every dog the exact cut and care their breed requires — not a
            one-size-fits-all approach.
          </p>
          <ul className="groomBreedGrid">
            {breeds.map((breed) => (
              <li key={breed} className="groomBreedTag">
                <CheckIcon />
                {breed}
              </li>
            ))}
          </ul>
          <p className="groomBreedNote">
            We offer virtual consultations so you can discuss your dog&apos;s breed and grooming
            needs before your first appointment.
          </p>
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
