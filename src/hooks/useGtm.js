import { useEffect } from 'react'

export function useGtm(gtmId) {
  useEffect(() => {
    if (!gtmId || document.querySelector(`[data-gtm-id="${gtmId}"]`)) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`
    script.dataset.gtmId = gtmId
    document.head.appendChild(script)

    const noscript = document.createElement('noscript')
    noscript.dataset.gtmId = gtmId
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
      gtmId,
    )}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.body.prepend(noscript)
  }, [gtmId])
}
