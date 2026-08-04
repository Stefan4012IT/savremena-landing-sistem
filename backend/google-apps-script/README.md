# Google Sheets backup prijava

Ovaj Apps Script je sekundarni backup. UIS ostaje primarni kanal: tek nakon uspešnog UIS upisa backend pokušava da doda red u Google Sheet. Ako Sheet ne uspe, prijava se i dalje smatra uspešno poslatom u UIS.

## Railway varijable

U Railway backend servisu dodaj:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GOOGLE_SHEETS_WEBHOOK_SECRET=<dugačka-nasumična-tajna>
```

`GOOGLE_SHEETS_WEBHOOK_SECRET` mora imati istu vrednost kao Apps Script property `LEADS_WEBHOOK_SECRET`.

## Podešavanje Apps Scripta

1. Kreiraj Google Sheet za prijave i iz URL-a kopiraj njegov ID (deo između `/d/` i `/edit`).
2. Otvori **Extensions → Apps Script**, nalepi sadržaj [Code.gs](./Code.gs).
3. U **Project Settings → Script properties** dodaj:
   - `LEADS_SHEET_ID` — ID Google Sheeta;
   - `LEADS_WEBHOOK_SECRET` — ista nasumična tajna kao Railway varijabla.
4. Izaberi **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Kopiraj URL koji se završava sa `/exec` u `GOOGLE_SHEETS_WEBHOOK_URL` na Railway-u.

## Kolone u Sheet-u

Script automatski pravi tab `Prijave` i sledeće kolone:

1. Vreme prijave
2. Lead event ID
3. Ime i prezime
4. E-mail
5. Uzrast deteta
6. Pozivni broj države
7. Pozivni broj
8. Telefon
9. Institucija
10. Naziv forme
11. Landing slug
12. URL stranice

`Lead event ID` sprečava dupliranje redova kada korisnik klikne više puta ili se zahtev ponovi.
