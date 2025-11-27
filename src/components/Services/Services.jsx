import React from 'react';

const Services = () => {
    const cardClass =
"bg-[#0f172a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-lg hover:scale-[1.02] transition-transform duration-300";
    return (
        <div>
        <section className="min-h-screen bg-gray-900 text-white px-6 py-16 md:px-12">
<div data-aos="zoom-in-up" className="max-w-4xl mx-auto text-center mb-14">
<h2 className="text-4xl font-bold tracking-wide">Our Services and Strategic Focus</h2>
</div>


<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
{/* AI Research & Development Lab */}
<div data-aos="fade-up" className={cardClass}>
<h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg> AI Research & Development Lab</h3>
<p className="text-gray-300 leading-relaxed">
Headquartered in the United Kingdom with a dedicated operations and engineering
hub in Bangladesh, we focus on the development of intelligent, scalable AI
technologies that solve real-world business challenges.
</p>
</div>


{/* Integrated AI Solutions */}
<div data-aos="fade-up" className={cardClass}>
<h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg> Integrated AI Solutions</h3>
<p className="text-gray-300 leading-relaxed">
We build intelligent platforms and automation agents that integrate seamlessly
with existing software ecosystems. These tools are engineered to improve
performance, reduce operational friction, and elevate decision-making — without
disrupting current infrastructure.
</p>
</div>


{/* Branded Ventures */}
<div data-aos="fade-up" className={cardClass}>
<h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg> Branded Ventures</h3>
<p className="text-gray-300 leading-relaxed">
Public-facing AI products and services developed under the Integrated Systems AI
banner, including SaaS platforms, enterprise APIs, and sector-specific AI tools
for manufacturing, logistics, finance, healthcare, and agriculture.
</p>
</div>


{/* Shadow Ventures */}
<div data-aos="fade-up" className={cardClass}>
<h3 className="text-2xl font-semibold text-blue-300 mb-3 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.03 3 3 7.03 3 12h18c0-4.97-4.03-9-9-9z" /></svg> Shadow Ventures</h3>
<p className="text-gray-300 leading-relaxed">
Stealth-mode companies incubated and operated using our infrastructure in
Bangladesh, targeting niche, high-growth verticals without direct public
association to Integrated Systems AI.
</p>
</div>
</div>
</section>
        </div>
    );
};

export default Services;