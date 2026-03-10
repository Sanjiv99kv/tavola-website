import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, MapPin, Clock, Utensils, ChevronDown, Phone, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMGS = {
  hero: "/tavola-hero-enhanced.png",
  tandooriChicken: "/tandoori-chicken.png",
  chickenBiryani: "/chicken-biryani.png",
  cocktails: "/cocktails.png",
  seafood: "/seafood.png",
  paneerMakhani: "/paneer-makhani.png",
  chickenTikkaMasala: "/chicken-tikka-masala.png",
  dessert: "/dessert.png",
  outdoor: "/tavola-outdoor-enhanced.png",
  ambience: "/tavola-ambience.png",
};

const menuItems = [
  {
    name: "Tandoori Chicken",
    category: "Signature Starter",
    desc: "Whole chicken marinated in vibrant spiced yoghurt, slow-roasted in our clay tandoor for a smoky, char-grilled finish — served with mint chutney and pickled onions.",
    price: "₹325",
    img: IMGS.tandooriChicken,
    badge: "Chef's Pick",
  },
  {
    name: "Chicken Biryani",
    category: "Dum Biryani",
    desc: "Tender chicken pieces layered with fragrant saffron basmati, slow-cooked dum-style in a sealed handi with caramelised onions and whole aromatic spices.",
    price: "₹310",
    img: IMGS.chickenBiryani,
    badge: "Best Seller",
  },
  {
    name: "Tandoori Prawns",
    category: "Premium Seafood",
    desc: "Juicy whole prawns marinated in coastal spices and hung curd, char-grilled in the tandoor and served with a zesty mint chutney.",
    price: "₹675",
    img: IMGS.seafood,
    badge: "Premium",
  },
  {
    name: "Paneer Makhani",
    category: "Veg Main Course",
    desc: "Soft golden paneer cubes in a velvety butter-tomato sauce, slow-simmered with aromatic spices and finished with fresh cream and dried fenugreek.",
    price: "₹245",
    img: IMGS.paneerMakhani,
    badge: "Must Try",
  },
];

const reviews = [
  {
    name: "Priya Mehta",
    role: "Food Blogger",
    text: "The ambiance is absolutely stunning. The kebabs are perfectly spiced — best fine dining experience in Kandivali, hands down.",
    rating: 5,
    avatar: "PM",
  },
  {
    name: "Rahul Sharma",
    role: "Verified Diner",
    text: "Their biryani is out of this world. The sealed handi presentation alone is theatre. Staff is incredibly courteous.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Anita Kapoor",
    role: "Event Planner",
    text: "We hosted our anniversary dinner here and it was magical. The private dining setup was perfect — couldn't ask for more.",
    rating: 5,
    avatar: "AK",
  },
];

const infoItems = [
  { icon: MapPin, text: "Kandivali East, Mumbai" },
  { icon: Clock, text: "12 PM – 1:30 AM Daily" },
  { icon: Utensils, text: "Multi-Cuisine Fine Dining" },
  { icon: Star, text: "4.1★ on Zomato", fill: true },
];

const galleryImages = [
  { src: IMGS.hero, alt: "Tavola main dining hall", className: "col-span-2 row-span-2" },
  { src: IMGS.ambience, alt: "Private celebrations at Tavola" },
  { src: IMGS.outdoor, alt: "Vibrant outdoor seating" },
  { src: IMGS.cocktails, alt: "Signature cocktails" },
  { src: IMGS.paneerMakhani, alt: "Paneer Makhani" },
];

// Subtle parallax hero image
function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  return (
    <motion.div ref={ref} style={{ y }} className="absolute inset-0">
      <img src={IMGS.hero} alt="Tavola fine dining" className="w-full h-full object-cover animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
    </motion.div>
  );
}

// Animated scroll indicator
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
    >
      <span className="font-[Cormorant_Garamond] text-xs text-gold/50 tracking-[0.3em] uppercase">Scroll</span>
      <ChevronDown size={16} className="text-gold/50" />
    </motion.div>
  );
}

// Gold progress line
function ScrollProgressLine() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[2px] bg-gold/10 z-40 hidden lg:block">
      <motion.div style={{ height }} className="w-full bg-gradient-to-b from-gold/20 via-gold to-gold/20" />
    </div>
  );
}

// Review Card
function ReviewCard({ review, i }: { review: typeof reviews[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      className="relative bg-[#111] border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 group"
    >
      <Quote size={32} className="text-gold/15 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, j) => (
          <Star key={j} size={14} className="text-gold fill-gold" />
        ))}
      </div>
      <p className="font-[Cormorant_Garamond] text-ivory/70 text-lg italic leading-relaxed mb-6">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
          <span className="font-[Playfair_Display] text-gold text-xs font-bold">{review.avatar}</span>
        </div>
        <div>
          <p className="font-[Lato] text-ivory text-sm font-semibold tracking-wide">{review.name}</p>
          <p className="font-[Lato] text-ivory/40 text-xs uppercase tracking-widest">{review.role}</p>
        </div>
      </div>
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/20 group-hover:border-gold/50 transition-colors duration-500" />
    </motion.div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = IMGS.hero;
    img.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <ScrollProgressLine />
      <Navbar />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        <ParallaxHero />

        {/* Animated grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: heroLoaded ? 1 : 0, y: heroLoaded ? 0 : -16 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-[Cormorant_Garamond] text-gold/90 text-base sm:text-lg tracking-[0.35em] uppercase">
              Mumbai's Finest
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: heroLoaded ? 1 : 0, y: heroLoaded ? 0 : 36 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="font-[Playfair_Display] text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] tracking-tight"
          >
            Where Every Meal
            <br />
            <span className="text-gold italic drop-shadow-[0_2px_30px_rgba(201,169,110,0.4)]">
              Becomes a Memory
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: heroLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-6 font-[Cormorant_Garamond] text-ivory/60 text-xl sm:text-2xl max-w-2xl leading-relaxed"
          >
            Premium multi-cuisine fine dining — from tandoor kebabs to coastal seafood, handcrafted cocktails, and an unforgettable culinary journey in the heart of Mumbai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroLoaded ? 1 : 0, y: heroLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.18em] text-sm overflow-hidden"
            >
              <span className="relative z-10">Reserve Your Table</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </a>
            <Link href="/menu">
              <span className="px-10 py-4 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-gold/10 hover:border-gold/70 transition-all duration-300 inline-block">
                Explore Menu
              </span>
            </Link>
          </motion.div>

          {/* Rating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 flex gap-6"
          >
            <div className="flex flex-col items-center">
              <span className="font-[Playfair_Display] text-2xl font-bold text-gold">4.4★</span>
              <span className="font-[Lato] text-ivory/40 text-xs tracking-widest uppercase">Dining</span>
            </div>
            <div className="w-px bg-gold/20" />
            <div className="flex flex-col items-center">
              <span className="font-[Playfair_Display] text-2xl font-bold text-gold">4.1★</span>
              <span className="font-[Lato] text-ivory/40 text-xs tracking-widest uppercase">Delivery</span>
            </div>
            <div className="w-px bg-gold/20" />
            <div className="flex flex-col items-center">
              <span className="font-[Playfair_Display] text-2xl font-bold text-gold">1000+</span>
              <span className="font-[Lato] text-ivory/40 text-xs tracking-widest uppercase">Reviews</span>
            </div>
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── INFO STRIP ───────────────────────── */}
      <section className="bg-[#0f0f0f] border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap items-center justify-center gap-6 sm:gap-16">
          {infoItems.map(({ icon: Icon, text, fill }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2.5 text-ivory/50"
            >
              <Icon size={16} className={`text-gold ${fill ? "fill-gold" : ""}`} />
              <span className="font-[Lato] text-sm tracking-wide">{text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────── */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              className="space-y-7"
            >
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-gold/50" />
                <span className="font-[Cormorant_Garamond] text-gold/70 text-base tracking-[0.25em] uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-[1.1]">
                A Legacy of<br />
                <span className="text-gold italic">Culinary Excellence</span>
              </h2>
              <p className="font-[Lato] text-ivory/55 text-lg leading-relaxed">
                Tavola has been a cornerstone of fine dining in Kandivali, offering an unparalleled culinary experience that blends the rich traditions of North Indian, Chinese, seafood, and continental cuisines. Our chefs craft each dish with passion, using only the freshest ingredients and time-honoured techniques.
              </p>
              <p className="font-[Lato] text-ivory/55 text-lg leading-relaxed">
                Step into our elegantly designed space — where warm chandelier lighting, plush seating, and impeccable service create the perfect setting for celebrations, intimate dinners, and memorable gatherings.
              </p>

              {/* Stats */}
              <div className="flex gap-10 pt-4">
                {[["10+", "Years"], ["50+", "Dishes"], ["1000+", "Happy Guests"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="font-[Playfair_Display] text-3xl font-bold text-gold">{num}</p>
                    <p className="font-[Lato] text-ivory/40 text-xs uppercase tracking-widest mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <span className="inline-flex items-center gap-2 font-[Cormorant_Garamond] text-gold text-xl uppercase tracking-[0.18em] hover:gap-4 transition-all duration-300 group mt-2">
                  Discover Our Story
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMGS.cocktails}
                  alt="Signature cocktails at Tavola"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[800ms]"
                />
              </div>
              {/* Gold accent box */}
              <div className="absolute -bottom-8 -left-8 bg-gold p-7 sm:p-9 shadow-2xl">
                <p className="font-[Playfair_Display] text-[#0a0a0a] text-4xl font-bold">₹1400</p>
                <p className="font-[Lato] text-[#0a0a0a]/75 text-xs uppercase tracking-wider mt-1">Cost for Two</p>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MENU HIGHLIGHTS ──────────────────── */}
      <section className="py-28 sm:py-36 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="h-px w-16 bg-gold/30" />
              <span className="font-[Cormorant_Garamond] text-gold/60 text-base tracking-[0.3em] uppercase">
                Our Specialities
              </span>
              <div className="h-px w-16 bg-gold/30" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory"
            >
              Culinary <span className="text-gold italic">Masterpieces</span>
            </motion.h2>
          </div>

          {/* Menu Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="group bg-[#0f0f0f] border border-gold/10 hover:border-gold/30 overflow-hidden hover:shadow-[0_0_40px_rgba(201,169,110,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gold text-[#0a0a0a] font-[Lato] text-xs font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6">
                  <p className="font-[Cormorant_Garamond] text-gold/60 text-sm uppercase tracking-[0.2em] mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-[Playfair_Display] text-xl text-ivory font-semibold mb-3 leading-tight">
                    {item.name}
                  </h3>
                  <p className="font-[Lato] text-ivory/45 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-[Playfair_Display] text-gold text-xl font-bold">{item.price}</span>
                    <span className="font-[Lato] text-ivory/30 text-xs uppercase tracking-wider">onwards</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link href="/menu">
              <span className="inline-flex items-center gap-3 px-12 py-4 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-gold/10 hover:border-gold/70 transition-all duration-300 group">
                View Full Menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOD SHOWCASE BANNER ─────────────── */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={IMGS.chickenBiryani}
          alt="Tavola signature biryani"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold/50" />
                <span className="font-[Cormorant_Garamond] text-gold/80 text-base tracking-[0.3em] uppercase">
                  A Feast for the Senses
                </span>
              </div>
              <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
                Crafted with<br />
                <span className="text-gold italic">Passion & Precision</span>
              </h2>
              <p className="font-[Lato] text-ivory/65 text-lg leading-relaxed mb-10">
                From the smoky depths of our tandoor to the hand-sealed biryani handi — every dish at Tavola tells a story of culinary mastery. Ingredients sourced fresh daily. Flavours engineered for memory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.18em] text-sm hover:bg-gold-light transition-all duration-300 text-center"
                >
                  Book Your Experience
                </a>
                <a
                  href="tel:+919930969640"
                  className="px-10 py-4 border border-white/20 text-white font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={14} /> Call to Reserve
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ───────────────────── */}
      <section className="py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="h-px w-16 bg-gold/30" />
              <span className="font-[Cormorant_Garamond] text-gold/60 text-base tracking-[0.3em] uppercase">
                Visual Journey
              </span>
              <div className="h-px w-16 bg-gold/30" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory"
            >
              Step Inside <span className="text-gold italic">Tavola</span>
            </motion.h2>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`overflow-hidden group relative cursor-pointer ${img.className || ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="font-[Cormorant_Garamond] text-white text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/gallery">
              <span className="inline-flex items-center gap-2 font-[Cormorant_Garamond] text-gold text-xl uppercase tracking-[0.18em] hover:gap-4 transition-all duration-300 group">
                View Full Gallery
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="h-px w-16 bg-gold/30" />
              <span className="font-[Cormorant_Garamond] text-gold/60 text-base tracking-[0.3em] uppercase">
                Guest Reviews
              </span>
              <div className="h-px w-16 bg-gold/30" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory"
            >
              What Our Guests <span className="text-gold italic">Say</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} i={i} />
            ))}
          </div>

          {/* Zomato CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <a
              href="https://www.zomato.com/mumbai/tavola-kandivali-east"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-[Lato] text-ivory/40 text-sm tracking-wider hover:text-gold transition-colors"
            >
              <Star size={14} className="text-gold fill-gold" />
              See all 304 dining reviews on Zomato
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────── */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.outdoor} alt="Tavola outdoor dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          {/* Gold vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/30" />
              <span className="font-[Cormorant_Garamond] text-gold/60 text-base tracking-[0.3em] uppercase">
                Reservations
              </span>
              <div className="h-px w-16 bg-gold/30" />
            </div>
            <h2 className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Table <span className="text-gold italic">Awaits</span>
            </h2>
            <p className="font-[Cormorant_Garamond] text-ivory/65 text-2xl mt-4 max-w-2xl mx-auto leading-relaxed mb-10">
              Whether it's a romantic dinner, a family celebration, or a grand corporate gathering — Tavola is the perfect setting for your next unforgettable evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.18em] text-sm hover:bg-gold-light transition-all duration-300"
              >
                Reserve via WhatsApp
              </a>
              <a
                href="tel:+919930969640"
                className="px-12 py-5 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.18em] text-sm hover:bg-gold/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                Call +91 99309 69640
              </a>
            </div>

            {/* Hours quick info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <div>
                <p className="font-[Lato] text-ivory/30 text-xs uppercase tracking-widest mb-1">Open Daily</p>
                <p className="font-[Cormorant_Garamond] text-ivory/70 text-lg">12:00 PM – 1:30 AM</p>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden sm:block" />
              <div>
                <p className="font-[Lato] text-ivory/30 text-xs uppercase tracking-widest mb-1">Every Day</p>
                <p className="font-[Cormorant_Garamond] text-ivory/70 text-lg">Mon – Sun</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION MAP ─────────────────────── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold/50" />
                <span className="font-[Cormorant_Garamond] text-gold/60 text-base tracking-[0.25em] uppercase">
                  Find Us
                </span>
              </div>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mb-6">
                Visit <span className="text-gold italic">Tavola</span>
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="font-[Lato] text-ivory/70 leading-relaxed">
                      Gokul Nagari 2 CHS, B Wing, Thakur Village,<br />
                      Near Sai Star Hathway Cable, Western Express Highway,<br />
                      Kandivali East, Mumbai – 400101
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock size={18} className="text-gold shrink-0" />
                  <p className="font-[Lato] text-ivory/70">Mon–Sun: 12:00 PM – 1:30 AM</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-gold shrink-0" />
                  <a href="tel:+919930969640" className="font-[Lato] text-ivory/70 hover:text-gold transition-colors">
                    +91 99309 69640
                  </a>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://maps.google.com/?q=Gokul+Nagari+2+CHS+Thakur+Village+Kandivali+East+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.15em] text-xs hover:bg-gold-light transition-all"
                >
                  Get Directions
                </a>
                <a
                  href="https://wa.me/919930969640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.15em] text-xs hover:bg-gold/10 transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[360px] sm:h-[440px] overflow-hidden border border-gold/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.548!2d72.8682824!3d19.2149134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73804160b1b%3A0x1b7e1e62f5a34f0e!2sTAVOLA+FINE+DINE%2CBAR+%2C+DIESEL+CAFE!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) hue-rotate(180deg) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tavola Location"
              />
              {/* Pin overlay */}
              <div className="absolute inset-0 pointer-events-none border-2 border-gold/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
