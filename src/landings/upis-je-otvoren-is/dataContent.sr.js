import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'enrollment-is-open',
  apiSlug: 'enrollment-is-open-sr',
  locale: 'sr',
  name: 'Upis je otvoren | International School',
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
