import { Roboto } from 'next/font/google'

import '../styles/global.css'
import Header from '@/components/Header'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'] 
  })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
