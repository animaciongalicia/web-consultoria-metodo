import { BENEFITS } from "@/lib/content";

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {BENEFITS.heading}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-lg font-bold text-primary-700">
                ✓
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
