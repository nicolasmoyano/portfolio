import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from './components/MainNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicolas Moyano | Product Designer',
  description: 'A product designer based in Stockholm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='sticky top-0'>
        {/* <MainNav /> */}
        </div>
        {children}
        </body>
    </html>
  )
}
