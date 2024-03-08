import Image from 'next/image'
import React from 'react'
import udyogbhartilogo from '../../../assets/udyogbharti-logo.png';
import loksaranglogo from '../../../assets/loksarang-logo.png';
import division_banner from '../../../assets/title-bg-4.jpg';
import Link from 'next/link'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CircleIcon from '@mui/icons-material/Circle';

function Division() {
  return (
    <div>
      <div>
        <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-4.7925ee49.jpg')`, backgroundSize: '100% 60%' }}>
          <div className="relative h-[281px] bg-fixed bg-no-repeat bg-top bg-contain flex items-center">
              <div className="text-white p-8">
                <Link href='/' className="mb-2">
                  <HomeSharpIcon />
                  Home
                </Link>
                <ArrowForwardIosSharpIcon className="mb-2" />
                <span className="self-start">Division</span>
              </div>
          </div>
        </div>
      </div> 
      <div className='ml-40 mr-40 mt-40'>
        <div className='text-green-500 text-pretty text-4xl'>
          <span>UDYOGBHARTI</span>
        </div>
        <div className='flex lg:flex-row flex-col mt-5'>
          <div>
            <p className='text-justify text-xl text-gray-500'>
              Udyogbharti is their agriculture and entrepreneurship in various state services popular 
              in a short period fixed state Department of Agriculture Graduates Association entrepreneurship 
              development training and consulting services. Is available in a variety of areas tantrajn, 
              consultants, trainers and successful entrepreneurs network with the same prasiksanatuna udyogbhartikade 
              hands. Graduates and educated staff and volunteers across the state organization dedicated to entrepreneurship 
              development programs is held fixed and the successful fulfillment day. If a kingdom is not of international activities 
              udyogbhartica honed impression is umatalela. This is the main task of the state udyogbhartine India successfully various 
              training and consulting services to entrepreneurs.
            </p>
          </div>
          <div className='w-[110%] m-5 -mt-[2%] md:mt-4 sm:mt-4'>
            <Image src={udyogbhartilogo} alt='udyaogLogo'/>
          </div>
        </div> 
        <div>
            <div>
              <ul>
                <li>
                  <div>
                    <div className='mt-5'>
                      <CircleIcon className='w-2'/><strong className='ml-3 text-lg'>Udyogbharati, The Training & Consultancy Division.</strong>
                    </div>
                    <p className='mt-5 text-justify text-xl'>
                      Udyogbharati, the Training & Consultancy division of the Agri Graduates Association, has quickly gained state-wide popularity 
                      because of its various services in the Agri & Entrepreneurship Development areas. Udyogbharati has created a network of technologists, 
                      consultants, trainers as well as entrepreneurs who have successfully completed the training. Programs organized for graduates & highly 
                      qualified persons along with dedicated volunteers are under way. The achievements of Udyogbharati have left their imprints on State, 
                      National as well as International levels. Udyogbharati has been primarily effective in providing Training & Consultancy on the state level.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className='mt-5'>
                      <CircleIcon className='w-2'/><strong className='ml-3 text-lg'>Government Recognized Trainings.</strong>
                    </div>
                    <p className='mt-5 text-justify text-xl'>
                      Udyogbharati conducts various Govt recognized skills development programs and other training programs 
                      for the benefit of youth & unemployed people. Udyogbharati is instrumental in implementing the State 
                      level Pramod Mahajan Skills Development Scheme & Tree plantation drives under the Ministry of Environment, 
                      Forest & Climate change, Govt of India.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className='mt-5'>
                      <CircleIcon className='w-2'/><strong className='ml-3 text-lg'>One Day Workshop.</strong>
                    </div>
                    <p className='mt-5 text-justify text-xl'>
                        Udyogbharati facilitates interactions between students & entrepreneurs, thus providing a 
                        platform for sharing experiences as well as helping them to choose the right vocation. With this aim in 
                        mind, One Day workshops on topics like Poultry, Dairy Farming, Mobile Repairing, Import Export, etc. are 
                        organized by Udyogbharati.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <div className='mt-5'>
                      <CircleIcon className='w-2'/><strong className='ml-3 text-lg'>Other Trainings.</strong>
                    </div>
                    <p className='mt-5 text-justify text-xl'>
                    Apart from One Day Workshops, Udyogbharati also offers Entrepreneurship Development programs 
                    of One week to One Month duration. These Training Programs include technical training, project 
                    report writing, industry visits, success stories and help in securing financial assistance through 
                    banks & Govt schemes. Such Training programs are mostly arranged on a private basis.
                    </p>
                  </div>
                </li>
              </ul>  
            </div> 
        </div> 
        <div>
          <div className="border-t border-solid border-gray-400 my-4 mt-8"></div>
          <div className='mt-20 mb-10'>
            <div className='text-green-500 text-pretty text-4xl'>
              <span>LOKSARANG SHG & MICROFINANCE</span>
            </div>
            <div className='flex flex-row lg:flex-row md:flex-col sm:flex-col'>
              <div className='text-justify text-xl mt-5 text-gray-500'>
                <p>Loksarang is the self-help & microfinance division of The Agriculture Graduates Association. Term loans are allocated to members for small scale industries. Loksarang Microfinance is now moving towards handing out low interest loans while being socially committed to promoting business enterprise. Established on 1st Oct 2017, this group is headed by Mr. Suraj Khomne.</p>
              </div>
              <div className='w-[110%] m-5 -mt-[2%] md:mt-4 sm:mt-4 ml-15'>
                <Image src={loksaranglogo} alt='loksaranglogo'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Division