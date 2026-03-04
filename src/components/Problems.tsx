import { PROBLEMS } from "@/lib/content";

export default function Problems() {
  return (
    <section id="problemas" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {PROBLEMS.heading}
        </h2>

        <ul className="mt-8 space-y-4">
          {PROBLEMS.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="mt-1 text-xl text-accent-500">✗</span>
              <span className="text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-lg border-l-4 border-primary-600 bg-primary-50 p-6">
          <p className="text-lg font-semibold text-primary-900">
            {PROBLEMS.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
