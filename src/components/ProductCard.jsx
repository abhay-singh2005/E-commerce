import React from 'react';
import { Heart, ShoppingBag, Eye, Star, MessageCircle } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-amber-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Tag Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
          {product.tag && (
            <span className="bg-amber-900 text-amber-200 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm border border-amber-500/30">
              {product.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform duration-200 active:scale-90 z-10 ${
            isWishlisted 
              ? 'bg-rose-600 text-white shadow-md' 
              : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-600 shadow-sm'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Floating Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            onClick={() => onQuickView(product)}
            className="w-full py-2 bg-white/95 hover:bg-white text-slate-900 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-amber-600" /> Quick View
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-amber-800 font-semibold mb-1">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded text-amber-900">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>{product.rating}</span>
              <span className="text-slate-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif font-bold text-slate-900 text-sm sm:text-base line-clamp-2 hover:text-amber-700 cursor-pointer transition-colors mb-1"
          >
            {product.name}
          </h3>

          {/* Fabric / Work preview */}
          <p className="text-xs text-slate-500 line-clamp-1 mb-3">
            {product.fabric} • {product.work}
          </p>
        </div>

        {/* Pricing & Actions */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-base sm:text-lg font-extrabold text-amber-950">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToCart(product)}
              className="py-2 bg-amber-900 hover:bg-amber-950 text-white font-semibold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" /> Add to Cart
            </button>

            <a
              href={`https://wa.me/919876543210?text=Hi%20Khushnuma%20Sales,%20I%20am%20interested%20in%20"${encodeURIComponent(product.name)}"%20(Price:%20₹${product.price}).%20Is%20this%20available?`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/80 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
