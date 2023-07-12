"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'


interface CarCardProps {
    car: CarProps
}

const CarCard = ({car} : CarCardProps) => {
  
    const {
        city_mpg,
        make,
        model,
        drive,
        transmission,
        year,
   
  } = car
  

    const carRent = calculateCarRent(city_mpg, year)
    return (
    <div className='car-card group'>
            <div className="car-card__content">
                <h2 className="car-card__content-title">
{make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px]'>
                <span className='self-start text-[14px] font-semibold' >
                    $
                </span>
                    {carRent}
 
            </p>

            <div className="relative w-full h-40 object-contain my-3">
                <Image src="/hero.png" alt='car' fill priority className='object-contain' />
            </div>
            
            
            
    </div>
  )
}

export default CarCard
