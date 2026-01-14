import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Follow The Money | Governor Maura Healey',
  description: 'An investigation into the Healey administration: governance by emergency, accountability by avoidance.',
  openGraph: {
    title: 'Follow The Money | Governor Maura Healey',
    description: 'An investigation into the Healey administration: governance by emergency, accountability by avoidance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  )
}
