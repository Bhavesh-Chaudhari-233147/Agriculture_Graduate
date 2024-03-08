import Image from 'next/image'
import React from 'react'
import director from '../../assets/director.jpg';

function DirectorSec() {
  return (
    <section className='bg-blue-50'>
        <div className='ml-40 mt-10 mr-40 w-auto mx-auto '>
            <div className='text-green-500 font-normal mt-5 text-4xl'>
                <h1>DIRECTOR'S DESK</h1>
            </div>
            <div className='grid grid-cols mt-5 mb-5 py-6 lg:grid-cols-2 gap-4 sm:gap-4'>
                <div className=''>
                    <div className='mb-4 lg:mb-0'>
                        <Image src={director} alt='director-Image' className="w-5/5 lg:w-3/5 h-auto sm:w-screen md:w-screen"/>
                    </div>
                    <div className='mt-4 -ml-[41%] lg:text-center text-center md:text-center'>
                        <h1 className='text-green-500 text-xl'><strong>Mr. Mahesh Kadus Patil</strong></h1>
                        <h2 className='text-xl'>Founder & President</h2>
                    </div>
                </div>
                <div className='flex flex-col mt-5 lg:mt-0 space-y-4 text-justify text-xl md:pl-4 text-gray-500'>
                    <p>
                        Agricultural - Graduates Association & Udyogbharati are sovereign Association in Maharashtra State which are making a revolutionary effect in Agro Industry by the Agricultural graduates.
                    </p>
                    <p>
                        We are proud to mention that we develop an Increase in Agriculture and allied production/profitability, achieve self-employment and increase employment opportunities, develop skilled man-power related to other services also. Farmers in rural areas generally do not have up-to-date information on how to grow crops efficiently and economically. Vocational Agricultural schooling and on-field demonstrations can be particularly helpful in this regard.
                    </p>
                    <p>
                        We now organize regular farmer meets to Educate them about latest technologies from sowing to harvest, & harvest to market. New information and Education disseminated through regular training sessions can give a big fillip to agriculture in the country.
                    </p>
                    <p>
                        Upgraded technology must reach every farmer and concerned professionals in our state/country and to achieve this, we participate in several International standard programs in Maharashtra. Many government schemes have also been organised to help and favor the beneficiaries. Such schemes and programs and seminars will continue to be held to help achieve our aims.
                    </p>
                </div>
            </div>
            </div> 
    </section>
  )
}

export default DirectorSec