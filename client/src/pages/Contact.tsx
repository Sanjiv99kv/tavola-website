import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/tavola-hero-enhanced.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={HERO_IMG} alt="Tavola Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
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
                      Near Sai Star Hathway Cable, Western Express Highway,<br />
                      Kandivali East, Mumbai – 400101
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
                    <a href="mailto:info@tavolamumbai.com" className="font-[Lato] text-ivory/50 text-sm mt-1 block hover:text-gold transition-colors">
                      info@tavolamumbai.com
                    </a>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.548!2d72.8682824!3d19.2149134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73804160b1b%3A0x1b7e1e62f5a34f0e!2sTAVOLA+FINE+DINE%2CBAR+%2C+DIESEL+CAFE!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
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
