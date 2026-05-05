import Image from 'next/image'
import './BrandStory.css'

const badges = [
  { label: 'Cage-Free Facility', Icon: PawBadge },
  { label: 'NYC DOH Compliant', Icon: ShieldBadge },
  { label: 'Since 2008', Icon: StarBadge },
]

export default function BrandStory() {
  return (
    <section className="brandWrapper">
      <div className="section">
        <div className="brandInner">
          <div className="brandText">
            <p className="brandLabel">Our Story</p>
            <h2 className="brandHeading">
              Pet Grooming With Brooklyn&apos;s Best
            </h2>
            <p className="brandBody">
              Since 2008, Brooklyn Pet Spa has been the neighborhood go-to for thousands of
              families who believe their pets deserve the very best. We&apos;re animal lovers
              who built this place from the ground up — for dogs and cats who deserve a spa day,
              not just a wash.
            </p>
            <p className="brandBody">
              Our cage-free facility, experienced stylists, and fear-free philosophy mean every
              visit is calm, comfortable, and handled with genuine care. First groom or weekly
              regular — every pet gets the same love.
            </p>
            <ul className="brandBadges">
              {badges.map(({ label, Icon }) => (
                <li key={label} className="brandBadge">
                  <Icon />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="brandImageWrap">
            <Image
              src="https://brooklynpetspa.com/wp-content/uploads/2024/03/dog-grooming-near-me-Brooklyn-Pet-Spa.webp"
              alt="Dog grooming at Brooklyn Pet Spa"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PawBadge() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <ellipse cx="4" cy="7.5" rx="1.75" ry="2.25" />
      <ellipse cx="8" cy="5.5" rx="1.75" ry="2.25" />
      <ellipse cx="12" cy="5.5" rx="1.75" ry="2.25" />
      <ellipse cx="16" cy="7.5" rx="1.75" ry="2.25" />
      <path d="M10 9c-3.5 0-6 2.5-5 6 .5 2 2 2.5 3.5 2.5h3c1.5 0 3-.5 3.5-2.5 1-3.5-1.5-6-5-6z" />
    </svg>
  )
}

function ShieldBadge() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2L3 5v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V5L10 2z" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  )
}

function StarBadge() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="10,2 12.5,7.5 18.5,8.5 14,13 15.5,18.5 10,16 4.5,18.5 6,13 1.5,8.5 7.5,7.5" />
    </svg>
  )
}
