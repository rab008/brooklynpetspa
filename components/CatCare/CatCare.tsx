import Image from 'next/image'
import Link from 'next/link'
import './CatCare.css'

export default function CatCare() {
  return (
    <section className="catWrapper">
      <div className="section">
        <div className="catInner">
          <div className="catText">
            <p className="catLabel">Feline Specialists</p>
            <h2 className="catHeading">Gentle Cat Care</h2>
            <p className="catBody">
              We know your cat isn&apos;t thrilled about being bathed. That&apos;s exactly why
              we&apos;ve developed a low-stress, gentle approach specifically for cats — with
              handlers who understand feline behavior and know how to keep your cat calm from
              start to finish.
            </p>
            <p className="catBody">
              From a simple bath and brush to a full coat trim, we handle every cat with the
              patience and respect they deserve. No rushing, no caging, no unnecessary stress.
            </p>
            <p className="catPricing">
              Cat grooming starts at <strong>$83–$138</strong> depending on size and coat
              condition. We recommend an evaluation before booking so we can give you an
              accurate quote.
            </p>
            <Link href="/book-now" className="catBtn">Book Now</Link>
          </div>
          <div className="catImageWrap">
            <Image
              src="https://brooklynpetspa.com/wp-content/uploads/2024/03/cat-grooming-near-me.webp"
              alt="Gentle cat grooming at Brooklyn Pet Spa Park Slope"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
