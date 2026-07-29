import { useEffect, useMemo, useState } from 'react'
import { useGtm } from './hooks/useGtm'
import { landingRegistry } from './landings/landingRegistry'
import { fetchLandingBySlug } from './services/landingApi'

const faviconPackages = {
  IS: 'favicon_io_IS',
  default: 'favicon_io_SOS-SG',
}

const faviconFiles = [
  { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
  { rel: 'shortcut icon', href: 'favicon.ico' },
  { rel: 'manifest', href: 'site.webmanifest' },
]

function getCurrentSlug() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  let pathname = window.location.pathname

  if (basePath && basePath !== '/' && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length)
  }

  return pathname.replace(/^\/+|\/+$/g, '')
}

function getFaviconPackage(brandScope) {
  return String(brandScope).trim().toUpperCase() === 'IS' ? faviconPackages.IS : faviconPackages.default
}

function setFaviconPackage(brandScope) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const packagePath = `${basePath}/${getFaviconPackage(brandScope)}`

  document
    .querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="manifest"], link[data-brand-favicon="true"]',
    )
    .forEach((element) => {
      element.remove()
    })

  faviconFiles.forEach((file) => {
    const link = document.createElement('link')
    link.dataset.brandFavicon = 'true'
    link.rel = file.rel
    link.href = `${packagePath}/${file.href}`

    if (file.type) {
      link.type = file.type
    }

    if (file.sizes) {
      link.sizes = file.sizes
    }

    document.head.appendChild(link)
  })
}

function setMetaTag(attribute, name, content) {
  const selector = `meta[${attribute}="${name}"]`
  let metaTag = document.head.querySelector(selector)

  if (!content) {
    metaTag?.remove()
    return
  }

  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attribute, name)
    document.head.appendChild(metaTag)
  }

  metaTag.setAttribute('content', content)
}

function setCanonicalUrl(url) {
  let canonicalLink = document.head.querySelector('link[rel="canonical"]')

  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    document.head.appendChild(canonicalLink)
  }

  canonicalLink.href = url
}

function mergeArrayItems(fallbackItems, apiItems) {
  if (!Array.isArray(fallbackItems) || !Array.isArray(apiItems)) {
    return apiItems ?? fallbackItems
  }

  return apiItems.map((item, index) => ({
    ...(fallbackItems[index] ?? {}),
    ...item,
  }))
}

function mergeLandingData(fallbackData, apiData) {
  return {
    ...fallbackData,
    ...apiData,
    seo: {
      ...fallbackData.seo,
      ...apiData.seo,
    },
    hero: {
      ...fallbackData.hero,
      ...apiData.hero,
    },
    specialConditions: {
      ...fallbackData.specialConditions,
      ...apiData.specialConditions,
    },
    modernEducation: {
      ...fallbackData.modernEducation,
      ...apiData.modernEducation,
    },
    enrollmentHelp: {
      ...fallbackData.enrollmentHelp,
      ...apiData.enrollmentHelp,
    },
    directionCards: mergeArrayItems(fallbackData.directionCards, apiData.directionCards),
    benefitCards: mergeArrayItems(fallbackData.benefitCards, apiData.benefitCards),
    testimonialCards: mergeArrayItems(fallbackData.testimonialCards, apiData.testimonialCards),
  }
}

function App() {
  const slug = useMemo(() => getCurrentSlug(), [])
  const registryEntry = landingRegistry[slug]
  const [landingData, setLandingData] = useState(registryEntry?.fallbackData ?? null)
  const LandingComponent = registryEntry?.component

  useEffect(() => {
    if (!registryEntry) {
      return undefined
    }

    let isMounted = true

    fetchLandingBySlug(slug)
      .then((data) => {
        if (isMounted && data) {
          setLandingData(mergeLandingData(registryEntry.fallbackData, data))
        }
      })
      .catch((error) => {
        console.warn(error)
      })

    return () => {
      isMounted = false
    }
  }, [registryEntry, slug])

  useEffect(() => {
    if (!landingData) {
      document.title = 'Savremena'
      return
    }

    const title = landingData.seo?.title ?? landingData.name ?? 'Savremena'
    const description = landingData.seo?.description ?? ''
    const imageUrl = landingData.seo?.ogImageUrl ?? ''
    const pageUrl = `${window.location.origin}${window.location.pathname}`

    document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:locale', 'sr_RS')
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', pageUrl)
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('property', 'og:image:secure_url', imageUrl)
    setMetaTag('property', 'og:image:alt', imageUrl ? title : '')
    setMetaTag('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', imageUrl)
    setCanonicalUrl(pageUrl)
  }, [landingData?.seo])

  useEffect(() => {
    setFaviconPackage(landingData?.brandScope)
  }, [landingData?.brandScope])

  useGtm(landingData?.gtmId)

  if (!LandingComponent || !landingData) {
    return null
  }

  return <LandingComponent data={landingData} />
}

export default App
