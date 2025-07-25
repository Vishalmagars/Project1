import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OurVision = ({ companyName = "Crosson" }) => {
    return (
        <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto text-gray-800">
            {/* Breadcrumb */}


            {/* Hero Section with Background */}
           <div className="relative rounded-2xl overflow-hidden mb-12">
      <img
        src="https://images.unsplash.com/photo-1500048993953-5236b049b2bc?q=80&w=870&auto=format&fit=crop"
        alt="Jewelry Vision Background"
        className="w-full h-72 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center px-4"
        >
          Our Vision
        </motion.h1>
      </div>
    </div>

            {/* Vision Intro */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 max-w-4xl mx-auto text-center space-y-4"
            >
                <p className="text-base text-gray-700 leading-relaxed">
                    {companyName} envisions a future where craftsmanship, innovation, and sustainability blend seamlessly to set new standards in the global jewelry export industry.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    Our vision goes beyond exporting fine jewelry—we aim to build a legacy of ethical sourcing and timeless design. Every collection we deliver is guided by our commitment to quality, integrity, and global collaboration.
                </p>
            </motion.div>

            {/* Vision Cards in Zigzag Layout */}
            <div className="space-y-20">
                {[
                    {
                        title: "A Connected Global Network",
                        desc: "We aim to unify artisans, designers, and distributors, fostering transparent and efficient connections that strengthen the international jewelry market.",
                        extra: "By bridging cultures and expertise, we enable unique collaborations that elevate craftsmanship worldwide.",
                        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60",
                        reverse: false
                    },
                    {
                        title: "Empowering Artisans",
                        desc: "Our vision is to empower local craftsmen with resources, training, and market access, nurturing creativity and economic growth.",
                        extra: "We support community programs and fair trade initiatives that uplift jewelry artisans globally.",
                        img: "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW1wb3dlcmluZyUyMEFydGlzYW5zJTIwamV3ZWxhcnl8ZW58MHx8MHx8fDA%3D",
                        reverse: true
                    },
                    {
                        title: "Sustainable Luxury",
                        desc: "We envision jewelry that respects the planet and people, emphasizing responsible sourcing and environmentally conscious practices.",
                        extra: "Through transparency and innovation, we lead efforts to make the luxury jewelry market greener and more ethical.",
                        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60",
                        reverse: false
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`grid md:grid-cols-2 gap-10 items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className={`space-y-4 ${item.reverse ? 'md:order-last' : ''}`}>
                            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
                            <p className="text-base text-gray-700 leading-relaxed">{item.extra}</p>
                        </div>
                        <img
                            src={item.img}
                            alt={item.title}
                            className="rounded-2xl shadow-lg h-64 object-cover w-full"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Extended Vision Paragraph */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-20 max-w-4xl mx-auto space-y-6"
            >
                <p className="text-base text-gray-700 leading-relaxed">
                    As {companyName} continues to expand its reach across global markets, our focus remains steadfast on cultivating meaningful and lasting partnerships with artisans, designers, and distributors alike. We are dedicated to pioneering innovations that honor the rich traditions of jewelry craftsmanship while embracing cutting-edge technologies and sustainable practices. Our journey is one of continuous learning, adaptation, and leadership in an industry that thrives on both heritage and transformation.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    We deeply believe that the true value of jewelry is not only in its materials or design, but in the stories and shared passions that bring it to life. By fostering a culture of transparency and open collaboration, we enable our partners and clients to participate actively in creating pieces that resonate on a personal and cultural level. Our commitment to ethical sourcing, fair labor practices, and environmental responsibility ensures that every gem and metal we export reflects our core values and dedication to a better future.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    Looking ahead, we envision a jewelry industry that is more connected, inclusive, and sustainable than ever before. We are excited to lead initiatives that empower local communities, support innovation in sustainable materials, and harness the power of digital platforms to expand market access. At {companyName}, we are not just exporting jewelry — we are exporting culture, innovation, and trust that help shape the global narrative of responsible luxury.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                    Together with our partners and customers, we will continue to push boundaries, celebrate craftsmanship, and ensure that every creation that passes through our hands carries the essence of excellence and integrity. Our vision is to be the beacon for ethical, innovative, and timeless jewelry exports — setting a standard that others aspire to follow.
                </p>
            </motion.div>


            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-20 p-8 bg-yellow-50 rounded-2xl text-center"
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Join Us in Crafting the Future</h2>
                <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
                    Together, let’s elevate the art of jewelry exports with innovation, responsibility, and heart. Partner with us to shine on the world stage.
                </p>
                <Link to="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded-full text-lg transition">
                    Connect With Us
                </Link>
            </motion.div>
        </div>
    );
};

export default OurVision;
