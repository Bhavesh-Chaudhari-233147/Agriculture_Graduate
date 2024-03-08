import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

function TestimonialSlide({data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay:true
    };

    return (
        <Slider {...settings} className='mb-10'>
            {data.map((testimonial, index) => (
            <div className='mr-auto mt-12 ml-auto justify-center'>
                <div key={index} className='flex flex-col lg:flex-row'>
                    <div className='w-[50%] md:justify-items-center sm:justify-items-center md:mt-7 sm:mt-7 md:ml-10 sm:ml-10'>
                        <Image src={testimonial.image} alt='image' className='rounded-md'/>
                    </div>
                    <div className='text-xl sm:-mt-[1%] -ml-[15%] sm:ml-0 justify-start sm:justify-start text-gray-500'>
                        <p className='w-[82%] text-justify m-10 font-normal text-pretty'>{testimonial.comment}</p>
                        <div className='m-10 -mt-5'>
                            <h1 className='text-pretty font-bold'>{testimonial.name}</h1>
                            <span className='text-green-500'>{testimonial.postion}</span>
                        </div>    
                    </div>
                </div>
            </div>
            ))}
      </Slider>
  )
}

export default TestimonialSlide