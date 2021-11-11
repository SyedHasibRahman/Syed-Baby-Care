import React from 'react';
import Reviews from '../Reviews/Reviews/Reviews';
import ServicesForHome from '../ServicesForHome/ServicesForHome';
import Slider from '../Slider/Slider';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Why></Why>
            <ServicesForHome />
            {/* <Testimonial></Testimonial> */ }
            <Reviews></Reviews>
        </div>
    );
};

export default Home;