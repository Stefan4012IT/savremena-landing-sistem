// import type { Core } from '@strapi/strapi';
import { najboljaOdlukaLanding } from './data/najbolja-odluka'

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
    const existingLanding = await strapi.documents('api::landing.landing').findFirst({
      filters: { slug: najboljaOdlukaLanding.slug },
    })

    if (!existingLanding) {
      await strapi.documents('api::landing.landing').create({
        data: najboljaOdlukaLanding,
        status: 'published',
      })
    } else if (
      !existingLanding.hero?.beforeImageUrl ||
      !existingLanding.hero?.afterImageUrl
    ) {
      await strapi.documents('api::landing.landing').update({
        documentId: existingLanding.documentId,
        data: {
          hero: {
            ...existingLanding.hero,
            beforeImageUrl:
              existingLanding.hero?.beforeImageUrl ??
              najboljaOdlukaLanding.hero.beforeImageUrl,
            afterImageUrl:
              existingLanding.hero?.afterImageUrl ??
              najboljaOdlukaLanding.hero.afterImageUrl,
          },
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
