import React from 'react'
import animationData from "../../assets/Ai Machine.json"
import Lottie from 'lottie-react'
import Shuffle from './BlurText'
import BlurText from './BlurText';



export default function Hero() {
    const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

return (
<section className="py-20 " data-aos="zoom-in-up">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
<div>
<BlurText
  text="Integrated Systems AI"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl mb-8 font-bold text-blue-500"
/>
<p className="mt-4 text-lg text-slate-600">Harnessing Artificial Intelligence to drive efficiency, empower workforces, and accelerate innovation.</p>


<div className="mt-6 flex gap-3">
<a href="#services" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:opacity-95">Explore Services</a>
<a href="#contact" className="inline-block border border-slate-200 px-5 py-3 rounded-md">Contact Us</a>
</div>


<div className="mt-6 text-sm text-slate-500">
<strong>Core:</strong> Human-centric AI • Scalable solutions • Ethical leadership
</div>
</div>


<div className="">
<div className="h-56 rounded-md flex items-center justify-center ">
    <Lottie
              animationData={animationData}
              loop={true}
              style={{ height: "280px", width: "280px" }}
            />

</div>
</div>
</div>
</section>
)
}