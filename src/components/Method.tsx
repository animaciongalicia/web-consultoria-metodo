import { METHOD } from "@/lib/content";

export default function Method() {
  return (
    <section id="metodo" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {METHOD.heading}
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center">
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
              className="rounded-lg border border-primary-100 bg-primary-50/50 p-6"
            >
              <h3 className="text-lg font-semibold text-primary-800">
                {pillar.title}
              </h3>
              <p className="mt-2 text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-primary-800">
          {METHOD.closing}
        </p>
      </div>
    </section>
  );
}
