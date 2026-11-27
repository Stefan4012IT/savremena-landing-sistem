const SHEET_NAME = 'Form Responses 1';
const SPREADSHEET_ID_PROPERTY = 'PARENT_EDUCATION_SHEET_ID';
const SECRET_PROPERTY = 'PARENT_EDUCATION_WEBHOOK_SECRET';

const HEADERS = [
  'Timestamp',
  'Ime i prezime:',
  'Koliko godina ima Vaše dete?',
  'Imejl adresa:',
  'Broj telefona',
  'Za koji događaj se prijavljujete?',
  'Saglasan/saglasna',
];

function doPost(event) {
  try {
    const body = JSON.parse((event.postData && event.postData.contents) || '{}');
    const secret = PropertiesService.getScriptProperties().getProperty(SECRET_PROPERTY);
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty(SPREADSHEET_ID_PROPERTY);

    if (!secret || !spreadsheetId || body.secret !== secret) {
      return json({ success: false, message: 'Nedozvoljen zahtev.' });
    }

    const lead = body.lead || {};
    if (!lead.name || !lead.email || !lead.event || !lead.consent) {
      return json({ success: false, message: 'Nedostaju obavezni podaci prijave.' });
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(5000)) {
      return json({ success: false, message: 'Upis je trenutno zauzet. Pokušajte ponovo.' });
    }

    try {
      const sheet = getSheet(spreadsheetId);
      const eventId = String(lead.lead_event_id || '');

      if (eventId && hasLeadEventId(sheet, eventId)) {
        return json({ success: true, duplicate: true });
      }

      const phone = [lead.country_code, lead.area_code, lead.phone_number]
        .filter(Boolean)
        .join(' ')
        .trim();

      sheet.appendRow([
        new Date(),
        String(lead.name || ''),
        '',
        String(lead.email || ''),
        phone,
        String(lead.event || ''),
        'Da',
        eventId,
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

function getSheet(spreadsheetId) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([...HEADERS, 'Lead event ID']);
    sheet.setFrozenRows(1);
  } else if (!sheet.getRange(1, 8).getValue()) {
    sheet.getRange(1, 8).setValue('Lead event ID');
  }

  return sheet;
}

function hasLeadEventId(sheet, eventId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  const leadEventColumn = sheet.getLastColumn();
  const eventIds = sheet.getRange(2, leadEventColumn, lastRow - 1, 1).getValues().flat();
  return eventIds.includes(eventId);
}

function json(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
