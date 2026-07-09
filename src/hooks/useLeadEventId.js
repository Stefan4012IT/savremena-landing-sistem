import { useEffect, useState } from 'react'
import { getLeadEventId, pushLeadEventIdToDataLayer } from '../services/leadEventId'

export function useLeadEventId(options = {}) {
  const [id] = useState(getLeadEventId)

  useEffect(() => {
    pushLeadEventIdToDataLayer(id, options)
  }, [id, options.formName, options.formType, options.institution, options.landingSlug])

  return id
}
