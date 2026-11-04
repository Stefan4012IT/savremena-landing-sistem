import { HeroSection } from './components/HeroSection'
import { EventAgendaSection } from './components/EventAgendaSection'
import { EnrollmentCtaSection } from './components/EnrollmentCtaSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { SchoolStageSection } from './components/SchoolStageSection'
import { CollegePromoSection } from './components/CollegePromoSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { SpecialOfferSection } from './components/SpecialOfferSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { FinalCTASection } from './components/FinalCTASection'
import { LandingDataProvider } from './LandingDataProvider'

export function OpenDayIsSecondaryLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="open-day-is-secondary-root open-day-is-secondary-landing">
        <HeroSection />
        <EventAgendaSection />
        <StatsSection />
        <PartnerLogosSection />
        <SchoolStageSection stage="secondary" />
        <CollegePromoSection />
        <SpecialOfferSection />
        <BenefitsSection />
        <EnrollmentCtaSection />
        <TestimonialsSection />
        <EnrollmentHelpSection />
        <FinalCTASection />
      </main>
    </LandingDataProvider>
  )
}
