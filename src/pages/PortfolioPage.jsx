import React from 'react';
import { motion } from 'framer-motion';

const jewelryProjects = [
  {
    title: 'Diamond Solitaire Ring',
    category: 'Rings',
    image:
      'https://images.unsplash.com/photo-1643237347226-472a1b500848?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Emerald Bridal Necklace',
    category: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1605102062083-ae61a51393f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Gold Bangle Set',
    category: 'Bracelets',
    image:
      'https://plus.unsplash.com/premium_photo-1739557422500-9067b2e6e128?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Traditional Kundan Set',
    category: 'Bridal',
    image:
      'https://images.unsplash.com/photo-1583878543723-dcd6ad8bcb3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Ruby Choker Design',
    category: 'Custom',
    image:
      'https://plus.unsplash.com/premium_photo-1740020241546-1fedd053207b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Minimalist Diamond Studs',
    category: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1643237268922-25dbcdaf4770?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const JewelryPortfolioPage = () => {
  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto text-gray-800">
      {/* Header (Left aligned) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="text-sm text-yellow-600 font-semibold uppercase tracking-wider mb-2">
          Our Portfolio
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-4">
          Crafting Elegance. <br className="hidden sm:block" /> Exporting Excellence.
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Discover signature jewelry designs that blend artisanal craftsmanship with global luxury —
          curated to captivate and created to endure.
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {jewelryProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full break-inside-avoid overflow-hidden rounded-xl shadow-md group relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
              <p className="text-sm text-yellow-300">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JewelryPortfolioPage;
