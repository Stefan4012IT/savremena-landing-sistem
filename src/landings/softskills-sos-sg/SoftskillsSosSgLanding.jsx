import { HeroSection } from './components/HeroSection'
import { FutureSkillsSection } from './components/FutureSkillsSection'
import { SkillsInPracticeSection } from './components/SkillsInPracticeSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { EnrollmentCtaSection } from './components/EnrollmentCtaSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { FooterSection } from './components/FooterSection'
import { LandingDataProvider } from './LandingDataProvider'

export function SoftskillsSosSgLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="landing landing--softskills-sos-sg">
        <HeroSection />
        <FutureSkillsSection />
        <SkillsInPracticeSection />
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
