import Link from 'next/link'
import './CTABanner.css'

export default function CTABanner() {
  return (
    <section className="ctaWrapper">
      <div className="ctaInner">
        <div className="ctaText">
          <h2 className="ctaHeading">Ready to book? Same-day appointments available.</h2>
          <p className="ctaSub">
            Online booking available 24/7. New clients get 10% off their first groom.
            Cage-free, licensed, and NYC DOH compliant.
          </p>
        </div>
        <div className="ctaActions">
          <Link href="/book-now" className="ctaBtn">
            Book Now
          </Link>
          <p className="ctaPhone">
            Or call us:{' '}
            <a href="tel:+17187680293" className="ctaPhoneLink">
              +1 (718) 768-0293
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
