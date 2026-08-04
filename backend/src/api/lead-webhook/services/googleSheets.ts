type GoogleSheetsLeadPayload = {
  name: string
  email: string
  childs_age: string
  'country-code': string
  'area-code': string
  'phone-number': string
  lead_event_id?: string
  institution: string
  form_name: string
  landing_slug?: string
  page_url?: string
}

export async function sendLeadToGoogleSheets(payload: GoogleSheetsLeadPayload) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET

  if (!webhookUrl && !secret) {
    return { skipped: true }
  }

  if (!webhookUrl) {
    throw new Error('GOOGLE_SHEETS_WEBHOOK_URL nije postavljen.')
  }

  if (!secret) {
    throw new Error('GOOGLE_SHEETS_WEBHOOK_SECRET nije postavljen.')
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret,
      lead: {
        name: payload.name,
        email: payload.email,
        childs_age: payload.childs_age,
        country_code: payload['country-code'],
        area_code: payload['area-code'],
        phone_number: payload['phone-number'],
        lead_event_id: payload.lead_event_id ?? '',
        institution: payload.institution,
        form_name: payload.form_name,
        landing_slug: payload.landing_slug ?? '',
        page_url: payload.page_url ?? '',
      },
    }),
    signal: AbortSignal.timeout(5000),
  })

  const responseText = await response.text()
  let responseData: { success?: boolean; message?: string } = {}

  try {
    responseData = JSON.parse(responseText)
  } catch {
    // A non-JSON response is handled below as a failed backup request.
  }

  if (!response.ok || responseData.success !== true) {
    throw new Error(responseData.message || `Google Sheets webhook greska: ${response.status}`)
  }

  return responseData
}
