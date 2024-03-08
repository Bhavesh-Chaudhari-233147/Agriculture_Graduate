import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
  
function SponsorsSlidedown({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Set the number of images to show at a time
        slidesToScroll: 1,
        autoplay:true,
    };
   
  return (
    <div>
        <Slider {...settings} >
            {images.map((image, index) => (
                <div key={index}>
                    <Image src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SponsorsSlidedown