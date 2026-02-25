import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, MapPin, Clock, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-1_1772035144000_na1fn_dGF2b2xhLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTFfMTc3MjAzNTE0NDAwMF9uYTFmbl9kR0YyYjJ4aExXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zas9Ak3d9phQJDlDk8mTOFQYANuX1kAyf9T981vwTtUW-VY9O6FARbAnQUnsQD4RK0e1RgASF69IoOyXd5DI7zVcoMcdF6EKgy8A4-14o4DWbP-gUBz-GgStXJGROyOFDk9yTH4AUGeKiDyR5q1UbTmunseR~uFZaLrpqSlVyAESEC1ecMjmgCnJHbx61nspupZ8fu2NEIlby-jO~jwzR66rB~zA3ZQ~Ufe6U~Ga3Yt9HwHHIjW-I8J5vNDOLzD75NkMfA26JcwVJw6V0webI1Irr-TSuXnyMpVijlmuNfo3qYXM1o7b2dWYfc0zHqFXNF7ngb71t2u9dlbt5JiWbA__";
const FOOD_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-2_1772035143000_na1fn_dGF2b2xhLWZvb2QtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTJfMTc3MjAzNTE0MzAwMF9uYTFmbl9kR0YyYjJ4aExXWnZiMlF0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GMdnPosghHus9voX7BIrTlrR-En08XiQeIicFsJRg8SNF5o7SYmi58dw5b7DU5R6SB7~rxiKaQCr2gqJAmwemj5nijFD5sIBAtQHtcT6AX86aqs4ucnaEEct-YTs25ae77hmjtIlQd0wj~iAeSGWRcDdqDaCF2323zr2qULcA4AjE4lqqW6OPBijAqMykfgEMd2iymDNxlyGkK933WcMNAVf5Q6MWtUQroZZJ6o3HSf8DktgsZPmcujiygx8PONmUsIEopWk5mkCjOInX~xJbtB~vIZLybqN2JnieyHNJUoU-N3CqViBCHnDqmc2wb41jfCpPFIGo9pc0xDgD0pr2w__";
const INTERIOR_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-3_1772035128000_na1fn_dGF2b2xhLWludGVyaW9yLWdhbGxlcnk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTNfMTc3MjAzNTEyODAwMF9uYTFmbl9kR0YyYjJ4aExXbHVkR1Z5YVc5eUxXZGhiR3hsY25rLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D4a3o~ar62~81KEpIV-KBQBqBpkJQhkPlOtKqG-e-b516OnJ1vzxZJZYTAblprgF9Q8KZW~NoBsxf7wZNfYfLbbgLGHqWmrSxM65nKcQCddajUJ4tb9RRPQAkLogGFYQtLC~-UAaO3GGTD04HCpMwnKnxup8yvQmD6JY4ezRp8~SQh8fMD2VzBZ4W3yzQ8AQO-5NsjtYXMPyg1Pz~2ERtRGnGnybkHc5DkEVqf6CNnghIzasYmxCpRFCp5XlOawy1lSi3SBwZBGerUNYAujGDj4ubmMNVgodpx4lDumlHc-3g2uc-Yo8Fan81lIv1rX2sKYRoxrIjmGEbv6id91TcA__";
const COCKTAIL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-5_1772035136000_na1fn_dGF2b2xhLWNvY2t0YWls.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTVfMTc3MjAzNTEzNjAwMF9uYTFmbl9kR0YyYjJ4aExXTnZZMnQwWVdscy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N7L6AHGRpIW1FpxY61sRHQ0m30rVQmg-ex2IetHfgIFpLnomrAS3HEoIPmJHJuVnI7d1HlBqbvRMaD5Jw3L3eYRQ1vs~zT6v7gik-5McO0ve2k4Jye0-SKZy65P4DJ8-nD~l0Wu7GAPEtvtnWGQCtRFU13GqPodQYynJqzx~UF6paM8fyCVahgEHTeiG9oZmDsntnEbuN1ySTt6u2Lk74aKQFyRHavrKHbTmbVXM8PArz7zN5dZKbCmiW33LtyXsUlkJlqjauCCeSMxSI9-k9OMfk9xHtDrezO5Aw4r-othl0TZz-dLhzdPC6Q33HUD8LypajcL~iWLkBWELl91Eng__";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8 },
  }),
};

const menuHighlights = [
  { name: "Signature Kebabs", desc: "Succulent tandoori preparations with hand-ground spices", icon: "🔥" },
  { name: "Royal Biryani", desc: "Slow-cooked dum biryani with saffron and premium basmati", icon: "🍚" },
  { name: "Artisan Cocktails", desc: "Handcrafted cocktails by our expert mixologists", icon: "🍸" },
  { name: "Fresh Seafood", desc: "Daily catch prepared with coastal flavours and finesse", icon: "🦐" },
];

const testimonials = [
  { name: "Priya M.", text: "The ambiance is absolutely stunning. Best fine dining experience in Kandivali, hands down.", rating: 5 },
  { name: "Rahul S.", text: "Their kebabs are out of this world. The staff is incredibly courteous and the decor is top-notch.", rating: 5 },
  { name: "Anita K.", text: "We hosted our anniversary dinner here and it was magical. The private dining setup was perfect.", rating: 5 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Tavola Fine Dining Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="font-[Cormorant_Garamond] text-gold/80 text-lg sm:text-xl tracking-[0.3em] uppercase">
              Kandivali's Finest
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-[Playfair_Display] text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            Where Every Meal<br />
            <span className="text-gold italic">Becomes a Memory</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 font-[Lato] text-ivory/70 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Premium multi-cuisine fine dining with exquisite ambiance, handcrafted cocktails, and an unforgettable culinary journey in the heart of Mumbai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all duration-300"
            >
              Reserve Your Table
            </a>
            <Link href="/menu">
              <span className="px-10 py-4 border border-gold/50 text-gold font-[Lato] uppercase tracking-[0.15em] text-sm hover:bg-gold/10 transition-all duration-300 inline-block">
                Explore Menu
              </span>
            </Link>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Info Strip */}
      <section className="bg-charcoal-light border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-3 text-ivory/60">
            <MapPin size={18} className="text-gold" />
            <span className="font-[Lato] text-sm tracking-wide">Kandivali East, Mumbai</span>
          </div>
          <div className="flex items-center gap-3 text-ivory/60">
            <Clock size={18} className="text-gold" />
            <span className="font-[Lato] text-sm tracking-wide">12 PM – 1:30 AM Daily</span>
          </div>
          <div className="flex items-center gap-3 text-ivory/60">
            <Utensils size={18} className="text-gold" />
            <span className="font-[Lato] text-sm tracking-wide">Multi-Cuisine Fine Dining</span>
          </div>
          <div className="flex items-center gap-2 text-ivory/60">
            <Star size={18} className="text-gold fill-gold" />
            <span className="font-[Lato] text-sm tracking-wide">4.1 on Zomato</span>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.span
                custom={0}
                variants={fadeUp}
                className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase"
              >
                Our Story
              </motion.span>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory leading-tight"
              >
                A Legacy of<br />
                <span className="text-gold italic">Culinary Excellence</span>
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="font-[Lato] text-ivory/60 text-lg leading-relaxed"
              >
                Tavola has been a cornerstone of fine dining in Kandivali, offering an unparalleled culinary experience that blends the rich traditions of North Indian, Chinese, Italian, and seafood cuisines. Our chefs craft each dish with passion, using only the freshest ingredients and time-honoured techniques.
              </motion.p>
              <motion.p
                custom={3}
                variants={fadeUp}
                className="font-[Lato] text-ivory/60 text-lg leading-relaxed"
              >
                Step into our elegantly designed space — where warm lighting, plush seating, and impeccable service create the perfect setting for celebrations, intimate dinners, and memorable gatherings.
              </motion.p>
              <motion.div custom={4} variants={fadeUp}>
                <Link href="/about">
                  <span className="inline-flex items-center gap-2 font-[Cormorant_Garamond] text-gold text-lg uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300">
                    Discover Our Story <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={COCKTAIL_IMG}
                  alt="Artisan cocktail at Tavola"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 sm:p-8">
                <p className="font-[Playfair_Display] text-charcoal text-3xl font-bold">10+</p>
                <p className="font-[Lato] text-charcoal/80 text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 sm:py-32 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase"
            >
              Our Specialities
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mt-4"
            >
              Culinary <span className="text-gold italic">Masterpieces</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuHighlights.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-charcoal border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-[Playfair_Display] text-xl text-ivory font-semibold mb-3">
                  {item.name}
                </h3>
                <p className="font-[Lato] text-ivory/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/menu">
              <span className="inline-flex items-center gap-2 px-10 py-4 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.15em] text-sm hover:bg-gold/10 transition-all duration-300">
                View Full Menu <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Food Showcase */}
      <section className="relative py-0">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={FOOD_IMG}
            alt="Tavola signature dishes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-lg"
              >
                <span className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.2em] uppercase">
                  A Feast for the Senses
                </span>
                <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
                  Crafted with <span className="text-gold italic">Passion</span>
                </h2>
                <p className="font-[Lato] text-ivory/70 text-lg mt-6 leading-relaxed">
                  From the smoky depths of our tandoor to the delicate art of our desserts, every dish at Tavola tells a story of culinary mastery.
                </p>
                <div className="mt-8">
                  <a
                    href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all duration-300"
                  >
                    Book Your Experience
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase"
            >
              Visual Journey
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mt-4"
            >
              Step Inside <span className="text-gold italic">Tavola</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[HERO_IMG, INTERIOR_IMG, FOOD_IMG].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`overflow-hidden ${i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`Tavola gallery ${i + 1}`}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                    i === 0 ? "h-64 sm:h-80 lg:h-full" : "h-48 sm:h-64"
                  }`}
                />
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
              <span className="inline-flex items-center gap-2 font-[Cormorant_Garamond] text-gold text-lg uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300">
                View Full Gallery <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase"
            >
              Guest Reviews
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mt-4"
            >
              What Our Guests <span className="text-gold italic">Say</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-charcoal border border-gold/10 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-[Cormorant_Garamond] text-ivory/70 text-lg italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <p className="font-[Lato] text-gold text-sm uppercase tracking-wider">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={INTERIOR_IMG}
            alt="Tavola private dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Your Table <span className="text-gold italic">Awaits</span>
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="font-[Lato] text-ivory/70 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Whether it's a romantic dinner, a family celebration, or a corporate gathering — Tavola is the perfect setting for your next unforgettable evening.
            </motion.p>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all duration-300"
              >
                Reserve via WhatsApp
              </a>
              <a
                href="tel:+919930969640"
                className="px-10 py-4 border border-gold/50 text-gold font-[Lato] uppercase tracking-[0.15em] text-sm hover:bg-gold/10 transition-all duration-300"
              >
                Call +91 99309 69640
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
