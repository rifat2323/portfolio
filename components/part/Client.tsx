import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiteMoving'
import { testimonials } from '@/data'

const Client = () => {
  return (
    <section className=' py-12 lg:py20' id='projects'>
    <h1 className=' text-center text-3xl lg:text-6xl font-semibold'>some words from <span className=' text-purple'>Recent Client</span></h1>
    <div className=' flex flex-col justify-center items-center my-5 gap-4'>
     <InfiniteMovingCards items={testimonials} speed='slow' direction='right'/>
     </div>
     </section>
  )
}

export default Client