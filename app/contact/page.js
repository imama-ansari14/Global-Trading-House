import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import siteConfig from "@/data/siteConfig";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Global Trading House for bulk pallet inquiries, pricing, and shipping quotes. Available 24/7 via WhatsApp, phone, or email.",
};

const infoItems = [
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:+${siteConfig.phoneRaw}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Address", value: siteConfig.address, href: null },
  { icon: Clock, label: "Business Hours", value: siteConfig.hours, href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="/pagesHeader/contact-header.png"
          alt="contact image"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay grey */}
        <div className="absolute inset-0 bg-gray-800/50" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            INQUIRY FORM
          </h1>
          <p className="text-navy-100 text-lg leading-relaxed">
            Have a question about pricing, a manifest, or shipping? We&rsquo;re available 24/7
            reach out and we&rsquo;ll get back to you quickly.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid lg:grid-cols-[1fr,1.3fr] gap-14">
          {/* Info column */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6">Contact Information</h2>
            <div className="space-y-5 mb-8">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 card p-5">
                  <div className="w-11 h-11 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-navy-400 text-xs font-bold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-navy-900 font-semibold hover:text-brand-red transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-900 font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full !bg-[#25D366] hover:!bg-[#1ebe5a]"
            >
              <MessageCircle size={20} />
              Chat With Us on WhatsApp
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-card border border-navy-100 h-64">
              <iframe
                title="Global Trading House location"
                src="https://www.google.com/maps?q=Washington+DC&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="card p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-2">Send Us a Message</h2>
            <p className="text-navy-500 mb-8">
              Fill out the form and our team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
