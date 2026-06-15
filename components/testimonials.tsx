'use client'

import Image from 'next/image'

interface Testimonial {
  image: string
  name: string
  role: string
  quote: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2814%29-whJV7RYlZP72aDQYPNLK214wB7x8al.jpeg',
      name: 'Chibuka & Okonkwo',
      role: 'Founding Cohort Members',
      quote: 'PBL Lab taught us that real problems deserve real solutions. We launched a venture that actually changed our community.',
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2810%29-LKCXGtooQOx3jx3fabzuuIrfK2N0Fb.jpeg',
      name: 'Graduate Class 2026',
      role: 'PBL Lab Alumni',
      quote: 'The press was there. We presented our venture publicly. That confidence boost changed everything.',
    },
    {
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.58-dEUOZ0YAfuVWRwk0s8HZEatvdnZLle.jpeg',
      name: 'Cohort Participants',
      role: 'Current Students',
      quote: 'Working on real problems with real mentors. This is what education should feel like.',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Teenagers Say
          </h2>
          <p className="font-sans text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
            Hear directly from PBL Lab participants about their transformation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 border-4 border-accent">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-foreground/80 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div>
                <p className="font-sans font-700 text-foreground">{testimonial.name}</p>
                <p className="font-sans text-sm text-accent font-700">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
