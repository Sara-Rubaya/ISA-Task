// WhyChooseUs.jsx
import React from 'react';
import { UserGroupIcon, PuzzlePieceIcon, ArrowsPointingOutIcon, CubeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Human-Centric Approach",
      text: "We build AI to empower people, not replace them.",
      icon: <UserGroupIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Seamless Integration",
      text: "Our solutions are designed to enhance, not disrupt, your existing workflows.",
      icon: <PuzzlePieceIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Scalable Solutions",
      text: "Built for local adaptability and global expansion.",
      icon: <ArrowsPointingOutIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Hybrid Model",
      text: "A unique combination of product development, venture building, and strategic deployment.",
      icon: <CubeIcon className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Ethical AI Leadership",
      text: "Committed to responsible and inclusive innovation.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white px-6 py-16 md:px-12">
      {/* Title */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Why Choose Integrated Systems AI?
        </h2>
      </div>

      {/* Features List */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex items-start space-x-4 px-4 py-3 hover:bg-blue-900/20 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-1">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
