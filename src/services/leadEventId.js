let leadEventId = ''
let hasPushedLeadEventId = false

export function normalizeLeadAffiliation(institution = '') {
  const normalizedInstitution = String(institution || '').trim().toLowerCase()

  if (normalizedInstitution === 'sos') {
    return 'SOS'
  }

  if (normalizedInstitution === 'is') {
    return 'IS'
  }

  return 'SG'
}

function generateLeadEventId() {
  return `ld_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

export function getLeadEventId() {
  if (!leadEventId) {
    leadEventId = generateLeadEventId()
  }

  return leadEventId
}

function getPageTrackingFields() {
  if (typeof window === 'undefined') {
    return {}
  }

  return {
    hostname: window.location.hostname,
    page_path: window.location.pathname,
    page_url: window.location.href,
  }
}

export function pushLeadEventIdToDataLayer(id = getLeadEventId(), options = {}) {
  if (typeof window === 'undefined' || hasPushedLeadEventId) {
    return
  }

  const affiliation = normalizeLeadAffiliation(options.institution)

  window.leadEventId = id
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'lead_id_ready',
    lead_id: id,
    client_lead_id: id,
    lead_event_id: id,
    affiliation,
    form_type: options.formType || 'react_form',
    landing_slug: options.landingSlug,
    form_name: options.formName,
    ...getPageTrackingFields(),
  })

  hasPushedLeadEventId = true
}

export function pushLeadSubmitToDataLayer(id = getLeadEventId(), options = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const affiliation = normalizeLeadAffiliation(options.institution)

  window.leadEventId = id
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'lead',
    lead_id: id,
    client_lead_id: id,
    lead_event_id: id,
    affiliation,
    form_type: options.formType || 'react_form',
    landing_slug: options.landingSlug,
    form_name: options.formName,
    ...getPageTrackingFields(),
  })
}
