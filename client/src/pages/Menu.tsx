import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FOOD_IMG = "/kebab.png";
const HERO_IMG = "/hero-dining.png";

type MenuItem = { name: string; desc: string; price: string; veg?: boolean };
type MenuCategory = { category: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    category: "Starters",
    items: [
      { name: "Paneer Tikka", desc: "Marinated cottage cheese grilled in tandoor with bell peppers", price: "₹320", veg: true },
      { name: "Chicken Malai Tikka", desc: "Creamy chicken pieces marinated in cheese and cream", price: "₹380" },
      { name: "Mutton Seekh Kebab", desc: "Hand-minced mutton kebabs with aromatic spices", price: "₹420" },
      { name: "Fish Amritsari", desc: "Crispy battered fish fillets with tangy chutney", price: "₹390" },
      { name: "Hara Bhara Kebab", desc: "Spinach and green pea patties with mint chutney", price: "₹280", veg: true },
      { name: "Prawn Koliwada", desc: "Mumbai-style spiced prawns, deep fried to golden", price: "₹450" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { name: "Butter Chicken", desc: "Iconic creamy tomato curry with tender chicken", price: "₹420" },
      { name: "Dal Makhani", desc: "Slow-cooked black lentils in rich buttery gravy", price: "₹320", veg: true },
      { name: "Mutton Rogan Josh", desc: "Kashmiri-style lamb curry with aromatic spices", price: "₹480" },
      { name: "Paneer Lababdar", desc: "Cottage cheese in a rich, creamy tomato-based gravy", price: "₹360", veg: true },
      { name: "Chicken Biryani", desc: "Fragrant basmati rice layered with spiced chicken", price: "₹400" },
      { name: "Veg Biryani", desc: "Aromatic rice with seasonal vegetables and saffron", price: "₹320", veg: true },
    ],
  },
  {
    category: "Chinese & Indo-Chinese",
    items: [
      { name: "Chicken Manchurian", desc: "Crispy chicken in tangy Manchurian sauce", price: "₹360" },
      { name: "Veg Hakka Noodles", desc: "Stir-fried noodles with fresh vegetables", price: "₹280", veg: true },
      { name: "Schezwan Fried Rice", desc: "Spicy fried rice with Schezwan pepper sauce", price: "₹300" },
      { name: "Chilli Paneer", desc: "Crispy paneer tossed in spicy chilli sauce", price: "₹320", veg: true },
      { name: "Dragon Chicken", desc: "Crispy chicken in fiery dragon sauce", price: "₹380" },
    ],
  },
  {
    category: "Italian",
    items: [
      { name: "Margherita Pizza", desc: "Classic pizza with fresh mozzarella and basil", price: "₹350", veg: true },
      { name: "Penne Arrabiata", desc: "Penne pasta in spicy tomato sauce", price: "₹320", veg: true },
      { name: "Chicken Alfredo Pasta", desc: "Creamy white sauce pasta with grilled chicken", price: "₹380" },
      { name: "Garlic Bread with Cheese", desc: "Toasted bread with garlic butter and mozzarella", price: "₹220", veg: true },
    ],
  },
  {
    category: "Breads & Rice",
    items: [
      { name: "Butter Naan", desc: "Soft leavened bread brushed with butter", price: "₹80", veg: true },
      { name: "Garlic Naan", desc: "Naan topped with fresh garlic and coriander", price: "₹90", veg: true },
      { name: "Laccha Paratha", desc: "Flaky layered whole wheat bread", price: "₹80", veg: true },
      { name: "Jeera Rice", desc: "Fragrant basmati rice tempered with cumin", price: "₹180", veg: true },
      { name: "Steamed Rice", desc: "Plain steamed basmati rice", price: "₹150", veg: true },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", desc: "Soft milk dumplings in rose-scented sugar syrup", price: "₹180", veg: true },
      { name: "Brownie with Ice Cream", desc: "Warm chocolate brownie with vanilla ice cream", price: "₹250", veg: true },
      { name: "Rasmalai", desc: "Soft paneer discs in saffron-flavoured milk", price: "₹200", veg: true },
      { name: "Tiramisu", desc: "Classic Italian coffee-flavoured layered dessert", price: "₹280", veg: true },
    ],
  },
  {
    category: "Beverages & Cocktails",
    items: [
      { name: "Fresh Lime Soda", desc: "Refreshing lime with soda, sweet or salted", price: "₹120", veg: true },
      { name: "Mango Lassi", desc: "Creamy yogurt drink with Alphonso mango", price: "₹160", veg: true },
      { name: "Tavola Signature Mojito", desc: "House special mojito with fresh mint and lime", price: "₹220", veg: true },
      { name: "Classic Old Fashioned", desc: "Bourbon, bitters, sugar, and orange peel", price: "₹450" },
      { name: "Espresso Martini", desc: "Vodka, coffee liqueur, and fresh espresso", price: "₹480" },
    ],
  },
];

const categories = menuData.map((c) => c.category);

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  const activeMenu = menuData.find((c) => c.category === active);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={FOOD_IMG} alt="Tavola Menu" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-[Cormorant_Garamond] text-gold/80 text-base tracking-[0.35em] uppercase">Curated for You</span>
              <div className="h-px w-12 bg-gold/40" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-[Playfair_Display] text-5xl sm:text-7xl lg:text-8xl font-bold text-white"
            >
              Our <span className="text-gold italic">Menu</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 font-[Lato] text-xs uppercase tracking-[0.2em] transition-all duration-300 border ${active === cat
                    ? "bg-gold text-[#0a0a0a] border-gold font-bold"
                    : "border-gold/20 text-ivory/50 hover:border-gold/50 hover:text-gold"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-ivory text-center mb-12">
                {active}
              </h2>
              <div className="grid gap-6 max-w-4xl mx-auto">
                {activeMenu?.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-start justify-between gap-4 py-6 border-b border-gold/10 hover:border-gold/30 transition-all duration-300 hover:pl-2"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-[Playfair_Display] text-xl text-ivory group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        {item.veg && (
                          <span className="w-4 h-4 border border-green-500 flex items-center justify-center shrink-0">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                          </span>
                        )}
                        {!item.veg && (
                          <span className="w-4 h-4 border border-red-500 flex items-center justify-center shrink-0">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                          </span>
                        )}
                      </div>
                      <p className="font-[Lato] text-ivory/40 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="font-[Playfair_Display] text-gold text-2xl font-bold shrink-0 ml-4">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Note */}
          <div className="text-center mt-16">
            <p className="font-[Lato] text-ivory/40 text-sm">
              Prices are indicative and subject to applicable taxes. Menu items may vary seasonally.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.18em] text-sm hover:bg-gold-light transition-all"
              >
                Order via WhatsApp
              </a>
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-gold/10 transition-all"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
