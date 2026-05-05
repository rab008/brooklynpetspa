import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { buildMetadata } from '@/lib/seo'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = buildMetadata({
  metaTitle: 'Brooklyn Pet Spa | Premium Grooming, Daycare & Boarding in Williamsburg',
  metaDescription:
    "Brooklyn's premier pet spa offering professional dog grooming, daycare, boarding, and spa services in Williamsburg. Fear-free certified, licensed & insured.",
  canonical: 'https://brooklynpetspa.com',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
