import { NajboljaOdlukaLanding } from './najbolja-odluka/NajboljaOdlukaLanding'
import { defaultLandingData as najboljaOdlukaLandingData } from './najbolja-odluka/landingContent'
import { NovoOdeljenjeLanding } from './novo-odeljenje/NovoOdeljenjeLanding'
import { defaultLandingData as novoOdeljenjeLandingData } from './novo-odeljenje/landingContent'
import { DesetSlobodnihMestaLanding } from './10-slobodnih-mesta/DesetSlobodnihMestaLanding'
import { defaultLandingData as desetSlobodnihMestaLandingData } from './10-slobodnih-mesta/landingContent'
import { NijeKasnoZaBoljuSkoluLanding } from './nije-kasno-za-bolju-skolu-sg/NijeKasnoZaBoljuSkoluLanding'
import { defaultLandingData as nijeKasnoZaBoljuSkoluLandingData } from './nije-kasno-za-bolju-skolu-sg/landingContent'
import { JosNijeKasnoZaBoljuSkoluLanding } from './nije-kasno-za-bolju-skolu-sos/JosNijeKasnoZaBoljuSkoluLanding'
import { defaultLandingData as josNijeKasnoZaBoljuSkoluLandingData } from './nije-kasno-za-bolju-skolu-sos/landingContent'
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
  [desetSlobodnihMestaLandingData.slug]: {
    component: DesetSlobodnihMestaLanding,
    fallbackData: desetSlobodnihMestaLandingData,
  },
  [nijeKasnoZaBoljuSkoluLandingData.slug]: {
    component: NijeKasnoZaBoljuSkoluLanding,
    fallbackData: nijeKasnoZaBoljuSkoluLandingData,
  },
  [josNijeKasnoZaBoljuSkoluLandingData.slug]: {
    component: JosNijeKasnoZaBoljuSkoluLanding,
    fallbackData: josNijeKasnoZaBoljuSkoluLandingData,
  },
  [maloMestaLandingData.slug]: {
    component: MaloMestaLanding,
    fallbackData: maloMestaLandingData,
  },
}

export const defaultLandingSlug = najboljaOdlukaLandingData.slug
