'use client'

export default function Offerings() {
  const offerings = [
    {
      title: 'Founding Cohort 2026',
      description: 'A 12-week social entrepreneurship cohort. Founder-led. In Nigeria. Limited to 12 teenagers, ages 14 to 18.',
      isPrimary: true,
      features: ['Real venture launch', 'Public Grand Launch event', 'Press coverage', 'Portfolio documentation'],
      price: '₦200,000 - ₦300,000',
      payment: 'Payment plan: 40% deposit + 2 monthly instalments',
    },
    {
      title: 'Edinburgh Tour 2026',
      description: 'International learning tour in partnership with SAGE United Kingdom. Experience global entrepreneurship firsthand alongside your cohort.',
      isPrimary: false,
      features: ['International exposure', 'SAGE partnership', 'Cross-cultural learning', 'Global network'],
    },
    {
      title: 'Tech Labs Abuja',
      description: 'Hands-on technology programme for aspiring builders. Learn to code, design, and deploy real solutions with industry mentors.',
      isPrimary: false,
      features: ['Hands-on coding', 'Real projects', 'Industry mentors', 'Tech portfolio'],
    },
  ]

  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Learning Programs
          </h2>
          <p className="font-sans text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Choose the program that fits your goals and learning style. All paths lead to transformation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                offering.isPrimary
                  ? 'lg:scale-105 bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:border-accent'
              }`}
            >
              {/* Card Content */}
              <div className="p-8 sm:p-10 flex flex-col h-full">
                {offering.isPrimary && (
                  <div className="inline-block w-fit mb-4">
                    <span className="bg-accent text-accent-foreground text-xs font-sans font-500 px-3 py-1 rounded-full">
                      Featured Program
                    </span>
                  </div>
                )}

                <h3 className={`font-heading text-2xl sm:text-3xl font-bold mb-4 ${
                  offering.isPrimary ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {offering.title}
                </h3>

                <p className={`font-sans text-base leading-relaxed mb-6 flex-grow ${
                  offering.isPrimary ? 'text-primary-foreground/90' : 'text-foreground/70'
                }`}>
                  {offering.description}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {offering.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <span className={`text-lg mt-0.5 ${
                        offering.isPrimary ? 'text-accent' : 'text-accent'
                      }`}>
                        ✓
                      </span>
                      <span className={`font-sans text-sm ${
                        offering.isPrimary ? 'text-primary-foreground/80' : 'text-foreground/70'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-4 rounded-lg font-sans font-500 transition-colors ${
                  offering.isPrimary
                    ? 'bg-accent text-accent-foreground hover:opacity-90'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}>
                  {offering.isPrimary ? 'Apply Now' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
