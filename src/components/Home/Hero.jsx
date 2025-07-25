import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest leading-tight text-gray-900">
            A new era <br className="hidden sm:block" />
            of <span className="bg-black text-white px-2 inline-block">luxury jewelry</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
            Discover our exclusive collections, crafted for elegance and timeless sophistication.  
            Designed for those who dare to stand apart.
          </p>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 border border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Shop Collection
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 border border-gray-300 text-gray-700 uppercase tracking-widest hover:bg-gray-100 transition"
            >
              Our Story
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGERY */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[600px] w-full"
        >
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Hero"
            className="absolute top-0 right-0 w-3/4 h-[70%] object-cover rounded-3xl shadow-xl"
          />

          {/* Accent Image */}
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jewelry closeup"
            className="absolute bottom-0 left-0 w-2/3 h-[60%] object-cover rounded-3xl shadow-lg border-4 border-white"
          />

          {/* Floating Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-6 left-6 bg-black/70 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow"
          >
            New Collection 2025
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
