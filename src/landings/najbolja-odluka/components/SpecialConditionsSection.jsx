import { LeadForm } from './LeadForm'

const conditions = [
  'Poklon-ponuda Savremene gimnazije važi samo za učenike koji nisu upisali školu sa liste želja.',
  'Akciju je moguće koristiti u punoj vrednosti za Nacionalni i Kombinovani Kembridž progam.',
  'Broj mesta za upis po ovoj posebnoj akciji je strogo ograničen na 5.',
  'Da biste ostvarili uslov za upis po povlašćenim uslovima, potrebno je da popunite ovu prijavu.',
]

export function SpecialConditionsSection() {
  return (
    <section className="landing-section special-conditions" id="prijava">
      <div className="landing-container special-conditions__grid">
        <div className="special-conditions__content">
          <h2>Iskoristite posebne uslove:</h2>
          <ul>
            {conditions.map((condition) => (
              <li key={condition}>{condition}</li>
            ))}
          </ul>
          <p>
            Prijavite se ili nas pozovite na: <a href="tel:+381114011223">+381(0)11/40-11-223</a>.
          </p>
        </div>
        <div className="special-conditions__form-panel">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
