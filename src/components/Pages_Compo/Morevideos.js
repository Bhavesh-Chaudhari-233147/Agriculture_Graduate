'use client'
import React, { useEffect, useState } from 'react'
import founder_banner from '../../../assets/title-bg-8.jpg';
import Link from 'next/link';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ReactPlayer from 'react-player';
import CloseIcon from '@mui/icons-material/Close';


    function Morevideos() {
        const [isVideoOpen, setVideoOpen] = useState(false);
        const [videoTitle,setVideoTitle] = useState(null);
        const [currentVideo, setCurrentVideo] = useState(null);
        
        console.log("outside function",isVideoOpen)
        
        const openVideo = (videoUrl,videotitle) => {
            setVideoTitle(videotitle);
            setCurrentVideo(videoUrl);
            
            console.log("Video url ",videoUrl)
            
            console.log("Function Video title ",videotitle)
            setVideoOpen(true);
            console.log("inside function",isVideoOpen)
        }

        console.log("Video title updated to: ", videoTitle);
        
        const closeVideo = () => {
            setVideoOpen(false);
            setCurrentVideo(null);
            setVideoTitle(null);
        }

    return (
    <div>
        <div>
            <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-8.55642e27.jpg')`, backgroundSize: '100% 60%' }}>
                <div className="relative h-[281px] bg-fixed bg-no-repeat bg-top bg-contain flex items-center">
                    <div className="text-white p-8">
                        <Link href='/' className="mb-2">
                        <HomeSharpIcon />
                        Home
                        </Link>
                        <ArrowForwardIosSharpIcon className="mb-2" />
                        <span className="self-start">Israel Agro Study Tour Videos</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='ml-40 mt-20 mr-40'>
            <div className='mt-10'>
                <h1 className='text-3xl text-green-500 font-bold mb-10'>STUDY TOUR 2017</h1>
                <p className='text-xl'>UdyogBharti Speaks With Israel <br/> Govt. Officials</p>
                <button onClick={()=> openVideo("https://www.youtube.com/embed/IKzV87Ar6uI","UdyogBharti Speaks With Israel Govt. Officials")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                    Click Me
                </button>    
                {isVideoOpen && (
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                        <div className='flex flex-row justify-between'>
                            <p className='font-medium text-green-500 text-pretty'>{videoTitle}</p>
                            <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                        </div>
                        
                        <div class="border-t border-black pt-8 mt-2"/>
                        <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                    </div>
                      
                )}
            </div>
            <div class="border-t border-black mt-2"/>
            <h1 className='text-3xl text-green-500 font-bold mb-10 mt-10'>STUDY TOUR 2016</h1>
            <div className='flex flex-col lg:flex-row justify-between'>             
                <div className='mt-10'>                  
                    <p className='text-xl'>Udyogbharati Water Recycling <br/> Greenhouse Hydroponics Israel <br/> 2016</p>
                    <button onClick={()=>openVideo("https://www.youtube.com/embed/F4VbDLcQqy0","Udyogbharati Water Recycling Greenhouse Hydroponics Israel 2016")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                        Click Me
                    </button>
                    {isVideoOpen && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                            <div className='flex flex-row justify-between'>
                                <span className='font-medium text-green-500 text-pretty'>{videoTitle}</span>
                                <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                            </div>
                        
                            <div class="border-t border-black pt-8 mt-2"/>
                            <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                        </div>
                    )}
                </div>
                <div className='mt-10'>
                    <p className='text-xl'>Wine From <br/> Pomegranate <br/> Udyogbharati Israel <br/> Study 2016</p>
                    <button onClick={()=>openVideo("https://www.youtube.com/embed/Lu3JS40fQcc","Wine From Pomegranate Udyogbharati Israel Study 2016")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                        Click Me
                    </button>
                    {isVideoOpen && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                            <div className='flex flex-row justify-between'>
                                <span className='font-medium text-green-500 text-pretty'>{videoTitle}</span>
                                <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                            </div>
                        
                            <div class="border-t border-black pt-8 mt-2"/>
                            <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                        </div>
                    )}
                </div>
                <div className='mt-10'>                  
                    <p className='text-xl'>UdyogBharti - Mahadev Jankar <br/> participated in Israel Study tour <br/> with farmers</p>
                    <button onClick={()=>openVideo("https://www.youtube.com/embed/PRrIlw7Vb9E","UdyogBharti - Mahadev Jankar participated in Israel Study tour with farmers")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                        Click Me
                    </button>
                    {isVideoOpen && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                            <div className='flex flex-row justify-between'>
                                <span className='font-medium text-green-500 text-pretty'>{videoTitle}</span>
                                <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                            </div>
                        
                            <div class="border-t border-black pt-8 mt-2"/>
                            <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                        </div>
                    )}
                </div>
            </div>
            <div class="border-t border-black mt-2"/>
            <h1 className='text-3xl text-green-500 font-bold mb-10 mt-10'>STUDY TOUR 2012</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='mt-10'>                  
                    <p className='text-xl'>Udyogbharati Israel <br/> Study 2012</p>
                    <button onClick={()=>openVideo("https://www.youtube.com/embed/coCZdlqGGEM","Udyogbharati Israel Study 2012")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                        Click Me
                    </button>
                    {isVideoOpen && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                            <div className='flex flex-row justify-between'>
                                <span className='font-medium text-green-500 text-pretty'>{videoTitle}</span>
                                <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                            </div>
                        
                            <div class="border-t border-black pt-8 mt-2"/>
                            <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                        </div>
                    )}
                </div>
                <div className='mt-10'>                  
                    <p className='text-xl'>Israel Agro Study Tour <br/> 2012</p>
                    <button onClick={()=>openVideo("https://www.youtube.com/embed/_9yE2EJwTMA","Israel Agro Study Tour 2012")} className='mt-5 text-white py-2 mr-9 w-[200px] text-center bg-blue-950 rounded-full mb-5 hover:scale-105'>
                        Click Me
                    </button>
                    {isVideoOpen && (
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-8 border border-gray-300 rounded-lg">
                            <div className='flex flex-row justify-between'>
                                <span className='font-medium text-green-500 text-pretty'>{videoTitle}</span>
                                <button onClick={() => closeVideo()} className='flex ml-auto'><CloseIcon/></button>  
                            </div>
                        
                            <div class="border-t border-black pt-8 mt-2"/>
                            <ReactPlayer url={currentVideo} controls width='800px' height='450px'/>                       
                        </div>
                    )}
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Morevideos