import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Users, Utensils, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-1_1772035144000_na1fn_dGF2b2xhLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTFfMTc3MjAzNTE0NDAwMF9uYTFmbl9kR0YyYjJ4aExXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zas9Ak3d9phQJDlDk8mTOFQYANuX1kAyf9T981vwTtUW-VY9O6FARbAnQUnsQD4RK0e1RgASF69IoOyXd5DI7zVcoMcdF6EKgy8A4-14o4DWbP-gUBz-GgStXJGROyOFDk9yTH4AUGeKiDyR5q1UbTmunseR~uFZaLrpqSlVyAESEC1ecMjmgCnJHbx61nspupZ8fu2NEIlby-jO~jwzR66rB~zA3ZQ~Ufe6U~Ga3Yt9HwHHIjW-I8J5vNDOLzD75NkMfA26JcwVJw6V0webI1Irr-TSuXnyMpVijlmuNfo3qYXM1o7b2dWYfc0zHqFXNF7ngb71t2u9dlbt5JiWbA__";
const COCKTAIL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-5_1772035136000_na1fn_dGF2b2xhLWNvY2t0YWls.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTVfMTc3MjAzNTEzNjAwMF9uYTFmbl9kR0YyYjJ4aExXTnZZMnQwWVdscy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N7L6AHGRpIW1FpxY61sRHQ0m30rVQmg-ex2IetHfgIFpLnomrAS3HEoIPmJHJuVnI7d1HlBqbvRMaD5Jw3L3eYRQ1vs~zT6v7gik-5McO0ve2k4Jye0-SKZy65P4DJ8-nD~l0Wu7GAPEtvtnWGQCtRFU13GqPodQYynJqzx~UF6paM8fyCVahgEHTeiG9oZmDsntnEbuN1ySTt6u2Lk74aKQFyRHavrKHbTmbVXM8PArz7zN5dZKbCmiW33LtyXsUlkJlqjauCCeSMxSI9-k9OMfk9xHtDrezO5Aw4r-othl0TZz-dLhzdPC6Q33HUD8LypajcL~iWLkBWELl91Eng__";

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Utensils, value: "200+", label: "Menu Items" },
  { icon: Heart, value: "4.1", label: "Zomato Rating" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={HERO_IMG} alt="Tavola About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              About <span className="text-gold italic">Tavola</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
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
      <section className="py-20 bg-charcoal-light">
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
      <section className="py-24 sm:py-32">
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
      <section className="py-20 bg-charcoal-light text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-ivory mb-6">
            Come Experience <span className="text-gold italic">Tavola</span>
          </h2>
          <p className="font-[Lato] text-ivory/60 text-lg mb-8">
            We'd love to welcome you to our table. Reserve your spot today.
          </p>
          <Link href="/reservations">
            <span className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all">
              Make a Reservation <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
