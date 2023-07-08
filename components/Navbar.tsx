import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
          <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  ">
              <Link href="/" className='flex justify-center items-center'>
                  <h2 className='font-bold text-2xl text-[#238f77]'>
              Drive Space.
              </h2>
              </Link>

              <CustomButton
                  title='Sign In'
                  containerStyles='rounded-full bg-white min-w-[130px] text-[#238f77] text-xl font-semibold'
                  btnType="button"
              
              />
   </nav>
    </header>
  )
}

export default Navbar
