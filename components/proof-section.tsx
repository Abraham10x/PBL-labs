'use client'

import Image from 'next/image'

export default function ProofSection() {
  const stories = [
    {
      title: 'A device that monitors water and air quality',
      description: 'A team of Nigerian secondary-school students designed and built a community device to monitor water and air quality in their environment. Their work was covered by Daily Times Nigeria.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%288%29-0anKpcQUUGwKFtS1r17d8SqcDOYHSl.jpeg',
      alt: 'Student team working on water quality monitoring device',
    },
    {
      title: 'Second place at Nigeria\'s premier national youth entrepreneurship competition',
      description: 'The Edge Sage team from Hillside School, Gwarimpa, Abuja, placed second at Nigeria\'s premier national youth entrepreneurship competition, working under the methodology that now powers PBL Lab.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%285%29-21kCZlvCZ1MsdhgeAj6NQ6inRX79y4.jpeg',
      alt: 'Edge Sage team from Hillside School presenting',
    },
    {
      title: 'Representing Nigeria internationally in Edinburgh, Scotland',
      description: 'A team from Marist College was selected to represent Nigeria at the global youth entrepreneurship contest held in Edinburgh, Scotland.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%287%29-ULwTdO0YeVsPYH8Fzk8WITbEx3eZl1.jpeg',
      alt: 'Marist College team representing Nigeria in Edinburgh',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          The work our teenagers have done.
        </h2>

        <p className="text-lg text-foreground/70 mb-16 max-w-2xl">
          PBL Lab was formally registered in 2026, but the methodology behind it has been in active practice for 14 years through our founder's work in Nigerian private secondary schools. Below are some of the outcomes from teams Joseph has coached.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {stories.map((story, idx) => (
            <div key={idx} className="flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative w-full h-[250px]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans text-xl font-bold text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-border pt-12">
          <p className="text-foreground/70 mb-8">
            <span className="font-bold text-foreground">As featured in:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 items-center">
            <div className="flex items-center justify-center h-16 sm:h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20daily%20times-bbJfI7reVXnvwUYnsDYO6JNhUarXRA.png"
                alt="Daily Times Nigeria"
                width={140}
                height={80}
                className="object-contain max-h-16 sm:max-h-20"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leadership-Zt5LGoEkEC8v16W7cn4X3FXQAVSlt8.png"
                alt="Leadership Newspaper"
                width={140}
                height={80}
                className="object-contain max-h-16 sm:max-h-20"
              />
            </div>
            <div className="flex items-center justify-center h-16 sm:h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20whistle-4poBi1pXgwZdhqYBpCczjHGEhou3y9.png"
                alt="The Whistler"
                width={140}
                height={80}
                className="object-contain max-h-16 sm:max-h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
