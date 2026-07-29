import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card p-7 flex flex-col h-full">
      <Quote className="text-brand-red/30 mb-3" size={32} />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "fill-brand-red text-brand-red" : "text-navy-100"}
          />
        ))}
      </div>
      <p className="text-navy-700 text-sm leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5 pt-5 border-t border-navy-50">
        <p className="font-bold text-navy-900">{testimonial.name}</p>
        <p className="text-navy-400 text-xs">{testimonial.role}</p>
      </div>
    </div>
  );
}
