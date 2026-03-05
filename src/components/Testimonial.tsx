import { TESTIMONIAL } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-narrow text-center">
        <blockquote className="mx-auto max-w-3xl">
          <p className="text-xl font-medium text-gray-800 md:text-2xl">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
          <footer className="mt-6">
            <p className="font-semibold text-primary-800">
              {TESTIMONIAL.author}
            </p>
            <p className="text-sm text-gray-500">{TESTIMONIAL.business}</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
