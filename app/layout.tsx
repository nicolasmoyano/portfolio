import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from './components/MainNav'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <GoogleAnalytics />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
