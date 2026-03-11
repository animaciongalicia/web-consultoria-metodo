import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Método y herramientas para mejorar la rentabilidad de tu empresa | Consultoría Método",
  description:
    "Sistema estructurado de consultoría empresarial para analizar, priorizar y mejorar la rentabilidad de pymes en A Coruña y Galicia. Herramientas gratuitas de diagnóstico y análisis de negocio.",
  alternates: {
    canonical: "https://consultoriametodo.es/metodo-herramientas",
  },
};

const fases = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Analizamos la situación real de la empresa: números, procesos, clientes, equipo, márgenes y estructura. Sin suposiciones. Con datos.",
  },
  {
    number: "02",
    title: "Detección de problemas y oportunidades",
    description:
      "Identificamos qué frena el negocio y qué oportunidades no se están aprovechando. Muchas veces el problema principal no es el que el empresario cree.",
  },
  {
    number: "03",
    title: "Plan de acción",
    description:
      "Definimos qué hacer, en qué orden y con qué recursos. Un plan concreto, no un documento de 80 páginas que nadie va a leer.",
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
      "Revisamos avances, medimos resultados y ajustamos lo que haga falta. Un negocio no se mejora con una reunión, se mejora con constancia.",
  },
];

const areasAnalisis = [
  "Captación de clientes",
  "Posicionamiento comercial",
  "Propuesta de valor",
  "Precios y márgenes",
  "Organización y procesos",
  "Rentabilidad real",
  "Dependencia del dueño",
  "Oportunidades de mejora no detectadas",
];

const herramientas = [
  {
    title: "Diagnóstico empresarial",
    url: "https://rentabilismo.online/",
    description:
      "Herramienta para revisar de forma inicial distintas áreas del negocio: ventas, organización, rentabilidad y estructura. Detecta puntos débiles y abre una primera reflexión sobre qué mejorar.",
  },
  {
    title: "Cliente ideal y propuesta comercial",
    url: "https://www.avatar-rentabilismo.com/",
    description:
      "Herramienta para definir mejor el cliente ideal, entender a quién vendes y cómo comunicar tu oferta con más precisión. Si no sabes a quién le hablas, es difícil que te escuchen.",
  },
  {
    title: "Validación de ideas de negocio",
    url: "https://www.idea-rentabilismo.com/",
    description:
      "Útil para empresarios y emprendedores que quieren validar una idea o revisar si una nueva línea de negocio tiene sentido antes de invertir tiempo o dinero.",
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
  "Es trabajo aplicado a negocio real, con seguimiento y resultados medibles",
];

export default function MetodoHerramientas() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Método y herramientas para mejorar la rentabilidad de una empresa
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Mejorar un negocio no consiste en aplicar ideas al azar. Consiste en
            analizar, priorizar y actuar con criterio. Consultoría Método trabaja con
            un enfoque estructurado para detectar problemas, encontrar oportunidades
            y aplicar mejoras reales.
          </p>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Cómo trabajamos para analizar y mejorar un negocio
          </h2>
          <p className="section-subtitle text-gray-600">
            Un proceso claro, con fases definidas y objetivos concretos en cada
            etapa.
          </p>

          <div className="mt-12 space-y-8">
            {fases.map((fase) => (
              <div key={fase.number} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {fase.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {fase.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{fase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué analizamos */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Qué analizamos en una empresa
          </h2>
          <p className="section-subtitle text-gray-600">
            Cada negocio es diferente, pero hay áreas que siempre revisamos porque
            son las que más impacto tienen en la rentabilidad.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            {areasAnalisis.map((area, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4"
              >
                <span className="mt-0.5 font-bold text-primary-600">
                  &#10003;
                </span>
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="section-heading text-gray-900">
            Herramientas que utilizamos para analizar negocios
          </h2>
          <p className="section-subtitle text-gray-600">
            Hemos desarrollado herramientas propias que permiten hacer un primer
            análisis antes de empezar a trabajar juntos. Son gratuitas y están
            pensadas para que el empresario empiece a reflexionar sobre su negocio.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {herramientas.map((h, i) => (
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
                  className="btn-primary mt-6 text-center text-sm"
                >
                  Acceder a la herramienta
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
            Además de las herramientas de análisis, desarrollamos sistemas
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
                  className="rounded-lg bg-white/10 px-4 py-3 text-center text-sm font-medium text-gray-200"
                >
                  {sector}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-gray-400">
              Se desarrollan herramientas prácticas, se piensa en captación real
              y se trabaja con soluciones orientadas a negocio.
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

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {beneficiosMetodo.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 font-bold text-primary-600">
                  &#10003;
                </span>
                <span className="md:text-lg">{b}</span>
              </li>
            ))}
          </ul>
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

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {noEs.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 font-bold text-red-500">
                  {i < noEs.length - 1 ? "✕" : "→"}
                </span>
                <span className="md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
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
            <a
              href="/"
              className="transition-colors hover:text-accent-300"
            >
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
