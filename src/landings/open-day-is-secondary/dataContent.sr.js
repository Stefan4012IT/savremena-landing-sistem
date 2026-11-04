import { defaultDataContent as baseDataContent } from './baseDataContent.js'

export const defaultDataContent = {
  ...baseDataContent,
  slug: 'open-day-secondary',
  locale: 'sr',
  name: 'Open Day – Secondary | International School',
  seo: {
    title: 'Open Day – Secondary | International School',
    description:
      'International School razvija kritičko mišljenje, kreativnost, samostalnost i druge veštine budućnosti kroz Cambridge obrazovanje na engleskom jeziku.',
    ogImageUrl: 'https://www.international-school.edu.rs/wp-content/uploads/2026/10/soft-skills-1200x628-srb.jpg',
  },
  hero: {
    ...baseDataContent.hero,
    title: 'OPEN DAY',
    subtitle: 'Saznaj kako izgleda školovanje u Cambridge školi za učenike od 14 do 19 godina u kojoj se uči isključivo na engleskom jeziku',
    eventTitle: 'Postani učenik International Schoola na jedan dan',
    paragraphs: [
      'International School nudi stvarno drugačije školovanje isključivo na engleskom jeziku, kroz Cambridge program, savremene metode rada i interaktivne časove koje vode iskusni nastavnici mentori.',
      'Prijavite se na IS Open Day u subotu, 5. decembra, od 11 časova, i saznajte kako izgleda internacionalno školovanje za učenike od 14 do 19 godina.',
    ],
    paragraphHighlights: [
      ['isključivo na engleskom jeziku', 'Cambridge program', 'savremene metode rada', 'interaktivne časove', 'iskusni nastavnici mentori'],
      ['IS Open Day', 'subotu, 5. decembra, od 11 časova', '14 do 19 godina'],
    ],
    closing: '',
  },
  leadForm: {
    ...baseDataContent.leadForm,
    formName: 'open-day-is-secondary - is - sr',
  },
}
