'use client'

import Image from 'next/image'

export default function TrustStrip() {
  const partnerRows = [
    {
      title: 'Our founder\'s federal and institutional work',
      partners: [
        { name: 'Federal Ministry of Interior', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Minister%20of%20interior-9tefD4pJwScKZSwWJsFPzxUmnbTRtE.png' },
        { name: 'GIZ', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giz-GjoHwIGDz8kG6YBIOMDvBBgscsLhZQ.png' },
        { name: 'Fidelity Bank', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fidelity-IJOJxawZv3RldIFQqjdBoLwV5FaNZ4.png' },
        { name: 'Kaduna State Bureau of Statistics', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kaduna%20State%20Bureau%20of%20Statistics-YbfTDcTut8pjpTsXtgBHVpSfy1GxRA.png' },
        { name: 'National Sugar Development Council', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/National%20Sugar%20Development%20Concil-zfPzpEVtWFJm4xBShBFTxtGsJWqxjn.png' },
      ],
    },
    {
      title: 'International partner for the Edinburgh tour',
      partners: [
        { name: 'SAGE United Kingdom', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAGE-e6VK34xcDxDeQo0S33QasVO8hV80wm.png' },
      ],
    },
    {
      title: 'Featured in',
      partners: [
        { name: 'Daily Times Nigeria', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20daily%20times-bbJfI7reVXnvwUYnsDYO6JNhUarXRA.png' },
        { name: 'Leadership Newspaper', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership-Zt5LGoEkEC8v16W7cn4X3FXQAVSlt8.png' },
        { name: 'The Whistler', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20whistle-4poBi1pXgwZdhqYBpCczjHGEhou3y9.png' },
      ],
    },
  ]

  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
          Built on a track record that speaks for itself.
        </h2>

        {/* Partner rows */}
        <div className="space-y-16">
          {partnerRows.map((row, rowIdx) => (
            <div key={rowIdx}>
              <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-8 text-center">
                {row.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 items-center">
                {row.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-16 sm:h-20 px-4"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="object-contain max-h-16 sm:max-h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Our founder, <span className="font-bold">Joseph Chonkea</span>, was awarded the <span className="font-bold">2025 Project Management Excellence Award</span> by the Federal Ministry of Interior for leading the Ministry's digital transformation. The same approach that earned that recognition is what your teenager will learn at PBL Lab, scaled to their level.
          </p>
        </div>
      </div>
    </section>
  )
}
