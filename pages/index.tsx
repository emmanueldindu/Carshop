import Image from 'next/image'
import { Inter } from 'next/font/google'
import {  Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="overflow-hidden"
    >
      <Hero  />
      <div className='mt-12 padding-x padding-y max-width ' id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl">
            Our Car Exhibit
          </h1>
            <p>explore the vehicles and make your choice </p>
          
        </div>
        <div className="home__filters flex-between">
          <SearchBar />

          <div className="home__filter-container ">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />

          </div>
        </div>
      </div>
 
    </main>
  )
}
