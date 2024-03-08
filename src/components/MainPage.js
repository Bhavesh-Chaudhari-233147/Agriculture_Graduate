import React from 'react'
import ImageSlide from "../components/ImageSlide"
import AboutusMainPage from "../components/AboutMainPage";
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import DirectorSec from './DirectorSec';
import UpcomingEvents from './UpcomingEvents';
import Sponsors from './Sponsors';
import Testimonial from './Testimonial';
import Additional from './Additional';

function MainPage() {
    const images = [
        banner1,
        banner2,
    ];

    return (
        <div>
            <ImageSlide image={images}/>
            <Additional/>
            <AboutusMainPage/>
            <DirectorSec/>
            <UpcomingEvents/>
            <Sponsors/>
            <Testimonial/>
        </div>
  )
}

export default MainPage