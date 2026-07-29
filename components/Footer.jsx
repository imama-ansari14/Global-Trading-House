import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";
import siteConfig from "@/data/siteConfig";
import products from "@/data/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt={`${siteConfig.businessName} logo`} width={48} height={48} className="rounded-full" />
            <span className="font-extrabold text-lg leading-tight">{siteConfig.businessName}</span>
          </div>
          <p className="text-navy-200 text-sm leading-relaxed">
            Bulk wholesale sourcing, direct from leading US retailers. Shipping worldwide, backed by clear communication and reliable freight.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={siteConfig.socials.facebook} aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Facebook size={17} />
            </a>
            <a href={siteConfig.socials.instagram} aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Instagram size={17} />
            </a>
            <a href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-navy-200 mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-brand-red transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Products</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-navy-200 mb-4">Our Products</h4>
          <ul className="space-y-2.5 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-brand-red transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-navy-200 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-200">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <a href={`tel:+${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">{siteConfig.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-brand-red" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-navy-300">
          <p>© {year} {siteConfig.businessName}. All rights reserved.</p>
          <p>Sourced directly from leading US retailers — shipped worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
