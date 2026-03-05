import { FOR_WHO } from "@/lib/content";

export default function ForWho() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {FOR_WHO.heading}
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* For you */}
          <div className="rounded-lg border-2 border-primary-300 bg-primary-50 p-8">
            <h3 className="text-xl font-bold text-primary-800">
              {FOR_WHO.forYou.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {FOR_WHO.forYou.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 font-bold text-primary-600">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="rounded-lg border-2 border-gray-200 bg-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-500">
              {FOR_WHO.notForYou.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {FOR_WHO.notForYou.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <span className="mt-0.5 font-bold">&#10005;</span>
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
