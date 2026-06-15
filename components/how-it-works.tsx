'use client'

export default function HowItWorks() {
  const stages = [
    {
      number: 1,
      weeks: 'Weeks 1–3',
      title: 'Find a real problem',
      description: 'Your teenager identifies a problem in their community that they have seen, felt, or been close enough to care about. No textbook case studies. No imaginary scenarios. The problem is real, the people affected are real, and the work matters.',
      icon: '🔍',
    },
    {
      number: 2,
      weeks: 'Weeks 4–5',
      title: 'Understand it properly',
      description: 'Before building anything, the team researches the problem. They speak to people affected. They map out everyone who needs to be involved in solving it.',
      icon: '📊',
    },
    {
      number: 3,
      weeks: 'Weeks 6–10',
      title: 'Build the solution',
      description: 'The team designs something that fits the problem. It might be a piece of technology, a campaign, a small business, or a community service.',
      icon: '🔧',
    },
    {
      number: 4,
      weeks: 'Weeks 11–12',
      title: 'Launch it publicly',
      description: 'The cohort culminates in the Grand Launch, a public event where the teenagers\' ventures are released to the world. Family, press, community members, and sponsors attend. This is not a graduation ceremony with certificates. It is a real public release of real work.',
      icon: '🚀',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative top left element */}
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full border-2 border-accent/20 -ml-20" />
      {/* Decorative bottom right element */}
      <div className="absolute bottom-10 right-0 w-48 h-48 rounded-full border-2 border-accent/10 -mr-24" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance text-center">
          Four stages. Twelve weeks. One launched venture.
        </h2>

        <p className="font-sans text-lg text-foreground/70 text-center mb-16 max-w-2xl mx-auto">
          Every PBL Lab cohort moves through the same four-stage journey. We call this the <span className="font-bold">PBL Lab Project Engine</span>.
        </p>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting line */}
          <div className="absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-accent via-accent/50 to-accent" />

          <div className="grid grid-cols-4 gap-8">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-background">
                    {stage.number}
                  </div>
                </div>

                {/* Card */}
                <div className="mt-12 bg-card border-2 border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group cursor-default">
                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">{stage.icon}</div>

                  {/* Weeks badge */}
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-4 w-full text-center">
                    {stage.weeks}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-bold text-foreground mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:via-accent/60 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline View */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {stages.map((stage, idx) => (
              <div key={idx} className="relative pl-12">
                {/* Timeline line */}
                {idx !== stages.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/30" />
                )}

                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-lg">
                  {stage.number}
                </div>

                {/* Card */}
                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="text-3xl mb-3">{stage.icon}</div>

                  {/* Weeks badge */}
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {stage.weeks}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg font-bold text-foreground mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
