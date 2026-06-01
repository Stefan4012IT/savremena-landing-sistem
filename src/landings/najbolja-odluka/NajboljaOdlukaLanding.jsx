import { HeroSection } from './components/HeroSection'
import { EmotionalTurnSection } from './components/EmotionalTurnSection'
import { ModernEducationSection } from './components/ModernEducationSection'
import { DirectionsSection } from './components/DirectionsSection'
import { ProgramChoiceSection } from './components/ProgramChoiceSection'
import { BenefitsSection } from './components/BenefitsSection'
import { SpecialOfferSection } from './components/SpecialOfferSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { LandingDataProvider } from './LandingDataProvider'

export function NajboljaOdlukaLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="landing landing--najbolja-odluka">
        <HeroSection />
        <EmotionalTurnSection />
        <ModernEducationSection />
        <DirectionsSection />
        <ProgramChoiceSection />
        <BenefitsSection />
        <SpecialOfferSection />
        <EnrollmentHelpSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
    </LandingDataProvider>
  )
}
