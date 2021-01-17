import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Service from '../components/Service';
// import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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