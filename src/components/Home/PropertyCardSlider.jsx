import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Royal Ruby Necklace",
    price: "$25,000",
    location: "Jaipur, India",
    type: "NECKLACE",
    carat: 22,
    material: "Gold & Ruby",
    images: [
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=387&auto=format&fit=crop",
    ],
  },
  {
    title: "Emerald Studded Ring",
    price: "$7,800",
    location: "Mumbai, India",
    type: "RING",
    carat: 18,
    material: "Platinum & Emerald",
    images: [
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=580&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=870&auto=format&fit=crop",
    ],
  },
  {
    title: "Diamond Bridal Set",
    price: "$48,000",
    location: "Surat, India",
    type: "BRIDAL SET",
    carat: 24,
    material: "Diamond & White Gold",
    images: [
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=387&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=870&q=80",
    ],
  },
  {
    title: "Sapphire Elegant Bracelet",
    price: "$18,500",
    location: "Udaipur, India",
    type: "BRACELET",
    carat: 20,
    material: "White Gold & Sapphire",
    images: [
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?q=80&w=406&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=580&auto=format&fit=crop",
    ],
  },
];

export default function Feature() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(products.length).fill(0));

  const nextImage = (idx) => {
    setCurrentImageIndex(prev => {
      const copy = [...prev];
      copy[idx] = (copy[idx] + 1) % products[idx].images.length;
      return copy;
    });
  };

  const prevImage = (idx) => {
    setCurrentImageIndex(prev => {
      const copy = [...prev];
      copy[idx] = (copy[idx] - 1 + products[idx].images.length) % products[idx].images.length;
      return copy;
    });
  };

  const handleCardClick = () => navigate("/productShowcase");

  return (
    <section className="bg-white px-4 py-16 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-gray-900">
          Featured
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Discover our curation of timeless luxury pieces.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            onClick={handleCardClick}
            className="cursor-pointer group"
            tabIndex={0}
            onKeyDown={(e) => ["Enter"," "].includes(e.key) && handleCardClick()}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.images[currentImageIndex[idx]]}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Minimal navigation arrows */}
              <div
                className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100 transition"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => prevImage(idx)}
                  className="bg-white/90 border border-black hover:bg-black hover:text-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => nextImage(idx)}
                  className="bg-white/90 border border-black hover:bg-black hover:text-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-white/90 via-white/70 to-transparent w-full">
                <p className="text-[11px] uppercase tracking-widest text-gray-700">{product.type}</p>
                <p className="text-sm font-medium text-gray-900">{product.title}</p>
                <p className="text-sm mt-1 text-gray-600">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
