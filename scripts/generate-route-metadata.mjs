import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defaultLandingData as najboljaOdluka } from '../src/landings/najbolja-odluka/landingContent.js'
import { defaultLandingData as desetSlobodnihMesta } from '../src/landings/10-slobodnih-mesta/landingContent.js'
import { defaultLandingData as nijeKasnoZaBoljuSkolu } from '../src/landings/nije-kasno-za-bolju-skolu-sg/landingContent.js'
import { defaultLandingData as josNijeKasnoZaBoljuSkolu } from '../src/landings/nije-kasno-za-bolju-skolu-sos/landingContent.js'
import { defaultLandingData as whyWait } from '../src/landings/nije-kasno-za-bolju-skolu-is/landingContent.js'
import { defaultLandingData as whyWaitEnglish } from '../src/landings/nije-kasno-za-bolju-skolu-is/landingContent.en.js'
import { defaultLandingData as novoOdeljenje } from '../src/landings/novo-odeljenje/landingContent.js'
import { defaultLandingData as maloMesta } from '../src/landings/malo-mesta/landingContent.js'

const distDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const templatePath = path.join(distDirectory, 'index.html')
const siteUrl = (process.env.VITE_PUBLIC_SITE_URL || 'https://iss.savremena.edu.rs').replace(/\/$/, '')

const landingData = [
  najboljaOdluka,
  desetSlobodnihMesta,
  nijeKasnoZaBoljuSkolu,
  josNijeKasnoZaBoljuSkolu,
  whyWait,
  whyWaitEnglish,
  novoOdeljenje,
  maloMesta,
]

const institutionNames = {
  SOS: 'Savremena osnovna škola',
  SG: 'Savremena gimnazija',
  IS: 'International School',
  'SOS+SG': 'Savremena',
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function metadataTags(data) {
  const title = data.seo?.title || data.name || 'Savremena obrazovna grupa'
  const description = data.seo?.description || ''
  const canonicalUrl = `${siteUrl}/${data.slug}`
  const imageUrl = data.seo?.ogImageUrl || ''
  const siteName = institutionNames[String(data.brandScope).trim().toUpperCase()] || 'Savremena obrazovna grupa'
  const tags = [
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${data.locale === 'en' ? 'en_GB' : 'sr_RS'}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta name="twitter:card" content="${imageUrl ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
  ]

  if (imageUrl) {
    tags.push(
      `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
      `<meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />`,
      `<meta property="og:image:alt" content="${escapeHtml(title)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`,
    )
  }

  return tags.join('\n    ')
}

const template = fs.readFileSync(templatePath, 'utf8')

for (const data of landingData) {
  const routeDirectory = path.join(distDirectory, data.slug)
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(data.seo?.title || data.name)}</title>`)

  if (data.locale === 'en') {
    html = html.replace(/<html\s+lang=["']sr["']/i, '<html lang="en"')
  }

  html = html.replace(/<meta\s+name=["']description["'][^>]*>\n?/gi, '')
  html = html.replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\n?/gi, '')
  html = html.replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\n?/gi, '')
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\n?/gi, '')
  html = html.replace('</head>', `${metadataTags(data)}\n  </head>`)

  fs.mkdirSync(routeDirectory, { recursive: true })
  fs.writeFileSync(path.join(routeDirectory, 'index.html'), html)
}

console.log(`Generated static metadata pages for ${landingData.length} landing routes.`)
