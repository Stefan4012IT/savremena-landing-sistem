import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'enrollment-is-open',
  apiSlug: 'enrollment-is-open-sr',
  locale: 'sr',
  name: 'Upis je otvoren | International School',
  seo: {
    title: 'Upis za 2027/28. je otvoren | International School',
    description:
      'Upis za školsku 2027/28. godinu u International School je otvoren. Obezbedite detetu mesto na vreme i prestižno Cambridge obrazovanje na engleskom jeziku.',
    ogImageUrl: 'https://sr.international-school.edu.rs/wp-content/uploads/2026/10/IS-enrollmtnt-1200x628-1.jpg',
  },
  hero: {
    ...baseDataContent.hero,
    titleFirstLine: 'Upis za',
    titleSecondLine: '2027/28. je',
    titleEmphasis: 'OTVOREN!',
    copyBefore: 'Iskoristite najbolji trenutak i obezbedite prestižno ',
    copyCambridge: 'Cambridge',
    copyBetween: ' obrazovanje po ',
    copyLowest: 'najnižim',
    copyAfter: ' cenama.',
  },
  emotionalTurn: {
    ...baseDataContent.emotionalTurn,
    eyebrow: '',
    title: 'Upis je počeo – obezbedite mesto na vreme!',
    text: '',
    paragraphs: [
      'Upis u International School je počeo, a sada je pravi trenutak da svom detetu obezbedite mesto za narednu školsku godinu.',
      'Upravo sada je idealan trenutak da upoznate program i sve prednosti International School, kao i da na vreme svom detetu obezbedite mesto u željenom razredu.',
      'Broj mesta je ograničen, zato preporučujemo da prijavu ne odlažete.',
    ],
    processTitle: 'Kako izgleda proces upisa?',
    processText:
      'Dovoljno je da se prijavite online ili nas pozovete na 011/40-11-220. Konsultanti za upis će vam predstaviti program, odgovoriti na sva pitanja i pomoći vam tokom celog procesa.',
    processPhone: '011/40-11-220',
    ctaText: 'Započnite upis već danas i obezbedite svom detetu mesto u International School.',
  },
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'enrollment-is-open - is - sr',
  },
}
