import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function OurMission({ companyName = "Crosson" }) {
  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest leading-tight text-gray-900 mb-6">
          Our Mission
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
          At <span className="font-medium underline decoration-black underline-offset-4">{companyName}</span>, our mission is to revolutionize the food‑tech industry by blending innovative technology, sustainability, and automation. We are dedicated to crafting impactful solutions that accelerate progress, empower communities worldwide, and inspire excellence across the globe.
        </p>
      </motion.div>

      {/* Mission Detail Sections */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-gray-900">
            Driving Innovation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We lead with a spirit of innovation, constantly developing cutting‑edge automation tools and advanced software systems that redefine food production. By embracing emerging technologies, we address global challenges with visionary strategies that optimize efficiency and quality.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 text-sm">
            <li>Building integrated, intelligent food‑tech ecosystems</li>
            <li>Collaborating with industry leaders, startups, and research institutions</li>
            <li>Pioneering sustainable production and resource optimization methods</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&auto=format&fit=crop&q=60"
            alt="Innovation showcase"
            className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Values Grid */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-24">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest mb-12 text-center text-gray-900">
          Core Pillars of Our Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "Shaping future‑ready food‑tech solutions through advanced tools, AI integration, and seamless automation.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60"
            },
            {
              title: "Sustainability",
              desc: "Driving circular economy initiatives to minimize waste, conserve resources, and foster environmental stewardship.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60"
            },
            {
              title: "Global Impact",
              desc: "Empowering diverse communities and businesses by delivering scalable, adaptable solutions that transcend borders.",
              img: "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?q=80&w=580&auto=format&fit=crop"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-xl transition"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold uppercase tracking-wide text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extended Mission Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 max-w-4xl mx-auto space-y-6 text-center text-gray-700"
      >
        <p>
          As we grow and innovate, our mission remains rooted in fostering meaningful partnerships that respect tradition while embracing cutting‑edge technology. We believe that lasting change in food‑tech comes from a balance of heritage and bold new ideas.
        </p>
        <p>
          Our commitment goes beyond technology — it’s about cultivating a global community dedicated to sustainability, transparency, and shared success. We’re driven by the passion to build a future where food production is smarter, more efficient, and accessible to all.
        </p>
        <p>
          At {companyName}, innovation is a collaborative journey. By engaging with thought leaders, entrepreneurs, and visionaries worldwide, we continuously evolve to meet the challenges of tomorrow while honoring the values that define us today.
        </p>
      </motion.div>

      {/* Call To Action Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-10 bg-black text-white rounded-2xl text-center mt-24"
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
          Join Us On This Journey
        </h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
          We are more than just a company — we are a movement dedicated to shaping the future of food technology. Together, let’s innovate smarter, grow faster, and build a sustainable world.
        </p>
        <Link
          to="/contact"
          className="inline-block border border-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-full text-sm uppercase tracking-widest transition-colors"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
