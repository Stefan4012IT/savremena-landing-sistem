import sosLogo from '../assets/sos_logo_1.svg'
import sgLogo from '../assets/sg_beli.svg'

const schools = [
  {
    name: 'Savremena osnovna škola',
    logo: sosLogo,
    website: 'www.savremena-osnovna.edu.rs',
    websiteUrl: 'https://www.savremena-osnovna.edu.rs',
    address: 'Bulevar heroja sa Košara 17, Novi Beograd',
    phone: '011.4011.222',
    phoneUrl: '+381114011222',
  },
  {
    name: 'Savremena gimnazija',
    logo: sgLogo,
    website: 'www.savremena-gimnazija.edu.rs',
    websiteUrl: 'https://www.savremena-gimnazija.edu.rs',
    address: 'Masarikova 5, Palata Beograd',
    phone: '011.4011.223',
    phoneUrl: '+381114011223',
  },
]

export function FooterSection() {
  const [sos, sg] = schools

  return (
    <footer className="malo-mesta-footer">
      <div className="malo-mesta-footer__inner">
        <a className="malo-mesta-footer__logo" href={sos.websiteUrl} aria-label={sos.name}>
          <img src={sos.logo} alt={sos.name} />
        </a>
        <address className="malo-mesta-footer__contact">
          <a href={sos.websiteUrl}>{sos.website}</a>
          <span>{sos.address}</span>
          <a href={`tel:${sos.phoneUrl}`}>{sos.phone}</a>
        </address>
        <address className="malo-mesta-footer__contact">
          <a href={sg.websiteUrl}>{sg.website}</a>
          <span>{sg.address}</span>
          <a href={`tel:${sg.phoneUrl}`}>{sg.phone}</a>
        </address>
        <a className="malo-mesta-footer__logo" href={sg.websiteUrl} aria-label={sg.name}>
          <img src={sg.logo} alt={sg.name} />
        </a>
      </div>
    </footer>
  )
}
