"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig";

const slides = [
  {
    eyebrow: "Trusted Global Sourcing Partner",
    title: "Bulk Pallets, Sourced Direct From Leading US Retailers",
    subtitle:
      "Shoes, clothes, cosmetics, bags & power tools — sourced in bulk and shipped worldwide with clear manifests and reliable freight.",
    bg: "from-brand-navy via-navy-800 to-navy-700",
  },
  {
    eyebrow: "Shipped Worldwide",
    title: "Buy Wholesale. Resell With Confidence.",
    subtitle:
      "Every pallet is graded and manifested so you know exactly what you're buying before it ships — no surprises.",
    bg: "from-navy-800 via-brand-navy to-navy-900",
  },
  {
    eyebrow: "Investment Opportunities",
    title: "Grow Your Business With Bulk Liquidation",
    subtitle:
      "From single pallets to full containers — we work with resellers, distributors, and investors at every scale.",
    bg: "from-navy-900 via-navy-700 to-brand-navy",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${slide.bg} transition-colors duration-700`}>
      {/* decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container-page relative py-24 sm:py-32 lg:py-36 min-h-[560px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-red text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              {slide.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {slide.title}
            </h1>
            <p className="text-navy-100 text-lg leading-relaxed mb-9 max-w-xl">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="absolute bottom-8 left-0 right-0 container-page flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand-red" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
