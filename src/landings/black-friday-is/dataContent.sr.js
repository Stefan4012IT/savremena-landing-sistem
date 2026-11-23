import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'black-friday-is',
  apiSlug: 'black-friday-is-sr',
  locale: 'sr',
  name: 'Pravi trenutak | International School',
  seo: {
    title: 'Black Friday popust do 38% na školarinu | International School',
    description:
      'Do 30. novembra ostvarite popust do 38% na školarinu u International Schoolu. Izaberite međunarodno Cambridge obrazovanje za budućnost vašeg deteta.',
    ogImageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/bf-is-og-1200x628-srb.jpg',
  },
  hero: {
    ...baseDataContent.hero,
    titleLines: [
      { text: 'Ovo je' },
      { text: 'INVESTICIJA', emphasis: true },
      { text: 'u internacionalnu' },
      { text: 'budućnost vašeg' },
      { text: 'deteta' },
    ],
    eventDate: 'DO 30. NOVEMBRA',
    eventDescriptionStart: 'Upišite dete u International School i ostvarite popust do ',
    eventDescriptionEmphasis: '38% na školarinu.',
    copyParagraphs: [
      'Dok se mnogi ove nedelje fokusiraju na sniženja i popuste na proizvode, International School vam nudi nešto mnogo vrednije – priliku da investirate u budućnost svog deteta.',
      'Kroz ekskluzivni popust do 38%, koji traje samo do 30.11., pružate svom detetu mogućnost da stekne obrazovanje koje ga priprema za najbolje univerzitete i otvara vrata internacionalne budućnosti.',
      'Ne propustite priliku da obezbedite vrhunsko obrazovanje za srećnu i uspešnu budućnost svog deteta!',
    ],
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
    title: 'Investirajte u budućnost koja se isplati',
    text: '',
    paragraphs: [
      'Razmislite o tome gde će vaše dete biti za pet godina. Da li ga vidite na jednom od najprestižnijih svetskih univerziteta? Kako koristi svoja znanja da oblikuje svet i ostvaruje svoje ambicije? Ovakve slike počinju pravim odlukama – danas.',
      'Dok vam Black Friday nudi sniženja na materijalne stvari, zastanite na trenutak. Te stvari će se istrošiti, zaboraviti ili zastareti. Ali ulaganje u obrazovanje vaše dece – u njihovu sreću, sigurnost i uspešnu budućnost – to je vrednost koja traje zauvek.',
      'Izaberite školu koja decu ne uči samo činjenicama, već ih osnažuje da razmišljaju kritički, istražuju svet i razvijaju talente. International School je mesto gde vaša deca uče kako da ostvare sve što zamisle. Danas je pravi trenutak da im obezbedite najbolji početak!',
      'Izaberite International School i obezbedite im više od obrazovanja.',
    ],
    processTitle: '',
    processText: '',
    processPhone: '',
    ctaText: '',
  },
  modernEducation: {
    ...baseDataContent.modernEducation,
    imageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/09/nije_kasno_za_bolju_skolu_cabridge.jpg',
  },
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'black-friday-is - is - sr',
  },
}
