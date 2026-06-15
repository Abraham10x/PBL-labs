'use client'

import { Zap, Award, BookOpen } from 'lucide-react'

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'A real, launched venture',
      description: 'Not a project they handed in. Not a slide deck they presented in class. A genuine social venture, operating in the community, that the public has seen and can engage with. It belongs to your teenager. They can keep growing it long after the programme ends.',
      number: '01',
    },
    {
      icon: Award,
      title: 'Public recognition under your family\'s full control',
      description: 'The cohort ends in a Grand Launch: a public event where each team presents their working venture to family, community members, journalists, and invited sponsors. Your family is in control of your teenager\'s visibility—every photograph or video featuring your child is submitted to you for review before any publication.',
      number: '02',
    },
    {
      icon: BookOpen,
      title: 'A portfolio that universities cannot ignore',
      description: 'We document everything your teenager does: the research they conducted, the people they interviewed, the prototypes they built, the iterations they survived. This becomes portfolio over paper: a real body of work that proves capability, not a piece of paper that claims it.',
      number: '03',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-16 text-balance text-center">
          Three things your teenager will own at the end of the 12 weeks.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="group relative h-full">
                {/* Card background glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                
                {/* Main Card */}
                <div className="relative bg-card/50 border border-border/50 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col hover:border-accent/30 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {benefit.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-8 inline-block p-3 bg-accent/10 rounded-xl">
                    <Icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-4 pr-8">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-8 pt-8 border-t border-accent/20 group-hover:border-accent/40 transition-colors duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
