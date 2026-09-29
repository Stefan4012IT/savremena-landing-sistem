import { defaultDataContent } from './dataContent'
import { LandingDataContext } from './LandingDataContext'

export function LandingDataProvider({ children, value = defaultDataContent }) {
  return (
    <LandingDataContext.Provider value={value}>
      {children}
    </LandingDataContext.Provider>
  )
}
