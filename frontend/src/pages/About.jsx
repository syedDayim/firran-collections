import React from 'react';
import "../styles/about.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/responsive.css";
import MainSlider from '../components/aboutComponents/MainSlider';
import AboutSection from '../components/aboutComponents/AboutSection';
import FeaturesSection from '../components/aboutComponents/FeaturesSection';
import PortfolioSection from '../components/aboutComponents/PortfolioSection';
import ClientsSection from '../components/aboutComponents/ClientsSection';
import BlogSection from '../components/aboutComponents/BlogSection';
import ContactSection from '../components/aboutComponents/ContactSection';
import TeamSection from '../components/aboutComponents/TeamSection';
import NewsletterSection from '../components/aboutComponents/NewsletterSection';
import CounterSection from '../components/aboutComponents/CounterSection';
import Testimonial from '../components/aboutComponents/Testimonial';


const About = () => {
    return (
        <>
        
       
        
        <div id="wrapper">
            <main id="main">
                <MainSlider />
                <AboutSection />
                {/* <FeaturesSection /> */}
                <PortfolioSection />
                {/* <ClientsSection /> */}
                <TeamSection />
                <Testimonial />
                <NewsletterSection />
                <CounterSection />
                {/* <BlogSection /> */}
                <ContactSection />
            </main>
        </div>
        </>
    );
};

export default About;
