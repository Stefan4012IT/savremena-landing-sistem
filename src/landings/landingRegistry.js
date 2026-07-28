import { NajboljaOdlukaLanding } from './najbolja-odluka/NajboljaOdlukaLanding'
import { defaultLandingData as najboljaOdlukaLandingData } from './najbolja-odluka/landingContent'
import { NovoOdeljenjeLanding } from './novo-odeljenje/NovoOdeljenjeLanding'
import { defaultLandingData as novoOdeljenjeLandingData } from './novo-odeljenje/landingContent'
import { MaloMestaLanding } from './malo-mesta/MaloMestaLanding'
import { defaultLandingData as maloMestaLandingData } from './malo-mesta/landingContent'

export const landingRegistry = {
  [najboljaOdlukaLandingData.slug]: {
    component: NajboljaOdlukaLanding,
    fallbackData: najboljaOdlukaLandingData,
  },
  [novoOdeljenjeLandingData.slug]: {
    component: NovoOdeljenjeLanding,
    fallbackData: novoOdeljenjeLandingData,
  },
  [maloMestaLandingData.slug]: {
    component: MaloMestaLanding,
    fallbackData: maloMestaLandingData,
  },
}

export const defaultLandingSlug = najboljaOdlukaLandingData.slug
