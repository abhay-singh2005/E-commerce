export const PRODUCTS = [
  {
    id: "kh-001",
    name: "Royal Crimson Zari Embroidered Silk Suit",
    category: "Heavy Suits",
    subCategory: "Unstitched Heavy Suit",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 42,
    tag: "Bestseller",
    isNew: true,
    inStock: true,
    fabric: "Pure Chanderi Silk",
    work: "Intricate Hand Zari & Sequins Work",
    dupatta: "Organza Floral Embroidered Dupatta",
    colors: [
      { name: "Royal Crimson", hex: "#8B0002", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" },
      { name: "Emerald Green", hex: "#046307", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" },
      { name: "Mustard Gold", hex: "#D4AF37", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["Unstitched (Up to 48 Bust)", "Custom Stitch Available"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Exquisite unstitched heavy suit set crafted in premium Chanderi Silk featuring detailed Zari threadwork. Ideal for weddings, Rakhi, and festive occasions."
  },
  {
    id: "kh-002",
    name: "Kanjivaram Style Banarasi Silk Saree",
    category: "Sarees",
    subCategory: "Festive Saree",
    price: 4299,
    originalPrice: 6500,
    rating: 5.0,
    reviewsCount: 58,
    tag: "Trending",
    isNew: true,
    inStock: true,
    fabric: "Soft Banarasi Silk",
    work: "Woven Golden Zari Motifs & Heavy Pallu",
    blouse: "Includes Unstitched Matching Blouse Piece",
    colors: [
      { name: "Magenta Pink & Gold", hex: "#C71585", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" },
      { name: "Peacock Blue", hex: "#005F73", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["Free Size (6.3 Meters with Blouse)"],
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Timeless woven Banarasi silk saree designed to shine at family celebrations. Features rich luster, fluid drape, and traditional zari border."
  },
  {
    id: "kh-003",
    name: "Pastel Mint Mirror Work Anarkali Suit",
    category: "Heavy Suits",
    subCategory: "Stitched Anarkali",
    price: 2999,
    originalPrice: 4299,
    rating: 4.8,
    reviewsCount: 31,
    tag: "Limited Stock",
    isNew: false,
    inStock: true,
    fabric: "Georgette with Cotton Lining",
    work: "Foil Mirror Embroidery & Gota Patti Accent",
    dupatta: "Net Dupatta with Lace Border",
    colors: [
      { name: "Mint Green", hex: "#98FF98", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" },
      { name: "Blush Pink", hex: "#FFB6C1", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["M (38)", "L (40)", "XL (42)", "XXL (44)"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Graceful 56-inch flair Anarkali suit studded with mirror embroidery. Comfortable breathable lining perfect for day functions."
  },
  {
    id: "kh-004",
    name: "Little Princess Designer Lehenga Set",
    category: "Kidswear",
    subCategory: "Girls Ethnic Wear",
    price: 1899,
    originalPrice: 2799,
    rating: 4.9,
    reviewsCount: 24,
    tag: "Kid's Favorite",
    isNew: true,
    inStock: true,
    fabric: "Soft Jacquard & Net",
    work: "Golden Thread Border & Tassels",
    colors: [
      { name: "Bright Yellow & Pink", hex: "#FFD700", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["2-3 Yrs", "4-5 Yrs", "6-7 Yrs", "8-9 Yrs", "10-12 Yrs"],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Vibrant ethnic lehenga choli for young girls with gentle inner lining so kids can move and dance comfortably."
  },
  {
    id: "kh-005",
    name: "Royal Heritage Men's Embroidered Mojaris / Jutti",
    category: "Footwear",
    subCategory: "Men's Footwear",
    price: 1499,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 19,
    tag: "Festive Must",
    isNew: false,
    inStock: true,
    fabric: "Genuine Handcrafted Leather & Velvet",
    work: "Hand Embroidered Dabka & Zardozi",
    colors: [
      { name: "Velvet Black Gold", hex: "#111111", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80" },
      { name: "Antique Tan", hex: "#D2B48C", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Premium handcrafted men's traditional juttis with cushioned insoles for all-day wedding & festival comfort."
  },
  {
    id: "kh-006",
    name: "Organza Silk Floral Handprinted Saree",
    category: "Sarees",
    subCategory: "Party Wear Saree",
    price: 2799,
    originalPrice: 3800,
    rating: 4.9,
    reviewsCount: 37,
    tag: "Instagram Favorite",
    isNew: true,
    inStock: true,
    fabric: "Pure Sheer Organza Silk",
    work: "Handprinted Florals & Cutwork Scallop Border",
    colors: [
      { name: "Lavender Peach", hex: "#E6E6FA", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["Free Size"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Lightweight, airy organza saree with charming pastel floral prints and delicate hand-cut scalloped lace details."
  },
  {
    id: "kh-007",
    name: "Heavy Cotton Chikankari Kurta Pant Set",
    category: "Heavy Suits",
    subCategory: "Cotton Suit",
    price: 2199,
    originalPrice: 3100,
    rating: 4.8,
    reviewsCount: 29,
    tag: "Summer Special",
    isNew: false,
    inStock: true,
    fabric: "100% Breathable Cotton",
    work: "Lucknowi Bakhiya Chikankari",
    colors: [
      { name: "Pure White", hex: "#FFFFFF", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80" },
      { name: "Powder Blue", hex: "#B0E0E6", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["S (36)", "M (38)", "L (40)", "XL (42)", "XXL (44)"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Authentic Lucknowi style hand Chikankari embroidered suit set paired with cigarette pants and chiffon dupatta."
  },
  {
    id: "kh-008",
    name: "Boys Royal Sherwani Style Kurta Pyjama",
    category: "Kidswear",
    subCategory: "Boys Festive",
    price: 1699,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 16,
    tag: "New Arrival",
    isNew: true,
    inStock: true,
    fabric: "Silk Blend Jacquard",
    work: "Mandarin Collar & Button Accent",
    colors: [
      { name: "Maroon & Cream", hex: "#800000", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80" }
    ],
    sizes: ["3-4 Yrs", "5-6 Yrs", "7-8 Yrs", "9-10 Yrs"],
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Dapper traditional festive outfit for young boys with comfortable elasticated pyjama and soft interior texture."
  }
];

export const CATEGORIES = [
  "All Collections",
  "Heavy Suits",
  "Sarees",
  "Kidswear",
  "Footwear"
];

export const HIGHLIGHT_REELS = [
  { id: "r-1", title: "Heavy Suits", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80", count: "120+ Items" },
  { id: "r-2", title: "Silk Sarees", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80", count: "85+ Items" },
  { id: "r-3", title: "Rakhi Special", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80", count: "New Drops" },
  { id: "r-4", title: "Kidswear", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80", count: "Kids Ethnic" },
  { id: "r-5", title: "Men's Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80", count: "Juttis & Shoes" },
  { id: "r-6", title: "Happy Clients", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", count: "500+ Reviews" }
];
