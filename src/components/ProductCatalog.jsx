import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { Filter, SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';

export default function ProductCatalog({ 
  products, 
  selectedCategory, 
  onSelectCategory, 
  searchQuery,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds
}) {
  const [maxPrice, setMaxPrice] = useState(6000);
  const [sortBy, setSortBy] = useState("recommended");

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === "All Collections" || p.category === selectedCategory;
        const matchesSearch = !searchQuery || 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = p.price <= maxPrice;
        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // recommended
      });
  }, [products, selectedCategory, searchQuery, maxPrice, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="catalog-section">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Handpicked Boutique Collection
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-amber-950">
            {selectedCategory === "All Collections" ? "Featured Ethnic & Festive Wear" : selectedCategory}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Showing {filteredProducts.length} premium designs ready for immediate dispatch
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Price Range Slider */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-amber-900/10 shadow-sm text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-semibold text-slate-700">Max Price: ₹{maxPrice}</span>
            <input
              type="range"
              min="1000"
              max="6000"
              step="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-24 accent-amber-700 cursor-pointer"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-amber-900/10 shadow-sm text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-amber-700" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-semibold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="recommended">Featured Picks</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-amber-900 text-amber-100 shadow-md ring-2 ring-amber-500/30'
                : 'bg-white text-slate-700 hover:bg-amber-100/60 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Active Search Notification */}
      {searchQuery && (
        <div className="mb-6 p-3 bg-amber-100/80 text-amber-950 rounded-xl flex items-center justify-between text-xs border border-amber-300">
          <span>Search results for: <strong>"{searchQuery}"</strong></span>
          <button 
            onClick={() => onSelectCategory("All Collections")} 
            className="text-amber-800 underline font-bold hover:text-amber-950"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-amber-900/10 shadow-sm my-8">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-800 mb-4">
            <Filter className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-800 mb-1">No matching items found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
            Try adjusting your search query, increasing your price range slider, or exploring another category.
          </p>
          <button
            onClick={() => {
              onSelectCategory("All Collections");
              setMaxPrice(6000);
            }}
            className="px-6 py-2.5 bg-amber-900 text-white font-bold text-xs rounded-full shadow-md hover:bg-amber-950 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

    </section>
  );
}
