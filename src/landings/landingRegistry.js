import { NajboljaOdlukaLanding } from './najbolja-odluka/NajboljaOdlukaLanding'
import { defaultLandingData } from './najbolja-odluka/landingContent'

export const landingRegistry = {
  [defaultLandingData.slug]: {
    component: NajboljaOdlukaLanding,
    fallbackData: defaultLandingData,
  },
}

export const defaultLandingSlug = defaultLandingData.slug
