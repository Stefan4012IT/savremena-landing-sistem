import { HeroSection } from './components/HeroSection'
import { SchoolIntroSection } from './components/SchoolIntroSection'
import { ProgramChoiceSection } from './components/ProgramChoiceSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { EnrollmentCtaSection } from './components/EnrollmentCtaSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { FooterSection } from './components/FooterSection'
import { LandingDataProvider } from './LandingDataProvider'

export function PraviTrenutakSosSgLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="landing landing--pravi-trenutak-sos-sg">
        <HeroSection />
        <SchoolIntroSection />
        <ProgramChoiceSection />
        <PartnerLogosSection />
        <StatsSection />
        <BenefitsSection />
        <EnrollmentCtaSection />
        <TestimonialsSection />
        <EnrollmentHelpSection />
        <FooterSection />
      </main>
    </LandingDataProvider>
  )
}
