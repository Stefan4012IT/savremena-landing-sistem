import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'soft-skills',
  apiSlug: 'soft-skills-sr',
  locale: 'sr',
  name: 'Upis je otvoren | International School',
  seo: {
    title: 'Soft skills za budućnost | International School',
    description:
      'International School razvija kritičko mišljenje, kreativnost, samostalnost i druge veštine budućnosti kroz Cambridge obrazovanje na engleskom jeziku.',
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
    formName: 'soft-skills - is - sr',
  },
}
