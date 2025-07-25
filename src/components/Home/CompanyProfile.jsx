import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
    {
        title: 'Exported to 30 Countries',
        description: '+15 jewelry brands in 30 countries trust our exports',
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
        title: 'Millions of Jewelry Pieces Exported',
        description: 'We export millions of fine jewelry pieces globally every year',
        icon: (
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
        ),
    },
    {
        title: 'Trusted by 500+ Retailers Worldwide',
        description: 'Our exquisite jewelry is sold through over 500 retailers worldwide',
        icon: (
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
        ),
    },
];

const CompanyProfile = () => {
    const navigate = useNavigate(); // ✅ useNavigate hook here

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleCertificatesClick = () => {
        navigate('/certificates');
    };

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className='max-w-6xl mx-auto'>
                <h2 className="text-sm font-semibold text-yellow-600 max-w-6xl uppercase tracking-wider mb-3">
                    Who We Are
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
                {/* Left: Description and Buttons */}
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-6 leading-snug sm:leading-tight">
                        Crosson is a global leader in{' '}
                        <span className="px-0 py-0 -my-2 rounded shadow-[inset_0_-0.4em_0_0_#facc15]">
                            fine jewelry exports
                        </span>
                    </h1>

                    <p className="text-gray-700 mb-8 max-w-xl leading-relaxed">
                        With over 20 years of experience, Crosson specializes in exporting high-quality jewelry
                        to markets worldwide, ensuring exquisite craftsmanship and trusted partnerships.
                    </p>
                    <p className="text-gray-700 mb-8 max-w-xl leading-relaxed">
                        Our commitment to excellence and innovation helps retailers offer unique collections that
                        captivate customers globally.
                    </p>

                    <div className="flex flex-row flex-wrap gap-4 sm:gap-6">
                        <button
                            onClick={handleAboutClick}
                            className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-black font-semibold py-3 px-6 rounded-md text-sm uppercase tracking-wider flex items-center justify-center"
                        >
                            About Us
                            <ChevronRight className="ml-2 w-4 h-4" />
                        </button>

                        <button
                            onClick={handleCertificatesClick}
                            className="bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-gray-800 font-semibold py-3 px-6 rounded-md text-sm uppercase tracking-wider"
                        >
                            Quality Certificates
                        </button>
                    </div>
                </div>

                {/* Right: Stats */}
                <div className="space-y-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                                <p className="text-sm text-gray-600">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;
