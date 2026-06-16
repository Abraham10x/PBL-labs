import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  variable: '--font-sans',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PBL Lab - Real Ventures. Teen-Led. Nigeria.',
  description: 'In 12 weeks, your teenager will launch a real venture. Join the Founding Cohort 2026 and experience real problems, real ventures, and real launches.',
  keywords: ['entrepreneurship', 'teens', 'Nigeria', 'venture', 'youth', 'learning', 'startup', 'teenagers'],
  authors: [{ name: 'PBL Lab' }],
  creator: 'PBL Lab',
  publisher: 'PBL Lab',
  metadataBase: new URL('https://www.pbllab.org'),
  alternates: {
    canonical: 'https://www.pbllab.org',
  },
  generator: 'v0.app',
  referrer: 'strict-origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  // Open Graph - Facebook, LinkedIn, WhatsApp
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.pbllab.org',
    siteName: 'PBL Lab',
    title: 'PBL Lab - Real Ventures. Teen-Led. Nigeria.',
    description: 'In 12 weeks, your teenager will launch a real venture. Real problems. Real ventures. Real launches.',
    images: [
      {
        url: 'https://www.pbllab.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PBL Lab - Real Ventures for Teenagers',
        type: 'image/png',
      },
      {
        url: 'https://www.pbllab.org/images/logo-dark.svg',
        width: 200,
        height: 200,
        alt: 'PBL Lab Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@pbllab',
    creator: '@pbllab',
    title: 'PBL Lab - Real Ventures. Teen-Led. Nigeria.',
    description: 'In 12 weeks, your teenager will launch a real venture. Join the Founding Cohort 2026.',
    images: ['https://www.pbllab.org/og-image.png'],
  },
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'PBL Lab',
  },
  // Additional meta tags
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${rubik.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics and scripts */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        
        {/* JSON-LD Structured Data for Rich Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'PBL Lab',
              description: 'Project-Based Learning Lab for Nigerian Teenagers',
              url: 'https://www.pbllab.org',
              logo: 'https://www.pbllab.org/images/logo-dark.svg',
              image: 'https://www.pbllab.org/og-image.png',
              foundingDate: '2026',
              areaServed: {
                '@type': 'Country',
                name: 'Nigeria',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
                addressLocality: 'Abuja',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'projectbasedlearninglab@gmail.com',
                telephone: '+234-912-744-5009',
              },
              sameAs: [
                'https://www.linkedin.com/company/pbl-lab',
                'https://www.instagram.com/pbllab',
                'https://x.com/pbllab',
              ],
              knows: {
                '@type': 'Person',
                name: 'Joseph Chonkea',
                description: 'Founder, 14 years experience working with ambitious Nigerian teenagers',
              },
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PBL Lab',
              alternateName: 'Project Based Learning Lab',
              url: 'https://www.pbllab.org',
              logo: 'https://www.pbllab.org/images/logo-dark.svg',
              description: 'In 12 weeks, your teenager launches a real venture. Real problems. Real ventures. Real launches.',
              foundingDate: '2026',
              founder: {
                '@type': 'Person',
                name: 'Joseph Chonkea',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Registration',
                email: 'projectbasedlearninglab@gmail.com',
                telephone: '+234-912-744-5009',
                url: 'https://www.pbllab.org',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
