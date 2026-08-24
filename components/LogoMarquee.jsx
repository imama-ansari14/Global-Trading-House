const brands = [
  { name: "Amazon", img: "/BrandLogos/Amazon.jpg" },
  { name: "Walmart", img: "/BrandLogos/Walmart.png" },
  { name: "Lowe's", img: "/BrandLogos/lowes.png" },
  { name: "Target", img: "/BrandLogos/target.jpg" },
  { name: "Wayfair", img: "/BrandLogos/Wayfair.jpg" },
  { name: "Home Depot", img: "/BrandLogos/home-depot1.jpg" },
];

export default function LogoMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max gap-10 animate-marquee hover:[animation-play-state:paused]">
        {[...brands, ...brands].map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            className="flex items-center justify-center h-20 w-40 shrink-0 bg-white rounded-xl shadow-card px-6"
          >
            <img
              src={b.img}
              alt={b.name}
              className="max-h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
