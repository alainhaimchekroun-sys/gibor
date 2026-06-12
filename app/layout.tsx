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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gibor-livre.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GIBOR - Les Héros du Temps | Roman Historique par Alain Henri Chekroun',
    template: '%s | GIBOR - Les Héros du Temps'
  },
  description: 'Plongez dans GIBOR, une saga épique traversant 2500 ans d\'histoire, de Babylone à l\'Empire ottoman. Découvrez le destin extraordinaire de Dona Gracia Nassi et des héros oubliés de la lignée davidique. Roman historique disponible sur Amazon.',
  keywords: [
    'GIBOR',
    'Les Héros du Temps',
    'Alain Henri Chekroun',
    'roman historique',
    'Dona Gracia Nassi',
    'histoire juive',
    'Empire ottoman',
    'Babylone',
    'saga épique',
    'livre histoire',
    'roman français',
    'lignée davidique',
    'Sépharades',
    'Inquisition'
  ],
  authors: [{ name: 'Alain Henri Chekroun', url: siteUrl }],
  creator: 'Alain Henri Chekroun',
  publisher: 'Alain Henri Chekroun',
  generator: 'v0.app',
  applicationName: 'GIBOR - Les Héros du Temps',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'book',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'GIBOR - Les Héros du Temps',
    title: 'GIBOR - Les Héros du Temps | Une Saga Épique par Alain Henri Chekroun',
    description: 'Une fresque historique monumentale traversant 2500 ans d\'histoire. De Babylone à l\'Empire ottoman, suivez le destin des héros oubliés de la lignée davidique et l\'extraordinaire Dona Gracia Nassi.',
    images: [
      {
        url: '/images/gibor-cover-official.jpg',
        width: 1200,
        height: 630,
        alt: 'GIBOR - Les Héros du Temps - Couverture du livre par Alain Henri Chekroun',
        type: 'image/jpeg',
      },
      {
        url: '/images/lion-water.jpg',
        width: 800,
        height: 600,
        alt: 'GIBOR - Lion doré symbolisant la lignée davidique',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GIBOR - Les Héros du Temps | Roman Historique',
    description: 'Une saga épique traversant 2500 ans d\'histoire, de Babylone à l\'Empire ottoman. Découvrez le destin de Dona Gracia et des héros oubliés.',
    images: ['/images/gibor-cover-official.jpg'],
    creator: '@AlainChekroun',
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
  category: 'literature',
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
      '@type': 'Book',
      '@id': `${siteUrl}/#book`,
      name: 'GIBOR - Les Héros du Temps',
      author: {
        '@type': 'Person',
        '@id': `${siteUrl}/#author`,
        name: 'Alain Henri Chekroun',
      },
      description: 'Une saga épique traversant 2500 ans d\'histoire, de Babylone à l\'Empire ottoman. Découvrez le destin extraordinaire de Dona Gracia Nassi et des héros oubliés de la lignée davidique.',
      genre: ['Roman historique', 'Fiction historique', 'Saga familiale'],
      inLanguage: 'fr',
      bookFormat: 'https://schema.org/Paperback',
      image: `${siteUrl}/images/gibor-cover-official.jpg`,
      url: siteUrl,
      workExample: [
        {
          '@type': 'Book',
          bookFormat: 'https://schema.org/Paperback',
          name: 'GIBOR - Les Héros du Temps (Broché)',
        },
        {
          '@type': 'Book',
          bookFormat: 'https://schema.org/AudioBook',
          name: 'GIBOR - Les Héros du Temps (Audio)',
        }
      ]
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#author`,
      name: 'Alain Henri Chekroun',
      url: siteUrl,
      description: 'Auteur de GIBOR - Les Héros du Temps, une saga épique traversant les siècles.',
      image: `${siteUrl}/images/author.jpg`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'GIBOR - Les Héros du Temps',
      description: 'Site officiel du roman GIBOR - Les Héros du Temps par Alain Henri Chekroun',
      publisher: {
        '@id': `${siteUrl}/#author`
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'GIBOR - Les Héros du Temps | Roman Historique par Alain Henri Chekroun',
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      about: {
        '@id': `${siteUrl}/#book`
      },
      description: 'Découvrez GIBOR, une fresque historique monumentale traversant 2500 ans d\'histoire.',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Le Livre',
          item: `${siteUrl}/#livre`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Commander',
          item: `${siteUrl}/#commander`,
        },
      ],
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
