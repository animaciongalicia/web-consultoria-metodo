import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Colaboradores — Profesionales con los que trabajamos | Consultoría Método",
  description:
    "Consultoría Método complementa el trabajo de gestorías, asesorías, abogados y despachos profesionales. Colaboramos para mejorar la rentabilidad, captación y organización de sus clientes empresa.",
  alternates: {
    canonical: "https://consultoriametodo.es/colaboradores",
  },
};

const perfiles = [
  {
    title: "Gestorías",
    description:
      "Llevan la contabilidad y la fiscalidad de sus clientes. Nosotros les ayudamos a mejorar la rentabilidad, la captación y la organización del negocio.",
  },
  {
    title: "Asesorías",
    description:
      "Asesoran en materia fiscal, laboral o mercantil. Nosotros trabajamos en la mejora operativa y comercial de la empresa.",
  },
  {
    title: "Despachos laborales",
    description:
      "Gestionan nóminas, contratos y relaciones laborales. Nosotros ayudamos a que el negocio funcione mejor para que pueda sostener y hacer crecer su equipo.",
  },
  {
    title: "Abogados mercantiles",
    description:
      "Trabajan en el marco legal de la empresa. Nosotros trabajamos en la estrategia, los procesos y la rentabilidad del día a día.",
  },
  {
    title: "Consultores fiscales",
    description:
      "Optimizan la carga fiscal. Nosotros optimizamos la estructura del negocio, sus márgenes y su forma de captar y retener clientes.",
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
  "No llevamos contabilidad",
  "No hacemos impuestos ni fiscalidad",
  "No sustituimos a la gestoría ni a la asesoría",
  "No invadimos el área fiscal, laboral ni mercantil",
  "Complementamos ese trabajo con enfoque de mejora de negocio y rentabilidad",
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
      "Revisamos la situación real de la empresa: números, procesos, captación, precios y estructura.",
  },
  {
    number: "03",
    title: "Propuesta clara",
    description:
      "Si hay margen de mejora, hacemos una propuesta concreta. Si no, lo decimos con la misma claridad.",
  },
  {
    number: "04",
    title: "Trabajo aplicado",
    description:
      "Si tiene sentido para ambas partes, empezamos a trabajar con un plan de acción claro, plazos y seguimiento.",
  },
];

const herramientasColaboradores = [
  {
    title: "Diagnóstico empresarial",
    url: "https://rentabilismo.online/",
    description:
      "Herramienta gratuita para que el empresario revise las áreas clave de su negocio. Un buen primer paso antes de cualquier consulta.",
  },
  {
    title: "Cliente ideal y propuesta comercial",
    url: "https://www.avatar-rentabilismo.com/",
    description:
      "Ayuda al empresario a definir mejor a quién vende y cómo comunicar su oferta. Útil para negocios que sienten que no llegan a su público.",
  },
  {
    title: "Validación de ideas de negocio",
    url: "https://www.idea-rentabilismo.com/",
    description:
      "Para clientes que están valorando una nueva línea de negocio o una idea que quieren validar antes de invertir.",
  },
];

const beneficiosColaborador = [
  "Aporta más valor a su cartera de clientes empresa",
  "Mejora la relación con clientes al ofrecerles un recurso útil",
  "Puede ofrecer herramientas gratuitas como primer contacto",
  "Trabaja con un profesional externo con más de 25 años de experiencia",
  "Reduce el riesgo de recomendar a alguien sin método ni recorrido",
  "No compite con su servicio: complementa lo que ya hace",
];

export default function Colaboradores() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Colaboradores y profesionales con los que podemos trabajar
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Muchas empresas necesitan algo más que fiscalidad, contabilidad o
            asesoría laboral. Necesitan mejorar captación, estructura,
            rentabilidad, precios, procesos y enfoque comercial. Ahí es donde
            Consultoría Método puede complementar el trabajo de otros
            profesionales.
          </p>
        </div>
      </section>

      {/* Con qué perfiles */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Con qué perfiles colaboramos
          </h2>
          <p className="section-subtitle text-gray-600">
            Trabajamos con profesionales que acompañan a empresas y pymes, y que
            ven que sus clientes necesitan algo más que lo que ellos ya les
            ofrecen.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perfiles.map((p, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-100 bg-gray-50 p-6"
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

      {/* Qué aportamos */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué aportamos a sus clientes
          </h2>
          <p className="section-subtitle text-gray-600">
            Ayudamos a empresas y pymes a mejorar en las áreas que no cubren
            los servicios fiscales, contables o laborales.
          </p>

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {aportaciones.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 font-bold text-primary-600">
                  &#10003;
                </span>
                <span className="md:text-lg">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Qué NO hacemos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué NO hacemos
          </h2>
          <p className="section-subtitle text-gray-600">
            Es importante dejarlo claro para que la colaboración funcione sin
            fricciones.
          </p>

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {noHacemos.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 font-bold text-red-500">
                  {i < noHacemos.length - 1 ? "✕" : "→"}
                </span>
                <span className="md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cómo trabajamos con derivados */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo trabajamos con los clientes derivados
          </h2>
          <p className="section-subtitle text-gray-600">
            Un proceso simple, profesional y sin fricción para ninguna de las
            partes.
          </p>

          <div className="mt-12 space-y-8">
            {procesoDerivacion.map((paso) => (
              <div key={paso.number} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {paso.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {paso.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas para colaboradores */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Herramientas que los colaboradores pueden compartir con sus clientes
          </h2>
          <p className="section-subtitle text-gray-600">
            Herramientas gratuitas que sirven como primer paso útil, sin
            compromiso y sin fricción. Un recurso que cualquier profesional
            puede ofrecer a sus clientes empresa.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {herramientasColaboradores.map((h, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-6"
              >
                <h3 className="text-lg font-semibold text-primary-800">
                  {h.title}
                </h3>
                <p className="mt-3 flex-1 text-gray-600">{h.description}</p>
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

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {beneficiosColaborador.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="mt-0.5 font-bold text-accent-400">
                  &#10003;
                </span>
                <span className="text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Por qué recomendarnos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Por qué pueden recomendarnos con tranquilidad
          </h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Experiencia real
              </h3>
              <p className="mt-2 text-gray-600">
                Más de 25 años trabajando con negocios de múltiples sectores. No
                es un profesional que acaba de empezar.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Método propio
              </h3>
              <p className="mt-2 text-gray-600">
                Trabajamos con un sistema estructurado, no con improvisación.
                Hay proceso, herramientas y seguimiento.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50/50 p-6">
              <h3 className="font-semibold text-primary-800">
                Sin competencia
              </h3>
              <p className="mt-2 text-gray-600">
                No hacemos fiscalidad, contabilidad ni laboral. Nunca vamos a
                pisar el terreno del colaborador.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary-600 bg-primary-50/50 p-6">
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
            Si quieres conocer cómo podemos colaborar y qué podemos aportar a
            tus clientes empresa, solicita una reunión. Sin compromiso.
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
            <a
              href="/"
              className="transition-colors hover:text-accent-300"
            >
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
