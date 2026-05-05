'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Header.css'

type NavLink = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/grooming-services',
    label: 'Grooming',
    children: [
      { href: '/grooming-services/dog-spa', label: 'Dog Spa' },
      { href: '/grooming-services/nail-trimming', label: 'Nail Trimming' },
      { href: '/grooming-services/senior-dog-grooming', label: 'Senior Dog Grooming' },
    ],
  },
  { href: '/boarding-daycare', label: 'Boarding & Daycare' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`headerHeader ${scrolled ? 'headerScrolled' : ''}`}>

      {/* Utility bar — desktop & tablet */}
      <div className="headerTopBar">
        <div className="headerTopBarInner">
          <div className="headerTopLeft">
            <a href="mailto:hello@brooklynpetspa.com" className="headerTopContact">
              hello@brooklynpetspa.com
            </a>
            <span className="headerTopDivider" aria-hidden="true" />
            <a href="tel:+17187680293" className="headerTopContact">
              +1 (718) 768-0293
            </a>
          </div>
          <div className="headerTopSocial">
            <a href="https://www.facebook.com/BrooklynPetSpa/" target="_blank" rel="noopener noreferrer" className="headerSocialLink" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/brooklynpetspa/" target="_blank" rel="noopener noreferrer" className="headerSocialLink" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.pinterest.com/brooklynpetsspa/" target="_blank" rel="noopener noreferrer" className="headerSocialLink" aria-label="Pinterest">
              <PinterestIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="headerInner">
        <Link href="/" className="headerLogo" onClick={() => setMenuOpen(false)}>
          <Image
            src="https://brooklynpetspa.com/wp-content/uploads/2023/03/Pet-grooming-near-me.webp"
            alt="Brooklyn Pet Spa"
            width={160}
            height={52}
            className="headerLogoImg"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="headerNav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <div key={link.href} className="headerNavItem">
              <Link href={link.href} className="headerNavLink">
                {link.label}
                {link.children && <ChevronIcon />}
              </Link>
              {link.children && (
                <div className="headerDropdown">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="headerDropdownLink">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="headerActions">
          <a href="tel:+17187680293" className="headerPhone">
            +1 (718) 768-0293
          </a>
          <Link href="/book-now" className="headerBookBtn">
            Book Now
          </Link>
        </div>

        {/* Mobile actions — phone icon + hamburger */}
        <div className="headerMobileActions">
          <a href="tel:+17187680293" className="headerMobilePhoneBtn" aria-label="Call Brooklyn Pet Spa">
            <PhoneIcon />
          </a>
          <button
            className={`headerHamburger ${menuOpen ? 'headerOpen' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile call bar */}
      <a href="tel:+17187680293" className="headerCallBar">
        <PhoneIcon />
        <span>CALL US TODAY: +1 (718) 768-0293</span>
      </a>

      {/* Mobile drawer */}
      <div
        className={`headerDrawer ${menuOpen ? 'headerDrawerOpen' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="headerDrawerNav">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="headerDrawerLink"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="headerDrawerSubLinks">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="headerDrawerSubLink"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="headerDrawerActions">
            <Link href="/book-now" className="headerDrawerBook" onClick={() => setMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="headerBackdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6l4 4 4-4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.64 1.267 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.138-1.868 3.138-4.566 0-2.386-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.773.741 2.274a.3.3 0 0 1 .069.286c-.076.315-.244.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.967-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  )
}
