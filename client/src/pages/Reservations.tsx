import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, Users, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const INTERIOR_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-3_1772035128000_na1fn_dGF2b2xhLWludGVyaW9yLWdhbGxlcnk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTNfMTc3MjAzNTEyODAwMF9uYTFmbl9kR0YyYjJ4aExXbHVkR1Z5YVc5eUxXZGhiR3hsY25rLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D4a3o~ar62~81KEpIV-KBQBqBpkJQhkPlOtKqG-e-b516OnJ1vzxZJZYTAblprgF9Q8KZW~NoBsxf7wZNfYfLbbgLGHqWmrSxM65nKcQCddajUJ4tb9RRPQAkLogGFYQtLC~-UAaO3GGTD04HCpMwnKnxup8yvQmD6JY4ezRp8~SQh8fMD2VzBZ4W3yzQ8AQO-5NsjtYXMPyg1Pz~2ERtRGnGnybkHc5DkEVqf6CNnghIzasYmxCpRFCp5XlOawy1lSi3SBwZBGerUNYAujGDj4ubmMNVgodpx4lDumlHc-3g2uc-Yo8Fan81lIv1rX2sKYRoxrIjmGEbv6id91TcA__";

export default function Reservations() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", occasion: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Tavola! I'd like to reserve a table.\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nOccasion: ${form.occasion || "N/A"}`;
    window.open(`https://wa.me/919930969640?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp for confirmation!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={INTERIOR_IMG} alt="Tavola Reservations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Your Table Awaits
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Make a <span className="text-gold italic">Reservation</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-[Playfair_Display] text-3xl font-bold text-ivory mb-8">
                Reserve Your <span className="text-gold italic">Experience</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Date</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Time</label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      {["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Guests</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "10+"].map((n) => (
                        <option key={n} value={String(n)}>{n} {Number(n) === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-[Lato] text-ivory/60 text-sm uppercase tracking-wider mb-2">Special Occasion (Optional)</label>
                  <input
                    type="text"
                    value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className="w-full bg-charcoal-light border border-gold/20 px-4 py-3 text-ivory font-[Lato] focus:border-gold focus:outline-none transition-colors"
                    placeholder="Birthday, Anniversary, Corporate dinner..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all"
                >
                  Confirm via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-charcoal border border-gold/10 p-8">
                <h3 className="font-[Playfair_Display] text-xl text-gold font-semibold mb-6">Quick Reserve</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20make%20a%20reservation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-gold/20 hover:border-gold/50 transition-colors"
                  >
                    <MessageCircle size={20} className="text-gold" />
                    <div>
                      <p className="font-[Lato] text-ivory text-sm font-semibold">WhatsApp</p>
                      <p className="font-[Lato] text-ivory/50 text-xs">Instant confirmation</p>
                    </div>
                  </a>
                  <a
                    href="tel:+919930969640"
                    className="flex items-center gap-3 p-4 border border-gold/20 hover:border-gold/50 transition-colors"
                  >
                    <Phone size={20} className="text-gold" />
                    <div>
                      <p className="font-[Lato] text-ivory text-sm font-semibold">Call Us</p>
                      <p className="font-[Lato] text-ivory/50 text-xs">+91 99309 69640</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-charcoal border border-gold/10 p-8">
                <h3 className="font-[Playfair_Display] text-xl text-gold font-semibold mb-6">Dining Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-gold/60" />
                    <p className="font-[Lato] text-ivory/60 text-sm">Mon – Sun: 12:00 PM – 1:30 AM</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-gold/60" />
                    <p className="font-[Lato] text-ivory/60 text-sm">Private dining for 10+ guests available</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-gold/60" />
                    <p className="font-[Lato] text-ivory/60 text-sm">Advance booking recommended for weekends</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/20 p-6">
                <p className="font-[Cormorant_Garamond] text-gold text-lg italic text-center">
                  "For groups of 10 or more, contact us for a customised private dining experience."
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
