import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onAddToCart, 
  onRemoveWishlist 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-rose-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
              <h3 className="font-serif text-lg font-bold">Your Saved Wishlist ({wishlistItems.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-rose-800 text-rose-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-600 mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-base mb-1">Your Wishlist is Empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                  Save your favorite heavy suits and sarees here by tapping the heart icon on any product.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-rose-900 text-white font-bold text-xs rounded-full shadow-md hover:bg-rose-950 transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 p-3 bg-rose-50/30 rounded-2xl border border-rose-200/50"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-xl border border-slate-200"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(item.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-amber-800 font-semibold mt-0.5">
                        {item.category} • ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(item);
                        onRemoveWishlist(item.id);
                      }}
                      className="w-full py-1.5 bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 mt-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-300" /> Move to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
