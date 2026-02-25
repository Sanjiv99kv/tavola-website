import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Utensils, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const CATERING_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-4_1772035134000_na1fn_dGF2b2xhLWNhdGVyaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTRfMTc3MjAzNTEzNDAwMF9uYTFmbl9kR0YyYjJ4aExXTmhkR1Z5YVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oBbsl2Dbh3~pqCTOvGnrq1la9v4PnX1r25L8mZa0Ed84XsORiqpiBwwrONnymLEC7Ui785CkMUvSeTsZ9K9pIAU8MGuqsKmfrP6YZttao5bcVOML8NBacNm5ICugzBU6wmRsBoi8wtc7qB-O~k33h5NjGjJMS3YBt67g3c3ALnx2UpcWiNay3v34tR3KGWnASVIkZrLhBk2oahhHLniysu7tBQuuhAN586trVhdtyRaHlIGu01A0pwLz8xavEjmH7z1B34hwdcrzmUZxjaY7zgtQoODzWvEFM5HsdIllsHS91ek5gf2NcYJ5dbhjWov8VM1jsC9rYocEy1nunExZww__";

const packages = [
  {
    name: "Silver",
    price: "₹800",
    unit: "per plate",
    guests: "50–100 guests",
    features: ["Welcome drinks", "4 starters (2 veg + 2 non-veg)", "3 main course options", "2 breads + rice", "2 desserts", "Basic table setup"],
  },
  {
    name: "Gold",
    price: "₹1,200",
    unit: "per plate",
    guests: "50–200 guests",
    features: ["Premium welcome drinks", "6 starters (3 veg + 3 non-veg)", "5 main course options", "3 breads + biryani + rice", "3 desserts + live counter", "Elegant decor & table setup", "Dedicated service staff"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹1,800",
    unit: "per plate",
    guests: "100–500 guests",
    features: ["Signature cocktails & mocktails", "8 starters with live counters", "7 main course options", "Full bread basket + biryani", "5 desserts + live dessert station", "Premium decor & floral setup", "Dedicated event manager", "Custom menu curation"],
  },
];

const eventTypes = ["Wedding", "Corporate Event", "Birthday Party", "Engagement", "Anniversary", "Festival Celebration", "Other"];

export default function Catering() {
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Tavola! I'm interested in your catering services.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent: ${form.eventType}\nDate: ${form.date}\nGuests: ${form.guests}\nDetails: ${form.message || "N/A"}`;
    window.open(`https://wa.me/919930969640?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp for your catering inquiry!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={CATERING_IMG} alt="Tavola Catering" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Events & Celebrations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Premium <span className="text-gold italic">Catering</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-[Cormorant_Garamond] text-gold/70 text-lg tracking-[0.2em] uppercase">
              Tailored for Your Event
            </span>
            <h2 className="font-[Playfair_Display] text-4xl sm:text-5xl font-bold text-ivory mt-4">
              Catering <span className="text-gold italic">Packages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative border p-8 ${
                  pkg.popular
                    ? "border-gold bg-gold/5"
                    : "border-gold/10 bg-charcoal"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal font-[Lato] text-xs font-bold uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-[Playfair_Display] text-2xl text-gold font-bold">{pkg.name}</h3>
                  <p className="font-[Playfair_Display] text-4xl text-ivory font-bold mt-4">{pkg.price}</p>
                  <p className="font-[Lato] text-ivory/50 text-sm">{pkg.unit}</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-ivory/40">
                    <Users size={14} />
                    <span className="font-[Lato] text-sm">{pkg.guests}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Star size={12} className="text-gold mt-1 shrink-0" />
                      <span className="font-[Lato] text-ivory/60 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919930969640?text=${encodeURIComponent(`Hi Tavola! I'm interested in your ${pkg.name} catering package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 font-[Lato] font-bold uppercase tracking-wider text-sm transition-all ${
                    pkg.popular
                      ? "bg-gold text-charcoal hover:bg-gold-light"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  Get Quote
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-24 bg-charcoal-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-bold text-ivory">
              Custom <span className="text-gold italic">Inquiry</span>
            </h2>
            <p className="font-[Lato] text-ivory/50 mt-4">
              Have specific requirements? Let us create a bespoke catering experience for your event.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Event Type</label>
                <select
                  required
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Est. Guests</label>
                <input
                  type="text"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                  placeholder="e.g. 100"
                />
              </div>
            </div>
            <div>
              <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Additional Details</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-charcoal border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your event, dietary requirements, budget..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all flex items-center justify-center gap-2"
            >
              Send Inquiry via WhatsApp <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
