import '../global.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import type { Metadata } from 'next'
import { Analytics } from './components/analytics'

export const metadata: Metadata = {
  title: {
    default: 'Ludovic Lacouture',
    template: '%s | Ludovic Lacouture'
  },
  description: 'Développeur full stack JavaScript/TypeScript',
  openGraph: {
    title: 'Ludovic Lacouture',
    description: 'Développeur full stack JavaScript/TypeScript',
    url: 'https://lacoludo.com',
    siteName: 'Ludovic Lacouture',
    images: [
      {
        url: 'https://lacoludo.com/og.png',
        width: 1920,
        height: 1080
      }
    ],
    locale: 'fr-FR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    shortcut: '/favicon.png'
  }
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={[inter.variable, inter.variable].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  )
}
