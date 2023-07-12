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
          <Transition appear show={isOpen}>
              
          </Transition>
      details
    </>
  )
}

export default CarDetails
