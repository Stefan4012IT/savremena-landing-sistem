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
import { UpisJeOtvorenSosLanding } from './upis-je-otvoren-sos/UpisJeOtvorenSosLanding'
import { defaultDataContent as upisJeOtvorenSosData } from './upis-je-otvoren-sos/dataContent'
import { UpisJeOtvorenSgLanding } from './upis-je-otvoren-sg/UpisJeOtvorenSgLanding'
import { defaultDataContent as upisJeOtvorenSgData } from './upis-je-otvoren-sg/dataContent'
import { UpisJeOtvorenIsLanding } from './upis-je-otvoren-is/UpisJeOtvorenIsLanding'
import { defaultDataContent as upisJeOtvorenIsData } from './upis-je-otvoren-is/dataContent'
import { NijeKasnoZaBoljuSkoluIsLanding } from './nije-kasno-za-bolju-skolu-is/NijeKasnoZaBoljuSkoluIsLanding'
import { defaultLandingData as whyWaitLandingData } from './nije-kasno-za-bolju-skolu-is/landingContent'
import { defaultLandingData as whyWaitEnglishLandingData } from './nije-kasno-za-bolju-skolu-is/landingContent.en'
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
  [upisJeOtvorenSosData.slug]: {
    component: UpisJeOtvorenSosLanding,
    fallbackData: upisJeOtvorenSosData,
    useStaticData: true,
  },
  [upisJeOtvorenSgData.slug]: {
    component: UpisJeOtvorenSgLanding,
    fallbackData: upisJeOtvorenSgData,
    useStaticData: true,
  },
  [upisJeOtvorenIsData.slug]: {
    component: UpisJeOtvorenIsLanding,
    fallbackData: upisJeOtvorenIsData,
    useStaticData: true,
  },
  [whyWaitLandingData.slug]: {
    component: NijeKasnoZaBoljuSkoluIsLanding,
    fallbackData: whyWaitLandingData,
  },
  [whyWaitEnglishLandingData.slug]: {
    component: NijeKasnoZaBoljuSkoluIsLanding,
    fallbackData: whyWaitEnglishLandingData,
    apiSlug: whyWaitEnglishLandingData.apiSlug,
  },
  [maloMestaLandingData.slug]: {
    component: MaloMestaLanding,
    fallbackData: maloMestaLandingData,
  },
}

export const defaultLandingSlug = najboljaOdlukaLandingData.slug
