import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  {
    title: 'Exported to 30+ Countries',
    description: 'Trusted by 15+ global jewelry brands across major markets.',
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Millions of Pieces Exported',
    description: 'Our craftsmanship reaches millions of jewelry lovers annually.',
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
  },
  {
    title: '500+ Retail Partners',
    description: 'Our designs are stocked in over 500 high-end jewelry retailers.',
    icon: (
      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
  },
];

export default function CompanyProfile() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Label */}
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4">
        Who We Are
      </h2>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900 mb-8 leading-tight">
            Crosson is a global leader in <br />
            <span className="bg-black text-white px-2 inline-block mt-2">
              fine jewelry exports
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
            With over 20 years of legacy, Crosson delivers handcrafted, certified jewelry to
            leading global brands, retailers, and markets.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-xl">
            Every piece we ship is a promise — of quality, tradition, and timeless elegance at scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 uppercase tracking-widest border border-black text-black hover:bg-black hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              About Us <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/certificates')}
              className="px-8 py-3 uppercase tracking-widest border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm"
            >
              Quality Certificates
            </button>
          </div>
        </div>

        {/* Right Side: Stats */}
        <div className="space-y-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-start gap-6 p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-14 h-14 border border-black rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {stat.title}
                </h4>
                <p className="text-sm text-gray-600 max-w-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
