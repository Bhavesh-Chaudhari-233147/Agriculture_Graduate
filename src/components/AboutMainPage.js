import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player'
import CircleIcon from '@mui/icons-material/Circle';

function AboutusMainPage() {
    return (
      <section className='mt-[8%] md:mt-[5%] sm:mt-[5%]'> 
            <div className=''>
                <div className='flex flex-col mr-10 gap-x-8 md:mr-10 md:ml-20 sm:mr-5 sm:ml-5 lg:flex-row'>
                    <div className='w-5/6 ml-20'>
                        <span className='text-green-500 font-normal text-4xl'>ABOUT US</span>
                        <p className='mt-5 text-justify text-xl text-gray-500'>
                            The AGRICULTURE GRADUATES ASSOCIATION (Krushi Padavidhar Sanghatna) is the first State level, 
                            non-political, social organization founded by Agriculture & allied graduates, post graduates & 
                            diploma holders in Maharashtra. All members and office bearers of The AGRICULTURE GRADUATES 
                            ASSOCIATION function as per norms prescribed by the Govt. Rules and regulations under Maharashtra 
                            Society Act 1860 & Charitable Trust Act 1950. Originating from vital issues faced by student organizations, 
                            this association comprises of stake holders who work full time or on a voluntary basis.
                        </p>
                        <div>
                            <span className='text-green-500 font-normal mt-10 text-3xl'>The Aims and Objectives Of This Association Are</span>
                                <ul className='flex flex-col space-y-4 mt-5 text-xl'>
                                    <li>
                                        <div>
                                            <p>
                                                <CircleIcon className='w-2'/>
                                                <strong> To Highlight Issues Faced By All Agriculture Professionals.</strong>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>
                                                <CircleIcon className='w-2'/>
                                                <strong> To Provide Technical Guidance& Entrepreneurship Skills.</strong>
                                            </p>
                                        </div>
                                    </li>    
                                    <li>
                                        <p>
                                            <CircleIcon className='w-2'/>
                                            <strong> To Participate In Strategizing Processes.</strong>
                                        </p>      
                                    </li>
                                    <li>
                                        <div>
                                            <p>
                                                <CircleIcon className='w-2'/>
                                                <strong> To Run Knowledge Building InitiativesIn Agriculture & Entrepreneurship.</strong>
                                            </p>
                                        </div>     
                                    </li>
                                </ul> 
                            <div>
                                <Link href='/aboutus'>
                                    <button className='mt-5 text-white py-1 mr-9 w-[200px] bg-blue-950 rounded-full mb-5 hover:scale-105'>
                                        KNOW MORE
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-5 justify-center sm:justify-center ml-36 lg:ml-0'>
                        <div>
                            <div className='p-5'>
                                <ReactPlayer url='https://youtu.be/qLOcw7CfQsE' controls width='380px' height='380px'/>
                            </div>
                            <div className='flex justify-center'>
                                <Link href='/morevideos'>
                                    <button className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                                        VIEW MORE VIDEOS
                                    </button>
                                </Link>
                            </div>
                        </div>    
                    </div>
                </div> 
            </div>          
      </section>
    )
  }
  
  export default AboutusMainPage