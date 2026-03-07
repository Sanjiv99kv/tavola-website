import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Users, Utensils, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/hero-dining.png";
const COCKTAIL_IMG = "/cocktails.png";
const SEAFOOD_IMG = "/seafood.png";

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Utensils, value: "200+", label: "Menu Items" },
  { icon: Heart, value: "4.1", label: "Zomato Rating" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <img src={HERO_IMG} alt="Tavola About" className="w-full h-full object-cover scale-105" />
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
              <span className="font-[Cormorant_Garamond] text-gold/80 text-base tracking-[0.35em] uppercase">Our Story</span>
              <div className="h-px w-12 bg-gold/40" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-[Playfair_Display] text-5xl sm:text-7xl lg:text-8xl font-bold text-white"
            >
              About <span className="text-gold italic">Tavola</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 sm:py-36 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={COCKTAIL_IMG} alt="Tavola bar" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase">
                The Tavola Story
              </span>
              <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory leading-tight">
                Born from a Passion for <span className="text-gold italic">Exceptional Dining</span>
              </h2>
              <p className="font-[Lato] text-ivory/60 text-lg leading-relaxed">
                Tavola, meaning "table" in Italian, was founded with a singular vision: to create a dining destination in Kandivali that rivals the finest restaurants in South Mumbai. We believe that great food, paired with impeccable ambiance and warm hospitality, can transform an ordinary evening into an extraordinary memory.
              </p>
              <p className="font-[Lato] text-ivory/60 text-lg leading-relaxed">
                Our kitchen is helmed by experienced chefs who bring decades of expertise across North Indian, Chinese, Italian, and seafood cuisines. Every dish is prepared with the freshest ingredients, traditional techniques, and a modern sensibility that appeals to the discerning palate.
              </p>
              <p className="font-[Lato] text-ivory/60 text-lg leading-relaxed">
                From the warm glow of our chandeliers to the carefully curated playlist that fills our dining room, every detail at Tavola has been designed to make you feel special. We are not just a restaurant — we are an experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className="text-gold mx-auto mb-4" />
                <p className="font-[Playfair_Display] text-4xl font-bold text-gold">{stat.value}</p>
                <p className="font-[Lato] text-ivory/50 text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 sm:py-36 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase"
          >
            What Drives Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mt-4 mb-16"
          >
            Our <span className="text-gold italic">Philosophy</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Quality First", desc: "We source the finest ingredients and never compromise on quality. From our spices to our produce, everything is handpicked for excellence." },
              { title: "Warm Hospitality", desc: "At Tavola, every guest is family. Our team is trained to anticipate your needs and ensure every visit feels like coming home." },
              { title: "Innovation", desc: "While we honour culinary traditions, we constantly innovate — introducing new dishes, seasonal menus, and creative presentations." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-gold/10 p-8 hover:border-gold/30 transition-colors"
              >
                <h3 className="font-[Playfair_Display] text-xl text-gold font-semibold mb-4">{value.title}</h3>
                <p className="font-[Lato] text-ivory/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080808] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-ivory mb-6">
            Come Experience <span className="text-gold italic">Tavola</span>
          </h2>
          <p className="font-[Lato] text-ivory/60 text-lg mb-8">
            We'd love to welcome you to our table. Reserve your spot today.
          </p>
          <Link href="/reservations">
            <span className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-[#0a0a0a] font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all">
              Make a Reservation <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
