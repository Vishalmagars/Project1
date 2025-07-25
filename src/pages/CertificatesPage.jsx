import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certificates = [
  {
    title: "ISO 9001:2015 – Quality Management",
    description:
      "Confirms compliance with international quality management standards, ensuring consistent production and customer satisfaction.",
    issuedBy: "International Organization for Standardization",
    regions: "Recognized globally",
    importance:
      "Shows our dedication to continuous improvement and customer focus.",
    img: "https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop",
    driveLink: "https://drive.google.com/file/d/your-iso-file-id/view?usp=sharing",
  },
  {
    title: "CE Mark – European Conformity",
    description:
      "Indicates that our machines meet EU safety, health, and environmental protection standards required for market access.",
    issuedBy: "European Commission",
    regions: "European Economic Area",
    importance:
      "Demonstrates product safety and regulatory compliance for European markets.",
    img: "https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop",
    driveLink: "https://drive.google.com/file/d/your-ce-file-id/view?usp=sharing",
  },
  {
    title: "FDA Approval – Food Contact Safety",
    description:
      "Approved for food-grade production, ensuring compliance with FDA regulations for safe export and use in the food industry.",
    issuedBy: "Food and Drug Administration (USA)",
    regions: "United States & Export Markets",
    importance:
      "Confirms that our products meet the highest safety standards for food contact.",
    img: "https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=460&auto=format&fit=crop",
    driveLink: "https://drive.google.com/file/d/your-fda-file-id/view?usp=sharing",
  },
];

export default function CertificatesPageLuxury() {
  return (
    <section className="bg-white px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Page Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-5 h-5 text-black" />
          <h2 className="uppercase tracking-[0.2em] text-xs text-gray-500 font-medium">
            Our Certifications
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-gray-900 mb-6">
          Certified for Excellence
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
          Each certification is a testament to our uncompromising commitment to
          quality, safety, and global compliance. Explore our credentials and
          learn what makes them essential for partners like you.
        </p>
      </motion.div>

      {/* Certificates List */}
      <div className="space-y-20">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Info */}
            <div className="space-y-4 text-left">
              <h3 className="text-2xl font-semibold uppercase tracking-wide text-gray-900">
                {cert.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {cert.description}
              </p>
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                <p>
                  <span className="font-medium text-gray-800">Issued By:</span>{" "}
                  {cert.issuedBy}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Valid Regions:</span>{" "}
                  {cert.regions}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Why It Matters:</span>{" "}
                  {cert.importance}
                </p>
              </div>
              <a
                href={cert.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-medium uppercase tracking-widest border-b border-black hover:text-gray-500 transition-colors"
              >
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> View / Download
              </a>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
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
        className="mt-24 p-10 bg-black text-white rounded-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
          Need More Information?
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-6">
          If you have questions about any of these certifications, or would like
          to receive detailed documentation, our team is here to assist you with
          transparency and care.
        </p>
        <button className="inline-block border border-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-full text-sm uppercase tracking-widest transition-colors">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}
