import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Globe, Star, Gem, Sparkles, Play, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(featureTimer);
  }, []);

  const gemSlides = [
    {
      title: 'Premium Diamonds',
      subtitle: 'Certified Excellence',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      color: 'blue',
    },
    {
      title: 'Rare Emeralds',
      subtitle: 'Natural Beauty',
      image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&h=600&fit=crop',
      color: 'green',
    },
    {
      title: 'Royal Sapphires',
      subtitle: 'Timeless Elegance',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
      color: 'indigo',
    },
    {
      title: 'Ruby Collection',
      subtitle: 'Passionate Red',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=600&fit=crop',
      color: 'red',
    },
  ];

   
  
  const features = [
    { icon: Globe, text: '50+ Countries', value: '50+', label: 'Global Reach' },
    { icon: Star, text: '25+ Years', value: '25+', label: 'Experience' },
    { icon: Gem, text: 'Premium Quality', value: '99%', label: 'Quality Rate' },
    { icon: Award, text: 'Certified Gems', value: '100%', label: 'Certified' },
  ];

  return (
    <section className="min-h-screen  relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-yellow-300/20 rounded-full blur-3xl" />
        {/* Medium Circle */}
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-2xl" />
        {/* Small Accent Circles */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Badge */}
        <div className="text-center mb-8">

        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-300px)]">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
                <span className="block text-base leading-none text-black">Export</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-yellow-600">Premium{' '}</span>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200 -skew-y-1" />
                </span>
                <span className="text-gray-700"> Gems Worldwide</span>
              </h1>


              <p className="text-base text-gray-700 max-w-2xl leading-relaxed">
               Discover the world’s finest collection of ethically sourced diamonds, emeralds, sapphires, and rubies with over 25 years of export excellence to 50+ countries.</p>
            </div>

            {/* Interactive Features Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activeFeature === index
                      ? 'bg-yellow-50 border-yellow-300 shadow-lg scale-105'
                      : 'bg-white/60 border-gray-200 hover:border-yellow-200 hover:shadow-md'
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-center space-y-2">
                    <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center transition-colors ${activeFeature === index ? 'bg-yellow-200' : 'bg-gray-100 group-hover:bg-yellow-100'
                      }`}>
                      <feature.icon className={`w-6 h-6 ${activeFeature === index ? 'text-yellow-700' : 'text-gray-600'
                        }`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{feature.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{feature.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/product">
  <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-2xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
    <span>View Collection</span>
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </button>
</Link>
              
            </div>
          </div>

          {/* Right Content - Takes 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Container with Unique Shape */}
            <div className="relative">
              {/* Decorative Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/40 to-yellow-300/30 rounded-[3rem] transform rotate-3 scale-105" />

              {/* Secondary Shape */}
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-200/30 to-purple-200/20 rounded-[2rem] transform -rotate-2 scale-95" />

              {/* Main Image */}
              <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={gemSlides[currentSlide].image}
                  alt={gemSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                />

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {gemSlides[currentSlide].title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {gemSlides[currentSlide].subtitle}
                        </p>
                      </div>
                      <Link to="/productShowcase">
  <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg">
    <ArrowRight className="w-5 h-5 text-white" />
  </button>
</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                <Gem className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-yellow-200">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {gemSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-50/50 to-transparent" />
    </section>
  );
};

export default Hero;