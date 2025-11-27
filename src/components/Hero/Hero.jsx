import React from 'react'


export default function Hero() {
return (
<section className=" py-20">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Integrated Systems AI</h1>
<p className="mt-4 text-lg text-slate-600">Harnessing Artificial Intelligence to drive efficiency, empower workforces, and accelerate innovation.</p>


<div className="mt-6 flex gap-3">
<a href="#services" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:opacity-95">Explore Services</a>
<a href="#contact" className="inline-block border border-slate-200 px-5 py-3 rounded-md">Contact Us</a>
</div>


<div className="mt-6 text-sm text-slate-500">
<strong>Core:</strong> Human-centric AI • Scalable solutions • Ethical leadership
</div>
</div>


<div className="p-6 rounded-xl bg-white shadow-md">
<div className="h-56 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-md flex items-center justify-center text-slate-400">Image / Mockup</div>
</div>
</div>
</section>
)
}