"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'


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
  
    return (
    <div className='car-card group'>
            <div className="car-card__content">
                <h2 className="car-card__content">
{make} {model}
                </h2>
            </div>
            
    </div>
  )
}

export default CarCard
