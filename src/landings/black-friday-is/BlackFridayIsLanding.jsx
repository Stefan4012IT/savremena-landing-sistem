import { HeroSection } from './components/HeroSection'
import { EmotionalTurnSection } from './components/EmotionalTurnSection'
import { ModernEducationSection } from './components/ModernEducationSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { SchoolStageSection } from './components/SchoolStageSection'
import { CollegePromoSection } from './components/CollegePromoSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { SpecialOfferSection } from './components/SpecialOfferSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { ContactWidget } from './components/ContactWidget'
import { BlackFridayIntroOverlay } from './components/BlackFridayIntroOverlay'
import { CanvasBackgroundPreview } from './components/CanvasBackgroundPreview'
import { LandingDataProvider } from './LandingDataProvider'

export function BlackFridayIsLanding({ data }) {
  const showCanvasPreview = typeof window !== 'undefined'
    && new URLSearchParams(window.location.search).has('canvas-preview')

  return (
    <LandingDataProvider value={data}>
      <main className="black-friday-is-root black-friday-is-landing">
        {showCanvasPreview ? null : <BlackFridayIntroOverlay />}
        <HeroSection />
        {showCanvasPreview ? <CanvasBackgroundPreview /> : null}
        <EmotionalTurnSection />
        <StatsSection />
        <ModernEducationSection />
        <PartnerLogosSection />
        <SchoolStageSection stage="primary" />
        <SchoolStageSection stage="secondary" />
        <CollegePromoSection />
        <SpecialOfferSection />
        <BenefitsSection />
        <EnrollmentHelpSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactWidget />
      </main>
    </LandingDataProvider>
  )
}
