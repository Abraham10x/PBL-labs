'use client'

import { scrollToForm } from '@/lib/scroll-utils'

export default function ProgrammesSection() {
  const handleEdinburghClick = () => {
    window.location.href = 'mailto:international@pbllab.org.ng?subject=Edinburgh%20Tour%202026%20Interest'
  }

  const handleTechLabsClick = () => {
    window.location.href = 'mailto:techlabs@pbllab.org.ng?subject=Tech%20Labs%20Abuja%20Inquiry'
  }

  return (
    <section id="programmes" className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -mr-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -ml-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance text-center">
          Three ways your teenager can engage with PBL Lab.
        </h2>

        <p className="text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          The Founding Cohort is our flagship 2026 programme. We also run an international tour and a hands-on technology programme. All three are powered by the same methodology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Founding Cohort - Emphasised */}
          <div className="md:col-span-1 md:row-span-1 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
            <div className="relative bg-card border-2 border-accent rounded-2xl p-8 h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                ⭐ Flagship
              </div>
              
              <h3 className="font-sans text-2xl font-bold text-foreground mb-3">
                The Founding Cohort 2026
              </h3>

              <div className="space-y-4 text-foreground/70 flex-grow mb-8">
                <p>
                  A 12-week social entrepreneurship cohort. Founder-led. In Nigeria. Limited to <span className="font-bold text-foreground">12 teenagers</span>. Ages 14 to 18.
                </p>

                <div>
                  <p className="font-bold text-foreground mb-1">Tuition: ₦200,000–300,000</p>
                  <p className="text-sm">Payment plan available: 40% deposit, balance in two instalments via Paystack.</p>
                </div>

                <p className="text-sm font-semibold text-accent">
                  Applications open now. Rolling admission.
                </p>
              </div>

              <button 
                onClick={scrollToForm}
                className="w-full px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get The Founding Cohort Brief
              </button>
            </div>
          </div>

          {/* Edinburgh Tour */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 flex flex-col group hover:border-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
              🌍 International
            </div>

            <h3 className="font-sans text-2xl font-bold text-foreground mb-3">
              Edinburgh International Tour 2026
            </h3>

            <div className="space-y-4 text-foreground/70 flex-grow mb-8">
              <p>
                A two-week international immersion in Edinburgh, Scotland, in partnership with SAGE United Kingdom. Build, pitch, and network with global youth entrepreneurs.
              </p>

              <div>
                <p className="font-bold text-foreground mb-1">Ages: 16–18</p>
                <p className="font-bold text-foreground">Tuition: £TBD</p>
              </div>

              <p className="text-sm font-semibold text-accent">
                Spots are limited. Early interest welcome.
              </p>
            </div>

            <button 
              onClick={handleEdinburghClick}
              className="w-full px-6 py-3 bg-accent/10 text-accent font-bold rounded-lg hover:bg-accent/20 group-hover:text-accent group-hover:bg-accent/20 transition-colors"
            >
              Reserve Your Place
            </button>
          </div>

          {/* Tech Labs */}
          <div className="bg-card border-2 border-border rounded-2xl p-8 flex flex-col group hover:border-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
              💻 Technology
            </div>

            <h3 className="font-sans text-2xl font-bold text-foreground mb-3">
              Tech Labs Abuja
            </h3>

            <div className="space-y-4 text-foreground/70 flex-grow mb-8">
              <p>
                A hands-on technology programme focused on building real software solutions. Designed for teens already coding or ready to learn.
              </p>

              <div>
                <p className="font-bold text-foreground mb-1">Ages: 14–18</p>
                <p className="font-bold text-foreground">Location: Abuja</p>
              </div>

              <p className="text-sm font-semibold text-accent">
                Opening term TBD.
              </p>
            </div>

            <button 
              onClick={handleTechLabsClick}
              className="w-full px-6 py-3 bg-accent/10 text-accent font-bold rounded-lg hover:bg-accent/20 group-hover:text-accent group-hover:bg-accent/20 transition-colors"
            >
              Enquire About Tech Labs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
