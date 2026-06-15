'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { scrollToForm } from '@/lib/scroll-utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-card border-b border-border shadow-sm'
          : 'bg-background'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-dark.svg"
                alt="PBL Lab"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('problem')} className="cursor-pointer font-sans text-sm font-400 text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => handleNavClick('how-it-works')} className="cursor-pointer font-sans text-sm font-400 text-foreground/80 hover:text-foreground transition-colors">
              Methodology
            </button>
            <button onClick={() => handleNavClick('programmes')} className="cursor-pointer font-sans text-sm font-400 text-foreground/80 hover:text-foreground transition-colors">
              Programs
            </button>
            <button onClick={() => handleNavClick('founder')} className="cursor-pointer font-sans text-sm font-400 text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <button onClick={scrollToForm} className="cursor-pointer px-6 py-2 rounded-lg bg-accent text-accent-foreground font-sans text-sm font-700 hover:opacity-90 transition-opacity">
              Get The Brief
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <button onClick={() => handleNavClick('problem')} className="cursor-pointer block w-full text-left py-2 font-sans text-sm text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => handleNavClick('how-it-works')} className="cursor-pointer block w-full text-left py-2 font-sans text-sm text-foreground/80 hover:text-foreground transition-colors">
              Methodology
            </button>
            <button onClick={() => handleNavClick('programmes')} className="cursor-pointer block w-full text-left py-2 font-sans text-sm text-foreground/80 hover:text-foreground transition-colors">
              Programs
            </button>
            <button onClick={() => handleNavClick('founder')} className="cursor-pointer block w-full text-left py-2 font-sans text-sm text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <button onClick={scrollToForm} className="cursor-pointer w-full mt-4 px-6 py-2 rounded-lg bg-accent text-accent-foreground font-sans text-sm font-700 hover:opacity-90 transition-opacity">
              Get The Brief
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
