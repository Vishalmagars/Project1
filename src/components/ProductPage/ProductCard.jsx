import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart, Star, Award, Sparkles } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleInquiry = () => {
    alert(`Inquiry sent for: ${product.title}`);
  };

  const handleQuickView = () => {
    console.log('Quick view for:', product.title);
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', product.title);
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'premium':
        return 'bg-gradient-to-r from-blue-500 to-blue-700';
      case 'new':
        return 'bg-gradient-to-r from-cyan-500 to-cyan-700';
      case 'export':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-700';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Product Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold uppercase ${getBadgeColor(product.badge)} shadow-sm`}
        >
          {product.badge}
        </div>

        {/* Product Overlay */}
        <div
          className={`absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center gap-3 sm:gap-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleQuickView}
            className="bg-white text-blue-800 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
            aria-label="Quick View"
          >
            <Eye size={16} />
            <span className="hidden sm:inline">Quick View</span>
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-white text-blue-800 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold text-sm"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Product Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 line-clamp-1">{product.title}</h3>
        
        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Product Specifications */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.specs.map((spec, index) => (
            <span
              key={index}
              className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-full text-xs text-blue-700"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < product.rating ? 'text-blue-500 fill-current' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <span className="text-lg sm:text-xl font-bold text-blue-600">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        {/* Product Actions */}
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handleInquiry}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Inquiry
          </button>
          <button
            onClick={handleWishlist}
            className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isWishlisted
                ? 'bg-blue-500 border-blue-500 text-white'
                : 'bg-white border-blue-300 text-blue-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white'
            }`}
            aria-label="Add to Wishlist"
          >
            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;