import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-1_1772035144000_na1fn_dGF2b2xhLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTFfMTc3MjAzNTE0NDAwMF9uYTFmbl9kR0YyYjJ4aExXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zas9Ak3d9phQJDlDk8mTOFQYANuX1kAyf9T981vwTtUW-VY9O6FARbAnQUnsQD4RK0e1RgASF69IoOyXd5DI7zVcoMcdF6EKgy8A4-14o4DWbP-gUBz-GgStXJGROyOFDk9yTH4AUGeKiDyR5q1UbTmunseR~uFZaLrpqSlVyAESEC1ecMjmgCnJHbx61nspupZ8fu2NEIlby-jO~jwzR66rB~zA3ZQ~Ufe6U~Ga3Yt9HwHHIjW-I8J5vNDOLzD75NkMfA26JcwVJw6V0webI1Irr-TSuXnyMpVijlmuNfo3qYXM1o7b2dWYfc0zHqFXNF7ngb71t2u9dlbt5JiWbA__";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={HERO_IMG} alt="Tavola Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Contact <span className="text-gold italic">Us</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-ivory mb-4">
                  Visit <span className="text-gold italic">Tavola</span>
                </h2>
                <p className="font-[Lato] text-ivory/60 text-lg leading-relaxed">
                  We'd love to hear from you. Whether you have a question about our menu, want to make a reservation, or are interested in our catering services — reach out to us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 border border-gold/10 hover:border-gold/30 transition-colors">
                  <MapPin size={24} className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[Playfair_Display] text-lg text-ivory font-semibold">Address</h3>
                    <p className="font-[Lato] text-ivory/50 text-sm mt-1 leading-relaxed">
                      Gokul Nagari 2 CHS, B Wing, Thakur Village,<br />
                      Western Express Highway, Kandivali East,<br />
                      Mumbai, Maharashtra 400101
                    </p>
                    <a
                      href="https://maps.google.com/?q=Tavola+Kandivali+East+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 font-[Lato] text-gold text-sm hover:text-gold-light transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-gold/10 hover:border-gold/30 transition-colors">
                  <Phone size={24} className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[Playfair_Display] text-lg text-ivory font-semibold">Phone</h3>
                    <a href="tel:+919930969640" className="font-[Lato] text-ivory/50 text-sm mt-1 block hover:text-gold transition-colors">
                      +91 99309 69640
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-gold/10 hover:border-gold/30 transition-colors">
                  <Clock size={24} className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[Playfair_Display] text-lg text-ivory font-semibold">Hours</h3>
                    <p className="font-[Lato] text-ivory/50 text-sm mt-1">
                      Monday – Sunday: 12:00 PM – 1:30 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-gold/10 hover:border-gold/30 transition-colors">
                  <Mail size={24} className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[Playfair_Display] text-lg text-ivory font-semibold">Email</h3>
                    <p className="font-[Lato] text-ivory/50 text-sm mt-1">
                      info@tavolamumbai.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social & Quick Actions */}
              <div className="space-y-4">
                <h3 className="font-[Cormorant_Garamond] text-gold text-lg uppercase tracking-[0.15em]">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/919930969640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gold text-charcoal font-[Lato] font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/tavolafinedine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 border border-gold/40 text-gold font-[Lato] text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="https://facebook.com/TavolaKandivali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 border border-gold/40 text-gold font-[Lato] text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-square lg:aspect-[4/5] bg-charcoal border border-gold/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d72.8567!3d19.2094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzMzLjgiTiA3MsKwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tavola Location"
                />
              </div>
              <div className="bg-gold/10 border border-gold/20 p-6 text-center">
                <p className="font-[Cormorant_Garamond] text-gold text-lg italic">
                  Located near Thakur Village, just off the Western Express Highway. Ample parking available.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
