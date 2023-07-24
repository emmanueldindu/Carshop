import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps ) => {
  return (
      <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}
        
        
        >
          <Transition.Child>
            <div />
</Transition.Child>
        </Dialog>
              
          </Transition>
      details
    </>
  )
}

export default CarDetails
