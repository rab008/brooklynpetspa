import Image from 'next/image'
import './WhyChooseUs.css'

const reasons = [
  {
    title: 'Cage-Free Facility',
    desc: 'Pets roam freely in a comfortable, supervised environment — no kennels, ever.',
  },
  {
    title: '15+ Years of Experience',
    desc: 'Our stylists have show-dog experience and breed-specific expertise for every coat type.',
  },
  {
    title: 'Fear-Free Approach',
    desc: 'Every technique is designed to keep your pet calm. No rushing, no stress.',
  },
  {
    title: 'Same-Day Appointments',
    desc: 'Walk-ins are welcome. Same-day bookings are usually available — call or book online.',
  },
  {
    title: 'NYC DOH Compliant',
    desc: 'Fully licensed and compliant with all New York City Department of Health standards.',
  },
  {
    title: 'Dogs & Cats Welcome',
    desc: 'One of the few Brooklyn salons with true expertise in grooming both dogs and cats.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="whyWrapper">
      <div className="section">
        <div className="whyInner">
          <div className="whyImageWrap">
            <Image
              src="https://brooklynpetspa.com/wp-content/uploads/2023/03/activities-img2-1.jpg"
              alt="Why choose Brooklyn Pet Spa"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="whyText">
            <p className="whyLabel">Why Choose Us</p>
            <h2 className="whyHeading">We&apos;re The Pet Whisperers</h2>
            <p className="whyIntro">
              We are animal people who genuinely love what we do. When it comes to your pets,
              we give them everything — a calm environment, expert hands, and the kind of care
              that makes them actually look forward to their next visit.
            </p>
            <ul className="whyReasons">
              {reasons.map(({ title, desc }) => (
                <li key={title} className="whyReason">
                  <span className="whyCheck" aria-hidden="true">✓</span>
                  <div>
                    <strong className="whyReasonTitle">{title}</strong>
                    <p className="whyReasonDesc">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
