// 📦 EDIT THIS FILE to add/update products.
// To add product #6-10: copy an object below, change the fields, done —
// a page is generated automatically at /products/your-slug.

const products = [
  {
    slug: "shoes",
    name: "Shoes Pallets",
    shortDesc: "Branded footwear pallets sourced direct from major retailers.",
    img: "https://placehold.co/800x600/0A1930/FFFFFF?text=Shoes+Pallets",
    headerImg: "/headers/shoes-header.png",
    gallery: [
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Shoes+1",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Shoes+2",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Shoes+3",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Shoes+4",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Shoes+5",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Shoes+6",
    ],
    description:
      "Our shoe pallets feature a mix of branded athletic, casual, and formal footwear sourced directly from leading US retailers. Each pallet is manifested by category and size run, giving buyers a clear picture of what they're purchasing before it ships.",
    grading: [
      { grade: "New / Overstock", note: "Unused, original packaging, current-season stock" },
      { grade: "Grade A", note: "Like-new, may be missing retail tags or box" },
      { grade: "Grade B", note: "Light shelf wear, fully functional, resale-ready" },
    ],
    faqs: [
      { q: "Are these authentic brand-name shoes?", a: "Yes. All inventory is sourced directly through retailer liquidation channels — no counterfeit or replica stock." },
      { q: "Can I request a specific size run?", a: "Size runs vary by pallet. Send us a message and we'll match you with the closest available manifest." },
      { q: "Do you ship internationally?", a: "Yes, we ship worldwide. Reach out with your destination for a freight quote." },
    ],
  },
  {
    slug: "clothes",
    name: "Clothes Pallets",
    shortDesc: "Mixed apparel pallets — men's, women's & kids' clothing.",
    img: "/clothes/hoodie.png",
    hoverImg: "/clothes/hoodie-zoom.png",
    headerImg: "/headers/clothes-header.png",
    gallery: [
      "/clothes/hoodie.png",
      "/clothes/black-trouser.png",
      "/clothes/t-shirt.png",
      "/clothes/jeans-front.png",
      "/clothes/",
      "/clothes/",
    ],
    description:
      "A broad selection of men's, women's, and kids' apparel — seasonal overstock, shelf pulls, and customer returns from top US retailers. Great margins for resale, thrift, and bin-store buyers.",
    grading: [
      { grade: "New / Overstock", note: "Unsold seasonal stock, tags attached" },
      { grade: "Grade A", note: "Like-new, tags may be removed" },
      { grade: "Grade B", note: "Mixed condition, sold as-is by the pallet" },
    ],
    faqs: [
      { q: "Can I choose the clothing category mix?", a: "We can lean a manifest toward men's, women's, or kids' apparel depending on availability — ask us when you inquire." },
      { q: "What's the typical unit count per pallet?", a: "This varies by pallet weight and item type. We'll confirm approximate unit counts before you commit." },
      { q: "Is there a minimum order?", a: "Minimums depend on current stock. Message us and we'll walk you through current options." },
    ],
  },
  {
    slug: "cosmetics",
    name: "Cosmetics Pallets",
    shortDesc: "Beauty & personal care pallets from name-brand suppliers.",
    img: "https://placehold.co/800x600/0A1930/FFFFFF?text=Cosmetics+Pallets",
    headerImg: "/headers/cosmetics-header.png",
    gallery: [
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Cosmetics+1",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Cosmetics+2",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Cosmetics+3",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Cosmetics+4",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Cosmetics+5",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Cosmetics+6",
    ],
    description:
      "Name-brand skincare, makeup, haircare, and personal-care overstock sourced from major retail liquidation. Ideal for resale platforms, discount retailers, and beauty supply stores.",
    grading: [
      { grade: "New / Overstock", note: "Sealed, unused, within shelf life" },
      { grade: "Grade A", note: "Like-new, outer packaging may be opened" },
      { grade: "Grade B", note: "Shelf-pull condition, functional product" },
    ],
    faqs: [
      { q: "Are expiry dates provided?", a: "Where available, we share expiry information ahead of purchase so you know exactly what you're getting." },
      { q: "Are these sealed/unused products?", a: "Most pallets are new or shelf-pull condition — grading details are shared per pallet before you buy." },
      { q: "Can I get a manifest before purchase?", a: "Yes, a manifest or sample listing is available on request for most pallets." },
    ],
  },
  {
    slug: "bags",
    name: "Bags Pallets",
    shortDesc: "Handbags, backpacks & luggage — branded overstock lots.",
    img: "https://placehold.co/800x600/0A1930/FFFFFF?text=Bags+Pallets",
    hoverImg: "https://placehold.co/800x600/132A4D/FFFFFF?text=Bags+Pallets", // TODO: replace once real photos are added to /public/bags/
    headerImg: "/headers/bags-header.png",
    gallery: [
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Bags+1",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Bags+2",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Bags+3",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Bags+4",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Bags+5",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Bags+6",
    ],
    description:
      "Handbags, backpacks, travel bags, and luggage sourced from leading retailers' overstock and return channels. A strong category for resale marketplaces and discount storefronts.",
    grading: [
      { grade: "New / Overstock", note: "Unused, tags attached where applicable" },
      { grade: "Grade A", note: "Like-new, minor packaging wear" },
      { grade: "Grade B", note: "Light cosmetic wear, fully usable" },
    ],
    faqs: [
      { q: "Are designer brands included?", a: "Availability varies by pallet — ask us about the current mix before ordering." },
      { q: "Can I mix bag types in one order?", a: "Most pallets already contain a mixed assortment of bag types and brands." },
      { q: "How is freight handled?", a: "We coordinate freight quotes based on your delivery location once you confirm an order." },
    ],
  },
  {
    slug: "power-tools",
    name: "Power Tools Pallets",
    shortDesc: "Branded power tools & equipment — bulk liquidation lots.",
    img: "https://placehold.co/800x600/0A1930/FFFFFF?text=Power+Tools",
    headerImg: "/headers/powerTools-header.png",
    gallery: [
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Tools+1",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Tools+2",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Tools+3",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Tools+4",
      "https://placehold.co/700x500/0A1930/FFFFFF?text=Tools+5",
      "https://placehold.co/700x500/132A4D/FFFFFF?text=Tools+6",
    ],
    description:
      "Power tools, hand tools, and hardware equipment sourced from major retailer liquidation and customer returns. A high-demand category for resale, auction, and hardware resellers.",
    grading: [
      { grade: "New / Overstock", note: "Unused, in original box where available" },
      { grade: "Grade A", note: "Like-new, tested where possible" },
      { grade: "Grade B", note: "Functional, may show cosmetic wear" },
    ],
    faqs: [
      { q: "Are the tools tested before shipping?", a: "Condition grading is shared upfront; testing detail varies by pallet and is noted where available." },
      { q: "Do pallets include batteries/chargers?", a: "This varies by item — we'll confirm what's included per pallet before you order." },
      { q: "What brands are typically included?", a: "A mix of well-known power tool brands, depending on current retailer liquidation stock." },
    ],
  },
];

export default products;