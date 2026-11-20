import { useEffect, useRef, useState } from 'react'
import { useLandingData } from '../useLandingData'

const PIXEL_SIZE = 32

function drawPixelatedMessage(canvas, textureImage = null, isEnglish = false) {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const isMobile = viewportWidth < 776
  const pixelRatio = Math.max(1, window.devicePixelRatio || 1)
  const width = Math.max(1, Math.ceil(viewportWidth * pixelRatio))
  const height = Math.max(1, Math.ceil(viewportHeight * pixelRatio))
  const messageBoxWidth = Math.min(viewportWidth * 0.94, 1440) * (isMobile ? 0.9 : 0.7)
  const messageBoxLeft = (viewportWidth - messageBoxWidth) / 2
  const messageBoxRight = messageBoxLeft + messageBoxWidth
  const context = canvas.getContext('2d')

  if (!context) return []

  canvas.width = width
  canvas.height = height
  canvas.style.width = `${viewportWidth}px`
  canvas.style.height = `${viewportHeight}px`
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  context.globalCompositeOperation = 'source-over'
  context.clearRect(0, 0, viewportWidth, viewportHeight)

  const maskCanvas = document.createElement('canvas')
  maskCanvas.width = width
  maskCanvas.height = height
  const maskContext = maskCanvas.getContext('2d')
  if (!maskContext) return []
  maskContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  maskContext.fillStyle = '#ffffff'

  const drawLine = (text, fontSize, align, centerY, maxWidth = messageBoxWidth, anchorOffset = 0) => {
    maskContext.font = `900 ${fontSize}px "Arial Black", Arial, sans-serif`
    maskContext.textAlign = align
    maskContext.textBaseline = 'middle'
    const measuredWidth = maskContext.measureText(text).width
    const scaleX = Math.min(1, maxWidth / measuredWidth)
    const anchorX = (align === 'left' ? messageBoxLeft : messageBoxRight) + anchorOffset

    maskContext.save()
    maskContext.translate(anchorX, centerY)
    maskContext.scale(scaleX, 1)
    maskContext.fillText(text, 0, 0)
    maskContext.restore()

    return {
      firstGlyphWidth: maskContext.measureText(text[0]).width * scaleX,
    }
  }

  const sideLineSize = isMobile
    ? Math.min(viewportWidth * 0.15, viewportHeight * 0.075) * 0.9 * 0.92 * 0.9
    : Math.min(viewportWidth * 0.19, viewportHeight * 0.14) * 0.7
  const blackFridaySize = isMobile
    ? Math.min(viewportWidth * 0.22, viewportHeight * 0.14) * 0.92 * 0.92 * 0.9
    : Math.min(viewportWidth * 0.27, viewportHeight * 0.25) * 0.9
  const topLineY = viewportHeight * (isMobile ? 0.24 : 0.2)
  const blackLineY = viewportHeight * (isMobile ? 0.37 : 0.39)
  const fridayLineY = isMobile
    ? blackLineY + Math.max(viewportHeight * 0.09, blackFridaySize * 1.04)
    : viewportHeight * 0.58
  const actionLineY = isMobile
    ? fridayLineY + (blackLineY - topLineY)
    : viewportHeight * 0.78
  const rightLineOffset = isMobile ? 0 : -76
  const verticalOffset = isMobile ? viewportHeight / 2 - (topLineY + actionLineY) / 2 : 0

  drawLine(isEnglish ? 'THIS IS NOT' : 'OVO NIJE', sideLineSize, 'left', topLineY + verticalOffset)
  const blackMetrics = drawLine('BLACK', blackFridaySize, 'left', blackLineY + verticalOffset)
  drawLine(
    'FRIDAY',
    blackFridaySize,
    isMobile ? 'left' : 'right',
    fridayLineY + verticalOffset,
    isMobile
      ? messageBoxWidth
      : messageBoxWidth - blackMetrics.firstGlyphWidth + messageBoxWidth * 0.06,
    isMobile ? blackMetrics.firstGlyphWidth : rightLineOffset,
  )
  drawLine(isEnglish ? 'A SALE' : 'AKCIJA', sideLineSize, 'right', actionLineY + verticalOffset, messageBoxWidth, rightLineOffset)

  if (textureImage?.complete && textureImage.naturalWidth > 0) {
    const textureCanvas = document.createElement('canvas')
    textureCanvas.width = width
    textureCanvas.height = height
    const textureContext = textureCanvas.getContext('2d')
    const lowWidth = Math.max(1, Math.ceil(viewportWidth / PIXEL_SIZE))
    const lowHeight = Math.max(1, Math.ceil(viewportHeight / PIXEL_SIZE))
    const lowResolutionCanvas = document.createElement('canvas')
    lowResolutionCanvas.width = lowWidth
    lowResolutionCanvas.height = lowHeight
    const lowResolutionContext = lowResolutionCanvas.getContext('2d')

    if (textureContext && lowResolutionContext) {
      const coverScale = Math.max(lowWidth / textureImage.naturalWidth, lowHeight / textureImage.naturalHeight)
        * 2.8
      const drawnWidth = textureImage.naturalWidth * coverScale
      const drawnHeight = textureImage.naturalHeight * coverScale
      const horizontalShift = Math.min(
        lowWidth * 0.15,
        Math.max(0, (drawnWidth - lowWidth) / 2),
      )
      const verticalShift = Math.min(
        lowHeight * 0.85,
        Math.max(0, (drawnHeight - lowHeight) / 2),
      )
      const textureLeft = (lowWidth - drawnWidth) / 2 - horizontalShift
      const textureTop = (lowHeight - drawnHeight) / 2 - verticalShift
      lowResolutionContext.drawImage(
        textureImage,
        textureLeft,
        textureTop,
        drawnWidth,
        drawnHeight,
      )

      textureContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      textureContext.imageSmoothingEnabled = false
      textureContext.drawImage(lowResolutionCanvas, 0, 0, viewportWidth, viewportHeight)
      textureContext.globalCompositeOperation = 'destination-in'
      textureContext.drawImage(maskCanvas, 0, 0, viewportWidth, viewportHeight)

      context.globalCompositeOperation = 'source-over'
      context.globalAlpha = 0.82
      context.drawImage(textureCanvas, 0, 0, viewportWidth, viewportHeight)
      context.globalAlpha = 1
    }
  }

  const pixels = []
  const maskData = maskContext.getImageData(0, 0, width, height).data
  for (let y = PIXEL_SIZE / 2; y < viewportHeight; y += PIXEL_SIZE) {
    for (let x = PIXEL_SIZE / 2; x < viewportWidth; x += PIXEL_SIZE) {
      const sampleX = Math.min(width - 1, Math.round(x * pixelRatio))
      const sampleY = Math.min(height - 1, Math.round(y * pixelRatio))
      const alpha = maskData[(sampleY * width + sampleX) * 4 + 3]
      if (alpha > 160) pixels.push({ x, y })
    }
  }

  return pixels
}

function animatePixelBurst(canvas, points) {
  const context = canvas.getContext('2d')
  if (!context) return () => {}

  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const pixelRatio = Math.max(1, window.devicePixelRatio || 1)
  canvas.width = Math.ceil(viewportWidth * pixelRatio)
  canvas.height = Math.ceil(viewportHeight * pixelRatio)
  canvas.style.width = `${viewportWidth}px`
  canvas.style.height = `${viewportHeight}px`
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  const maxParticles = 1100
  const stride = Math.max(1, Math.ceil(points.length / maxParticles))
  const colors = ['#e5e3df', '#b8b4ae', '#77736f', '#d49d37', '#0c2867', '#3f6fae', '#89a9d3']
  const particles = points.filter((_, index) => index % stride === 0).map(({ x, y }) => {
    const startX = x
    const startY = y
    const directionX = startX - viewportWidth / 2
    const directionY = startY - viewportHeight / 2
    const length = Math.hypot(directionX, directionY) || 1
    const speed = 100 + Math.random() * 300

    return {
      x: startX,
      y: startY,
      vx: (directionX / length) * speed + (Math.random() - 0.5) * 130,
      vy: (directionY / length) * speed + (Math.random() - 0.5) * 130,
      size: 28 + Math.random() * 28,
      color: colors[Math.floor(Math.random() * colors.length)],
    }
  })

  const duration = 1400
  const startedAt = performance.now()
  let frameId

  const drawFrame = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration)
    context.clearRect(0, 0, viewportWidth, viewportHeight)
    context.globalAlpha = 0.9 * (1 - progress)

    for (const particle of particles) {
      const x = particle.x + particle.vx * progress
      const y = particle.y + particle.vy * progress + 90 * progress * progress
      context.fillStyle = particle.color
      context.fillRect(x - particle.size / 2, y - particle.size / 2, particle.size, particle.size)
    }

    context.globalAlpha = 1
    if (progress < 1) frameId = window.requestAnimationFrame(drawFrame)
  }

  frameId = window.requestAnimationFrame(drawFrame)
  return () => window.cancelAnimationFrame(frameId)
}

export function BlackFridayIntroOverlay() {
  const { locale = 'sr' } = useLandingData()
  const isEnglish = locale === 'en'
  const [phase, setPhase] = useState('still')
  const layerRef = useRef(null)
  const particlesRef = useRef(null)
  const isDone = phase === 'done'

  useEffect(() => {
    if (isDone) return undefined

    const body = document.body
    const root = document.documentElement
    const scrollY = window.scrollY
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      overscrollBehavior: body.style.overscrollBehavior,
    }
    const previousRootOverflow = root.style.overflow

    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    body.style.overscrollBehavior = 'none'
    root.style.overflow = 'hidden'

    return () => {
      Object.assign(body.style, previousBodyStyles)
      root.style.overflow = previousRootOverflow
      window.scrollTo(0, scrollY)
    }
  }, [isDone])

  useEffect(() => {
    const layer = layerRef.current
    const particlesCanvas = particlesRef.current
    if (!layer || !particlesCanvas) return undefined

    let textureImage = null
    let animationStarted = false
    let points = drawPixelatedMessage(layer, null, isEnglish)
    const redraw = () => {
      if (!animationStarted) points = drawPixelatedMessage(layer, textureImage, isEnglish)
    }
    const resize = () => {
      redraw()
      particlesCanvas.width = window.innerWidth
      particlesCanvas.height = window.innerHeight
      particlesCanvas.style.width = `${window.innerWidth}px`
      particlesCanvas.style.height = `${window.innerHeight}px`
    }
    window.addEventListener('resize', resize)

    const image = new Image()
    image.onload = () => {
      textureImage = image
      redraw()
    }
    image.src = 'https://www.international-school.edu.rs/wp-content/uploads/2026/11/IS_landing_bf_hero_canvas.webp'

    let stopBurst = () => {}
    const focusTimer = window.setTimeout(() => setPhase('focused'), 1200)
    const burstTimer = window.setTimeout(() => {
      animationStarted = true
      setPhase('dispersing')
      stopBurst = animatePixelBurst(particlesCanvas, points)
    }, 1900)
    const finishTimer = window.setTimeout(() => setPhase('done'), 3400)

    return () => {
      window.removeEventListener('resize', resize)
      image.onload = null
      window.clearTimeout(focusTimer)
      window.clearTimeout(burstTimer)
      window.clearTimeout(finishTimer)
      stopBurst()
    }
  }, [isEnglish])

  if (phase === 'done') return null

  return (
    <div className={`black-friday-is-intro-overlay black-friday-is-intro-overlay--${phase}`} role="status" aria-label={isEnglish ? 'This is not a Black Friday sale' : 'Ovo nije Black Friday akcija'}>
      <canvas ref={layerRef} className="black-friday-is-intro-overlay__pixels" aria-hidden="true" />
      <canvas ref={particlesRef} className="black-friday-is-intro-overlay__particles" aria-hidden="true" />
    </div>
  )
}
