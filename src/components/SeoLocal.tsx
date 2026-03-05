import { SEO_LOCAL } from "@/lib/content";

export default function SeoLocal() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {SEO_LOCAL.heading}
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
          {SEO_LOCAL.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 md:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
