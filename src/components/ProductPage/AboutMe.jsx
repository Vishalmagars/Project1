import { Link } from 'react-router-dom';

const AboutUs = ({ companyName = "Crosson" }) => {
  return (
    <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto text-gray-800">
      

      {/* Heading and Intro */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h1>
      <p className="mb-6 leading-relaxed max-w-3xl">
        With over 20 years of experience in the food industry, <strong>{companyName}</strong> has been dedicated to driving research, enhancing efficiency, and delivering innovative solutions in <span className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-medium">food quality, automation, and software development.</span>
      </p>

      {/* Middle Paragraphs */}
      <div className="mb-12 text-gray-700 space-y-6 max-w-4xl">
        <p>
          Our journey is rooted in a passion for transforming food production through cutting-edge technology. We focus on creating sustainable and scalable systems that address today’s challenges while anticipating tomorrow’s opportunities.
        </p>
        <p>
          Collaboration is at the heart of what we do. By partnering with industry leaders, innovators, and communities worldwide, we foster an ecosystem where technology meets tradition, resulting in smarter and more responsible food solutions.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Block */}
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">OUR VALUES</h2>
          <h3 className="text-2xl font-semibold mb-4 leading-tight">
            {companyName} is committed to<br />
            <span className="text-yellow-500">Quality and Integrity</span> as our foundation.
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            We uphold rigorous standards and continuously strive for excellence to deliver products and services that our clients can trust in a rapidly evolving market.
          </p>
          <Link
            to="/Certificates"
            className="inline-block text-sm text-black font-medium underline hover:text-yellow-600 transition"
          >
            Quality Certifications
          </Link>
        </div>

        {/* Right Block: Mission and Vision */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?w=500&auto=format&fit=crop&q=60"
              alt="Our Mission"
              className="rounded-md w-full h-40 object-cover"
            />
            <h4 className="font-semibold text-lg">Our Mission</h4>
            <p className="text-sm text-gray-600">
              To advance the food industry by developing innovative technologies and applying modern software systems that empower sustainable growth.
            </p>
            <Link
              to="/ourmission"
              className="text-sm text-black font-medium underline hover:text-yellow-600 transition"
            >
              Read More →
            </Link>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?w=500&auto=format&fit=crop&q=60"
              alt="Our Vision"
              className="rounded-md w-full h-40 object-cover"
            />
            <h4 className="font-semibold text-lg">Our Vision</h4>
            <p className="text-sm text-gray-600">
              To lead globally by providing integrated food-tech solutions powered by innovation, automation, and sustainability.
            </p>
            <Link
              to="/ourvision"
              className="text-sm text-black font-medium underline hover:text-yellow-600 transition"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
