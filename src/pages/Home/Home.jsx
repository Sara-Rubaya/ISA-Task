import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import Vision from '../../components/Vision/Vision';
import Services from '../../components/Services/Services';
import EnhancingCapability from '../../components/EnhancingCapability/EnhancingCapability';
import GlobalVision from '../../components/GlobalVision/GlobalVision';
import LongTermVisionSection from '../../components/LongTermVisionSection/LongTermVisionSection';
import WhyChooseSection from '../../components/WhyChooseUs/WhyChooseUs';
import ContactUs from '../../components/ContactUs/ContactUs';



const Home = () => {
    return (
 <div>
      <section id="home">
        <Hero />
      </section>

      <section id="vision">
        <Vision />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="enhancing">
        <EnhancingCapability />
      </section>

      <section id="global">
        <GlobalVision />
      </section>

      <section id="longterm">
        <LongTermVisionSection />
      </section>

      <section id="whyus">
        <WhyChooseSection />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
    
    );
};

export default Home;