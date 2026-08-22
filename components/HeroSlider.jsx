"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Bulk Pallets and containers, Sourced From Leading US Retailers",
    subtitle:
      "Shoes, clothes, cosmetics, bags & power tools sourced in bulk and shipped worldwide with clear manifests and reliable freight.",
    bg: "/Hero/hero-1.png",
  },
  {
    title: "Buy Pallets and Containers In Wholesale,Resell With Confidence.",
    subtitle:
      "Every pallet is graded and manifested so you know exactly what you're buying before it ships no surprises.",
    bg: "/Hero/hero-2.png",
  },
  {
    title: "Grow Your Business With Bulk Liquidation",
    subtitle:
      "From single pallets to full containers we work with resellers, distributors, and investors at every scale.",
    bg: "/Hero/hero-3.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden h-[600px] sm:h-[560px] lg:h-[620px]">
      {/* Background images — stacked, crossfade via opacity */}
      {slides.map((s, i) => (
        <Image
          key={s.bg}
          src={s.bg}
          alt="hero background"
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-900/60" />

      <div className="container-page relative z-10 h-full py-16 sm:py-20 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {slide.title}
            </h1>
            <p className="text-navy-100 text-lg leading-relaxed mb-9 max-w-xl">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="absolute bottom-8 left-0 right-0 container-page z-10 flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-brand-red"
                  : "w-2 bg-white/40 hover:bg-white/70"
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