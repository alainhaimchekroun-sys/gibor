import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Chatbot } from '@/components/chatbot'
import './globals.css'

const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gibor-institute.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gibor Institute | Mémoire des lignées historiques de la Méditerranée',
    template: '%s | Gibor Institute'
  },
  description: 'Le Gibor Institute, association loi 1901, recherche, préserve et transmet la mémoire des lignées historiques méconnues de la Méditerranée : Dona Gracia Nasi, les réseaux séfarades et les mémoires juives et davidiques, par des expositions, podcasts, archives et ressources pédagogiques.',
  keywords: [
    'Gibor Institute',
    'Dona Gracia Nasi',
    'histoire séfarade',
    'mémoire juive',
    'lignée davidique',
    'association loi 1901',
    'podcast histoire',
    'ressources pédagogiques',
    'Méditerranée',
    'Sépharades',
    'archives historiques',
    'transmission mémoire'
  ],
  authors: [{ name: 'Gibor Institute', url: siteUrl }],
  creator: 'Gibor Institute',
  publisher: 'Gibor Institute',
  generator: 'v0.app',
  applicationName: 'Gibor Institute',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Gibor Institute',
    title: 'Gibor Institute | Mémoire des lignées historiques de la Méditerranée',
    description: 'Rechercher, préserver et transmettre la mémoire des lignées historiques méconnues de la Méditerranée, autour de Dona Gracia Nasi et des réseaux séfarades.',
    images: [
      {
        url: '/images/lion-water.jpg',
        width: 1200,
        height: 630,
        alt: 'Gibor Institute - Lion doré, symbole de la lignée davidique',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gibor Institute | Mémoire des lignées de la Méditerranée',
    description: 'Association loi 1901 dédiée à la recherche, la préservation et la transmission des mémoires séfarades et davidiques.',
    images: ['/images/lion-water.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'fr-FR': siteUrl,
    },
  },
  category: 'education',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1a2e' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NGO',
      '@id': `${siteUrl}/#organization`,
      name: 'Gibor Institute',
      url: siteUrl,
      description: 'Association loi 1901 dédiée à la recherche, la préservation et la transmission des mémoires des lignées historiques méconnues de la Méditerranée, autour de Dona Gracia Nasi et des réseaux séfarades.',
      logo: `${siteUrl}/images/logo-gibor.jpg`,
      foundingDate: String(new Date().getFullYear()),
      knowsAbout: ['Histoire séfarade', 'Dona Gracia Nasi', 'Mémoire juive', 'Lignée davidique', 'Méditerranée'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Gibor Institute',
      description: 'Site officiel du Gibor Institute',
      publisher: {
        '@id': `${siteUrl}/#organization`
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'PodcastSeries',
      '@id': `${siteUrl}/#podcast`,
      name: 'Gibor, le podcast',
      description: "La voix éducative officielle du Gibor Institute.",
      url: `${siteUrl}/podcast`,
      author: {
        '@id': `${siteUrl}/#organization`
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Chatbot />
        <Analytics />
      {/* v0 – built-with badge */}
  <div dangerouslySetInnerHTML={{ __html: `<div id="v0-built-with-button-eca576d6-4abc-4222-b504-36968da8f27a" style="
border: 1px solid hsl(0deg 0% 100% / 12%);
position: fixed;
bottom: 24px;
right: 24px;
z-index: 1000;
background: #121212;
color: white;
padding: 8px 12px;
border-radius: 8px;
font-weight: 400;
font-size: 14px;
box-shadow: 0 2px 8px rgba(0,0,0,0.12);
letter-spacing: 0.02em;
transition: all 0.2s;
display: flex;
align-items: center;
gap: 4px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
">
<a
  href="https://v0.app/chat/api/open/built-with-v0/b_wMgvQ5u2flm?ref=TOU5BY"
  target="_blank"
  rel="noopener"
  style="
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
  "
>
  Built with
  <svg
    fill="currentColor"
    viewBox="0 0 147 70"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 20px; height: 20px;"
  >
    <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
    <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
  </svg>
</a>

<button
  onclick="document.getElementById('v0-built-with-button-eca576d6-4abc-4222-b504-36968da8f27a').style.display='none'"
  onmouseenter="this.style.opacity='1'"
  onmouseleave="this.style.opacity='0.7'"
  style="
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 2px;
    margin-left: 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    opacity: 0.7;
    transition: opacity 0.2s;
    transform: translateZ(0);
  "
  aria-label="Close"
>
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
</button>

<span style="
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
">
  v0
</span>
</div>` }} />
</body>
    </html>
  )
}
