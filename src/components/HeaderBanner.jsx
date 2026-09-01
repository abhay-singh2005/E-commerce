import React from 'react';
import { Sparkles, Truck, PhoneCall, Instagram } from 'lucide-react';

export default function HeaderBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-amber-100 text-xs sm:text-sm py-2 px-4 shadow-inner border-b border-amber-700/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <div className="flex items-center gap-2 font-medium">
          <span className="bg-amber-500/20 text-amber-300 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" /> Festive Special
          </span>
          <span>Extra 10% OFF with code <strong className="text-amber-300 tracking-wide">KHUSHNUMA10</strong></span>
        </div>

        <div className="flex items-center gap-4 text-amber-200/90 text-xs">
          <span className="hidden sm:flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-amber-400" /> Pan-India Shipping
          </span>
          <span className="hidden md:inline">•</span>
          <a 
            href="https://www.instagram.com/khushnumasales/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors underline font-medium"
          >
            <Instagram className="w-3.5 h-3.5 text-rose-400" /> @khushnumasales
          </a>
          <span className="hidden sm:inline">•</span>
          <a 
            href="https://wa.me/919876543210?text=Hi%20Khushnuma%20Sales,%20I%20want%20to%20inquire%20about%20your%20collection" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors font-semibold"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
