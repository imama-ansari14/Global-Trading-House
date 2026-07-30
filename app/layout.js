import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import siteConfig from "@/data/siteConfig";

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.businessName} | Bulk Sourcing Direct From Leading US Retailers`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    "Global Trading House supplies bulk wholesale pallets — shoes, clothes, cosmetics, bags & power tools — sourced directly from leading US retailers like Walmart, Costco, Amazon & Target. Serving buyers worldwide.",
  keywords: [
    "wholesale pallets",
    "liquidation pallets",
    "bulk pallets USA",
    "buy pallets in bulk",
    "wholesale clothing pallets",
    "wholesale shoes pallets",
    "Global Trading House",
  ],
  openGraph: {
    title: `${siteConfig.businessName} | Bulk Sourcing Direct From Leading US Retailers`,
    description:
      "Bulk wholesale pallets sourced directly from leading US retailers. Shoes, clothes, cosmetics, bags & power tools — shipped worldwide.",
    url: siteConfig.domain,
    siteName: siteConfig.businessName,
    images: [{ url: "/logo.png", width: 800, height: 800 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description:
      "Bulk wholesale pallets sourced directly from leading US retailers. Shipped worldwide.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
