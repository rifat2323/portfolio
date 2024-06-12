"use client"
import React from 'react'
import GlowButton from '../ui/GlowButton'
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Footer = () => {
  const pathname = useRouter()
  return (
    <footer className=' relative h-[50vh] w-full z-10'>
      <div className=' bg-custom-pattern bg-custom-size h-[50vh] opacity-5 bg-transparent w-full absolute top-0 -left-14   -z-1 pointer-events-none'>

      </div>
      <div className=' flex flex-col w-full justify-center items-center z-1'>
        <h1 className=' text-2xl md:text-6xl sm:text-4xl mt-4  '>Ready to take your idea <span className=' text-purple'>Into a website</span></h1>
        <p className=' text-xl text-stone-50 mt-9 mb-9'>Reach out to me now and discuss how I can help you reach your goal.
    
      
        </p>
        <GlowButton handelClick={()=>pathname.push('/#about')} text='Contact me now' icons={<FaLocationArrow/>} iconPosition='right' otherClass=' gap-3'/>
        <div className='flex w-full px-2 justify-center flex-col md:flex-row md:justify-between items-center flex-wrap my-5'>
          <p>copyright&#169;Rifat 2024  </p>
          <div className='flex justify-center items-center gap-2'>
            <a href='https://www.linkedin.com/in/rifatul-islam-757b062a6/' className=' p-3 rounded-sm no-underline decoration-white '><FaLinkedin size={25}/></a>
          
            <a href='https://github.com/rifat2323' className=' p-3 rounded-sm '><LuGithub size={25}/></a>

          </div>


        </div>

      </div>
    
        
    </footer>
  )
}

export default Footer