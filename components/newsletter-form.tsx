'use client'

import { useState, useEffect } from 'react'

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    parent_name: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Inject UTM parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utmSource = params.get('utm_source') || 'organic'
    const utmMedium = params.get('utm_medium') || 'direct'
    const utmCampaign = params.get('utm_campaign') || 'general'
    
    // Store UTM params for form submission
    const hiddenFields = {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
    }
    
    console.log('[v0] UTM params:', hiddenFields)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate
    if (!formData.parent_name || !formData.email || !formData.phone) {
      alert('Please fill in all fields')
      return
    }

    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ parent_name: '', email: '', phone: '' })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="bg-card py-16 sm:py-24 lg:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Get the Founding Cohort Brief
          </h2>
          <p className="font-sans text-lg text-foreground/70 text-balance">
            Free PDF brief. Plus a 30-minute discovery call with Joseph Chonkea, our founder.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Parent Name Field */}
          <div>
            <label htmlFor="parent_name" className="block font-sans text-sm font-700 text-foreground mb-2">
              Your Full Name
            </label>
            <input
              type="text"
              id="parent_name"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background text-foreground placeholder:text-foreground/50"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-sans text-sm font-700 text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background text-foreground placeholder:text-foreground/50"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block font-sans text-sm font-700 text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 (0) XXX XXX XXXX"
              className="w-full px-4 py-3 border border-border rounded-lg font-sans text-base focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background text-foreground placeholder:text-foreground/50"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            {submitted ? (
              <div className="w-full py-3 px-4 rounded-lg bg-accent/10 border border-accent/30 text-accent font-sans font-700 text-center">
                Thank you! Check your email for the Founding Cohort Brief.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-accent text-accent-foreground font-sans font-700 text-base hover:opacity-90 transition-opacity"
              >
                Send Me the Brief
              </button>
            )}
          </div>
        </form>

        {/* Footer Text */}
        <p className="text-center text-sm font-sans text-foreground/60 mt-6">
          We respect your privacy. Your information is secure with us.
        </p>
      </div>
    </section>
  )
}
