import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Star,
  Heart,
  Eye,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Added for navigation
import allProducts from './ProductData';

const ProductListingPage = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [favorites, setFavorites] = useState(new Set());

  const navigate = useNavigate(); // ⬅️ Hook for navigation

  const simulateAPICall = (products) =>
    new Promise((resolve) => setTimeout(() => resolve(products), 1200));

  useEffect(() => {
    const loadInitialProducts = async () => {
      setIsLoading(true);
      const initial = await simulateAPICall(allProducts.slice(0, 12));
      setDisplayedProducts(initial);
      const indices = {};
      initial.forEach((p) => (indices[p.id] = 0));
      setCurrentImageIndex(indices);
      setIsLoading(false);
    };
    loadInitialProducts();
  }, []);

  const loadMoreProducts = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const currentCount = displayedProducts.length;
    const next = allProducts.slice(currentCount, currentCount + 12);
    if (!next.length) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }
    const fetched = await simulateAPICall(next);
    setDisplayedProducts((prev) => [...prev, ...fetched]);
    const indices = {};
    fetched.forEach((p) => (indices[p.id] = 0));
    setCurrentImageIndex((prev) => ({ ...prev, ...indices }));
    if (currentCount + fetched.length >= allProducts.length)
      setHasMore(false);
    setIsLoading(false);
  };

  const nextImage = (id) => {
    setCurrentImageIndex((prev) => {
      const product = displayedProducts.find((p) => p.id === id);
      const current = prev[id] || 0;
      return { ...prev, [id]: (current + 1) % product.images.length };
    });
  };

  const prevImage = (id) => {
    setCurrentImageIndex((prev) => {
      const product = displayedProducts.find((p) => p.id === id);
      const current = prev[id] || 0;
      return {
        ...prev,
        [id]: (current - 1 + product.images.length) % product.images.length,
      };
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      newFavs.has(id) ? newFavs.delete(id) : newFavs.add(id);
      return newFavs;
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    for (let i = 0; i < full; i++) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }
    if (half) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50"
        />
      );
    }
    return stars;
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative  py-16 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
            Exclusive Jewelry Collection
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Elegance meets craftsmanship. Discover timeless designs curated for
            the finest tastes.
          </p>
          <p className="text-sm text-gray-500">
            Showing {displayedProducts.length} of {allProducts.length} items
          </p>
        </div>
      </header>

      {/* Loader */}
      {isLoading && displayedProducts.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols- sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden group">
              <img
                src={product.images[currentImageIndex[product.id] || 0]}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => prevImage(product.id)}
                    className="bg-white/80 p-1 rounded-full shadow"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    onClick={() => nextImage(product.id)}
                    className="bg-white/80 p-1 rounded-full shadow"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-4 space-y-2">
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{product.type}</span>
                <span>{product.carat}k</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 truncate">
                {product.title}
              </h2>
              <p className="text-xs text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <div className="text-xs text-gray-500">
                <span>{product.material}</span> •{' '}
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-xs text-gray-600">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="line-through text-sm text-gray-400">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              {/* ✅ Updated Button Section */}
              <div className="flex gap-2 mt-2">
                <button
                  disabled={!product.inStock}
                  onClick={() => {
                    if (product.inStock) {
                      navigate('/productShowcase'); // Or `/productShowcase/${product.id}`
                    }
                  }}
                  className={`flex-1 flex items-center justify-center gap-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    product.inStock
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  {product.inStock ? 'View Detail' : 'Sold Out'}
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 rounded-lg">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12 pb-20">
        {hasMore ? (
          <button
            onClick={loadMoreProducts}
            disabled={isLoading}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            {isLoading ? (
              <span className="flex items-center gap-2 justify-center">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Loading...
              </span>
            ) : (
              'Load More Products'
            )}
          </button>
        ) : (
          <p className="text-sm text-gray-500">You've seen everything!</p>
        )}
      </div>
    </section>
  );
};

export default ProductListingPage;
