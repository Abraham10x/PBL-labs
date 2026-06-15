'use client'

import Image from 'next/image'

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 sm:py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          Meet our founder.
        </h2>
        <p className="text-lg text-accent font-semibold mb-12">
          Founder, Project-Based Learning Lab
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chonkea-4bL0ufqgTYa7bf7CC5XWmzf4ITSKOX.jpeg"
              alt="Joseph Chonkea, Founder of PBL Lab"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-foreground/80 text-base leading-relaxed mb-8">
              <p>
                Joseph Chonkea is a management consultant with over eight years of experience advising the Nigerian federal government and international development partners, including GIZ Germany. In 2025, the Federal Ministry of Interior awarded him the <span className="font-bold text-foreground">Project Management Excellence Award</span> for leading <span className="font-bold text-foreground">Interas</span>, the Ministry's new digital records system, recognised in national press for transforming how the Ministry operates.
              </p>

              <p>
                Alongside that consulting career, Joseph has spent <span className="font-bold text-foreground">14 years working with ambitious Nigerian teenagers</span> in private secondary schools across Abuja, Lagos, and beyond. He teaches the skills that matter:
              </p>

              <ul className="space-y-2 list-disc list-inside">
                <li>Critical thinking</li>
                <li>Innovation</li>
                <li>Collaboration and teamwork</li>
                <li>Community service</li>
                <li>Public speaking</li>
                <li>Project management</li>
                <li>Writing</li>
              </ul>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg leading-relaxed text-foreground/80">
              <p className="mb-4">
                "Most teen-entrepreneurship programmes are run by people whose only experience is teen entrepreneurship. PBL Lab is run by someone whose other full-time work is designing systems for the Nigerian federal government. Your teenager learns the real version. Not a watered-down translation."
              </p>
              <p className="font-bold not-italic text-foreground">
                – Our founder
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
