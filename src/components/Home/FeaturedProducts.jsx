import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Eye,
  Heart,
  ShoppingCart,
  Zap,
  Award,
  Globe,
  Shield
} from 'lucide-react';
import clsx from 'clsx';

const FeaturedProducts = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const products = [
    {
      id: 1,
      name: 'Royal Kashmir Sapphire',
      category: 'Premium Sapphires',
      price: '$8,500',
      originalPrice: '$12,000',
      carat: '2.15 ct',
      clarity: 'VVS',
      origin: 'Kashmir, India',
      certification: 'GIA Certified',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop',
      badge: 'Limited Edition',
      rating: 5,
      features: ['Cornflower Blue', 'Unheated', 'Silk Inclusions', 'Investment Grade'],
      color: 'blue'
    },
    {
      id: 2,
      name: 'Colombian Emerald Elite',
      category: 'Premium Emeralds',
      price: '$15,200',
      originalPrice: '$18,500',
      carat: '3.45 ct',
      clarity: 'VS',
      origin: 'Muzo, Colombia',
      certification: 'Gübelin Certified',
      image: 'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600&h=600&fit=crop',
      badge: 'Exclusive',
      rating: 5,
      features: ['Vivid Green', 'Minor Oil', 'Trapiche Pattern', 'Museum Quality'],
      color: 'green'
    },
    {
      id: 3,
      name: 'Flawless White Diamond',
      category: 'Premium Diamonds',
      price: '$25,000',
      originalPrice: '$30,000',
      carat: '1.50 ct',
      clarity: 'FL',
      origin: 'Botswana',
      certification: 'GIA Certified',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      badge: 'Flawless',
      rating: 5,
      features: ['D Color', 'Excellent Cut', 'Perfect Polish', 'Ideal Proportions'],
      color: 'gray'
    },
    {
      id: 4,
      name: 'Burmese Pigeon Blood Ruby',
      category: 'Premium Rubies',
      price: '$22,800',
      originalPrice: '$28,000',
      carat: '2.85 ct',
      clarity: 'VS',
      origin: 'Mogok, Myanmar',
      certification: 'SSEF Certified',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
      badge: 'Rare',
      rating: 5,
      features: ['Pigeon Blood', 'Unheated', 'Silk Inclusions', "Collector's Item"],
      color: 'red'
    }
  ];

  const colorThemes = {
    blue: 'blue',
    green: 'green',
    gray: 'gray',
    red: 'red'
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setActiveProduct((prev) => (prev + 1) % products.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, products.length]);

  const current = products[activeProduct];
  const theme = colorThemes[current.color] || 'gray';

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-left">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-gray-600" />
          <span className="uppercase text-sm font-semibold text-gray-600 tracking-wider">Handpicked Excellence</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Gems
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Discover the finest collection of rare and valuable gemstones from around the world.
        </p>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Card */}
        <div
          className={clsx(
            'p-6 rounded-3xl border-2 shadow-xl bg-gradient-to-br',
            `from-${theme}-50 to-${theme}-100 border-${theme}-200`
          )}
        >
          <div className="relative">
         
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex justify-center items-center gap-4">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Eye className="text-gray-700" />
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart className="text-gray-700" />
              </button>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <p className="text-lg font-bold">{current.carat}</p>
              <p className="text-sm text-gray-600">Carat</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <p className="text-lg font-bold">{current.clarity}</p>
              <p className="text-sm text-gray-600">Clarity</p>
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <p className={clsx(`text-${theme}-600 uppercase font-medium text-sm mb-1`)}>
            {current.category}
          </p>
          <div className="flex items-center mb-3">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{current.name}</h3>

          {/* Pricing */}
          <div className="flex items-center space-x-4 mb-4">
            <span className={clsx(`text-2xl font-bold text-${theme}-600`)}>{current.price}</span>
            <span className="text-gray-400 line-through">{current.originalPrice}</span>
            <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Save {Math.round((1 - parseInt(current.price.replace(/[$,]/g, '')) / parseInt(current.originalPrice.replace(/[$,]/g, ''))) * 100)}%
            </span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              Key Features
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
              {current.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className={clsx(`w-2 h-2 bg-${theme}-600 rounded-full`)}></span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Origin & Certification */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Origin</p>
                <p className="font-medium">{current.origin}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Certification</p>
                <p className="font-medium">{current.certification}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button className={clsx(`bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-700`)}>
              <ShoppingCart className="w-5 h-5 inline-block mr-2" />
              Buy a Sample
            </button>
            <button className="border-2 border-gray-300 px-6 py-3 rounded-xl text-gray-800 hover:border-gray-400 font-semibold">
              Quick Quote
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <button onClick={() => setActiveProduct((prev) => (prev - 1 + products.length) % products.length)}>
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveProduct(i)}
            className={clsx(
              'w-3 h-3 rounded-full',
              i === activeProduct ? `bg-gray-600 scale-125` : 'bg-gray-300'
            )}
          />
        ))}
        <button onClick={() => setActiveProduct((prev) => (prev + 1) % products.length)}>
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Autoplay Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="px-6 py-2 text-sm font-medium rounded-full border bg-gray-100 hover:bg-gray-200 text-gray-800"
        >
          {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;