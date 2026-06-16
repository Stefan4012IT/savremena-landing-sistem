// import type { Core } from '@strapi/strapi';
import { najboljaOdlukaLanding } from './data/najbolja-odluka'

const previousNajboljaOdlukaSlug = 'najbolja-odluka'
const landingPopulate = [
  'hero',
  'modernEducation',
  'directionCards',
  'benefitCards',
  'enrollmentHelp',
  'testimonialCards',
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
        (!existingLanding.hero.beforeImageUrl || !existingLanding.hero.afterImageUrl)) ||
      (existingLanding.modernEducation && !existingLanding.modernEducation.imageUrl) ||
      (existingLanding.enrollmentHelp && !existingLanding.enrollmentHelp.advisorImageUrl) ||
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
          beforeImageUrl:
            existingLanding.hero.beforeImageUrl ??
            najboljaOdlukaLanding.hero.beforeImageUrl,
          afterImageUrl:
            existingLanding.hero.afterImageUrl ??
            najboljaOdlukaLanding.hero.afterImageUrl,
        }
      }

      if (existingLanding.modernEducation) {
        landingUpdateData.modernEducation = withMissingField(
          existingLanding.modernEducation,
          najboljaOdlukaLanding.modernEducation,
          'imageUrl',
        )
      }

      if (existingLanding.enrollmentHelp) {
        landingUpdateData.enrollmentHelp = withMissingField(
          existingLanding.enrollmentHelp,
          najboljaOdlukaLanding.enrollmentHelp,
          'advisorImageUrl',
        )
      }

      if (existingLanding.directionCards?.length) {
        landingUpdateData.directionCards = withMissingCardFields(
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
