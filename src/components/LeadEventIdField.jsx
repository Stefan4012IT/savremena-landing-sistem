import { useLeadEventId } from '../hooks/useLeadEventId'

export function LeadEventIdField({ formName, formType, institution, landingSlug } = {}) {
  const leadEventId = useLeadEventId({
    formName,
    formType,
    institution,
    landingSlug,
  })

  return <input type="hidden" name="lead_event_id" value={leadEventId} readOnly />
}
