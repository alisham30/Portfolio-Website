import React from 'react'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Alisha Mathias - Portfolio',
  description: 'B.Tech CSE-DS Student | Aspiring Data Engineer & Full-Stack Developer',
  keywords: 'Alisha Mathias, Portfolio, Data Science, React, Full Stack Developer, Mumbai',
  authors: [{ name: 'Alisha Mathias' }],
  openGraph: {
    title: 'Alisha Mathias - Portfolio',
    description: 'B.Tech CSE-DS Student | Aspiring Data Engineer & Full-Stack Developer',
    url: 'https://alishamathias.dev',
    siteName: 'Alisha Mathias Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alisha Mathias Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alisha Mathias - Portfolio',
    description: 'B.Tech CSE-DS Student | Aspiring Data Engineer & Full-Stack Developer',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}