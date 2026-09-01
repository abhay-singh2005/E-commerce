import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, CheckCircle2, ShieldCheck, Truck, MessageCircle, Sparkles } from 'lucide-react';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const whatsappMessage = encodeURIComponent(
    `Hi Khushnuma Sales!\n\nI want to order this item from your website:\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Color:* ${selectedColor.name}\n*Size/Fit:* ${selectedSize}\n*Price:* ₹${product.price}\n\nPlease confirm availability and payment options.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-amber-900/10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 bg-amber-50 p-6 flex flex-col justify-between">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-inner mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            {product.tag && (
              <span className="absolute top-3 left-3 bg-amber-900 text-amber-200 text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md border border-amber-500/30">
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === img ? 'border-amber-700 ring-2 ring-amber-400 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details & Purchase Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
          <div>
            {/* Category & Badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-100/70 px-2.5 py-1 rounded-full">
                {product.category} • {product.subCategory}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-950">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl font-bold text-amber-950 mb-3 leading-snug">
              {product.name}
            </h2>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 mb-6 p-3 bg-amber-50/60 rounded-2xl border border-amber-200/50">
              <span className="text-2xl font-extrabold text-amber-950">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-extrabold text-rose-600 bg-rose-100 px-2 py-0.5 rounded">
                    Save {discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Color: <span className="text-amber-800 font-normal">{selectedColor.name}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedColor(c);
                        if (c.image) setSelectedImage(c.image);
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        selectedColor.name === c.name 
                          ? 'border-amber-700 bg-amber-900 text-white shadow-md' 
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-amber-50'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Size / Option:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedSize === s 
                          ? 'border-amber-700 bg-amber-950 text-amber-200 shadow-sm' 
                          : 'border-slate-200 bg-white text-slate-700 hover:border-amber-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Features & Description */}
            <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-4 rounded-2xl">
              <p className="font-semibold text-slate-900">{product.description}</p>
              <div className="pt-2 border-t border-slate-200 flex flex-col gap-1 text-[11px]">
                <div><strong>Fabric:</strong> {product.fabric}</div>
                <div><strong>Work Details:</strong> {product.work}</div>
                {product.dupatta && <div><strong>Dupatta:</strong> {product.dupatta}</div>}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onAddToCart({ ...product, selectedColor, selectedSize });
                }}
                className="py-3 bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" /> Add to Cart
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`py-3 font-bold text-xs sm:text-sm rounded-xl transition-all border flex items-center justify-center gap-2 ${
                  isWishlisted 
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md' 
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-rose-50 hover:text-rose-600'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} /> 
                {isWishlisted ? 'Wishlisted' : 'Wishlist'}
              </button>
            </div>

            {/* Direct WhatsApp Order Button */}
            <a
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-emerald-200" /> Order Direct via WhatsApp
            </a>

            <div className="flex items-center justify-around text-[10px] text-slate-500 font-medium pt-2">
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-amber-600" /> Fast Delivery</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> 100% Original</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Video Call Verification</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
