const SHEET_NAME = 'Prijave';
const SECRET_PROPERTY = 'LEADS_WEBHOOK_SECRET';
const SPREADSHEET_ID_PROPERTY = 'LEADS_SHEET_ID';

const HEADERS = [
  'Vreme prijave',
  'Lead event ID',
  'Ime i prezime',
  'E-mail',
  'Uzrast deteta',
  'Pozivni broj države',
  'Pozivni broj',
  'Telefon',
  'Institucija',
  'Naziv forme',
  'Landing slug',
  'URL stranice',
];

function doPost(event) {
  try {
    const body = JSON.parse(event.postData && event.postData.contents || '{}');
    const expectedSecret = PropertiesService.getScriptProperties().getProperty(SECRET_PROPERTY);
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty(SPREADSHEET_ID_PROPERTY);

    if (!expectedSecret || !spreadsheetId || body.secret !== expectedSecret) {
      return json({ success: false, message: 'Nedozvoljen zahtev.' });
    }

    const lead = body.lead || {};
    if (!lead.name || !lead.email || !lead.phone_number) {
      return json({ success: false, message: 'Nedostaju podaci prijave.' });
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(5000)) {
      return json({ success: false, message: 'Upis je trenutno zauzet. Pokušajte ponovo.' });
    }

    try {
      const sheet = getOrCreateSheet(spreadsheetId);
      const eventId = String(lead.lead_event_id || '');

      if (eventId && hasLeadEventId(sheet, eventId)) {
        return json({ success: true, duplicate: true });
      }

      sheet.appendRow([
        new Date(),
        eventId,
        String(lead.name || ''),
        String(lead.email || ''),
        String(lead.childs_age || ''),
        String(lead.country_code || ''),
        String(lead.area_code || ''),
        String(lead.phone_number || ''),
        String(lead.institution || ''),
        String(lead.form_name || ''),
        String(lead.landing_slug || ''),
        String(lead.page_url || ''),
      ]);

      return json({ success: true });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return json({ success: false, message: 'Greška pri upisu u Sheet.' });
  }
}

function getOrCreateSheet(spreadsheetId) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function hasLeadEventId(sheet, eventId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return false;
  }

  const eventIds = sheet.getRange(2, 2, lastRow - 1, 1).getValues().flat();
  return eventIds.includes(eventId);
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
