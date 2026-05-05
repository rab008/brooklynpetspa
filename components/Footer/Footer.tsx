import Link from 'next/link'
import './Footer.css'

const serviceLinks = [
  { href: '/grooming-services', label: 'Grooming & Styling' },
  { href: '/bathing-spa', label: 'Bathing & Spa' },
  { href: '/boarding-daycare', label: 'Boarding & Daycare' },
  { href: '/specialty-treatments', label: 'Specialty Treatments' },
  { href: '/grooming-services', label: 'Cat Grooming' },
  { href: '/our-rates', label: 'Our Rates' },
]

const companyLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/our-reviews', label: 'Our Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="footerFooter">
      <div className="footerInner">
        <div className="footerGrid">
          <div className="footerCol">
            <div className="footerBrand">
              <PawIcon />
              <span className="footerBrandName">Brooklyn Pet Spa</span>
            </div>
            <p className="footerTagline">
              Cage-free grooming, bathing, and daycare for dogs and cats in Park Slope, Brooklyn.
            </p>
            <div className="footerSocial">
              <a
                href="https://www.facebook.com/BrooklynPetSpa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footerSocialLink"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/brooklynpetspa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footerSocialLink"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.pinterest.com/brooklynpetsspa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="footerSocialLink"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          <div className="footerCol">
            <h3 className="footerColTitle">Services</h3>
            <ul className="footerLinkList">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="footerFooterLink">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCol">
            <h3 className="footerColTitle">Visit Us</h3>
            <address className="footerAddress">
              <p>317 Flatbush Ave</p>
              <p>Brooklyn, NY 11217</p>
            </address>
            <div className="footerHours">
              <p>Mon–Sat: 7:30 AM – 7:30 PM</p>
              <p>Sun: 7:30 AM – 6:30 PM</p>
            </div>
            <a href="tel:+17187680293" className="footerTel">+1 (718) 768-0293</a>
            <a href="mailto:hello@brooklynpetspa.com" className="footerEmail">
              hello@brooklynpetspa.com
            </a>
          </div>

          <div className="footerCol">
            <h3 className="footerColTitle">Company</h3>
            <ul className="footerLinkList">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footerFooterLink">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Brooklyn Pet Spa. All Rights Reserved.</p>
          <p>317 Flatbush Ave, Brooklyn, NY 11217</p>
        </div>
      </div>
    </footer>
  )
}

function PawIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <ellipse cx="5" cy="9" rx="2" ry="2.5" />
      <ellipse cx="10" cy="6.5" rx="2" ry="2.5" />
      <ellipse cx="15" cy="6.5" rx="2" ry="2.5" />
      <ellipse cx="20" cy="9" rx="2" ry="2.5" />
      <path d="M12 11c-4 0-7 3-6 7 .5 2 2 3 4 3h4c2 0 3.5-1 4-3 1-4-2-7-6-7z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}
