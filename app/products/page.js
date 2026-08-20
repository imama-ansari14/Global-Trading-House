import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import FaqAccordion from "@/components/FaqAccordion";
import products from "@/data/products";
import siteConfig from "@/data/siteConfig";

export const metadata = {
  title: "Products",
  description:
    "Browse Global Trading House's wholesale pallet categories — shoes, clothes, cosmetics, bags & power tools, sourced directly from leading US retailers.",
};

const generalFaqs = [
  { q: "What condition is the inventory in?", a: "Every pallet is graded (New/Overstock, Grade A, or Grade B) so you know exactly what you're purchasing before it ships." },
  { q: "Do you provide a manifest before purchase?", a: "Yes, a manifest or sample listing is available on request for most pallets." },
  { q: "Can I order a mix of categories?", a: "Yes — many buyers combine categories into a single order. Message us with what you need." },
  { q: "How is shipping calculated?", a: "Freight is quoted based on your location, order size, and destination. Reach out for a personalized quote." },
];

export default function ProductsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="/pagesHeader/about-header.png"
          alt="warehouse image"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay grey */}
        <div className="absolute inset-0 bg-gray-900/70" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Our Products</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Bulk Pallets, Every Category Graded
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed">
            Starting with 5 core categories — more added as demand grows. Every listing is
            condition-graded and manifested before it ships.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            center={false}
          />
          <FaqAccordion faqs={generalFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-red">
        <div className="container-page text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Don&rsquo;t See What You&rsquo;re Looking For?
          </h2>
          <p className="text-white/90 text-lg mb-9 max-w-xl mx-auto">
            We&rsquo;re always sourcing new categories. Send us a message and we&rsquo;ll let you
            know what&rsquo;s available.
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
