import Link from 'next/link'
import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import CircleIcon from '@mui/icons-material/Circle';
import register_banner from '../../../assets/title-bg-5.jpg';
//import Image from 'next/image';

function Register() {
  return (
    <div>
    {
        console.log(register_banner)
    }
        <div>
            <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-5.e3e7f6fd.jpg')`, backgroundSize: '100% 60%' }}>
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
        <div className='mt-40 ml-40 mr-40 sm:space-x-[-10]'>
           <h1 className='text-green-500 font-medium text-4xl ml-8'>Register With Us</h1>
           <div>
           <div className="container mx-auto gap-y-8 p-4">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Mobile
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="number"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email ID"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    placeholder="dd-mm-yyy"
                  />
                </div>
                <div className="mb-6 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-5">
                  <div className='lg:w-'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                      Country
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="country"
                      name="country"
                    >
                      <option value="" disabled selected>--Select your country--</option>
                      <option value='ai'>Aland Islands</option>
                      <option value="al">Albania</option>
                      <option value="af">Afghanistan</option>
                      <option value="an">Angola</option>
                      <option value="antra">Antarctica</option>
                      <option value="ber">Bermuda</option>
                      <option value="bra">Brazil</option>
                      <option value="bel">Belgium</option>
                      <option value="cam">Cambodia</option>
                      <option value="ch">China</option>
                      <option value="con">Congo</option>
                      <option value="canada">Canada</option>
                      <option value="den">Denmark</option>
                      <option value="eg">Egypt</option>
                      <option value="fr">France</option>
                      <option value="fin">Finland</option>
                      <option value="usa">United States</option>
                      <option value="ind">India</option>
                      <option value="indo">Indonesia</option>
                      <option value="ir">Iran</option>
                      <option value="zam">Zambia</option>
                      <option value="zim">Zimbabwe</option>
                      <option value="van">Vanuatu</option>
                      <option value="vie">Vietnam</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                        State
                      </label>
                      <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                      name="state"
                      >
                        <option value="" disabled selected>--Select your state--</option>
                        <option value='ai'>Maharashtra</option>
                        <option value="al">UP</option>
                        <option value="af">MP</option>
                        <option value="an">Delhi</option>
                        <option value="an">Chattisgarh</option>
                      </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City
                      </label>
                      <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="city"
                      name="city"
                      >
                        <option value="" disabled selected>--Select your city--</option>
                        <option value='ai'>Jalgaon</option>
                        <option value="al">Mumbai</option>
                        <option value="af">Pune</option>
                        <option value="an">Delhi</option>
                        <option value="an">Ahamadnagar</option>
                      </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                    Have Passport?
                  </label>
                  <div className="flex flex-col lg:flex-row gap-y-2">
                    <input
                        type="radio"
                        id="agreeYes"
                        name="agree"
                        value="yes"
                        className="mr-2"
                    />
                    <label htmlFor="agreeYes" className="text-sm">
                        Yes
                    </label>
                    <input
                        type="radio"
                        id="agreeNo"
                        name="agree"
                        value="no"
                        className="ml-4 mr-2"
                    />
                    <label htmlFor="agreeNo" className="text-sm">
                        No
                    </label>
                  </div>
                </div>
                <div>
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                   Interested In
                  </label>
                  <div className="flex flex-col items-center lg:flex-row gap-y-2">
                    <input
                      type="checkbox"
                      id="be_a_member"
                      name="member"
                      value="member"
                      className="mr-2"
                    />
                    <label htmlFor="member" className="text-sm">
                      Be a Member / Volunteer
                    </label>
                    <input
                      type="checkbox"
                      id="israel_tour"
                      name="tour"
                      value="tour"
                      className="ml-4 mr-2"
                    />
                    <label htmlFor="tour" className="text-sm">
                      Israel Agro Study Tour
                    </label>
                    <input
                      type="checkbox"
                      id="sikkim_tour"
                      name="sktour"
                      value="sktour"
                      className="ml-4 mr-2"
                    />
                    <label htmlFor="sktour" className="text-sm">
                      Sikkim Organic Tour
                    </label>
                    <input
                      type="checkbox"
                      id="yuva_awards"
                      name="yawards"
                      value="yawards"
                      className="ml-4 mr-2"
                    />
                    <label htmlFor="yawards" className="text-sm">
                      Yuvapratap Awards
                    </label>  
                    <input
                      type="checkbox"
                      id="pannualbook"
                      name="annualbook"
                      value="annualbook"
                      className="ml-4 mr-2"
                    />
                    <label htmlFor="annualbook" className="text-sm">
                      Purchase Our Annual Book   
                    </label> 
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Education
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Education"
                  />  
                </div>
                <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  name="city"
                >
                  <option value="" disabled selected>--Select university--</option>
                  <option value="1">MPKV - Mahatma Phule Krishi Vidyapith, Rahuri, Ahmednagar</option>
                  <option value="2">BSKKV - Balasaheb Sawant Kokan Krushi Vidyapith</option>
                  <option value="3">VNMKV - Vasantrao Naik Marathwada Krushi Vidyapith</option>
                  <option value="4">PDKV - Panjabrao Deshmukh Krushi Vidyapit</option>
                  <option value="5">Indian Institute of Technology Bombay</option>
                  <option value="15">North Maharashtra University</option>
                  <option value="6">Savitribai Phule Pune University</option>
                  <option value="7">Tata Institute of Social Sciences</option>
                  <option value="8">Narsee Monjee Institute of Management and Higher Studies</option>
                  <option value="12">Indian Institute of Science Education and Research, Pune</option>
                  <option value="22">Dr. Babasaheb Ambedkar Marathwada University</option>
                  <option value="52">Kavi Kulguru Kalidas Sanskrit Vishwavidyalaya</option>
                  <option value="47">Datta Meghe Institute of Medical Sciences</option>
                  <option value="58">Other</option>
                </select> 
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    type="text"
                    placeholder="Enter Your Message"
                  />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                      What You Do?
                      </label>
                      <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="wdy"
                      name="wdy"
                      >
                        <option value="" disabled selected>--Select your city--</option>
                        <option value="entreprenuer">Self Employed</option>
                        <option value="student">Student</option>
                        <option value="farmer">Farmer</option>
                        <option value="nokardar">Employer</option>
                      </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2 mt-3" htmlFor="city">
                      What kind of registration are you doing?
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="regis"
                        name="regis"
                      >
                        <option value="" disabled selected>--Select your city--</option>
                        <option value="studentyr">Student Annual Registration</option>
                        <option value="bearer">Triennial registration as an office bearer</option>
                        <option value="member">Registration as a life member of the organization</option>
                      </select>
                  </div>
                  <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-5" htmlFor="dob">
                    Have you registered before?
                  </label>
                  <div className="flex items-center">
                  <input
                    type="radio"
                    id="agreeYes"
                    name="agree"
                    value="yes"
                    className="mr-2"
                  />
                  <label htmlFor="agreeYes" className="text-sm">
                    Yes
                  </label>
                  <input
                    type="radio"
                    id="agreeNo"
                    name="agree"
                    value="no"
                    className="ml-4 mr-2"
                  />
                  <label htmlFor="agreeNo" className="text-sm">
                    No
                  </label>
                  </div>
                </div>
                <div className="flex flex-row justify-start space-x-5">
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>  
                </div>
              </form>
            </div>
           </div>
        </div>
        <div className='mt-40 ml-40 mr-40 mb-5'>
          <div className='space-y-4 border-green-500 border-solid border-8 p-10 -mt-8'>
              <ul className='text-green-500 text-pretty font-bold text-2xl space-y-4'>
                <li>
                   <p><CircleIcon className='w-2 mr-3'/>Student Annual Post - 100 / -</p>
                </li>
                <li>
                  <p><CircleIcon className='w-2 mr-3'/>Student Annual Volunteer Officer Post - 500 / -</p>
                </li>
                <li>
                  <p><CircleIcon className='w-2 mr-3'/>Organization Youth and Voluntary Items Annual Donation - 2300 / -</p>
                </li>
                <li>
                  <p><CircleIcon className='w-2 mr-3'/>Lifetime Volunteer Member Donation - 10,400 / -</p>
                </li>
              </ul>
              <br/>
              <p>
                <strong>Name - </strong>
                AGRICULTURE GRADUATE'S ASSOCIATION
              </p>
              <p>
                <strong>Bank Name - </strong>
                ICICI
              </p>
              <p>
                <strong>Account No. - </strong>
                000501058531
              </p>
              <p>
                <strong>Branch Name - </strong>
                BUND GARDEN ROAD ,PUNE.
              </p>
              <p>
                <strong>IFSC Code - </strong>
                ICIC0000005
              </p>
          </div>
        </div>
      <div className='mt-20 ml-40 mr-40 space-y-5'>
        <h2 className='text-green-500 text-2xl font-bold'>Download Our Registration Form</h2>
        <ul className='space-y-5 text-blue-700 text-xl'>
          <li>
            <CircleIcon className='w-2 mr-3'/>
            <Link href=''>Be a Volunteer/Donor Form</Link>
          </li>
          <li>
            <CircleIcon className='w-2 mr-3'/>
            <Link href=''>Israel Agro Tour Form</Link>
          </li>
          <li>
            <CircleIcon className='w-2 mr-3'/>
            <Link href=''>Sikkim Organic Tour Form</Link>
          </li>
          <li>
            <CircleIcon className='w-2 mr-3'/>
            <Link href=''>Yuvapratap Awards Form</Link>
          </li>
          <li>
            <CircleIcon className='w-2 mr-3'/>
            <Link href='/register'>YKDBS Registration Form</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Register