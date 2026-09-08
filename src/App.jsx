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

function getInstitutionName(brandScope) {
  const names = {
    SOS: 'Savremena osnovna škola',
    SG: 'Savremena gimnazija',
    IS: 'International School',
    'SOS+SG': 'Savremena',
  }

  return names[String(brandScope).trim().toUpperCase()] ?? 'Savremena obrazovna grupa'
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

function mergeTestimonialCards(fallbackItems, apiItems, brandScope) {
  const mergedItems = mergeArrayItems(fallbackItems, apiItems)

  if (String(brandScope).trim().toUpperCase() === 'IS') {
    const fallbackVideoItems = fallbackItems.filter((item) => item.variant === 'video')
    const mergedVideoIndexes = mergedItems.reduce((indexes, item, index) => {
      if (item.variant === 'video') indexes.push(index)
      return indexes
    }, [])

    fallbackVideoItems.forEach((fallbackVideo, videoIndex) => {
      const mergedVideoIndex = mergedVideoIndexes[videoIndex]

      if (mergedVideoIndex !== undefined) {
        mergedItems[mergedVideoIndex] = {
          ...mergedItems[mergedVideoIndex],
          ...fallbackVideo,
        }
      }
    })
  }

  return mergedItems
}

function mergeSeo(fallbackSeo = {}, apiSeo = {}, brandScope) {
  const seo = {
    ...fallbackSeo,
    ...apiSeo,
  }

  if (String(brandScope).trim().toUpperCase() === 'IS') {
    if (!/international school/i.test(seo.title ?? '')) {
      seo.title = fallbackSeo.title
    }

    if (!/international school/i.test(seo.description ?? '')) {
      seo.description = fallbackSeo.description
    }

    if (fallbackSeo.ogImageUrl) {
      seo.ogImageUrl = fallbackSeo.ogImageUrl
    } else {
      delete seo.ogImageUrl
    }
  }

  return seo
}

function mergeLandingData(fallbackData, apiData) {
  const modernEducation = {
    ...fallbackData.modernEducation,
    ...apiData.modernEducation,
  }

  const enrollmentHelp = {
    ...fallbackData.enrollmentHelp,
    ...apiData.enrollmentHelp,
  }

  if (String(apiData.brandScope ?? fallbackData.brandScope).trim().toUpperCase() === 'IS') {
    modernEducation.imageUrl = fallbackData.modernEducation.imageUrl
    enrollmentHelp.advisorImageUrl = fallbackData.enrollmentHelp.advisorImageUrl
  }

  return {
    ...fallbackData,
    ...apiData,
    slug: fallbackData.slug,
    seo: mergeSeo(fallbackData.seo, apiData.seo, apiData.brandScope ?? fallbackData.brandScope),
    hero: {
      ...fallbackData.hero,
      ...apiData.hero,
    },
    specialConditions: {
      ...fallbackData.specialConditions,
      ...apiData.specialConditions,
    },
    modernEducation,
    enrollmentHelp,
    leadForm: {
      ...fallbackData.leadForm,
      ...apiData.leadForm,
    },
    directionCards: mergeArrayItems(fallbackData.directionCards, apiData.directionCards),
    benefitCards: mergeArrayItems(fallbackData.benefitCards, apiData.benefitCards),
    testimonialCards: mergeTestimonialCards(
      fallbackData.testimonialCards,
      apiData.testimonialCards,
      apiData.brandScope ?? fallbackData.brandScope,
    ),
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

    fetchLandingBySlug(registryEntry.apiSlug ?? slug)
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
    document.documentElement.lang = landingData.locale === 'en' ? 'en' : 'sr'
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:locale', landingData.locale === 'en' ? 'en_GB' : 'sr_RS')
    setMetaTag('property', 'og:site_name', getInstitutionName(landingData.brandScope))
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
