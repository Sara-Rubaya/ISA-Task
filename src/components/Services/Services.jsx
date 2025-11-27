// Services.jsx
import React from "react";
import { CpuChipIcon, Squares2X2Icon, BuildingStorefrontIcon, EyeIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      title: "AI Research & Development Lab",
      description:
        "Headquartered in the United Kingdom with a dedicated operations and engineering hub in Bangladesh, we focus on the development of intelligent, scalable AI technologies that solve real-world business challenges.",
      icon: <CpuChipIcon className="w-7 h-7 text-blue-400" />,
    },
    {
      title: "Integrated AI Solutions",
      description:
        "We build intelligent platforms and automation agents that integrate seamlessly with existing software ecosystems. These tools are engineered to improve performance, reduce operational friction, and elevate decision-making — without disrupting current infrastructure.",
      icon: <Squares2X2Icon className="w-7 h-7 text-blue-400" />,
    },
    {
      title: "Branded Ventures",
      description:
        "Public-facing AI products and services developed under the Integrated Systems AI banner, including SaaS platforms, enterprise APIs, and sector-specific AI tools for manufacturing, logistics, finance, healthcare, and agriculture.",
      icon: <BuildingStorefrontIcon className="w-7 h-7 text-blue-400" />,
    },
    {
      title: "Shadow Ventures",
      description:
        "Stealth-mode companies incubated and operated using our infrastructure in Bangladesh, targeting niche, high-growth verticals without direct public association to Integrated Systems AI.",
      icon: <EyeIcon className="w-7 h-7 text-blue-400" />,
    },
  ];

  return (
    <section className="bg-gray-900 text-white px-6 py-20 md:px-12">
      {/* Section Title */}
      <div data-aos="zoom-in-up" className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Our Services and Strategic Focus
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-gray-800/20 hover:bg-blue-900/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              {service.icon}
              <h3 className="text-2xl font-semibold text-blue-300">{service.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
