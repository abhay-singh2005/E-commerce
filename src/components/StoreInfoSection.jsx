import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function StoreInfoSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', query: '', category: 'Heavy Suits' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', query: '', category: 'Heavy Suits' });
    }, 4000);
  };

  return (
    <section className="py-16 bg-white border-t border-amber-900/10" id="store-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Store Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4 text-amber-700" /> Visit Our Retail Boutique
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-950 mb-4 leading-tight">
              Experience Khushnuma Sales In-Person
            </h2>

            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Step into our store to touch and feel our exclusive silk fabric, unstitched suit sets, designer sarees, kidswear, and men's footwear.
            </p>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Store Address</h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    1011, Biwa Road, opposite HDFC Bank ATM,<br />
                    Firozpur Jhirka, Haryana 122104
                  </p>
                  <a
                    href="https://maps.google.com/?q=1011+Biwa+Road+Firozpur+Jhirka+Haryana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 mt-2 underline"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get Directions on Map
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Opening Hours</h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Monday - Sunday: 9:30 AM – 8:30 PM (Open All 7 Days)
                  </p>
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Customer Helpline & WhatsApp</h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Phone / WhatsApp: +91 98765 43210
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Khushnuma%20Sales,%20I%20have%20a%20query"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-2 underline"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="bg-amber-900/5 p-8 rounded-3xl border border-amber-900/10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-amber-950 mb-2">
              Have a Design or Order Inquiry?
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill out your request below or ask about unstitched suit customization, bulk orders, or stock availability.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-6 rounded-2xl text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-bold text-emerald-950 text-base mb-1">Thank you! Request Received</h4>
                <p className="text-xs text-emerald-800">
                  Our store representative will contact you via WhatsApp/Phone shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Category of Interest</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Heavy Suits">Heavy Unstitched / Stitched Suits</option>
                    <option value="Sarees">Banarasi & Organza Silk Sarees</option>
                    <option value="Kidswear">Kids Ethnic Wear</option>
                    <option value="Footwear">Men's Handcrafted Juttis & Shoes</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Message / Requirements</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Tell us what suit design, color, or fabric you are looking for..."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" /> Submit Inquiry
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
