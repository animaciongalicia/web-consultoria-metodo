import { HOW_I_WORK } from "@/lib/content";

export default function HowIWork() {
  return (
    <section id="como-trabajo" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {HOW_I_WORK.heading}
        </h2>

        <div className="mt-10 space-y-8">
          {HOW_I_WORK.steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-800">
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

        <div className="mt-12 rounded-lg bg-primary-50 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-primary-900">
            {HOW_I_WORK.investment.heading}
          </h3>
          <p className="mt-3 text-gray-700">{HOW_I_WORK.investment.text}</p>
        </div>
      </div>
    </section>
  );
}
