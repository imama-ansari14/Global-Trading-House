const products = [
  {
    slug: "shoes",
    name: "Shoes Pallets",
    shortDesc: "Branded footwear pallets sourced direct from major retailers.",
    img: "/shoes/orange-shoes.png",
    hoverImg: "/shoes/blue-shoes-close.png",
    headerImg: "/ProductsHeaders/shoes-header.png",
    gallery: [
      { img: "/shoes/white-shoes.png", hoverImg: "/shoes/white-shoes-close.png" },
      { img: "/shoes/brown-shoes.png", hoverImg: "/shoes/brown-shoes-close.png" },
      { img: "/shoes/orange-shoes.png", hoverImg: "/shoes/orange-shoes-close.png" },
      { img: "/shoes/boots.png", hoverImg: "/shoes/boots-close.png" },
      { img: "/shoes/sneakers.png", hoverImg: "/shoes/sneakers-close.png" },
      { img: "/shoes/blue-shoes.png", hoverImg: "/shoes/blue-shoes-close.png" },
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
    img: "/clothes/denim-jacket.png",
    hoverImg: "/clothes/brown-coat.png",
    headerImg: "/ProductsHeaders/clothes-header.png",
    gallery: [
      { img: "/clothes/hoodie.png", hoverImg: "/clothes/hoodie-zoomed.png" },
      { img: "/clothes/black-trouser.png", hoverImg: "/clothes/black-trouser-zoomed.png" },
      { img: "/clothes/t-shirt.png", hoverImg: "/clothes/t-shirt-folded.png" },
      { img: "/clothes/jeans-front.png", hoverImg: "/clothes/jeans-back.png" },
      { img: "/clothes/denim-jacket.png", hoverImg: "/clothes/denim-zoomed.png" },
      { img: "/clothes/brown-coat.png", hoverImg: "/clothes/brown-coat-zoomed.png" },
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
    img: "/cosmetics/cosmetic-6.png",
    hoverImg: "/cosmetics/cosmetic-6-alt.png",
    headerImg: "/ProductsHeaders/cosmetics-header.png",
    gallery: [
      { img: "/cosmetics/cosmetic-1.png", hoverImg: "/cosmetics/cosmetic-1-alt.png" },
      { img: "/cosmetics/cosmetic-2.png", hoverImg: "/cosmetics/cosmetic-2-alt.png" },
      { img: "/cosmetics/cosmetic-3.png", hoverImg: "/cosmetics/cosmetic-3-alt.png" },
      { img: "/cosmetics/cosmetic-4.png", hoverImg: "/cosmetics/cosmetic-4-alt.png" },
      { img: "/cosmetics/cosmetic-5.png", hoverImg: "/cosmetics/cosmetic-5-alt.png" },
      { img: "/cosmetics/cosmetic-6.png", hoverImg: "/cosmetics/cosmetic-6-alt.png" },
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
    img: "/bags/crossBody.png",
    hoverImg: "/bags/brown-bag.png",
    headerImg: "/ProductsHeaders/bags-header.png",
    gallery: [
      { img: "/bags/crossBody.png", hoverImg: "/bags/crossBody-open.png" },
      { img: "/bags/brown-bag.png", hoverImg: "/bags/brown-bag-open.png" },
      { img: "/bags/suitcase.png", hoverImg: "/bags/suitcase-open.png" },
      { img: "/bags/bagPack.png", hoverImg: "/bags/bagPack-open.png" },
      { img: "/bags/whiteBag.png", hoverImg: "/bags/whiteBag-open.png" },
      { img: "/bags/pouch.png", hoverImg: "/bags/pouch-open.png" },
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
    img: "/PowerTools/hammer.png",
    hoverImg: "/PowerTools/grinder.png",
    headerImg: "/ProductsHeaders/powerTools-header.png",
    gallery: [
      { img: "/PowerTools/blade.png", hoverImg: "/PowerTools/blade-zoomed.png" },
      { img: "/PowerTools/hammer.png", hoverImg: "/PowerTools/hammer-zoomed.png" },
      { img: "/PowerTools/drill.png", hoverImg: "/PowerTools/drill-zoomed.png" },
      { img: "/PowerTools/grinder.png", hoverImg: "/PowerTools/grinder-zoomed.png" },
      { img: "/PowerTools/miter-saw.png", hoverImg: "/PowerTools/miter-saw-zoomed.png" },
      { img: "/PowerTools/vacume.png", hoverImg: "/PowerTools/vacume-zoomed.png" },
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
  {
  slug: "accessories",
  name: "Accessories Pallets",
  shortDesc: "Electronics accessories pallets — cameras, earbuds, headphones, speakers & more.",
  img: "/accessories/speaker-1.png",
  hoverImg: "/accessories/camera-1.png",
  headerImg: "/ProductsHeaders/accessories-header.png",
  gallery: [
    { img: "/accessories/camera-1.png", hoverImg: "/accessories/camera-2.png" },
    { img: "/accessories/earbuds-1.png", hoverImg: "/accessories/earbuds-2.png" },
    { img: "/accessories/headphone-1.png", hoverImg: "/accessories/headphone-2.png" },
    { img: "/accessories/speaker-1.png", hoverImg: "/accessories/speaker-2.png" },
    { img: "/accessories/stand-1.png", hoverImg: "/accessories/stand-2.png" },
    { img: "/accessories/tripod-1.png", hoverImg: "/accessories/tripod-2.png" },
  ],
  description:
    "A mixed selection of electronics accessories — cameras, earbuds, headphones, speakers, phone/tablet stands, and tripods — sourced from major retailer overstock and returns. A strong add-on category for electronics resellers and general merchandise buyers.",
  grading: [
    { grade: "New / Overstock", note: "Unused, original packaging, current stock" },
    { grade: "Grade A", note: "Like-new, may be missing retail packaging" },
    { grade: "Grade B", note: "Light wear, fully functional, tested where possible" },
  ],
  faqs: [
    { q: "Are these name-brand electronics?", a: "Yes — inventory is sourced directly through retailer liquidation channels, no counterfeit or unbranded stock." },
    { q: "Are items tested before shipping?", a: "Condition grading is shared upfront; testing detail varies by pallet and is noted where available." },
    { q: "Can I mix accessory types in one order?", a: "Most pallets already contain a mixed assortment of accessory types — ask us about the current mix before ordering." },
  ],
},
];

export default products;