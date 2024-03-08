import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ImageSlide2_1 from './ImageSlide2_1';
import event11 from '../../assets/event-11.jpg';
import event12 from '../../assets/event-12.jpg';
import event13 from '../../assets/event-13.jpg';
import event14 from '../../assets/event-14.jpg';
import event15 from '../../assets/event-15.jpg';

import event16 from '../../assets/event-16.jpg';
import event17 from '../../assets/event-17.jpg';
import event18 from '../../assets/event-18.jpg';
import event19 from '../../assets/event-19.jpg';
import event20 from '../../assets/event-20.jpg';
import ImageSlide2_2 from './ImageSlide2_2';
import Link from 'next/link';

function UpcomingEvents() {
    const images2_1 = [
        event11,
        event12,
        event13,
        event14,
        event15,
    ];

    const images2_2 = [
        event16,
        event17,
        event18,
        event19,
        event20,
    ];

    return (
        <div className='mt-10 mr-20 ml-20'>
            <div className='font-normal text-4xl text-green-500'>
                <h1>UPCOMING EVENTS 2020</h1>
            </div>
            <div className='grid grid-cols-1 md:gap-x-4 sm:gap-x-2 lg:grid-cols-2 mt-7'>
                <div className='sm:mt-2 md:mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                    <div>
                        <ImageSlide2_1 image={images2_1}/>
                    </div>    
                    <div className='text-xl'>
                        <div className='text-green-500 text-pretty text-xl'>
                            <span>Yuvapratap Agri & Social Awards</span>
                        </div>
                        <div className='ml-5 text-gray-500'>
                            <LocalPhoneIcon className='text-green-500'/>
                            <span>Contact Details - 9922321555.</span>
                        </div>
                        <div className='mt-5 md:w-auto  text-justify text-gray-500'>
                            <p>
                                This 8th year, The Agricultural Graduate’s Association is organizing state-level ‘Yuvapratap Agriculture & Social Awards’, 
                                this is the eighth consecutive year of the festival. State-level awards will be given to open the glory of the work of the 
                                workers who have contributed in the development of Agriculture & society by 
                                contributing in the fields of Agriculture, Environment-water, Nature conservation, Youth Building, Women's Empowerment, 
                                Journalism, Art – Sports- Litrature, Social work, Research & Education - Service. You can also participate in this year send 
                                the proposal of the work done by you, Before every year July 5 to 5 Apr.
                            </p>
                        </div>
                        <div className='text-pretty font-medium mt-5'>
                            <Link href=''>
                                REGISTER
                                <KeyboardDoubleArrowRightIcon className='text-green-500'/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sm:mt-2 md:mt-5 lg:mt-0 xl:mt-0 2xl:mt-0'>
                    <div>
                      <ImageSlide2_2 image={images2_2}/>
                    </div>
                    <div className='text-xl'>
                        <div className='text-green-500 text-pretty text-xl'>
                            <span>Israel Agricultural Study Tour</span>
                        </div>
                        <div className='ml-5 text-gray-500'>
                            <LocalPhoneIcon className='text-green-500'/>
                            <span>Contact Details - 7030713713.</span>
                        </div>
                        <div className='mt-5 sm:w-auto text-justify text-gray-500'>
                            <p>
                            As per every year, An ‘Israel Agricultural Study Tour’ of all the three countries 
                            Including Jordan and Palestine is organized.in the period 5 to 11Oct /Nov. 2020, 
                            Registration of farmers, entrepreneurs, students, agro corporates, agro dealers tour, 
                            for this Israel Agricultural Study tour from 5TH May 2020 To 5th Aug Approx. For the 
                            farmers, there is a deadline of 1 st September 2020 admission. An unprecedented experience 
                            of agricultural technology and agricultural tourism is the tour organized by Us. 
                            From Maharashtra, Agro Corporates and farmers, women Entrepreneurs of agricultural 
                            entrepreneurs are involved in this. Priority with first and passport holders. 
                            This is the 7TH year of this tour. No any criteria for this tour like Age gender or 
                            Education.
                            </p>
                        </div>
                        <div className='text-pretty font-medium mt-5'>
                            <Link href=''>
                                REGISTER
                                <KeyboardDoubleArrowRightIcon className='text-green-500'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvents