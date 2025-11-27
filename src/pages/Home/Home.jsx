import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import Vision from '../../components/Vision/Vision';
import Mission from '../../components/Vision/Mission';
import Services from '../../components/Services/Services';



const Home = () => {
    return (
 <div>
      <Hero></Hero>
      <Vision></Vision>
      <Mission></Mission>
      <Services></Services>
   
 </div>
    
    );
};

export default Home;