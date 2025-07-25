import React, { useState } from 'react';
import {
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/solid';

const JewelryShowcase = () => {
  // 💎 Product data stays the same (kept all info)
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
  const [activeTab, setActiveTab] = useState('description');

  const renderStars = (rating) => (
    Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
      />
    ))
  );

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900">
            {product.title}
          </h1>
          <p className="text-sm md:text-base mt-2 text-gray-500 tracking-wide">{product.subtitle}</p>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: GALLERY + DETAILS */}
        <section className="lg:col-span-2 space-y-8">
          {/* Main Image */}
          <div
            className="relative overflow-hidden rounded-xl bg-gray-50 cursor-zoom-in group"
            onClick={() => setZoomImage(activeImage)}
          >
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto">
            {product.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  activeImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
              <TruckIcon className="w-5 h-5 text-gray-800" />
              <span className="text-xs uppercase tracking-widest">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
              <ShieldCheckIcon className="w-5 h-5 text-gray-800" />
              <span className="text-xs uppercase tracking-widest">Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
              <CreditCardIcon className="w-5 h-5 text-gray-800" />
              <span className="text-xs uppercase tracking-widest">Secure Pay</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg">
              <GlobeAltIcon className="w-5 h-5 text-gray-800" />
              <span className="text-xs uppercase tracking-widest">Global</span>
            </div>
          </div>

          {/* Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(product.overview).map(([key, val]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="font-bold text-lg">{val}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">{key}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="uppercase font-semibold tracking-widest text-gray-800 mb-4">
              Certifications & Standards
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {product.certifications.map((c, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3 flex items-center gap-2 shadow-sm">
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-sm">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-gray-50 rounded-xl">
            <nav className="flex overflow-x-auto border-b text-sm uppercase tracking-widest">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specs', label: 'Specifications' },
                { id: 'shipping', label: 'Shipping' },
                { id: 'video', label: 'Video' },
                { id: 'reviews', label: 'Reviews', count: product.totalReviews }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-6 py-3 border-b-2 ${
                    activeTab === t.id
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {t.label}
                  {t.count && <span className="ml-2 bg-gray-200 px-2 rounded-full">{t.count}</span>}
                </button>
              ))}
            </nav>

            <div className="p-6 text-sm leading-relaxed text-gray-700">
              {activeTab === 'description' && <p>{product.description}</p>}
              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between bg-white p-3 rounded-lg">
                      <span className="font-medium">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'shipping' && (
                <ul className="space-y-2">
                  <li>🚚 Standard Shipping: 7–14 days</li>
                  <li>✈️ Express: 3–5 days</li>
                  <li>📦 Secure packaging included</li>
                  <li>↩️ 30‑day returns</li>
                </ul>
              )}
              {activeTab === 'video' && (
                <div className="aspect-video rounded-xl overflow-hidden shadow">
                  <iframe src={product.videoUrl} title="Video" className="w-full h-full" allowFullScreen />
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {reviews.map((r) => (
                    <div key={r.id} className="border-b pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                          {r.name[0]}
                        </div>
                        <div>
                          <p className="font-medium">{r.name}</p>
                          <p className="text-xs text-gray-500">{r.country}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">{renderStars(r.rating)}<span className="text-xs text-gray-400">{r.date}</span></div>
                      <h4 className="font-medium mb-1">{r.title}</h4>
                      <p className="text-gray-600 text-sm">{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT: Pricing & Quote */}
        <aside className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl border">
            <h3 className="uppercase text-sm tracking-widest text-gray-700 mb-4">Wholesale Pricing</h3>
            <div className="space-y-3">
              {product.pricing.map((p, idx) => (
                <div key={idx} className="flex justify-between bg-white p-3 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{p.min}-{p.max} pcs</p>
                    {p.savings && <p className="text-xs text-green-600">{p.savings}</p>}
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{p.price}</p>
                    <p className="text-xs text-gray-500">{p.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-6 rounded-xl space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-yellow-400" />
              <h3 className="uppercase text-sm tracking-widest">Get Instant Quote</h3>
            </div>
            <input className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-gray-400" placeholder="First Name"/>
            <input className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-gray-400" placeholder="Last Name"/>
            <input className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-gray-400" placeholder="Business Email"/>
            <textarea className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-gray-400" placeholder="Your requirements…"/>
            <button className="w-full py-3 bg-yellow-400 text-black rounded uppercase tracking-widest hover:bg-yellow-500 transition">
              Submit Quote
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="uppercase text-sm tracking-widest mb-3 font-medium">Trade Info</h3>
            {Object.entries(product.business).map(([k,v])=>(
              <div key={k} className="flex justify-between text-sm border-b py-2 last:border-0">
                <span className="text-gray-500">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="uppercase text-sm tracking-widest mb-3 font-medium">Payment & Security</h3>
            <p className="text-sm mb-2">💳 Credit Card • 🏦 Wire • 📄 L/C</p>
            <p className="text-xs text-gray-500">SSL Secured • PCI DSS • Escrow available</p>
          </div>

          <div className="bg-yellow-400 text-black p-6 rounded-xl text-center">
            <h3 className="font-bold uppercase tracking-widest mb-2">🏆 Gold Supplier</h3>
            <p className="text-sm">15+ Years Experience • 98.5% Satisfaction</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default JewelryShowcase;
