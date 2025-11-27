import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import Vision from '../../components/Vision/Vision';
import Mission from '../../components/Vision/Mission';
import Services from '../../components/Services/Services';
import EnhancingCapability from '../../components/EnhancingCapability/EnhancingCapability';
import GlobalVision from '../../components/GlobalVision/GlobalVision';
import LongTermVisionSection from '../../components/LongTermVisionSection/LongTermVisionSection';
import WhyChooseSection from '../../components/WhyChooseUs/WhyChooseUs';
import ContactUs from '../../components/ContactUs/ContactUs';



const Home = () => {
    return (
 <div>
      <Hero></Hero>
      <Vision></Vision>
      <Mission></Mission>
      <Services></Services>
      <EnhancingCapability></EnhancingCapability>
      <GlobalVision></GlobalVision>
      <LongTermVisionSection></LongTermVisionSection>
      <WhyChooseSection></WhyChooseSection>
      <ContactUs></ContactUs>
   
 </div>
    
    );
};

export default Home;