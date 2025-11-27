import React from 'react';

const EnhancingCapability = () => {
  const points = [
    "Eliminating inefficiencies across industries",
    "Augmenting, not replacing, human capital",
    "Scaling intelligent operations sustainably",
    "Empowering teams with actionable intelligence",
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16 md:px-12">

      {/* Title */}
      <div data-aos="zoom-in-up" className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Enhancing Human Capability Through AI
        </h2>
      </div>

      {/* Intro Text */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-20 text-gray-300 leading-relaxed">
        Our AI systems are built to work alongside your teams — automating repetitive
        tasks, uncovering data-driven insights, and improving the speed and quality of
        decision-making.
      </div>

      {/* Points flowing layout */}
      <div className="relative max-w-6xl mx-auto">
        <svg className="absolute left-1/2 transform -translate-x-1/2 h-full" width="2" height="100%" viewBox="0 0 2 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="0" x2="1" y2="100%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 8"/>
        </svg>

        {points.map((text, idx) => (
          <div key={idx} data-aos="fade-up" className={`flex items-center mb-16 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-400 rounded-full z-10"></div>
              <p className="text-white text-lg md:text-xl max-w-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Paragraph */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mt-16 text-gray-300 leading-relaxed">
        Whether you're in logistics, manufacturing, healthcare, finance, or agriculture,
        our solutions are designed to support your workforce and enhance your
        organization's ability to adapt, grow, and lead.
      </div>
    </section>
  );
};

export default EnhancingCapability;
