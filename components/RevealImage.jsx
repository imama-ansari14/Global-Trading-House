"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Shared trigger: fires once when scrolled into view, with a safety-net
// timeout so nothing can ever get stuck mid-animation.
function useRevealTrigger() {
  const ref = useRef(null);
  const inViewNow = useInView(ref, { once: true, amount: 0.25 });
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inViewNow) setRevealed(true);
  }, [inViewNow]);

  useEffect(() => {
    const fallback = setTimeout(() => setRevealed(true), 1500);
    return () => clearTimeout(fallback);
  }, []);

  return { ref, revealed };
}

export function RevealImage({ src, alt, className = "" }) {
  const { ref, revealed } = useRevealTrigger();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={revealed ? { scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>

      {/* Wipe panel — covers image, then recedes right-to-left */}
      <motion.div
        className="absolute inset-0 bg-navy-100 z-10"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 1 }}
        animate={revealed ? { scaleX: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
      />
    </div>
  );
}

export function RevealText({ children, className = "" }) {
  const { ref, revealed } = useRevealTrigger();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={revealed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}