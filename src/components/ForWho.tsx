import { FOR_WHO } from "@/lib/content";

export default function ForWho() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {FOR_WHO.heading}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* For you */}
          <div className="rounded-lg border-2 border-primary-200 bg-primary-50/50 p-6">
            <h3 className="text-lg font-semibold text-primary-800">
              {FOR_WHO.forYou.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {FOR_WHO.forYou.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="mt-0.5 text-primary-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-700">
              {FOR_WHO.notForYou.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {FOR_WHO.notForYou.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-500">
                  <span className="mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
