import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'MEHUL | Portfolio',
  description: 'Software Engineer specializing in AI and Browser Automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}