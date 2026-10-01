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
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'enrollment-is-open - is - sr',
  },
}
