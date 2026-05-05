import './FAQ.css'

const faqs = [
  {
    q: 'Do you accept walk-ins?',
    a: 'Yes! Walk-ins are welcome and same-day appointments are usually available. We recommend calling ahead to confirm availability, especially on weekends.',
  },
  {
    q: 'How long does a grooming appointment take?',
    a: 'Most grooming sessions take between 2–4 hours depending on your pet\'s breed, coat condition, and the services requested. We\'ll give you a time estimate when you drop off.',
  },
  {
    q: 'Do you groom cats?',
    a: 'Yes — we\'re one of the few Brooklyn salons with genuine expertise in cat grooming. Our handlers are trained in feline behavior and use a low-stress, gentle approach from start to finish.',
  },
  {
    q: 'Is your facility cage-free?',
    a: 'Absolutely. Our facility is 100% cage-free. Pets roam freely in a comfortable, supervised environment — we never use kennels.',
  },
  {
    q: 'What do I need to bring to the first appointment?',
    a: 'Please bring proof of current vaccinations (Rabies, Bordetella, and DHPP for dogs). First-time clients can fill out our intake form when they arrive or call ahead.',
  },
  {
    q: 'How much does grooming cost?',
    a: 'Pricing varies by breed, size, and coat condition. Dog grooming typically starts at $65 and up. Cat grooming starts at $83–$138. We recommend an evaluation for an accurate quote — give us a call or stop by.',
  },
]

export default function FAQ() {
  return (
    <section className="faqWrapper">
      <div className="section">
        <p className="faqLabel">FAQ</p>
        <h2 className="faqHeading">Frequently Asked Questions</h2>
        <p className="faqIntro">
          Everything you need to know before your pet&apos;s first visit. Still have questions?
          Give us a call at <a href="tel:+17187680293" className="faqPhone">+1 (718) 768-0293</a>.
        </p>
        <dl className="faqList">
          {faqs.map(({ q, a }) => (
            <details key={q} className="faqItem">
              <summary className="faqQuestion">
                <span>{q}</span>
                <span className="faqIcon" aria-hidden="true">+</span>
              </summary>
              <p className="faqAnswer">{a}</p>
            </details>
          ))}
        </dl>
      </div>
    </section>
  )
}
