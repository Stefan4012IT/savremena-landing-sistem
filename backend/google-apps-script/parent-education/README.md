# Prijave za besplatnu edukaciju roditelja — Google Apps Script

Ovaj endpoint je namenjen isključivo landingu `besplatna-edukacija-za-roditelje`. Ne šalje prijave u UIS.

## Kolone

Skripta upisuje u tab `Form Responses 1` sledeće kolone, prema postojećem Sheet-u:

1. Timestamp
2. Ime i prezime
3. Koliko godina ima Vaše dete (ostaje prazno — ovaj landing ne prikuplja uzrast)
4. Imejl adresa
5. Broj telefona
6. Za koji događaj se prijavljujete
7. Saglasan/saglasna
8. Lead event ID (skrivena tehnička kolona za sprečavanje duplikata)

Ako se tab već zove drugačije, promeniti `SHEET_NAME` u `Code.gs` pre deploya.

## Podešavanje

1. U ciljnom Google Sheet-u otvoriti **Extensions → Apps Script**.
2. Nalepiti sadržaj [Code.gs](./Code.gs).
3. U **Project Settings → Script properties** dodati:
   - `PARENT_EDUCATION_SHEET_ID` — ID Sheeta iz URL-a, između `/d/` i `/edit`;
   - `PARENT_EDUCATION_WEBHOOK_SECRET` — dugačku nasumičnu vrednost.
4. Izabrati **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Sačuvati `/exec` URL Web App deploymenta.

## Šta je potrebno za povezivanje landinga

Pošalji mi:

- `PARENT_EDUCATION_SHEET_ID`;
- `PARENT_EDUCATION_WEBHOOK_SECRET`;
- Web App `/exec` URL;
- naziv taba, ako nije `Form Responses 1`.

Zatim povezujem samo ovaj landing preko zasebnog Railway backend endpointa. UIS se za njega neće pozivati.
