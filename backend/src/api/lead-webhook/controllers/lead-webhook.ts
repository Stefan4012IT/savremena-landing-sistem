import { sendLeadToUis } from '../services/uis'
import { sendLeadToGoogleSheets } from '../services/googleSheets'

const recentSubmissions = new Map<string, number>()
const allowedInstitutions = new Set(['sos', 'sg', 'is'])
const duplicateWindowMs = 60 * 1000

function sanitizeText(value: unknown, maxLength = 120) {
  return String(value ?? '')
    .trim()
    .replace(/\s{2,}/g, ' ')
    .slice(0, maxLength)
}

function normalizeEmail(value: unknown) {
  return sanitizeText(value, 160).toLowerCase()
}

function normalizeDigits(value: unknown, maxLength = 16) {
  return sanitizeText(value, maxLength).replace(/\D/g, '')
}

function isObviousTestNumber(value: string) {
  if (!value) return false
  if (/^(\d)\1+$/.test(value)) return true

  const ascending = '01234567890123456789'
  const descending = '98765432109876543210'

  return ascending.includes(value) || descending.includes(value)
}

function getSerbianPhoneRule(areaCode: string) {
  if (/^[1-3]/.test(areaCode)) {
    return { min: 5, max: 7, type: 'geographic' as const }
  }

  if (/^[5-6]/.test(areaCode)) {
    if (areaCode.length === 2 && areaCode.startsWith('5')) {
      return { min: 7, max: 7, type: 'mobile' as const }
    }

    return { min: 6, max: 7, type: 'mobile' as const }
  }

  if (/^[7-9]/.test(areaCode)) {
    return areaCode.length === 2
      ? { min: 7, max: 9, type: 'nonGeographic' as const }
      : { min: 6, max: 8, type: 'nonGeographic' as const }
  }

  return null
}

function describeDigitRange(min: number, max: number) {
  return min === max ? `${min} cifara` : `od ${min} do ${max} cifara`
}

function getClientIp(ctx) {
  return sanitizeText(ctx.request.ip || ctx.request.headers['x-forwarded-for'] || 'unknown', 120)
}

function validateLeadPayload(body: Record<string, unknown>) {
  const errors: Record<string, string> = {}
  const name = sanitizeText(body.name, 60)
  const email = normalizeEmail(body.email)
  const childsAge = sanitizeText(body.childs_age ?? body.childAge, 4)
  const countryCode = sanitizeText(body['country-code'] ?? body.countryCode, 6)
  const rawAreaCode = sanitizeText(body['area-code'] ?? body.areaCode, 20)
  const rawPhoneNumber = sanitizeText(body['phone-number'] ?? body.phoneNumber ?? body.phone, 20)
  const areaCode = normalizeDigits(rawAreaCode, 20)
  const phoneNumber = normalizeDigits(rawPhoneNumber, 20)
  const leadEventId = sanitizeText(body.lead_event_id ?? body.leadEventId, 80)
  const institution = sanitizeText(body.institution, 12).toLowerCase()
  const landingSlug = sanitizeText(body.landingSlug, 80)
  const pageUrl = sanitizeText(body.pageUrl, 500)
  const formName = sanitizeText(body.formName, 120) || `landing - ${landingSlug || institution}`
  const website = sanitizeText(body.website, 200)
  const validLeadEventId = /^ld_\d{10,13}_[a-z0-9]{4,16}$/.test(leadEventId) ? leadEventId : ''

  if (website) {
    return {
      isSpam: true,
      isValid: true,
      errors,
      sanitizedData: null,
    }
  }

  if (!/^[A-Za-zÀ-žĆČŠĐŽćčšđž\s'.-]{2,60}$/.test(name)) {
    errors.name = 'Ime i prezime nisu u ispravnom formatu.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email nije ispravan.'
  }

  const ageNum = Number(childsAge)
  if (!Number.isInteger(ageNum) || ageNum < 4 || ageNum > 20) {
    errors.childs_age = 'Uzrast mora biti izmedju 4 i 20.'
  }

  if (!/^\+\d{1,4}$/.test(countryCode)) {
    errors['country-code'] = 'Pozivni broj drzave nije ispravan.'
  }

  if (!/^\d+$/.test(rawAreaCode)) {
    errors['area-code'] = 'Pozivni broj mora sadržati samo cifre.'
  } else if (countryCode === '+381' && rawAreaCode.startsWith('0')) {
    errors['area-code'] = 'Pozivni broj unesite bez početne nule, na primer 64 ili 11.'
  } else if (countryCode === '+381' && !/^\d{2,3}$/.test(rawAreaCode)) {
    errors['area-code'] = 'Pozivni broj za Srbiju mora imati 2 ili 3 cifre.'
  } else if (countryCode !== '+381' && !/^\d{1,5}$/.test(rawAreaCode)) {
    errors['area-code'] = 'Pozivni broj mora imati od 1 do 5 cifara.'
  }

  const serbianPhoneRule = countryCode === '+381' ? getSerbianPhoneRule(areaCode) : null

  if (!/^\d+$/.test(rawPhoneNumber)) {
    errors['phone-number'] = 'Telefon mora sadržati samo cifre.'
  } else if (countryCode === '+381' && !serbianPhoneRule && !errors['area-code']) {
    errors['area-code'] = 'Pozivni broj nije u važećem opsegu za Srbiju.'
  } else if (
    serbianPhoneRule &&
    (phoneNumber.length < serbianPhoneRule.min || phoneNumber.length > serbianPhoneRule.max)
  ) {
    errors['phone-number'] = `Telefon za ovaj pozivni broj mora imati ${describeDigitRange(serbianPhoneRule.min, serbianPhoneRule.max)}.`
  } else if (serbianPhoneRule?.type === 'geographic' && /^[019]/.test(phoneNumber)) {
    errors['phone-number'] = 'Fiksni telefonski broj ne može počinjati cifrom 0, 1 ili 9.'
  } else if (countryCode !== '+381' && !/^\d{5,12}$/.test(rawPhoneNumber)) {
    errors['phone-number'] = 'Telefon mora imati od 5 do 12 cifara.'
  } else if (isObviousTestNumber(phoneNumber)) {
    errors['phone-number'] = 'Uneti telefon izgleda kao probni broj. Unesite stvarni kontakt broj.'
  }

  const internationalNumberLength = countryCode.replace(/\D/g, '').length + areaCode.length + phoneNumber.length
  if (!errors['country-code'] && !errors['area-code'] && !errors['phone-number'] && internationalNumberLength > 15) {
    errors['phone-number'] = 'Kompletan međunarodni broj ne sme imati više od 15 cifara.'
  }

  if (!allowedInstitutions.has(institution)) {
    errors.institution = 'Institution nije ispravan.'
  }

  return {
    isSpam: false,
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      name,
      email,
      childs_age: childsAge,
      'country-code': countryCode,
      'area-code': areaCode,
      'phone-number': phoneNumber,
      lead_event_id: validLeadEventId,
      institution,
      form_name: formName,
      landing_slug: landingSlug,
      page_url: pageUrl,
    },
  }
}

function isDuplicate(key: string) {
  const now = Date.now()
  const previous = recentSubmissions.get(key)

  for (const [submissionKey, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > duplicateWindowMs) {
      recentSubmissions.delete(submissionKey)
    }
  }

  if (previous && now - previous < duplicateWindowMs) {
    return true
  }

  recentSubmissions.set(key, now)
  return false
}

export default {
  async submit(ctx) {
    const body = (ctx.request.body ?? {}) as Record<string, unknown>

    if (!body || Object.keys(body).length === 0) {
      ctx.status = 400
      ctx.body = {
        success: false,
        message: 'Request body je prazan.',
      }
      return
    }

    const validation = validateLeadPayload(body)

    if (validation.isSpam) {
      ctx.body = {
        success: true,
        message: 'Podaci su uspjesno poslani.',
      }
      return
    }

    if (!validation.isValid || !validation.sanitizedData) {
      strapi.log.warn(`Lead webhook validation failed: ${JSON.stringify(validation.errors)}`)
      ctx.status = 400
      ctx.body = {
        success: false,
        message: 'Validacija nije prosla.',
        errors: validation.errors,
      }
      return
    }

    const dedupeKey = [
      getClientIp(ctx),
      validation.sanitizedData.email,
      validation.sanitizedData['phone-number'],
      validation.sanitizedData.institution,
    ].join(':')

    if (isDuplicate(dedupeKey)) {
      ctx.status = 429
      ctx.body = {
        success: false,
        message: 'Prijava je vec poslata. Pokusajte ponovo za minut.',
      }
      return
    }

    try {
      await sendLeadToUis(validation.sanitizedData)

      try {
        await sendLeadToGoogleSheets(validation.sanitizedData)
      } catch (error) {
        strapi.log.warn(`Google Sheets backup failed after UIS success: ${error}`)
      }

      ctx.body = {
        success: true,
        message: 'Podaci su uspjesno poslani.',
      }
    } catch (error) {
      strapi.log.error(`Lead webhook error: ${error}`)
      ctx.status = 502
      ctx.body = {
        success: false,
        message: 'Trenutno ne mozemo da posaljemo prijavu. Pokusajte ponovo kasnije.',
      }
    }
  },
}
