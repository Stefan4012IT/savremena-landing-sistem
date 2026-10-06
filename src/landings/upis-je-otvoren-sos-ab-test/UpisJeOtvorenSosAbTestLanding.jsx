import { HeroSection } from './components/HeroSection'
import { EmotionalTurnSection } from './components/EmotionalTurnSection'
import { ModernEducationSection } from './components/ModernEducationSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { IndividualApproachSection } from './components/IndividualApproachSection'
import { IndividualPotentialSection } from './components/IndividualPotentialSection'
import { InvestmentSection } from './components/InvestmentSection'
import { EnrollmentProcessSection } from './components/EnrollmentProcessSection'
import { FaqSection } from './components/FaqSection'
import { EnrollmentCtaSection } from './components/EnrollmentCtaSection'
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

export function UpisJeOtvorenSosAbTestLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="upis-je-otvoren-sos-ab-test-root upis-je-otvoren-sos-ab-test-landing">
        <HeroSection />
        <EmotionalTurnSection />
        <StatsSection />
        <ProgramChoiceSection />
        <ModernEducationSection />
        <DirectionsSection />
        <PartnerLogosSection />
        <IndividualPotentialSection />
        <IndividualApproachSection />
        <TestimonialsSection />
        <InvestmentSection />
        <EnrollmentProcessSection />
        <FaqSection />
        <EnrollmentCtaSection />
        {/*
        <BenefitsSection />
        <FutureSpaceSection />
        <SpecialOfferSection />
        <EnrollmentHelpSection />
        */}
        <FinalCTASection />
      </main>
    </LandingDataProvider>
  )
}
