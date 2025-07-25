import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    title: "Royal Ruby Necklace",
    price: "$25,000",
    location: "Jaipur, India",
    type: "NECKLACE",
    carat: 22,
    material: "Gold & Ruby",
    images: [
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3 SHEETS",
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
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=870&q=80"
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
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
  },
  
];

const Feature = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(products.length).fill(0));

  const nextImage = (idx) => {
    setCurrentImageIndex((prev) => {
      const copy = [...prev];
      copy[idx] = (copy[idx] + 1) % products[idx].images.length;
      return copy;
    });
  };

  const prevImage = (idx) => {
    setCurrentImageIndex((prev) => {
      const copy = [...prev];
      copy[idx] = (copy[idx] - 1 + products[idx].images.length) % products[idx].images.length;
      return copy;
    });
  };

  const handleCardClick = () => navigate('/productShowcase');
  const handleShowMore = () => navigate('/products');

  return (
    <div className=" bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-left mb-8 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 font-bold leading-snug sm:leading-tight">
          Featured Products
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg lg:text-xl mb-4 max-w-xl leading-relaxed">
          Explore timeless elegance and intricate craftsmanship in every piece.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 ">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={handleCardClick}
            tabIndex={0}
            onKeyDown={(e) => (['Enter', ' '].includes(e.key) ? handleCardClick() : null)}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={product.images[currentImageIndex[idx]]}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex justify-between items-center p-2 sm:p-3 opacity-0 hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="bg-white p-2 rounded-full shadow-md" onClick={() => prevImage(idx)}>
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md" onClick={() => nextImage(idx)}>
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
  </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                <div className="flex justify-between items-end">
                  <div className="text-white space-y-1.5">
                    <p className="uppercase text-sm sm:text-base">{product.type}</p>
                    <p className="text-sm sm:text-base">{product.material}</p>
                    <p className="text-sm sm:text-base">{product.carat} Carat</p>
                    <p className="text-xl sm:text-2xl font-bold">{product.price}</p>
                  </div>
                  <button className="bg-white/20 p-2 rounded-full" onClick={(e) => e.stopPropagation()}>
                    <Maximize2 className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
       <button
  onClick={handleShowMore}
  className="button"
  style={{ "--clr": "#facc15" }} // Tailwind's bg-yellow-400
>
  <span className="button__icon-wrapper">
    <svg
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg"
      width="10"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      />
    </svg>

    <svg
      viewBox="0 0 14 15"
      fill="none"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      className="button__icon-svg button__icon-svg--copy"
    >
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      />
    </svg>
  </span>
  View All
</button>


        
      </div>
    </div>
  );
};

export default Feature;