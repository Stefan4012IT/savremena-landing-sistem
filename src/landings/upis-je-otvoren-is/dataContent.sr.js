import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'enrollment-is-open',
  apiSlug: 'enrollment-is-open-sr',
  locale: 'sr',
  name: 'Upis je otvoren | International School',
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'enrollment-is-open - is - sr',
  },
}
