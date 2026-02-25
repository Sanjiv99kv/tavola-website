import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FOOD_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-2_1772035143000_na1fn_dGF2b2xhLWZvb2QtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTJfMTc3MjAzNTE0MzAwMF9uYTFmbl9kR0YyYjJ4aExXWnZiMlF0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GMdnPosghHus9voX7BIrTlrR-En08XiQeIicFsJRg8SNF5o7SYmi58dw5b7DU5R6SB7~rxiKaQCr2gqJAmwemj5nijFD5sIBAtQHtcT6AX86aqs4ucnaEEct-YTs25ae77hmjtIlQd0wj~iAeSGWRcDdqDaCF2323zr2qULcA4AjE4lqqW6OPBijAqMykfgEMd2iymDNxlyGkK933WcMNAVf5Q6MWtUQroZZJ6o3HSf8DktgsZPmcujiygx8PONmUsIEopWk5mkCjOInX~xJbtB~vIZLybqN2JnieyHNJUoU-N3CqViBCHnDqmc2wb41jfCpPFIGo9pc0xDgD0pr2w__";

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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={FOOD_IMG} alt="Tavola Menu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Curated for You
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Our <span className="text-gold italic">Menu</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 font-[Cormorant_Garamond] text-sm uppercase tracking-[0.15em] transition-all duration-300 border ${
                  active === cat
                    ? "bg-gold text-charcoal border-gold"
                    : "border-gold/20 text-ivory/60 hover:border-gold/50 hover:text-gold"
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
                    className="group flex items-start justify-between gap-4 py-5 border-b border-gold/10 hover:border-gold/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-[Playfair_Display] text-lg text-ivory group-hover:text-gold transition-colors">
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
                      <p className="font-[Lato] text-ivory/40 text-sm mt-1">{item.desc}</p>
                    </div>
                    <span className="font-[Cormorant_Garamond] text-gold text-xl font-semibold shrink-0">
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
            <div className="mt-8">
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
