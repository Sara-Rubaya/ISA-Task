import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa"; // Icons for vision & mission

export default function VisionMission() {
  const sections = [
    {
      title: "Our Vision",
      text: "To become a global leader in AI-driven solutions, empowering businesses and individuals with human-centric, scalable, and ethical technology.",
      icon: <FaEye size={40} className="text-indigo-500 mb-4" />,
    },
    {
      title: "Our Mission",
      text: "We are committed to designing and deploying AI-powered agents and integrated solutions that reduce inefficiencies, optimize operations, and create sustainable growth — starting in Bangladesh and expanding into global markets.",
      icon: <FaBullseye size={40} className="text-green-500 mb-4" />,
    },
  ];

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <div className="flex flex-col items-center text-center">
              {section.icon}
              <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
