import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick';

const data = [
    {head:'AGRICULTURE GRADUATES ASSOCIATION',middle:'YKDBS - YUVA KRANTI DRAKSH BAGAYATDAR SANGH',subMiddle:'For the betterment of grape farmers.',bottom:'REGISTER NOW'},
    {head:'AGRICULTURE GRADUATES ASSOCIATION',middle:'ISRAEL AND AGRICULTURE STUDY TOUR OCT. 2020 AND MAY 2021.',subMiddle:'Pomegranates, Grapes, Agro Technology Worlds study tours.',bottom:'REGISTER NOW'},
    {head:'AGRICULTURE GRADUATES ASSOCIATION',middle:'AGRICULTURE AND ENTREPRENEURSHIP DEVELOPMENT TRAINING.',subMiddle:'Agribusiness & Entrepreneurship Trainings Govt. Sponsored & Non Sponsored.',bottom:'REGISTER NOW'},
]

function OverlayComp() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, // Set the number of images to show at a time
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
    };

    return (
        <div className='text-left font-bold text-white lg:w-96 sm:w-auto sm:h-auto'>
            <Slider {...settings} >
                {data.map((data, index) => (
                    <div key={index}>
                        <div>
                            <h2>{data.head}</h2>
                        </div>
                        <div  className='mt-5'><h2>{data.middle}</h2></div>
                        <div  className='mt-5'><span>{data.subMiddle}</span></div>
                        <Link href=''>
                            <button className='mt-5 py-4 mr-9 w-[40%] bg-blue-950 rounded-full'>
                                {data.bottom}
                            </button>
                        </Link> 
                    </div>
                ))}
            </Slider>
        </div>
  )
}

export default OverlayComp