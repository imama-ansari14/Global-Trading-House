import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Globe2,
  Truck,
  Handshake,
  PackageCheck,
  MessageCircle,
  ArrowRight,
  Search,
  ClipboardCheck,
  Ship,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import products from "@/data/products";
import testimonials from "@/data/testimonials";
import siteConfig from "@/data/siteConfig";

export const metadata = {
  title: "Global Trading House | Bulk Wholesale Pallets Direct From Leading US Retailers",
  description:
    "Global Trading House supplies bulk wholesale pallets sourced directly from leading US retailers — shoes, clothes, cosmetics, bags & power tools, shipped worldwide.",
};

const offers = [
  { icon: PackageCheck, title: "Graded Pallets", desc: "Every pallet is condition-graded so you know exactly what you're buying." },
  { icon: Globe2, title: "Worldwide Shipping", desc: "We coordinate freight to buyers across the globe, big or small orders." },
  { icon: ShieldCheck, title: "Verified Sourcing", desc: "Inventory sourced directly through major US retailer liquidation channels." },
  { icon: Handshake, title: "Investor Friendly", desc: "Flexible options for resellers, distributors, and bulk investors." },
];

const whyChoose = [
  "Direct sourcing relationships with leading US retailers",
  "Transparent, upfront pricing — no hidden fees",
  "Fast responses via WhatsApp, 24/7 availability",
  "Reliable freight coordination worldwide",
];

const steps = [
  { icon: Search, title: "1. Browse Products", desc: "Explore our current pallet categories and manifests." },
  { icon: MessageCircle, title: "2. Send an Inquiry", desc: "Message us on WhatsApp or the contact form with what you need." },
  { icon: ClipboardCheck, title: "3. Confirm & Pay", desc: "We confirm pallet details, pricing, and shipping terms with you." },
  { icon: Ship, title: "4. We Ship", desc: "Your order is packed and shipped, wherever in the world you are." },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Trust strip */}
      <section className="bg-navy-900 py-6 border-t border-white/10">
        <div className="container-page text-center">
          <p className="text-navy-200 text-sm sm:text-base font-medium tracking-wide">
            Bulk sourcing partner working directly with{" "}
            <span className="text-white font-bold">major US retailers</span> — trusted by buyers in{" "}
            <span className="text-white font-bold">30+ countries</span>
          </p>
        </div>
      </section>

      {/* Core product categories */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Core Product Categories"
            subtitle="Bulk pallets across five in-demand categories — every listing graded and manifested before it ships."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-card">
            <Image
              src="https://placehold.co/900x700/0A1930/FFFFFF?text=Global+Trading+House"
              alt="Global Trading House warehouse"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="section-eyebrow">About Our Company</span>
            <h2 className="section-heading mb-6">
              Sourcing In Bulk, Directly From America&rsquo;s Leading Retailers
            </h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              {siteConfig.businessName} buys inventory in bulk directly through leading US retailers,
              turning overstock, returns, and shelf-pulls into reliable wholesale opportunities for
              buyers worldwide.
            </p>
            <p className="text-navy-500 leading-relaxed mb-8">
              From single pallets to full containers, we work with resellers, distributors, and
              investors who want consistent access to genuine, graded inventory — without the
              guesswork.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer icons */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why It Works"
            title="Built For Serious Bulk Buyers"
            subtitle="Everything about how we operate is designed to make bulk sourcing simple and predictable."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((o) => (
              <div key={o.title} className="card p-7 text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-5">
                  <o.icon size={26} />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{o.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-28 bg-brand-navy">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
              A Sourcing Partner You Can Rely On
            </h2>
            <ul className="space-y-4">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="text-brand-red shrink-0 mt-0.5" size={22} />
                  <span className="text-navy-100 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
              <p className="text-4xl font-extrabold text-white mb-1">30+</p>
              <p className="text-navy-300 text-sm">Countries Served</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
              <p className="text-4xl font-extrabold text-white mb-1">5+</p>
              <p className="text-navy-300 text-sm">Product Categories</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
              <p className="text-4xl font-extrabold text-white mb-1">24/7</p>
              <p className="text-navy-300 text-sm">Support Availability</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
              <p className="text-4xl font-extrabold text-white mb-1">100%</p>
              <p className="text-navy-300 text-sm">Direct Sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="From Inquiry To Delivery, Simplified"
            subtitle="A straightforward four-step process, whether you're ordering one pallet or a full container."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-5 shadow-card">
                  <s.icon size={26} />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-navy-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business opportunities teaser */}
      <section className="py-16">
        <div className="container-page">
          <div className="bg-navy-50 border border-navy-100 rounded-3xl p-10 sm:p-14 grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
            <div>
              <span className="section-eyebrow">Business Opportunities</span>
              <h2 className="section-heading mb-4">Looking To Invest Or Scale Your Sourcing?</h2>
              <p className="text-navy-500 leading-relaxed">
                We work with distributors and investors who want consistent, bulk access to graded
                wholesale inventory — from recurring pallet orders to full container commitments.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link href="/contact" className="btn-primary">
                Discuss Opportunities <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Feedback"
            title="Trusted By Buyers Worldwide"
            subtitle="A few words from resellers and distributors we've worked with."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container-page text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready To Source In Bulk?
          </h2>
          <p className="text-white/90 text-lg mb-9 max-w-xl mx-auto">
            Reach out today and we&rsquo;ll help you find the right pallets for your business —
            available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary !border-white">
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
