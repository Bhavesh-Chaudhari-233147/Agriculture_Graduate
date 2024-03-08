import Image from 'next/image'
import React from 'react'
import graduation_cap from '../../assets/graduation_cap.jpg';
import news from '../../assets/news.png';
import book_cover from '../../assets/book_cover.jpg';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import ListDropdown from './ListDropdown';

function Additional() {
  return (
    <div className='bg-gray-200 flex flex-col justify-between lg:flex-row'>
        <div className='sm:p-5 sm:mx-auto ml-24 mt-4 mb-10 space-x-4 flex flex-row justify-between'>
            <div>
                <Image 
                    src={graduation_cap}
                    alt='graduation_cap'
                    className='w-20 h-19 rounded-full'
                />
            </div>
            <div >
                <ul className='space-y-2'>
                    <li>
                        <h1 className='text-green-500 font-semibold text-xl'>NEXT COURSE : <br/> SALES & MARKETING <br/> ALIGNMENT</h1>
                    </li>
                    <li>
                        <AccessTimeIcon className='text-green-500 mr-2'/>
                        <span>07:00 PM - 09:00 PM</span>
                    </li>
                    <li>
                        <Link href='/register'>
                            <button className='bg-blue-950 text-white rounded-3xl p-3 hover:scale-105'>
                                REGISTER NOW
                            </button>
                        </Link>    
                    </li>
                </ul>
            </div>   
        </div>
        <div className='ml-24 mt-10 mb-10 sm:mx-auto space-x-4 flex flex-row justify-between'>
            <div>
                <Image 
                    src={book_cover}
                    alt='book_cover'
                    className='w-20 h-19 rounded-full'
                />
            </div>
            <div>
                <ul>
                    <li className='mb-3'>
                        <h2 className='text-green-500 font-semibold text-xl'>FOR AVAIL A COPY OF OUR <br/> BOOK "KAAL AAJ UDYA".<br/> PLEASE <br/> CONTACT/DOWNLOAD</h2>
                    </li>
                    <li>
                        <Link href='/'>
                            <button className='bg-blue-950 text-white rounded-3xl p-3 hover:scale-105'>
                                DOWNLOAD NOW
                            </button>
                        </Link>  
                    </li>
                </ul>
            </div>
        </div>
        <div className='ml-24 mt-10 mb-10 sm:mx-auto space-x-4 flex flex-row justify-between'>
            <div>
                <Image 
                        src={news}
                        alt='news'
                        className='w-20 h-19 rounded-full'
                    />
            </div>
            <div>
                <ul>
                    <li className='w-56 h-56'>
                        <ListDropdown/>
                    </li>
                    <li className='-mt-14 items-center'>
                        <Link href='/'>
                            <button className='bg-blue-950 text-white rounded-3xl p-3 hover:scale-105'>
                                DONATE NOW
                            </button>
                        </Link> 
                    </li>
                </ul>          
            </div>
        </div>
    </div>
  )
}

export default Additional