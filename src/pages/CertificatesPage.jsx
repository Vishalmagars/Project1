import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certificates = [
  {
    title: 'ISO 9001:2015 – Quality Management',
    description:
      'This certificate confirms our compliance with international quality management standards, ensuring consistent production and customer satisfaction.',
    img: 'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driveLink: 'https://drive.google.com/file/d/your-iso-file-id/view?usp=sharing',
  },
  {
    title: 'CE Mark – European Conformity',
    description:
      'The CE mark indicates that our machines meet EU safety, health, and environmental protection standards required for market access.',
    img: 'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driveLink: 'https://drive.google.com/file/d/your-ce-file-id/view?usp=sharing',
  },
  {
    title: 'FDA Approval – Food Contact Safety',
    description:
      'Approved for food-grade production, our systems comply with FDA regulations, making them safe for export and use in the food industry.',
    img: 'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driveLink: 'https://drive.google.com/file/d/your-fda-file-id/view?usp=sharing',
  },
  {
    title: 'GMP – Good Manufacturing Practices',
    description:
      'GMP ensures our machinery and facilities follow hygienic and controlled production practices, minimizing contamination risk in food operations.',
    img: 'https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    driveLink: 'https://drive.google.com/file/d/your-gmp-file-id/view?usp=sharing',
  },
];

const CertificatesPage = () => {
  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-sm text-yellow-600 font-semibold uppercase tracking-wider mb-2 flex justify-center items-center gap-2">
          <Award className="w-4 h-4" /> Our Certifications
        </h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Globally Recognized Standards
        </h1>
        <p className="text-base text-gray-700 leading-relaxed">
          We are committed to manufacturing excellence and regulatory compliance. All our machines are tested and certified by internationally recognized bodies. View or download our certifications below.
        </p>
      </motion.div>

      {/* Certificate Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{cert.description}</p>
              </div>
              <a
                href={cert.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center text-sm font-medium text-yellow-600 hover:text-yellow-700"
              >
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> View / Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <div className="bg-yellow-50 rounded-2xl p-10">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Need More Information?</h4>
          <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Have questions about our certifications or compliance standards? We’re here to help you understand the quality behind our products.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-medium text-lg transition">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatesPage;
