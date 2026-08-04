"use client";

import { motion } from "framer-motion";
import {
  PackageCheck,
  Globe2,
  ShieldCheck,
  Handshake,
  Search,
  MessageCircle,
  ClipboardCheck,
  Ship,
  Target,
  Eye,
} from "lucide-react";

const offers = [
  {
    icon: PackageCheck,
    title: "Graded Pallets",
    desc: "Every pallet is condition-graded so you know exactly what you're buying.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    desc: "We coordinate freight to buyers across the globe, big or small orders.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sourcing",
    desc: "Inventory sourced directly through major US retailer liquidation channels.",
  },
  {
    icon: Handshake,
    title: "Investor Friendly",
    desc: "Flexible options for resellers, distributors, and bulk investors.",
  },
];

const steps = [
  {
    icon: Search,
    title: "1. Browse Products",
    desc: "Explore our current pallet categories and manifests.",
  },
  {
    icon: MessageCircle,
    title: "2. Send an Inquiry",
    desc: "Message us on WhatsApp or the contact form with what you need.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Confirm & Pay",
    desc: "We confirm pallet details, pricing, and shipping terms with you.",
  },
  {
    icon: Ship,
    title: "4. We Ship",
    desc: "Your order is packed and shipped, wherever in the world you are.",
  },
];

// CORE VALUES DATA (ABOUT PAGE)
const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Transparent grading and honest communication on every order.",
  },
  {
    icon: Target,
    title: "Reliability",
    desc: "Consistent inventory access and dependable freight coordination.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Serving buyers across 30+ countries with worldwide shipping.",
  },
  {
    icon: Eye,
    title: "Clarity",
    desc: "Clear pricing and manifests, with no hidden surprises.",
  },
];

export function ValuesGrid() {
  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {values.map((v) => (
        <motion.div
          key={v.title}
          variants={itemVariants}
          className="card p-7 text-center group transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
            <v.icon size={26} />
          </div>
          <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
          <p className="text-navy-500 text-sm leading-relaxed">{v.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function OffersGrid() {
  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {offers.map((o) => (
        <motion.div
          key={o.title}
          variants={itemVariants}
          className="card p-7 text-center group transition-transform duration-300 hover:-translate-y-1.5"
        >
          <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
            <o.icon size={26} />
          </div>
          <h3 className="font-bold text-navy-900 mb-2">{o.title}</h3>
          <p className="text-navy-500 text-sm leading-relaxed">{o.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function StepsGrid() {
  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          variants={itemVariants}
          className="relative text-center group"
        >
          <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-5 shadow-card transition-transform duration-300 group-hover:scale-110">
            <s.icon size={26} />
          </div>
          <h3 className="font-bold text-navy-900 mb-2">{s.title}</h3>
          <p className="text-navy-500 text-sm leading-relaxed">{s.desc}</p>
          {i < steps.length - 1 && (
            <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-navy-100" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
