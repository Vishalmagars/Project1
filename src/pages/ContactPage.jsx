import React, { useState } from 'react';

const ContactPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 lg:px-8 relative">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-green-600 mb-3">✔ Success!</h3>
            <p className="text-gray-700 mb-6">
              Your message has been sent successfully. We’ll get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-sm text-yellow-600 font-semibold uppercase tracking-wide mb-2">
              Get In Touch
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Let’s Craft Your Future Together
            </h1>
            <p className="text-base text-gray-700 leading-relaxed">
              Whether you’re exploring our export-ready products, seeking bespoke solutions, or want to collaborate, we’re here to help. Connect with us to start building something extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Head Office</h4>
              <address className="not-italic">
                123 Industrial Boulevard,<br /> TechZone, Istanbul, Turkey
              </address>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
              <a href="tel:+902121234567" className="hover:underline">
                +90 212 123 4567
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
              <a href="mailto:contact@crossonexport.com" className="hover:underline">
                contact@crossonexport.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
              <p>Mon–Fri, 08:00–18:00 (GMT+3)</p>
            </div>
          </div>
          <div className="pt-6">
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide mb-3">
              Trusted By
            </h3>
            <div className="flex gap-6 items-center flex-wrap">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60"
                alt="Partner 1"
                className="h-10 object-contain"
              />
              <img
                src="https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=500&auto=format&fit=crop&q=60"
                alt="Partner 2"
                className="h-10 object-contain"
              />
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=870&auto=format&fit=crop"
                alt="Partner 3"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what you need..."
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-yellow-400 focus:border-yellow-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-black font-semibold py-3 px-6 rounded-md text-sm uppercase tracking-wider"
              >
                Submit Inquiry
              </button>
              <button
                type="button"
                className="text-sm text-yellow-600 hover:underline"
                onClick={() => alert('Callback request feature coming soon!')}
              >
                Request a Callback →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
