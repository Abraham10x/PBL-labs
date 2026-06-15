'use client'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-12 text-balance">
          The Nigerian education system was not built for the world your teenager will live in.
        </h2>

        <div className="space-y-6 text-foreground/80 text-base sm:text-lg leading-relaxed">
          <p>
            School teaches your child how to pass exams. It does not always teach them how to identify a real problem, design a real solution, work with real stakeholders, and put a real piece of work in front of the public.
          </p>

          <p>
            By 18, most Nigerian teenagers can recite what they have memorised. Few can show you something they have built. Universities are noticing. Employers are noticing. International programmes are noticing.
          </p>

          <p>
            If your teenager is ambitious, curious, and frustrated with passive learning, school alone is not enough. They need a space where they are expected to build, expected to ship, and expected to stand in front of the public with work they can defend.
          </p>

          <p className="font-600 text-foreground">
            That is the space we have spent 14 years building.
          </p>
        </div>
      </div>
    </section>
  )
}
