'use client'

import Image from 'next/image'
import { scrollToForm } from '@/lib/scroll-utils'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-background flex items-center justify-center px-4 pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center">
          {/* Headline */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2 text-balance">
            In 12 weeks, your teenager will launch
          </h1>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6 text-balance">
            a real venture.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg sm:text-xl text-foreground mb-2 leading-relaxed text-balance font-500">
            In public. With press present.
          </p>

          <p className="font-sans text-base sm:text-lg text-foreground/80 mb-8 leading-relaxed text-balance">
            PBL Lab is a 12-week programme for ambitious 14 to 18-year-olds in Nigeria. They identify a real problem in their community, build a solution, and launch it to the public, the press, and the community. They leave with a portfolio universities cannot ignore.
          </p>

          {/* Primary CTA */}
          <div className="mb-4">
            <button 
              onClick={scrollToForm}
              className="cursor-pointer px-8 py-4 bg-accent text-accent-foreground font-sans font-700 rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg w-full sm:w-auto"
            >
              Get The Founding Cohort Brief
            </button>
          </div>

          {/* Secondary text */}
          <p className="text-sm font-sans text-foreground/70 mb-6">
            Free PDF brief plus a 30-minute discovery call with Joseph Chonkea, our founder
          </p>
          
          <p className="text-xs font-sans text-foreground/60 border-t border-border pt-6">
            The Founding Cohort 2026 is limited to 12 teenagers. By application only.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%285%29-NTs35QWATw7Y6khKRns169Jnx5kiKt.jpeg"
            alt="PBL Lab - Nigerian teenagers collaborating on a real venture project"
            fill
            className="object-cover rounded-2xl shadow-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
