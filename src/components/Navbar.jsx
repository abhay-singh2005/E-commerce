import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Instagram, MapPin, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  selectedCategory, 
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onScrollToStore
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mobile Menu Button & Brand Name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 text-slate-700 hover:text-amber-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectCategory("All Collections")}>
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 flex items-center justify-center text-white shadow-md border border-amber-300/40">
                <span className="font-serif text-2xl font-bold tracking-tighter">K</span>
              </div>
              <div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 tracking-tight leading-none flex items-center gap-1.5">
                  Khushnuma <span className="text-amber-600 font-normal italic">Sales</span>
                </h1>
                <p className="text-[10px] text-amber-800 font-semibold tracking-widest uppercase mt-0.5">
                  Boutique & Retail • Firozpur Jhirka
                </p>
              </div>
            </div>
          </div>

          {/* Middle: Desktop Navigation Categories */}
          <nav className="hidden lg:flex items-center gap-1 bg-amber-50/60 p-1.5 rounded-full border border-amber-200/50">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-900 text-white shadow-sm'
                      : 'text-slate-700 hover:text-amber-900 hover:bg-amber-100/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          {/* Right: Search & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Search Input */}
            <div className="relative hidden sm:block w-48 md:w-56 lg:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search suits, sarees..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-slate-100/80 border border-slate-200 rounded-full pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Store Location Icon */}
            <button
              onClick={onScrollToStore}
              title="Store Location & Info"
              className="p-2 text-slate-700 hover:text-amber-800 hover:bg-amber-50 rounded-full transition-colors hidden md:flex items-center gap-1 text-xs font-medium"
            >
              <MapPin className="w-5 h-5 text-amber-700" />
              <span className="hidden xl:inline text-amber-950 font-semibold">Store</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-amber-900 hover:bg-amber-950 text-white rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline text-xs font-bold pr-1">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-amber-950 text-xs font-extrabold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 sm:hidden">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search heavy suits, sarees, footwear..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-full pl-9 pr-8 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-amber-100 bg-amber-50/90 rounded-b-2xl mb-2 px-2 shadow-lg animate-fadeIn">
            <p className="text-[11px] font-bold text-amber-900 uppercase tracking-widest px-3 mb-2">Categories</p>
            <div className="grid grid-cols-2 gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${
                    selectedCategory === cat ? 'bg-amber-900 text-white font-bold' : 'text-slate-800 hover:bg-amber-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200/60 flex flex-col gap-2 px-2">
              <button
                onClick={() => {
                  onScrollToStore();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs font-semibold text-amber-950 bg-white p-2 rounded-lg border border-amber-200"
              >
                <MapPin className="w-4 h-4 text-amber-700" /> Visit Store in Firozpur Jhirka
              </button>

              <a
                href="https://www.instagram.com/khushnumasales/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-200"
              >
                <Instagram className="w-4 h-4" /> Follow @khushnumasales on Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
