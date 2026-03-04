import { SEO_LOCAL } from "@/lib/content";

export default function SeoLocal() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {SEO_LOCAL.heading}
        </h2>

        <div className="mt-6 space-y-4">
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
