'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-dark.svg"
                alt="PBL Lab Logo"
                width={100}
                height={40}
                className="h-auto"
              />
            </div>
            <p className="font-sans text-sm leading-relaxed opacity-90">
              Real problems. Real ventures. Real launches.
            </p>
            <p className="font-sans text-xs opacity-75 mt-2">
              Nigeria · Founded 2026 · www.pbllab.org
            </p>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-sans font-700 text-base mb-4 uppercase tracking-wide">Programmes</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="#founding" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Founding Cohort 2026</Link></li>
              <li><Link href="#edinburgh" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Edinburgh Tour 2026</Link></li>
              <li><Link href="#techlabs" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Tech Labs Abuja</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-700 text-base mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="mailto:projectbasedlearninglab@gmail.com" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">projectbasedlearninglab@gmail.com</Link></li>
              <li><Link href="mailto:apply@pbllab.org.ng" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">apply@pbllab.org.ng</Link></li>
              <li><Link href="mailto:international@pbllab.org.ng" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">international@pbllab.org.ng</Link></li>
              <li><Link href="mailto:techlabs@pbllab.org.ng" className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">techlabs@pbllab.org.ng</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans font-700 text-base mb-4 uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="#linkedin" className="opacity-80 hover:opacity-100 transition-opacity">LinkedIn</Link></li>
              <li><Link href="#instagram" className="opacity-80 hover:opacity-100 transition-opacity">Instagram</Link></li>
              <li><Link href="#whatsapp" className="opacity-80 hover:opacity-100 transition-opacity">WhatsApp</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm opacity-80">
            &copy; {currentYear} PBL Lab. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#x" className="opacity-80 hover:opacity-100 transition-opacity" title="X">
              <span className="sr-only">X</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.693-5.867 6.693h-3.306l7.73-8.835L2.56 2.25h6.598l4.702 6.217 5.384-6.217zM17.002 18.807h1.83L6.455 4.125H4.482l12.52 14.682z" /></svg>
            </a>
            <a href="#linkedin" className="opacity-80 hover:opacity-100 transition-opacity" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="#instagram" className="opacity-80 hover:opacity-100 transition-opacity" title="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
