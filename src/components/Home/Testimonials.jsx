import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy customer data
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


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [currentIndex]);

  const startAutoSlide = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 3000);
  };

  const handleAvatarClick = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">Partners</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Ask our <span className="text-yellow-500">happy customers</span><br />
              about our quality
            </h2>
          </div>

          {/* Right: Animated Testimonial */}
          <div className="md:w-1/2 text-gray-700 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-3">{customers[currentIndex].testimonial}</p>
                <p className="font-semibold text-sm">
                  {customers[currentIndex].name}, {customers[currentIndex].company} | {customers[currentIndex].country}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Avatar Scroll Row */}
      <div className="mt-12">
  <div className="flex flex-wrap justify-center gap-4 max-w-full">
    {customers.map((c, index) => (
      <button
        key={index}
        onClick={() => handleAvatarClick(index)}
        className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
          currentIndex === index
            ? 'border-yellow-400 scale-105'
            : 'border-white hover:scale-105'
        }`}
      >
        <img
          src={c.avatar}
          alt={c.name}
          className="w-full h-full object-cover"
        />
      </button>
    ))}

    {/* CTA Circle */}
    <div className="w-14 h-14 rounded-full bg-yellow-400 text-[10px] font-semibold flex items-center justify-center text-center text-white shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
      Become<br />Partner
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default TestimonialSlider;
