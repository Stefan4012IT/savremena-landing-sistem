type ParentEducationLeadPayload = {
  name: string
  email: string
  'phone-number': string
  'country-code': string
  'area-code': string
  event: string
  consent: boolean
  lead_event_id?: string
}

export async function sendParentEducationLeadToGoogleSheets(payload: ParentEducationLeadPayload) {
  const webhookUrl = process.env.PARENT_EDUCATION_GOOGLE_SHEETS_WEBHOOK_URL
  const secret = process.env.PARENT_EDUCATION_GOOGLE_SHEETS_WEBHOOK_SECRET

  if (!webhookUrl) throw new Error('PARENT_EDUCATION_GOOGLE_SHEETS_WEBHOOK_URL nije postavljen.')
  if (!secret) throw new Error('PARENT_EDUCATION_GOOGLE_SHEETS_WEBHOOK_SECRET nije postavljen.')

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret,
      lead: {
        name: payload.name,
        email: payload.email,
        phone_number: payload['phone-number'],
        country_code: payload['country-code'],
        area_code: payload['area-code'],
        event: payload.event,
        consent: payload.consent,
        lead_event_id: payload.lead_event_id ?? '',
      },
    }),
    signal: AbortSignal.timeout(5000),
  })

  const responseText = await response.text()
  let responseData: { success?: boolean; message?: string } = {}

  try {
    responseData = JSON.parse(responseText)
  } catch {
    // A non-JSON response is handled below.
  }

  if (!response.ok || responseData.success !== true) {
    throw new Error(responseData.message || `Google Sheets webhook greska: ${response.status}`)
  }

  return responseData
}
