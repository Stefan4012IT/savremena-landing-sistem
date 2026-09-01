import { defaultLandingData } from './landingContent'
import { LandingDataContext } from './LandingDataContext'

export function LandingDataProvider({ children, value = defaultLandingData }) {
  return (
    <LandingDataContext.Provider value={value}>
      {children}
    </LandingDataContext.Provider>
  )
}
