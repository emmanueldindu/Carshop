import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';

import { Transition, Dialog } from '@headlessui/react';
import { generateCarImageUrl } from '@/utils';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps ) => {
  return (
      <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 ' onClose={closeModal}
        
        
        >
          <Transition.Child
           as="div"
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            
          </Transition.Child>
          <div className="fixed w-full  inset-0 overflow-y-auto">
            <div className="flex-center  min-h-full  p-4 text-center">

            <Transition.Child
           as="div"
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='car-details__dialog-panel'>
                  <button type='button'
                  onClick={closeModal}
                  >

                    <Image src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain relative '

                    />  

                  </button>
                  <div className="flex-1 flex flex-col gap-3">


                    <div className="car-details__main-image">
                      
                      <Image src={generateCarImageUrl (car)} alt="car" className='object-contain' fill priority />
                      
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image src={generateCarImageUrl (car, '29')} alt="car" className='object-contain' fill priority />

                      </div>

                      <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image src={generateCarImageUrl (car, '33')} alt="car" className='object-contain' fill priority />

                      </div>


                      <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image src={generateCarImageUrl (car, '13')} alt="car" className='object-contain' fill priority />

                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className='font-semibold capitalize '>
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between w-full" key={key}>
                          <h4 className='capitalize text-gray-700  font-medium '> {key.split("_").join(" ")}</h4>
                          <p className='font-semibold'>{ value }</p>
                        </div>
                      ))}

                    </div>

                  </div>
                
                </Dialog.Panel>                
                </Transition.Child>

            </div>

          </div>
        </Dialog>
              
          </Transition>
      
    </>
  )
}

export default CarDetails
