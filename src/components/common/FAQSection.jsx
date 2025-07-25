import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Which countries do you export jewelry to?",
    answer:
      "We currently export to over 30 countries across Europe, the Middle East, North America, and Asia. Our logistics partners ensure smooth customs clearance and timely delivery worldwide.",
  },
  {
    question: "Do you offer custom jewelry manufacturing?",
    answer:
      "Yes, we specialize in both ready-made collections and bespoke custom designs. Whether it's private-label, bridal, or heritage-inspired, our craftsmen can bring your vision to life.",
  },
  {
    question: "Are your products certified and hallmarked?",
    answer:
      "Absolutely. All our jewelry complies with international standards and includes certificates of authenticity, hallmarking, and material composition documentation where required.",
  },
  {
    question: "Can I visit your factory or showroom?",
    answer:
      "Yes, we welcome business clients to visit our production facilities and design studio. Please schedule your visit in advance so we can prepare samples and arrange a guided tour.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ depends on the product category. For export orders, it typically starts from 50 pieces per design or 5,000 USD per order. We’re happy to discuss flexible options for long-term partners.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-2">
          FAQs
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-gray-600">
          Everything you need to know about our export process, certifications, and custom jewelry services.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="py-6">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left group focus:outline-none"
              >
                <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>
                <span className="ml-4 text-2xl font-bold text-black">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
