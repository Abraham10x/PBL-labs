'use client'

import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false)
  
  // WhatsApp number
  const WHATSAPP_NUMBER = '+234 912 744 5009'
  const MESSAGE = 'Hello! I&apos;m interested in learning more about your programs.'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const encodedMessage = encodeURIComponent(MESSAGE)
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodedMessage}`

    if (window.self !== window.top) {
      // In iframe (preview), open in new tab
      window.open(url, '_blank')
    } else {
      // On regular page, open in current tab for mobile, new tab for desktop
      if (isMobile) {
        window.location.href = url
      } else {
        window.open(url, '_blank')
      }
    }
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        bottomInset: 'max(1.5rem, env(safe-area-inset-bottom))',
        rightInset: 'max(1.5rem, env(safe-area-inset-right))',
      }}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Message Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  )
}
