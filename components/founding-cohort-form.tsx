'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS Configuration - Service ID and Template ID
const EMAILJS_SERVICE_ID = 'service_tca6wpj'
const EMAILJS_TEMPLATE_ID = 'template_7ujh83o'
const EMAILJS_PUBLIC_KEY = 'BmRxqxluOKi07zcNg' // Replace with your EmailJS public key

export default function FoundingCohortForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    teenagerName: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Initialize EmailJS on component mount
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key_here') {
      emailjs.init(EMAILJS_PUBLIC_KEY)
      console.log('[v0] EmailJS initialized successfully')
    } else {
      console.error('[v0] ERROR: EMAILJS_PUBLIC_KEY not set. Please add your public key to founding-cohort-form.tsx line 9')
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.parentName.trim() || !formData.email.trim() || !formData.teenagerName.trim()) {
      setError('Please fill in all fields')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Validate credentials
      if (EMAILJS_PUBLIC_KEY === 'your_public_key_here') {
        console.error('[v0] EMAILJS_PUBLIC_KEY is not configured')
        throw new Error('EmailJS credentials not configured. Please add your public key.')
      }

      console.log('[v0] Submitting form with data:', {
        service: EMAILJS_SERVICE_ID,
        template: EMAILJS_TEMPLATE_ID,
        parentName: formData.parentName,
        email: formData.email,
        teenagerName: formData.teenagerName
      })

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: formData.email,
          parent_name: formData.parentName,
          teenager_name: formData.teenagerName,
          from_name: 'PBL Lab',
          email: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )

      console.log('[v0] EmailJS response:', response)

      if (response.status === 200) {
        setSubmitted(true)
        console.log('[v0] Form submitted successfully')
        
        // Trigger PDF download (optional)
        setTimeout(() => {
          const link = document.createElement('a')
          link.href = '/PBL_Lab_Founding_Cohort_Brief.pdf'
          link.download = 'PBL_Lab_Founding_Cohort_Brief.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }, 500)
      }

    } catch (error) {
      console.error('[v0] Form submission error:', error)
      console.error('[v0] Error details:', error instanceof Error ? error.message : String(error))
      setError('There was an error submitting your form. Please try again or contact us directly at projectbasedlearninglab@gmail.com')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="founding-cohort-form" className="py-20 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -ml-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -mr-40" />

      <div className="max-w-2xl mx-auto relative z-10">
        {!submitted ? (
          <>
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance text-center">
              Get The Founding Cohort Brief
            </h2>

            <p className="text-lg text-foreground/70 text-center mb-12">
              Three fields. One brief. One discovery call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 border-2 border-border/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 hover:border-accent/30 transition-all duration-300">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="parentName" className="block font-sans font-bold text-foreground mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Parent or guardian"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans font-bold text-foreground mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="teenagerName" className="block font-sans font-bold text-foreground mb-2">
                  Your teenager&apos;s name
                </label>
                <input
                  type="text"
                  id="teenagerName"
                  name="teenagerName"
                  value={formData.teenagerName}
                  onChange={handleChange}
                  placeholder="Teenager&apos;s name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer px-8 py-4 bg-accent text-accent-foreground font-sans font-bold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity text-lg"
              >
                {isLoading ? 'Submitting...' : 'Get The Founding Cohort Brief'}
              </button>

              <p className="text-sm text-foreground/60 text-center">
                We&apos;ll email you the brief and book a 30-minute discovery call with Joseph.
              </p>
            </form>
          </>
        ) : (
          <div className="bg-card border-2 border-accent rounded-2xl p-12 text-center">
            <div className="mb-4 text-4xl">✨</div>
            <h3 className="font-sans text-3xl font-bold text-foreground mb-4">
              Thank you!
            </h3>
            <p className="text-lg text-foreground/70 mb-6">
              The Founding Cohort Brief is on its way to your inbox. Check your email shortly.
            </p>
            <p className="text-foreground/60 mb-8">
              Joseph will reach out to schedule your 30-minute discovery call.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({ parentName: '', email: '', teenagerName: '' })
              }}
              className="px-6 py-2 bg-accent/10 text-accent font-bold rounded-lg hover:bg-accent/20 transition-colors"
            >
              Submit Another
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
