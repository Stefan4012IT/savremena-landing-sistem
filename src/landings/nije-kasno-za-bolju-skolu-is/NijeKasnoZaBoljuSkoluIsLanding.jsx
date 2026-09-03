import { HeroSection } from './components/HeroSection'
import { EmotionalTurnSection } from './components/EmotionalTurnSection'
import { ModernEducationSection } from './components/ModernEducationSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { DirectionsSection } from './components/DirectionsSection'
import { ProgramChoiceSection } from './components/ProgramChoiceSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { FutureSpaceSection } from './components/FutureSpaceSection'
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
        <SpecialOfferSection />
        <ModernEducationSection />
        <PartnerLogosSection />
        <DirectionsSection />
        <ProgramChoiceSection />
        <StatsSection />
        <BenefitsSection />
        <FutureSpaceSection />
        <SpecialOfferSection />
        <EnrollmentHelpSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
    </LandingDataProvider>
  )
}
