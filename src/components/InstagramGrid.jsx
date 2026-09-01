import React from 'react';
import { INSTAGRAM_POSTS } from '../data/instagramPosts';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export default function InstagramGrid() {
  return (
    <section className="bg-gradient-to-b from-amber-50/50 to-white py-16 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Instagram className="w-4 h-4 text-rose-600" /> Instagram Feed
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-950">
            Follow Us <a href="https://www.instagram.com/khushnumasales/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">@khushnumasales</a>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Get real-time updates on our latest arrivals, live customer trial videos, Rakhi & festive offers!
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
            >
              <img
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex justify-end">
                  <ExternalLink className="w-4 h-4 text-amber-300" />
                </div>
                
                <p className="text-[11px] line-clamp-3 font-medium text-slate-200">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs font-bold text-amber-300 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-amber-300" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/khushnumasales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-rose-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5" /> Visit Official Instagram Page
          </a>
        </div>

      </div>
    </section>
  );
}
