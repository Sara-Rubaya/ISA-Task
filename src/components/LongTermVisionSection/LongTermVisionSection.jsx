// LongTermVisionSection.jsx
import React from 'react';
import { SparklesIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LongTermVisionSection = () => {
  const longTermGoals = [
    {
      text: "Becoming a strategic investor and incubator for AI-powered ventures in emerging markets.",
      icon: <SparklesIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      text: "Leading the development of intelligent integration systems for SMEs and enterprises",
      icon: <AcademicCapIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      text: "Driving ethical and inclusive AI adoption on a global scale",
      icon: <GlobeAltIcon className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white px-6 py-16 md:px-12 relative overflow-hidden">
      {/* Title */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Our Long-Term Vision
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Integrated Systems AI aims to be more than a product company. We are building a platform for sustainable AI innovation.
        </p>
      </div>

      {/* Goals List */}
      <div className="max-w-3xl mx-auto grid gap-6">
        {longTermGoals.map((goal, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex items-start space-x-4 bg-gray-800/30 rounded-xl px-6 py-4 hover:bg-blue-900/40 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">
              {goal.icon}
            </div>
            <p className="text-white text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">
              {goal.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LongTermVisionSection;
