import { motion } from "framer-motion";
import { Gift, Star, Percent, Crown, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FOOD_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-2_1772035143000_na1fn_dGF2b2xhLWZvb2QtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTJfMTc3MjAzNTE0MzAwMF9uYTFmbl9kR0YyYjJ4aExXWnZiMlF0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GMdnPosghHus9voX7BIrTlrR-En08XiQeIicFsJRg8SNF5o7SYmi58dw5b7DU5R6SB7~rxiKaQCr2gqJAmwemj5nijFD5sIBAtQHtcT6AX86aqs4ucnaEEct-YTs25ae77hmjtIlQd0wj~iAeSGWRcDdqDaCF2323zr2qULcA4AjE4lqqW6OPBijAqMykfgEMd2iymDNxlyGkK933WcMNAVf5Q6MWtUQroZZJ6o3HSf8DktgsZPmcujiygx8PONmUsIEopWk5mkCjOInX~xJbtB~vIZLybqN2JnieyHNJUoU-N3CqViBCHnDqmc2wb41jfCpPFIGo9pc0xDgD0pr2w__";

const offers = [
  {
    icon: Crown,
    title: "Tavola Royale Card",
    desc: "Our exclusive loyalty program. Earn 1 point for every ₹100 spent. Redeem points for complimentary dishes, drinks, and exclusive experiences. Gold members get priority reservations and birthday surprises.",
    tag: "Loyalty Program",
  },
  {
    icon: Percent,
    title: "Weekday Lunch Special",
    desc: "Enjoy 15% off on all orders during weekday lunches (Mon–Fri, 12–3 PM). The perfect excuse for a premium midday break. Valid on dine-in only.",
    tag: "Limited Time",
  },
  {
    icon: Gift,
    title: "Birthday & Anniversary",
    desc: "Celebrate your special day at Tavola and receive a complimentary dessert platter plus a personalised cake. Pre-book 48 hours in advance to avail this offer.",
    tag: "Celebrations",
  },
  {
    icon: Star,
    title: "First Visit Reward",
    desc: "New to Tavola? Get 10% off on your first dine-in bill. Simply mention this offer when you arrive. Plus, sign up for our loyalty card and earn double points on your first visit.",
    tag: "New Guests",
  },
  {
    icon: Sparkles,
    title: "Refer a Friend",
    desc: "Love Tavola? Share the love. Refer a friend and both of you get ₹500 off on your next bill (minimum bill ₹2,000). There's no limit to how many friends you can refer.",
    tag: "Referral",
  },
  {
    icon: Percent,
    title: "Happy Hours",
    desc: "Enjoy buy-one-get-one on select cocktails and mocktails every day from 5 PM to 8 PM. The perfect way to unwind after a long day.",
    tag: "Daily",
  },
];

export default function Offers() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={FOOD_IMG} alt="Tavola Offers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Exclusive Rewards
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Offers & <span className="text-gold italic">Loyalty</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-charcoal border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 font-[Lato] text-xs uppercase tracking-wider text-gold/60 bg-gold/10 px-3 py-1">
                  {offer.tag}
                </span>
                <offer.icon size={32} className="text-gold mb-6" />
                <h3 className="font-[Playfair_Display] text-xl text-ivory font-semibold mb-4">
                  {offer.title}
                </h3>
                <p className="font-[Lato] text-ivory/50 text-sm leading-relaxed">
                  {offer.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="font-[Cormorant_Garamond] text-ivory/50 text-lg italic mb-6">
              Want to know more about our loyalty program?
            </p>
            <a
              href="https://wa.me/919930969640?text=Hi%20Tavola!%20I'd%20like%20to%20know%20more%20about%20your%20loyalty%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-charcoal font-[Lato] font-bold uppercase tracking-[0.15em] text-sm hover:bg-gold-light transition-all"
            >
              Enquire on WhatsApp <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
