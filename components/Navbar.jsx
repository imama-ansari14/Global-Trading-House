"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import siteConfig from "@/data/siteConfig";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <nav className="container-page flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.businessName} logo`}
              width={52}
              height={52}
              className="rounded-full"
              priority
            />
            <span className="hidden sm:block font-extrabold text-navy-900 text-lg leading-tight tracking-tight">
              {siteConfig.businessName}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-semibold text-navy-900 hover:text-brand-red transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 text-navy-900"
          >
            <Menu size={30} />
          </button>
        </nav>
      </header>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-navy-900/60 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-navy-100">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt={`${siteConfig.businessName} logo`} width={40} height={40} className="rounded-full" />
                  <span className="font-extrabold text-navy-900">{siteConfig.businessName}</span>
                </div>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 text-navy-900">
                  <X size={28} />
                </button>
              </div>

              <ul className="flex flex-col px-6 py-8 gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-lg font-bold text-navy-900 border-b border-navy-50 hover:text-brand-red transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Get a Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
