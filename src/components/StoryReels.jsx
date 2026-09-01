import React, { useState } from 'react';
import { HIGHLIGHT_REELS } from '../data/products';
import { Instagram, Sparkles, X, Play } from 'lucide-react';

export default function StoryReels({ onSelectCategory }) {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="bg-amber-900/5 border-y border-amber-900/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-full text-white">
              <Instagram className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-950">
              Instagram Stories & Highlights
            </h3>
          </div>
          <a
            href="https://www.instagram.com/khushnumasales/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1"
          >
            <span>@khushnumasales</span>
          </a>
        </div>

        {/* Story Circles Bar */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
          {HIGHLIGHT_REELS.map((reel) => (
            <div 
              key={reel.id}
              onClick={() => {
                setActiveStory(reel);
                if (reel.title.includes("Suit")) onSelectCategory("Heavy Suits");
                else if (reel.title.includes("Saree")) onSelectCategory("Sarees");
                else if (reel.title.includes("Kids")) onSelectCategory("Kidswear");
                else if (reel.title.includes("Footwear")) onSelectCategory("Footwear");
              }}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
            >
              <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover group-hover:brightness-95 transition-all"
                  />
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-800 mt-2 text-center group-hover:text-amber-700">
                {reel.title}
              </span>
              <span className="text-[10px] text-amber-700 font-medium">
                {reel.count}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Story Preview Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-sm bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white border border-slate-700">
            {/* Story Top Progress Bar */}
            <div className="absolute top-3 left-3 right-3 z-10 flex gap-1">
              <div className="h-1 bg-white/80 rounded-full w-full animate-pulse" />
            </div>

            {/* Header info */}
            <div className="absolute top-6 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={activeStory.image} alt="" className="w-8 h-8 rounded-full border border-amber-400 object-cover" />
                <div>
                  <p className="text-xs font-bold leading-tight">khushnumasales</p>
                  <p className="text-[10px] text-amber-300 font-semibold">{activeStory.title}</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveStory(null)}
                className="p-1 bg-black/40 text-white rounded-full hover:bg-black/70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media View */}
            <div className="relative h-[480px]">
              <img src={activeStory.image} alt={activeStory.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

              <div className="absolute bottom-6 left-4 right-4 text-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500 text-amber-950 rounded-full text-xs font-extrabold uppercase mb-2">
                  <Sparkles className="w-3 h-3" /> Featured Collection
                </span>
                <h4 className="text-xl font-bold font-serif mb-1">{activeStory.title}</h4>
                <p className="text-xs text-slate-300 mb-4">Tap below to view matching items in our store</p>

                <button
                  onClick={() => setActiveStory(null)}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" /> Browse Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
