import { HOW_I_WORK } from "@/lib/content";

export default function HowIWork() {
  return (
    <section id="como-trabajo" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {HOW_I_WORK.heading}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          {HOW_I_WORK.steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                {step.number}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-accent-200 bg-accent-50 p-6 md:p-8">
          <h3 className="text-center text-lg font-semibold text-accent-800">
            {HOW_I_WORK.investment.heading}
          </h3>
          <p className="mt-3 text-center text-gray-700">{HOW_I_WORK.investment.text}</p>
        </div>
      </div>
    </section>
  );
}
