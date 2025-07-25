import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ThumbsUp, Zap, Star, Globe, Award } from 'lucide-react';

const reasons = [
  {
    icon: <ThumbsUp className="w-8 h-8 text-yellow-500" />, 
    title: "Trusted by Global Jewelers",
    desc: "Over two decades of proven experience delivering reliable and exquisite jewelry exports to top brands worldwide."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />, 
    title: "Innovative Designs & Craftsmanship",
    desc: "We invest in cutting-edge design and technology to keep your collections fresh and captivating."
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />, 
    title: "Unmatched Quality Assurance",
    desc: "Every piece undergoes strict quality checks and meets international jewelry standards."
  },
  {
    icon: <Globe className="w-8 h-8 text-yellow-500" />, 
    title: "Worldwide Distribution Network",
    desc: "Strong partnerships and support teams across 6 continents ensuring seamless global deliveries."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">Why Choose Us</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">Setting the Standard in Jewelry Exports</h3>
        <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Instead of just telling you what we do, here’s how we empower jewelers, scale businesses, and shine a light on the global stage.
        </p>
      </motion.div>

      {/* Reasons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition space-y-4 text-center"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
            <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Highlight Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-2xl p-10 mb-20"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Commitment</h3>
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              We don’t just export jewelry—we build lasting relationships. From design consultation to after-sales service, we stand by you every step of the way. Our partners choose us because we care about their success as much as our own.
            </p>
            <ul className="space-y-3">
              {['Dedicated support team', 'Ethical sourcing and sustainable practices', 'Continuous innovation in design'].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=800&auto=format&fit=crop&q=60"
            alt="Our Commitment"
            className="rounded-2xl shadow-lg w-full h-72 object-cover"
          />
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-yellow-50 rounded-2xl p-10">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Let’s Shine Together</h4>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Join the network that’s setting new standards in jewelry exports. Together, we’ll craft brilliance that captivates the world.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium text-lg transition">
            Partner With Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
