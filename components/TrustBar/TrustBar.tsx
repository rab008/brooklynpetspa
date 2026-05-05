import './TrustBar.css'

const items = [
  '★★★★½  4.6 on Google',
  '550+ Reviews',
  'Cage-Free Facility',
  'Serving Brooklyn Since 2008',
  'Same-Day Appointments',
  'NYC DOH Compliant',
  '15+ Years Experience',
]

export default function TrustBar() {
  const doubled = [...items, ...items]

  return (
    <div className="trustBar" aria-hidden="true">
      <div className="trustTrack">
        {doubled.map((item, i) => (
          <span key={i} className="trustItem">
            <span className="trustDot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
