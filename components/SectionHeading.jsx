export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="mt-4 text-navy-500 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
