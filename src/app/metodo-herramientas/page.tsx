import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Método Rentabilismo — Consultoría Metodológica para Mejorar tu Empresa | Consultoría Método",
  description:
    "Sistema estructurado de consultoría metodológica para analizar y mejorar la rentabilidad de pymes. Gestión de procesos, diagnóstico empresarial y plan de acción. Presencial en A Coruña y Galicia, online en toda España.",
  keywords: [
    "consultoría metodológica",
    "método mejora empresarial",
    "gestión de procesos empresariales",
    "mejora de rentabilidad pyme",
    "herramientas diagnóstico empresarial",
    "consultoría estratégica pymes",
    "método rentabilismo",
    "optimización procesos negocio",
    "consultor gestión empresarial Galicia",
  ],
  openGraph: {
    title: "Método Rentabilismo — Consultoría Metodológica para Empresas",
    description:
      "Sistema de consultoría para mejorar procesos, rentabilidad y gestión de pymes. Herramientas gratuitas de diagnóstico.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/metodo-herramientas",
  },
};

const fases = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Analizo la situación real de la empresa: números, procesos, clientes, equipo, márgenes y estructura. Sin suposiciones. Con datos.",
  },
  {
    number: "02",
    title: "Detección de problemas y oportunidades",
    description:
      "Identifico qué frena el negocio y qué oportunidades no se están aprovechando. Muchas veces el problema principal no es el que el empresario cree.",
  },
  {
    number: "03",
    title: "Plan de acción",
    description:
      "Defino qué hacer, en qué orden y con qué recursos. Un plan concreto, no un documento de 80 páginas que nadie va a leer.",
  },
  {
    number: "04",
    title: "Implementación",
    description:
      "Se ejecutan las acciones acordadas. Con plazos, responsables y seguimiento. No se queda en el cajón.",
  },
  {
    number: "05",
    title: "Seguimiento y ajuste",
    description:
      "Reviso avances, mido resultados y ajusto lo que haga falta. Un negocio no se mejora con una reunión, se mejora con constancia.",
  },
];

const areasAnalisis = [
  {
    title: "Captación de clientes",
    description: "Cómo llegan, cuántos llegan y qué se puede mejorar.",
  },
  {
    title: "Posicionamiento comercial",
    description: "Qué percibe el mercado y si coincide con lo que ofreces.",
  },
  {
    title: "Propuesta de valor",
    description: "Por qué deberían elegirte a ti y no a otro.",
  },
  {
    title: "Precios y márgenes",
    description: "Si lo que cobras tiene sentido con lo que te cuesta.",
  },
  {
    title: "Organización y procesos",
    description: "Si el negocio funciona o si todo depende de una persona.",
  },
  {
    title: "Rentabilidad real",
    description: "No la que crees, la que dicen los números.",
  },
  {
    title: "Dependencia del dueño",
    description: "Si el negocio puede funcionar sin que tú estés encima de todo.",
  },
  {
    title: "Oportunidades ocultas",
    description: "Lo que no se ve desde dentro pero se detecta desde fuera.",
  },
];

const herramientas = [
  {
    title: "Diagnóstico empresarial",
    url: "https://rentabilismo.online/",
    description:
      "Revisa de forma inicial distintas áreas del negocio: ventas, organización, rentabilidad y estructura. Detecta puntos débiles y abre una primera reflexión sobre qué mejorar.",
    cta: "Hacer diagnóstico gratuito",
  },
  {
    title: "Cliente ideal y propuesta comercial",
    url: "https://www.avatar-rentabilismo.com/",
    description:
      "Define mejor el cliente ideal, entiende a quién vendes y cómo comunicar tu oferta con más precisión. Si no sabes a quién le hablas, es difícil que te escuchen.",
    cta: "Definir mi cliente ideal",
  },
  {
    title: "Validación de ideas de negocio",
    url: "https://www.idea-rentabilismo.com/",
    description:
      "Para empresarios y emprendedores que quieren validar una idea o revisar si una nueva línea de negocio tiene sentido antes de invertir tiempo o dinero.",
    cta: "Validar mi idea",
  },
];

const sectoresCaptacion = [
  "Gimnasios",
  "Salas de yoga",
  "Abogados matrimonialistas",
  "Empresas de gestión de deudas",
  "Psicólogos",
  "Fisioterapeutas",
  "Empresas de eventos y despedidas",
  "Animación de bodas y eventos",
  "Agencias de viajes",
];

const beneficiosMetodo = [
  "Claridad sobre qué hacer y qué dejar de hacer",
  "Foco en lo que realmente mueve la rentabilidad",
  "Detección de errores que pasan desapercibidos",
  "Prioridades claras para no dispersarse",
  "Decisiones tomadas con criterio, no con prisa",
  "Mejora de rentabilidad con los recursos existentes",
  "Mejor captación de clientes",
  "Organización que no depende solo del dueño",
];

const noEs = [
  "No es consultoría vacía ni informes decorativos",
  "No es formación genérica ni cursos motivacionales",
  "No es una gestoría ni asesoría contable",
  "No es solo dar ideas y marcharse",
];

export default function MetodoHerramientas() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">

            Consultoría metodológica para mejorar la rentabilidad y gestión de tu empresa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            La mejora empresarial no consiste en aplicar ideas al azar. Consiste en
            analizar, priorizar y actuar con criterio. Trabajo con un enfoque
            estructurado de gestión de procesos para detectar problemas, encontrar oportunidades y
            aplicar mejoras reales.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico
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

      {/* Cómo trabajo */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo trabajo: gestión de procesos y mejora empresarial paso a paso
          </h2>
          <p className="section-subtitle text-gray-600">
            Un proceso claro, con fases definidas y objetivos concretos en cada
            etapa.
          </p>

          <div className="mt-12 space-y-6">
            {fases.map((fase) => (
              <div
                key={fase.number}
                className="flex gap-5 rounded-lg border border-gray-100 bg-gray-50 p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/30 md:gap-6 md:p-6"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-base font-bold text-white md:h-12 md:w-12 md:text-lg">
                  {fase.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {fase.title}
                  </h3>
                  <p className="mt-1.5 text-gray-600">{fase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué analizo */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué analizo en una empresa
          </h2>
          <p className="section-subtitle text-gray-600">
            Cada negocio es diferente, pero hay áreas que siempre reviso porque
            son las que más impacto tienen en la rentabilidad.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areasAnalisis.map((area, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-white p-5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="font-bold text-primary-600"
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  <h3 className="font-semibold text-gray-900">{area.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-500">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Herramientas iniciales para analizar negocios
          </h2>
          <p className="section-subtitle text-gray-600">
            He desarrollado herramientas propias que permiten hacer un primer
            análisis antes de empezar a trabajar juntos. Son gratuitas y están
            pensadas para que el empresario empiece a reflexionar sobre su negocio.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {herramientas.map((h, i) => (
              <div
                key={i}
                className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-lg font-bold text-primary-700">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-primary-800">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-gray-600">{h.description}</p>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 text-center text-sm"
                >
                  {h.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas de captación */}
      <section className="section-padding bg-primary-900">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Herramientas específicas de captación de clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">
            Además de las herramientas de análisis, desarrollo sistemas
            orientados a detectar oportunidades de captación y ayudar a distintos
            tipos de negocio a atraer clientes de forma práctica.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-lg border-l-4 border-accent-500 bg-white/10 p-6">
              <p className="text-lg font-semibold text-white">
                Soluciones de captación aplicadas a sectores concretos
              </p>
              <p className="mt-2 text-gray-300">
                No es teoría de marketing. Son herramientas y sistemas pensados
                para negocios reales que necesitan clientes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {sectoresCaptacion.map((sector, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white/10 px-4 py-3 text-center text-sm font-medium text-gray-200 transition-colors hover:bg-white/15"
                >
                  {sector}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-gray-400">
              Desarrollo herramientas prácticas, pienso en captación real y
              trabajo con soluciones orientadas a negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Qué obtiene una empresa */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué obtiene una empresa al trabajar con este método
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {beneficiosMetodo.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <span
                  className="mt-0.5 font-bold text-primary-600"
                  aria-hidden="true"
                >
                  &#10003;
                </span>
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué NO es */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué NO es este método
          </h2>
          <p className="section-subtitle text-gray-600">
            Conviene dejarlo claro para no perder el tiempo de nadie.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-3">
              {noEs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/50 p-4"
                >
                  <span
                    className="mt-0.5 font-bold text-red-400"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span className="text-gray-700 md:text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-4">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 font-bold text-primary-600"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="font-medium text-primary-800 md:text-lg">
                  Es trabajo aplicado a negocio real, con seguimiento y
                  resultados medibles.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres analizar tu negocio con criterio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Si quieres detectar mejoras reales en tu empresa, solicita un
            diagnóstico inicial. Sin compromiso, sin venta agresiva.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/diagnostico-negocio" className="btn-primary">
              Solicitar diagnóstico
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="/" className="transition-colors hover:text-accent-300">
              ← Inicio
            </a>
            <a
              href="/experiencia-sectores-casos"
              className="transition-colors hover:text-accent-300"
            >
              Experiencia y casos →
            </a>
            <a
              href="/colaboradores"
              className="transition-colors hover:text-accent-300"
            >
              Colaboradores →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
