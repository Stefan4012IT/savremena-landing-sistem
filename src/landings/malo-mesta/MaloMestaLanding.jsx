import { HeroSection } from './components/HeroSection'
import { WaitingListSection } from './components/WaitingListSection'
import { AvailableSeatsSection } from './components/AvailableSeatsSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { ProgramChoiceSection } from './components/ProgramChoiceSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { FooterSection } from './components/FooterSection'
import { LandingDataProvider } from './LandingDataProvider'

export function MaloMestaLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="landing landing--malo-mesta">
        <HeroSection />
        <WaitingListSection />
        <ProgramChoiceSection />
        <AvailableSeatsSection />
        <PartnerLogosSection />
        <StatsSection />
        <BenefitsSection />
        <EnrollmentHelpSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </LandingDataProvider>
  )
}
