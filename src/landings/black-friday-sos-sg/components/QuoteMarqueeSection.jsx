import { useLandingData } from '../useLandingData'

export function QuoteMarqueeSection() {
  const { educationQuotes } = useLandingData()

  if (!educationQuotes?.length) return null

  const quotes = [...educationQuotes, ...educationQuotes]

  return (
    <section className="black-friday-sos-sg-quote-marquee" aria-label="Citati o obrazovanju">
      <div className="black-friday-sos-sg-quote-marquee__track">
        {quotes.map((quote, index) => (
          <span className="black-friday-sos-sg-quote-marquee__quote" key={`${quote}-${index}`}>
            {quote}
          </span>
        ))}
      </div>
    </section>
  )
}
