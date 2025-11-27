// ContactUs.jsx
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <section className="relative bg-gray-900 text-white px-6 py-24 md:px-12 overflow-hidden">
      
     
      
      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Partner with Us
        </h2>

        {/* Intro Text */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Whether you're looking to modernize your operations, automate key processes, 
          or explore the transformative power of AI in your sector — we’re here to build with you.
        </p>

        {/* Contact Email */}
        <a
          href="mailto:buildwith@intergratedsystems.ai"
          className="inline-flex items-center space-x-3 bg-blue-900/20 hover:bg-blue-900/40 transition-colors rounded-full px-6 py-4 text-lg md:text-xl font-medium text-blue-400 hover:text-white"
        >
          <EnvelopeIcon className="w-6 h-6" />
          <span>buildwith@intergratedsystems.ai</span>
        </a>

        {/* Company Info */}
        <div className="text-gray-300 text-lg md:text-xl font-medium">
          Integrated Systems AI Ltd
        </div>

        {/* Tagline */}
        <p className="text-gray-400 italic text-base md:text-lg">
          Integrating industries with the power of AI.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
