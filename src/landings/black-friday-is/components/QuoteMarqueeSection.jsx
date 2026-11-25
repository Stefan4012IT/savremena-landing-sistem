import { useLandingData } from '../useLandingData'

export function QuoteMarqueeSection() {
  const { blackFridayQuotes } = useLandingData()

  if (!blackFridayQuotes?.length) return null

  const quotes = [...blackFridayQuotes, ...blackFridayQuotes]

  return (
    <section className="black-friday-is-quote-marquee" aria-label="Citati o obrazovanju">
      <div className="black-friday-is-quote-marquee__track">
        {quotes.map((quote, index) => (
          <span className="black-friday-is-quote-marquee__quote" key={`${quote}-${index}`}>
            {quote}
          </span>
        ))}
      </div>
    </section>
  )
}
