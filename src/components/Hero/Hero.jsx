import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Ai Machine.json";
import BlurText from "./BlurText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden" data-aos="zoom-in-up">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
         <BlurText
  text="Integrated Systems AI"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl mb-8 font-bold text-blue-500"
/>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Harnessing Artificial Intelligence to drive efficiency, empower workforces, and accelerate innovation.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-lg font-semibold shadow-lg hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 hover:border-white rounded-lg transition-all font-semibold hover:bg-gray-800"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <strong>Core:</strong> Human-centric AI • Scalable solutions • Ethical leadership
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-80 bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center">
            <Lottie animationData={animationData} loop style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
