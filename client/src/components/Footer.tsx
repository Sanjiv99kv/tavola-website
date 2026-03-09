import { Link } from "wouter";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/tavola_2_transparent.png"
                alt="Tavola Logo"
                className="h-12 w-auto max-w-[180px] object-contain drop-shadow-[0_2px_12px_rgba(201,169,110,0.45)]"
              />
            </div>
            <p className="font-[Cormorant_Garamond] text-lg text-ivory/60 leading-relaxed">
              Kandivali's premier fine dining destination. Where every meal becomes a memory.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/tavolafinedine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/TavolaKandivali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Cormorant_Garamond] text-xl text-gold uppercase tracking-[0.15em] mb-6">
              Explore
            </h4>
            <div className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reservations", label: "Reservations" },
                { href: "/catering", label: "Catering" },
                { href: "/offers", label: "Offers & Loyalty" },
                { href: "/about", label: "Our Story" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="block font-[Lato] text-sm text-ivory/50 hover:text-gold transition-colors tracking-wide">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Cormorant_Garamond] text-xl text-gold uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold/60 mt-1 shrink-0" />
                <p className="font-[Lato] text-sm text-ivory/50 leading-relaxed">
                  Gokul Nagari 2 CHS, B Wing, Thakur Village, Western Express Highway, Kandivali East, Mumbai
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold/60 shrink-0" />
                <a href="tel:+919930969640" className="font-[Lato] text-sm text-ivory/50 hover:text-gold transition-colors">
                  +91 99309 69640
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold/60 mt-1 shrink-0" />
                <p className="font-[Lato] text-sm text-ivory/50 leading-relaxed">
                  Mon – Sun<br />12:00 PM – 1:30 AM
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-[Cormorant_Garamond] text-xl text-gold uppercase tracking-[0.15em] mb-6">
              Reserve a Table
            </h4>
            <p className="font-[Lato] text-sm text-ivory/50 mb-6 leading-relaxed">
              Experience the finest multi-cuisine dining in Kandivali. Book your table today.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-wider text-xs hover:bg-gold-light transition-colors"
              >
                WhatsApp Reservation
              </a>
              <a
                href="tel:+919930969640"
                className="block text-center py-3 border border-gold/40 text-gold font-[Lato] uppercase tracking-wider text-xs hover:bg-gold/10 transition-colors"
              >
                Call to Reserve
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[Lato] text-xs text-ivory/30 tracking-wide">
            &copy; {new Date().getFullYear()} Tavola Fine Dining. All rights reserved.
          </p>
          <p className="font-[Lato] text-xs text-ivory/30 tracking-wide">
            Kandivali East, Mumbai &middot; Premium Multi-Cuisine Dining
          </p>
        </div>
      </div>
    </footer>
  );
}
