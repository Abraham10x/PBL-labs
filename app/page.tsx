import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import TrustStrip from '@/components/trust-strip'
import ProblemSection from '@/components/problem-section'
import BenefitsSection from '@/components/benefits-section'
import HowItWorks from '@/components/how-it-works'
import Differentiators from '@/components/differentiators'
import FounderSection from '@/components/founder-section'
import ProofSection from '@/components/proof-section'
import ImageGallery from '@/components/image-gallery'
import ProgrammesSection from '@/components/programmes-section'
import FAQSection from '@/components/faq-section'
import FoundingCohortForm from '@/components/founding-cohort-form'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <BenefitsSection />
        <HowItWorks />
        <Differentiators />
        <FounderSection />
        <ProofSection />
        <ImageGallery />
        <ProgrammesSection />
        <FAQSection />
        <FoundingCohortForm />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
