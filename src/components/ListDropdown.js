import React from 'react';
import Slider from 'react-slick';

function ListDropdown() {
  const listData = [
    'Agri Jobs',
    'Online Membership Registration',
    'Corona Donation for Village',
    'Letters to MCAER',
    'Israel Agro study Tour Brochure',
  ];

  const settings = {
    dots: false,
    infinite: true,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
  };

  return (
    <div>
      <Slider {...settings}>
        {listData.map((item, index) => (
          <div key={index} className='text-center text-green-500 text-xl hover:scale-105'>
            {item}
            <div
              class="border-t border-black pt-8 mt-2"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ListDropdown;
