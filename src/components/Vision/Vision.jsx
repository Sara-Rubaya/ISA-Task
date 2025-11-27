// AOS animation used instead of Framer Motion


export default function Vision() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center bg-gray-900 text-white p-10">
      <div data-aos="zoom-in-up" className="max-w-3xl text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-wide">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          To build and scale intelligent systems that reshape industries, streamline
          processes, and empower the emerging markets of tomorrow through AI
          innovation.
        </p>
      </div>
    </section>
  );
}
