"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

function Hero() {

    const handleScroll = () => {

    }
  return (
      <div className='hero'>
          <div className="flex-1 pt-36 padding-x">
              <h1 className="hero__title">
                  Buy or rent a car  - easily and affordable!!
              </h1>

              <p className='hero__subtitle'> streamline your car purchase with our smooth booking process</p>

              <CustomButton
                  title="Explore Cars"

              containerStyles="text-white text-xl  bg-[#000013]  rounded-xl mt-10"
              handleClick={handleScroll}
              />

          </div>
          <div className='hero__image-container'>
              <div className="hero__image">
                  <Image src="/heroc.png" alt='hero'
                      fill className='object-contain '  />                   
              </div>
              
                  <div className='hero__image-overlay'>
               {/* <Image src="/hero-bgc.png" alt='hero'
                      fill className='object-contain relative'  /> */}
              </div>
          </div>
      </div>
  )
}

export default Hero