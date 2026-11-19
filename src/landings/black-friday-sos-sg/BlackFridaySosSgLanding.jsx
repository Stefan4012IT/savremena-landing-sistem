import { HeroSection } from './components/HeroSection'
import { SchoolIntroSection } from './components/SchoolIntroSection'
import { BlackFridayOfferSection } from './components/BlackFridayOfferSection'
import { ProgramChoiceSection } from './components/ProgramChoiceSection'
import { PartnerLogosSection } from './components/PartnerLogosSection'
import { StatsSection } from './components/StatsSection'
import { BenefitsSection } from './components/BenefitsSection'
import { EnrollmentCtaSection } from './components/EnrollmentCtaSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { EnrollmentHelpSection } from './components/EnrollmentHelpSection'
import { FooterSection } from './components/FooterSection'
import { LandingDataProvider } from './LandingDataProvider'
import { BlackFridayIntroOverlay } from './components/BlackFridayIntroOverlay'
import { ContactWidget } from './components/ContactWidget'

export function BlackFridaySosSgLanding({ data }) {
  return (
    <LandingDataProvider value={data}>
      <main className="landing landing--black-friday-sos-sg">
        <BlackFridayIntroOverlay />
        <ContactWidget />
        <HeroSection />
        <SchoolIntroSection />
        <BlackFridayOfferSection />
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
