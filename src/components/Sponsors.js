import React from 'react'
import sponsor1 from '../../assets/sponsor-1.jpg';
import sponsor2 from '../../assets/sponsor-2.jpg';
import sponsor3 from '../../assets/sponsor-3.jpg';
import sponsor17 from '../../assets/sponsor-17.jpg';
import sponsor18 from '../../assets/sponsor-18.jpg';
import sponsor19 from '../../assets/sponsor-19.jpg';

import sponsor4 from '../../assets/sponsor-4.jpg';
import sponsor5 from '../../assets/sponsor-5.jpg';
import sponsor6 from '../../assets/sponsor-6.jpg';
import sponsor8 from '../../assets/sponsor-8.jpg';
import sponsor9 from '../../assets/sponsor-9.jpg';
import sponsor10 from '../../assets/sponsor-10.jpg';
import sponsor11 from '../../assets/sponsor-11.jpg';
import sponsor12 from '../../assets/sponsor-12.jpg';
import sponsor16 from '../../assets/sponsor-16.jpg';

import SponsorsSlide from './SponsorsSlideup';
import SponsorsSlidedown from './SponsorsSlidedown';

function Sponsors() {

    const upImages = [
        sponsor1,
        sponsor2,
        sponsor3,
        sponsor17,
        sponsor18,
        sponsor19,
    ]

    const downImages = [
        sponsor4,
        sponsor5,
        sponsor6,
        sponsor8,
        sponsor9,
        sponsor10,
        sponsor11,
        sponsor12,
        sponsor16,
    ]

  return (
    <div className='bg-blue-50 py-5'>
        <div className='mr-20 mt-5 py-5 ml-20 mb-6 bg-white shadow'>
            <div className='mt-15 text-green-500 text-pretty text-4xl ml-5'>
                <h1>SPONSORS</h1>
            </div>
            <div className='mt-5 text-balance ml-5 text-xl'>
                <span>GOVERNMENT SPONSORS</span>
            </div>
            <div className='mt-5 text-balance ml-5 text-xl'>
                <SponsorsSlide images={upImages}/>
            </div>
            <div className='mt-5 text-balance ml-5 text-xl'>
                <span>PRIVATE SPONSORS</span>
            </div>
            <div>
                <SponsorsSlidedown images={downImages}/>
            </div>
        </div>
    </div>
  )
}

export default Sponsors