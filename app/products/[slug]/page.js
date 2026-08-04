import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import siteConfig from "@/data/siteConfig";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
    {/* HEADER */}
<section className="relative py-16 sm:py-20 overflow-hidden">
  <Image
    src="/about-header.png"
    alt={product.name}
    fill
    priority
    className="object-cover"
  />
  {/* Overlay grey */}
  <div className="absolute inset-0 bg-gray-900/70" />

  <div className="container-page relative z-10">
    <div className="flex items-center gap-2 text-navy-300 text-sm mb-6">
      <Link href="/products" className="hover:text-white transition-colors">Products</Link>
      <ChevronRight size={14} />
      <span className="text-white font-medium">{product.name}</span>
    </div>
    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
      {product.name}
    </h1>
    <p className="text-navy-100 text-lg mt-4 max-w-2xl">{product.shortDesc}</p>
  </div>
</section>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-3 gap-5">
            {product.gallery.map((src, i) => (
              <div key={i} className="relative h-56 rounded-2xl overflow-hidden shadow-card">
                <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + condition */}
      <section className="py-16 sm:py-20 bg-navy-50">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="section-eyebrow">Overview</span>
            <h2 className="text-3xl font-extrabold text-navy-900 mb-5">About This Pallet Category</h2>
            <p className="text-navy-500 leading-relaxed mb-10">{product.description}</p>

            <span className="section-eyebrow">Condition & Grading</span>
            <h2 className="text-3xl font-extrabold text-navy-900 mb-6">Pallet Details & Condition</h2>
            <div className="space-y-4">
              {product.grading.map((g) => (
                <div key={g.grade} className="card p-6 flex gap-4">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="font-bold text-navy-900">{g.grade}</p>
                    <p className="text-navy-500 text-sm mt-1">{g.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry sidebar */}
          <div>
            <div className="card p-8 sticky top-28">
              <h3 className="text-xl font-extrabold text-navy-900 mb-3">Pricing & Availability</h3>
              <p className="text-navy-500 text-sm leading-relaxed mb-6">
                Pricing depends on pallet size, grading, and destination. Reach out for a manifest
                and a personalized quote — we typically respond within a few hours.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn-primary w-full">
                  Get a Quote
                </Link>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
              <p className="text-navy-400 text-xs mt-5 text-center">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Logistics"
            title="Shipping & Availability"
            subtitle="We ship worldwide and coordinate freight based on your order size and destination."
            center={false}
          />
          <p className="text-navy-500 leading-relaxed">
            Availability for {product.name.toLowerCase()} changes regularly based on current retailer
            liquidation stock. Message us for the latest availability, estimated lead times, and a
            freight quote to your location.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-navy-50">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" center={false} />
          <FaqAccordion faqs={product.faqs} />
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Explore More" title="Other Product Categories" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
