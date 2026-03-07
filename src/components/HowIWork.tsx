import Image from "next/image";
import { HOW_I_WORK } from "@/lib/content";

export default function HowIWork() {
  return (
    <section id="como-trabajo" className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="section-heading text-gray-900">
          {HOW_I_WORK.heading}
        </h2>

        <div className="mx-auto mt-6 mb-10 overflow-hidden rounded-xl shadow-lg md:max-w-2xl">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/consultoria-analisis.jpg"
              alt="Sesión de trabajo y análisis de negocio — Consultoría Método"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        </div>

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

        {/* Case study */}
        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-primary-200 bg-primary-50 p-6 md:p-8">
          <h3 className="text-center text-lg font-semibold text-primary-800">
            {HOW_I_WORK.caseStudy.heading}
          </h3>
          <p className="mt-3 text-gray-700">{HOW_I_WORK.caseStudy.text}</p>
        </div>

        {/* Investment */}
        <div className="mx-auto mt-6 max-w-3xl rounded-lg border border-accent-200 bg-accent-50 p-6 md:p-8">
          <h3 className="text-center text-lg font-semibold text-accent-800">
            {HOW_I_WORK.investment.heading}
          </h3>
          <p className="mt-3 text-center text-gray-700">{HOW_I_WORK.investment.text}</p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/diagnostico-negocio"
            className="inline-flex items-center gap-2 text-primary-700 font-medium transition-colors hover:text-primary-900"
          >
            Ver programas de diagnóstico y mejora de rentabilidad
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
