import React, { useState, useEffect } from 'react';
import HeaderBanner from './components/HeaderBanner';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import StoryReels from './components/StoryReels';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import InstagramGrid from './components/InstagramGrid';
import CustomerReviews from './components/CustomerReviews';
import StoreInfoSection from './components/StoreInfoSection';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';
import { MessageCircle, Heart, ShoppingBag, CheckCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  
  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const colorName = product.selectedColor?.name || product.colors?.[0]?.name || 'Standard';
      const sizeName = product.selectedSize || product.sizes?.[0] || 'Standard';

      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && 
                  (item.selectedColor?.name || 'Standard') === colorName && 
                  (item.selectedSize || 'Standard') === sizeName
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { 
          ...product, 
          quantity: 1, 
          selectedColor: product.selectedColor || product.colors?.[0], 
          selectedSize: product.selectedSize || product.sizes?.[0] 
        }];
      }
    });

    showToast(`Added "${product.name}" to your Cart!`);
    if (quickViewProduct) setQuickViewProduct(null);
  };

  const handleUpdateQuantity = (itemToUpdate, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemToUpdate);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item === itemToUpdate ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prev) => prev.filter((item) => item !== itemToRemove));
    showToast("Item removed from cart");
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast("Removed from Wishlist");
        return prev.filter((id) => id !== product.id);
      } else {
        showToast("Saved to Wishlist!");
        return [...prev, product.id];
      }
    });
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToStore = () => {
    const el = document.getElementById('store-location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    scrollToCatalog();
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#faf7f2]">
      
      {/* Toast Popup */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-amber-950 text-amber-100 text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/40 flex items-center gap-2 animate-bounce">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner */}
      <HeaderBanner />

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onScrollToStore={scrollToStore}
      />

      <main className="flex-1">
        {/* Hero Banner Carousel */}
        <HeroCarousel 
          onSelectCategory={handleSelectCategory} 
          onScrollToStore={scrollToStore}
        />

        {/* Instagram Story Highlights */}
        <StoryReels onSelectCategory={handleSelectCategory} />

        {/* Main Product Catalog */}
        <ProductCatalog
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Instagram Grid Feed */}
        <InstagramGrid />

        {/* Customer Testimonials & Reviews */}
        <CustomerReviews />

        {/* Store Location & Inquiry Form */}
        <StoreInfoSection />
      </main>

      {/* Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory} 
        onScrollToStore={scrollToStore}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistItems={wishlistProducts}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={(id) => setWishlistIds((prev) => prev.filter((item) => item !== id))}
      />

      {/* Floating Action WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Khushnuma%20Sales,%20I%20am%20visiting%20your%20website%20and%20want%20to%20inquire!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 border-2 border-white/80"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-bold text-xs pr-1">WhatsApp Us</span>
      </a>

    </div>
  );
}
