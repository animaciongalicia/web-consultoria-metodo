import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Servicios de consultoría empresarial | Consultoría Método",
  description:
    "Servicios de consultoría para empresas: mejora de rentabilidad, captación de clientes, organización, procesos y acompañamiento estratégico. Presencial en A Coruña y Galicia, online en toda España.",
  keywords: [
    "servicios de consultoría",
    "servicios consultoría empresarial",
    "consultoría rentabilidad empresas",
    "captación de clientes consultoría",
    "mejora de procesos empresa",
    "consultoría estratégica empresas",
    "consultor de negocios servicios",
    "consultoría organización empresa",
    "servicios consultoría Galicia",
  ],
  openGraph: {
    title: "Servicios de consultoría empresarial | Consultoría Método",
    description:
      "Consultoría para empresas: rentabilidad, captación, procesos, organización y acompañamiento estratégico. +25 años de experiencia.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/servicios",
  },
};

const servicios = [
  {
    number: "01",
    title: "Mejora de rentabilidad",
    description:
      "Revisamos márgenes, precios, estructura de costes y modelo de ingresos. No se trata de vender más — se trata de que lo que vendes deje beneficio real. Muchas empresas facturan bien pero no ganan dinero. Ese es exactamente el problema que resolvemos.",
    ideal:
      "Empresas que facturan pero no ven el beneficio, que no saben dónde pierden dinero o que llevan años sin revisar precios.",
    link: "/blog/como-mejorar-rentabilidad-empresa",
    linkText: "Cómo mejorar la rentabilidad de tu empresa",
  },
  {
    number: "02",
    title: "Captación de clientes y sistema comercial",
    description:
      "Diseñamos un sistema de captación que funcione sin depender del boca a boca ni de la suerte. Desde la propuesta de valor hasta el proceso comercial completo, con seguimiento y medición.",
    ideal:
      "Negocios que dependen de uno o dos clientes grandes, que no tienen un proceso comercial definido o que invierten en marketing sin saber si funciona.",
    link: "/blog/como-conseguir-clientes-para-tu-negocio",
    linkText: "Cómo conseguir clientes para tu negocio",
  },
  {
    number: "03",
    title: "Organización y procesos",
    description:
      "Ordenamos el funcionamiento interno: roles, tareas, flujos de trabajo y herramientas. El objetivo es que el negocio funcione sin que todo dependa del dueño. Si no puedes irte una semana de vacaciones sin que todo se pare, hay un problema de organización.",
    ideal:
      "Empresas donde todo pasa por el dueño, que han crecido pero siguen funcionando como cuando empezaron, o que pierden tiempo en tareas que deberían estar resueltas.",
    link: "/blog/como-organizar-empresa-pequena-salir-autoempleo",
    linkText: "Cómo organizar tu empresa para dejar de ser autoempleo",
  },
  {
    number: "04",
    title: "Acompañamiento estratégico",
    description:
      "Sesiones periódicas para tomar decisiones con criterio. Revisamos indicadores, ajustamos el rumbo y resolvemos los problemas antes de que crezcan. Un punto de vista externo, profesional y sin compromisos emocionales con el negocio.",
    ideal:
      "Empresarios que se sienten solos en las decisiones, que necesitan alguien que les ayude a pensar con perspectiva, o que quieren mantener las mejoras conseguidas.",
    link: "/blog/cuando-contratar-un-consultor-de-negocios",
    linkText: "Cuándo contratar un consultor de negocios",
  },
  {
    number: "05",
    title: "Diagnóstico de negocio",
    description:
      "El punto de partida de todo. Analizamos la empresa desde fuera: modelo de negocio, números, captación, procesos y organización. Al final tienes un informe claro con qué está fallando y qué cambiar primero.",
    ideal:
      "Cualquier empresa que sienta que algo no funciona pero no sepa exactamente qué — o que quiera una visión externa antes de tomar decisiones importantes.",
    link: "/diagnostico-negocio",
    linkText: "Ver página de diagnóstico",
  },
];

const pasos = [
  {
    number: "1",
    title: "Conversación inicial gratuita",
    description:
      "30 minutos por teléfono o videollamada. Nos cuentas tu situación, te damos nuestra opinión honesta y decidimos juntos si tiene sentido trabajar.",
  },
  {
    number: "2",
    title: "Diagnóstico y propuesta",
    description:
      "Analizamos tu empresa, identificamos los problemas reales y te presentamos una propuesta cerrada: qué haríamos, en cuánto tiempo y a qué precio.",
  },
  {
    number: "3",
    title: "Trabajo y seguimiento",
    description:
      "Ejecutamos el plan con reuniones periódicas, medición de resultados y ajustes sobre la marcha. Sin letra pequeña, sin sorpresas.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: "Consultoría Método",
    url: "https://consultoriametodo.es",
  },
  name: "Servicios de consultoría empresarial",
  description:
    "Consultoría para empresas: mejora de rentabilidad, captación de clientes, organización de procesos y acompañamiento estratégico.",
  areaServed: {
    "@type": "Country",
    name: "España",
  },
  serviceType: [
    "Mejora de rentabilidad",
    "Captación de clientes",
    "Organización y procesos",
    "Acompañamiento estratégico",
    "Diagnóstico de negocio",
  ],
};

export default function Servicios() {
  const subject = encodeURIComponent("Consulta sobre servicios de consultoría");
  const body = encodeURIComponent(
    "Hola,\n\nMe interesa conocer más sobre vuestros servicios de consultoría.\n\nMi nombre: \nMi negocio: \nTeléfono: \n\n¿Qué me gustaría mejorar?\n\n"
  );
  const mailtoLink = `mailto:${SITE.email}?subject=${subject}&body=${body}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Servicios de consultoría para empresas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Trabajamos sobre los problemas reales de las empresas: rentabilidad,
            captación de clientes, organización interna y decisiones
            estratégicas. Sin humo, sin fórmulas mágicas y con resultados
            medibles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#servicios" className="btn-primary">
              Ver servicios
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-4 text-center text-gray-700 md:text-lg">
            <p>
              La mayoría de empresas no necesitan más ideas. Necesitan que
              alguien les ayude a{" "}
              <strong className="text-primary-800">
                ver lo que no están viendo
              </strong>{" "}
              y a tomar decisiones con criterio.
            </p>
            <p>
              Eso es lo que hacemos. Entramos en el negocio, lo analizamos desde
              fuera y trabajamos contigo para mejorar lo que realmente importa.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            En qué podemos ayudarte
          </h2>
          <p className="section-subtitle text-gray-600">
            Cada empresa tiene sus propios problemas, pero las áreas de mejora
            suelen ser las mismas.
          </p>

          <div className="mt-12 space-y-8">
            {servicios.map((s) => (
              <div
                key={s.number}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                    {s.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-gray-700">{s.description}</p>
                    <p className="mt-4 rounded-lg bg-accent-50 px-4 py-3 text-sm text-accent-800">
                      <strong>Ideal para:</strong> {s.ideal}
                    </p>
                    <a
                      href={s.link}
                      className="mt-4 inline-block text-sm font-semibold text-accent-600 underline hover:text-accent-700"
                    >
                      {s.linkText} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas a medida */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="section-heading text-gray-900">
            ¿Tu empresa tiene necesidades más amplias?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-lg">
            Para empresas con varios frentes abiertos diseñamos programas a
            medida que combinan análisis de rentabilidad, reestructuración
            comercial, organización interna y acompañamiento estratégico en un
            solo proyecto.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            La propuesta siempre es cerrada: sabes qué incluye, cuánto dura y
            qué cuesta antes de empezar.
          </p>
        </div>
      </section>

      {/* Cómo empezamos */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">Cómo empezamos</h2>
          <p className="section-subtitle text-gray-600">
            Tres pasos. Sin compromiso hasta que tengas la propuesta encima de
            la mesa.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            {pasos.map((p) => (
              <div
                key={p.number}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-xl font-extrabold text-primary-700">
                  {p.number}
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900">
        <div className="container-narrow text-center">
          <h2 className="section-heading text-white">
            El primer paso es una conversación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-200 md:text-lg">
            Cuéntanos tu situación. En 30 minutos te damos una opinión honesta
            sobre qué se puede mejorar en tu negocio — y si tiene sentido
            trabajar juntos.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={mailtoLink} className="btn-primary">
              Enviar email
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
            <a href={SITE.phoneLink} className="btn-outline-light">
              Llamar ahora
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white/10 p-6">
            <p className="text-primary-200">
              Al pulsar{" "}
              <strong className="text-white">
                &ldquo;Enviar email&rdquo;
              </strong>{" "}
              se abrirá tu aplicación de correo con un mensaje preparado. Solo
              rellena tus datos y envíalo.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-center text-2xl font-bold text-primary-900">
            Conoce más sobre cómo trabajamos
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="/diagnostico-negocio"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Punto de partida
              </p>
              <p className="mt-2 font-bold text-primary-900">
                Diagnóstico de negocio
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Análisis completo de tu empresa con informe y plan de acción.
              </p>
            </a>
            <a
              href="/metodo-herramientas"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Nuestro sistema
              </p>
              <p className="mt-2 font-bold text-primary-900">
                Método Rentabilismo
              </p>
              <p className="mt-1 text-sm text-gray-600">
                El método estructurado con el que analizamos y mejoramos
                empresas.
              </p>
            </a>
            <a
              href="/experiencia-sectores-casos"
              className="block rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-600">
                Resultados reales
              </p>
              <p className="mt-2 font-bold text-primary-900">
                Experiencia y casos
              </p>
              <p className="mt-1 text-sm text-gray-600">
                +25 años mejorando empresas en más de 15 sectores.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
