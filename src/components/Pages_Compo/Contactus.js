import Link from 'next/link';
import Recaptcha from '../../components/Recaptcha';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import React,{useState} from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import contact_banner from '../../../assets/title-bg-2.jpg';
//import Image from 'next/image';

function Contactus() {
    const [isRecaptchaVerified, setRecaptchaVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        setRecaptchaVerified(value !== null);
    };

    const handleSubmit = () => {
    if (isRecaptchaVerified) {
      alert("Form submitted!")  
      console.log("Form submitted!");
    } else {
      alert("reCAPTCHA verification failed")  
      console.error("reCAPTCHA verification failed");
    }
  };

    return (
        <div>
        {/* {
            console.log(contact_banner)
        } */}
            <div className="bg-fixed left-0 sm:w-auto w-auto h-[281px] bg-no-repeat bg-top bg-contain" style={{ backgroundImage: `url('/_next/static/media/title-bg-2.a6f1d98c.jpg')`, backgroundSize: '100% 60%' }}>
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
            <div className='mt-40 ml-40 mr-40'>
                <div className='flex flex-col lg:flex-row mb-8'>
                    <div className="w-full h-96 md:w-800 lg:h-400 lg:w-full">
                        <iframe 
                            className='w-full h-full'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30270.528816264698!2d73.8536568!3d18.491987299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709551306746!5m2!1sen!2sin"
                            width="800" 
                            height="400" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className='bg-green-600 text-left'>
                        <ul className='ml-5'>
                            <li className='text-xl font-bold text-white mt-5'>
                                <h1>Main Registered Office</h1>
                            </li>
                            <li>
                                <p class="text-white transition hover:opacity-75 mt-2"> 
                                    <LocationOnIcon className='mr-2'/>
                                    Ganesh, 2, Flat No.3, Near Vishweshwar Temple, Bijlinagar – Chichwad, Pune -411033. 
                                </p>
                            </li>
                            <li>
                                <p class="text-white transition hover:opacity-75"> 
                                    <LocalPhoneIcon className='mr-2'/>
                                    7030713713 
                                </p>
                            </li>
                            <li>
                                <h1 className='text-xl font-bold text-white mt-6'>Divisional Office, Pune</h1>
                                <p class="text-white transition hover:opacity-75 mt-2"> 
                                    <LocationOnIcon className='mr-2'/>
                                    Office Of Agriculture Graduates Association, Flat 7, Lane 3, Near Karnataka Bank,Behind D Mart, Baner Pune 45.
                                </p>
                            </li>
                            <li>
                                <p class="text-white transition hover:opacity-75"> 
                                    <LocalPhoneIcon className='mr-2'/>
                                    7030713713 
                                </p>
                            </li>
                            <li>
                                <h1 className='text-xl font-bold text-white mt-6'>Email</h1>
                                <p class="text-white transition hover:opacity-75 mt-2"> 
                                    <EmailIcon className='mr-2'/>
                                    agrigraduatesassociation@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-green-500 text-3xl text-pretty'><strong>GET IN TOUCH</strong></h1>
                    <h3>Contact us for best deals and offer</h3>
                </div>
                <div className='mt-[5%] mb-10'>
                    <form onSubmit={handleSubmit} className='sm:space-y-10 space-y-10 justify-center sm:justify-centers'>
                        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 w-auto space-x-10'>
                            <div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="contact"
                                    type="number"
                                    placeholder="Your Contact No."
                                />
                            </div>
                            <div>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>  
                        <div>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[4%]"
                                id="message"
                                type="text"
                                placeholder="Enter Your Message"
                            />
                        </div> 
                        <div>
                            <Recaptcha onChange={handleRecaptchaChange}/>
                        </div> 
                        <div className='text-center'>
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
    )
}

export default Contactus