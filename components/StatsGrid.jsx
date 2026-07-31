"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 5, suffix: "+", label: "Product Categories" },
  { value: 24, suffix: "/7", label: "Support Availability" },
  { value: 100, suffix: "%", label: "Direct Sourcing" },
];

function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, start);
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
      <p className="text-4xl font-extrabold text-white mb-1 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-navy-300 text-sm">{label}</p>
    </div>
  );
}

export default function StatsGrid() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-5">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} start={start} />
      ))}
    </div>
  );
}