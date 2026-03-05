import { BENEFITS } from "@/lib/content";

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {BENEFITS.heading}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                &#10003;
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
