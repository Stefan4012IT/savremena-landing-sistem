import { useEffect, useMemo, useState } from 'react'
import { useGtm } from './hooks/useGtm'
import { defaultLandingSlug, landingRegistry } from './landings/landingRegistry'
import { fetchLandingBySlug } from './services/landingApi'

function getCurrentSlug() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  let pathname = window.location.pathname

  if (basePath && basePath !== '/' && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length)
  }

  return pathname.replace(/^\/+|\/+$/g, '') || defaultLandingSlug
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

  useGtm(landingData.gtmId)

  return <LandingComponent data={landingData} />
}

export default App
