import Link from 'next/link'
import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import director from '../../../assets/director.jpg';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import founder_banner from '../../../assets/title-bg-6.jpg';

function Foundersandmembers() {
  return (
    <div>
    {/* {
        console.log(founder_banner)
    } */}
        <div>
            <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-6.20c5e3e9.jpg')`, backgroundSize: '100% 60%' }}>
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
        <div className='mt-40 ml-40 mr-40 w-auto'>
          <div className='text-green-500 text-pretty text-4xl'>
            <span>FOUNDERS & MEMBERS</span>
          </div>
          <div>
            <p className='text-justify sm:w-auto w-auto text-xl mt-5 text-gray-500'>
              The executive committee of this Association comprises of Graduates from 
              Agriculture, Socialfields & Entrepreneurs who are technically skilled & 
              experienced. The Governing board incorporates 7 Directors along with some 
              distinguished members from the society, the Agriculture Industry & the Govt.
              Apart from this, the organization also has a strong workforce of skilled
              experts, advisors & volunteers.
            </p>
          </div>
          <div className='border-t border-solid border-gray-400 my-4 mt-8'/>
          <div>
            <strong className='text-green-500 text-pretty text-2xl'>MR. MAHESH KADUS PATIL</strong>
          </div>
          <div className='mt-5'>
            <p className='text-gray-500 text-justify text-xl'>
              <strong>‘Krishibhushan’ Mahesh Kadus Patil</strong> is the Founder-President of this Association. Apart from being a 
              multi-facetted leader, he has 10 years experience in the Entrepreneurship Development area. Under his 
              effective direction, the Association has accomplished key tasks like Employment generation for students, 
              Entrepreneurship Training, Technical assistance to farmers & a variety of services for Corporates
            </p>
          </div>
          <div>
            <div className='text-xl mt-5'><span><strong>On the State Level, he has been honored for his work by accolades like:</strong></span></div>
            <div className='flex flex-col lg:flex-row'>
              <div className='mt-5'>
                <ul>
                                <li >
                                    <div >
                                        <CircleIcon className='-mt-3'/>
                                        <div className='relative border-l-2 mt-1 sm:h-auto ml-3 border-dotted border-black'>
                                            <div className='ml-9 -mt-7 sm:w-auto'>
                                                <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Kedrai Bhushan Award 2020</h1>
                                                <p className='mt-[1%] text-gray-500 sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>Kedrai Institute Niphad, Nashik.</p>
                                            </div>
                                        </div>    
                                    </div>
                                </li>
                                <li>
                                    <div className='mt-9 mb-6'>
                                      <CircleIcon className='-mt-3'/>
                                      <div className='relative border-l-2 lg:h-16 mt-1 sm:h-auto ml-3 border-dotted border-black'>                  
                                        <div className='ml-9 -mt-7 sm:w-auto'>
                                          <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Special Achiever - Agricultural Award 2019</h1>
                                          <p className='mt-[1%] text-gray-500 sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>Krushisevak -Agricultural Weekly Magazine, Raver Jalgaon.</p>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                                <li className=''>
                                    <div className='mt-9 mb-6'>
                                    <CircleIcon className='-mt-3'/>
                                      <div className='relative border-l-2 lg:h-[15%] mt-1 sm:h-auto ml-3 border-dotted border-black'>                            
                                        <div className='ml-9 -mt-7 sm:w-auto'>
                                          <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Seva Gaurav Puraskar 2018</h1>
                                          <p className='mt-[1%] text-gray-500 text-justify sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>Award for social service by Rotary Club Dehuroad, Pune.</p>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='mt-9 mb-6'>
                                    <CircleIcon className='-mt-3'/>
                                      <div className='relative border-l-2 mt-1 lg:h-[22%] sm:h-auto ml-3 border-dotted border-black'>               
                                        <div className='ml-9 -mt-7 sm:w-auto'>
                                          <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Krishibhushan 2016</h1>
                                          <p className='mt-[1%] text-gray-500 text-justify sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>State Level Award from Avishkar Foundation, Kolhapur.</p>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='mt-9 mb-6'>
                                    <CircleIcon className='-mt-3'/>
                                      <div className='relative border-l-2 ml-3 mt-1 lg:h-[10%] sm:h-auto border-dotted border-black'>                       
                                        <div className='ml-9 -mt-7 sm:w-auto'>
                                          <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Agri Youth Icon 2015</h1>
                                          <p className='mt-[1%] text-gray-500 text-justify sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>State Level Award From Human Service Foundation, Nashik.</p>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='mt-9 mb-6'>     
                                    <CircleIcon className='-mt-3'/>
                                      <div className='relative border-l-2 ml-3 mt-1 md:h-[12%] sm:h-auto border-dotted border-black'>         
                                        <div className='ml-9 -mt-7 sm:w-auto'>
                                          <h1 className='text-pretty sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>Krishiratna 2015</h1>
                                          <p className='mt-[1%] text-gray-500 text-justify sm:mt-2 sm:text-sm md:text-base lg:text-base xl:text-base'>In House Award Winner for Best Volunteer From Agriculture Graduates Association.</p>
                                        </div>
                                      </div>
                                    </div>
                                </li>
                            </ul>           
              </div>
              <div className='ml-[10%] mt-15 items-center'>
                 <div>
                   <Image src={director} alt='directorImage'/>
                 </div>
                 <div >
                   <h1 className='text-green-500 font-normal text-3xl mt-5'>Mr. Mahesh Kadus Patil</h1>
                   <h2 className='text-xl font-normal text-center'>Founder & President</h2>
                 </div>
              </div>
            </div>
          </div>
          <div>
            <div className='border-t border-solid border-gray-400 my-4 space-x-24 mt-8'/>
                <div>
                <h1 className='text-4xl text-center text-green-500 mt-5'>OUR TEAM MEMBER</h1>
                <div className='flex flex-row lg:flex-row md:flex-col sm:flex-col gap-x-40 p-20'>
                    <div className="relative inline-block cursor-pointer overflow-hidden group w-48 h-48">
                        <div className="whitespace-nowrap hover:overflow-x-auto">
                            <h1 className="text-xl font-medium text-black">Team Member 1</h1>
                            <h3 className="text-green-500 text-center">Member</h3>
                        </div>

                        <div className="top-[40%] absolute inset-0 bg-black bg-opacity-60 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-full">
                            <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <TwitterIcon />
                            </IconButton>
                        </div>       
                    </div>

                    <div className="relative inline-block cursor-pointer overflow-hidden group w-48 h-48">
                        <div className="whitespace-nowrap hover:overflow-x-auto">
                            <h1 className="text-xl font-medium text-black">Team Member 2</h1>
                            <h3 className="text-green-500 text-center">Member</h3>
                        </div>

                        <div className="top-[40%] absolute inset-0 bg-black bg-opacity-60 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-full">
                            <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <TwitterIcon />
                            </IconButton>
                        </div>       
                    </div>
                                       
                    <div className="relative inline-block cursor-pointer overflow-hidden group w-48 h-48">
                        <div className="whitespace-nowrap hover:overflow-x-auto">
                            <h1 className="text-xl font-medium text-black">Team Member 3</h1>
                            <h3 className="text-green-500 text-center">Member</h3>
                        </div>

                        <div className="top-[40%] absolute inset-0 bg-black bg-opacity-60 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-full">
                            <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <TwitterIcon />
                            </IconButton>
                        </div>       
                    </div>
                    
                    <div className="relative inline-block cursor-pointer overflow-hidden group w-48 h-48">
                        <div className="whitespace-nowrap hover:overflow-x-auto">
                            <h1 className="text-xl font-medium text-black">Team Member 4</h1>
                            <h3 className="text-green-500 text-center">Member</h3>
                        </div>

                        <div className="top-[40%] absolute inset-0 bg-black bg-opacity-60 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-full">
                            <IconButton href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <TwitterIcon />
                            </IconButton>
                        </div>       
                    </div>
                </div>
                </div>
          </div>
        </div>    
    </div>
  )
}

export default Foundersandmembers