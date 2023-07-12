"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'


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
    const [isOpen, setIsOpen] = useState(false)  
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


            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray-200">
                    <div className="flex flex-col justify-center items-center gap-2">

                        <Image src='/steering-wheel.svg' width={20} height={20} alt='tire' />
                        <p className="text-[14px] font-semibold text-black">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                            {/* {drive.toUpperCase()}  */}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">

                            <Image src='/tire.svg' width={20} height={20} alt='tire' />
                            <p className="text-[14px] font-semibold text-black">
                            {/* {transmission === 'a' ? 'Automatic' : 'Manual'} */}
                                {drive.toUpperCase()} 
                            </p>
                    </div>
                    
                    <div className="flex flex-col justify-center items-center gap-2">

                            <Image src='/gas.svg' width={20} height={20} alt='tire' />
                            <p className="text-[14px] font-semibold text-black">
                         
                         {city_mpg} MPG
                            </p>
                            </div>

                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-[#000013]'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>

            </div>
            
            <CarDetails isOpen={isOpen}
            closeModal={() => setIsOpen(false)} car={car}
            />
            
    </div>
  )
}

export default CarCard
