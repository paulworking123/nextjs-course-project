import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full border border-red-500 flex items-center justify-between">
          <p>Apao developer</p>
          <p>header menue</p>
        </div>
        {children}
        <div className="w-full border border-red-500 text-center">
          <p>This my Footer</p>
        </div>
      </body>
    </html>
  )
}
