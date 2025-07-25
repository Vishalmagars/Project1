import React, { useState } from 'react';
import { ChevronDownIcon, StarIcon, ShieldCheckIcon, TruckIcon, CreditCardIcon, GlobeAltIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const JewelryShowcase = () => {
  const product = {
    title: 'Diamond Tennis Bracelet',
    subtitle: 'Certified VS1 Diamonds | 18k White Gold',
    price: '$4,750',
    originalPrice: '$5,200',
    discount: '9% OFF',
    rating: 4.8,
    description: `This handcrafted tennis bracelet...`,
    totalReviews: 1247,
    videoUrl: 'https://www.youtube.com/embed/7OGSeZP0sc8?si=E6au-0bxWUtt7VD7',
    gallery: [
      'https://images.unsplash.com/photo-1612150354898-a69132eb7c67?w=800',
      'https://images.unsplash.com/photo-1725918319127-fc4b1eeeba54?q=80&w=428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?w=802',
      'https://images.unsplash.com/photo-1742137188729-d46186ac5733?w=803',
      'https://images.unsplash.com/photo-1742137188729-d46186ac5733?w=804',
    ],
    overview: {
      carat: '3.5 ct',
      weight: '22g',
      length: '18 cm',
      piecesPerLot: 1
    },
    description: `This handcrafted tennis bracelet features certified natural diamonds in VS1 clarity, set in 18k white gold. Its refined elegance and brilliant sparkle make it ideal for export in premium markets worldwide. lThis handcrafted tennis bracelet features certified natural diamonds in VS1 clarity, set in 18k white gold. Its refined elegance and brilliant sparkle make it ideal for export in premium markets worldwide.This handcrafted tennis bracelet features certified natural diamonds in VS1 clarity, set in 18k white gold. Its refined elegance and brilliant sparkle make it ideal for export in premium markets worldwide.`,
    specs: {
      Material: '18k White Gold',
      Diamonds: 'Certified Natural VS1',
      Certificate: 'IGI Certified',
      Origin: 'India',
      SKU: 'TENNIS-BR-8812',
      Packaging: 'Velvet Box with Seal',
    },
    pricing: [
      { min: 100, max: 200, price: '$4,750', unit: 'per piece' },
      { min: 201, max: 500, price: '$4,275', unit: 'per piece', savings: '10% OFF' },
      { min: 501, max: 1000, price: '$3,800', unit: 'per piece', savings: '20% OFF' },
      { min: 1001, max: 5000, price: '$3,325', unit: 'per piece', savings: '30% OFF' },
    ],
    features: [
      'Ethically Sourced',
      'Recycled Gold',
      'Free Worldwide Shipping',
      'Custom Branding Available',
      'Hand Inspected',
      'Batch Certificate'
    ],
    business: {
      MOQ: '100 pieces',
      HsCode: '71131900',
      LeadTime: '7–14 days',
      TradeTerms: 'FOB, CIF, EXW',
      Port: 'Mumbai, India'
    },
    insurance: {
      available: true,
      coverage: 'Full Value Protection',
      provider: 'Lloyd\'s of London'
    },
    certifications: [
      { name: 'IGI Certified', icon: '🏆', verified: true },
      { name: 'ISO 9001:2015', icon: '⭐', verified: true },
      { name: 'Responsible Jewelry Council', icon: '🌱', verified: true },
      { name: 'Kimberley Process', icon: '💎', verified: true }
    ]
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      date: '2024-07-10',
      verified: true,
      title: 'Exceptional Quality & Service',
      comment: 'The diamonds are absolutely stunning with incredible clarity. The craftsmanship is top-notch and delivery was exactly as promised. Perfect for our luxury retail store.',
      helpful: 23,
      orderSize: '500 pieces'
    },
    {
      id: 2,
      name: 'Michael Chen',
      country: 'Hong Kong',
      rating: 5,
      date: '2024-07-08',
      verified: true,
      title: 'Reliable Business Partner',
      comment: 'Third order with this supplier. Consistent quality, competitive pricing, and excellent communication. The IGI certification adds great value for our customers.',
      helpful: 18,
      orderSize: '1000 pieces'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      country: 'Spain',
      rating: 4,
      date: '2024-07-05',
      verified: true,
      title: 'Beautiful Product',
      comment: 'Love the packaging and presentation. Minor delay in shipping but customer service was very responsive. The bracelets sold out quickly in our boutique.',
      helpful: 12,
      orderSize: '250 pieces'
    },
    {
      id: 4,
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      rating: 5,
      date: '2024-07-03',
      verified: true,
      title: 'Premium Quality',
      comment: 'Exceeded expectations. The white gold finish is flawless and the diamonds have exceptional fire. Custom branding service was professional.',
      helpful: 31,
      orderSize: '750 pieces'
    }
  ];

  const [activeImage, setActiveImage] = useState(product.gallery[0]);
  const [zoomImage, setZoomImage] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [customQuantity, setCustomQuantity] = useState('');
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const quantityOptions = [
    { value: '100-200', label: '100-200 pieces', price: '$4,750' },
    { value: '201-500', label: '201-500 pieces', price: '$4,275' },
    { value: '501-1000', label: '501-1000 pieces', price: '$3,800' },
    { value: '1001-5000', label: '1001-5000 pieces', price: '$3,325' },
    { value: 'custom', label: 'Custom Quantity', price: 'Contact for pricing' }
  ];

  const handleQuantityChange = (value) => {
    setSelectedQuantity(value);
    setShowCustomQuantity(value === 'custom');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <style>
        {`
          @media (max-width: 640px) {
            .responsive-tabs {
              flex-wrap: nowrap;
              overflow-x: auto;
              white-space: nowrap;
              -webkit-overflow-scrolling: touch;
            }
            .responsive-tabs::-webkit-scrollbar {
              display: none;
            }
            .responsive-tabs {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .responsive-image {
              height: 300px !important;
            }
            .responsive-thumbnail {
              width: 60px !important;
              height: 60px !important;
            }
            .responsive-font {
              font-size: 1.5rem !important;
            }
            .responsive-text-sm {
              font-size: 0.75rem !important;
            }
            .responsive-grid-cols-1 {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .responsive-image {
              height: 400px !important;
            }
            .responsive-thumbnail {
              width: 80px !important;
              height: 80px !important;
            }
          }
        `}
      </style>

      {/* Luxury Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-4 px-4 sm:px-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-1"></div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide mb-3 text-white responsive-font">
              {product.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-normal tracking-normal mb-2">
              {product.subtitle}
            </p>
            
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN - Gallery */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="group cursor-zoom-in" onClick={() => setZoomImage(activeImage)}>
              <div className="relative overflow-hidden bg-white rounded-lg shadow-2xl">
                <img
                  src={activeImage}
                  alt="Diamond Tennis Bracelet"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 responsive-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <button className="text-gray-700 hover:text-amber-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
              {product.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${activeImage === img
                      ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-white'
                      : 'opacity-70 hover:opacity-100'
                    }`}
                  onClick={() => setActiveImage(img)}
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg responsive-thumbnail"
                  />
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              <div className="flex items-center justify-center space-x-2 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <TruckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Free Shipping</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Insured</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <CreditCardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Secure Payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Global Export</span>
              </div>
            </div>

            {/* Product Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {Object.entries(product.overview).map(([key, value]) => (
                <div key={key} className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                  <div className="text-lg sm:text-xl font-medium text-slate-800 mb-1">{value}</div>
                  <div className="text-xs sm:text-sm font-normal text-gray-500 uppercase tracking-normal">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-4">Certifications & Standards</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {product.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center space-x-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl sm:text-2xl">{cert.icon}</span>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-800">{cert.name}</div>
                      {cert.verified && (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 responsive-tabs">
                  {[
                    { id: 'description', label: 'Description' },
                    { id: 'specs', label: 'Specifications' },
                    { id: 'shipping', label: 'Shipping & Returns' },
                    { id: 'video', label: 'Product Video' },
                    { id: 'reviews', label: 'Reviews', count: product.totalReviews },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm ${activeTab === tab.id
                          ? 'border-amber-500 text-amber-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                      {tab.label}
                      {tab.count && (
                        <span className="ml-2 bg-gray-100 text-gray-600 py-1 px-2 rounded-full text-xs">
                          {tab.count}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-4 sm:p-6">
                {/* Description Tab */}
                {activeTab === 'description' && (
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">Product Description</h3>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{product.description}</p>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900">Customer Reviews</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex">{renderStars(product.rating)}</div>
                          <span className="text-xs sm:text-sm text-gray-600">
                            {product.rating} out of 5 stars ({product.totalReviews} reviews)
                          </span>
                        </div>
                      </div>
                      <button className="mt-2 sm:mt-0 text-amber-600 hover:text-amber-500 text-xs sm:text-sm font-medium">
                        Write a Review
                      </button>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                    {review.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm sm:text-base">{review.name}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{review.country}</div>
                                  </div>
                                </div>
                                {review.verified && (
                                  <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                                    <ShieldCheckIcon className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-green-600 font-medium">Verified Purchase</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center space-x-2 mb-2">
                                <div className="flex">{renderStars(review.rating)}</div>
                                <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                                <span className="text-xs sm:text-sm text-gray-500">• Order: {review.orderSize}</span>
                              </div>

                              <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{review.title}</h4>
                              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{review.comment}</p>

                              <div className="flex items-center space-x-4 mt-3">
                                <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700">
                                  👍 Helpful ({review.helpful})
                                </button>
                                <button className="text-xs sm:text-sm text-gray-500 hover:text-gray-700">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specifications Tab */}
                {activeTab === 'specs' && (
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">Product Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600 font-medium text-xs sm:text-sm">{key}:</span>
                          <span className="text-slate-800 font-medium text-xs sm:text-sm">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Insurance Coverage</h4>
                      <p className="text-xs sm:text-sm text-blue-800">
                        Full value protection up to $50,000 per shipment through {product.insurance.provider}
                      </p>
                    </div>
                  </div>
                )}

                {/* Shipping Tab */}
                {activeTab === 'shipping' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Shipping Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Delivery Options</h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                            <li>🚚 Standard Shipping: 7-14 business days</li>
                            <li>✈️ Express Shipping: 3-5 business days</li>
                            <li>🌍 Global Coverage: 150+ countries</li>
                            <li>📦 Secure Packaging: Velvet box with tamper seal</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Returns & Exchanges</h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                            <li>↩️ 30-day return policy</li>
                            <li>🔄 Free exchanges for defects</li>
                            <li>💰 Full refund if not satisfied</li>
                            <li>📞 24/7 customer support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Tab */}
                {activeTab === 'video' && (
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Product Showcase</h3>
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={product.videoUrl}
                        title="Product Video"
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Quantity Selector */}
         

            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border-t-4 border-amber-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-600 font-medium text-xs sm:text-sm tracking-wide">
                  IN STOCK • EXPORT READY
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-4">Wholesale Pricing</h3>
              <div className="space-y-3">
                {product.pricing.map((tier, i) => (
                  <div key={i} className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-800">
                        {tier.min}–{tier.max} pieces
                      </div>
                      {tier.savings && (
                        <div className="text-xs text-green-600 font-medium">{tier.savings}</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-slate-800 font-bold text-sm sm:text-base">{tier.price}</div>
                      <div className="text-xs text-gray-500">{tier.unit}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-2 sm:p-3 bg-amber-50 rounded-lg">
                <div className="text-xs sm:text-sm font-medium text-amber-800">💡 Volume Discounts Available</div>
                <div className="text-xs text-amber-600">Save up to 30% on bulk orders</div>
              </div>
            </div>

            {/* Enhanced Quote Form */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-4 sm:p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <ChatBubbleLeftEllipsisIcon className="w-5 sm:w-6 h-5 sm:h-6 text-amber-400" />
                <h3 className="text-base sm:text-lg font-medium">Get Instant Quote</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white text-xs sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white text-xs sm:text-sm"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white text-xs sm:text-sm"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white text-xs sm:text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white text-xs sm:text-sm"
                  />
                </div>

                <textarea
                  rows="3"
                  placeholder="Tell us about your requirements, target market, and any customization needs..."
                  className="w-full px-3 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:bg-white/20 focus:border-amber-400 focus:outline-none transition-all placeholder-white/60 text-white resize-none text-xs sm:text-sm"
                />

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded text-amber-400" />
                  <label htmlFor="newsletter" className="text-xs text-white/80">
                    Subscribe to our newsletter for exclusive deals and new product updates
                  </label>
                </div>

                <button
                  onClick={() => alert('Quote request submitted! We\'ll respond within 2 hours.')}
                  className="w-full py-2 sm:py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm"
                >
                  Get Instant Quote
                </button>

                <div className="text-center text-xs text-white/60 mt-2">
                  ⚡ Average response time: 2 hours
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-4">Trade Information</h3>
              <div className="space-y-3">
                {Object.entries(product.business).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600 font-medium text-xs sm:text-sm">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-slate-800 font-medium text-xs sm:text-sm">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-xs sm:text-sm font-medium text-blue-800 mb-1">🏭 Manufacturing Capacity</div>
                <div className="text-xs text-blue-600">50,000 pieces per month</div>
              </div>
            </div>

            {/* Payment & Security */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium text-slate-800 mb-4">Payment & Security</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center justify-center p-2 bg-gray-50 rounded text-xs font-medium">
                    💳 Credit Card
                  </div>
                  <div className="flex items-center justify-center p-2 bg-gray-50 rounded text-xs font-medium">
                    🏦 Wire Transfer
                  </div>
                  <div className="flex items-center justify-center p-2 bg-gray-50 rounded text-xs font-medium">
                    📄 L/C
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">SSL Encrypted Transactions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm">
                    <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Escrow Protection Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supplier Badge */}
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-lg p-4 sm:p-6 text-white">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">🏆</div>
                <div className="font-bold text-base sm:text-lg mb-1">Gold Supplier</div>
                <div className="text-xs sm:text-sm opacity-90 mb-3">15+ Years Experience</div>
                <div className="space-y-1 text-xs">
                  <div>✓ 98.5% Customer Satisfaction</div>
                  <div>✓ 10,000+ Orders Completed</div>
                  <div>✓ ISO 9001:2015 Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryShowcase;