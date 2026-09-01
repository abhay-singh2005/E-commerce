import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Heart, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Footer({ onSelectCategory, onScrollToStore }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-serif text-xl font-bold border border-amber-400">
                K
              </div>
              <span className="font-serif text-2xl font-bold text-white">Khushnuma <span className="text-amber-500 font-normal italic">Sales</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Your premier destination for unstitched heavy suits, Banarasi silk sarees, designer kidswear, and men's ethnic footwear in Firozpur Jhirka, Haryana.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/khushnumasales/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-800"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800">
              Collection Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-amber-400 transition-colors text-slate-400 flex items-center gap-1.5"
                  >
                    <span>•</span> {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Store Location */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800">
              Visit Retail Store
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>1011, Biwa Road, opposite HDFC Bank ATM, Firozpur Jhirka, Haryana 122104</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>contact@khushnumasales.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Exclusive Updates */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800">
              New Drops & VIP Offers
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Subscribe to receive instant updates on new Rakhi & Wedding suit drops via WhatsApp / Email.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter WhatsApp / Email"
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button 
                onClick={() => alert("Thank you for subscribing to Khushnuma Sales updates!")}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-xl transition-colors whitespace-nowrap"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Khushnuma Sales. All Rights Reserved. Crafted with care for ethnic elegance.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="https://www.instagram.com/khushnumasales/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">Instagram</a>
            <span>•</span>
            <button onClick={onScrollToStore} className="hover:text-amber-400">Store Directions</button>
            <span>•</span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">WhatsApp Order</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
