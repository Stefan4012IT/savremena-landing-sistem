import AVFoundation
import CoreGraphics
import CoreText
import Foundation
import ImageIO

let width = 1080
let height = 1920
let fps: Int32 = 30
let duration = 3.7
let pixelSize: CGFloat = 32

func loadImage(_ path: String) throws -> CGImage {
    let url = URL(fileURLWithPath: path)
    guard let source = CGImageSourceCreateWithURL(url as CFURL, nil),
          let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else {
        throw NSError(domain: "BlackFridayExport", code: 1, userInfo: [NSLocalizedDescriptionKey: "Could not load image at \(path)"])
    }
    return image
}

func makeBitmapContext(width: Int, height: Int, data: UnsafeMutableRawPointer, bytesPerRow: Int, gray: Bool = false) -> CGContext? {
    let colorSpace = gray ? CGColorSpaceCreateDeviceGray() : CGColorSpaceCreateDeviceRGB()
    let bitmapInfo = gray ? CGImageAlphaInfo.none.rawValue : CGImageAlphaInfo.premultipliedLast.rawValue
    return CGContext(data: data, width: width, height: height, bitsPerComponent: 8, bytesPerRow: bytesPerRow, space: colorSpace, bitmapInfo: bitmapInfo)
}

func drawAspectFill(_ image: CGImage, in context: CGContext, width: CGFloat, height: CGFloat) {
    let scale = max(width / CGFloat(image.width), height / CGFloat(image.height))
    let drawWidth = CGFloat(image.width) * scale
    let drawHeight = CGFloat(image.height) * scale
    let rect = CGRect(x: (width - drawWidth) / 2, y: (height - drawHeight) / 2, width: drawWidth, height: drawHeight)
    context.saveGState()
    context.translateBy(x: 0, y: height)
    context.scaleBy(x: 1, y: -1)
    context.draw(image, in: rect)
    context.restoreGState()
}

struct LineMetrics {
    let firstGlyphWidth: CGFloat
}

func drawLine(_ text: String, fontSize: CGFloat, align: CTTextAlignment, centerY: CGFloat, maxWidth: CGFloat, anchorOffset: CGFloat, width: CGFloat, height: CGFloat, context: CGContext) -> LineMetrics {
    let font = CTFontCreateWithName("Arial-Black" as CFString, fontSize, nil)
    let attributes = [kCTFontAttributeName: font, kCTForegroundColorAttributeName: CGColor(gray: 1, alpha: 1)] as CFDictionary
    let line = CTLineCreateWithAttributedString(CFAttributedStringCreate(nil, text as CFString, attributes)!)
    let measuredWidth = CGFloat(CTLineGetTypographicBounds(line, nil, nil, nil))
    let scaleX = min(1, maxWidth / max(measuredWidth, 1))
    let ascent = CGFloat(CTFontGetAscent(font))
    let descent = CGFloat(CTFontGetDescent(font))
    let boxWidth = min(width * 0.94, 1440) * 0.9
    let left = (width - boxWidth) / 2
    let right = left + boxWidth
    let x = (align == .left ? left : right) + anchorOffset

    context.saveGState()
    context.translateBy(x: x, y: centerY)
    context.scaleBy(x: scaleX, y: 1)
    // The mask context uses a top-left origin; counter-flip CoreText glyphs
    // so the letters remain upright while keeping the intended line layout.
    context.textMatrix = CGAffineTransform(scaleX: 1, y: -1)
    context.textPosition = CGPoint(x: align == .left ? 0 : -measuredWidth, y: (ascent - descent) / 2)
    CTLineDraw(line, context)
    context.restoreGState()

    let firstLine = CTLineCreateWithAttributedString(CFAttributedStringCreate(nil, String(text.prefix(1)) as CFString, attributes)!)
    return LineMetrics(firstGlyphWidth: CGFloat(CTLineGetTypographicBounds(firstLine, nil, nil, nil)) * scaleX)
}

func makeTextMask() throws -> (CGImage, [UInt8], CGFloat, CGFloat) {
    var bytes = [UInt8](repeating: 0, count: width * height)
    let boxWidth = min(CGFloat(width) * 0.94, 1440) * 0.9
    let boxLeft = (CGFloat(width) - boxWidth) / 2
    let sideSize = min(CGFloat(width) * 0.15, CGFloat(height) * 0.075) * 0.9 * 0.92
    let mainSize = min(CGFloat(width) * 0.22, CGFloat(height) * 0.14) * 0.92 * 0.92
    let topY = CGFloat(height) * 0.24
    let blackY = CGFloat(height) * 0.37
    let mainGap = max(CGFloat(height) * 0.09, mainSize * 1.04)
    let fridayY = blackY + mainGap
    let actionY = fridayY + (blackY - topY)
    let verticalOffset = CGFloat(height) / 2 - (topY + actionY) / 2

    let result = bytes.withUnsafeMutableBytes { rawBuffer -> CGImage? in
        guard let baseAddress = rawBuffer.baseAddress,
              let context = makeBitmapContext(width: width, height: height, data: baseAddress, bytesPerRow: width, gray: true) else { return nil }
        context.setFillColor(CGColor(gray: 0, alpha: 1))
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.translateBy(x: 0, y: CGFloat(height))
        context.scaleBy(x: 1, y: -1)

        context.setFillColor(CGColor(gray: 1, alpha: 1))
        drawLine("OVO NIJE", fontSize: sideSize, align: .left, centerY: topY + verticalOffset, maxWidth: boxWidth, anchorOffset: 0, width: CGFloat(width), height: CGFloat(height), context: context)
        let black = drawLine("BLACK", fontSize: mainSize, align: .left, centerY: blackY + verticalOffset, maxWidth: boxWidth, anchorOffset: 0, width: CGFloat(width), height: CGFloat(height), context: context)
        drawLine("FRIDAY", fontSize: mainSize, align: .left, centerY: fridayY + verticalOffset, maxWidth: boxWidth, anchorOffset: black.firstGlyphWidth, width: CGFloat(width), height: CGFloat(height), context: context)
        drawLine("AKCIJA", fontSize: sideSize, align: .right, centerY: actionY + verticalOffset, maxWidth: boxWidth, anchorOffset: 0, width: CGFloat(width), height: CGFloat(height), context: context)
        return context.makeImage()
    }

    guard let image = result else {
        throw NSError(domain: "BlackFridayExport", code: 2, userInfo: [NSLocalizedDescriptionKey: "Could not create text mask"])
    }
    return (image, bytes, boxLeft, boxWidth)
}

struct Particle {
    let x: CGFloat
    let y: CGFloat
    let vx: CGFloat
    let vy: CGFloat
    let size: CGFloat
    let color: CGColor
}

func makeParticles(maskBytes: [UInt8]) -> [Particle] {
    let colors: [CGColor] = [
        CGColor(red: 0.90, green: 0.89, blue: 0.87, alpha: 1),
        CGColor(red: 0.72, green: 0.71, blue: 0.68, alpha: 1),
        CGColor(red: 0.47, green: 0.45, blue: 0.44, alpha: 1),
        CGColor(red: 0.83, green: 0.62, blue: 0.22, alpha: 1),
        CGColor(red: 0.74, green: 0.39, blue: 0.22, alpha: 1),
        CGColor(red: 0.56, green: 0.13, blue: 0.11, alpha: 1),
    ]
    var particles: [Particle] = []
    var seed: UInt64 = 0xBF2026
    func random() -> CGFloat {
        seed = 2862933555777941757 &* seed &+ 3037000493
        return CGFloat(seed % 1_000_000) / 1_000_000
    }

    for y in stride(from: Int(pixelSize / 2), to: height, by: Int(pixelSize)) {
        for x in stride(from: Int(pixelSize / 2), to: width, by: Int(pixelSize)) {
            if maskBytes[y * width + x] < 160 { continue }
            let dx = CGFloat(x) - CGFloat(width) / 2
            let dy = CGFloat(y) - CGFloat(height) / 2
            let length = max(hypot(dx, dy), 1)
            let speed = 100 + random() * 300
            particles.append(Particle(
                x: CGFloat(x),
                y: CGFloat(y),
                vx: dx / length * speed + (random() - 0.5) * 130,
                vy: dy / length * speed + (random() - 0.5) * 130,
                size: 28 + random() * 28,
                color: colors[Int(random() * CGFloat(colors.count)) % colors.count]
            ))
        }
    }
    return particles
}

func makePixelTexture(_ image: CGImage) -> CGImage? {
    let lowWidth = Int(ceil(CGFloat(width) / pixelSize))
    let lowHeight = Int(ceil(CGFloat(height) / pixelSize))
    guard let context = CGContext(data: nil, width: lowWidth, height: lowHeight, bitsPerComponent: 8, bytesPerRow: lowWidth * 4, space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else { return nil }
    context.interpolationQuality = .low
    drawAspectFill(image, in: context, width: CGFloat(lowWidth), height: CGFloat(lowHeight))
    return context.makeImage()
}

func drawFrame(time: CGFloat, poster: CGImage, texture: CGImage, mask: CGImage, particles: [Particle], into context: CGContext) {
    let bounds = CGRect(x: 0, y: 0, width: width, height: height)
    context.saveGState()
    context.translateBy(x: 0, y: CGFloat(height))
    context.scaleBy(x: 1, y: -1)
    drawAspectFill(poster, in: context, width: CGFloat(width), height: CGFloat(height))

    if time >= 3.4 {
        context.restoreGState()
        return
    }

    guard let overlayContext = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8, bytesPerRow: width * 4, space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else {
        context.restoreGState()
        return
    }
    overlayContext.translateBy(x: 0, y: CGFloat(height))
    overlayContext.scaleBy(x: 1, y: -1)
    overlayContext.setFillColor(CGColor(gray: 0, alpha: 1))
    overlayContext.fill(bounds)
    overlayContext.saveGState()
    overlayContext.clip(to: bounds, mask: mask)
    overlayContext.interpolationQuality = .none
    overlayContext.draw(texture, in: bounds)
    overlayContext.restoreGState()

    let focusProgress = min(max((time - 1.2) / 2.2, 0), 1)
    let zoom = 1 + 1.5 * focusProgress
    let overlayOpacity = 1 - min(max((time - 1.9) / 1.2, 0), 1)
    if let overlay = overlayContext.makeImage(), overlayOpacity > 0 {
        context.saveGState()
        context.translateBy(x: CGFloat(width) / 2, y: CGFloat(height) / 2)
        context.scaleBy(x: zoom, y: zoom)
        context.translateBy(x: -CGFloat(width) / 2, y: -CGFloat(height) / 2)
        context.setAlpha(overlayOpacity)
        context.draw(overlay, in: bounds)
        context.restoreGState()
    }

    if time >= 1.9 {
        let progress = min(max((time - 1.9) / 1.4, 0), 1)
        let zoomParticles = zoom
        context.saveGState()
        context.translateBy(x: CGFloat(width) / 2, y: CGFloat(height) / 2)
        context.scaleBy(x: zoomParticles, y: zoomParticles)
        context.translateBy(x: -CGFloat(width) / 2, y: -CGFloat(height) / 2)
        context.setAlpha(0.9 * (1 - progress))
        for particle in particles {
            let x = particle.x + particle.vx * progress
            let y = particle.y + particle.vy * progress + 90 * progress * progress
            context.setFillColor(particle.color)
            context.fill(CGRect(x: x - particle.size / 2, y: y - particle.size / 2, width: particle.size, height: particle.size))
        }
        context.restoreGState()
    }
    context.restoreGState()
}

func main() throws {
    guard CommandLine.arguments.count == 4 else {
        throw NSError(domain: "BlackFridayExport", code: 3, userInfo: [NSLocalizedDescriptionKey: "Usage: export-black-friday-intro.swift poster-image texture-image output.mp4"])
    }
    let poster = try loadImage(CommandLine.arguments[1])
    let textureSource = try loadImage(CommandLine.arguments[2])
    let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
    let (mask, maskBytes, _, _) = try makeTextMask()
    guard let texture = makePixelTexture(textureSource) else {
        throw NSError(domain: "BlackFridayExport", code: 4, userInfo: [NSLocalizedDescriptionKey: "Could not create pixel texture"])
    }
    let particles = makeParticles(maskBytes: maskBytes)
    try? FileManager.default.removeItem(at: outputURL)

    let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
    let settings: [String: Any] = [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: width,
        AVVideoHeightKey: height,
        AVVideoCompressionPropertiesKey: [
            AVVideoAverageBitRateKey: 8_000_000,
            AVVideoExpectedSourceFrameRateKey: fps,
            AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
        ],
    ]
    let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
    input.expectsMediaDataInRealTime = false
    let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input, sourcePixelBufferAttributes: [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
        kCVPixelBufferWidthKey as String: width,
        kCVPixelBufferHeightKey as String: height,
        kCVPixelBufferCGImageCompatibilityKey as String: true,
        kCVPixelBufferCGBitmapContextCompatibilityKey as String: true,
    ])
    guard writer.canAdd(input) else { throw writer.error ?? NSError(domain: "BlackFridayExport", code: 5) }
    writer.add(input)
    writer.startWriting()
    writer.startSession(atSourceTime: .zero)

    let frameCount = Int(duration * CGFloat(fps))
    for index in 0..<frameCount {
        while !input.isReadyForMoreMediaData { Thread.sleep(forTimeInterval: 0.002) }
        var optionalBuffer: CVPixelBuffer?
        let pixelBufferAttributes: [String: Any] = [
            kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
            kCVPixelBufferWidthKey as String: width,
            kCVPixelBufferHeightKey as String: height,
            kCVPixelBufferCGImageCompatibilityKey as String: true,
            kCVPixelBufferCGBitmapContextCompatibilityKey as String: true,
        ]
        CVPixelBufferCreate(kCFAllocatorDefault, width, height, kCVPixelFormatType_32BGRA, pixelBufferAttributes as CFDictionary, &optionalBuffer)
        guard let buffer = optionalBuffer else { throw NSError(domain: "BlackFridayExport", code: 7) }
        CVPixelBufferLockBaseAddress(buffer, [])
        if let address = CVPixelBufferGetBaseAddress(buffer),
           let context = CGContext(data: address, width: width, height: height, bitsPerComponent: 8, bytesPerRow: CVPixelBufferGetBytesPerRow(buffer), space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGBitmapInfo.byteOrder32Little.union(CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedFirst.rawValue)).rawValue) {
            context.clear(CGRect(x: 0, y: 0, width: width, height: height))
            context.setBlendMode(CGBlendMode.normal)
            drawFrame(time: CGFloat(index) / CGFloat(fps), poster: poster, texture: texture, mask: mask, particles: particles, into: context)
        }
        let presentationTime = CMTime(value: Int64(index), timescale: fps)
        guard adaptor.append(buffer, withPresentationTime: presentationTime) else {
            CVPixelBufferUnlockBaseAddress(buffer, [])
            throw writer.error ?? NSError(domain: "BlackFridayExport", code: 8)
        }
        CVPixelBufferUnlockBaseAddress(buffer, [])
    }
    input.markAsFinished()
    let semaphore = DispatchSemaphore(value: 0)
    writer.finishWriting { semaphore.signal() }
    semaphore.wait()
    guard writer.status == .completed else { throw writer.error ?? NSError(domain: "BlackFridayExport", code: 9) }
    print("Exported \(width)x\(height) MP4: \(outputURL.path)")
}

do {
    try main()
} catch {
    fputs("Export failed: \(error.localizedDescription)\n", stderr)
    exit(1)
}
