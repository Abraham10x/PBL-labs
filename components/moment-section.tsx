'use client'

import Image from 'next/image'

export default function MomentSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative line element */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gradient-to-b from-accent/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
          Picture this.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <blockquote className="text-lg sm:text-xl leading-relaxed text-foreground/80 border-l-4 border-accent pl-6 italic space-y-4">
            <p>
              Two years from now, your child is sitting across from a university admissions panel. The interviewer asks what they have done beyond their grades.
            </p>

            <p>
              Without missing a beat, your child begins to describe the venture they built and launched at sixteen. The problem it solved. The press that covered it. The work they are still doing on it today.
            </p>

            <p>
              The room shifts. The panel leans in.
            </p>

            <p className="font-bold not-italic">
              That moment is what we are building toward in 12 weeks.
            </p>
          </blockquote>

          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2009.19.57%20%284%29-1fDm2J9ln1qMFLoGJgYd1GSeLxMb.jpeg"
              alt="Teenagers collaborating on their venture project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
