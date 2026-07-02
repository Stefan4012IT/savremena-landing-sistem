import { useLeadEventId } from '../hooks/useLeadEventId'

export function LeadEventIdField() {
  const leadEventId = useLeadEventId()

  return <input type="hidden" name="lead_event_id" value={leadEventId} readOnly />
}
