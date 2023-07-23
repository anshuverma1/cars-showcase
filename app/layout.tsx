import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Car Hub',
  description: 'Find, book or rent a car -- quickly and easily.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
