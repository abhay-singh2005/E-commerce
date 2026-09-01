import React from 'react';
import { REVIEWS } from '../data/instagramPosts';
import { Star, ShieldCheck, HeartHandshake, Award, Quote } from 'lucide-react';

export default function CustomerReviews() {
  return (
    <section className="bg-amber-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <HeartHandshake className="w-4 h-4 text-amber-400" /> Customer Love
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Fashion Lovers Across India
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 mt-2">
            Read real feedback from our online Instagram shoppers and Firozpur Jhirka store visitors.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-amber-900/40 p-6 rounded-3xl border border-amber-700/40 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-600/40" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 italic mb-6 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-800/50 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-amber-100">{rev.author}</h4>
                  <p className="text-[10px] text-amber-400 font-semibold">{rev.location}</p>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-950/60 px-2 py-1 rounded-full border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-amber-800/50 text-center">
          <div className="p-4 rounded-2xl bg-amber-900/20 border border-amber-800/30">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">10,000+</div>
            <p className="text-xs text-slate-300 mt-1">Satisfied Customers</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-900/20 border border-amber-800/30">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">4.9 / 5</div>
            <p className="text-xs text-slate-300 mt-1">Average Rating</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-900/20 border border-amber-800/30">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">100%</div>
            <p className="text-xs text-slate-300 mt-1">Quality Check Guarantee</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-900/20 border border-amber-800/30">
            <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">Pan-India</div>
            <p className="text-xs text-slate-300 mt-1">Fast Delivery</p>
          </div>
        </div>

      </div>
    </section>
  );
}
