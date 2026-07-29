import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container-page text-center max-w-lg mx-auto">
        <p className="text-brand-red font-extrabold text-7xl mb-4">404</p>
        <h1 className="text-3xl font-extrabold text-navy-900 mb-4">Page Not Found</h1>
        <p className="text-navy-500 mb-9">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Link href="/" className="btn-primary">
          Back To Home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
