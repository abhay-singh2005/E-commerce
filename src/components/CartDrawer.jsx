import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageCircle, Tag, Sparkles } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryFee = subtotal > 1999 || cartItems.length === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const applyPromo = () => {
    if (promoInput.trim().toUpperCase() === 'KHUSHNUMA10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Festive discount applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Use KHUSHNUMA10');
      setPromoSuccess('');
    }
  };

  const formattedWhatsAppOrder = encodeURIComponent(
    `Hi Khushnuma Sales! 🛍️\n\nI would like to place an order from your website:\n\n` +
    cartItems.map((item, i) => `${i + 1}. *${item.name}*\n   Color: ${item.selectedColor?.name || 'Standard'}, Size: ${item.selectedSize || 'Standard'}\n   Qty: ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}`).join('\n\n') +
    `\n\n------------------------------\nSubtotal: ₹${subtotal}\nDiscount: -₹${discountAmount}\nDelivery: ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}\n*Grand Total: ₹${grandTotal}*\n------------------------------\n\nPlease let me know the payment link / UPI details for delivery!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-amber-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <h3 className="font-serif text-lg font-bold">Shopping Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-amber-800 text-amber-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-700 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-slate-800 text-base mb-1">Your Cart is Empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                  Explore our luxury suits, sarees, and kidswear collection to add items to your cart.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-amber-900 text-white font-bold text-xs rounded-full shadow-md hover:bg-amber-950 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={`${item.id}-${item.selectedColor?.name}-${item.selectedSize}`}
                  className="flex gap-4 p-3 bg-amber-50/40 rounded-2xl border border-amber-200/50"
                >
                  <img
                    src={item.selectedColor?.image || item.images[0]}
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
                          onClick={() => onRemoveItem(item)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-amber-800 font-medium mt-0.5">
                        {item.selectedColor?.name} • {item.selectedSize}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-extrabold text-amber-950 text-sm">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      {/* Quantity Selector */}
                      <div className="flex items-center border border-amber-300 rounded-lg bg-white overflow-hidden shadow-sm">
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                          className="p-1 hover:bg-amber-100 text-slate-700 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="p-1 hover:bg-amber-100 text-slate-700 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              
              {/* Promo Code Box */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Promo code (Try KHUSHNUMA10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
                    />
                  </div>
                  <button
                    onClick={applyPromo}
                    className="px-4 py-1.5 bg-amber-900 text-white font-bold text-xs rounded-xl hover:bg-amber-950 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoSuccess && <p className="text-[11px] text-emerald-600 font-semibold mt-1">{promoSuccess}</p>}
                {promoError && <p className="text-[11px] text-rose-600 font-semibold mt-1">{promoError}</p>}
              </div>

              {/* Price Calculation Summary */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (10%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span className="font-semibold text-slate-900">
                    {deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-amber-950 pt-2 border-t border-slate-200">
                  <span>Grand Total</span>
                  <span className="text-base text-amber-900">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* WhatsApp Instant Order Button */}
              <a
                href={`https://wa.me/919876543210?text=${formattedWhatsAppOrder}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Checkout Order via WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-slate-500 italic">
                🔒 Direct chat with Khushnuma Sales owner • Fast confirmation
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
