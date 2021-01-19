import React from 'react';
import Intro from './Intro';
import About from './About';
import Service from './Service';
// import Testimonials from '../components/Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/landing.css';
const Landing = () => {

    return(
        <>
            <Intro></Intro>
            <About></About>
            <Service></Service>
            {/* <Testimonials></Testimonials> */}
            <Contact></Contact>
            <Footer></Footer>
        </>
    );

}

export default Landing;