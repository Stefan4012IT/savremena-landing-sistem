import { useEffect, useMemo, useState } from 'react'
import { useGtm } from './hooks/useGtm'
import { defaultLandingSlug, landingRegistry } from './landings/landingRegistry'
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

  return pathname.replace(/^\/+|\/+$/g, '') || defaultLandingSlug
}

function getFaviconPackage(brandScope) {
  return String(brandScope).trim().toUpperCase() === 'IS' ? faviconPackages.IS : faviconPackages.default
}

function setFaviconPackage(brandScope) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const packagePath = `${basePath}/${getFaviconPackage(brandScope)}`

  document.querySelectorAll('link[data-brand-favicon="true"]').forEach((element) => {
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

function App() {
  const slug = useMemo(() => getCurrentSlug(), [])
  const registryEntry = landingRegistry[slug] ?? landingRegistry[defaultLandingSlug]
  const [landingData, setLandingData] = useState(registryEntry.fallbackData)
  const LandingComponent = registryEntry.component

  useEffect(() => {
    let isMounted = true

    fetchLandingBySlug(slug)
      .then((data) => {
        if (isMounted && data) {
          setLandingData({
            ...registryEntry.fallbackData,
            ...data,
          })
        }
      })
      .catch((error) => {
        console.warn(error)
      })

    return () => {
      isMounted = false
    }
  }, [registryEntry.fallbackData, slug])

  useEffect(() => {
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
  }, [landingData.seo])

  useEffect(() => {
    setFaviconPackage(landingData.brandScope)
  }, [landingData.brandScope])

  useGtm(landingData.gtmId)

  return <LandingComponent data={landingData} />
}

export default App
