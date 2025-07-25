import { Link } from 'react-router-dom';

export default function AboutUs({ companyName = "Crosson" }) {
  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto bg-white text-gray-800">
      {/* Heading and Intro */}
      <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-8 text-gray-900">
        About Us
      </h1>
      <p className="mb-10 leading-relaxed max-w-3xl text-base md:text-lg">
        With over 20 years of experience in the food industry,{" "}
        <strong className="font-semibold">{companyName}</strong> has been dedicated to driving research, enhancing efficiency, and delivering innovative solutions in{" "}
        <span className="underline decoration-black decoration-2 underline-offset-4 font-medium">
          food quality, automation, and software development.
        </span>
      </p>

      {/* Middle Paragraphs */}
      <div className="mb-16 space-y-6 max-w-4xl text-gray-700 text-base md:text-lg">
        <p>
          Our journey is rooted in a passion for transforming food production through cutting-edge technology. We focus on creating sustainable and scalable systems that address today’s challenges while anticipating tomorrow’s opportunities.
        </p>
        <p>
          Collaboration is at the heart of what we do. By partnering with industry leaders, innovators, and communities worldwide, we foster an ecosystem where technology meets tradition, resulting in smarter and more responsible food solutions.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Left Block */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Our Values
          </h2>
          <h3 className="text-2xl font-bold leading-snug uppercase tracking-wide text-gray-900">
            {companyName} is committed to <br />
            <span className="bg-black text-white px-1">Quality and Integrity</span> as our foundation.
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We uphold rigorous standards and continuously strive for excellence to deliver products and services that our clients can trust in a rapidly evolving market.
          </p>
          <Link
            to="/Certificates"
            className="inline-block text-sm mt-2 border-b border-black hover:text-gray-500 uppercase tracking-wide"
          >
            Quality Certifications
          </Link>
        </div>

        {/* Right Block: Mission and Vision */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group space-y-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?w=500&auto=format&fit=crop&q=60"
                alt="Our Mission"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-lg font-semibold uppercase tracking-wide text-gray-900">
              Our Mission
            </h4>
            <p className="text-sm text-gray-600">
              To advance the food industry by developing innovative technologies and applying modern software systems that empower sustainable growth.
            </p>
            <Link
              to="/ourmission"
              className="inline-block text-sm mt-2 border-b border-black hover:text-gray-500 uppercase tracking-wide"
            >
              Read More →
            </Link>
          </div>

          {/* Vision */}
          <div className="group space-y-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?w=500&auto=format&fit=crop&q=60"
                alt="Our Vision"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-lg font-semibold uppercase tracking-wide text-gray-900">
              Our Vision
            </h4>
            <p className="text-sm text-gray-600">
              To lead globally by providing integrated food‑tech solutions powered by innovation, automation, and sustainability.
            </p>
            <Link
              to="/ourvision"
              className="inline-block text-sm mt-2 border-b border-black hover:text-gray-500 uppercase tracking-wide"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
