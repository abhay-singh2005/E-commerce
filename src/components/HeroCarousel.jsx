import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Instagram, MessageCircle } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Luxury Unstitched & Stitched Heavy Suits",
    subtitle: "Handcrafted Zari, Gota Patti & Sequins Work",
    tag: "Festive & Rakhi Special 2026",
    bgImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80",
    ctaCategory: "Heavy Suits",
    buttonText: "Shop Heavy Suits"
  },
  {
    id: 2,
    title: "Graceful Banarasi & Organza Silk Sarees",
    subtitle: "Rich Weaves, Timeless Drapes & Matching Blouse Pieces",
    tag: "Handpicked Silk Collection",
    bgImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80",
    ctaCategory: "Sarees",
    buttonText: "Explore Sarees"
  },
  {
    id: 3,
    title: "Complete Family Outfit Destination",
    subtitle: "Designer Kidswear & Premium Men's Juttis & Footwear",
    tag: "Store Exclusive • Firozpur Jhirka",
    bgImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80",
    ctaCategory: "All Collections",
    buttonText: "Browse All Collections"
  }
];

export default function HeroCarousel({ onSelectCategory, onScrollToStore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white min-h-[480px] md:min-h-[540px] flex items-center shadow-xl">
      {/* Background Image Carousel with Overlay */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-10000' : 'opacity-0'
          }`}
        >
          <img 
            src={s.bgImage} 
            alt={s.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-amber-950/20 mix-blend-overlay" />
        </div>
      ))}

      {/* Hero Banner Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 animate-bounce">
            <Sparkles className="w-3.5 h-3.5" />
            {slide.tag}
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-200 font-medium mb-8 leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectCategory(slide.ctaCategory)}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-amber-950 font-bold text-sm rounded-full shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>{slide.buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%20Khushnuma%20Sales,%20I%20saw%20your%20website%20and%20want%20to%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm rounded-full shadow-md backdrop-blur-md border border-emerald-400/30 hover:border-emerald-300 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Instant WhatsApp Order</span>
            </a>
          </div>

          {/* Value Props Pills */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> 100% Quality Checked Fabric
            </div>
            <div className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-amber-400" /> Offline Store & Online Trust
            </div>
            <div className="flex items-center gap-1.5">
              <Instagram className="w-4 h-4 text-rose-400" /> Live Video Preview Available
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
