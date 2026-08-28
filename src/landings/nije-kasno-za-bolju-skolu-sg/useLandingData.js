import { useContext } from 'react'
import { LandingDataContext } from './LandingDataContext'

export function useLandingData() {
  return useContext(LandingDataContext)
}
