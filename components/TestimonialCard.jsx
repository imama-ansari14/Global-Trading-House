import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card p-7 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red/20 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-navy-900 text-sm leading-tight">
              {testimonial.name}
            </p>
            <p className="text-navy-400 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={
              i < testimonial.rating
                ? "fill-amber-400 text-amber-400"
                : "text-navy-100"
            }
          />
        ))}
      </div>

      <p className="text-navy-600 text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </div>
  );
}
