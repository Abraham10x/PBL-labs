'use client'

import Image from 'next/image'
import { scrollToForm } from '@/lib/scroll-utils'

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export default function ImageGallery() {
  const images: GalleryImage[] = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.58%20%282%29-uupHhlxWAUXv8RIy5LuMAyzCYM8yyC.jpeg',
      alt: 'Three young mentees smiling together',
      caption: 'Community First',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%286%29-zxeUiSHsWbTf7KsU1P1O6FouXrt1iM.jpeg',
      alt: 'Team collaborating on laptop project',
      caption: 'Collaboration & Innovation',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%287%29-e5U4cPyWnEwBzi8ZhrNFGzPrNHqxOO.jpeg',
      alt: 'Determined graduate in cap and gown',
      caption: 'Achievement & Growth',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2819%29-mP3Kl5ROqtuZXImYebcK6OT7SYGGbL.jpeg',
      alt: 'Group of happy teenagers outdoors',
      caption: 'Joy in Learning',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2815%29-df7bXNz0qBYMUooNMtCiZdGvJbQdMb.jpeg',
      alt: 'Student engaged in classroom',
      caption: 'Active Participation',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%2811%29-BxzXimCoHmUhKkG58OtGyEEJNavFl8.jpeg',
      alt: 'Mentor guiding student at laptop',
      caption: 'Mentorship Matters',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -ml-48" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -mr-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            See PBL Lab in Action
          </h2>
          <p className="font-sans text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
            Real teenagers. Real learning. Real impact.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="font-sans font-700 text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="font-sans text-foreground/70 mb-6">
            These are real teenagers from PBL Lab cohorts, building real ventures in their communities.
          </p>
          <button 
            onClick={scrollToForm}
            className="cursor-pointer px-8 py-4 bg-accent text-accent-foreground font-sans font-700 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the Next Cohort
          </button>
        </div>
      </div>
    </section>
  )
}
