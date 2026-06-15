'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What if my teenager has no entrepreneurship experience?',
      answer: 'Perfect. PBL Lab is designed for ambitious teenagers with potential, not prior experience. We teach the entire methodology from first principles. Your teenager will be alongside peers who are equally new to this. That is the point.',
    },
    {
      question: 'How much of this is online vs. in-person?',
      answer: 'The Founding Cohort 2026 is primarily in-person in Nigeria. We meet weekly for intensive work sessions, mentorship, and team collaboration. Some preparation and research can happen remotely, but the core work is face-to-face.',
    },
    {
      question: 'What is the Grand Launch like?',
      answer: 'The Grand Launch is a professional public event. Your teenager\'s school is invited. So is family, press, community members, mentors, and sponsors. It is celebratory but professional. Your family controls what footage of your child enters the public record. Every photograph or video featuring your teenager is submitted to you for review before any publication. If you prefer your child not appear in external press, we accommodate that.',
    },
    {
      question: 'Can my teenager keep growing their venture after the 12 weeks?',
      answer: 'Yes. Absolutely. The 12-week programme is the launchpad. Your teenager owns the venture they build. They can run it, grow it, scale it, or pivot it completely after the programme ends. We give them the tools and the launch platform. What they do next is entirely up to them.',
    },
    {
      question: 'What if my teenager\'s venture doesn\'t "succeed"?',
      answer: 'We measure success differently than you might expect. A successful cohort outcome is one where your teenager has identified a real problem, built a real solution, tested it with real people, and shipped it publicly. Whether it becomes a thriving long-term business is a separate question, and one they can decide for themselves after the programme ends. The portfolio of work they build during the 12 weeks—the research, the iterations, the failures, the learnings—is the real asset.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-16 text-balance">
          The questions parents ask before applying
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-foreground/5 transition-colors"
              >
                <span className="font-sans font-bold text-foreground text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-accent transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-foreground/2 border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
