"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

 function ImageSlide2_1({image}) {
   // console.log(images[1])
    const [currentImageIndex,setCurrentImageIndex] = useState(1);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>(prevIndex + 1) % image.length)
        },5000)

        return ()=>clearInterval(interval)
    },[image])

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay:true,
    // };
    
    return (
        <div className='w-[300px] h-[340px] lg:w-[100%] lg:h-[500px]'> 
            <Image src={image[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}/>  
            <div className='-translate-y-1/2 flex justify-center'>
                <span className="min-w-[170px] fixed -bottom-5 bg-green-600 p-2 px-3 text-center text-white text-base font-normal inline-block rounded-full letter-spacing-[2px]"
                    >7 June 2020-2021
                </span>   
            </div>         
        </div>
        
        // <div className='lg:w-screen md:w-auto sm:w-auto w-auto'>
        //     <Slider {...settings}>
        //         {image.map((image,index)=>{
        //             <div key={index}>
        //                 <Image src={image} alt={`Image ${index + 1}`}/>
        //             </div>
        //         })}             
        //     </Slider> 
        //  </div>
    )
}

 export default ImageSlide2_1;