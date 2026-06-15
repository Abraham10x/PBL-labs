'use client'

export default function Differentiators() {
  const differentiators = [
    {
      title: 'Your teenager builds a real, working venture, not a project file',
      description: 'Most programmes end with your teenager handing in a report, a presentation, or a certificate. Ours ends with them handing the public a launched venture they can keep growing.',
      icon: '📦',
    },
    {
      title: 'We use multiple skills together, not one skill in isolation',
      description: 'A coding bootcamp teaches your teen to code. A business plan competition teaches them to write a business plan. PBL Lab teaches them to combine all of these, because real social entrepreneurship needs technology, storytelling, advocacy, and business sense working together.',
      icon: '🎯',
    },
    {
      title: 'The problems are real. The launches are public',
      description: 'Every project tackles a genuine Nigerian community problem. Every cohort ends with a public Grand Launch event, not a private classroom showcase. This forces the work to be real, because the public will see it.',
      icon: '🌍',
    },
    {
      title: 'We use methods recognised at the highest levels of Nigerian government',
      description: 'Joseph Chonkea was awarded the 2025 Project Management Excellence Award by Nigeria\'s Federal Ministry of Interior. When we say "federal-grade," we mean the standard required when the Federal Ministry of Interior holds you accountable for results.',
      icon: '⭐',
    },
    {
      title: 'We are honest about what we will not promise',
      description: 'We will not promise a university scholarship. We will not promise overnight wealth. We will not promise the programme is a substitute for school. What we promise is a real piece of work, a real portfolio, and the experience of having shipped something in public before they turn 18.',
      icon: '💡',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -ml-40 -mb-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-16 text-balance">
          Five reasons parents choose PBL Lab over the alternatives.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
          {differentiators.map((diff, idx) => (
            <div 
              key={idx} 
              className="group relative bg-card/50 border border-border/50 rounded-2xl p-8 sm:p-10 hover:bg-card hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex gap-6 lg:gap-8">
                {/* Number and Icon Container */}
                <div className="flex-shrink-0 flex items-start gap-4 pt-1">
                  {/* Number badge */}
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent/20 text-accent font-bold text-lg ring-2 ring-accent/30 group-hover:ring-accent/60 group-hover:bg-accent/30 transition-all duration-300 flex-shrink-0">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-3xl pt-0.5">{diff.icon}</div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                    {diff.description}
                  </p>

                  {/* Decorative bottom border */}
                  <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-accent to-transparent rounded-full group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
