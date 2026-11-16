import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'dobre-odluke',
  apiSlug: 'dobre-odluke-is-sr',
  locale: 'sr',
  name: 'Pravi trenutak | International School',
  seo: {
    title: 'Dobre odluke imaju svoj trenutak | International School',
    description:
      'Od 23. do 30. novembra upišite dete u International School po posebnim uslovima. Izaberite međunarodno Cambridge obrazovanje na engleskom jeziku i put ka budućnosti.',
    ogImageUrl: 'https://sr.international-school.edu.rs/wp-content/uploads/2026/11/pravi_trenutak_og_1200x628.jpg',
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
