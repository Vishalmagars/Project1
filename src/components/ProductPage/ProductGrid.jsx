import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import allProducts from "./ProductData";

const categories = [...new Set(allProducts.map((p) => p.type))];
const materials = [...new Set(allProducts.map((p) => p.material))];

export default function ProductGrid() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [committedSearch, setCommittedSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const productsPerPage = 9;

  // ✅ filter logic uses committedSearch only
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const price = parseFloat(p.price.replace("$", "").replace(",", ""));
      return (
        (!selectedCategory || p.type === selectedCategory) &&
        (!selectedMaterial || p.material === selectedMaterial) &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        p.title.toLowerCase().includes(committedSearch.toLowerCase())
      );
    });
  }, [selectedCategory, selectedMaterial, priceRange, committedSearch]);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return allProducts
      .filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm]);

  const commitSearch = (term) => {
    setCommittedSearch(term);
    setSearchTerm(term);
    setShowSuggestions(false);
  };

  const FilterContent = () => (
    <div className="p-6 space-y-8">
      <h2 className="text-lg font-semibold tracking-widest uppercase text-gray-800">
        Filters
      </h2>

      {/* category */}
      <div>
        <p className="text-sm font-medium mb-3">Category</p>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() =>
                  setSelectedCategory(cat === selectedCategory ? "" : cat)
                }
                className={`block w-full text-left text-sm px-3 py-2 hover:bg-black hover:text-white transition ${
                  selectedCategory === cat ? "bg-black text-white" : ""
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* material */}
      <div>
        <p className="text-sm font-medium mb-3">Material</p>
        <ul className="space-y-2">
          {materials.map((mat) => (
            <li key={mat}>
              <button
                onClick={() =>
                  setSelectedMaterial(mat === selectedMaterial ? "" : mat)
                }
                className={`block w-full text-left text-sm px-3 py-2 hover:bg-black hover:text-white transition ${
                  selectedMaterial === mat ? "bg-black text-white" : ""
                }`}
              >
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* price */}
      <div>
        <p className="text-sm font-medium mb-3">Max Price</p>
        <input
          type="range"
          min="1000"
          max="50000"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-black"
        />
        <p className="text-xs mt-2 text-gray-600">Up to ${priceRange[1]}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase">
          Zara Style
        </h1>

        {/* Search with suggestions */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-b border-black py-2 pl-8 pr-4 focus:outline-none text-sm tracking-wider"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitSearch(searchTerm);
            }}
          />
          <Search size={18} className="absolute left-1.5 top-2.5 text-gray-500" />

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute mt-1 w-full bg-white border shadow-lg text-sm z-50">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => commitSearch(s.title)}
                >
                  {s.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={() => setShowFilterMobile(true)}
          className="md:hidden flex items-center gap-2 px-4 py-2 border border-black uppercase text-sm tracking-wider hover:bg-black hover:text-white transition"
        >
          <Filter size={16} /> Filter
        </button>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-10">
        {/* Desktop filter */}
        <aside className="hidden lg:block lg:w-1/4 border-r">{FilterContent()}</aside>

        {/* Products */}
        <main className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((p) => (
                <div
                  key={p.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-sm">
                    <h3 className="font-medium tracking-wide">{p.title}</h3>
                    <p className="mt-1 text-gray-600">{p.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                className={`px-4 py-2 text-sm uppercase tracking-widest border ${
                  currentPage === n ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile filter bottom sheet */}
      <AnimatePresence>
        {showFilterMobile && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowFilterMobile(false)}
            ></div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="mt-auto bg-white rounded-t-3xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-medium tracking-widest uppercase">
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilterMobile(false)}
                  className="text-xl font-bold"
                >
                  ✕
                </button>
              </div>
              {FilterContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
