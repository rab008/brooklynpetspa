import './Services.css'

const services = [
  {
    Icon: BathIcon,
    title: 'Bathing & Spa',
    description:
      'Your pet home clean, calm, and smelling great — usually in under 90 minutes. Expert bathing using gentle, pet-safe products for dogs and cats.',
    href: '/bathing-spa',
  },
  {
    Icon: ScissorsIcon,
    title: 'Grooming & Styling',
    description:
      "Breed-specific cuts from stylists who've worked dog shows. From routine trims to full show-dog styling, nail trims, and ear cleaning.",
    href: '/grooming-services',
  },
  {
    Icon: MoonIcon,
    title: 'Boarding',
    description:
      'Cage-free overnight stays with all-day play, meals, and personal attention in our comfortable Park Slope facility.',
    href: '/boarding-daycare',
  },
  {
    Icon: CatIcon,
    title: 'Cat Grooming',
    description:
      'Specialized grooming for cats using calm, low-stress techniques. From brushing and bathing to full breed-specific styling.',
    href: '/grooming-services',
  },
  {
    Icon: SunIcon,
    title: 'Daycare',
    description:
      'Supervised play, socialization, and rest in a safe, cage-free environment. Daily updates so you never miss a moment.',
    href: '/boarding-daycare',
  },
  {
    Icon: SparkleIcon,
    title: 'Specialty Treatments',
    description:
      'Teeth brushing, de-shedding, flea & tick treatment, facial scrub, paw treatment, anal gland expression, and more.',
    href: '/specialty-treatments',
  },
]

export default function Services() {
  return (
    <section className="svcWrapper">
      <div className="section">
        <header className="svcHeader">
          <p className="svcLabel">What We Offer</p>
          <h2 className="svcHeading">
            We Have All Your Pet Grooming Needs Covered
          </h2>
          <p className="svcSub">
            From first puppy baths to show-dog styling — everything your pet needs, all under one roof.
          </p>
        </header>
        <ul className="svcGrid">
          {services.map(({ Icon, title, description, href }) => (
            <li key={title} className="svcCard">
              <div className="svcIconWrap">
                <Icon />
              </div>
              <h3 className="svcCardTitle">{title}</h3>
              <p className="svcCardDesc">{description}</p>
              <a href={href} className="svcCardLink">
                Learn More →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function BathIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h24v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2z" />
      <path d="M4 20V9a3 3 0 0 1 6 0v2" />
      <path d="M10 11h18" />
      <path d="M12 26v2M20 26v2" />
    </svg>
  )
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="22" r="4" />
      <circle cx="23" cy="22" r="4" />
      <line x1="13" y1="22" x2="25" y2="6" />
      <line x1="19" y1="22" x2="25" y2="6" />
      <line x1="25" y1="6" x2="14" y2="6" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 17a10 10 0 0 1-11-11 10 10 0 1 0 11 11z" />
    </svg>
  )
}

function CatIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4L6 10h2c0 2 .5 4 2 5.5" />
      <path d="M24 4l2 6h-2c0 2-.5 4-2 5.5" />
      <path d="M10.5 15.5C10.5 20 13 24 16 24s5.5-4 5.5-8.5" />
      <ellipse cx="13" cy="18" rx="1.5" ry="1" />
      <ellipse cx="19" cy="18" rx="1.5" ry="1" />
      <path d="M16 20.5c-1 .5-2 .5-3 0" />
      <path d="M8 28c1-3 3-4 4-4h8c1 0 3 1 4 4" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="5" />
      <line x1="16" y1="4" x2="16" y2="7" />
      <line x1="16" y1="25" x2="16" y2="28" />
      <line x1="4" y1="16" x2="7" y2="16" />
      <line x1="25" y1="16" x2="28" y2="16" />
      <line x1="7.5" y1="7.5" x2="9.8" y2="9.8" />
      <line x1="22.2" y1="22.2" x2="24.5" y2="24.5" />
      <line x1="24.5" y1="7.5" x2="22.2" y2="9.8" />
      <line x1="9.8" y1="22.2" x2="7.5" y2="24.5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6" />
      <path d="M8.5 8.5l3.5 3.5M20 20l3.5 3.5M23.5 8.5L20 12M12 20l-3.5 3.5" />
      <circle cx="16" cy="16" r="4" />
    </svg>
  )
}
