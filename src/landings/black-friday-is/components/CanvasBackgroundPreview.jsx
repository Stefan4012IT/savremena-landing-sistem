import { useEffect, useRef } from 'react'

const HERO_IMAGE = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/IS_landing_bf_hero_canvas.webp'

export function CanvasBackgroundPreview() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    const image = new Image()
    const draw = () => {
      if (!image.complete || !image.naturalWidth) return
      const width = window.innerWidth
      const height = window.innerHeight
      const lowWidth = Math.max(1, Math.ceil(width / 32))
      const lowHeight = Math.max(1, Math.ceil(height / 32))
      const pixelCanvas = document.createElement('canvas')
      pixelCanvas.width = lowWidth
      pixelCanvas.height = lowHeight
      const pixelContext = pixelCanvas.getContext('2d')
      if (!pixelContext) return

      const coverScale = Math.max(lowWidth / image.naturalWidth, lowHeight / image.naturalHeight)
        * 2.8
      const drawnWidth = image.naturalWidth * coverScale
      const drawnHeight = image.naturalHeight * coverScale
      const horizontalShift = Math.min(lowWidth * 0.15, Math.max(0, (drawnWidth - lowWidth) / 2))
      const verticalShift = Math.min(lowHeight * 0.85, Math.max(0, (drawnHeight - lowHeight) / 2))
      const imageLeft = (lowWidth - drawnWidth) / 2 - horizontalShift
      const imageTop = (lowHeight - drawnHeight) / 2 - verticalShift

      pixelContext.drawImage(image, imageLeft, imageTop, drawnWidth, drawnHeight)
      canvas.width = width
      canvas.height = height
      canvas.style.aspectRatio = `${width} / ${height}`
      context.imageSmoothingEnabled = false
      context.clearRect(0, 0, width, height)
      context.drawImage(pixelCanvas, 0, 0, width, height)
    }

    image.onload = draw
    image.src = HERO_IMAGE
    window.addEventListener('resize', draw)
    return () => {
      image.onload = null
      window.removeEventListener('resize', draw)
    }
  }, [])

  return (
    <section className="black-friday-is-canvas-preview" aria-label="Canvas background positioning preview">
      <h2>Canvas background preview</h2>
      <p>Ovo je crop hero fotografije koji se koristi kao tekstura u pikselima canvasa.</p>
      <canvas ref={canvasRef} />
    </section>
  )
}
