let leadEventId = ''
let hasPushedLeadEventId = false

function generateLeadEventId() {
  return `ld_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

export function getLeadEventId() {
  if (!leadEventId) {
    leadEventId = generateLeadEventId()
  }

  return leadEventId
}

export function pushLeadEventIdToDataLayer(id = getLeadEventId()) {
  if (typeof window === 'undefined' || hasPushedLeadEventId) {
    return
  }

  window.leadEventId = id
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'lead_id_ready',
    lead_event_id: id,
  })

  hasPushedLeadEventId = true
}
