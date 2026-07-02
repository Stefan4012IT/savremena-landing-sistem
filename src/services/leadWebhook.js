import { getLeadEventId } from './leadEventId'

export async function submitLeadWebhook(payload) {
  const apiUrl = import.meta.env.VITE_STRAPI_URL

  if (!apiUrl) {
    throw new Error('Lead webhook API URL is not configured.')
  }

  const url = new URL('/api/lead-webhook', apiUrl)
  const payloadWithLeadEventId = {
    ...payload,
    lead_event_id: payload.lead_event_id || payload.leadEventId || getLeadEventId(),
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payloadWithLeadEventId),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === false) {
    const error = new Error(data.message || `Lead webhook request failed: ${response.status}`)
    error.details = data.errors
    throw error
  }

  return data
}
