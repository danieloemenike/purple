import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Purple',
  description: 'Purple Application',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={` ${inter.className} `}>
        <Header />
        <main className = "md:mr-[108px] md:ml-[141px] mx-auto ml-[20px] mr-[20px]">
        { children }
        </main>
      </body>
    </html>
  )
}
