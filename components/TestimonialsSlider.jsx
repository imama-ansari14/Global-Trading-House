"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import testimonials from "@/data/testimonials";

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setItemsPerView(3);
      else if (w >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return itemsPerView;
}

export default function TestimonialsSlider() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  const handleManual = (fn) => {
    fn();
    setPaused(true);
    setTimeout(() => setPaused(false), 4500);
  };

  const cardWidthPercent = 100 / itemsPerView;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * cardWidthPercent}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 px-3"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT & RIGHT ARROWS */}
      <div className="flex sm:hidden justify-center gap-4 mt-6">
        <button
          aria-label="Previous testimonial"
          onClick={() => handleManual(prev)}
          className="w-11 h-11 rounded-full bg-white shadow-card border border-navy-100 flex items-center justify-center text-navy-900"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => handleManual(next)}
          className="w-11 h-11 rounded-full bg-white shadow-card border border-navy-100 flex items-center justify-center text-navy-900"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="hidden sm:flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial set ${i + 1}`}
            onClick={() => handleManual(() => setIndex(i))}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-brand-red"
                : "w-2 bg-navy-500 hover:bg-navy-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
