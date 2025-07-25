import React from 'react';
import { CheckCircle, Target, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 md:px-16 py-10 max-w-7xl mx-auto">
      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src="https://plus.unsplash.com/premium_photo-1661301087289-a9067c2f933f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Jeweler team"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900 mb-6 leading-tight">
            It’s everything <br className="hidden sm:block" /> you’ll ever need.
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
            From custom design blocks to ethical sourcing and global shipping, we offer a complete
            solution for brands looking to scale with excellence.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Gem className="w-6 h-6 text-black mt-1" />
              <span className="text-sm text-gray-700 leading-snug">
                100+ Unique Jewelry Styles carefully crafted for modern markets.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-black mt-1" />
              <span className="text-sm text-gray-700 leading-snug">
                Export-ready packaging and mobile-first catalogs for every buyer touchpoint.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h4 className="text-xl font-semibold uppercase tracking-widest text-gray-900 mb-2 flex items-center gap-3">
              <Target className="w-5 h-5 text-black" />
              Align Tactics with Objectives
            </h4>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg">
              Whether it’s market-specific trends or niche luxury, we align our craft with your
              business model to ensure scale and profitability.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold uppercase tracking-widest text-gray-900 mb-2 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-black" />
              Deliver Measurable Results
            </h4>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg">
              From sampling to shipment, we measure outcomes and provide data to help you optimize
              performance, not just aesthetics.
            </p>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team collaboration"
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />
      </div>
    </section>
  );
}
