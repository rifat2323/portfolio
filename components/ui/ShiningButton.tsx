import React from 'react'

const ShiningButton = ({text,iconPosition,otherClass,icons,handelCLick}:{text:string,iconPosition:string,otherClass?:string,icons:React.ReactNode,handelCLick?:()=>void}) => {
  return (
    
     
        // Button code
        <button onClick={handelCLick} className="inline-flex h-12 animate-shimmer gap-2 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors  ">
       {iconPosition === 'left' && icons}
       {text}
       {iconPosition === 'right' && icons}
     
        </button>
  
        
        
      
  )
}

export default ShiningButton