import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Next Gen 3D Web',
  description: 'Production level 3D and Framer Motion integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
