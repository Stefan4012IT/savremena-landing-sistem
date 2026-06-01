export async function fetchLandingBySlug(slug) {
  const apiUrl = import.meta.env.VITE_STRAPI_URL

  if (!apiUrl) {
    return null
  }

  const url = new URL('/api/landings', apiUrl)
  url.searchParams.set('filters[slug][$eq]', slug)
  url.searchParams.set('populate', '*')

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Landing API request failed: ${response.status}`)
  }

  const payload = await response.json()
  const entry = payload.data?.[0]

  if (!entry) {
    return null
  }

  const attributes = entry.attributes ?? entry
  const content = attributes.content ?? attributes

  return {
    ...content,
    id: entry.id,
    slug: attributes.slug ?? content.slug,
    name: attributes.name ?? content.name,
    brandScope: attributes.brandScope ?? content.brandScope,
    gtmId: attributes.gtmId ?? content.gtmId,
    seo: attributes.seo ?? content.seo,
  }
}
