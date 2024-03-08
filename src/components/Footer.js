import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';

function Footer() {
  return (
    <footer class="bg-green-300">
        <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:space-y-16 lg:px-8">
            <div className='max-w-[1240px] mx-auto'>
            <div
                class="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8  lg:grid-cols-4 lg:pt-16"
            >
                <div>
                <p class="font-medium text-gray-900">MAIN REGISTERED OFFICE</p>

                <ul class="mt-6 space-y-4 text-sm">
                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <LocationOnIcon className='mr-2'/>
                        Ganesh, 2, Flat No.3, Near Vishweshwar Temple, Bijlinagar – Chichwad, Pune -411033. 
                    </p>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <LocalPhoneIcon className='mr-2'/>
                        7030713713 
                    </p>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <EmailIcon className='mr-2'/>
                        agrigraduatesassociation@gmail.com
                    </p>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <Link 
                        href="https://www.facebook.com/agamsudyogbharati" className='mr-2'>
                        <FacebookIcon/>
                        </Link>
                        <Link href="https://www.instagram.com/" className='mr-2'>
                        <InstagramIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com/" className='mr-2'>
                        <LinkedInIcon/>
                        </Link>    
                    </p>
                    </li>
                </ul>
                </div>

                <div>
                <p class="font-medium text-gray-900">DIVISIONAL OFFICE, PUNE</p>

                <ul class="mt-6 space-y-4 text-sm">
                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <LocationOnIcon/>
                        Office Of Agriculture Graduates Association, Flat 7, Lane 3, Near Karnataka Bank, Behind D Mart, Baner Pune 45.
                    </p>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75">
                        <LocalPhoneIcon/>
                        7030713713
                    </p>
                    </li>
                </ul>
                </div>

                <div>
                <p class="font-medium text-gray-900">UPCOMING EVENTS</p>

                <ul class="mt-6 space-y-4 text-sm">
                    <li>
                    <Link href="http://agriandgraduates.org#upcoming-events" class="text-gray-700 transition hover:opacity-75"> Yuva Pratap Agriculture and Social Award. </Link>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75"> 
                        <AccessTimeIcon className='mr-2'/>
                        7 June 2020-2021
                    </p>
                    </li>

                    <li>
                    <Link href="http://agriandgraduates.org#upcoming-events" class="text-gray-700 transition hover:opacity-75">
                    Israel Agricultural Study Tour.
                    </Link>
                    </li>

                    <li>
                    <p class="text-gray-700 transition hover:opacity-75">
                        <AccessTimeIcon className='mr-2'/>
                        Oct. 2020 and May 2021
                    </p>
                    </li>
                </ul>
                </div>

                <div>
                <p class="font-medium text-gray-900">LINKS</p>

                <ul class="mt-6 space-y-4 text-sm">
                    <li>
                    <Link href="/foundersandmembers" class="text-gray-700 transition hover:opacity-75"> Founders & Members </Link>
                    </li>

                    <li>
                    <Link href="#" class="text-gray-700 transition hover:opacity-75"> yuvapratap Awards </Link>
                    </li>

                    <li>
                    <Link href="/study_tour_program" class="text-gray-700 transition hover:opacity-75"> Israel Agro Study Tour </Link>
                    </li>

                    <li>
                    <Link href="#" class="text-gray-700 transition hover:opacity-75"> Register </Link>
                    </li>

                    <li>
                    <Link href="#" class="text-gray-700 transition hover:opacity-75"> Contact Us </Link>
                    </li>
                </ul>
                </div>
            </div>
            <p class=" text-gray-500 flex justify-center text-lg">&copy; 2024. SOFT THE NEXT. All rights reserved | Design by :
                <a href='https://www.softthenext.com/'>SOFT THE NEXT</a>
            </p>
            </div>  
        </div>
    </footer>
  )
}

export default Footer