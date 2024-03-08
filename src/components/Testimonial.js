import React from 'react'
import TestimonialSlide from './TestimonialSlide'
import member1 from '../../assets/Mahadev-Jankar.jpg';
import member2 from '../../assets/Parvin-Gaikwad.jpg';

function Testimonial() {
    const Testimonials = [
        {
            image: member1,
            comment:`“I participated in Udyogbharati’s Agriculture study tour, not as an MLA, 
            but as a regular trainee. I was keen to see the latest technologies in goat 
            &amp; sheep rearing &amp; livestock development. I experienced the finest 
            technologies &amp; learnt about the best management practices used in Dairy 
            Farming. Along with farmers from Maharashtra, I visited about 20 Agro projects 
            &amp; 3 tourist spots. I will make an effort to bring to Maharashtra, at an 
            affordable rate, the technology used by Israel for breeding 5000 dairy cattle 
            using minimum manpower.”`,
            name:'Mr. Mahadev Jankar',
            postion:'Ex. Cabinet Minister, Animal Husbandry, Dairy Development and Fisheries Development',
        },
        {
            image: member2,
            comment:`“
            I Traveled about 65 countries. While doing my business and social work I always curious about 
            Jewish culture and development of Israel.I have my own agriculture land in Akluj. I started new 
            practices after visiting Israel. I experienced Israels development and new Agro techniques through this study tour.  
            I also will mention this specially  our organizer explored us Jordan and Palestine which are near by countries In 
            mentioned cost only.  among the 65 countries whatever i haven't seen that thoroughly experienced at one place in Israel. 
            I returned with a great motivation from Israel to work for Agriculture and society.”`,  
            name:'Mr. Parvin Gaikwad',
            postion:'State President, Sambhaji Brigade and Entrepreneur',
        },
    ]

    return (
        <div>
            <div className='ml-10 mt-10 text-green-500 font-medium text-4xl'>
                <h1>TESTIMONIALS</h1>
            </div>
            <div className='ml-1 items-center'>
                <TestimonialSlide data={Testimonials}/>
            </div>
        </div>   
  )
}

export default Testimonial