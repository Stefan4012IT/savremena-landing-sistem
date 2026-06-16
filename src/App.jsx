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

    if (landingData.seo?.title) {
      document.title = landingData.seo.title
    }

    if (landingData.seo?.description) {
      let metaDescription = document.querySelector('meta[name="description"]')

      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }

      metaDescription.setAttribute('content', landingData.seo.description)
    }
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
