import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const customers = [
  {
    name: 'Aisha Kapoor, CEO',
    company: 'ShineCraft Exports',
    country: 'India',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'Their exquisite craftsmanship and timely deliveries have made them our trusted partner for fine jewelry exports.',
  },
  {
    name: 'Luca Rossi, Purchasing Manager',
    company: 'Bella Gioielli',
    country: 'Italy',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'The quality of their diamonds and precious metals is unmatched, and their customer service is exceptional.',
  },
  {
    name: 'Mei Lin, Operations Head',
    company: 'Golden Lotus Imports',
    country: 'China',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'Reliable and professional—our go-to exporter for unique handcrafted jewelry collections.',
  },
  {
    name: 'Carlos Mendes, Director',
    company: 'Rio Gems',
    country: 'Brazil',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'Their meticulous attention to detail ensures every piece meets our high standards for the South American market.',
  },
  {
    name: 'Fatima Al Zahra, Import Manager',
    company: 'Dubai Gold Traders',
    country: 'UAE',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'A dependable partner offering premium jewelry products that resonate well with our luxury clientele.',
  },
  {
    name: 'Emma Johnson, Buyer',
    company: 'Everlasting Jewels',
    country: 'USA',
    avatar: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&auto=format&fit=crop&q=60',
    testimonial:
      'Consistently delivers on quality and service — highly recommended for international jewelry sourcing.',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [currentIndex]);

  const startAutoSlide = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 4000);
  };

  const handleAvatarClick = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="md:w-1/2 space-y-3">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em]">
              Partners
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest leading-tight text-gray-900">
              Ask our <span className="bg-black text-white px-2 inline-block">happy customers</span><br />
              about our quality
            </h2>
          </div>

          <div className="md:w-1/2 min-h-[120px] text-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-lg leading-relaxed"
              >
                <p className="mb-4 italic">“{customers[currentIndex].testimonial}”</p>
                <p className="font-semibold text-sm uppercase tracking-wider">
                  {customers[currentIndex].name}
                  <span className="text-gray-400 normal-case">
                    , {customers[currentIndex].company} — {customers[currentIndex].country}
                  </span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatars */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {customers.map((c, index) => (
            <button
              key={index}
              onClick={() => handleAvatarClick(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border transition-transform duration-300 ${
                currentIndex === index
                  ? 'border-black scale-110'
                  : 'border-gray-200 hover:scale-105'
              }`}
            >
              <img
                src={c.avatar}
                alt={c.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

          {/* CTA */}
          <div className="w-16 h-16 rounded-full bg-black text-white text-[10px] uppercase font-semibold flex items-center justify-center text-center cursor-pointer hover:bg-gray-800 transition-colors">
            Become <br /> Partner
          </div>
        </div>
      </div>
    </section>
  );
}
