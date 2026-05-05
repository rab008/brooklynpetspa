import Image from 'next/image'
import Link from 'next/link'
import './Hero.css'

export default function Hero() {
  return (
    <section className="heroHero">
      <div className="heroContent">
        <div className="heroText">
          <p className="heroEyebrow">Park Slope, Brooklyn</p>
          <h1 className="heroHeadline">
            Brooklyn&apos;s Most Trusted
            <br />
            Dog &amp; Cat Groomers
          </h1>
          <p className="heroSubheadline">
            Cage-free grooming, bathing, and daycare in Park Slope. For Brooklyn pet parents
            who want their dog or cat to actually enjoy getting groomed.
          </p>
          <div className="heroCtas">
            <Link href="/booking" className="heroPrimaryBtn">
              Book Your Pet&apos;s Spa Day
            </Link>
            <Link href="/our-services" className="heroSecondaryLink">
              See Our Services →
            </Link>
          </div>
          <div className="heroMicroTrust">
            <span>★★★★½ 4.6 on Google</span>
            <span className="heroPipe">·</span>
            <span>550+ Reviews</span>
            <span className="heroPipe">·</span>
            <span>Since 2008</span>
          </div>
        </div>

        <div className="heroImageWrap">
          <div className="heroImageBlob" aria-hidden="true" />
          <div className="heroImageFrame">
            <Image
              src="https://brooklynpetspa.com/wp-content/uploads/2023/05/Home-2.jpg"
              alt="Dog grooming at Brooklyn Pet Spa Park Slope"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>

      <div className="heroFadeOut" aria-hidden="true" />
    </section>
  )
}
