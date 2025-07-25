import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-3">✔ Success!</h3>
              <p className="text-gray-700 mb-6">
                Your message has been sent successfully. We’ll get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="border border-black hover:bg-black hover:text-white uppercase tracking-widest font-medium py-2 px-6 rounded-md transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-2">
              Get In Touch
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest leading-tight text-gray-900 mb-6">
              Let’s Craft Your Future Together
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-lg leading-relaxed">
              Whether you’re exploring our export‑ready products, seeking bespoke solutions, or want to
              collaborate, we’re here to help. Connect with us to start building something extraordinary.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-xs">
                Head Office
              </h4>
              <address className="not-italic">
                123 Industrial Boulevard,<br /> TechZone, Istanbul, Turkey
              </address>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-xs">
                Phone
              </h4>
              <a href="tel:+902121234567" className="hover:underline break-all">
                +90 212 123 4567
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-xs">
                Email
              </h4>
              <a
                href="mailto:contact@crossonexport.com"
                className="hover:underline break-words"
              >
                contact@crossonexport.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 uppercase tracking-wider text-xs">
                Business Hours
              </h4>
              <p>Mon–Fri, 08:00–18:00 (GMT+3)</p>
            </div>
          </div>

          {/* Logos */}
          <div className="pt-6">
            <h3 className="text-xs uppercase font-medium text-gray-500 tracking-[0.2em] mb-4">
              Trusted By
            </h3>
            <div className="flex flex-wrap items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60"
                alt="Partner 1"
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60"
                alt="Partner 2"
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=870&auto=format&fit=crop"
                alt="Partner 3"
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-widest">
            Send Us A Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you need..."
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <button
                type="submit"
                className="border border-black hover:bg-black hover:text-white transition-colors font-semibold py-3 px-6 rounded-md text-sm uppercase tracking-widest"
              >
                Submit Inquiry
              </button>
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline"
                onClick={() => alert('Callback request feature coming soon!')}
              >
                Request a Callback →
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
