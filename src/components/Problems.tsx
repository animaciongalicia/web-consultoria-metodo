import { PROBLEMS } from "@/lib/content";

export default function Problems() {
  return (
    <section id="problemas" className="section-padding bg-gray-900">
      <div className="container-narrow">
        <h2 className="section-heading text-white">
          {PROBLEMS.heading}
        </h2>

        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {PROBLEMS.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <span className="mt-1 text-lg text-accent-400">&#10005;</span>
              <span className="text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-2xl rounded-lg border-l-4 border-accent-500 bg-white/10 p-6">
          <p className="text-center text-lg font-semibold text-white">
            {PROBLEMS.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
