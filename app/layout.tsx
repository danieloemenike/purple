import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ot from "./"


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
        <main className = "mr-[108px] ml-[141px]">
        { children }
        </main>
      </body>
    </html>
  )
}
