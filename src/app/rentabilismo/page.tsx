import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = "https://consultoriametodo.es";

export const metadata: Metadata = {
  title:
    "Método Rentabilismo — El método propio de Consultoría Método | Rentabilidad para pymes",
  description:
    "Método Rentabilismo: el sistema propio de Consultoría Método para mejorar la rentabilidad de pymes con decisiones basadas en datos, procesos claros y foco real en el beneficio. Sin humo, sin teoría vacía.",
  keywords: [
    "Método Rentabilismo",
    "qué es Rentabilismo",
    "método de consultoría empresarial",
    "mejora de rentabilidad pymes",
    "consultoría metodológica pymes",
    "sistema de mejora empresarial",
  ],
  openGraph: {
    title: "Método Rentabilismo — El método propio de Consultoría Método",
    description:
      "Sistema propio para mejorar la rentabilidad de pymes con criterio, datos y decisiones concretas.",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://consultoriametodo.es/rentabilismo",
  },
};

const definedTermJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Método Rentabilismo",
  description:
    "Sistema propio de Consultoría Método para mejorar la rentabilidad de pymes basado en cuatro principios: ir al origen del problema, decidir con criterio, priorizar rentabilidad y cero teoría vacía.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Método Rentabilismo",
    url: "https://rentabilismo.es",
  },
  url: "https://consultoriametodo.es/rentabilismo",
  sameAs: ["https://rentabilismo.es"],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://consultoriametodo.es/rentabilismo",
  name: "Método Rentabilismo",
  description:
    "Página del Método Rentabilismo — el enfoque propio de Consultoría Método para pymes en España.",
  inLanguage: "es-ES",
  mainEntity: {
    "@type": "DefinedTerm",
    name: "Método Rentabilismo",
  },
  about: { "@id": "https://consultoriametodo.es/#organization" },
  isPartOf: { "@id": "https://consultoriametodo.es/#website" },
};

export default function Rentabilismo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: `${BASE_URL}/` },
          {
            name: "Método Rentabilismo",
            url: `${BASE_URL}/rentabilismo`,
          },
        ]}
      />

      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 pt-32 lg:pt-40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Nuestro método
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Método Rentabilismo
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100/90">
            El sistema propio con el que trabajamos en Consultoría Método
            para mejorar la rentabilidad de pymes con criterio empresarial
            real. Cuatro principios, cero teoría vacía.
          </p>
        </div>
      </section>

      {/* DEFINICIÓN CANÓNICA */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            ¿Qué es el Método Rentabilismo?
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              <strong>El Método Rentabilismo</strong> es el sistema propio
              creado por Pablo García Dacosta y aplicado en Consultoría
              Método. Es un enfoque práctico de consultoría empresarial
              orientado a que una pyme <strong>gane más dinero con
              criterio</strong> — no trabajando más ni facturando más a
              cualquier precio.
            </p>
            <p>
              Se apoya en cuatro principios rectores que se aplican en
              cada proyecto, sea cual sea el sector o el tamaño de la
              empresa.
            </p>
          </div>
        </div>
      </section>

      {/* LOS 4 PRINCIPIOS */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Los 4 principios del Método Rentabilismo
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                num: "1",
                titulo: "Ir al origen del problema",
                desc: "No tapar con tiritas. Cuando algo no funciona, buscamos por qué — no ponemos parche. Un problema mal diagnosticado nunca se resuelve del todo.",
              },
              {
                num: "2",
                titulo: "Decidir con criterio",
                desc: "Con números, datos y la realidad de la empresa encima de la mesa. Ni intuición, ni prisa, ni copiar lo que hace la competencia sin entender por qué lo hace.",
              },
              {
                num: "3",
                titulo: "Priorizar la rentabilidad",
                desc: "No todo es urgente. Movemos primero lo que impacta directamente en el beneficio. El resto puede esperar.",
              },
              {
                num: "4",
                titulo: "Cero teoría vacía",
                desc: "Nada de informes que nadie lee. Cada decisión se traduce en acción concreta, con plazo, responsable y resultado medible.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="flex gap-5 rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-primary-900">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-gray-700">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS SOBRE EL MÉTODO */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Sobre el método completo
          </h2>
          <div className="mt-6 space-y-4 text-gray-700 md:text-lg">
            <p>
              El Método Rentabilismo tiene su propia web dedicada donde
              está explicado en detalle — origen, aplicaciones, formaciones,
              recursos y comunidad.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-accent-200 bg-accent-50/40 p-8 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-700">
              Web dedicada al método
            </p>
            <p className="mt-3 text-xl font-bold text-primary-900">
              rentabilismo.es
            </p>
            <p className="mt-3 text-gray-700">
              Todo sobre el Método Rentabilismo — recursos, formaciones,
              casos y comunidad.
            </p>
            <a
              href="https://rentabilismo.es"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
            >
              Ver rentabilismo.es →
            </a>
          </div>
        </div>
      </section>

      {/* CÓMO SE APLICA EN CONSULTORÍA MÉTODO */}
      <section className="section-padding bg-gray-100">
        <div className="container-narrow">
          <h2 className="text-3xl font-extrabold text-primary-900 md:text-4xl">
            Cómo aplicamos el método en Consultoría Método
          </h2>
          <p className="mt-4 text-gray-700 md:text-lg">
            En cada proyecto de consultoría empresarial, el Método
            Rentabilismo se traduce en tres actividades muy concretas:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Diagnóstico honesto",
                desc: "Analizamos el negocio sin adornos. Números reales, procesos, personas, decisiones. Al final tienes claro dónde estás y qué mover.",
              },
              {
                titulo: "Plan con prioridades",
                desc: "Un plan de acción claro con lo que aporta beneficio real primero. Sin dispersar esfuerzos ni perseguir modas.",
              },
              {
                titulo: "Ejecución acompañada",
                desc: "Reuniones periódicas para revisar avances, ajustar y decidir sobre la marcha. Presencial o por videollamada, según encaje.",
              },
            ].map((c) => (
              <div
                key={c.titulo}
                className="rounded-xl border border-primary-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary-900">
                  {c.titulo}
                </h3>
                <p className="mt-3 text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-700 md:text-lg">
            Para ver las herramientas concretas que usamos en cada fase,
            consulta{" "}
            <a
              href="/metodo-herramientas"
              className="text-accent-600 underline hover:text-accent-700"
            >
              Método y herramientas
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            ¿Quieres aplicar el Método Rentabilismo a tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100/90">
            La primera conversación es gratis, sin compromiso. 30 minutos
            para entender tu situación y decidir juntos si tiene sentido
            trabajar el método en tu caso.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
        </div>
      </section>
    </>
  );
}
