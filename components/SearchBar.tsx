"use client"
import React from 'react'
import SearchManufacture from './SearchManufacture'
import { useState } from 'react'
import Image from 'next/image'


const SearchButton = ({otherClasses} : {otherClasses : string} ) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`} >
        <Image src="/magnifyinh-glass.svg"
            alt='magnify'
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

    const [model, setModel] = useState('')
    const handleSearch = () => {

    }
  return (
      <form className='searchbar' onSubmit={handleSearch}>
          <div className="searchbar__item">
              <SearchManufacture manufacturer={manufacturer}
              setManufacturer={setManufacturer}
              />


              <SearchButton otherClasses='sm:hidden' />
              
          </div>
          <div className="searchbar__item">
              <Image
                  src='/model-icon.png'
                  width={25}
                  height={25}
                  className=' w-[20px] h-[20px] ml-4'
                  alt='car model'
              
              />

              <input
                  type='text'
                  name='model'
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder='Quattro'
                  className='searchbar__input'



              />
              <SearchButton otherClasses='sm:hidden' />

          </div>
          <SearchButton otherClasses='max-sm:hidden' />
  </form>
  )
}

export default SearchBar
