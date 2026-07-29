import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card group overflow-hidden flex flex-col">
      <div className="relative h-52 w-full overflow-hidden bg-navy-900">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-extrabold text-xl text-navy-900 mb-2">{product.name}</h3>
        <p className="text-navy-500 text-sm leading-relaxed flex-1">{product.shortDesc}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-bold text-brand-red group-hover:gap-3 transition-all">
          View Details <ArrowRight size={17} />
        </span>
      </div>
    </Link>
  );
}
