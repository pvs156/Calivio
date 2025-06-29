import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calivio - AI-Powered Sales Calls Assistant',
  description: 'Revolutionize your sales calls with real-time AI guidance, instant objection handling, and predictive deal scoring.',
  keywords: 'AI sales assistant, sales calls, CRM, real-time guidance, deal scoring',
  authors: [{ name: 'Calivio' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 