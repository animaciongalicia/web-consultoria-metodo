import { METHOD } from "@/lib/content";

export default function Method() {
  return (
    <section id="metodo" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {METHOD.heading}
        </h2>

        <div className="mt-6 space-y-4">
          {METHOD.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 md:text-lg">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {METHOD.pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-primary-800">
                {pillar.title}
              </h3>
              <p className="mt-2 text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-medium text-gray-800">
          {METHOD.closing}
        </p>
      </div>
    </section>
  );
}
