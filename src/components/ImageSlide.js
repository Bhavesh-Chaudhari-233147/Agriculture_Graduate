'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import OverlayComp from './OverlayComp';

//import OverlayComp from './OverlayComp';

function ImageSlide({image}) {
    const [currentImageIndex,setCurrentImageIndex] = useState(0);
        
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % image.length)
        },5000)

        return ()=>clearInterval(interval)
    },[image])

    return (
        <div className='w-full object-cover md:object-contain relative'>
          <Image src={image[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div className='absolute sm:bottom-0 mb-10 right-4 sm:right-0 bg-green-300 p-8 lg:mr-[5%] transition-all duration-300 hover:scale-105'>
          <div className='w-full h-auto sm:w-1/2 sm:h-1/2'>
            <OverlayComp className='w-full h-full sm:w-auto sm:h-auto' />
          </div>
        </div>
      </div>
      
      




      






      



          
  )
}

export default ImageSlide