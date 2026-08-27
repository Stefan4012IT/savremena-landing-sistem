import { useState } from 'react'
import sosVisual from '../assets/malo-mesta-available-seats__visual_sos.jpg'
import sgVisual from '../assets/malo-mesta-available-seats__visual_sg.jpg'

const schoolTables = [
  {
    name: 'Savremena osnovna škola',
    shortName: 'SOS',
    updatedAt: '14.8.2026.',
    image: sosVisual,
    rows: [
      ['Predškolsko', '2'],
      ['I razred', '9'],
      ['II razred', '1'],
      ['III razred', '2'],
      ['IV razred', '1'],
      ['V razred', '1'],
      ['VI razred', '1'],
      ['VII razred', '2'],
      ['VIII razred', '2'],
    ],
  },
  {
    name: 'Savremena gimnazija',
    shortName: 'SG',
    updatedAt: '14.8.2026.',
    image: sgVisual,
    rows: [
      ['I razred', '8', '8 odeljenja: POPUNJENO · Poslednje odeljenje: 8'],
      ['II razred', '1'],
      ['III razred', '1'],
      ['IV razred', '1'],
    ],
  },
]

function SchoolTable({ school, className = '' }) {
  const isSos = school.shortName === 'SOS'
  const rowPairs = isSos
    ? school.rows
        .slice(0, Math.ceil(school.rows.length / 2))
        .map((row, index) => [row, school.rows[Math.ceil(school.rows.length / 2) + index]].filter(Boolean))
    : []

  return (
    <article className={`malo-mesta-available-seats__school malo-mesta-available-seats__school--${school.shortName.toLowerCase()} ${className}`}>
      <header>
        <h3>{school.name}</h3>
        <span>Generacija 2026/2027</span>
      </header>
      {isSos ? (
        <>
          <table className="is-compact">
            <thead>
              <tr>
                <th scope="col">Razred</th>
                <th scope="col">Mesta</th>
                <th scope="col">Razred</th>
                <th scope="col">Mesta</th>
              </tr>
            </thead>
            <tbody>
              {rowPairs.map((pair) => {
                const [first, second] = pair

                return (
                  <tr key={first[0]}>
                    <th scope="row">{first[0]}</th>
                    <td><strong>{first[1]}</strong></td>
                    {second ? (
                      <>
                        <th scope="row">{second[0]}</th>
                        <td><strong>{second[1]}</strong></td>
                      </>
                    ) : <td colSpan="2" />}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="malo-mesta-available-seats__mobile-rows">
            {school.rows.map(([grade, seats]) => (
              <div key={grade}>
                <span>{grade}</span>
                <strong>{seats}</strong>
              </div>
            ))}
          </div>
        </>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Razred</th>
              <th scope="col">Slobodna mesta</th>
            </tr>
          </thead>
          <tbody>
            {school.rows.map(([grade, seats, note]) => (
              <tr key={grade}>
                <th scope="row">{grade}</th>
                <td>
                  <strong>{seats}</strong>
                  {note ? <span>{note}</span> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <footer>
        <span>Ažurirano: {school.updatedAt}</span>
        <a href="#prijava">Prijavite se</a>
      </footer>
    </article>
  )
}

export function AvailableSeatsSection() {
  const [selectedSchool, setSelectedSchool] = useState('sos')
  const activeSchool = schoolTables.find((school) => school.shortName.toLowerCase() === selectedSchool)

  return (
    <section className="malo-mesta-available-seats" id="slobodna-mesta">
      <div className="malo-mesta-available-seats__inner">
        <div className="malo-mesta-available-seats__header">
          <p>Pridružite se generaciji koja bira više</p>
          <h2>Broj preostalih mesta po razredima</h2>
        </div>
        <div className="malo-mesta-available-seats__tabs" role="tablist" aria-label="Izaberite školu">
          {schoolTables.map((school) => {
            const isActive = school.shortName.toLowerCase() === selectedSchool

            return (
              <button
                className={isActive ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={isActive}
                key={school.shortName}
                onClick={() => setSelectedSchool(school.shortName.toLowerCase())}
              >
                {school.name}
              </button>
            )
          })}
        </div>
        <div className="malo-mesta-available-seats__selection">
          <SchoolTable school={activeSchool} />
          <div className="malo-mesta-available-seats__visual" aria-label={activeSchool.name}>
            <img src={activeSchool.image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
