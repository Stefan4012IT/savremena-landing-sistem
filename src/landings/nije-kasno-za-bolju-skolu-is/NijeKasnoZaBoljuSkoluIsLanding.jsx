import { HeroSection } from './components/HeroSection'
import { EmotionalTurnSection } from './components/EmotionalTurnSection'
import { ModernEducationSection } from './components/ModernEducationSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { SchoolStageSection } from './components/SchoolStageSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { SpecialOfferSection } from './components/SpecialOfferSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { LandingDataProvider } from './LandingDataProvider'

export function NijeKasnoZaBoljuSkoluIsLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="nije-kasno-za-bolju-skolu-is-root nije-kasno-za-bolju-skolu-is-landing">
        <HeroSection />
        <EmotionalTurnSection />
        <StatsSection />
        <ModernEducationSection />
        <PartnerLogosSection />
        <SchoolStageSection stage="primary" />
        <SchoolStageSection stage="secondary" />
        <SpecialOfferSection />
        <BenefitsSection />
        <SpecialOfferSection />
        <EnrollmentHelpSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
    </LandingDataProvider>
  )
}
