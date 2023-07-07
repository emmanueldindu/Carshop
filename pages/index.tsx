import Image from 'next/image'
import { Inter } from 'next/font/google'
import {  Hero } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="overflow-hidden"
    >
      <Hero />
 
    </main>
  )
}
