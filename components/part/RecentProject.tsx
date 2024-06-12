"use client"

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from '../ui/Pin'
import { AnimatedTooltip } from './../ui/animatedTootlTipe';
import ShiningButton from '../ui/ShiningButton';
import { FaLocationArrow } from "react-icons/fa6";
import { redirect,useRouter } from 'next/navigation'
const RecentProject = () => {
  const router = useRouter()
  return (
    <section className=' py-12 lg:py20' id='projects'>
      <h1 className=' text-center text-3xl lg:text-6xl font-semibold'>Here are some of my <span className=' text-purple'>Recent Projects</span></h1>
      <div className=' flex flex-wrap justify-center items-center p-4 mt-10 gap-x-16 gap-y-7'>
     {projects.map(({link,img,title,des,iconLists,id})=>(
         <div key={id} className=' flex justify-center items-center sm:h-[41rem]  lg:min-h-[32.5rem] h-[32rem] sm:w-[570px] w-[90vw]'> 
           <PinContainer title={title} href={link} >
            <div className=' relative flex justify-center items-center w-[80vw] sm:w-[570px]  overflow-hidden sm:h-[40vh] h-[20vh] '>
             <div className=' relative h-full w-full overflow-hidden lg:rounded-2xl bg-black-200'>
                <img src="/bg.png" alt="bakground" />
             </div>
             <img src={img} alt={title} className=' object-contain absolute top-0' />
            </div>
            <h1 className=' line-clamp-1 lg:text-2xl md:text-xl font-bold text-base'>
                {title}
            </h1>
            <p className=' lg:text-xl text-sm font-light  lg:font-light line-clamp-2'>
                {des}
            </p>
            <div className='  flex items-center flex-col sm:flex-row justify-center gap-4 sm:gap-0 sm:justify-between w-full mt-7 mb-3 flex-wrap'>
                <div className=' flex items-center'>
                    {
                        iconLists.map((item,idex)=>(
                            <AnimatedTooltip image={item} key={idex} id={idex} />
                        ))
                    }
               

                </div>
                <ShiningButton handelCLick={()=>router.push(link)} text='watch live site' icons={<FaLocationArrow/>} iconPosition='right'/>
                 
            </div>
            </PinContainer>
         </div>
     ))}
      </div>
    </section>
  )
}

export default RecentProject