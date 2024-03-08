import Image from 'next/image'
import React from 'react'
import banner_About from '../../../assets/title-bg-1.jpg'
import udyogbhartilogo from '../../../assets/udyogbharti-logo.png';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CircleIcon from '@mui/icons-material/Circle';
import Link from 'next/link';

function Aboutus() {
  return (
    <div>
        <div>
            {/* This path /_next/static/media/title-bg-1.0fb296eb.jpg get in "console.log(banner_About)" */}
            <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-1.0fb296eb.jpg')`, backgroundSize: '100% 60%' }}>  
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
        <div className='mt-40 sm:w-auto sm:mr-20 sm:ml-20 sm:text-base'>
          <div className='text-green-500 text-pretty text-4xl'>
            <h1>ABOUT US</h1>
          </div>
          <div className='mt-5 sm:w-auto text-xl text-justify text-gray-500'>
            <p>
              The AGRICULTURE GRADUATES ASSOCIATION (Krushi Padavidhar Sanghatna) is the first State level, 
              non-political, social organization founded by Agriculture & Allied graduates, post graduates & 
              diploma holders in Maharashtra. All members and office bearers of The AGRICULTURE GRADUATES 
              ASSOCIATION permormfunctions as per norms prescribed by the Govt. Rules and regulations under 
              Maharashtra Society Act 1860 & Charitable Trust Act 1950. Originating from vital issues faced by 
              student organizations, this association comprises of stake holders who work full time or on a voluntary basis.
            </p>
          </div>
          <div className=''>
            <div className='text-pretty font-medium text-xl mt-[3%]'>
              <span >The Aims and Objectives Of This Association Are</span>
            </div>
            <div>
              <ul className='mt-[3%]'>
                <li>
                  <div>
                    <CircleIcon className='w-2 ml-3'/>
                    <span className='font-bold text-xl ml-2'>To Highlight Issues Faced By Agriculture Professionals</span>
                    <p className='mt-[2%] text-xl ml-2 text-gray-500'>
                      To highlight the Educational, Social, Administrative & Professional issues faced by Agriculturists, 
                      Agri Graduates & Entrepreneurs and bring them up with the administration.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='mt-[3%]'>
                    <CircleIcon className='w-2 ml-3'/>
                    <span className='font-bold text-xl ml-2'>To Provide Technical Guidance</span>
                    <p className='mt-[2%] text-xl ml-2 text-gray-500'>
                     To provide technical guidance and develop entrepreneurial skills through various Camps, Training Programs, Seminars, Workshops, Tours, etc.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='mt-[3%]'>
                      <CircleIcon className='w-2 ml-3'/>
                      <span className='font-bold text-xl ml-2'>To Participate In Strategizing Processes</span>
                      <p className='mt-[2%] text-xl ml-2 text-gray-500'>
                      To participate in strategizing & policy making processes in the Agriculture domain with the help of our associates.
                      </p>
                    </div>
                </li>
                <li>
                  <div className='mt-[3%]'>
                      <CircleIcon className='w-2 ml-3'/>
                      <span className='font-bold text-xl ml-2'>To Run Knowledge Building Initiatives</span>
                      <p className='mt-[2%] text-xl ml-2 text-gray-500'>
                      To run knowledge building initiatives about the latest developments in the Agriculture, Environment and other allied fields.
                      </p>
                    </div>
                </li>
              </ul>
              <div className='text-justify text-xl mt-5 text-gray-500'>
                <p>
                The various divisions of this organization are dedicated to Entrepreneurship Development, International Agriculture study tours and 
                Employment generation in the Agriculture & supplemental domains. Over five years, we have setup focus groups for farmers & agriculturists. 
                We have gained the trust of all those who participated in our International study tours, making it worthwhile. Over a short period, our organization 
                has become popular for its exclusive services & ease of working. Overall, the organization is spearheading several initiatives for Agriculture graduates, 
                diploma holders and farmers in the field of Agriculture & Entrepreneurship Development.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-blue-50 ml-40 mr-40 mt-40 mb-10'>
          <div className='text-green-500 text-pretty text-4xl py-5 m-5'>
            <h1>UDYOGBHARTI</h1>
          </div>
          <div >
            <div className='flex flex-col justify-between lg:flex-row'>
                <div className='w-[110%] m-5'>
                    <Image src={udyogbhartilogo} alt='udyogbhartilogo'/>
                </div>
                <div className='text-justify text-xl m-10 max-w-lg lg:max-w-fit text-gray-500 mt-4'>
                    <p>
                    Udyogbharati is an authorized division of the Agriculture Graduates Association and is primarily engaged in Agriculture & 
                    Entrepreneurship Training, organizing International Agriculture study tours and providing Training services to Agro based 
                    Industries & Corporates. This unit is actively involved in tasks like conducting Agri& Entrepreneurship Training programs and 
                    ensuring that the beneficiaries, of various Govt. Agri& Entrepreneurship related schemes, receive the due assistance.
                    </p>
                    <p className='mt-3'>
                    Udyogbharati also executes different schemes approved by the HRD Ministry of the Govt of Maharashtra, for example, the PramodMahajan 
                    Skills Development scheme for graduates. This division also takes up Tree plantation drives on behalf of the Ministry of Environment, 
                    Forest & Climate change, Govt of India. Udyogbharati is Also Associated with Nehru YuvaKendra Initiative of Sports Ministry Of India, 
                    On a regional level, Udyogbharati serves as a friend and guide to the youth, the un-employed, the students, the farmers & agro based 
                    businesses. The division also provides consultation services for small scale enterprises in preparing project reports and securing bank 
                    loans. One day workshops on Agriculture related subjects like dairy farming, sheep rearing, poultry, green house technology, bee keeping, etc. 
                    are being consistently organized. Through this division we provide need-based training & consultancy services to Agro & allied corporates and organize 
                    International Agriculture Study tours on a regular basis.
                    </p>
                </div>
            </div>    
          </div>
        </div>
    </div> 
  )
}

export default Aboutus