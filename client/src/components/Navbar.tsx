import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/offers", label: "Offers" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="font-[Playfair_Display] text-2xl sm:text-3xl font-bold text-gold tracking-wider">
                TAVOLA
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`font-[Cormorant_Garamond] text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:text-gold ${
                    location === link.href ? "text-gold" : "text-ivory/70"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919930969640"
              className="hidden sm:flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone size={16} />
              <span className="font-[Lato] text-sm tracking-wide">Call Now</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-ivory p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`block py-3 font-[Cormorant_Garamond] text-lg uppercase tracking-[0.15em] transition-colors ${
                        location === link.href ? "text-gold" : "text-ivory/70 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6 flex flex-col gap-3"
              >
                <a
                  href="https://wa.me/919930969640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-wider text-sm"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919930969640"
                  className="block text-center py-3 border border-gold text-gold font-[Lato] uppercase tracking-wider text-sm"
                >
                  Call to Reserve
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
