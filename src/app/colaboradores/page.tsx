import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Colaboradores — Profesionales con los que trabajamos | Consultoría Método",
  description:
    "Consultoría Método complementa a gestorías, asesorías, abogados y despachos profesionales. Mejora de rentabilidad, captación y organización para sus clientes empresa. Solicita una reunión.",
  alternates: {
    canonical: "https://consultoriametodo.es/colaboradores",
  },
};

const perfiles = [
  {
    title: "Gestorías",
    description:
      "Llevan la contabilidad y la fiscalidad de sus clientes. Yo les ayudo a mejorar la rentabilidad, la captación y la organización del negocio.",
  },
  {
    title: "Asesorías",
    description:
      "Asesoran en materia fiscal, laboral o mercantil. Yo trabajo en la mejora operativa y comercial de la empresa.",
  },
  {
    title: "Despachos laborales",
    description:
      "Gestionan nóminas, contratos y relaciones laborales. Yo ayudo a que el negocio funcione mejor para que pueda sostener y hacer crecer su equipo.",
  },
  {
    title: "Abogados mercantiles",
    description:
      "Trabajan en el marco legal de la empresa. Yo trabajo en la estrategia, los procesos y la rentabilidad del día a día.",
  },
  {
    title: "Consultores fiscales",
    description:
      "Optimizan la carga fiscal. Yo optimizo la estructura del negocio, sus márgenes y su forma de captar y retener clientes.",
  },
  {
    title: "Otros profesionales",
    description:
      "Cualquier profesional que trabaje con pymes y empresas y quiera ofrecer un recurso adicional de mejora de negocio a sus clientes.",
  },
];

const aportaciones = [
  "Captar mejor y de forma más constante",
  "Organizar procesos y reducir dependencia del dueño",
  "Revisar precios, márgenes y rentabilidad real",
  "Mejorar la propuesta de valor y el posicionamiento",
  "Tomar decisiones con más criterio y menos improvisación",
  "Detectar oportunidades de mejora que no se ven desde dentro",
];

const noHacemos = [
  "No llevo contabilidad",
  "No hago impuestos ni fiscalidad",
  "No sustituyo a la gestoría ni a la asesoría",
  "No invado el área fiscal, laboral ni mercantil",
];

const procesoDerivacion = [
  {
    number: "01",
    title: "Herramienta gratuita o diagnóstico inicial",
    description:
      "El cliente puede empezar con una herramienta de autoevaluación gratuita o directamente con un diagnóstico inicial.",
  },
  {
    number: "02",
    title: "Análisis del negocio",
    description:
      "Reviso la situación real de la empresa: números, procesos, captación, precios y estructura.",
  },
  {
    number: "03",
    title: "Propuesta clara",
    description:
      "Si hay margen de mejora, hago una propuesta concreta. Si no, lo digo con la misma claridad.",
  },
  {
    number: "04",
    title: "Trabajo aplicado",
    description:
      "Si tiene sentido para ambas partes, empezamos a trabajar con un plan de acción claro, plazos y seguimiento.",
  },
];

const herramientasResumen = [
  {
    title: "Diagnóstico empresarial",
    url: "https://rentabilismo.online/",
    descripcionColaborador:
      "Tu cliente rellena un formulario rápido y obtiene una primera visión de las áreas clave de su negocio. Tú le ofreces algo útil sin coste.",
  },
  {
    title: "Cliente ideal",
    url: "https://www.avatar-rentabilismo.com/",
    descripcionColaborador:
      "Ideal para clientes que no tienen claro a quién venden o cómo diferenciarse. Un buen recurso para abrir conversación.",
  },
  {
    title: "Validación de ideas",
    url: "https://www.idea-rentabilismo.com/",
    descripcionColaborador:
      "Para clientes que están pensando en abrir algo nuevo o lanzar una línea de negocio. Les ayuda a validar antes de invertir.",
  },
];

const beneficiosColaborador = [
  {
    title: "Más valor para tu cartera",
    description:
      "Ofreces a tus clientes empresa un recurso de mejora de negocio que no pueden encontrar en una gestoría o asesoría.",
  },
  {
    title: "Mejor relación con tus clientes",
    description:
      "Cuando recomiendas algo útil, tu cliente lo recuerda. Su negocio mejora y tu relación profesional se refuerza.",
  },
  {
    title: "Profesional con recorrido",
    description:
      "Más de 25 años de experiencia, herramientas propias y un método estructurado. No es una recomendación a ciegas.",
  },
  {
    title: "Sin competencia",
    description:
      "No hago fiscalidad, contabilidad ni laboral. Nunca voy a pisar tu terreno. Complemento lo que ya haces.",
  },
];

export default function Colaboradores() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Colaboradores y profesionales con los que puedo trabajar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Muchas empresas necesitan algo más que fiscalidad, contabilidad o
            asesoría laboral. Necesitan mejorar captación, estructura,
            rentabilidad, precios, procesos y enfoque comercial. Ahí es donde
            puedo complementar tu trabajo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/#contacto" className="btn-primary">
              Solicitar reunión
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

      {/* Con qué perfiles */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Con qué perfiles colaboro
          </h2>
          <p className="section-subtitle text-gray-600">
            Trabajo con profesionales que acompañan a empresas y pymes, y que
            ven que sus clientes necesitan algo más que lo que ellos ya les
            ofrecen.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {perfiles.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-primary-200"
              >
                <h3 className="text-lg font-semibold text-primary-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué aporto */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué aporto a sus clientes
          </h2>
          <p className="section-subtitle text-gray-600">
            Ayudo a empresas y pymes a mejorar en las áreas que no cubren los
            servicios fiscales, contables o laborales.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {aportaciones.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4"
              >
                <span
                  className="mt-0.5 font-bold text-primary-600"
                  aria-hidden="true"
                >
                  &#10003;
                </span>
                <span className="text-gray-700">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué NO hago */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">Qué NO hago</h2>
          <p className="section-subtitle text-gray-600">
            Es importante dejarlo claro para que la colaboración funcione sin
            fricciones.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-3">
              {noHacemos.map((item, i) => (
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
                  Complemento ese trabajo con enfoque de mejora de negocio y
                  rentabilidad.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajo con derivados */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo trabajo con los clientes derivados
          </h2>
          <p className="section-subtitle text-gray-600">
            Un proceso simple, profesional y sin fricción para ninguna de las
            partes.
          </p>

          <div className="mt-12 space-y-6">
            {procesoDerivacion.map((paso) => (
              <div
                key={paso.number}
                className="flex gap-5 rounded-lg border border-gray-100 bg-white p-5 md:gap-6 md:p-6"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-base font-bold text-white md:h-12 md:w-12 md:text-lg">
                  {paso.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {paso.title}
                  </h3>
                  <p className="mt-1.5 text-gray-600">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas para compartir */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Herramientas que puedes compartir con tus clientes
          </h2>
          <p className="section-subtitle text-gray-600">
            Herramientas gratuitas que sirven como primer paso útil. Sin
            compromiso, sin fricción. Un recurso que puedes ofrecer a tus
            clientes empresa de forma directa.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {herramientasResumen.map((h, i) => (
              <div
                key={i}
                className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-800">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-gray-600">
                  {h.descripcionColaborador}
                </p>
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 text-center text-sm"
                >
                  Ver herramienta
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué gana el colaborador */}
      <section className="section-padding bg-primary-900">
        <div className="container-narrow">
          <h2 className="section-heading text-white">
            Qué gana el colaborador
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
            {beneficiosColaborador.map((b, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-accent-500 bg-white/10 p-5"
              >
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-gray-300">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué recomendarme */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Por qué puedes recomendarme con tranquilidad
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Experiencia real
              </h3>
              <p className="mt-2 text-gray-600">
                Más de 25 años trabajando con negocios de múltiples sectores. No
                es un profesional que acaba de empezar.
              </p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Método propio
              </h3>
              <p className="mt-2 text-gray-600">
                Trabajo con un sistema estructurado, no con improvisación. Hay
                proceso, herramientas y seguimiento.
              </p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Sin competencia
              </h3>
              <p className="mt-2 text-gray-600">
                No hago fiscalidad, contabilidad ni laboral. Nunca voy a pisar
                tu terreno.
              </p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Enfoque serio
              </h3>
              <p className="mt-2 text-gray-600">
                Sin promesas vacías, sin humo, sin lenguaje de coach. Trabajo
                aplicado a negocio real con resultados medibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Eres un profesional que trabaja con empresas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Si quieres conocer cómo podemos colaborar y qué puedo aportar a tus
            clientes empresa, solicita una reunión. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/#contacto" className="btn-primary">
              Solicitar reunión
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
              href="/metodo-herramientas"
              className="transition-colors hover:text-accent-300"
            >
              Método y herramientas →
            </a>
            <a
              href="/experiencia-sectores-casos"
              className="transition-colors hover:text-accent-300"
            >
              Experiencia y casos →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
