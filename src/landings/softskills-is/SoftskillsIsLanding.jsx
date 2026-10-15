import './styles/_future-skills.scss'
import { HeroSection } from './components/HeroSection'
import { FutureSkillsSection } from './components/FutureSkillsSection'
import { SkillsInPracticeSection } from './components/SkillsInPracticeSection'
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

export function SoftskillsIsLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="softskills-is-root softskills-is-landing">
        <HeroSection />
        <FutureSkillsSection />
        <SkillsInPracticeSection />
        <StatsSection />
        <PartnerLogosSection />
        <SchoolStageSection stage="primary" />
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
