'use client'

import Image from 'next/image'

export default function ImpactSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Impact. Real Change.
          </h2>
          <p className="font-sans text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
            Our teenagers don't just learn. They launch ventures that solve real problems in their communities.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2818%29-OqzXol3jhVZ51QShnK4ts1agG3bEoT.jpeg"
                alt="PBL Lab students collaborating outdoors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Week 1-4: Problem Identification
                </h3>
                <p className="font-sans text-foreground/70">
                  Teenagers identify real problems in their community. What issue keeps them up at night?
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Week 5-8: Solution Design
                </h3>
                <p className="font-sans text-foreground/70">
                  They design a solution, test it, iterate. Real mentors guide them through real startup methodology.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Week 9-12: Public Launch
                </h3>
                <p className="font-sans text-foreground/70">
                  They launch publicly. The press is there. Their community celebrates. Universities notice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">100+</div>
            <p className="font-sans text-foreground/70">Teenagers trained through PBL methodology</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50+</div>
            <p className="font-sans text-foreground/70">Real ventures launched with press coverage</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">14</div>
            <p className="font-sans text-foreground/70">Years of proven social entrepreneurship impact</p>
          </div>
        </div>
      </div>
    </section>
  )
}
