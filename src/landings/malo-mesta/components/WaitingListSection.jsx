import { useLandingData } from '../useLandingData'
import { SectionHeader } from '../../novo-odeljenje/components/SectionHeader'

export function WaitingListSection() {
  const { specialOffer } = useLandingData()

  if (!specialOffer) {
    return null
  }

  const paragraphs = [
    'Roditelji koji čekaju do poslednjeg trenutka često se suočavaju sa izazovom - svi kapaciteti su popunjeni. U tim slučajevima, formiraju se liste čekanja, što značajno usporava proces upisa. Ako se kasnije oslobodi mesto, škola će prvo kontaktirati sa prvom porodicom sa liste.',
    <>Trenutno je broj preostalih slobodnih mesta u mlađim razredima jednocifren, dok su neki stariji razredi već popunjeni. Oni koji propuste priliku da upišu svoje dete dok još ima mesta, moraju sačekati svoj red na listi. Pogledajte broj slobodnih mesta po razredima <a href="#prijava">ovde.</a></>,
  ]

  return (
    <section className="landing-section modern-education malo-mesta-waiting-list">
      <div className="landing-container modern-education__grid">
        <div className="modern-education__content">
          <SectionHeader eyebrow={specialOffer.eyebrow} title={specialOffer.title} text={specialOffer.text} />
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="modern-education__image-placeholder" aria-label="Prostor za fotografiju škole">
          <span>Fotografija škole</span>
        </div>
      </div>
    </section>
  )
}
