import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMGS = {
  hero: "/hero-dining.png",
  kebab: "/kebab.png",
  biryani: "/biryani.png",
  cocktails: "/cocktails.png",
  seafood: "/seafood.png",
  paneer: "/paneer.png",
  dessert: "/dessert.png",
  outdoor: "/outdoor.png",
};

type Category = "All" | "Food" | "Ambiance" | "Bar";

const allImages: { src: string; alt: string; category: Category; span?: string }[] = [
  { src: IMGS.hero, alt: "Tavola grand dining hall", category: "Ambiance", span: "col-span-2 row-span-2" },
  { src: IMGS.kebab, alt: "Murgh Rozali Kebab Platter", category: "Food" },
  { src: IMGS.cocktails, alt: "Signature Bar Cocktails", category: "Bar", span: "row-span-2" },
  { src: IMGS.biryani, alt: "Royal Dum Biryani", category: "Food", span: "col-span-2" },
  { src: IMGS.seafood, alt: "Coastal Seafood Platter", category: "Food" },
  { src: IMGS.paneer, alt: "Paneer Makhani in Copper Handi", category: "Food" },
  { src: IMGS.outdoor, alt: "Vibrant Outdoor Seating", category: "Ambiance", span: "col-span-2" },
  { src: IMGS.dessert, alt: "Gulab Jamun Dessert", category: "Food" },
];

const categories: Category[] = ["All", "Food", "Ambiance", "Bar"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? allImages : allImages.filter((img) => img.category === active);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={IMGS.hero} alt="Gallery" className="w-full h-full object-cover scale-105" />
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
              <span className="font-[Cormorant_Garamond] text-gold/80 text-base tracking-[0.35em] uppercase">
                Visual Journey
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-[Playfair_Display] text-5xl sm:text-7xl lg:text-8xl font-bold text-white"
            >
              Our <span className="text-gold italic">Gallery</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-[#0a0a0a] sticky top-20 z-30 border-b border-gold/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-3 sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 font-[Lato] text-xs uppercase tracking-[0.2em] transition-all duration-300 ${active === cat
                  ? "text-[#0a0a0a] bg-gold"
                  : "text-ivory/50 border border-gold/20 hover:border-gold/50 hover:text-gold"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[240px]">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`overflow-hidden group relative cursor-pointer ${img.span || ""}`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                  <p className="font-[Cormorant_Garamond] text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {img.alt}
                  </p>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-gold/90 text-[#0a0a0a] font-[Lato] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.category}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-[Cormorant_Garamond] text-ivory/40 text-lg italic mb-6">
              Follow us on Instagram for daily updates
            </p>
            <a
              href="https://instagram.com/tavolafinedine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 border border-gold/30 text-gold font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              @tavolafinedine
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Gallery zoom"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-ivory/60 hover:text-gold transition-colors font-[Lato] text-sm uppercase tracking-wider"
          >
            Close ✕
          </button>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
