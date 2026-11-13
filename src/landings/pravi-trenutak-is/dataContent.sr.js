import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'dobre-odluke',
  apiSlug: 'dobre-odluke-is-sr',
  locale: 'sr',
  name: 'Pravi trenutak | International School',
  seo: {
    title: 'Upis za 2027/28. je otvoren | International School',
    description:
      'Upis za školsku 2027/28. godinu u International School je otvoren. Obezbedite detetu mesto na vreme i prestižno Cambridge obrazovanje na engleskom jeziku.',
    ogImageUrl: 'https://sr.international-school.edu.rs/wp-content/uploads/2026/10/IS-enrollmtnt-1200x628-1.jpg',
  },
  hero: {
    ...baseDataContent.hero,
    promoTitleStart: 'Pravi ',
    promoTitleEmphasis: 'trenutak',
    promoTitleMiddle: ' za pravu ',
    promoTitleFinal: 'odluku.',
    eventDate: '23–30. NOVEMBAR',
    eventDescriptionStart: 'Upišite se u International School i ostvarite ',
    eventDescriptionEmphasis: 'najpovoljnije školarine u godini.',
    titleFirstLine: 'Upis za',
    titleSecondLine: '2027/28. je u',
    titleEmphasis: 'TOKU!',
    copyBefore: 'Iskoristite najbolji trenutak i obezbedite prestižno ',
    copyCambridge: 'Cambridge',
    copyBetween: ' obrazovanje po ',
    copyLowest: 'povlašćenim',
    copyAfter: ' cenama.',
  },
  emotionalTurn: {
    ...baseDataContent.emotionalTurn,
    eyebrow: '',
    title: 'Velike mogućnosti počinju dobrim izborom',
    text: '',
    paragraphs: [
      'Izbor škole jedna je od najvažnijih odluka koje donosite za svoje dete. U International Schoolu povezujemo znanje sa Cambridge obrazovanjem i razvojem veština koje pripremaju učenike za budućnost.',
      'Kvalitetno obrazovanje je ulaganje čija vrednost traje godinama, kroz znanja, iskustva i veštine koje dete stiče tokom školovanja. Upoznajte mogućnosti koje International School pruža i odaberite obrazovni put koji najbolje odgovara interesovanjima i potencijalima vašeg deteta.',
    ],
    processTitle: '',
    processText: '',
    processPhone: '',
    ctaText: '',
  },
  modernEducation: {
    ...baseDataContent.modernEducation,
    imageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/dobre-odluke-003.jpg',
  },
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'dobre-odluke - is - sr',
  },
}
