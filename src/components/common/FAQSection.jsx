import React, { useState } from 'react';

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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-sm text-yellow-600 uppercase font-semibold tracking-wider mb-2">
          FAQs
        </h2>
        <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-3">
          Find answers related to international orders, product quality, logistics, and custom jewelry solutions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          const buttonId = `faq-question-${index}`;

          return (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggle(index)}
                className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none flex justify-between items-center"
              >
                {faq.question}
                <span className="ml-4 text-yellow-500 text-xl">{isOpen ? '-' : '+'}</span>
              </button>
              {isOpen && (
                <p
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="mt-3 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
