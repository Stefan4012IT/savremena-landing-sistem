// import type { Core } from '@strapi/strapi';
import { najboljaOdlukaLanding } from './data/najbolja-odluka'
import { novoOdeljenjeLanding } from './data/novo-odeljenje'
import { maloMestaLanding } from './data/malo-mesta'

const previousNajboljaOdlukaSlug = 'najbolja-odluka'
const previousHeroImageUrls = {
  beforeImageUrl: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/bad_feelings_01.png',
  afterImageUrl: 'https://www.savremena-gimnazija.edu.rs/wp-content/uploads/2026/06/good_feelings_01.png',
}
const previousModernEducationImageUrls = [
  'https://placehold.co/720x520/284379/ffffff',
  'https://placehold.co/720x520/284379/ffffff?text=Savremena+gimnazija',
]
const landingPopulate = [
  'seo',
  'hero',
  'emotionalTurn',
  'specialConditions',
  'modernEducation',
  'directions',
  'directionCards',
  'programChoice',
  'benefits',
  'benefitCards',
  'specialOffer',
  'enrollmentHelp',
  'leadForm',
  'testimonials',
  'testimonialCards',
  'footer',
]

function withMissingField(existing, seeded, field: string) {
  if (!existing) {
    return seeded
  }

  if (existing[field] || !seeded?.[field]) {
    return existing
  }

  return {
    ...existing,
    [field]: seeded[field],
  }
}

function withMissingCardFields(existingCards, seededCards, fields: string[]) {
  if (!existingCards?.length) {
    return seededCards
  }

  return existingCards.map((card, index) => {
    const seededCard = seededCards?.[index]

    if (!seededCard) {
      return card
    }

    return fields.reduce((nextCard, field) => {
      if (nextCard[field] || !seededCard[field]) {
        return nextCard
      }

      return {
        ...nextCard,
        [field]: seededCard[field],
      }
    }, card)
  })
}

function shouldUseSeededHeroImage(existingHero, field: 'beforeImageUrl' | 'afterImageUrl') {
  return !existingHero?.[field] || existingHero[field] === previousHeroImageUrls[field]
}

function shouldUseSeededModernEducationImage(existingModernEducation) {
  return (
    !existingModernEducation?.imageUrl ||
    previousModernEducationImageUrls.includes(existingModernEducation.imageUrl)
  )
}

function shouldUseSeededDirectionCards(existingCards) {
  return (
    !existingCards?.some((card) => card.title === 'Sportski smer') ||
    existingCards.some((card) => !card.details)
  )
}

function withPreservedMediaFields(existing, seeded, fields: string[]) {
  if (!existing) {
    return seeded
  }

  return fields.reduce(
    (nextValue, field) => ({
      ...nextValue,
      [field]: existing[field] || seeded?.[field],
    }),
    seeded,
  )
}

function withPreservedCardMediaFields(existingCards, seededCards, fields: string[]) {
  return seededCards.map((seededCard, index) => {
    const existingCard = existingCards?.[index]

    if (!existingCard) {
      return seededCard
    }

    return withPreservedMediaFields(existingCard, seededCard, fields)
  })
}

function getNovoOdeljenjeUpdateData(existingLanding) {
  return {
    ...novoOdeljenjeLanding,
    hero: withPreservedMediaFields(existingLanding.hero, novoOdeljenjeLanding.hero, [
      'beforeImageUrl',
      'afterImageUrl',
    ]),
    modernEducation: withPreservedMediaFields(
      existingLanding.modernEducation,
      novoOdeljenjeLanding.modernEducation,
      ['imageUrl'],
    ),
    directionCards: withPreservedCardMediaFields(
      existingLanding.directionCards,
      novoOdeljenjeLanding.directionCards,
      ['imageUrl'],
    ),
    benefitCards: withPreservedCardMediaFields(
      existingLanding.benefitCards,
      novoOdeljenjeLanding.benefitCards,
      ['imageUrl'],
    ),
    enrollmentHelp: withPreservedMediaFields(
      existingLanding.enrollmentHelp,
      novoOdeljenjeLanding.enrollmentHelp,
      ['advisorImageUrl'],
    ),
    testimonialCards: withPreservedCardMediaFields(
      existingLanding.testimonialCards,
      novoOdeljenjeLanding.testimonialCards,
      ['avatarImageUrl', 'videoImageUrl'],
    ),
  }
}

function shouldRefreshNovoOdeljenjeLanding(existingLanding) {
  return (
    existingLanding.seo?.title !== novoOdeljenjeLanding.seo.title ||
    existingLanding.gtmId !== novoOdeljenjeLanding.gtmId ||
    existingLanding.hero?.title !== novoOdeljenjeLanding.hero.title ||
    existingLanding.emotionalTurn?.title !== novoOdeljenjeLanding.emotionalTurn.title ||
    existingLanding.specialConditions?.eyebrow !== novoOdeljenjeLanding.specialConditions.eyebrow ||
    existingLanding.specialConditions?.title !== novoOdeljenjeLanding.specialConditions.title ||
    existingLanding.specialConditions?.imageUrl !== novoOdeljenjeLanding.specialConditions.imageUrl ||
    existingLanding.leadForm?.formName !== novoOdeljenjeLanding.leadForm.formName ||
    existingLanding.directionCards?.length !== novoOdeljenjeLanding.directionCards.length ||
    existingLanding.benefitCards?.length !== novoOdeljenjeLanding.benefitCards.length ||
    existingLanding.testimonialCards?.length !== novoOdeljenjeLanding.testimonialCards.length
  )
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    let existingLanding = await strapi.documents('api::landing.landing').findFirst({
      filters: { slug: najboljaOdlukaLanding.slug },
      populate: landingPopulate,
    })

    if (!existingLanding) {
      existingLanding = await strapi.documents('api::landing.landing').findFirst({
        filters: { slug: previousNajboljaOdlukaSlug },
        populate: landingPopulate,
      })
    }

    if (!existingLanding) {
      await strapi.documents('api::landing.landing').create({
        data: najboljaOdlukaLanding,
        status: 'published',
      })
    } else if (
      existingLanding.slug !== najboljaOdlukaLanding.slug ||
      (existingLanding.hero &&
        (shouldUseSeededHeroImage(existingLanding.hero, 'beforeImageUrl') ||
          shouldUseSeededHeroImage(existingLanding.hero, 'afterImageUrl'))) ||
      (existingLanding.modernEducation &&
        shouldUseSeededModernEducationImage(existingLanding.modernEducation)) ||
      (existingLanding.enrollmentHelp && !existingLanding.enrollmentHelp.advisorImageUrl) ||
      (existingLanding.leadForm && !existingLanding.leadForm.institution) ||
      shouldUseSeededDirectionCards(existingLanding.directionCards) ||
      existingLanding.directionCards?.some((card) => !card.imageUrl) ||
      existingLanding.benefitCards?.some((card) => !card.imageUrl) ||
      existingLanding.testimonialCards?.some((card) => !card.avatarImageUrl || (card.variant === 'video' && !card.videoImageUrl))
    ) {
      const landingUpdateData: Record<string, unknown> = {
        slug: najboljaOdlukaLanding.slug,
      }

      if (existingLanding.hero) {
        landingUpdateData.hero = {
          ...existingLanding.hero,
          beforeImageUrl: shouldUseSeededHeroImage(existingLanding.hero, 'beforeImageUrl')
            ? najboljaOdlukaLanding.hero.beforeImageUrl
            : existingLanding.hero.beforeImageUrl,
          afterImageUrl: shouldUseSeededHeroImage(existingLanding.hero, 'afterImageUrl')
            ? najboljaOdlukaLanding.hero.afterImageUrl
            : existingLanding.hero.afterImageUrl,
        }
      }

      if (existingLanding.modernEducation) {
        landingUpdateData.modernEducation = {
          ...existingLanding.modernEducation,
          imageUrl: shouldUseSeededModernEducationImage(existingLanding.modernEducation)
            ? najboljaOdlukaLanding.modernEducation.imageUrl
            : existingLanding.modernEducation.imageUrl,
        }
      }

      if (existingLanding.enrollmentHelp) {
        landingUpdateData.enrollmentHelp = withMissingField(
          existingLanding.enrollmentHelp,
          najboljaOdlukaLanding.enrollmentHelp,
          'advisorImageUrl',
        )
      }

      if (existingLanding.leadForm) {
        landingUpdateData.leadForm = withMissingCardFields(
          [existingLanding.leadForm],
          [najboljaOdlukaLanding.leadForm],
          [
            'childAgePlaceholder',
            'childAgeLabel',
            'institution',
            'formName',
            'submitLabel',
            'successTitle',
            'successMessage',
            'errorMessage',
          ],
        )[0]
      }

      if (existingLanding.directionCards?.length) {
        landingUpdateData.directionCards = shouldUseSeededDirectionCards(existingLanding.directionCards)
          ? najboljaOdlukaLanding.directionCards
          : withMissingCardFields(
              existingLanding.directionCards,
              najboljaOdlukaLanding.directionCards,
              ['imageUrl'],
            )
      }

      if (existingLanding.benefitCards?.length) {
        landingUpdateData.benefitCards = withMissingCardFields(
          existingLanding.benefitCards,
          najboljaOdlukaLanding.benefitCards,
          ['imageUrl'],
        )
      }

      if (existingLanding.testimonialCards?.length) {
        landingUpdateData.testimonialCards = withMissingCardFields(
          existingLanding.testimonialCards,
          najboljaOdlukaLanding.testimonialCards,
          ['avatarImageUrl', 'videoImageUrl'],
        )
      }

      await strapi.documents('api::landing.landing').update({
        documentId: existingLanding.documentId,
        data: landingUpdateData,
        status: 'published',
      })
    }

    const existingNovoOdeljenjeLanding = await strapi.documents('api::landing.landing').findFirst({
      filters: { slug: novoOdeljenjeLanding.slug },
      populate: landingPopulate,
    })

    if (!existingNovoOdeljenjeLanding) {
      await strapi.documents('api::landing.landing').create({
        data: novoOdeljenjeLanding,
        status: 'published',
      })
    } else if (shouldRefreshNovoOdeljenjeLanding(existingNovoOdeljenjeLanding)) {
      await strapi.documents('api::landing.landing').update({
        documentId: existingNovoOdeljenjeLanding.documentId,
        data: getNovoOdeljenjeUpdateData(existingNovoOdeljenjeLanding),
        status: 'published',
      })
    }

    const existingMaloMestaLanding = await strapi.documents('api::landing.landing').findFirst({
      filters: { slug: maloMestaLanding.slug },
      populate: ['seo', 'hero', 'programChoice', 'benefits', 'benefitCards', 'specialOffer', 'enrollmentHelp', 'leadForm', 'testimonials'],
    })

    if (!existingMaloMestaLanding) {
      await strapi.documents('api::landing.landing').create({
        data: maloMestaLanding,
        status: 'published',
      })
    } else if (
      existingMaloMestaLanding.gtmId !== maloMestaLanding.gtmId ||
      existingMaloMestaLanding.seo?.title !== maloMestaLanding.seo.title ||
      existingMaloMestaLanding.seo?.description !== maloMestaLanding.seo.description ||
      existingMaloMestaLanding.seo?.ogImageUrl !== maloMestaLanding.seo.ogImageUrl ||
      existingMaloMestaLanding.hero?.title !== maloMestaLanding.hero.title ||
      existingMaloMestaLanding.hero?.eyebrow !== maloMestaLanding.hero.eyebrow ||
      existingMaloMestaLanding.hero?.lead !== maloMestaLanding.hero.lead ||
      existingMaloMestaLanding.programChoice?.title !== maloMestaLanding.programChoice.title ||
      existingMaloMestaLanding.programChoice?.paragraphs?.join('\n') !== maloMestaLanding.programChoice.paragraphs.join('\n') ||
      existingMaloMestaLanding.benefits?.title !== maloMestaLanding.benefits.title ||
      existingMaloMestaLanding.benefits?.eyebrow !== maloMestaLanding.benefits.eyebrow ||
      existingMaloMestaLanding.benefitCards?.length !== maloMestaLanding.benefitCards.length ||
      existingMaloMestaLanding.benefitCards?.some((card, index) => card.imageUrl !== maloMestaLanding.benefitCards[index]?.imageUrl) ||
      existingMaloMestaLanding.specialOffer?.title !== maloMestaLanding.specialOffer.title ||
      existingMaloMestaLanding.specialOffer?.eyebrow !== maloMestaLanding.specialOffer.eyebrow ||
      existingMaloMestaLanding.specialOffer?.text !== maloMestaLanding.specialOffer.text ||
      existingMaloMestaLanding.enrollmentHelp?.title !== maloMestaLanding.enrollmentHelp.title ||
      existingMaloMestaLanding.leadForm?.institutionLabel !== maloMestaLanding.leadForm.institutionLabel ||
      existingMaloMestaLanding.testimonials?.eyebrow !== maloMestaLanding.testimonials.eyebrow ||
      existingMaloMestaLanding.testimonials?.title !== maloMestaLanding.testimonials.title
    ) {
      await strapi.documents('api::landing.landing').update({
        documentId: existingMaloMestaLanding.documentId,
        data: {
          gtmId: maloMestaLanding.gtmId,
          seo: maloMestaLanding.seo,
          hero: maloMestaLanding.hero,
          programChoice: maloMestaLanding.programChoice,
          benefits: maloMestaLanding.benefits,
          benefitCards: maloMestaLanding.benefitCards,
          specialOffer: maloMestaLanding.specialOffer,
          enrollmentHelp: maloMestaLanding.enrollmentHelp,
          leadForm: maloMestaLanding.leadForm,
          testimonials: maloMestaLanding.testimonials,
        },
        status: 'published',
      })
    }

    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      })

      if (!publicRole) {
        return
      }

      for (const action of ['api::landing.landing.find', 'api::landing.landing.findOne']) {
        const permission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action,
            role: publicRole.id,
          },
        })

        if (!permission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action,
              role: publicRole.id,
              enabled: true,
            },
          })
        } else if (!permission.enabled) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: permission.id },
            data: { enabled: true },
          })
        }
      }
    } catch (error) {
      strapi.log.warn(`Could not seed public landing permissions: ${error}`)
    }
  },
};
