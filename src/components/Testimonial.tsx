import { TESTIMONIALS } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          Lo que dicen nuestros clientes
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
            >
              <p className="flex-1 text-gray-700 md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-gray-100 pt-4">
                <p className="font-semibold text-primary-800">{t.author}</p>
                <p className="text-sm text-gray-500">{t.business}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
