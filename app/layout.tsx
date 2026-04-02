import type { Metadata } from 'next'
import './globals.css'
import MainNav from './components/MainNav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Nicolas Moyano | Senior Product Designer',
  description: 'Senior Product Designer in Stockholm, Sweden. Specializing in conversion-focused digital products with minimalistic design and technical excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
