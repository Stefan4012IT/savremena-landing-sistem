type UisLeadPayload = {
  name: string
  email: string
  childs_age: string
  'country-code': string
  'area-code': string
  'phone-number': string
  lead_event_id?: string
  institution: string
  form_name: string
}

export async function sendLeadToUis(payload: UisLeadPayload) {
  const webhookUrl = process.env.UIS_WEBHOOK_URL
  const accessKey = process.env.UIS_WEBHOOK_TOKEN

  if (!webhookUrl) {
    throw new Error('UIS_WEBHOOK_URL nije postavljen.')
  }

  if (!accessKey) {
    throw new Error('UIS_WEBHOOK_TOKEN nije postavljen.')
  }

  const uisPayload: UisLeadPayload = {
    name: payload.name,
    email: payload.email,
    childs_age: payload.childs_age,
    'country-code': payload['country-code'],
    'area-code': payload['area-code'],
    'phone-number': payload['phone-number'],
    lead_event_id: payload.lead_event_id,
    institution: payload.institution,
    form_name: payload.form_name,
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      AccessKey: accessKey,
    },
    body: JSON.stringify(uisPayload),
    signal: AbortSignal.timeout(15000),
  })

  const responseText = await response.text()

  if (!response.ok) {
    throw new Error(`UIS webhook greska: ${response.status} ${responseText}`)
  }

  return {
    status: response.status,
    data: responseText,
  }
}
