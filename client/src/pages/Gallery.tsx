import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-1_1772035144000_na1fn_dGF2b2xhLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTFfMTc3MjAzNTE0NDAwMF9uYTFmbl9kR0YyYjJ4aExXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zas9Ak3d9phQJDlDk8mTOFQYANuX1kAyf9T981vwTtUW-VY9O6FARbAnQUnsQD4RK0e1RgASF69IoOyXd5DI7zVcoMcdF6EKgy8A4-14o4DWbP-gUBz-GgStXJGROyOFDk9yTH4AUGeKiDyR5q1UbTmunseR~uFZaLrpqSlVyAESEC1ecMjmgCnJHbx61nspupZ8fu2NEIlby-jO~jwzR66rB~zA3ZQ~Ufe6U~Ga3Yt9HwHHIjW-I8J5vNDOLzD75NkMfA26JcwVJw6V0webI1Irr-TSuXnyMpVijlmuNfo3qYXM1o7b2dWYfc0zHqFXNF7ngb71t2u9dlbt5JiWbA__";
const FOOD_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-2_1772035143000_na1fn_dGF2b2xhLWZvb2QtaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTJfMTc3MjAzNTE0MzAwMF9uYTFmbl9kR0YyYjJ4aExXWnZiMlF0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GMdnPosghHus9voX7BIrTlrR-En08XiQeIicFsJRg8SNF5o7SYmi58dw5b7DU5R6SB7~rxiKaQCr2gqJAmwemj5nijFD5sIBAtQHtcT6AX86aqs4ucnaEEct-YTs25ae77hmjtIlQd0wj~iAeSGWRcDdqDaCF2323zr2qULcA4AjE4lqqW6OPBijAqMykfgEMd2iymDNxlyGkK933WcMNAVf5Q6MWtUQroZZJ6o3HSf8DktgsZPmcujiygx8PONmUsIEopWk5mkCjOInX~xJbtB~vIZLybqN2JnieyHNJUoU-N3CqViBCHnDqmc2wb41jfCpPFIGo9pc0xDgD0pr2w__";
const INTERIOR_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-3_1772035128000_na1fn_dGF2b2xhLWludGVyaW9yLWdhbGxlcnk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTNfMTc3MjAzNTEyODAwMF9uYTFmbl9kR0YyYjJ4aExXbHVkR1Z5YVc5eUxXZGhiR3hsY25rLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D4a3o~ar62~81KEpIV-KBQBqBpkJQhkPlOtKqG-e-b516OnJ1vzxZJZYTAblprgF9Q8KZW~NoBsxf7wZNfYfLbbgLGHqWmrSxM65nKcQCddajUJ4tb9RRPQAkLogGFYQtLC~-UAaO3GGTD04HCpMwnKnxup8yvQmD6JY4ezRp8~SQh8fMD2VzBZ4W3yzQ8AQO-5NsjtYXMPyg1Pz~2ERtRGnGnybkHc5DkEVqf6CNnghIzasYmxCpRFCp5XlOawy1lSi3SBwZBGerUNYAujGDj4ubmMNVgodpx4lDumlHc-3g2uc-Yo8Fan81lIv1rX2sKYRoxrIjmGEbv6id91TcA__";
const CATERING_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-4_1772035134000_na1fn_dGF2b2xhLWNhdGVyaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTRfMTc3MjAzNTEzNDAwMF9uYTFmbl9kR0YyYjJ4aExXTmhkR1Z5YVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oBbsl2Dbh3~pqCTOvGnrq1la9v4PnX1r25L8mZa0Ed84XsORiqpiBwwrONnymLEC7Ui785CkMUvSeTsZ9K9pIAU8MGuqsKmfrP6YZttao5bcVOML8NBacNm5ICugzBU6wmRsBoi8wtc7qB-O~k33h5NjGjJMS3YBt67g3c3ALnx2UpcWiNay3v34tR3KGWnASVIkZrLhBk2oahhHLniysu7tBQuuhAN586trVhdtyRaHlIGu01A0pwLz8xavEjmH7z1B34hwdcrzmUZxjaY7zgtQoODzWvEFM5HsdIllsHS91ek5gf2NcYJ5dbhjWov8VM1jsC9rYocEy1nunExZww__";
const COCKTAIL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/5oFGR4LAiTGjHTW2hskrnb/sandbox/f8dkhDGu6pnjmn6Vw6vZ56-img-5_1772035136000_na1fn_dGF2b2xhLWNvY2t0YWls.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNW9GR1I0TEFpVEdqSFRXMmhza3JuYi9zYW5kYm94L2Y4ZGtoREd1NnBuam1uNlZ3NnZaNTYtaW1nLTVfMTc3MjAzNTEzNjAwMF9uYTFmbl9kR0YyYjJ4aExXTnZZMnQwWVdscy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N7L6AHGRpIW1FpxY61sRHQ0m30rVQmg-ex2IetHfgIFpLnomrAS3HEoIPmJHJuVnI7d1HlBqbvRMaD5Jw3L3eYRQ1vs~zT6v7gik-5McO0ve2k4Jye0-SKZy65P4DJ8-nD~l0Wu7GAPEtvtnWGQCtRFU13GqPodQYynJqzx~UF6paM8fyCVahgEHTeiG9oZmDsntnEbuN1ySTt6u2Lk74aKQFyRHavrKHbTmbVXM8PArz7zN5dZKbCmiW33LtyXsUlkJlqjauCCeSMxSI9-k9OMfk9xHtDrezO5Aw4r-othl0TZz-dLhzdPC6Q33HUD8LypajcL~iWLkBWELl91Eng__";

const galleryImages = [
  { src: HERO_IMG, alt: "Tavola main dining area", span: "col-span-2 row-span-2" },
  { src: FOOD_IMG, alt: "Signature dishes spread", span: "" },
  { src: COCKTAIL_IMG, alt: "Artisan cocktails", span: "row-span-2" },
  { src: INTERIOR_IMG, alt: "Private dining room", span: "col-span-2" },
  { src: CATERING_IMG, alt: "Catering setup", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", alt: "Fine dining plating", span: "" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", alt: "Restaurant ambiance", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800", alt: "Dessert presentation", span: "" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={INTERIOR_IMG} alt="Tavola Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[Cormorant_Garamond] text-gold/80 text-lg tracking-[0.3em] uppercase"
            >
              Visual Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4"
            >
              Our <span className="text-gold italic">Gallery</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`overflow-hidden group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-[Cormorant_Garamond] text-ivory/50 text-lg italic mb-6">
              Follow us on Instagram for daily updates
            </p>
            <a
              href="https://instagram.com/tavolafinedine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-gold/40 text-gold font-[Lato] uppercase tracking-[0.15em] text-sm hover:bg-gold/10 transition-all"
            >
              @tavolafinedine
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
