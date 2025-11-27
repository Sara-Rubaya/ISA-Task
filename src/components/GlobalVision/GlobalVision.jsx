// GlobalVisionSection.jsx
import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline'; // Make sure heroicons is installed

const GlobalVisionSection = () => {
  const regions = [
    "Southeast Asia",
    "The Middle East",
    "Africa",
    "Other frontier and emerging regions",
  ];

  return (
    <section className="bg-gray-900 text-white px-6 py-16 md:px-12">
      
      {/* Title */}
      <div data-aos="zoom-in-up" className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          A Global Vision with Local Execution
        </h2>
      </div>

      {/* Intro */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-10 text-gray-300 leading-relaxed">
        With Bangladesh as our core engineering and support hub, we combine technical expertise with cost-effective scalability.
      </div>

      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-14 text-gray-300 leading-relaxed">
        Our operational model allows us to rapidly develop, test, and deploy AI solutions across diverse markets — beginning regionally and expanding into:
      </div>

      {/* Regions List with location icon */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {regions.map((region, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex items-center space-x-3 bg-gray-800/30 rounded-xl px-4 py-3 hover:bg-blue-900/40 transition-colors cursor-pointer"
          >
            <MapPinIcon className="w-6 h-6 text-red-400 shrink-0" />
            <span className="text-white font-medium text-lg">{region}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default GlobalVisionSection;
