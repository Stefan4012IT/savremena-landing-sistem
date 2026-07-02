import { useEffect, useState } from 'react'
import { getLeadEventId, pushLeadEventIdToDataLayer } from '../services/leadEventId'

export function useLeadEventId() {
  const [id] = useState(getLeadEventId)

  useEffect(() => {
    pushLeadEventIdToDataLayer(id)
  }, [id])

  return id
}
