import { sendLeadToUis } from '../services/uis'

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

function getClientIp(ctx) {
  return sanitizeText(ctx.request.ip || ctx.request.headers['x-forwarded-for'] || 'unknown', 120)
}

function validateLeadPayload(body: Record<string, unknown>) {
  const errors: Record<string, string> = {}
  const name = sanitizeText(body.name, 60)
  const email = normalizeEmail(body.email)
  const childsAge = sanitizeText(body.childs_age ?? body.childAge, 4)
  const countryCode = sanitizeText(body['country-code'] ?? body.countryCode, 6)
  const areaCode = sanitizeText(body['area-code'] ?? body.areaCode, 4)
  const phoneNumber = sanitizeText(body['phone-number'] ?? body.phoneNumber ?? body.phone, 16)
  const institution = sanitizeText(body.institution, 12).toLowerCase()
  const landingSlug = sanitizeText(body.landingSlug, 80)
  const formName = sanitizeText(body.formName, 120) || `landing - ${landingSlug || institution}`
  const website = sanitizeText(body.website, 200)

  if (website) {
    return {
      isSpam: true,
      isValid: true,
      errors,
      sanitizedData: null,
    }
  }

  if (!/^[A-Za-zÀ-žĆČŠĐŽćčšđž\s'-]{2,60}$/.test(name)) {
    errors.name = 'Ime i prezime nisu u ispravnom formatu.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email nije ispravan.'
  }

  const ageNum = Number(childsAge)
  if (!Number.isInteger(ageNum) || ageNum < 10 || ageNum > 19) {
    errors.childs_age = 'Uzrast mora biti izmedju 10 i 19.'
  }

  if (!/^\+\d{1,4}$/.test(countryCode)) {
    errors['country-code'] = 'Pozivni broj drzave nije ispravan.'
  }

  if (!/^\d{1,4}$/.test(areaCode)) {
    errors['area-code'] = 'Pozivni broj mreze nije ispravan.'
  }

  if (!/^\d{5,12}$/.test(phoneNumber)) {
    errors['phone-number'] = 'Broj telefona nije ispravan.'
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
      institution,
      form_name: formName,
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
