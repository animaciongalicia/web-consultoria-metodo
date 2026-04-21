import type { Metadata } from "next";
import DiagnosticoContactForm from "@/components/DiagnosticoContactForm";

const FAQS = [
  {
    question: "¿Cuánto cuesta un diagnóstico de negocio?",
    answer:
      "Desde 500 € el diagnóstico puntual, 1.200 € el programa de mejora de rentabilidad (unos 2 meses) y 2.200 € el programa de transformación (unos 3 meses). Siempre con propuesta cerrada tras una primera conversación sin compromiso, para que sepas exactamente qué incluye y qué vas a pagar.",
  },
  {
    question: "¿Cuánto tiempo dura un diagnóstico empresarial?",
    answer:
      "La sesión inicial son 60-90 minutos. El diagnóstico completo, con informe y plan de acción, se entrega en 1-2 semanas. Los programas de mejora o transformación se desarrollan entre 2 y 3 meses, con reuniones periódicas de seguimiento.",
  },
  {
    question: "¿El diagnóstico es presencial u online?",
    answer:
      "Presencial en A Coruña ciudad y provincia (Santiago de Compostela, Ferrol, Betanzos, Carballo, Arteixo, Culleredo y resto de comarcas). Online en el resto de España. Muchos clientes combinan las dos modalidades: una primera visita presencial y después seguimiento por videollamada.",
  },
  {
    question: "¿Qué diferencia hay entre contratarte a ti y una asesoría o gestoría?",
    answer:
      "No hago contabilidad, impuestos ni laboral. Eso lo sigue llevando tu gestoría. Yo trabajo la rentabilidad, la captación de clientes, los precios, los procesos internos y la estrategia. Son tareas que una gestoría no hace y que muchas pymes tienen desatendidas.",
  },
  {
    question: "¿Cuándo empezaré a ver resultados?",
    answer:
      "Las primeras mejoras suelen notarse en 4-6 semanas, cuando se aplican las primeras decisiones del plan. Los resultados sólidos (más margen, mejor captación, procesos en orden) llegan entre los 2 y 3 meses. No vendo milagros — sí resultados medibles y sostenibles.",
  },
  {
    question: "¿En qué sectores tienes experiencia?",
    answer:
      "Más de 15 sectores: hostelería y restauración, comercio local, clínicas y salud, academias y formación, servicios profesionales, despachos, construcción, turismo, industria, eventos y otros. La mayoría de problemas de rentabilidad, precios y organización son comunes a cualquier pyme.",
  },
  {
    question: "¿Atiendes a empresas en toda la provincia de A Coruña?",
    answer:
      "Sí. Voy presencialmente a A Coruña ciudad, Santiago de Compostela, Ferrol, Betanzos, Carballo, Arteixo, Culleredo y cualquier punto de la provincia. Para resto de Galicia y España trabajo online con el mismo método y los mismos resultados.",
  },
  {
    question: "¿Y si después del diagnóstico no me convence seguir?",
    answer:
      "La primera llamada es gratis y sin compromiso. Si después del diagnóstico no ves valor, no tienes que seguir. En 25 años nunca he tenido que presionar a nadie para que contrate un programa completo — cuando el trabajo es bueno, se nota en la primera conversación.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title:
    "Diagnóstico y Mejora de Rentabilidad para Empresas | Consultor Empresarial — Consultoría Método",
  description:
    "Diagnóstico estratégico de negocio para empresas y pymes. Mejora la rentabilidad, el marketing y la gestión de tu empresa con un consultor empresarial con más de 25 años de experiencia.",
  keywords: [
    "consultor empresarial",
    "mejorar rentabilidad empresa",
    "diagnóstico negocio",
    "mejorar negocio",
    "consultoría para empresas",
    "mejorar empresa",
    "consultor de negocios",
  ],
  openGraph: {
    title: "Diagnóstico y Mejora de Rentabilidad para Empresas | Consultoría Método",
    description:
      "Diagnóstico estratégico de negocio para empresas y pymes. Mejora la rentabilidad, el marketing y la gestión de tu empresa.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/diagnostico-negocio",
  },
};

export default function DiagnosticoNegocio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Diagnóstico y mejora de rentabilidad para empresas
          </h1>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-left text-primary-100/90 md:text-lg">
            <p>
              Ayudo a empresarios y pymes a entender qué está fallando en su negocio y a
              aplicar mejoras reales en marketing, gestión y rentabilidad.
            </p>
            <p>
              Muchos negocios trabajan mucho, facturan, pero no consiguen la rentabilidad
              que deberían.
            </p>
            <p>
              A través de un diagnóstico estratégico del negocio se pueden detectar errores,
              oportunidades de mejora y decisiones que pueden cambiar el rumbo de una empresa.
            </p>
          </div>
          <div className="mt-10">
            <a href="#contacto-diagnostico" className="btn-primary">
              Solicitar diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Muchos negocios funcionan… pero no rinden como deberían
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-gray-600 md:text-lg">
            <p>
              En muchas empresas el problema no es el esfuerzo. El problema suele ser falta
              de claridad estratégica.
            </p>
            <p>Es muy habitual encontrar negocios con:</p>
          </div>
          <ul className="mx-auto mt-6 max-w-2xl space-y-3">
            {[
              "Precios mal calculados.",
              "Marketing poco eficaz.",
              "Dificultad para captar clientes de forma constante.",
              "Procesos poco optimizados.",
              "Mucho trabajo operativo y poca rentabilidad.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1 text-lg text-accent-500">&#10005;</span>
                <span className="md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-center text-gray-600 md:text-lg">
            Una mirada externa permite detectar rápidamente qué está fallando y qué
            decisiones pueden mejorar el negocio.
          </p>
        </div>
      </section>

      {/* SEÑALES / IDENTIFICACIÓN */}
      <section className="section-padding bg-gray-900">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Señales de que tu negocio puede necesitar un diagnóstico
          </h2>
          <p className="section-subtitle text-gray-300">
            Muchos empresarios sienten que su negocio podría funcionar mejor, pero no
            siempre saben exactamente dónde está el problema. Estas son algunas situaciones
            habituales.
          </p>
          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {[
              "Tu empresa trabaja mucho pero el beneficio es menor de lo esperado.",
              "Tienes clientes, pero no llegan de forma constante.",
              "El marketing no genera resultados claros.",
              "No sabes exactamente qué acciones generan ventas.",
              "El negocio funciona, pero da la sensación de que podría rendir mucho más.",
              "Hay demasiado trabajo operativo y poco tiempo para pensar estratégicamente.",
              "Los precios o márgenes parecen demasiado ajustados.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="mt-1 text-lg text-accent-400">&#10005;</span>
                <span className="md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 rounded-lg border-l-4 border-accent-500 bg-white/10 p-6">
            <p className="text-lg text-white">
              Si te reconoces en varias de estas situaciones, es posible que el problema no
              sea el esfuerzo sino la estructura del negocio.
            </p>
            <p className="text-gray-300">
              Y eso normalmente se detecta rápido cuando se analiza el negocio desde fuera.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo trabajo con las empresas
          </h2>
          <p className="section-subtitle text-gray-600">
            Mi trabajo consiste en analizar el negocio desde fuera, detectar oportunidades
            de mejora y ayudar a aplicar cambios que tengan impacto real.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            El proceso suele seguir tres pasos:
          </p>

          <div className="mx-auto mt-10 max-w-3xl space-y-8">
            {[
              {
                number: "01",
                title: "Diagnóstico del negocio",
                text: "Analizamos el modelo de negocio, la captación de clientes, los precios y los procesos. Se revisa todo con números y con la realidad del día a día de la empresa.",
              },
              {
                number: "02",
                title: "Identificación de problemas y oportunidades",
                text: "Se detectan los puntos donde el negocio pierde rentabilidad o eficiencia. Muchas veces son cosas que el empresario intuye pero no ha podido concretar ni cuantificar.",
              },
              {
                number: "03",
                title: "Aplicación de mejoras",
                text: "Se aplican cambios en marketing, gestión o estructura del negocio para mejorar resultados. Cambios prácticos, medibles y con impacto directo en la cuenta de resultados.",
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-gray-600 md:text-lg">
            Cada empresa es diferente, por lo que el trabajo se adapta al tamaño del
            negocio y a sus objetivos.
          </p>
        </div>
      </section>

      {/* PROGRAMAS DE TRABAJO */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Programas de trabajo
          </h2>
          <p className="section-subtitle text-gray-600">
            Estos son los formatos habituales de trabajo con empresas. Los proyectos pueden
            adaptarse según el tamaño de la empresa y el alcance del trabajo.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Pack 1 */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Diagnóstico Estratégico del Negocio
              </h3>
              <p className="mt-2 text-2xl font-extrabold text-primary-700">
                Desde 500 €
              </p>
              <p className="mt-4 text-gray-600">
                Sesión estratégica de análisis del negocio para detectar problemas,
                oportunidades y posibles mejoras.
              </p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Incluye
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {[
                  "Reunión estratégica de 60–90 minutos",
                  "Análisis del modelo de negocio",
                  "Revisión del sistema de captación de clientes",
                  "Análisis de precios y rentabilidad",
                  "Identificación de errores y oportunidades",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-primary-600">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-medium text-primary-800">
                  <strong>Resultado:</strong> El empresario obtiene claridad sobre qué está
                  fallando y qué acciones pueden mejorar el negocio.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a href="#contacto-diagnostico" className="btn-primary w-full text-center">
                  Solicitar diagnóstico
                </a>
              </div>
            </div>

            {/* Pack 2 */}
            <div className="flex flex-col rounded-xl border-2 border-primary-300 bg-white p-8 shadow-lg">
              <div className="mb-3 inline-flex self-start rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                Más solicitado
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Programa de Mejora de Rentabilidad
              </h3>
              <p className="mt-2 text-2xl font-extrabold text-primary-700">
                Desde 1.200 €
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Duración aproximada: 2 meses
              </p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Incluye
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {[
                  "Varias sesiones estratégicas de trabajo",
                  "Análisis del modelo de captación de clientes",
                  "Mejora de precios y márgenes",
                  "Optimización de procesos",
                  "Revisión de marketing y posicionamiento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-primary-600">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-medium text-primary-800">
                  <strong>Objetivo:</strong> Aplicar mejoras prácticas que aumenten la
                  eficiencia del negocio y su rentabilidad.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a href="#contacto-diagnostico" className="btn-primary w-full text-center">
                  Solicitar información
                </a>
              </div>
            </div>

            {/* Pack 3 */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-900">
                Programa de Transformación del Negocio
              </h3>
              <p className="mt-2 text-2xl font-extrabold text-primary-700">
                Desde 2.200 €
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Duración aproximada: 3 meses
              </p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Incluye
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {[
                  "Trabajo estratégico profundo sobre el negocio",
                  "Rediseño del modelo de captación de clientes",
                  "Optimización de precios y estructura de ingresos",
                  "Mejora de procesos y organización",
                  "Definición de estrategia de crecimiento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-primary-600">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="text-sm font-medium text-primary-800">
                  <strong>Objetivo:</strong> Reestructurar áreas clave del negocio para
                  mejorar su rendimiento y su capacidad de crecimiento.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a href="#contacto-diagnostico" className="btn-primary w-full text-center">
                  Solicitar información
                </a>
              </div>
            </div>
          </div>

          {/* Nota sobre proyectos */}
          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 text-center md:p-8">
            <p className="text-gray-600 md:text-lg">
              Cada empresa es diferente. Algunos negocios necesitan únicamente un diagnóstico
              puntual, mientras que otros requieren un trabajo más profundo durante varios
              meses. Por eso los programas se ofrecen desde esos importes y pueden adaptarse
              según el tamaño de la empresa y el alcance del trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — stats */}
      <section className="border-y border-primary-800 bg-primary-950 px-6 py-14">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "+25", label: "años de experiencia" },
              { number: "+200", label: "empresas asesoradas" },
              { number: "+15", label: "sectores diferentes" },
              { number: "100%", label: "enfoque práctico" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-accent-400 md:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-sm font-medium text-primary-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section-padding bg-primary-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Resultados reales de empresas reales
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "En solo 3 meses aumentamos la facturación un 50%. El diagnóstico nos mostró errores que teníamos delante y no veíamos.",
                author: "Carlos",
                business: "Hostelería en A Coruña",
              },
              {
                quote: "Dejé de gastar en acciones de marketing sin retorno. Con un plan claro de captación ahora tengo agenda completa y clientes recurrentes.",
                author: "María",
                business: "Profesional independiente en Galicia",
              },
              {
                quote: "Nos ayudó a dejar de hacer de todo y centrarnos en lo rentable. Mejores clientes, mejores márgenes y menos estrés.",
                author: "Eventos Norte",
                business: "Empresa de servicios en Galicia",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="flex flex-col rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
              >
                <p className="flex-1 text-gray-700 md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-primary-800">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.business}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-3xl font-extrabold text-primary-900 md:text-4xl">
            Preguntas frecuentes sobre el diagnóstico
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 md:text-lg">
            Las dudas que más me llegan antes de contratar un diagnóstico o un programa de mejora.
            Si tienes otra pregunta, escríbeme por WhatsApp y te respondo.
          </p>
          <div className="mt-10 space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-5 open:border-accent-300 open:bg-accent-50/40"
              >
                <summary className="cursor-pointer list-none font-semibold text-primary-900 md:text-lg">
                  <span className="mr-2 text-accent-600 group-open:rotate-90 inline-block transition-transform">
                    ▸
                  </span>
                  {faq.question}
                </summary>
                <p className="mt-3 pl-6 text-gray-700 md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to home */}
      <section className="bg-accent-50 border-y border-accent-200 py-12">
        <div className="container-narrow text-center">
          <p className="text-lg text-gray-700 md:text-xl">
            Conoce más sobre nuestra{" "}
            <strong className="text-primary-800">consultoría de negocios presencial en Galicia y online en toda España</strong>,
            el <strong className="text-primary-800">Método Rentabilismo</strong> y cómo trabajamos
            con pymes y empresas.
          </p>
          <a
            href="/"
            className="btn-primary mt-6 inline-block"
          >
            Volver a la página principal
          </a>
        </div>
      </section>

      {/* CTA FINAL + CONTACTO */}
      <DiagnosticoContactForm />
    </>
  );
}
