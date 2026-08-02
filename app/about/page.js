import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ShieldCheck, Globe2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import siteConfig from "@/data/siteConfig";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Global Trading House — a bulk wholesale sourcing company working directly with leading US retailers to supply graded pallets worldwide.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent grading and honest communication on every order." },
  { icon: Target, title: "Reliability", desc: "Consistent inventory access and dependable freight coordination." },
  { icon: Globe2, title: "Global Reach", desc: "Serving buyers across 30+ countries with worldwide shipping." },
  { icon: Eye, title: "Clarity", desc: "Clear pricing and manifests, with no hidden surprises." },
];

export default function AboutPage() {
  return (
    <>
    
      <section className="bg-brand-navy py-20 sm:py-28">
        <div className="container-page text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">About {siteConfig.businessName}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            A Direct Line To Bulk Wholesale Inventory
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed">
            We connect buyers around the world with graded, bulk inventory sourced directly from
            leading US retailers.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
            <Image
              src="/about-img.png"
              alt="Global Trading House warehouse operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-heading mb-6">Built On Direct Retailer Relationships</h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              {siteConfig.businessName} was built around one goal: making genuine, bulk wholesale
              inventory accessible to buyers everywhere. We buy in bulk directly from leading US
              retailers — including major names like Walmart, Costco, Amazon, and Target — turning
              overstock, shelf-pulls, and customer returns into consistent wholesale opportunities.
            </p>
            <p className="text-navy-500 leading-relaxed mb-4">
              That direct access means our buyers get transparent grading, accurate manifests, and
              pricing that reflects genuine bulk-sourcing value — not inflated middleman markups.
            </p>
            <p className="text-navy-500 leading-relaxed">
              Today, we work with resellers, distributors, and investors across more than 30
              countries, supplying pallets across shoes, clothing, cosmetics, bags, and power tools —
              with new categories added as demand grows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="container-page grid sm:grid-cols-2 gap-8">
          <div className="card p-9">
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Our Mission</h3>
            <p className="text-navy-500 leading-relaxed">
              To make direct-from-retailer bulk sourcing simple, transparent, and accessible to
              buyers everywhere — regardless of order size or location.
            </p>
          </div>
          <div className="card p-9">
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 mb-3">Our Vision</h3>
            <p className="text-navy-500 leading-relaxed">
              To become a globally recognized name in bulk wholesale sourcing, known for reliability,
              honest grading, and long-term partnerships with buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            subtitle="The principles behind every pallet we ship."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-7 text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-red">
        <div className="container-page text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Want To Work With Us?
          </h2>
          <p className="text-white/90 text-lg mb-9 max-w-xl mx-auto">
            Explore our current products or reach out directly — we&rsquo;re available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-secondary !border-white">
              View Products <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
