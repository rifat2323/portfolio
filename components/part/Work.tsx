import React from 'react'
import { HoverBorderGradient } from '../ui/Border'
import { workExperience } from '@/data'
import Image from 'next/image'


const Work = () => {
  return (
    <section className=' py-12 lg:py20' id='testimonials'>
    <h1 className=' text-center text-3xl lg:text-6xl font-semibold mb-12'>My work <span className=' text-purple'>Experience</span></h1>
    <div className=' flex flex-row justify-center items-center flex-wrap my-5 gap-5 px-3 md:px-6 lg:px-8 w-full'>
        {
            workExperience.map(item=>(
                <HoverBorderGradient key={item.id}>
                <div className=' w-60 sm:w-[300px] md:w-[350px] lg:w-[450px] h-[8rem] flex items-center justify-center gap-2 lg:gap-7'>
                     <div >
                      <Image src={item.thumbnail} alt={item.title} width={100} height={100}/>
                     </div>
                     <div>
                        <h4 className=' text-xl'>{item.title}</h4>
                        <p className=' text-xs'>{item.desc}</p>
                     </div>
               
                </div>
              </HoverBorderGradient>

            ))
        }
    
     </div>
    </section>
  )
}

export default Work